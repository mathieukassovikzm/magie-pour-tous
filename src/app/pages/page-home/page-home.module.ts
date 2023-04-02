import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { CarouselEntrepriseModule } from './carousel-entreprise/carousel-entreprise.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { SectionAboutModule } from './section-about/section-about.module';
import { SectionG2sModule } from './section-g2s/section-g2s.module';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    SectionG2sModule,
    SectionAboutModule,
    SectionIntroModule,
    CarouselEntrepriseModule,
    FooterModule,
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
