export class RoutesNames {
  public static PageHome = 'home';
  public static PageSportEnEntreprise = 'sport-en-entreprise';
  public static PageSportPourParticulier = 'sport-pour-particulier';
  public static PageSportEnEcoles = 'sport-en-ecoles';
  public static PageContact = 'contact';
  public static PageMentionsLegales = 'mentions-legales';
  public static PagePolitiqueConfidentialite = 'politique-confidentialite';
}

export interface IPageInfos {
  route?: string;
  displayName?: string;
  iconName?: string;
  disponible?: boolean;
  visibleInNav?: boolean;
}
