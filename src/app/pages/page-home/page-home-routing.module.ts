import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home.component';
import { SpectacleSubRoutes } from 'src/app/models/routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageHomeComponent,
      },
      ...SpectacleSubRoutes,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageHomeRoutingModule {}
