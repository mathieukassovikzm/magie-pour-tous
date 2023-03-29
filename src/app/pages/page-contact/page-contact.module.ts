import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { SvgFacebookModule } from 'src/app/shared/svg/svg-facebook/svg-facebook.module';
import { SvgInstagramModule } from 'src/app/shared/svg/svg-instagram/svg-instagram.module';
import { SvgLinkedinModule } from 'src/app/shared/svg/svg-linkedin/svg-linkedin.module';
import { PageContactRoutingModule } from './page-contact-routing.module';
import { PageContactComponent } from './page-contact.component';

const svgs = [SvgFacebookModule, SvgInstagramModule, SvgLinkedinModule];
@NgModule({
  imports: [CommonModule, PageContactRoutingModule, svgs, FooterModule],
  exports: [PageContactComponent],
  declarations: [PageContactComponent],
})
export class PageContactModule { }
