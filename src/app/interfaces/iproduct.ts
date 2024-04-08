import { IProductBase } from './iproduct-base';

export interface Iproduct extends IProductBase {
  productType: string;
  subCategoryType: string;
}
