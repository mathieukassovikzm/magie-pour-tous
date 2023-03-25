import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public navItems = [
    { name: 'Sport en entreprise', href: '#see' },
    //{ name: 'Echauffement musculaire', href: "#sem" },
    { name: 'Sport pour particulier', href: '#spp' },
    { name: 'A propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' },
  ];
  public limiteSize = 650;
  public isUnderLimiteSize = false;
  public wasUnderLimiteSize = false;
  public isOpened = false;
  public classCantScroll = 'cant-scroll';
  public navbar = null;
  public top = null;
  public isFixed = false;

  constructor() {
    this.wasUnderLimiteSize = this.checkLimitSize();
    this.isUnderLimiteSize = this.wasUnderLimiteSize;
    this.doneResizing();
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

  public isOpen(): string {
    return this.isOpened === true
      ? 'menu-icon is-opened'
      : 'menu-icon is-closed';
  }

  public isFixe(): string {
    return this.isFixed === true ? 'fixed-nav' : '';
  }

  openMenu() {
    // let windowWidth = document.documentElement.clientWidth;
    // if (windowWidth < this.limiteSize) {
    //   const navLinks = document.querySelectorAll('.nav-item');
    //   if (this.isOpened === true) {
    //     this.isOpened = false;
    //     navLinks.forEach((link) => {
    //       link.style.animation = `navLinkFadeOut 0.5s ease`;
    //     });
    //   } else {
    //     this.isOpened = true;
    //     navLinks.forEach((link, index) => {
    //       link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
    //         index / 7 + 0.1
    //       }s`;
    //     });
    //   }
    // }
  }

  onNavBarItemClicked() {
    this.openMenu();
  }

  doneResizing() {
    // this.isUnderLimiteSize = this.checkLimitSize();
    // // TODO: check le little bug when resize
    // if (this.isUnderLimiteSize === this.wasUnderLimiteSize) {
    //   if (this.isUnderLimiteSize === true) {
    //     this.isOpened = false;
    //   } else {
    //     this.isOpened = true;
    //   }
    // } else {
    //   if (this.isUnderLimiteSize === true) {
    //     /* enlever l'animation ici */
    //     const nav = document.getElementById('navbar');
    //     nav.style.animation = '';
    //     this.isOpened = false;
    //   } else {
    //     this.isOpened = true;
    //     const navLinks = document.querySelectorAll('.nav-item');
    //     navLinks.forEach((link) => {
    //       link.style.animation = '';
    //     });
    //   }
    // }
    // this.wasUnderLimiteSize = this.isUnderLimiteSize;
  }

  /* Check if the window is under the limiteSize
   * @returns true is window under the limiteSize, false otherwise
   */
  checkLimitSize() {
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth < this.limiteSize) {
      return true;
    } else {
      return false;
    }
  }

  /* Toggle the class to the body to forbid the scroll if the Nav is open
   * Called before and after the transition on the Nav
   */
  toggleScroll() {
    if (this.checkLimitSize()) {
      const elementBody = document.getElementsByTagName('body')[0];
      if (this.isOpened === true) {
        elementBody.classList.add(this.classCantScroll);
      } else {
        elementBody.classList.remove(this.classCantScroll);
      }
    }
  }

  onScroll() {
    //console.log(this.scrollY() > this.top)
    // if (this.scrollY() > this.top) {
    //   this.isFixed = true;
    // } else {
    //   this.isFixed = false;
    // }
  }

  scrollY() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
    return supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  }
}
