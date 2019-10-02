import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setLocalToken(token: string) {
    localStorage.setItem('token', token);
  }
  setSessionToken(token: string) {
    sessionStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
  constructor() {}
}
