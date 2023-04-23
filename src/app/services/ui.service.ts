import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { Subject, filter } from 'rxjs';
import { IPageInfos, RoutesNames } from '../models/routes';

const darkBackground = 'dark-background';
const lightBackground = 'light-background';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public isNavOpen = false;
  public subIsNavOpen = new Subject<boolean>();

  public isCookieHidden = false;
  public backgroundColor = darkBackground;
  public isHoveredSolidarity = false;
  public isHoveredShare = false;
  public isHoveredTolerance = false;
  public isHoveredConviviality = false;

  public lstPages: IPageInfos[] = [
    <IPageInfos>{
      route: RoutesNames.PageHome,
      displayName: 'Accueil',
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageSportEnEntreprise,
      displayName: 'Spectacles',
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageSportPourParticulier,
      displayName: "L'artiste",
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageSportEnEcoles,
      displayName: 'Espace Pro',
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageContact,
      displayName: 'Contact',
      visibleInNav: true,
    },
  ];

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller
  ) {
    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        this.closeNav();
        this.moveSlowToId(viewportScroller, 'app');
      });
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
    this.subIsNavOpen.next(this.isNavOpen);
  }

  closeNav(): void {
    this.isNavOpen = false;
    this.subIsNavOpen.next(this.isNavOpen);
  }

  moveSlowToId(viewportScroller: ViewportScroller, idItem: string) {
    var item = document.getElementById(idItem);
    var fakeElt = document.getElementById('fake-elt');

    if (!!item && !!fakeElt) {
      var scrollPosition = item.offsetTop - fakeElt.clientHeight;
      viewportScroller.scrollToPosition([0, scrollPosition]);
    }
  }
}
