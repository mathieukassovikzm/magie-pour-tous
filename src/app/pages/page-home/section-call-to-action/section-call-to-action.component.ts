import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IBtn, CardFace, LstTypeBtn } from 'src/app/models/btn';
import { PageContact } from 'src/app/models/routes';

@Component({
  selector: 'app-section-call-to-action',
  templateUrl: './section-call-to-action.component.html',
  styleUrls: ['./section-call-to-action.component.scss'],
})
export class SectionCallToActionComponent implements OnInit {
  @HostBinding('class') class = 'section-special';
  public btnInfos: IBtn = {
    cardFace: CardFace.HEART,
    btnTxt: 'Contactez-nous',
    btnAnchor: PageContact.data.anchor,
    btnType: LstTypeBtn.ANCHOR,
  };
  constructor() {}

  ngOnInit() {}
}
