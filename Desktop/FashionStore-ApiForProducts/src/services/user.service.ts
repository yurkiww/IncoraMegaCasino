import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserHttp } from 'src/interfaces/user-http.interface';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  // getUsers(): Observable<IUserHttp> {
  //   return this.http.get<IUserHttp>(this.API_URL);
  // }
  // getMe(): Observable<any> {
  //   return this.http.get<any>(this.API_URL + '/me');
  // }
  // getUsers(): Observable<any> {
  //   return this.http.get<IUserHttp[]>(this.API_URL + '/users');
  // }
  // getUser(id: number): Observable<any> {
  //   return this.http.get<any>(this.API_URL + '/users/' + id);
  // }
  updateUser(
    id: number,
    firstName,
    lastName,
    email,
    password,
    city,
    state
  ): Observable<any> {
    return this.http.put<number>(this.API_URL + '/users/' + id, {
      firstName,
      lastName,
      email,
      password,
      city,
      state,
    });
  }
  loginUser(email, password, remember): Observable<IUserHttp> {
    console.log(email, password, remember);
    console.log('Service for login works');
    return this.http.post<IUserHttp>(this.API_URL + '/login', {
      email,
      password,
    });
  }
  registerUser(
    firstName,
    lastName,
    email,
    password,
    city,
    state,
    zip,
    role
  ): Observable<any> {
    console.log(firstName, lastName, email, password);
    return this.http.post<IUser>(this.API_URL + '/users', {
      firstName,
      lastName,
      email,
      password,
      city,
      state,
      zip,
      role,
    });
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.API_URL + '/users/' + id);
  }
}
