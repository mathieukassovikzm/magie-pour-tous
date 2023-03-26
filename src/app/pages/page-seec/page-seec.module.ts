import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSeecComponent } from './page-seec.component';
import { PageSeecRoutingModule } from './page-seec-routing.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { SeecPresentationModule } from './seec-presentation/seec-presentation.module';
import { SeecFormulesModule } from './seec-formules/seec-formules.module';

@NgModule({
  imports: [
    CommonModule,
    PageSeecRoutingModule,
    SectionIntroModule,
    SeecPresentationModule,
    SeecFormulesModule,
  ],
  exports: [PageSeecComponent],
  declarations: [PageSeecComponent],
})
export class PageSeecModule {}
