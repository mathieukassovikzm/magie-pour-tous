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
}
