import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeActiviteesComponent } from './see-activitees.component';
import { SectionTitleBkgBlkModule } from 'src/app/shared/components/section-title/section-title-bkg-blk/section-title-bkg-blk.module';
import { ListActivitiesModule } from 'src/app/shared/components/list-activities/list-activities.module';

@NgModule({
  imports: [CommonModule, SectionTitleBkgBlkModule, ListActivitiesModule],
  exports: [SeeActiviteesComponent],
  declarations: [SeeActiviteesComponent],
})
export class SeeActiviteesModule {}
