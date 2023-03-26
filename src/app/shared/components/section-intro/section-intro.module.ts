import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIntroComponent } from './section-intro.component';
import { BtnCartoonModule } from '../btn-cartoon/btn-cartoon.module';

@NgModule({
  imports: [CommonModule, BtnCartoonModule],
  exports: [SectionIntroComponent],
  declarations: [SectionIntroComponent],
})
export class SectionIntroModule {}
