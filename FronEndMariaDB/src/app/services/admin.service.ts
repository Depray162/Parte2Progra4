import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server } from './global';
import { Doctor } from '../model/doctor';
import { Paciente } from '../model/paciente';

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

  create(doctor: Doctor): Observable<any> {
    let doctorJson = JSON.stringify(doctor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.urlAPI + 'administrador/medico', doctorJson, { headers });
  }

  createPaciente(paciente: Paciente): Observable<any> {
    let doctorJson = JSON.stringify(paciente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.urlAPI + 'administrador/paciente', doctorJson, { headers });
  }

}
