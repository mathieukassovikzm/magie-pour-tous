import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { IBtn, CardFace } from 'src/app/models/btn';
import { PageSpectacle, Pages } from 'src/app/models/routes';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @HostBinding('class') class = 'app-button';
  @Input() btnInfos: IBtn = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  setClassBtnFace(): string {
    return `button button-${this.btnInfos.cardFace}`;
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
    this.router.navigate([`${PageSpectacle.path}/${this.btnInfos.btnLink}`]);
  }
}
