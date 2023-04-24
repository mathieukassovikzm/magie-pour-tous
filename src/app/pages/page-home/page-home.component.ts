import { Component, OnInit } from '@angular/core';
import { ISectionTitle, LstPagesMap } from 'src/app/models/routes';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public titleInfos = LstPagesMap.get('pageHome')?.sectionTitle!;

  constructor() {}

  ngOnInit() {}
}
