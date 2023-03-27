import { Component, OnInit } from '@angular/core';
import { SeecService } from 'src/app/services/seec.service';

@Component({
  selector: 'app-seec-activitees',
  templateUrl: './seec-activitees.component.html',
  styleUrls: ['./seec-activitees.component.scss'],
})
export class SeecActiviteesComponent implements OnInit {
  public activitees;
  constructor(private seecService: SeecService) {
    this.activitees = this.seecService.seecListActivities;
  }

  ngOnInit() {}
}
