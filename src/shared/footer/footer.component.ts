import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/services/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public isCookieHidden = false;

  constructor(private uiService: UiService) {
    this.isCookieHidden = uiService.getIsCookieHidden();
  }

  ngOnInit() {}
}
