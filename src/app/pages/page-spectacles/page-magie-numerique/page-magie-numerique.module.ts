import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMagieNumeriqueComponent } from './page-magie-numerique.component';
import { PageMagieNumeriqueRoutingModule } from './page-magie-numerique-routing.module';

@NgModule({
  imports: [CommonModule, PageMagieNumeriqueRoutingModule],
  exports: [PageMagieNumeriqueComponent],
  declarations: [PageMagieNumeriqueComponent],
})
export class PageMagieNumeriqueModule {}
