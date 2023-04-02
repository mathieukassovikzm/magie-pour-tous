import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeecPresentationComponent } from './seec-presentation.component';
import { SectionTitleSimpleModule } from 'src/app/shared/components/section-title/section-title-simple/section-title-simple.module';
import { VideoModule } from 'src/app/shared/components/video/video.module';

@NgModule({
  imports: [CommonModule, SectionTitleSimpleModule, VideoModule],
  exports: [SeecPresentationComponent],
  declarations: [SeecPresentationComponent],
})
export class SeecPresentationModule {}
