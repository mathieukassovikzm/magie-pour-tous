import { Route, Routes } from '@angular/router';
import { ISectionTitle, TitlePosition } from './section-title';

export interface ICustomRoute extends Route {
  data: IPageInfos;
}

export interface IPageInfos {
  anchor?: string;
  displayName?: string;
  iconName?: string;
  visibleInNav?: boolean;
  sectionTitle?: ISectionTitle;
}

export const PageHome = <ICustomRoute>{
  path: 'home',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    displayName: 'Accueil',
    visibleInNav: true,
    sectionTitle: {
      txtPosition: TitlePosition.BOTTOM,
      title: 'Ronan Calvany',
      subtitle: 'Magie pour tous',
      backgroundImgPath: '/assets/img/section-intro/page-home',
      backgroundImgPathSmall: '/assets/img/section-intro/page-home-small',
    },
  },
};

export const PageArtiste = <ICustomRoute>{
  path: 'artiste',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    anchor: 'artiste',
    displayName: "L'artiste",
    visibleInNav: true,
    sectionTitle: {
      txtPosition: TitlePosition.BOTTOM,
      title: 'Ronan Calvany',
      subtitle: 'Magie pour tous',
      backgroundImgPath: '/assets/img/section-intro/page-artiste',
      backgroundImgPathSmall: '/assets/img/section-intro/page-artiste-small',
    },
  },
};

export const PageSpecCloseUp = <ICustomRoute>{
  path: 'spectacles',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    displayName: 'Clos-Up',
    visibleInNav: false,
  },
};

export const PageSpecMagieNum = <ICustomRoute>{
  path: 'magie-numerique',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    displayName: 'Magie Numérique et close-up digital',
    visibleInNav: false,
  },
};

export const PageSpecCabaret = <ICustomRoute>{
  path: 'cabaret',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    displayName: 'Cabaret',
    visibleInNav: false,
  },
};

export const PageSpecJeunePublic = <ICustomRoute>{
  path: 'jeune-public',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    displayName: 'Spectacle jeune public',
    visibleInNav: false,
  },
};

export const PageSpecShowGrandesIllusions = <ICustomRoute>{
  path: 'show-grandes-illusions',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    displayName: 'Show Grandes Illusions',
    visibleInNav: false,
  },
};

export const SpectacleSubRoutes: Routes = [
  PageSpecCloseUp,
  PageSpecMagieNum,
  PageSpecCabaret,
  PageSpecJeunePublic,
  PageSpecShowGrandesIllusions,
];

export const PageSpectacle = <ICustomRoute>{
  path: 'spectacles',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    anchor: 'spectacles',
    displayName: 'Les spectacles',
    visibleInNav: true,
    sectionTitle: {
      txtPosition: TitlePosition.TOP,
      title: 'Les Spectacles',
      backgroundImgPath: '/assets/img/section-intro/page-spectacles',
      backgroundImgPathSmall: '/assets/img/section-intro/page-spectacles-small',
    },
  },
};

export const PageEspacePro = <ICustomRoute>{
  path: 'espace-pro',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    path: 'espace-pro',
    displayName: 'Espace Pro',
    visibleInNav: false,
  },
};

export const PageContact = <ICustomRoute>{
  path: 'contact',
  loadChildren: () =>
    import('../pages/page-home/page-home.module').then((m) => m.PageHomeModule),
  data: <IPageInfos>{
    anchor: 'contact',
    displayName: 'Contact',
    visibleInNav: true,
  },
};
