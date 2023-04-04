import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-cartoon',
  templateUrl: './btn-cartoon.component.html',
  styleUrls: ['./btn-cartoon.component.scss'],
})
export class BtnCartoonComponent implements OnInit {
  @Output() btnClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  goToLink() {
    this.btnClicked.emit('btnClicked');
  }
}
