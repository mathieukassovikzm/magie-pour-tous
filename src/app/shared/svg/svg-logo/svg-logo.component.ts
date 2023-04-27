import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-logo',
  styleUrls: ['./svg-logo.component.scss'],
  templateUrl: './svg-logo.component.html',
})
export class SvgLogoComponent implements OnInit {
  @HostBinding('class') class = 'svg-logo';

  constructor() {}

  ngOnInit() {}
}
