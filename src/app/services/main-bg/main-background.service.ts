import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainBackgroundService {
  constructor() {}
  private bgImages: string[] = [
    'assets/images/welcomebg/welcomebg.jpg',
    'assets/images/welcomebg/welcomebg1.jpg',
    'assets/images/welcomebg/welcomebg2.jpg',
    'assets/images/welcomebg/welcomebg3.jpg',
    'assets/images/welcomebg/welcomebg4.jpg',
    'assets/images/welcomebg/welcomebg5.jpg',
    'assets/images/welcomebg/welcomebg6.jpg',
    'assets/images/welcomebg/welcomebg7.jpg',
  ];
  getBgImages(): string[] {
    return this.bgImages;
  }

  getRandomBgImages(): string {
    const random = Math.floor(Math.random() * this.bgImages.length);
    return this.bgImages[random];
  }
}
