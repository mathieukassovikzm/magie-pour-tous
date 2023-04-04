import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { SvgArrowsModule } from 'src/app/shared/svg/svg-arrows/svg-arrows.module';
import { SectionAboutComponent } from './section-about.component';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, SvgArrowsModule],
  exports: [SectionAboutComponent],
  declarations: [SectionAboutComponent],
})
export class SectionAboutModule {}
