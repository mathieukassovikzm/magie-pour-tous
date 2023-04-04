import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { SvgFitnessModule } from 'src/app/shared/svg/svg-fitness/svg-fitness.module';
import { SvgCombatModule } from 'src/app/shared/svg/svg-combat/svg-combat.module';
import { SvgSportCoModule } from 'src/app/shared/svg/svg-sport-co/svg-sport-co.module';
import { SvgRaquettesModule } from 'src/app/shared/svg/svg-raquettes/svg-raquettes.module';
import { SvgOutdoorModule } from 'src/app/shared/svg/svg-outdoor/svg-outdoor.module';

const svgs = [
  SvgFitnessModule,
  SvgCombatModule,
  SvgSportCoModule,
  SvgRaquettesModule,
  SvgOutdoorModule,
];

@NgModule({
  imports: [CommonModule, svgs],
  exports: [ActivityComponent],
  declarations: [ActivityComponent],
})
export class ActivityModule {}
