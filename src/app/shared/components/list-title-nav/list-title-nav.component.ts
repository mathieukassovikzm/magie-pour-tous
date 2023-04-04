import { Component, Input, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';

@Component({
  selector: 'app-list-title-nav',
  templateUrl: './list-title-nav.component.html',
  styleUrls: ['./list-title-nav.component.scss'],
})
export class ListTitleNavComponent implements OnInit {
  @Input() listOfTitles: IPageNavModel[] = [];

  constructor() {}

  ngOnInit() {}
}
