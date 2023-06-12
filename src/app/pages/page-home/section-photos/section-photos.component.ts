import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PageSpecCloseUp,
  PageSpecMagieNum,
  PageSpecCabaret,
  PageSpecJeunePublic,
  PageSpecShowGrandesIllusions,
  PageHome,
} from 'src/app/models/routes';

@Component({
  selector: 'app-section-photos',
  templateUrl: './section-photos.component.html',
  styleUrls: ['./section-photos.component.scss'],
})
export class SectionPhotosComponent implements OnInit {
  public pageSpecCloseUpPath = PageSpecCloseUp.path!;
  public pageSpecMagieNumPath = PageSpecMagieNum.path!;
  public pageSpecCabaretPath = PageSpecCabaret.path!;
  public pageSpecJeunePublicPath = PageSpecJeunePublic.path!;
  public pageSpecShowGrandesIllusionsPath = PageSpecShowGrandesIllusions.path!;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(path: string): string {
    return `${path}`;
  }
}
