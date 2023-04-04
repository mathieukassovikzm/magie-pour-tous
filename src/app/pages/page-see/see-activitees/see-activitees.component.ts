import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';

@Component({
  selector: 'app-see-activitees',
  templateUrl: './see-activitees.component.html',
  styleUrls: ['./see-activitees.component.scss'],
})
export class SeeActiviteesComponent implements OnInit {
  public activitees;
  constructor(private seeService: SeeService) {
    this.activitees = this.seeService.seeListActivities;
  }

  ngOnInit() {}
}
