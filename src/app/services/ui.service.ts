import { Injectable } from '@angular/core';

const darkBackground = 'dark-background';
const lightBackground = 'light-background';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public isNavOpen = false;
  public isCookieHidden = false;
  public backgroundColor = darkBackground;
  public isHoveredSolidarity = false;
  public isHoveredShare = false;
  public isHoveredTolerance = false;
  public isHoveredConviviality = false;

  constructor() {}

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(): void {
    this.isNavOpen = false;
  }

  getIsNavOpen(): boolean {
    return this.isNavOpen;
  }

  getBackgroundColor(): string {
    return this.backgroundColor;
  }

  getIsCookieHidden(): boolean {
    return this.isCookieHidden;
  }
  setCookieHidden(value: boolean): void {
    this.isCookieHidden = value;
  }

  setHoveredSolidarity(value: boolean): void {
    this.isHoveredSolidarity = value;
    console.log(this.isHoveredSolidarity);
  }
  getIsHoveredShare(): boolean {
    return this.isHoveredShare;
  }
  setHoveredShare(value: boolean): void {
    this.isHoveredShare = value;
  }
  getIsHoveredTolerance(): boolean {
    return this.isHoveredTolerance;
  }
  setHoveredTolerance(value: boolean): void {
    this.isHoveredTolerance = value;
  }
  getIsHoveredConviviality(): boolean {
    return this.isHoveredConviviality;
  }
  setHoveredConviviality(value: boolean): void {
    this.isHoveredConviviality = value;
  }
}
