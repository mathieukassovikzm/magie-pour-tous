import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPartnersComponent } from './list-partners.component';
import { PartnerModule } from './partner/partner.module';

@NgModule({
  imports: [CommonModule, PartnerModule],
  exports: [ListPartnersComponent],
  declarations: [ListPartnersComponent],
})
export class ListPartnersModule {}
