import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeBienfaitsComponent } from './see-bienfaits.component';
import { ListStickersModule } from 'src/app/shared/components/list-stickers/list-stickers.module';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, ListStickersModule],
  exports: [SeeBienfaitsComponent],
  declarations: [SeeBienfaitsComponent],
})
export class SeeBienfaitsModule {}
