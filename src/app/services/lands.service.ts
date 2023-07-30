import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandsService {

  constructor(private _http:HttpClient) { }

  addLands(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/lands', data);
  }
  getLandsList(): Observable<any> {
    return this._http.get('http://localhost:3000/lands');
  }

}
