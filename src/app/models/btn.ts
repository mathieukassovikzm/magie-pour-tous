export enum CardFace {
  HEART = 'heart',
  SPADE = 'spade',
  DIAMOND = 'diamond',
  CLUB = 'club',
}

export enum LstCardDirection {
  HORIZONTAL = 'row',
  VERTICAL = 'colunm',
}

export interface IBtn {
  btnTxt?: string;
  btnLink?: string;
  cardFace?: CardFace;
  value?: string;
}

export interface ILstBtnCard {
  lstBtnCard: IBtn[];
  direction?: LstCardDirection;
}
