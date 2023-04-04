import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';

@Component({
  selector: 'app-see-formules',
  templateUrl: './see-formules.component.html',
})
export class SeeFormulesComponent implements OnInit {
  public formules;
  constructor(private seeService: SeeService) {
    this.formules = this.seeService.seeListFormules;
  }

  ngOnInit() {}
}
