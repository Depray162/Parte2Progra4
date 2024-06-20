import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { server } from "./global";
import { Doctor } from "../model/doctor";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private urlAPI: string;
  constructor(private _http: HttpClient) {
    this.urlAPI = server.url;
  }
  private sessionStorageKey = 'identity'; // Cambiado para reflejar la clave usada en sessionStorage

  login(doctor: Doctor): Observable<any> {
    let doctorJson = JSON.stringify(doctor);

    let params = {cedula: doctor.cedula,contrasena: doctor.contrasena};
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers };
    return this._http.post(this.urlAPI + 'medico/loginMed', params, options);
  }

  getIdentityFromAPI(): Observable<any> {
    let headers;
    let bearerToken = sessionStorage.getItem('token');
    if (bearerToken) {
      headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('bearerToken', bearerToken);
    } else {
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    let options = { headers };
    return this._http.get(this.urlAPI + 'medico/getidentity', options);
  }
  create(doctor: Doctor): Observable<any> {
    let doctorJson = JSON.stringify(doctor);
    let params = 'data=' + doctorJson;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let options = { headers };
    return this._http.post(this.urlAPI + 'medico/store', params, options);
  }

  getIdentityFromStorage() {
    let identity = sessionStorage.getItem('identity');
    if (identity) {
      return JSON.parse(identity);
    }
    return null;
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  obtenerusers(): Observable<{ status: number, message: string, data: Doctor[] }> {
    return this._http.get<{ status: number, message: string, data: Doctor[] }>(`${this.urlAPI}administrador/medico`);
  }


  clearSessionData() {
    sessionStorage.removeItem(this.sessionStorageKey);
    sessionStorage.removeItem('token'); // Asegúrate de limpiar el token también si es necesario
  }

  private createHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let bearerToken = sessionStorage.getItem('token');
    if (bearerToken) {
      headers = headers.set('bearerToken', bearerToken);
    }
    return headers;
  }

}
