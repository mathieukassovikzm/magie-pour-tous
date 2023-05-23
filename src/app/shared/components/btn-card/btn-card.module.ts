import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCardComponent } from './btn-card.component';
import { SvgHeartModule } from '../../svg/svg-heart/svg-heart.module';
import { SvgSpadeModule } from '../../svg/svg-spade/svg-spade.module';
import { SvgDiamondModule } from '../../svg/svg-diamond/svg-diamond.module';
import { SvgClubModule } from '../../svg/svg-club/svg-club.module';

@NgModule({
  imports: [
    CommonModule,
    SvgHeartModule,
    SvgSpadeModule,
    SvgDiamondModule,
    SvgClubModule,
  ],
  exports: [BtnCardComponent],
  declarations: [BtnCardComponent],
})
export class BtnCardModule {}
