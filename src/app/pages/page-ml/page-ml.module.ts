import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { PageMlRoutingModule } from './page-ml-routing.module';
import { PageMlComponent } from './page-ml.component';

@NgModule({
  imports: [CommonModule, PageMlRoutingModule, FooterModule],
  exports: [PageMlComponent],
  declarations: [PageMlComponent],
})
export class PageMlModule { }
