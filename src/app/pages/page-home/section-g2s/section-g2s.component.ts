import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-section-g2s',
  templateUrl: './section-g2s.component.html',
  styleUrls: ['./section-g2s.component.scss'],
})
export class SectionG2sComponent implements OnInit {
  public isHoveredSolidarity = false;
  public isHoveredShare = false;
  public isHoveredTolerance = false;
  public isHoveredConviviality = false;
  public values = [
    {
      name: 'Solidarite',
      title: 'Solidarité',
    },
    {
      name: 'Partage',
      title: 'Partage',
    },
    {
      name: 'Tolerance',
      title: 'Tolérance',
    },
    {
      name: 'Convivialite',
      title: 'Convivialité',
    },
  ];
  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.isHoveredSolidarity = this.uiService.getIsHoveredSolidarity();
    this.isHoveredShare = this.uiService.getIsHoveredShare();
    this.isHoveredTolerance = this.uiService.getIsHoveredTolerance();
    this.isHoveredConviviality = this.uiService.getIsHoveredConviviality();
  }

  isHover(valueName: string) {
    if (valueName === 'Solidarite') {
      return this.isHoveredSolidarity;
    }
    if (valueName === 'Partage') {
      return this.isHoveredShare;
    }
    if (valueName === 'Tolerance') {
      return this.isHoveredTolerance;
    }
    if (valueName === 'Convivialite') {
      return this.isHoveredConviviality;
    }
    return '';
  }

  hoverInSolidarity(): void {
    if (this.isHoveredSolidarity === false) {
      this.uiService.setHoveredSolidarity(true);
    }
  }

  hoverOutSolidarity(): void {
    if (this.isHoveredSolidarity === true) {
      this.uiService.setHoveredSolidarity(false);
    }
  }

  hoverInShare(): void {
    if (this.isHoveredShare === false) {
      this.uiService.setHoveredShare(true);
    }
  }

  hoverOutShare(): void {
    if (this.isHoveredShare === true) {
      this.uiService.setHoveredShare(false);
    }
  }

  hoverInTolerance(): void {
    if (this.isHoveredTolerance === false) {
      this.uiService.setHoveredTolerance(true);
    }
  }

  hoverOutTolerance(): void {
    if (this.isHoveredTolerance === true) {
      this.uiService.setHoveredTolerance(false);
    }
  }

  hoverInConviviality(): void {
    if (this.isHoveredConviviality === false) {
      this.uiService.setHoveredConviviality(true);
    }
  }

  hoverOutConviviality(): void {
    if (this.isHoveredConviviality === true) {
      this.uiService.setHoveredConviviality(false);
    }
  }
}
