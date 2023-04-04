import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListTitleNavComponent } from './list-title-nav.component';
import { TitleNavModule } from './title-nav/title-nav.module';

@NgModule({
  imports: [CommonModule, TitleNavModule],
  exports: [ListTitleNavComponent],
  declarations: [ListTitleNavComponent],
})
export class ListTitleNavModule {}
