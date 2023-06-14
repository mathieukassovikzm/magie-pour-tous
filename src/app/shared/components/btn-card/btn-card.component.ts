import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardFace, IBtn } from 'src/app/models/btn';

@Component({
  selector: 'app-btn-card',
  templateUrl: './btn-card.component.html',
  styleUrls: ['./btn-card.component.scss'],
})
export class BtnCardComponent implements OnInit {
  @Input() btnInfos: IBtn = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  setClassBtnFace(): string {
    return `card card-${this.btnInfos.cardFace}`;
  }

  isHeart(): boolean {
    return this.btnInfos.cardFace === CardFace.HEART;
  }
  isClub(): boolean {
    return this.btnInfos.cardFace === CardFace.CLUB;
  }
  isSpade(): boolean {
    return this.btnInfos.cardFace === CardFace.SPADE;
  }
  isDiamond(): boolean {
    return this.btnInfos.cardFace === CardFace.DIAMOND;
  }

  navigate(): void {
    // this.router.navigate([
    //   `${LstPagesMap.get(Pages.SPECTACLES)?.path}/${this.btnInfos.btnLink}`,
    // ]);
  }
}
