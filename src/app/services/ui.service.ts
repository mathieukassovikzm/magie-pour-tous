import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { filter, Subject } from 'rxjs';
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
      disponible: true,
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageSportEnEntreprise,
      displayName: 'Entreprise',
      disponible: true,
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageSportPourParticulier,
      displayName: 'Particulier',
      disponible: false,
      visibleInNav: false,
    },
    <IPageInfos>{
      route: RoutesNames.PageSportEnEcoles,
      displayName: 'Ecoles',
      disponible: true,
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageContact,
      displayName: 'Contact',
      disponible: true,
      visibleInNav: true,
    },
    <IPageInfos>{
      route: RoutesNames.PageMentionsLegales,
      displayName: 'Mentions Legales',
      disponible: true,
      visibleInNav: false,
    },
    <IPageInfos>{
      route: RoutesNames.PagePolitiqueConfidentialite,
      displayName: 'Politique Confidentialite',
      disponible: true,
      visibleInNav: false,
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
        // this.moveSlowToId(viewportScroller, 'app');
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
