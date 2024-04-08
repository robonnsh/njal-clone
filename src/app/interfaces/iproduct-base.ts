import { Photo } from './photo';

export interface IProductBase {
  id: number;
  gender: number;
  designer: string;
  description: string;
  name: string;
  price: number;
  photo?: string;
  photos: Photo[];
  Image?: string;
}
