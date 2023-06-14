import { Component, OnInit } from '@angular/core';
import {
  PageArtiste,
  PageContact,
  PageEspacePro,
  PageHome,
  PageSpectacle,
} from 'src/app/models/routes';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public titleInfos = PageHome.data!['sectionTitle']!;

  public anchorHome = PageHome.data.anchor;
  public anchorArtiste = PageArtiste.data.anchor;
  public anchorSpectacle = PageSpectacle.data.anchor;
  public anchorPromesse = PageEspacePro.data.anchor;
  public anchorContact = PageContact.data.anchor;
  constructor() {}

  ngOnInit() {}
}
