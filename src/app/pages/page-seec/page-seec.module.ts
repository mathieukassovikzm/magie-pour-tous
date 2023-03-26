import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSeecComponent } from './page-seec.component';
import { PageSeecRoutingModule } from './page-seec-routing.module';

@NgModule({
  imports: [CommonModule, PageSeecRoutingModule],
  exports: [PageSeecComponent],
  declarations: [PageSeecComponent],
})
export class PageSeecModule {}
