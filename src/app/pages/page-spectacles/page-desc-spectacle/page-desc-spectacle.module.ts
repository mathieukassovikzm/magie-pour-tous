import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { VideoModule } from 'src/app/shared/components/video/video.module';
import { PageDescSpectacleRoutingModule } from './page-desc-spectacle-routing.module';
import { PageDescSpectacleComponent } from './page-desc-spectacle.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    PageDescSpectacleRoutingModule,
    SectionIntroModule,
    ButtonModule,
    VideoModule,
    FooterModule,
  ],
  exports: [PageDescSpectacleComponent],
  declarations: [PageDescSpectacleComponent],
})
export class PageDescSpectacleModule {}
