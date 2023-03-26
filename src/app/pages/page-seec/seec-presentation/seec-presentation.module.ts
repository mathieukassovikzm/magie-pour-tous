import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeecPresentationComponent } from './seec-presentation.component';
import { SectionTitleSimpleModule } from 'src/app/shared/components/section-title/section-title-simple/section-title-simple.module';

@NgModule({
  imports: [CommonModule, SectionTitleSimpleModule],
  exports: [SeecPresentationComponent],
  declarations: [SeecPresentationComponent],
})
export class SeecPresentationModule {}
