import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePcComponent } from './page-pc.component';

const routes: Routes = [
  {
    path: '',
    component: PagePcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePcRoutingModule {}
