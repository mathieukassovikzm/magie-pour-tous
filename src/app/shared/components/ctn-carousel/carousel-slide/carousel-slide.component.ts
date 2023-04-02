import { Component, Input, OnInit } from '@angular/core';
import { ICarouselSlideModel } from 'src/app/models/carousel-slide';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
})
export class CarouselSlideComponent implements OnInit {
  @Input() dataSlide: ICarouselSlideModel = {};

  constructor() {}

  ngOnInit() {}

  getImgSrc(): string {
    return `/assets/img/section-trust/${this.dataSlide.logo}`;
  }
}
