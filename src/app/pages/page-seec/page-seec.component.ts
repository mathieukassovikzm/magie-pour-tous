import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-seec',
  templateUrl: './page-seec.component.html',
  styleUrls: ['./page-seec.component.scss'],
})
export class PageSeecComponent implements OnInit {
  public titleInfo = {
    h1: "Le sport a l'école",
    h5: '',
    link: 'presentation',
  };

  constructor() {}

  ngOnInit() {}
}
