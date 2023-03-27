import { Component, Input, OnInit } from '@angular/core';
import { IStickerModel } from 'src/app/models/sticker';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
})
export class StickerComponent implements OnInit {
  @Input() sticker: IStickerModel = {};

  constructor() {}

  ngOnInit() {}

  isBienEtre() {
    return this.sticker.name == 'BienEtre' ? true : false;
  }
  isProductivite() {
    return this.sticker.name == 'Productivite' ? true : false;
  }
  isRentabilite() {
    return this.sticker.name == 'Rentabilite' ? true : false;
  }
  isEntreprise() {
    return this.sticker.name == 'Entreprise' ? true : false;
  }
  isFinancier() {
    return this.sticker.name == 'Financier' ? true : false;
  }
  isOneHour() {
    return this.sticker.name == 'OneHour' ? true : false;
  }
  isMateriel() {
    return this.sticker.name == 'Materiel' ? true : false;
  }
  isDeplacement() {
    return this.sticker.name == 'Deplacement' ? true : false;
  }
  isWater() {
    return this.sticker.name == 'Water' ? true : false;
  }
  isFormation() {
    return this.sticker.name == 'Formation' ? true : false;
  }
  isSuivi() {
    return this.sticker.name == 'Suivi' ? true : false;
  }
  isAdaptation() {
    return this.sticker.name == 'Adaptation' ? true : false;
  }
}
