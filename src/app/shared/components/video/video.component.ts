import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit {
  @Input() videoId = '';

  constructor() {}

  ngOnInit() {}
}
