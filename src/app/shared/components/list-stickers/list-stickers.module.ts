import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStickersComponent } from './list-stickers.component';
import { StickerModule } from './sticker/sticker.module';

@NgModule({
  imports: [CommonModule, StickerModule],
  exports: [ListStickersComponent],
  declarations: [ListStickersComponent],
})
export class ListStickersModule {}
