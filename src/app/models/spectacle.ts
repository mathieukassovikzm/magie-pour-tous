import { ISectionTitle } from './section-title';

export interface ISpectacleModel {
  sectionTitle: ISectionTitle;
  videoId?: string;
  tabTxt: string[];
  visible: boolean;
  logo?: string;
}
