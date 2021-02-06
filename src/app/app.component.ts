import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  template: `
    <ng-http-loader [spinner]="spinnerStyle.skChasingDots"></ng-http-loader>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand cursor-pointer">Wipro</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
          <a
            class="nav-link cursor-pointer"
            [routerLink]="['/welcome']"
            [routerLinkActive]="'active'"
            >Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link  cursor-pointer"
            [routerLink]="['/products']"
            [routerLinkActive]="'active'"
            >Products</a
          >
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title: string = 'angular-demo';
  address: string = 'Odisha';
  spinnerStyle = Spinkit;
}
