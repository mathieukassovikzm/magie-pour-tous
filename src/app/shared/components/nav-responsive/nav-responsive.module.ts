import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavResponsiveComponent } from './nav-responsive.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BurgerModule } from '../burger/burger.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule, BurgerModule],
  exports: [NavResponsiveComponent],
  declarations: [NavResponsiveComponent],
})
export class NavResponsiveModule {}
