import { Component, OnInit } from '@angular/core';
import { CardFace, IBtn } from 'src/app/models/btn';

@Component({
  selector: 'app-section-presentation-magie',
  templateUrl: './section-presentation-magie.component.html',
  styleUrls: ['../section-home.component.scss'],
})
export class SectionPresentationMagieComponent implements OnInit {
  public btnInfos: IBtn = {
    cardFace: CardFace.SPADE,
    btnTxt: 'En Savoir Plus',
  };
  constructor() {}

  ngOnInit() {}
}
