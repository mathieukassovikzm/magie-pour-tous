import { ViewportScroller } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ISectionTitle } from 'src/app/models/section-title';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-section-intro',
  templateUrl: './section-intro.component.html',
  styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent implements OnInit, OnDestroy {
  @Input() titleInfos: ISectionTitle = {};

  public limiteSize = 650;
  public isUnderLimit = false;
  public resizeObservable$: Observable<Event>;
  public subscription$: Subscription = new Subscription();
  public backgroundImage: string | undefined = '';

  constructor(
    private uiService: UiService,
    private viewportScroller: ViewportScroller
  ) {
    this.resizeObservable$ = fromEvent(window, 'resize');
    var subResize = this.resizeObservable$.subscribe((evt) => {
      this.onResize();
    });
  }

  ngOnInit() {
    this.onResize();
    this.backgroundImage = this.titleInfos.backgroundImgPath;
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  setClassTitleTxt(): string {
    return `title-txt ${this.titleInfos.txtPosition}`;
  }

  goToLink() {
    this.uiService.moveSlowToId(
      this.viewportScroller,
      `${this.titleInfos?.btn?.btnLink}`
    );
  }

  onResize() {
    this.isUnderLimitSize();
  }

  isUnderLimitSize(): void {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < this.limiteSize && this.isUnderLimit === false) {
      this.isUnderLimit = true;
      this.backgroundImage = this.titleInfos.backgroundImgPathSmall;
    } else if (clientWidth > this.limiteSize && this.isUnderLimit === true) {
      this.isUnderLimit = false;
      this.backgroundImage = this.titleInfos.backgroundImgPath;
    }
  }
}
