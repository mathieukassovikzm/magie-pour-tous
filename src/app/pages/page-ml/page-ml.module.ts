import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMlComponent } from './page-ml.component';
import { PageMlRoutingModule } from './page-ml-routing.module';

@NgModule({
  imports: [CommonModule, PageMlRoutingModule],
  exports: [PageMlComponent],
  declarations: [PageMlComponent],
})
export class PageMlModule {}
