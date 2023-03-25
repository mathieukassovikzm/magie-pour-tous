import { Component, OnInit } from '@angular/core';
import { RoutesNames } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav-responsive',
  templateUrl: './nav-responsive.component.html',
  styleUrls: ['./nav-responsive.component.scss'],
})
export class NavResponsiveComponent implements OnInit {
  public pageHome = RoutesNames.PageHome;
  public pageSportEnEntreprise = RoutesNames.PageSportEnEntreprise;
  public pageSportPourParticulier = RoutesNames.PageSportPourParticulier;
  public pageSportEnEcoles = RoutesNames.PageSportEnEcoles;
  public pageContact = RoutesNames.PageContact;

  public isNavOpenState = false;
  public backgroundColor = '';

  constructor(private uiService: UiService) {
    this.backgroundColor = this.uiService.getBackgroundColor();
    this.isNavOpenState = this.uiService.getIsNavOpen();
  }

  ngOnInit() {}

  classNav(): string {
    return `nav nav-responsive ${this.backgroundColor}`;
  }

  classHeader(): string {
    return `header responsive ${this.backgroundColor}`;
  }

  classHeaderItemMenuImg(): string {
    return `header-item menu-img ${this.backgroundColor}`;
  }

  classHeaderItemMenuBurger(): string {
    return `header-item menu-burger ${this.backgroundColor}`;
  }

  goToTop() {
    // FunctionsMove.moveSlowToId('#app');
  }
}
