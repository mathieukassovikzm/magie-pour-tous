import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTitleNavSvgComponent } from './list-title-nav-svg.component';
import { TitleNavSvgModule } from './title-nav-svg/title-nav-svg.module';

@NgModule({
  imports: [CommonModule, TitleNavSvgModule],
  exports: [ListTitleNavSvgComponent],
  declarations: [ListTitleNavSvgComponent],
})
export class ListTitleNavSvgModule {}
