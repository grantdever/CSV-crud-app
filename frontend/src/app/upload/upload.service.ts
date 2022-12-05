import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
    postEndpoint = 'http://localhost:3000/users/create';

  constructor(private httpClient: HttpClient) { }
  
  postUsers(users: any) {
    const body = users;
    console.log('this is the body');
    console.log(body);
    this.httpClient.post(this.postEndpoint, body).subscribe((result) => {
        alert("users saved successfully");
    });
  }
}