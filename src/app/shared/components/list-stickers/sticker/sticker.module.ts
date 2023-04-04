import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickerComponent } from './sticker.component';
import { SvgCircleModule } from 'src/app/shared/svg/svg-circle/svg-circle.module';
import { SvgBienEtreModule } from 'src/app/shared/svg/svg-bien-etre/svg-bien-etre.module';
import { SvgProductiviteModule } from 'src/app/shared/svg/svg-productivite/svg-productivite.module';
import { SvgRentabiliteModule } from 'src/app/shared/svg/svg-rentabilite/svg-rentabilite.module';
import { SvgEntrepriseModule } from 'src/app/shared/svg/svg-entreprise/svg-entreprise.module';
import { SvgFinancierModule } from 'src/app/shared/svg/svg-financier/svg-financier.module';
import { SvgOneHourModule } from 'src/app/shared/svg/svg-one-hour/svg-one-hour.module';
import { SvgMaterielModule } from 'src/app/shared/svg/svg-materiel/svg-materiel.module';
import { SvgDeplacementModule } from 'src/app/shared/svg/svg-deplacement/svg-deplacement.module';
import { SvgWaterModule } from 'src/app/shared/svg/svg-water/svg-water.module';
import { SvgCyclesModule } from 'src/app/shared/svg/svg-cycles/svg-cycles.module';
import { SvgSuiviModule } from 'src/app/shared/svg/svg-suivi/svg-suivi.module';
import { SvgFormationModule } from 'src/app/shared/svg/svg-formation/svg-formation.module';

var svgs = [
  SvgCircleModule,
  SvgBienEtreModule,
  SvgProductiviteModule,
  SvgRentabiliteModule,
  SvgEntrepriseModule,
  SvgFinancierModule,
  SvgOneHourModule,
  SvgMaterielModule,
  SvgDeplacementModule,
  SvgWaterModule,
  SvgCyclesModule,
  SvgFormationModule,
  SvgSuiviModule,
];

@NgModule({
  imports: [CommonModule, svgs],
  exports: [StickerComponent],
  declarations: [StickerComponent],
})
export class StickerModule {}
