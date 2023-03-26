import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSppComponent } from './page-spp.component';

const routes: Routes = [
  {
    path: '',
    component: PageSppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSppRoutingModule {}
