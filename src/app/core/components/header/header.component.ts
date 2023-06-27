import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">

<div class="navbar-brand">
  <a class="navbar-item">
    <img src="assets/Image/Logo.jpg">
  
  </a>
</div>



<div class="navbar-menu">
  <div class="navbar-end">
    <a class="navbar-item" routerLink="/">Home</a>
    <a class="navbar-item" routerLink="/user">Users</a>
    <a class="navbar-item" routerLink="/contact">Contact</a>
  </div>
</div>
</div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
