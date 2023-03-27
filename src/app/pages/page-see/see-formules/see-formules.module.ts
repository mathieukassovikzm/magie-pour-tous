import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeFormulesComponent } from './see-formules.component';
import { ListStickersModule } from 'src/app/shared/components/list-stickers/list-stickers.module';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, ListStickersModule],
  exports: [SeeFormulesComponent],
  declarations: [SeeFormulesComponent],
})
export class SeeFormulesModule {}
