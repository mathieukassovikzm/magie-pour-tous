import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SvgAddressModule } from '../../svg/svg-address/svg-address.module';
import { SvgEmailModule } from '../../svg/svg-email/svg-email.module';
import { SvgFacebookModule } from '../../svg/svg-facebook/svg-facebook.module';
import { SvgInstagramModule } from '../../svg/svg-instagram/svg-instagram.module';
import { SvgLinkedinModule } from '../../svg/svg-linkedin/svg-linkedin.module';
import { SvgPhoneModule } from '../../svg/svg-phone/svg-phone.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

const svgs = [
  SvgAddressModule,
  SvgEmailModule,
  SvgFacebookModule,
  SvgInstagramModule,
  SvgLinkedinModule,
  SvgPhoneModule,
];
@NgModule({
  imports: [CommonModule, AppRoutingModule, svgs],
  exports: [FooterComponent],
  declarations: [FooterComponent],
})
export class FooterModule {}
