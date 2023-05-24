import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgAddressModule } from 'src/app/shared/svg/svg-address/svg-address.module';
import { SvgEmailModule } from 'src/app/shared/svg/svg-email/svg-email.module';
import { SvgFacebookModule } from 'src/app/shared/svg/svg-facebook/svg-facebook.module';
import { SvgInstagramModule } from 'src/app/shared/svg/svg-instagram/svg-instagram.module';
import { SvgLinkedinModule } from 'src/app/shared/svg/svg-linkedin/svg-linkedin.module';
import { SvgLogoModule } from 'src/app/shared/svg/svg-logo/svg-logo.module';
import { SvgPhoneModule } from 'src/app/shared/svg/svg-phone/svg-phone.module';
import { PageContactRoutingModule } from './page-contact-routing.module';
import { PageContactComponent } from './page-contact.component';

const svgs = [
  SvgAddressModule,
  SvgEmailModule,
  SvgFacebookModule,
  SvgInstagramModule,
  SvgLinkedinModule,
  SvgPhoneModule,
  SvgLogoModule,
];

@NgModule({
  imports: [CommonModule, PageContactRoutingModule, svgs],
  exports: [PageContactComponent],
  declarations: [PageContactComponent],
})
export class PageContactModule {}
