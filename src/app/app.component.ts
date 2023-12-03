import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router: Router) {
  }

  shouldShowNavBar(): boolean {
    const excludedRoutes = ['/login'];
    const currentRoute = this.router.url.split('?')[0];
    return !excludedRoutes.some(route => currentRoute.startsWith(route));
  }

}
