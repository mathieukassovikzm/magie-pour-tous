import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { PageHomeRoutingModule } from './page-home-routing.module';

@NgModule({
  imports: [CommonModule, PageHomeRoutingModule],
  exports: [PageHomeComponent],
  declarations: [PageHomeComponent],
})
export class PageHomeModule {}
