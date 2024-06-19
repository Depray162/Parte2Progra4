import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server } from './global';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    private urlAPI: string;
    constructor(private _http: HttpClient) {
      this.urlAPI = server.url;
    }

  getUsers(): Observable<any> {
    return this._http.get<any>(this.urlAPI);
  }
}
