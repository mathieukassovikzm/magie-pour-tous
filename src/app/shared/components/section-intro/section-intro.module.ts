import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIntroComponent } from './section-intro.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [SectionIntroComponent],
  declarations: [SectionIntroComponent],
})
export class SectionIntroModule {}
