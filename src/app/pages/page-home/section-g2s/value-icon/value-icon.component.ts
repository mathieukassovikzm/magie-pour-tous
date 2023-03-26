import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-value-icon',
  templateUrl: './value-icon.component.html',
  styleUrls: ['./value-icon.component.scss'],
})
export class ValueIconComponent implements OnInit {
  @Input() value: any;
  public isHovered = false;
  public classHovered = 'hovered';
  public isHoveredSolidarity = false;
  public isHoveredShare = false;
  public isHoveredTolerance = false;
  public isHoveredConviviality = false;

  constructor(private uiService: UiService) {}

  ngOnInit() {
    this.isHoveredSolidarity = this.uiService.getIsHoveredSolidarity();
    this.isHoveredShare = this.uiService.getIsHoveredShare();
    this.isHoveredTolerance = this.uiService.getIsHoveredTolerance();
    this.isHoveredConviviality = this.uiService.getIsHoveredConviviality();
  }

  isHover() {
    if (this.value.name === 'Solidarite') {
      return this.isHoveredSolidarity;
    }
    if (this.value.name === 'Partage') {
      return this.isHoveredShare;
    }
    if (this.value.name === 'Tolerance') {
      return this.isHoveredTolerance;
    }
    if (this.value.name === 'Convivialite') {
      return this.isHoveredConviviality;
    }
    return '';
  }

  hoverIn(): void {
    if (this.value.name === 'Solidarite' && this.isHoveredSolidarity == false) {
      this.uiService.setHoveredSolidarity(true);
    }
    if (this.value.name === 'Partage' && this.isHoveredShare == false) {
      this.uiService.setHoveredShare(true);
    }
    if (this.value.name === 'Tolerance' && this.isHoveredTolerance == false) {
      this.uiService.setHoveredTolerance(true);
    }
    if (
      this.value.name === 'Convivialite' &&
      this.isHoveredConviviality == false
    ) {
      this.uiService.setHoveredConviviality(true);
    }
  }

  hoverOut(): void {
    if (this.value.name === 'Solidarite' && this.isHoveredSolidarity == true) {
      this.uiService.setHoveredSolidarity(false);
    }
    if (this.value.name === 'Partage' && this.isHoveredShare == true) {
      this.uiService.setHoveredShare(false);
    }
    if (this.value.name === 'Tolerance' && this.isHoveredTolerance == true) {
      this.uiService.setHoveredTolerance(false);
    }
    if (
      this.value.name === 'Convivialite' &&
      this.isHoveredConviviality == true
    ) {
      this.uiService.setHoveredConviviality(false);
    }
  }

  isSolidarite() {
    return this.value.name === 'Solidarite' ? true : false;
  }

  isPartage() {
    return this.value.name === 'Partage' ? true : false;
  }

  isTolerance() {
    return this.value.name === 'Tolerance' ? true : false;
  }

  isConvivialite() {
    return this.value.name === 'Convivialite' ? true : false;
  }
}
