import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() {}

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
