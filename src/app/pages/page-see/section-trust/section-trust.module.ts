import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTrustComponent } from './section-trust.component';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { ListPartnersModule } from 'src/app/shared/components/list-partners/list-partners.module';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, ListPartnersModule],
  exports: [SectionTrustComponent],
  declarations: [SectionTrustComponent],
})
export class SectionTrustModule {}
