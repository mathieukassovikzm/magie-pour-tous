import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleBkgBlkComponent } from './section-title-bkg-blk.component';
import { SvgBannerModule } from 'src/app/shared/svg/svg-banner/svg-banner.module';

@NgModule({
  imports: [CommonModule, SvgBannerModule],
  exports: [SectionTitleBkgBlkComponent],
  declarations: [SectionTitleBkgBlkComponent],
})
export class SectionTitleBkgBlkModule {}
