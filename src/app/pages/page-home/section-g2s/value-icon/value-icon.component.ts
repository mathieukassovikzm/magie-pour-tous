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

  constructor(private uiService: UiService) {}

  ngOnInit() {}

  isHover() {
    if (this.value.name === 'Solidarite') {
      return this.uiService.isHoveredSolidarity;
    }
    if (this.value.name === 'Partage') {
      return this.uiService.isHoveredShare;
    }
    if (this.value.name === 'Tolerance') {
      return this.uiService.isHoveredTolerance;
    }
    if (this.value.name === 'Convivialite') {
      return this.uiService.isHoveredConviviality;
    }
    return '';
  }

  hoverIn(): void {
    if (
      this.value.name === 'Solidarite' &&
      this.uiService.isHoveredSolidarity == false
    ) {
      this.uiService.isHoveredSolidarity = true;
    }
    if (
      this.value.name === 'Partage' &&
      this.uiService.isHoveredShare == false
    ) {
      this.uiService.isHoveredShare = true;
    }
    if (
      this.value.name === 'Tolerance' &&
      this.uiService.isHoveredTolerance == false
    ) {
      this.uiService.isHoveredTolerance = true;
    }
    if (
      this.value.name === 'Convivialite' &&
      this.uiService.isHoveredConviviality == false
    ) {
      this.uiService.isHoveredConviviality = true;
    }
  }

  hoverOut(): void {
    if (
      this.value.name === 'Solidarite' &&
      this.uiService.isHoveredSolidarity == true
    ) {
      this.uiService.isHoveredSolidarity = false;
    }
    if (
      this.value.name === 'Partage' &&
      this.uiService.isHoveredShare == true
    ) {
      this.uiService.isHoveredShare = false;
    }
    if (
      this.value.name === 'Tolerance' &&
      this.uiService.isHoveredTolerance == true
    ) {
      this.uiService.isHoveredTolerance = false;
    }
    if (
      this.value.name === 'Convivialite' &&
      this.uiService.isHoveredConviviality == true
    ) {
      this.uiService.isHoveredConviviality = false;
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
