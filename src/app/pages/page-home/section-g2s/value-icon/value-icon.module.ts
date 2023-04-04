import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueIconComponent } from './value-icon.component';
import { SvgSolidariteModule } from 'src/app/shared/svg/svg-solidarite/svg-solidarite.module';
import { SvgPartageModule } from 'src/app/shared/svg/svg-partage/svg-partage.module';
import { SvgToleranceModule } from 'src/app/shared/svg/svg-tolerance/svg-tolerance.module';
import { SvgConvivialiteModule } from 'src/app/shared/svg/svg-convivialite/svg-convivialite.module';
import { SvgCircleModule } from 'src/app/shared/svg/svg-circle/svg-circle.module';

const svg = [
  SvgCircleModule,
  SvgSolidariteModule,
  SvgPartageModule,
  SvgToleranceModule,
  SvgConvivialiteModule,
];

@NgModule({
  imports: [CommonModule, svg],
  exports: [ValueIconComponent],
  declarations: [ValueIconComponent],
})
export class ValueIconModule {}
