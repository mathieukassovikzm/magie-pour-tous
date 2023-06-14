import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionCallToActionComponent } from './section-call-to-action.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [SectionCallToActionComponent],
  declarations: [SectionCallToActionComponent],
})
export class SectionCallToActionModule {}
