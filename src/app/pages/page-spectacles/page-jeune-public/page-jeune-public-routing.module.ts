import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageJeunePublicComponent } from './page-jeune-public.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageJeunePublicComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageJeunePublicRoutingModule {}
