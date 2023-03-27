import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSeeComponent } from './page-see.component';
import { PageSeeRoutingModule } from './page-see-routing.module';
import { SeeActiviteesModule } from './see-activitees/see-activitees.module';
import { SeeFormulesModule } from './see-formules/see-formules.module';
import { SectionTrustModule } from './section-trust/section-trust.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';

@NgModule({
  imports: [
    CommonModule,
    PageSeeRoutingModule,
    SectionIntroModule,
    SeeActiviteesModule,
    SeeFormulesModule,
    SectionTrustModule,
  ],
  exports: [PageSeeComponent],
  declarations: [PageSeeComponent],
})
export class PageSeeModule {}
