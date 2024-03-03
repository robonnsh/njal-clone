import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarToggleService {
  showLists: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        this.showLists =
          val.url !== '/' &&
          val.url !== '/login' &&
          val.url !== '/terms' &&
          val.url !== '/user-logged';
      }
    });
  }
}
