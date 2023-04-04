import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BurgerModule } from '../burger/burger.module';
import { NavResponsiveComponent } from './nav-responsive.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule, BurgerModule],
  exports: [NavResponsiveComponent],
  declarations: [NavResponsiveComponent],
})
export class NavResponsiveModule {}
