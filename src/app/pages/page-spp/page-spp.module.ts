import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { SectionTitleSimpleModule } from 'src/app/shared/components/section-title/section-title-simple/section-title-simple.module';
import { ItemSppModule } from './item-spp/item-spp.module';
import { PageSppRoutingModule } from './page-spp-routing.module';
import { PageSppComponent } from './page-spp.component';

@NgModule({
  imports: [
    CommonModule,
    PageSppRoutingModule,
    SectionTitleSimpleModule,
    ItemSppModule,
    SectionIntroModule,
    FooterModule
  ],
  exports: [PageSppComponent],
  declarations: [PageSppComponent],
})
export class PageSppModule { }
