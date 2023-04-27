import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { PageClosUpRoutingModule } from './page-clos-up-routing.module';
import { PageClosUpComponent } from './page-clos-up.component';

@NgModule({
  imports: [
    CommonModule,
    PageClosUpRoutingModule,
    SectionIntroModule,
    FooterModule,
  ],
  exports: [PageClosUpComponent],
  declarations: [PageClosUpComponent],
})
export class PageClosUpModule {}
