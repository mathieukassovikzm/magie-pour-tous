import { Component, OnInit } from '@angular/core';
import { SeecService } from 'src/app/services/seec.service';

@Component({
  selector: 'app-section-trust',
  templateUrl: './section-trust.component.html',
})
export class SectionTrustComponent implements OnInit {
  public companies;
  constructor(private seecService: SeecService) {
    this.companies = this.seecService.seecListPartner;
  }

  ngOnInit() {}
}
