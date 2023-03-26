import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePcComponent } from './page-pc.component';
import { PagePcRoutingModule } from './page-pc-routing.module';

@NgModule({
  imports: [CommonModule, PagePcRoutingModule],
  exports: [PagePcComponent],
  declarations: [PagePcComponent],
})
export class PagePcModule {}
