import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeecActiviteesComponent } from './seec-activitees.component';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { ListActivitiesModule } from 'src/app/shared/components/list-activities/list-activities.module';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, ListActivitiesModule],
  exports: [SeecActiviteesComponent],
  declarations: [SeecActiviteesComponent],
})
export class SeecActiviteesModule {}
