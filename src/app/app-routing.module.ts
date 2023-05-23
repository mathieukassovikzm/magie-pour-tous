import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap, Pages } from './models/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: LstPagesMap.get(Pages.HOME)?.route,
    pathMatch: 'full',
  },
  {
    path: LstPagesMap.get(Pages.HOME)?.route,
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
    data: { animationState: 'home' },
  },
  {
    path: LstPagesMap.get(Pages.ARTISTE)?.route,
    loadChildren: () =>
      import('./pages/page-artiste/page-artiste.module').then(
        (m) => m.PageArtisteModule
      ),
    data: { animationState: 'home' },
  },
  {
    path: LstPagesMap.get(Pages.SPECTACLES)?.route,
    loadChildren: () =>
      import('./pages/page-spectacles/page-spectacles.module').then(
        (m) => m.PageSpectacleModule
      ),
    data: { animationState: 'home' },
  },
  {
    path: LstPagesMap.get(Pages.CONTACT)?.route,
    loadChildren: () =>
      import('./pages/page-contact/page-contact.module').then(
        (m) => m.PageContactModule
      ),
    data: { animationState: 'contact' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
