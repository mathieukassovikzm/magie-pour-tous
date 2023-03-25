import { Component, OnInit } from '@angular/core';
import { RoutesNames } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public isCookieHidden = false;
  public pageMentionsLegales = RoutesNames.PageMentionsLegales;
  public pagePolitiqueConfidentialite =
    RoutesNames.PagePolitiqueConfidentialite;

  constructor(private uiService: UiService) {
    this.isCookieHidden = this.uiService.getIsCookieHidden();
  }

  ngOnInit() {}
}
