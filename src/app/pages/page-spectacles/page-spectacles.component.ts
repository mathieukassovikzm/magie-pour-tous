import { Component, OnInit } from '@angular/core';
import { ILstBtnCard } from 'src/app/models/btn';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-page-spectacles',
  templateUrl: './page-spectacles.component.html',
  styleUrls: ['./page-spectacles.component.scss'],
})
export class PageSpectaclesComponent implements OnInit {
  public titleInfos = LstPagesMap.get(Pages.SPECTACLES)?.sectionTitle!;
  public lstBtn: ILstBtnCard;

  constructor(private uiService: UiService) {
    this.lstBtn = uiService.lstBtnCards;
  }

  ngOnInit() {}
}
