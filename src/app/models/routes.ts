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

export const LstPagesMap = new Map<string, IPageInfos>([
  [
    'pageHome',
    <IPageInfos>{
      route: 'home',
      displayName: 'Accueil',
      visibleInNav: true,
      sectionTitle: {
        title: 'Ronan Calvani',
        subtitle: 'Magicien de génie',
        backgroundImgPath: '/assets/img/section-intro/page-home',
        backgroundImgPathSmall: '/assets/img/section-intro/page-home-small',
      },
    },
  ],
  [
    'pageArtiste',
    <IPageInfos>{
      route: 'artiste',
      displayName: "L'artiste",
      visibleInNav: true,
    },
  ],
  [
    'pageArtiste',
    <IPageInfos>{
      route: 'artiste',
      displayName: "L'artiste",
      visibleInNav: true,
    },
  ],
  [
    'pageEspacePro',
    <IPageInfos>{
      route: 'espace-pro',
      displayName: 'Espace Pro',
      visibleInNav: true,
    },
  ],
  [
    'pageContact',
    <IPageInfos>{
      route: 'contact',
      displayName: 'Contact',
      visibleInNav: true,
    },
  ],
]);
