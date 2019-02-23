import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

  addUser(firstName, lastName, phoneNum, email) {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      phoneNum: phoneNum,
      email: email
    };
    return this
    .http
    .post(`${this.API_URL}/add`, obj)
        // .subscribe(res => console.log('Done'));
  }

  getUsers() {
    return this
          .http
          .get(`${this.API_URL}`);
  }

  detailUser(id) {
    return this
            .http
            .get(`${this.API_URL}/detail/${id}`);
    }

  editUser(id) {
    return this
            .http
            .get(`${this.API_URL}/detail/${id}/edit`);
    }

  updateUser(firstName, lastName, phoneNum, email, id) {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      phoneNum: phoneNum,
      email: email
      };
      return this
      .http
      .post(`${this.API_URL}/update/${id}`, obj)
      // .subscribe(res => console.log('Done'));
  }

  deleteUser(id) {
    return this
              .http
              .get(`${this.API_URL}/delete/${id}`);
  }
}