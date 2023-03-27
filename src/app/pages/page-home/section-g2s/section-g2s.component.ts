import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-section-g2s',
  templateUrl: './section-g2s.component.html',
  styleUrls: ['./section-g2s.component.scss'],
})
export class SectionG2sComponent implements OnInit {
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

  ngOnInit() {}

  isHover(valueName: string) {
    if (valueName === 'Solidarite') {
      return this.uiService.isHoveredSolidarity;
    }
    if (valueName === 'Partage') {
      return this.uiService.isHoveredShare;
    }
    if (valueName === 'Tolerance') {
      return this.uiService.isHoveredTolerance;
    }
    if (valueName === 'Convivialite') {
      return this.uiService.isHoveredConviviality;
    }
    return '';
  }

  hoverInSolidarity(): void {
    if (this.uiService.isHoveredSolidarity === false) {
      this.uiService.isHoveredSolidarity = true;
    }
  }

  hoverOutSolidarity(): void {
    if (this.uiService.isHoveredSolidarity === true) {
      this.uiService.isHoveredSolidarity = false;
    }
  }

  hoverInShare(): void {
    if (this.uiService.isHoveredShare === false) {
      this.uiService.isHoveredShare = true;
    }
  }

  hoverOutShare(): void {
    if (this.uiService.isHoveredShare === true) {
      this.uiService.isHoveredShare = false;
    }
  }

  hoverInTolerance(): void {
    if (this.uiService.isHoveredTolerance === false) {
      this.uiService.isHoveredTolerance = true;
    }
  }

  hoverOutTolerance(): void {
    if (this.uiService.isHoveredTolerance === true) {
      this.uiService.isHoveredTolerance = false;
    }
  }

  hoverInConviviality(): void {
    if (this.uiService.isHoveredConviviality === false) {
      this.uiService.isHoveredConviviality = true;
    }
  }

  hoverOutConviviality(): void {
    if (this.uiService.isHoveredConviviality === true) {
      this.uiService.isHoveredConviviality = false;
    }
  }
}
