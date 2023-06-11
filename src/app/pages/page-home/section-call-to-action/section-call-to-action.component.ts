import { Component, OnInit } from '@angular/core';
import { IBtn, CardFace } from 'src/app/models/btn';

@Component({
  selector: 'app-section-call-to-action',
  templateUrl: './section-call-to-action.component.html',
  styleUrls: ['./section-call-to-action.component.scss'],
})
export class SectionCallToActionComponent implements OnInit {
  public btnInfos: IBtn = {
    cardFace: CardFace.HEART,
    btnTxt: 'Contactez-nous',
  };
  constructor() {}

  ngOnInit() {}
}
