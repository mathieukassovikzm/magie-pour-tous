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

export enum LstTypeBtn {
  LINK,
  ANCHOR,
}

export interface IBtn {
  btnTxt?: string;
  btnLink?: string;
  btnAnchor?: string;
  cardFace?: CardFace;
  value?: string;
  btnType?: LstTypeBtn;
}

export interface ILstBtnCard {
  lstBtnCard: IBtn[];
  direction?: LstCardDirection;
}
