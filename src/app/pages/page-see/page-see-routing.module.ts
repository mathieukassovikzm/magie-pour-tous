import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSeeComponent } from './page-see.component';

const routes: Routes = [
  {
    path: '',
    component: PageSeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSeeRoutingModule {}
