import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgClubModule } from '../../svg/svg-club/svg-club.module';
import { SvgDiamondModule } from '../../svg/svg-diamond/svg-diamond.module';
import { SvgHeartModule } from '../../svg/svg-heart/svg-heart.module';
import { SvgSpadeModule } from '../../svg/svg-spade/svg-spade.module';
import { ButtonComponent } from './button.component';

const svgs = [SvgHeartModule, SvgSpadeModule, SvgDiamondModule, SvgClubModule];

@NgModule({
  imports: [CommonModule, ...svgs],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
})
export class ButtonModule {}
