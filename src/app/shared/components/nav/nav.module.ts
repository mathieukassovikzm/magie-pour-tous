import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SvgLogoModule } from '../../svg/svg-logo/svg-logo.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, SvgLogoModule],
  exports: [NavComponent],
  declarations: [NavComponent],
})
export class NavModule {}
