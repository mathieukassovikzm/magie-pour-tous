import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionG2sComponent } from './section-g2s.component';
import { SectionTitleSimpleModule } from 'src/app/shared/components/section-title/section-title-simple/section-title-simple.module';
import { ValueIconModule } from './value-icon/value-icon.module';

@NgModule({
  imports: [CommonModule, SectionTitleSimpleModule, ValueIconModule],
  exports: [SectionG2sComponent],
  declarations: [SectionG2sComponent],
})
export class SectionG2sModule {}
