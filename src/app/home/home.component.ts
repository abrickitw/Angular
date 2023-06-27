import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
    <p class="title">
      Home page
    </p>
  </div>

  <!--
<div class="container content has-text-centered">
    <img width="300" alt="!Angular Logo" src="assets/Image/Logo.jpg">   
  </div>

  -->
  
  
</section>
       
  `,
  styles: [`
  
    .hero{
      background-image: url('/assets/Image/lense.jpeg') !important;
      background-size:cover;
      background-position:centre centre;

    }
  
  `]
})
export class HomeComponent {

}
