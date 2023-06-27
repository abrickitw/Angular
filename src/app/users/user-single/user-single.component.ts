import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-single',
  template: `
  <div class="section">
      <div class="container">


        

        <!-- 
            []- bind attribute properrty from class
            () event bidings- templates-> class [()]
            *structural directive- update html by variables
          -->

        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url">
          <h1>Username:  {{user.login}}</h1>
          <h1>Id: {{user.id}}</h1>
          <p> followers {{user.followers}}</p>
          
        </div>
      </div>
    </div>
   
  `,
  styles: [
  ]
})
export class UserSingleComponent implements OnInit {


  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) {}
  ngOnInit() {


    // Grab username from URl
    this.route.params.subscribe (params => {
      const username = params['username'];


      // use the username to get data from api
      this.userService
      .getUser(username)
      .subscribe((user: any)=> this.user = user);
      
  });
  }

  


}
