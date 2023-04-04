import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListStickersModule } from 'src/app/shared/components/list-stickers/list-stickers.module';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { SeecFormulesComponent } from './seec-formules.component';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, ListStickersModule],
  exports: [SeecFormulesComponent],
  declarations: [SeecFormulesComponent],
})
export class SeecFormulesModule {}
