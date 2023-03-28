import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { RoutesNames } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  public pageHome = RoutesNames.PageHome;
  public pageSportEnEntreprise = RoutesNames.PageSportEnEntreprise;
  public pageSportPourParticulier = RoutesNames.PageSportPourParticulier;
  public pageSportEnEcoles = RoutesNames.PageSportEnEcoles;
  public pageContact = RoutesNames.PageContact;

  public isNavOpenState = false;
  public backgroundColor = '';
  public isSmallSquare = false;

  public scrollObservable$: Observable<Event>;
  public scrollSubscription$: Subscription;

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

  classMenuSquare(): string {
    return `menu-square ${this.backgroundColor}`;
  }

  classHeaderScreen(): string {
    return `header screen ${this.backgroundColor}`;
  }

  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  onScroll() {
    var y = window.scrollY;
    if (y > 50 && !this.isSmallSquare) {
      this.isSmallSquare = true;
    } else if (y < 50 && this.isSmallSquare) {
      this.isSmallSquare = false;
    }
  }
}
