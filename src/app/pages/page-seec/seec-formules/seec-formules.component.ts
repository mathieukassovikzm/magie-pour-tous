import { Component, OnInit } from '@angular/core';
import { SeecService } from 'src/app/services/seec.service';

@Component({
  selector: 'app-seec-formules',
  templateUrl: './seec-formules.component.html',
})
export class SeecFormulesComponent implements OnInit {
  public formules;

  constructor(private seecService: SeecService) {
    this.formules = this.seecService.seecListFormules;
  }

  ngOnInit() {}
}
