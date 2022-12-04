import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewAllUserService {

  constructor(private httpClient: HttpClient) { }
  
  getUsers() {
    return this.httpClient.get('http://localhost:3000/users');
  }
}