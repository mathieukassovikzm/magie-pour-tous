import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap, Pages } from './models/routes';

const routesSite: Routes = [
  {
    path: LstPagesMap.get(Pages.HOME)?.path,
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
    data: LstPagesMap.get(Pages.HOME),
  },
  {
    path: LstPagesMap.get(Pages.ARTISTE)?.path,
    loadChildren: () =>
      import('./pages/page-artiste/page-artiste.module').then(
        (m) => m.PageArtisteModule
      ),
    data: LstPagesMap.get(Pages.ARTISTE),
  },
  {
    path: LstPagesMap.get(Pages.SPECTACLES)?.path,
    loadChildren: () =>
      import('./pages/page-spectacles/page-spectacles.module').then(
        (m) => m.PageSpectacleModule
      ),
    data: LstPagesMap.get(Pages.SPECTACLES),
  },
  {
    path: LstPagesMap.get(Pages.CONTACT)?.path,
    loadChildren: () =>
      import('./pages/page-contact/page-contact.module').then(
        (m) => m.PageContactModule
      ),
    data: LstPagesMap.get(Pages.CONTACT),
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: LstPagesMap.get(Pages.HOME)?.path,
    pathMatch: 'full',
  },
  ...routesSite,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
