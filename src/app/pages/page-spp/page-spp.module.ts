import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSppComponent } from './page-spp.component';
import { PageSppRoutingModule } from './page-spp-routing.module';

@NgModule({
  imports: [CommonModule, PageSppRoutingModule],
  exports: [PageSppComponent],
  declarations: [PageSppComponent],
})
export class PageSppModule {}
