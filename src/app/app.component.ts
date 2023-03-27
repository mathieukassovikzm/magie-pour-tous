import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoutesNames } from './models/routes';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public limiteSize = 650;
  public isUnderLimiteSize = false;
  public wasUnderLimiteSize = false;
  public classCantScroll = 'cant-scroll';
  public isSmallSquare = false;
  public classSmallSquare = 'small';
  public isNavOpenState = false;
  public backgroundColor = '';

  public pageHome = RoutesNames.PageHome;
  public pageSportEnEntreprise = RoutesNames.PageSportEnEntreprise;
  public pageSportPourParticulier = RoutesNames.PageSportPourParticulier;
  public pageSportEnEcoles = RoutesNames.PageSportEnEcoles;
  public pageContact = RoutesNames.PageContact;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.isNavOpenState = this.uiService.isNavOpen;
    this.backgroundColor = this.uiService.backgroundColor;
    // this.wasUnderLimiteSize = this.checkLimitSize();
    // this.isUnderLimiteSize = this.wasUnderLimiteSize;
    // this.doneResizing();
  }

  ngOnInit() {
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
    // this.isUnderLimiteSize = FunctionsResize.isUnderLimitSize(this.limiteSize);
    // if (this.isUnderLimiteSize !== this.wasUnderLimiteSize) {
    //   /* enlever l'animation ici */
    //   const nav = document.getElementById('nav-responsive');
    //   nav.style.animation = '';
    //   this.setToFalseNavOpen();
    // }
    // this.wasUnderLimiteSize = this.isUnderLimiteSize;
  }

  /* Toggle the class to the body to forbid the scroll if the Nav is open
   * Called before and after the transition on the Nav
   */
  toggleScroll() {
    // if (FunctionsResize.isUnderLimitSize(this.limiteSize)) {
    //   const elementBody = document.getElementsByTagName('html')[0];
    //   if (this.getNavOpenState === true) {
    //     elementBody.classList.add(this.classCantScroll);
    //   } else {
    //     elementBody.classList.remove(this.classCantScroll);
    //   }
    // }
  }

  onScroll() {
    var y = window.scrollY;
    if (y > 50 && !this.isSmallSquare) {
      this.isSmallSquare = true;
    } else if (y < 50 && this.isSmallSquare) {
      this.isSmallSquare = false;
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
  }

  afterEnter(element: any) {
    element.style.height = 'auto';
  }
}
