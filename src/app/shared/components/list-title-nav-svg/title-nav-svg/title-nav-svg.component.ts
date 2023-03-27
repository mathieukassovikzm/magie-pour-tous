import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-title-nav-svg',
  templateUrl: './title-nav-svg.component.html',
  styleUrls: ['./title-nav-svg.component.scss'],
})
export class TitleNavSvgComponent implements OnInit {
  @Input() titleSvg: IPageNavModel = {};

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {}

  isBienfaits() {
    return this.titleSvg.name == 'Bienfaits' ? true : false;
  }
  isFormules() {
    return this.titleSvg.name == 'Formules' ? true : false;
  }
  isActivites() {
    return this.titleSvg.name == 'Activites' ? true : false;
  }

  goToSection() {
    this.uiService.moveSlowToId(this.viewportScroller, `${this.titleSvg.link}`);
  }
}
