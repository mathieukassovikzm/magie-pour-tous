import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-see',
  templateUrl: './page-see.component.html',
  styleUrls: ['./page-see.component.scss'],
})
export class PageSeeComponent implements OnInit {
  public titleInfo = {
    h1: 'Le sport en entreprise',
    h5: '',
    link: 'title-svg-see',
  };

  constructor() {}

  ngOnInit() {}
}
