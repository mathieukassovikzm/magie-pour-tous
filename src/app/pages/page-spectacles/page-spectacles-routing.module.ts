import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpectacleSubRoutes } from 'src/app/models/routes';
import { PageSpectaclesComponent } from './page-spectacles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageSpectaclesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSpectaclesRoutingModule {}
