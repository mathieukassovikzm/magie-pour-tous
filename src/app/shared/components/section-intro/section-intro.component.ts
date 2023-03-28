import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent implements OnInit, AfterViewInit {
  @Input() titleInfos: any;

  public isUnderLimit = false;
  public wasUnderLimit = false;
  public limiteSize = 850;
  public panel: any;
  public triangle: any;
  public triangleResponsive: any;
  public contain: any;

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  goToLink() {
    this.uiService.moveSlowToId(
      this.viewportScroller,
      `${this.titleInfos.link}`
    );
  }
}
