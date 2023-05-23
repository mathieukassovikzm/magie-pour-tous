import { Component, OnInit } from '@angular/core';
import { LstPagesMap, Pages } from 'src/app/models/routes';

@Component({
  selector: 'app-page-artiste',
  templateUrl: './page-artiste.component.html',
  styleUrls: ['./page-artiste.component.scss'],
})
export class PageArtisteComponent implements OnInit {
  public titleInfos = LstPagesMap.get(Pages.ARTISTE)?.sectionTitle!;

  constructor() {}

  ngOnInit() {}
}
