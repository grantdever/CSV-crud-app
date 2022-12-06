import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadUserService {
    postEndpoint = 'http://localhost:3000/users/create';

  constructor(private httpClient: HttpClient) { }
  
//   should have an error if not posted successfully
  postUsers(users: any) {
    const body = users;
    this.httpClient.post(this.postEndpoint, body).subscribe((result) => {
        alert("users saved successfully");
    });
  }
}