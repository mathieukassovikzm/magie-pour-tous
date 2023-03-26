import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent implements OnInit {
  @Input() titleInfos: any;
  constructor() {}

  ngOnInit() {}

  goToLink() {
    // FunctionsMove.moveSlowToId(`#${this.titleInfos.link}`);
  }
}
