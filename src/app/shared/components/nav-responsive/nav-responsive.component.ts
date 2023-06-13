import { transition, trigger, useAnimation } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICustomRoute } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';
import { SidebarCloseAnimation, SidebarOpenAnimation } from './animation';

const animationParams = {
  menuWidth: '100%',
  itemTranslate: '150px',
  animationStyle: '500ms ease',
};

@Component({
  selector: 'app-nav-responsive',
  templateUrl: './nav-responsive.component.html',
  styleUrls: ['./nav-responsive.component.scss'],
  animations: [
    trigger('sideMenu', [
      transition(':enter', [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
    ]),
  ],
})
export class NavResponsiveComponent implements OnInit, OnDestroy {
  public backgroundColor = '';

  public isNavOpenState$: Observable<boolean>;
  public isNavOpenState = false;
  public subscription$: Subscription = new Subscription();

  public lstPagesNav: ICustomRoute[] = this.uiService.lstPagesForNav;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.backgroundColor = this.uiService.backgroundColor;
    this.isNavOpenState$ = this.uiService.subIsNavOpen.asObservable();
  }

  ngOnInit() {
    var subNav = this.isNavOpenState$.subscribe((val) => {
      this.isNavOpenState = val;
    });
    this.subscription$.add(subNav);
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  goToLink(anchor?: string) {
    if (anchor) this.uiService.moveSlowToId(this.viewportScroller, anchor);
  }
}
