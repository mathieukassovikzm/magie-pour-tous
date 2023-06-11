import { Component, OnInit } from '@angular/core';
import { CardFace, IBtn, LstTypeBtn } from 'src/app/models/btn';
import { PageSpectacle } from 'src/app/models/routes';

@Component({
  selector: 'app-section-presentation-magie',
  templateUrl: './section-presentation-magie.component.html',
  styleUrls: ['./section-presentation-magie.component.scss'],
})
export class SectionPresentationMagieComponent implements OnInit {
  public btnInfos: IBtn = {
    cardFace: CardFace.SPADE,
    btnTxt: 'En Savoir Plus',
    btnAnchor: PageSpectacle.data.anchor,
    btnType: LstTypeBtn.ANCHOR,
  };
  constructor() {}

  ngOnInit() {}
}
