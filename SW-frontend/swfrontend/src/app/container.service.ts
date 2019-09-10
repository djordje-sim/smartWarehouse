import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Container } from './models/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient) { }

  tokenUrl: string = "http://localhost:8081/v1/authentication/user";
  countUrl: string = "http://localhost:8081/v1/_/data/messages/_count";
  arrivalUrl: string = "http://localhost:4300";
  body: any = {
    "password": "kapua-password",
    "username": "kapua-sys"
  }
  countBody = {
    "limit": 0,
    "scopeId": {
      "id": 0
    },
    "askTotalCount": true,
    "fetchStyle": "FIELDS",
    "sortFields": [
      {
        "sortDirection": "ASC",
        "field": "string"
      }
    ],
    "fetchAttributes": [
      "string"
    ],
    "predicate": {},
    "offset": 0
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getToken(): Observable<any> {
    return this.http.post(this.tokenUrl, this.body, this.httpOptions);
  }

  getDeviceMessagesCount(httpOptions: any): Observable<any> {

    return this.http.post(this.countUrl, this.countBody, httpOptions);

  }

  getDevicePayload(count: number, httpOptions: any): Observable<any> {

    let fullnessUrl = 'http://localhost:8081/v1/_/data/messages?offset=' + (count - 1) + '&limit=1';

    return this.http.get<any>(fullnessUrl, httpOptions);

  }

  getArrivalInfo(): Observable<Container> {

    return this.http.get<Container>(this.arrivalUrl);

  }

}