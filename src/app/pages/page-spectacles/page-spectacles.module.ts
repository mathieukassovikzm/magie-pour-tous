import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SectionIntroModule } from 'src/app/shared/components/section-intro/section-intro.module';
import { PageSpectaclesRoutingModule } from './page-spectacles-routing.module';
import { PageSpectaclesComponent } from './page-spectacles.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PageSpectaclesRoutingModule,
    SectionIntroModule,
    FooterModule,
  ],
  exports: [PageSpectaclesComponent],
  declarations: [PageSpectaclesComponent],
})
export class PageSpectacleModule {}
