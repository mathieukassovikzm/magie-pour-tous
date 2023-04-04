import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public titleInfo = {
    h1: 'Le sport en entreprise',
    h5: "N'allez pas plus loin nous venons à vous!",
    link: 'g2s',
  };

  constructor() {}

  ngOnInit() {}
}
