import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  constructor(public http: Http) { }

  getUser(id: number, callback) {
    this.http.get(`/api/users/${id}`).map(res => res.json()).subscribe(callback); //todo: 이거 정확하게 이해 못함
  }

  addUser(user: any, callback) {
    this.http.post('/api/users', user).map(res => res.json()).subscribe(callback);
  }

  modifyUser(user: any, callback) {
    this.http.put(`/api/users/${user.id}`, user).map(res => res.json()).subscribe(callback);
  }

  removeUser(user: any, callback) {
    this.http.delete(`/api/users/${user.id}`).subscribe(callback);
  }
}
