import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgArrowsModule } from 'src/app/shared/svg/svg-arrows/svg-arrows.module';
import { SectionAboutComponent } from './section-about.component';

@NgModule({
  imports: [CommonModule, SvgArrowsModule],
  exports: [SectionAboutComponent],
  declarations: [SectionAboutComponent],
})
export class SectionAboutModule {}
