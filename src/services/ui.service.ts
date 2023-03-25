import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isCookieHidden = false;

  constructor() {}

  getIsCookieHidden(): boolean {
    return this.isCookieHidden;
  }
  setCookieHidden(value: boolean): void {
    this.isCookieHidden = value;
  }
}
