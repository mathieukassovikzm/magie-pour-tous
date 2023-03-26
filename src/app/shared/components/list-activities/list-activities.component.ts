import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss'],
})
export class ListActivitiesComponent implements OnInit {
  @Input() listActivities: any;
  constructor() {}

  ngOnInit() {}
}
