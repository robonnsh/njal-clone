import { Component } from '@angular/core';
import { MainBackgroundService } from '../../services/main-bg/main-background.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  backgroundImagePath: string = '';

  constructor(private bgService: MainBackgroundService) {}
  ngOnInit(): void {
    this.backgroundImagePath = this.bgService.getRandomBgImages();
  }
}
