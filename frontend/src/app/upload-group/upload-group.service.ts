import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadGroupService {
    //needs to match your post end point
    postEndpoint = 'http://localhost:3000/group/create';

  constructor(private httpClient: HttpClient) { }
  
//   should have an error if not posted successfully
  postGroups(groups: any) {
    const body = groups;
    this.httpClient.post(this.postEndpoint, body).subscribe((result) => {
        alert("Groups saved successfully");
    });
  }
}