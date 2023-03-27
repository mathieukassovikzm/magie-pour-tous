import { Component, Input, OnInit } from '@angular/core';
import { IStickerModel } from 'src/app/models/sticker';

@Component({
  selector: 'app-list-stickers',
  templateUrl: './list-stickers.component.html',
  styleUrls: ['./list-stickers.component.scss'],
})
export class ListStickersComponent implements OnInit {
  @Input() listOfStickers: IStickerModel[] = [];
  constructor() {}

  ngOnInit() {}
}
