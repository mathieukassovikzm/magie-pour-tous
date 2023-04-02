import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtnCarouselComponent } from './ctn-carousel.component';
import { CarouselSlideModule } from './carousel-slide/carousel-slide.module';

@NgModule({
  imports: [CommonModule, CarouselSlideModule],
  exports: [CtnCarouselComponent],
  declarations: [CtnCarouselComponent],
})
export class CtnCarouselModule {}
