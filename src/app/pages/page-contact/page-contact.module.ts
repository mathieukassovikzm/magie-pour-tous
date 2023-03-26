import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContactComponent } from './page-contact.component';
import { SvgFacebookModule } from 'src/app/shared/svg/svg-facebook/svg-facebook.module';
import { SvgInstagramModule } from 'src/app/shared/svg/svg-instagram/svg-instagram.module';
import { SvgLinkedinModule } from 'src/app/shared/svg/svg-linkedin/svg-linkedin.module';
import { PageContactRoutingModule } from './page-contact-routing.module';

const svgs = [SvgFacebookModule, SvgInstagramModule, SvgLinkedinModule];
@NgModule({
  imports: [CommonModule, PageContactRoutingModule, svgs],
  exports: [PageContactComponent],
  declarations: [PageContactComponent],
})
export class PageContactModule {}
