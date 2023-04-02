import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { ICarouselSlideModel } from 'src/app/models/carousel-slide';
import { animationCarousel } from './animation';

@Component({
  selector: 'app-ctn-carousel',
  templateUrl: './ctn-carousel.component.html',
  styleUrls: ['./ctn-carousel.component.scss'],
  animations: [animationCarousel],
})
export class CtnCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: ICarouselSlideModel[] = [];

  public sliceLstSlide: ICarouselSlideModel[] = [];

  public currentSlide = 0;

  private nbSlidesToShow = 1;
  private slideWidth = 400;

  private autoSlides = true;
  private resizeObservable$: Observable<Event>;
  private subscription$: Subscription = new Subscription();

  constructor() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe((evt) => {
      this.onResize();
    });
    this.subscription$.add(subResize);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  buildSliceLstSlide(): void {
    // Cas normal
    // this.sliceLstSlide = _.filter(this.slides, (s) => s.index === );
    // Cas a la limite 0
    // cas a la limite this.slides.length -1
  }

  getCarouselWidth(): string {
    return `${this.slideWidth * this.nbSlidesToShow}px`;
  }

  previousSlide(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }
  nextSlide(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  onResize() {
    // this.setNbSlidesToShow();
  }

  // setNbSlidesToShow() {
  //   let windowWidth = document.documentElement.clientWidth;
  //   if (windowWidth < 900) {
  //     this.nbSlidesToShow = 1;
  //   } else if (900 < windowWidth && windowWidth < 1300) {
  //     this.nbSlidesToShow = 2;
  //   } else {
  //     this.nbSlidesToShow = 3;
  //   }
  // }

  // isVisibleSlide(): boolean {
  //   return true;
  // }
}
