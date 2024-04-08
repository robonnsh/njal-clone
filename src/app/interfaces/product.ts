import { IProductBase } from './iproduct-base';
import { Photo } from './photo';

export class Product implements IProductBase {
  id!: number;
  gender!: number;
  designer!: string;
  name!: string;
  productType!: string;
  subCategoryType!: string;
  price!: number;
  photo?: string;
  description!: string;
  photos!: Photo[];
}
