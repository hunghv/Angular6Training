import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient }   from '@angular/common/http';
import { Hello } from './hello';
@Injectable({
    providedIn: 'root'
})
export class HelloService {
    HelloList: Hello[];
    private serviceUrl = 'http://localhost:51571/api/Admin/Employee/GetAllemployes';

    constructor(private http: HttpClient) { }

    getHelloList() {
        return this.http.get<Hello[]>(this.serviceUrl);
    }

}
