import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleBkgImgComponent } from './section-title-bkg-img.component';
import { SvgBannerModule } from 'src/app/shared/svg/svg-banner/svg-banner.module';

@NgModule({
  imports: [CommonModule, SvgBannerModule],
  declarations: [SectionTitleBkgImgComponent],
})
export class SectionTitleBkgImgModule {}
