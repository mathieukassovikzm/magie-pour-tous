export interface ISectionTitle {
  title?: string;
  subtitle?: string;
  backgroundImgPath?: string;
  backgroundImgPathSmall?: string;
  btnTxt?: string;
  link?: string;
}

export interface IPageInfos {
  route?: string;
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
      route: 'home',
      displayName: 'Accueil',
      visibleInNav: true,
      sectionTitle: {
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
      route: 'artiste',
      displayName: "L'artiste",
      visibleInNav: true,
      sectionTitle: {
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
      route: 'spectacles',
      displayName: 'Les spectacles',
      visibleInNav: true,
      sectionTitle: {
        title: 'Ronan Calvany',
        subtitle: 'Magie pour tous',
        backgroundImgPath: '/assets/img/section-intro/page-spectacles',
        backgroundImgPathSmall:
          '/assets/img/section-intro/page-spectacles-small',
      },
    },
  ],
  [
    Pages.SPECCLOSUP,
    <IPageInfos>{
      route: 'clos-up',
      displayName: 'Clos-Up',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECMAGIENUM,
    <IPageInfos>{
      route: 'magie-numerique',
      displayName: 'Magie Numérique et close-up digital',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECCABARET,
    <IPageInfos>{
      route: 'cabaret',
      displayName: 'Cabaret',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECENFANTS,
    <IPageInfos>{
      route: 'jeune-public',
      displayName: 'Spectacle jeune public',
      visibleInNav: false,
    },
  ],
  [
    Pages.SPECGRANDESILLU,
    <IPageInfos>{
      route: 'show-grandes-illusions',
      displayName: 'Show Grandes Illusions',
      visibleInNav: false,
    },
  ],
  [
    Pages.ESPACEPRO,
    <IPageInfos>{
      route: 'espace-pro',
      displayName: 'Espace Pro',
      visibleInNav: false,
    },
  ],
  [
    Pages.CONTACT,
    <IPageInfos>{
      route: 'contact',
      displayName: 'Contact',
      visibleInNav: true,
    },
  ],
]);
