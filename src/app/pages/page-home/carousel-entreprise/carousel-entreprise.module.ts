import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CtnCarouselModule } from 'src/app/shared/components/ctn-carousel/ctn-carousel.module';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { CarouselEntrepriseComponent } from './carousel-entreprise.component';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, CtnCarouselModule],
  exports: [CarouselEntrepriseComponent],
  declarations: [CarouselEntrepriseComponent],
})
export class CarouselEntrepriseModule {}
