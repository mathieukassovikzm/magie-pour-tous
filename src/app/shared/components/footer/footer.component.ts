import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {}
  goToTop() {
    this.uiService.moveSlowToId(this.viewportScroller, `app`);
  }
}
