import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesNames } from './models/routes';

const routes: Routes = [
  { path: '', redirectTo: RoutesNames.PageHome, pathMatch: 'full' },
  {
    path: RoutesNames.PageHome,
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
    data: { animationState: 'home' },
  },
  {
    path: RoutesNames.PageContact,
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
