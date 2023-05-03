import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSpectaclesComponent } from './page-spectacles.component';
import { LstPagesMap, Pages } from 'src/app/models/routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageSpectaclesComponent,
      },
      {
        path: LstPagesMap.get(Pages.SPECCLOSUP)?.route,
        loadChildren: () =>
          import('./page-desc-spectacle/page-desc-spectacle.module').then(
            (m) => m.PageDescSpectacleModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECCABARET)?.route,
        loadChildren: () =>
          import('./page-desc-spectacle/page-desc-spectacle.module').then(
            (m) => m.PageDescSpectacleModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECGRANDESILLU)?.route,
        loadChildren: () =>
          import('./page-desc-spectacle/page-desc-spectacle.module').then(
            (m) => m.PageDescSpectacleModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECENFANTS)?.route,
        loadChildren: () =>
          import('./page-desc-spectacle/page-desc-spectacle.module').then(
            (m) => m.PageDescSpectacleModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECMAGIENUM)?.route,
        loadChildren: () =>
          import('./page-desc-spectacle/page-desc-spectacle.module').then(
            (m) => m.PageDescSpectacleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSpectaclesRoutingModule {}
