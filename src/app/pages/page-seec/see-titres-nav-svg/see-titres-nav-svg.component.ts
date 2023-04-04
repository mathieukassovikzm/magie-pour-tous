import { Component, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { SeecService } from 'src/app/services/seec.service';

@Component({
  selector: 'app-see-titres-nav-svg',
  templateUrl: './see-titres-nav-svg.component.html',
})
export class SeeTitresNavSvgComponent implements OnInit {
  public listTitle: IPageNavModel[] = [];
  constructor(private seecService: SeecService) {
    this.listTitle = this.seecService.listTitle;
  }

  ngOnInit() {}
}
