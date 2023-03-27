import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotted-line',
  templateUrl: './dotted-line.component.html',
  styleUrls: ['./dotted-line.component.scss'],
})
export class DottedLineComponent implements OnInit {
  @Input() direction = 'left';
  constructor() {}

  ngOnInit() {}

  getClassDottedLine() {
    return `dotted-line ${this.direction}`;
  }
}
