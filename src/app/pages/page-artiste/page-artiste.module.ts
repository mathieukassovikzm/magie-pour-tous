import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { PageArtisteRoutingModule } from './page-artiste-routing.module';
import { PageArtisteComponent } from './page-artiste.component';

@NgModule({
  imports: [
    CommonModule,
    PageArtisteRoutingModule,
    SectionIntroModule,
    FooterModule,
  ],
  exports: [PageArtisteComponent],
  declarations: [PageArtisteComponent],
})
export class PageArtisteModule {}
