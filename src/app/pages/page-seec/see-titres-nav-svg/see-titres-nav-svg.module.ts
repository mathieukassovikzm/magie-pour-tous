import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeTitresNavSvgComponent } from './see-titres-nav-svg.component';
import { SectionTitleSimpleModule } from 'src/app/shared/components/section-title/section-title-simple/section-title-simple.module';
import { ListTitleNavSvgModule } from 'src/app/shared/components/list-title-nav-svg/list-title-nav-svg.module';

@NgModule({
  imports: [CommonModule, SectionTitleSimpleModule, ListTitleNavSvgModule],
  exports: [SeeTitresNavSvgComponent],
  declarations: [SeeTitresNavSvgComponent],
})
export class SeeTitresNavSvgModule {}
