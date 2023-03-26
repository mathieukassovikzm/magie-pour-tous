import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSeeComponent } from './page-see.component';
import { PageSeeRoutingModule } from './page-see-routing.module';

@NgModule({
  imports: [CommonModule, PageSeeRoutingModule],
  exports: [PageSeeComponent],
  declarations: [PageSeeComponent],
})
export class PageSeeModule {}
