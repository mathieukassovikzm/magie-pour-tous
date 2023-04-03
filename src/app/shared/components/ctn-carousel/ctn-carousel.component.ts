import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { ICarouselSlideModel } from 'src/app/models/carousel-slide';
import { animationMultipleCarousel } from './animation';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-ctn-carousel',
  templateUrl: './ctn-carousel.component.html',
  styleUrls: ['./ctn-carousel.component.scss'],
  animations: [animationMultipleCarousel],
})
export class CtnCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: ICarouselSlideModel[] = [];
  private slideWidthTotal = 400; // $slide-width + 2*$slide-side-padding

  public evolutingLstSlide: ICarouselSlideModel[] = [];

  public currentSlide = 0;

  public subNbSlidesToShow = new Subject<number>();
  private nbSlidesToShow = 1;
  private slideWidth = 400;

  private autoSlides = true;
  private delay = 3000;
  private resizeObservable$: Observable<Event>;
  private subscription$: Subscription = new Subscription();
  private interval: NodeJS.Timer | undefined;

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe((evt) => {
      this.onResize();
    });
    this.subscription$.add(subResize);

    if (this.autoSlides) {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, this.delay);
    }
  }

  ngOnInit() {
    this.onResize();
    this.evolutingLstSlide = this.slides;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    clearInterval(this.interval);
  }

  getCarouselWidth(): string {
    return `${this.slideWidth * this.nbSlidesToShow}px`;
  }

  previousSlide(): void {
    this.currentSlide--;
  }
  nextSlide(): void {
    this.currentSlide++;
  }

  onResize() {
    this.setNbSlidesToShow();
  }

  setNbSlidesToShow() {
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth < 900 && this.nbSlidesToShow != 1) {
      this.nbSlidesToShow = 1;
      this.recenterCarousel(this.nbSlidesToShow);
    } else if (
      900 < windowWidth &&
      windowWidth < 1300 &&
      this.nbSlidesToShow != 2
    ) {
      this.nbSlidesToShow = 2;
      this.recenterCarousel(this.nbSlidesToShow);
    } else if (1300 < windowWidth && this.nbSlidesToShow != 3) {
      this.nbSlidesToShow = 3;
      this.recenterCarousel(this.nbSlidesToShow);
    }
  }

  recenterCarousel(nbSlidesToShow: number) {
    const elem = document.getElementById('carousel-slide-container');
    //check if the number is even
    if (nbSlidesToShow % 2 == 0) {
      elem!.style.left = `${this.slideWidthTotal / 2}px`;
    } else {
      elem!.style.left = `auto`;
    }
  }

  isVisibleSlide(): boolean {
    return true;
  }

  onAnimationDoneEvent(event: AnimationEvent) {
    // ici on incrément
    if (event.fromState < event.toState) {
      // on récupére l'élément qui disparait
      var elt = this.evolutingLstSlide.at(0);
      // on pop l'élément du tableau car il a disparu
      this.evolutingLstSlide.shift();
      // on le rajoute a la fin
      this.evolutingLstSlide.push(elt!);
    }
    // ici on décrément
    else if (event.fromState > event.toState) {
      // on récupére l'élément qui disparait
      var elt = this.evolutingLstSlide.at(this.evolutingLstSlide.length - 1);
      // on pop l'élément du tableau car il a disparu
      this.evolutingLstSlide.pop();
      // on le rajoute a la fin
      this.evolutingLstSlide.unshift(elt!);
    }
  }
}
