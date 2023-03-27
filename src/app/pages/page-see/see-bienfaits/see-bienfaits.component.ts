import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';

@Component({
  selector: 'app-see-bienfaits',
  templateUrl: './see-bienfaits.component.html',
})
export class SeeBienfaitsComponent implements OnInit {
  public bienfaits;

  constructor(private seeService: SeeService) {
    this.bienfaits = this.seeService.seeListBienfaits;
  }

  ngOnInit() {}
}
