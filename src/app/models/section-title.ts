import { IBtn } from './btn';

export enum TitlePosition {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface ISectionTitle {
  title?: string;
  subtitle?: string;
  backgroundImgPath?: string;
  backgroundImgPathSmall?: string;
  btn?: IBtn;
  txtPosition?: TitlePosition;
}
