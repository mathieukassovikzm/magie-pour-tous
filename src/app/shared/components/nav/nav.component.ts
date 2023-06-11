import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ICustomRoute } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  public isNavOpenState = false;
  public backgroundColor = '';
  public userHasScrolled = false;

  public scrollObservable$: Observable<Event>;
  public scrollSubscription$: Subscription;

  public lstPagesNav: ICustomRoute[] = this.uiService.lstPagesForNav;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.backgroundColor = this.uiService.backgroundColor;
    this.isNavOpenState = this.uiService.isNavOpen;

    this.scrollObservable$ = fromEvent(window, 'scroll');
    this.scrollSubscription$ = this.scrollObservable$.subscribe((evt) => {
      this.onScroll();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.scrollSubscription$.unsubscribe();
  }

  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  goToLink(anchor: string) {
    this.uiService.moveSlowToId(this.viewportScroller, anchor);
  }

  onScroll() {
    var y = window.scrollY;
    if (y > 50 && !this.userHasScrolled) {
      this.userHasScrolled = true;
    } else if (y < 50 && this.userHasScrolled) {
      this.userHasScrolled = false;
    }
  }
}
