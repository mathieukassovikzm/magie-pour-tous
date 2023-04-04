import { Component, Input, OnInit } from '@angular/core';
import { IActivityModel } from 'src/app/models/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  @Input() activity: IActivityModel = {};

  public boolTabOpen = true;
  public ctnVignettes;

  constructor() {
    this.ctnVignettes = document.getElementsByClassName('ctn-vignette');
  }

  ngOnInit() {}

  onResize() {}

  calcHeight(): string {
    return `${this.ctnVignettes[0].clientWidth / 2}px`;
  }

  classVignette() {
    return `vignette tab-open ${this.activity.url}`;
  }
  isEntex() {
    return this.activity.title === 'Entex' ? true : false;
  }
  isFitness() {
    return this.activity.title === 'Fitness' ? true : false;
  }
  isCombat() {
    return this.activity.title === 'Combat' ? true : false;
  }
  isSportCo() {
    return this.activity.title === 'Sports collectifs' ? true : false;
  }
  isRaquette() {
    return this.activity.title === 'Sports Raquettes' ? true : false;
  }
  isOutdoor() {
    return this.activity.title === 'Sports plein air' ? true : false;
  }

  openTab() {
    if (this.boolTabOpen) {
      this.boolTabOpen = false;
    } else {
      this.boolTabOpen = true;
    }
  }
}
