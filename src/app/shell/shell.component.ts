import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  constructor(private router: Router) {}
  showFooter(): boolean {
    const allowedRoutes = ['/home'];
    return allowedRoutes.includes(this.router.url);
  }
}
