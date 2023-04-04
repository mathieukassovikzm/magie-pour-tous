import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-spp',
  templateUrl: './item-spp.component.html',
  styleUrls: ['./item-spp.component.scss'],
})
export class ItemSppComponent implements OnInit {
  @Input() elementSpp: any;
  constructor() {}

  ngOnInit() {}

  getClassImg(): string {
    return `item-spp-img-ctn spp-elt-${this.elementSpp.name}`;
  }
}
