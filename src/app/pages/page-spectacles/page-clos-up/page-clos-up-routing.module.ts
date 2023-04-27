import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClosUpComponent } from './page-clos-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageClosUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClosUpRoutingModule {}
