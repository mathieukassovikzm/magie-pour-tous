import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSeecComponent } from './page-seec.component';

const routes: Routes = [
  {
    path: '',
    component: PageSeecComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSeecRoutingModule {}
