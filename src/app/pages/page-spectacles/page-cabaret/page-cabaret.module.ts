import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCabaretComponent } from './page-cabaret.component';
import { PageCabaretRoutingModule } from './page-cabaret-routing.module';

@NgModule({
  imports: [CommonModule, PageCabaretRoutingModule],
  exports: [PageCabaretComponent],
  declarations: [PageCabaretComponent],
})
export class PageCabaretModule {}
