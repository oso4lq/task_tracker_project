import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../TaskInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private API_URL_USERS = 'http://localhost:4321/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log(this.http.get<User[]>(this.API_URL_USERS));
    return this.http.get<User[]>(this.API_URL_USERS);
  }

}
