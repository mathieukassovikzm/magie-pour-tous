import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent implements OnInit {
  @Input() titleInfos: any;
  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {}

  goToLink() {
    this.uiService.moveSlowToId(
      this.viewportScroller,
      `${this.titleInfos.link}`
    );
  }
}
