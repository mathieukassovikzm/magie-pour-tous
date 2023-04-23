import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionG2sComponent } from './section-g2s.component';
import { ValueIconModule } from './value-icon/value-icon.module';

@NgModule({
  imports: [CommonModule, ValueIconModule],
  exports: [SectionG2sComponent],
  declarations: [SectionG2sComponent],
})
export class SectionG2sModule {}
