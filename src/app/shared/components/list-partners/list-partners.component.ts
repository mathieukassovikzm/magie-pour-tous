import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-partners',
  templateUrl: './list-partners.component.html',
  styleUrls: ['./list-partners.component.scss'],
})
export class ListPartnersComponent implements OnInit {
  @Input() listOfPartners: any;
  constructor() {}

  ngOnInit() {}
}
