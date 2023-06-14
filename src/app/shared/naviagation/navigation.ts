import { ViewportScroller } from '@angular/common';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICustomRoute, PageHome } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

export class Navigation {
  protected uiService: UiService = inject(UiService);
  protected viewportScroller: ViewportScroller = inject(ViewportScroller);
  protected router = inject(Router);
  protected isNavOpenState = false;
  protected backgroundColor = '';
  protected lstPagesNav: ICustomRoute[] = this.uiService.lstPagesForNav;

  protected subscription$ = new Subscription();

  constructor() {
    this.backgroundColor = this.uiService.backgroundColor;
    this.isNavOpenState = this.uiService.isNavOpen;
  }

  goToTop(): void {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  navigateToAnchor(anchor?: string): void {
    this.router.navigate([PageHome.path], {
      queryParams: { anchor: anchor },
    });
  }
}
