import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    Accept:  'application/json',
    Authorization: 'Bearer 7801995e-087f-340f-840a-b868bab0158b'
  })
};

@ Injectable({
  providedIn: 'root'
})
export class GetsrnosService {

  Url = 'https://192.168.0.8:8245/srno/v1.0/getsrno/advi';  // URL to web api

  constructor(private http: HttpClient) { }

  getStudentRecordNo(): Observable<any> {
    return this.http.get<any>(this.Url, httpOptions);
  }
}
