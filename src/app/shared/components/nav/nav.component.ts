import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoutesNames } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public pageHome = RoutesNames.PageHome;
  public pageSportEnEntreprise = RoutesNames.PageSportEnEntreprise;
  public pageSportPourParticulier = RoutesNames.PageSportPourParticulier;
  public pageSportEnEcoles = RoutesNames.PageSportEnEcoles;
  public pageContact = RoutesNames.PageContact;

  public isNavOpenState = false;
  public backgroundColor = '';
  public isSmallSquare = false;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.backgroundColor = this.uiService.backgroundColor;
    this.isNavOpenState = this.uiService.isNavOpen;
  }

  ngOnInit() {}

  classMenuSquare(): string {
    return `menu-square ${this.backgroundColor}`;
  }

  classHeaderScreen(): string {
    return `header screen ${this.backgroundColor}`;
  }

  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }
}
