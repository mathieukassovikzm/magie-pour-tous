import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap } from './models/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: LstPagesMap.get('pageHome')?.route,
    pathMatch: 'full',
  },
  {
    path: LstPagesMap.get('pageHome')?.route,
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
    data: { animationState: 'home' },
  },
  {
    path: LstPagesMap.get('pageContact')?.route,
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
