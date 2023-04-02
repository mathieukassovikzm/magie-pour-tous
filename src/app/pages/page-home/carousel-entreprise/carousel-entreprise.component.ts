import { Component, OnInit } from '@angular/core';
import { ICarouselSlideModel } from 'src/app/models/carousel-slide';
import { SeeService } from 'src/app/services/see.service';

@Component({
  selector: 'app-carousel-entreprise',
  templateUrl: './carousel-entreprise.component.html',
  styleUrls: ['./carousel-entreprise.component.scss'],
})
export class CarouselEntrepriseComponent implements OnInit {
  public companiesSlides: ICarouselSlideModel[] = [];
  constructor(private seeService: SeeService) {
    let i = 0;
    this.companiesSlides = this.seeService.seeListPartner.map((partner) => {
      let slide = <ICarouselSlideModel>{
        index: i,
        logo: partner.logo,
        name: partner.name,
        visible: partner.visible || true,
      };
      i++;
      return slide;
    });
    console.log(this.companiesSlides);
  }

  ngOnInit() {}
}
