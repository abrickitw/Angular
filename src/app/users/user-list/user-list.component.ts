import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="section">
      <div class="container">


        <div class="columns is-multiline" *ngIf="users">
          <div class="column is-4" *ngFor="let user of users | async">


            <div class="card">
              <div class="card-content">
              <img [src]="user.avatar_url">
              <a [routerLink]="'/user/' + user.login">{{ user.login }} </a>
              <h1>Id: {{user.id}}</h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class UserListComponent implements OnInit {
  users!: Observable<any>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
