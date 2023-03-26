import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-stickers',
  templateUrl: './list-stickers.component.html',
  styleUrls: ['./list-stickers.component.scss'],
})
export class ListStickersComponent implements OnInit {
  @Input() listOfStickers: any;
  constructor() {}

  ngOnInit() {}
}
