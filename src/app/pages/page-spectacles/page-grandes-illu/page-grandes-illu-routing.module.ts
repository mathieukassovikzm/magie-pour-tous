import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageGrandesIlluComponent } from './page-grandes-illu.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageGrandesIlluComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGrandesIlluRoutingModule {}
