import { Component, Input, OnInit } from '@angular/core';
import { ILstBtnCard } from 'src/app/models/btn';

@Component({
  selector: 'app-lst-btn-card',
  templateUrl: './lst-btn-card.component.html',
  styleUrls: ['./lst-btn-card.component.scss'],
})
export class LstBtnCardComponent implements OnInit {
  @Input() lstBtnCards = <ILstBtnCard>{};

  public ctnCards?: HTMLCollection;

  constructor() {}

  ngOnInit() {
    this.ctnCards = document.getElementsByClassName('ctn-card');
    console.log(this.lstBtnCards);
  }

  getClassCtnLstCard(): string {
    return `ctn-list-card ${this.lstBtnCards.direction}`;
  }
  getClassCtnCard(index: any): string {
    return `ctn-card ctn-card-${index}`;
  }

  mouseEnterCard(index: any) {
    if (index !== 0) {
      for (var i = index; i < this.ctnCards!.length; i++) {
        this.ctnCards![i].classList.add('card-hovered');
      }
    }
  }

  mouseLeaveCard(index: any) {
    for (var i = index; i < this.ctnCards!.length; i++) {
      this.ctnCards![i].classList.remove('card-hovered');
    }
  }
}
