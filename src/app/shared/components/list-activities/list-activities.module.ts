import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActivitiesComponent } from './list-activities.component';
import { ActivityModule } from './activity/activity.module';

@NgModule({
  imports: [CommonModule, ActivityModule],
  exports: [ListActivitiesComponent],
  declarations: [ListActivitiesComponent],
})
export class ListActivitiesModule {}
