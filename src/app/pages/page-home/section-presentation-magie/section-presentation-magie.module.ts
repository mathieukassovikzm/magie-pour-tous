import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPresentationMagieComponent } from './section-presentation-magie.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [SectionPresentationMagieComponent],
  declarations: [SectionPresentationMagieComponent],
})
export class SectionPresentationMagieModule {}
