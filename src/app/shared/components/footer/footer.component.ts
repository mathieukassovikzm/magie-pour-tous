import { Component, OnInit } from '@angular/core';
import { RoutesNames } from 'src/app/models/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public pageMentionsLegales = RoutesNames.PageMentionsLegales;
  public pagePolitiqueConfidentialite =
    RoutesNames.PagePolitiqueConfidentialite;

  constructor() {}

  ngOnInit() {}

  getRouteMentionLegales(): string {
    return `../${this.pageMentionsLegales}`;
  }
  getRoutePolitiqueConfidentialite(): string {
    return `../${this.pagePolitiqueConfidentialite}`;
  }
}
