import { ISectionTitle, TitlePosition } from './section-title';

export interface IPageInfos {
  path?: string;
  displayName?: string;
  iconName?: string;
  visibleInNav?: boolean;
  sectionTitle?: ISectionTitle;
}

export enum Pages {
  HOME,
  ARTISTE,
  SPECTACLES,
  SPECCLOSUP,
  SPECCABARET,
  SPECMAGIENUM,
  SPECENFANTS,
  SPECGRANDESILLU,
  ESPACEPRO,
  CONTACT,
}

export const LstPagesMap = new Map<Pages, IPageInfos>([
  [
    Pages.HOME,
    <IPageInfos>{
      path: 'home',
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
  ],
  [
    Pages.ARTISTE,
    <IPageInfos>{
      path: 'artiste',
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
  ],
  [
    Pages.SPECTACLES,
    <IPageInfos>{
      path: 'spectacles',
      displayName: 'Les spectacles',
      visibleInNav: true,
      sectionTitle: {
        txtPosition: TitlePosition.TOP,
        title: 'Les Spectacles',
        backgroundImgPath: '/assets/img/section-intro/page-spectacles',
        backgroundImgPathSmall:
          '/assets/img/section-intro/page-spectacles-small',
      },
    },
  ],
  [
    Pages.SPECCLOSUP,
    <IPageInfos>{
      path: 'clos-up',
      displayName: 'Clos-Up',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECMAGIENUM,
    <IPageInfos>{
      path: 'magie-numerique',
      displayName: 'Magie Numérique et close-up digital',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECCABARET,
    <IPageInfos>{
      path: 'cabaret',
      displayName: 'Cabaret',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECENFANTS,
    <IPageInfos>{
      path: 'jeune-public',
      displayName: 'Spectacle jeune public',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECGRANDESILLU,
    <IPageInfos>{
      path: 'show-grandes-illusions',
      displayName: 'Show Grandes Illusions',
      visibleInNav: false,
    },
  ],
  [
    Pages.ESPACEPRO,
    <IPageInfos>{
      path: 'espace-pro',
      displayName: 'Espace Pro',
      visibleInNav: false,
    },
  ],
  [
    Pages.CONTACT,
    <IPageInfos>{
      path: 'contact',
      displayName: 'Contact',
      visibleInNav: true,
    },
  ],
]);
