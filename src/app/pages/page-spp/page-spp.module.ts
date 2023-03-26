import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSppComponent } from './page-spp.component';
import { PageSppRoutingModule } from './page-spp-routing.module';
import { SectionTitleSimpleModule } from 'src/app/shared/components/section-title/section-title-simple/section-title-simple.module';
import { ItemSppModule } from './item-spp/item-spp.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';

@NgModule({
  imports: [
    CommonModule,
    PageSppRoutingModule,
    SectionTitleSimpleModule,
    ItemSppModule,
    SectionIntroModule,
  ],
  exports: [PageSppComponent],
  declarations: [PageSppComponent],
})
export class PageSppModule {}
