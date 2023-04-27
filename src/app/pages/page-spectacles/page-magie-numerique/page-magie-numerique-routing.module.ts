import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMagieNumeriqueComponent } from './page-magie-numerique.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageMagieNumeriqueComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageMagieNumeriqueRoutingModule {}
