import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ViewGroupService {

    constructor(private httpClient: HttpClient) {}

    getGroup (id: any): Observable<any> {
        const url = 'http://localhost:3000/group/' + id;
        return this.httpClient.get(url);
    }
}