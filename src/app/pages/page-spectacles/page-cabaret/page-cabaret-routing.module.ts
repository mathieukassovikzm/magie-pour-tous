import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCabaretComponent } from './page-cabaret.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageCabaretComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCabaretRoutingModule {}
