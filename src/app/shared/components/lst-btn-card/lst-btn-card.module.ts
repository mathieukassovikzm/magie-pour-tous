import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LstBtnCardComponent } from './lst-btn-card.component';
import { BtnCardModule } from '../btn-card/btn-card.module';

@NgModule({
  imports: [CommonModule, BtnCardModule],
  exports: [LstBtnCardComponent],
  declarations: [LstBtnCardComponent],
})
export class LstBtnCardModule {}
