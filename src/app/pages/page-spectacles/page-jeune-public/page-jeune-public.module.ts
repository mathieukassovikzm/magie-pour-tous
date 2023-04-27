import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageJeunePublicComponent } from './page-jeune-public.component';
import { PageJeunePublicRoutingModule } from './page-jeune-public-routing.module';

@NgModule({
  imports: [CommonModule, PageJeunePublicRoutingModule],
  exports: [PageJeunePublicComponent],
  declarations: [PageJeunePublicComponent],
})
export class PageJeunePublicModule {}
