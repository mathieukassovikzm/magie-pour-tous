import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DottedLineModule } from '../../dotted-line/dotted-line.module';
import { TitleNavComponent } from './title-nav.component';

@NgModule({
  imports: [CommonModule, DottedLineModule],
  exports: [TitleNavComponent],
  declarations: [TitleNavComponent],
})
export class TitleNavModule {}
