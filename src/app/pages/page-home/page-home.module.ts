import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { PageHomeRoutingModule } from './page-home-routing.module';
import { SectionG2sModule } from './section-g2s/section-g2s.module';

@NgModule({
  imports: [CommonModule, PageHomeRoutingModule, SectionG2sModule],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
