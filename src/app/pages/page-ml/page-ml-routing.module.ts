import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMlComponent } from './page-ml.component';

const routes: Routes = [
  {
    path: '',
    component: PageMlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageMlRoutingModule {}
