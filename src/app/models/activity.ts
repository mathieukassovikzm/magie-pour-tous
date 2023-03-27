import { ISportModel } from './sport';

export interface IActivityModel {
  title?: string;
  url?: string;
  sports?: ISportModel[];
}
