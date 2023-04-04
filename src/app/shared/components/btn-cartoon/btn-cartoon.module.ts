import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgArrowsModule } from '../../svg/svg-arrows/svg-arrows.module';
import { BtnCartoonComponent } from './btn-cartoon.component';

@NgModule({
  imports: [CommonModule, SvgArrowsModule],
  exports: [BtnCartoonComponent],
  declarations: [BtnCartoonComponent],
})
export class BtnCartoonModule {}
