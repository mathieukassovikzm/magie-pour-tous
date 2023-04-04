import { Component, OnInit } from '@angular/core';
import { SeeService } from 'src/app/services/see.service';

@Component({
  selector: 'app-section-trust',
  templateUrl: './section-trust.component.html',
})
export class SectionTrustComponent implements OnInit {
  public companies;
  constructor(private seeService: SeeService) {
    this.companies = this.seeService.seeListPartner;
  }

  ngOnInit() {}
}
