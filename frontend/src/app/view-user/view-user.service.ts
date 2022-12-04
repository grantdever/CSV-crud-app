import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ViewUserService {

    constructor(private httpClient: HttpClient){}

     getUser(id: any): Observable<any> {
        const url = 'http://localhost:3000/users/' + id;
        return this.httpClient.get(url)
    }
}