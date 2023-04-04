import { Component, Input, OnInit } from '@angular/core';
import { IActivityModel } from 'src/app/models/activity';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss'],
})
export class ListActivitiesComponent implements OnInit {
  @Input() listActivities: IActivityModel[] = [];
  constructor() {}

  ngOnInit() {}
}
