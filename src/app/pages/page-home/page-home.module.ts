import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { PageHomeComponent } from './page-home.component';
import { SectionPhotosModule } from './section-photos/section-photos.module';
import { SectionPresentationMagieModule } from './section-presentation-magie/section-presentation-magie.module';
import { SectionCallToActionModule } from './section-call-to-action/section-call-to-action.module';

@NgModule({
  imports: [
    CommonModule,
    PageHomeRoutingModule,
    SectionIntroModule,
    SectionPhotosModule,
    SectionPresentationMagieModule,
    SectionCallToActionModule,
    FooterModule,
  ],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
