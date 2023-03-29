import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { PagePcRoutingModule } from './page-pc-routing.module';
import { PagePcComponent } from './page-pc.component';

@NgModule({
  imports: [CommonModule, PagePcRoutingModule, FooterModule],
  exports: [PagePcComponent],
  declarations: [PagePcComponent],
})
export class PagePcModule { }
