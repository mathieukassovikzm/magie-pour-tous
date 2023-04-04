import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgBienEtreModule } from 'src/app/shared/svg/svg-bien-etre/svg-bien-etre.module';
import { SvgCircleModule } from 'src/app/shared/svg/svg-circle/svg-circle.module';
import { SvgCombatModule } from 'src/app/shared/svg/svg-combat/svg-combat.module';
import { SvgCyclesModule } from 'src/app/shared/svg/svg-cycles/svg-cycles.module';
import { SvgDeplacementModule } from 'src/app/shared/svg/svg-deplacement/svg-deplacement.module';
import { SvgEntrepriseModule } from 'src/app/shared/svg/svg-entreprise/svg-entreprise.module';
import { SvgFinancierModule } from 'src/app/shared/svg/svg-financier/svg-financier.module';
import { SvgFitnessModule } from 'src/app/shared/svg/svg-fitness/svg-fitness.module';
import { SvgFormationModule } from 'src/app/shared/svg/svg-formation/svg-formation.module';
import { SvgMaterielModule } from 'src/app/shared/svg/svg-materiel/svg-materiel.module';
import { SvgOneHourModule } from 'src/app/shared/svg/svg-one-hour/svg-one-hour.module';
import { SvgOutdoorModule } from 'src/app/shared/svg/svg-outdoor/svg-outdoor.module';
import { SvgProductiviteModule } from 'src/app/shared/svg/svg-productivite/svg-productivite.module';
import { SvgRaquettesModule } from 'src/app/shared/svg/svg-raquettes/svg-raquettes.module';
import { SvgRentabiliteModule } from 'src/app/shared/svg/svg-rentabilite/svg-rentabilite.module';
import { SvgSportCoModule } from 'src/app/shared/svg/svg-sport-co/svg-sport-co.module';
import { SvgSuiviModule } from 'src/app/shared/svg/svg-suivi/svg-suivi.module';
import { SvgWaterModule } from 'src/app/shared/svg/svg-water/svg-water.module';
import { DottedLineModule } from '../../dotted-line/dotted-line.module';
import { TitleNavSvgComponent } from './title-nav-svg.component';

const svgs = [
  SvgCircleModule,
  DottedLineModule,
  SvgBienEtreModule,
  SvgProductiviteModule,
  SvgRentabiliteModule,
  SvgEntrepriseModule,
  SvgFinancierModule,
  SvgOneHourModule,
  SvgMaterielModule,
  SvgDeplacementModule,
  SvgWaterModule,
  SvgFitnessModule,
  SvgCombatModule,
  SvgSportCoModule,
  SvgRaquettesModule,
  SvgOutdoorModule,
  SvgCyclesModule,
  SvgFormationModule,
  SvgSuiviModule,
];
@NgModule({
  imports: [CommonModule, svgs],
  exports: [TitleNavSvgComponent],
  declarations: [TitleNavSvgComponent],
})
export class TitleNavSvgModule {}
