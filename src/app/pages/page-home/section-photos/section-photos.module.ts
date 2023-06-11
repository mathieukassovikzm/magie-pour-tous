import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgClubModule } from 'src/app/shared/svg/svg-club/svg-club.module';
import { SvgDiamondModule } from 'src/app/shared/svg/svg-diamond/svg-diamond.module';
import { SvgHeartModule } from 'src/app/shared/svg/svg-heart/svg-heart.module';
import { SvgSpadeModule } from 'src/app/shared/svg/svg-spade/svg-spade.module';
import { SectionPhotosComponent } from './section-photos.component';

const svgs = [SvgHeartModule, SvgSpadeModule, SvgDiamondModule, SvgClubModule];

@NgModule({
  imports: [CommonModule, ...svgs],
  exports: [SectionPhotosComponent],
  declarations: [SectionPhotosComponent],
})
export class SectionPhotosModule {}
