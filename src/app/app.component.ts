import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, tap } from 'rxjs';
import { RoutesNames } from './models/routes';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public limiteSize = 650;
  public classCantScroll = 'cant-scroll';
  public backgroundColor = '';

  public pageHome = RoutesNames.PageHome;
  public pageSportEnEntreprise = RoutesNames.PageSportEnEntreprise;
  public pageSportPourParticulier = RoutesNames.PageSportPourParticulier;
  public pageSportEnEcoles = RoutesNames.PageSportEnEcoles;
  public pageContact = RoutesNames.PageContact;

  public resizeObservable$: Observable<Event>;
  public subscription$: Subscription = new Subscription();

  public isUnderLimit = false;
  public isNavOpenState = false;
  public isNavOpenState$: Observable<boolean>;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.isNavOpenState = this.uiService.isNavOpen;
    this.backgroundColor = this.uiService.backgroundColor;

    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe((evt) => {
      this.onResize();
    });
    this.subscription$.add(subResize);

    this.isNavOpenState$ = this.uiService.subIsNavOpen.asObservable().pipe(
      tap((valNavOpen) => {
        if (this.isUnderLimit) {
          const elementBody = document.getElementsByTagName('html')[0];
          if (valNavOpen === true) {
            elementBody.classList.add(this.classCantScroll);
          } else {
            elementBody.classList.remove(this.classCantScroll);
          }
        }
      })
    );

    var subNav = this.isNavOpenState$.subscribe();
    this.subscription$.add(subNav);

    // this.wasUnderLimiteSize = this.checkLimitSize();
    // this.isUnderLimiteSize = this.wasUnderLimiteSize;
    // this.doneResizing();
  }

  ngOnInit() {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize) {
      this.isUnderLimit = true;
      this.isUnderLimit = true;
    } else if (clientWidth > this.limiteSize) {
      this.isUnderLimit = false;
      this.isUnderLimit = false;
    }

    // this.$nextTick(function () {
    //   var resizeId;
    //   window.addEventListener('resize', () => {
    //     clearTimeout(resizeId);
    //     resizeId = setTimeout(this.doneResizing, 500);
    //   });
    // });
    // this.navbar = $('#navbar');
    // this.top = this.navbar.offset().top + this.scrollY();
    // document.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  openMenu() {
    // let windowWidth = document.documentElement.clientWidth;
    // if (windowWidth < this.limiteSize) {
    //   const navLinks = document.querySelectorAll('.nav-item-responsive');
    //   // If the menu just closed => Fadeout, else FadeIn
    //   if (this.getNavOpenState === false) {
    //     navLinks.forEach((link) => {
    //       link.style.animation = `navLinkFadeOut 0.5s ease`;
    //     });
    //   } else {
    //     navLinks.forEach((link, index) => {
    //       link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
    //         index / 7 + 0.1
    //       }s`;
    //     });
    //   }
    // }
  }

  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  linkClicked(idLinkClicked: number) {
    // if (FunctionsResize.isUnderLimitSize(this.limiteSize)) {
    //   this.setToFalseNavOpen();
    // }
    // $('html,body').animate(
    //   {
    //     scrollTop: $(idLinkClicked).offset().top - $('#fake-elt').height(),
    //   },
    //   'slow'
    // );
  }

  onNavBarItemClicked() {
    this.openMenu();
  }

  onResize() {
    this.isUnderLimitSize();
    // this.isUnderLimiteSize = FunctionsResize.isUnderLimitSize(this.limiteSize);
    // if (this.isUnderLimiteSize !== this.wasUnderLimiteSize) {
    //   /* enlever l'animation ici */
    //   const nav = document.getElementById('nav-responsive');
    //   nav.style.animation = '';
    //   this.setToFalseNavOpen();
    // }
    // this.wasUnderLimiteSize = this.isUnderLimiteSize;
  }

  isUnderLimitSize(): void {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize && this.isUnderLimit === false) {
      this.isUnderLimit = true;
    } else if (clientWidth > this.limiteSize && this.isUnderLimit === true) {
      this.isUnderLimit = false;
    }
  }

  beforeLeave(element: any) {
    // this.prevHeight = getComputedStyle(element).height;
  }

  enter(element: any) {
    // const { height } = getComputedStyle(element);
    // element.style.height = this.prevHeight;
    // setTimeout(() => {
    //   element.style.height = height;
    // });
    // FunctionsMove.moveFastToId('#app');
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }

  afterEnter(element: any) {
    element.style.height = 'auto';
  }
}

/* Toggle the class to the body to forbid the scroll if the Nav is open
 * Called before and after the transition on the Nav
 */
// toggleScroll() {
//   if (this.isUnderLimit) {
//     const elementBody = document.getElementsByTagName('html')[0];
//     console.log(elementBody);
//     if (this.uiService.isNavOpen === true) {
//       elementBody.classList.add(this.classCantScroll);
//     } else {
//       elementBody.classList.remove(this.classCantScroll);
//     }
//   }
// }
