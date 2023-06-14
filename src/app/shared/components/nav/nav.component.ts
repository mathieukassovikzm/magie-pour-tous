import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ICustomRoute } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';
import { Navigation } from '../../naviagation/navigation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent extends Navigation implements OnInit, OnDestroy {
  public userHasScrolled = false;

  public scrollObservable$: Observable<Event>;

  constructor() {
    super();

    this.scrollObservable$ = fromEvent(window, 'scroll');
    this.subscription$ = this.scrollObservable$.subscribe((evt) => {
      this.onScroll();
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription$.unsubscribe();
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
