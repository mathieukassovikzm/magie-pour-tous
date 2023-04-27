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
          import('./page-clos-up/page-clos-up.module').then(
            (m) => m.PageClosUpModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECCABARET)?.route,
        loadChildren: () =>
          import('./page-cabaret/page-cabaret.module').then(
            (m) => m.PageCabaretModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECGRANDESILLU)?.route,
        loadChildren: () =>
          import('./page-grandes-illu/page-grandes-illu.module').then(
            (m) => m.PageGrandesIlluModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECENFANTS)?.route,
        loadChildren: () =>
          import('./page-jeune-public/page-jeune-public.module').then(
            (m) => m.PageJeunePublicModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.SPECMAGIENUM)?.route,
        loadChildren: () =>
          import('./page-magie-numerique/page-magie-numerique.module').then(
            (m) => m.PageMagieNumeriqueModule
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
