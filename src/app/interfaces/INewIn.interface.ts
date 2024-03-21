import { Photo } from './photo';

export interface INewInProduct {
  id: number;
  gender: number;
  name: string;
  description: string;
  pType: string;
  subCType: string;
  price: number;
  designer: string;
  // photo?: string;
  photos: Photo[];
}
