import { AnimationEvent } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  Observable,
  Subscription,
  filter,
  fromEvent,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { sliderAnimation } from './animation';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [sliderAnimation],
})
export class AppComponent implements OnInit, OnDestroy {
  public limiteSize = 650;
  public classCantScroll = 'cant-scroll';
  public backgroundColor = '';
  public resizeObservable$: Observable<Event>;
  public subscription$: Subscription = new Subscription();

  public isUnderLimit = false;
  public isNavOpenState = false;
  public isNavOpenState$: Observable<boolean>;

  public oldAnimationState: number | undefined = undefined;

  public prevHeight = '';

  private apiLoaded = false;

  public currentPageUrl: string | undefined = '';

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isNavOpenState = this.uiService.isNavOpen;
    this.backgroundColor = this.uiService.backgroundColor;

    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe((evt) => {
      this.onResize();
    });
    this.subscription$.add(subResize);

    this.isNavOpenState$ = this.uiService.subIsNavOpen.asObservable().pipe(
      tap((valNavOpen) => {
        if (this.isUnderLimit) {
          const elementBody = document.getElementsByTagName('html')[0];
          if (valNavOpen === true) {
            elementBody.classList.add(this.classCantScroll);
          } else {
            elementBody.classList.remove(this.classCantScroll);
          }
        }
      })
    );

    var subNav = this.isNavOpenState$.subscribe();
    this.subscription$.add(subNav);

    var routerSub = this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => (<NavigationEnd>e)?.url),
        tap(
          (url) => (this.currentPageUrl = url?.split('?')[0].split('/').pop()) // On récupère la dernière partie de l'url
        ),
        map(() => this.activatedRoute.queryParams),
        switchMap((params) => params!),
        tap((params) => {
          var anchor = params['anchor'];
          if (anchor) {
            // on rajoute un delay de 550ms parce que l'animation in/out router dure 500ms
            setTimeout(() => {
              this.goToAnchor(anchor);
            }, 550);
          } else {
            this.goToAnchor('app');
          }
        })
      )
      .subscribe();
    this.subscription$.add(routerSub);
  }

  ngOnInit() {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize) {
      this.isUnderLimit = true;
      this.isUnderLimit = true;
    } else if (clientWidth > this.limiteSize) {
      this.isUnderLimit = false;
      this.isUnderLimit = false;
    }

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  goToAnchor(anchor?: string): void {
    if (anchor) this.uiService.moveSlowToId(this.viewportScroller, anchor);
  }

  onResize() {
    this.isUnderLimitSize();
  }

  isUnderLimitSize(): void {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize && this.isUnderLimit === false) {
      this.isUnderLimit = true;
    } else if (clientWidth > this.limiteSize && this.isUnderLimit === true) {
      this.isUnderLimit = false;
    }
  }

  onAnimationEnterEvent(event: AnimationEvent) {
    this.prevHeight = getComputedStyle(event.element).height;
  }

  onAnimationDoneEvent(event: AnimationEvent) {
    if (event.toState == 'ActivatedRoute') {
      const { height } = getComputedStyle(event?.element);
      event.element.style.height = this.prevHeight;
      setTimeout(() => {
        event.element.style.height = height;
      });
    }
  }
}
