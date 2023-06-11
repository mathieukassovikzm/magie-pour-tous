import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { Subject, filter } from 'rxjs';
import { CardFace, IBtn, ILstBtnCard, LstCardDirection } from '../models/btn';
import {
  ICustomRoute,
  PageHome,
  PageSpecCabaret,
  PageSpecCloseUp,
  PageSpecJeunePublic,
  PageSpecMagieNum,
  PageSpecShowGrandesIllusions,
} from '../models/routes';

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

  public lstPages: ICustomRoute[] = [PageHome];

  public btnSpecClosup: IBtn = {
    btnTxt: PageSpecCloseUp.data!['displayName'],
    btnLink: PageSpecCloseUp.path,
    cardFace: CardFace.SPADE,
    value: 'A',
  };
  public btnSpecCabaret: IBtn = {
    btnTxt: PageSpecCabaret.data!['displayName'],
    btnLink: PageSpecCabaret.path,
    cardFace: CardFace.HEART,
    value: 'A',
  };
  public btnSpecMagieNum: IBtn = {
    btnTxt: 'Magie Digital',
    btnLink: PageSpecMagieNum.path,
    cardFace: CardFace.DIAMOND,
    value: 'A',
  };
  public btnSpecEnfants: IBtn = {
    btnTxt: 'Jeune public',
    btnLink: PageSpecJeunePublic.path,
    cardFace: CardFace.CLUB,
    value: 'A',
  };
  public btnSpecGrandesIllu: IBtn = {
    btnTxt: PageSpecShowGrandesIllusions.data!['displayName'],
    btnLink: PageSpecShowGrandesIllusions.path,
    cardFace: CardFace.CLUB,
    value: 'A',
  };

  public lstBtnCards = <ILstBtnCard>{
    lstBtnCard: [],
    direction: LstCardDirection.HORIZONTAL,
  };

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller
  ) {
    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        this.closeNav();
        // this.moveSlowToId(viewportScroller, 'app'); // TODO a décomenter
      });

    this.lstBtnCards.lstBtnCard.push(this.btnSpecClosup);
    this.lstBtnCards.lstBtnCard.push(this.btnSpecCabaret);
    this.lstBtnCards.lstBtnCard.push(this.btnSpecMagieNum);
    this.lstBtnCards.lstBtnCard.push(this.btnSpecEnfants);
    this.lstBtnCards.lstBtnCard.push(this.btnSpecGrandesIllu);
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
