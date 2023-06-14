import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHome } from './models/routes';

const routesSite: Routes = [PageHome];

const routes: Routes = [
  {
    path: '',
    redirectTo: PageHome.path,
    pathMatch: 'full',
  },
  ...routesSite,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
