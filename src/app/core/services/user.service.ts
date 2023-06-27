import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUsers(){
   
      return this.http.
      get(`${this.apiUrl}?per_page=24`);

    

  }

  getUser(username: string) {

    return this.http.get(`${this.apiUrl}/${username}`);
        

  }
}


/// Ovdje grupiramo API pozive u Angularu
/// Get all users, get users, get by user name
// user service
