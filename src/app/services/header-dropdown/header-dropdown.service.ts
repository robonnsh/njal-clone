import { Injectable } from '@angular/core';
import { DropdownImg } from '../../interfaces/dropdown-img';
import { DropdownList } from '../../interfaces/dropdown-list';

@Injectable({
  providedIn: 'root',
})
export class HeaderDropdown {
  constructor() {}

  getLabelImages(gender: string): DropdownImg[] {
    if (gender === 'woman') {
      return this.getWomanLabelImages();
    } else if (gender === 'man') {
      return this.getManLabelImages();
    }
    return [];
  }

  getLabelComponents(gender: string): DropdownList[] {
    if (gender === 'woman') {
      return this.getWomanLabelComponents();
    } else if (gender === 'man') {
      return this.getManLabelComponents();
    }
    return [];
  }

  private getWomanLabelImages(): DropdownImg[] {
    return [
      {
        imgUrl: '/assets/images/woman_dropdown/womanLabel-2.webp',
        buttonName: 'WOMENSWEAR',
      },
      {
        imgUrl: '/assets/images/woman_dropdown/womanLabel-1.webp',
        buttonName: 'JEWELLERY',
      },
    ];
  }

  private getManLabelImages(): DropdownImg[] {
    return [
      {
        imgUrl: '/assets/images/man_dropdown/manLabel-1.webp',
        buttonName: 'MENSWEAR',
      },
      {
        imgUrl: '/assets/images/man_dropdown/manLabel-2.webp',
        buttonName: 'NEW IN',
      },
    ];
  }

  // women label components
  private getWomanLabelComponents(): DropdownList[] {
    return [
      {
        id: 1,
        heading: 'THE COLLECTIONS',
        list: `ALL \nDRESSES \nCLOTHING \nSHOES \nBAGS \nACCESSORIES \nJEWELLERY \nCOLLECTION BY NJAL`,
      },
      {
        id: 2,
        heading: 'SHOP BY OCCASION',
        list: 'GOING OUT? \nTHE TRAILBRAZING BRIDE \nWEDDING \n DEST TO IMPRESS \nTHE GREAT OUTDOORS \nTHE MODEST EDIT',
      },
      {
        id: 3,
        heading: 'NJAL CURATIONS',
        list: 'LOVESTRUCK \nTHE CAPSULE WARDROBE \nTHE NJAL TEAM FAVES \nESCAPE THE FREEZE \nBESTSELLERS \nHERO COATS \nTROPHY JACKETS \nFROM INDIA, WITH LOVE \nSHOP UKRAINIAN DESIGNERS \nETHICAL & SUSTAINABLE \nUNDERSTATED & COVERED \n RADICAL LUXURY',
      },
    ];
  }

  // men label components
  private getManLabelComponents(): DropdownList[] {
    return [
      {
        id: 1,
        heading: 'THE COLLECTIONS',
        list: 'ALL \nCLOTHING \nSHOES \nBAGS \nACCESSORIES \nJEWELLERY',
      },
      {
        id: 2,
        heading: 'MOST WANTED',
        list: 'COATS AND COVET \nCOLLECTION BY NJAL \nTHE POWER OF GREAT ACCESSORIES \nOUR PICKS FOR UNDER $250',
      },
      {
        id: 3,
        heading: `CURATOR'S PICKS`,
        list: 'BESTSELLERS \nFUTURE NOIR \nGOING LONG-BOARDING \nTHE COOL SHIRTS CLUB \nLOUD LUXURY \nTHE BEACH CLUB \nTHE HOT-IN-HERE EDIT',
      },
    ];
  }
}
