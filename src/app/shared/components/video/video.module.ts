import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [CommonModule, YouTubePlayerModule],
  exports: [VideoComponent],
  declarations: [VideoComponent],
})
export class VideoModule {}
