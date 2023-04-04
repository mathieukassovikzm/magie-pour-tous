import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { PageSeeRoutingModule } from './page-see-routing.module';
import { PageSeeComponent } from './page-see.component';
import { SectionTrustModule } from './section-trust/section-trust.module';
import { SeeActiviteesModule } from './see-activitees/see-activitees.module';
import { SeeBienfaitsModule } from './see-bienfaits/see-bienfaits.module';
import { SeeFormulesModule } from './see-formules/see-formules.module';
import { SeeTitresNavSvgModule } from './see-titres-nav-svg/see-titres-nav-svg.module';

@NgModule({
  imports: [
    CommonModule,
    PageSeeRoutingModule,
    SectionIntroModule,
    SeeActiviteesModule,
    SeeFormulesModule,
    SeeBienfaitsModule,
    SectionTrustModule,
    SeeTitresNavSvgModule,
    FooterModule
  ],
  exports: [PageSeeComponent],
  declarations: [PageSeeComponent],
})
export class PageSeeModule { }
