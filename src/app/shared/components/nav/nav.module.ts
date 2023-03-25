import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  exports: [NavComponent],
  declarations: [NavComponent],
})
export class NavModule {}
