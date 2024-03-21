import { IProductBase } from './iproduct-base';
import { Photo } from './photo';

export class Product implements IProductBase {
  id!: number;
  gender!: number;
  name!: string;
  productType!: string;
  subCategoryType!: string;
  price!: number;
  designer!: string;
  photo?: string;
  description!: string;
  photos!: Photo[];
}
