import { Photo } from './photo';

export interface IProductBase {
  id: number;
  gender: number;
  designer: string;
  productType: string;
  subCategoryType: string;
  description: string;
  name: string;
  price: number;
  photo?: string;
  photos: Photo[];
}
