import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { PageSeecRoutingModule } from './page-seec-routing.module';
import { PageSeecComponent } from './page-seec.component';
import { SectionTrustModule } from './section-trust/section-trust.module';
import { SeecActiviteesModule } from './seec-activitees/seec-activitees.module';
import { SeecFormulesModule } from './seec-formules/seec-formules.module';
import { SeecPresentationModule } from './seec-presentation/seec-presentation.module';

@NgModule({
  imports: [
    CommonModule,
    PageSeecRoutingModule,
    SectionIntroModule,
    SeecPresentationModule,
    SeecFormulesModule,
    SeecActiviteesModule,
    SectionTrustModule,
    FooterModule
  ],
  exports: [PageSeecComponent],
  declarations: [PageSeecComponent],
})
export class PageSeecModule { }
