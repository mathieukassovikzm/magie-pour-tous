import { Component, OnInit } from '@angular/core';
import { LstPagesMap, Pages } from 'src/app/models/routes';

@Component({
  selector: 'app-page-spectacles',
  templateUrl: './page-spectacles.component.html',
  styleUrls: ['./page-spectacles.component.scss'],
})
export class PageSpectaclesComponent implements OnInit {
  public titleInfos = LstPagesMap.get(Pages.SPECTACLES)?.sectionTitle!;

  constructor() {}

  ngOnInit() {}
}
