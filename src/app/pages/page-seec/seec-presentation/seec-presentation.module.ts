import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { VideoModule } from 'src/app/shared/components/video/video.module';
import { SeecPresentationComponent } from './seec-presentation.component';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, VideoModule],
  exports: [SeecPresentationComponent],
  declarations: [SeecPresentationComponent],
})
export class SeecPresentationModule {}
