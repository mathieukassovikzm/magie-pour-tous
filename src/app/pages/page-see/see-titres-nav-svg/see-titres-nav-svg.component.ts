import { Component, OnInit } from '@angular/core';
import { IPageNavModel } from 'src/app/models/pageNav';
import { SeeService } from 'src/app/services/see.service';

@Component({
  selector: 'app-see-titres-nav-svg',
  templateUrl: './see-titres-nav-svg.component.html',
})
export class SeeTitresNavSvgComponent implements OnInit {
  public listTitle: IPageNavModel[] = [];
  constructor(private seeService: SeeService) {
    this.listTitle = this.seeService.listTitle;
  }

  ngOnInit() {}
}
