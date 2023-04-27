import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGrandesIlluComponent } from './page-grandes-illu.component';
import { PageGrandesIlluRoutingModule } from './page-grandes-illu-routing.module';

@NgModule({
  imports: [CommonModule, PageGrandesIlluRoutingModule],
  exports: [PageGrandesIlluComponent],
  declarations: [PageGrandesIlluComponent],
})
export class PageGrandesIlluModule {}
