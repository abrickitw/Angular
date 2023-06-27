
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <!--Header-->

  <app-header></app-header>



  


    <!--routes get injected here -->
    <router-outlet></router-outlet>


 
    <!--Footer-->
   <app-footer></app-footer>
  `,


  styles: []
})
export class AppComponent {
  title = 'nekaStranica';

  constructor() { }



  /// obzrvable, better than promisse 
  
}
