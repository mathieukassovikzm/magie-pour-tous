import { Component, Input, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';

@Component({
  selector: 'app-list-title-nav-svg',
  templateUrl: './list-title-nav-svg.component.html',
  styleUrls: ['./list-title-nav-svg.component.scss'],
})
export class ListTitleNavSvgComponent implements OnInit {
  @Input() listOfTitles: IPageNavModel[] = [];

  constructor() {}

  ngOnInit() {}
}
