import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { Subject, filter } from 'rxjs';
import { IPageInfos, LstPagesMap, Pages } from '../models/routes';
import { IBtn, CardFace, ILstBtnCard, LstCardDirection } from '../models/btn';

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

  public lstPages: IPageInfos[] = [];

  public btnSpecClosup: IBtn = {
    btnTxt: LstPagesMap.get(Pages.SPECCLOSUP)?.displayName,
    btnLink: LstPagesMap.get(Pages.SPECCLOSUP)?.route,
    cardFace: CardFace.SPADE,
    value: 'A',
  };
  public btnSpecCabaret: IBtn = {
    btnTxt: LstPagesMap.get(Pages.SPECCABARET)?.displayName,
    btnLink: LstPagesMap.get(Pages.SPECCABARET)?.route,
    cardFace: CardFace.HEART,
    value: 'A',
  };
  public btnSpecMagieNum: IBtn = {
    btnTxt: 'Magie Digital',
    btnLink: LstPagesMap.get(Pages.SPECMAGIENUM)?.route,
    cardFace: CardFace.DIAMOND,
    value: 'A',
  };
  public btnSpecEnfants: IBtn = {
    btnTxt: 'Jeune public',
    btnLink: LstPagesMap.get(Pages.SPECENFANTS)?.route,
    cardFace: CardFace.CLUB,
    value: 'A',
  };
  public btnSpecGrandesIllu: IBtn = {
    btnTxt: LstPagesMap.get(Pages.SPECGRANDESILLU)?.displayName,
    btnLink: LstPagesMap.get(Pages.SPECGRANDESILLU)?.route,
    cardFace: CardFace.CLUB,
    value: 'A',
  };

  public lstBtnCards = <ILstBtnCard>{
    lstBtnCard: [],
    direction: LstCardDirection.VERTICAL,
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

    LstPagesMap.forEach((value: IPageInfos, key: Pages) => {
      this.lstPages.push(value);
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
