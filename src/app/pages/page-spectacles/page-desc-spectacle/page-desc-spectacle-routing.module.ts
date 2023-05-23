import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDescSpectacleComponent } from './page-desc-spectacle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageDescSpectacleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDescSpectacleRoutingModule {}
