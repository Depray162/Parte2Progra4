import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { server } from "./global";
import { Cita } from "../model/cita";
import { Observable } from "rxjs";
import { Paciente } from "../model/paciente";

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private urlAPI: string;
  constructor(private _http: HttpClient) {
    this.urlAPI = server.url;
  }
  private sessionStorageKey = 'identity';


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
    return this._http.get(this.urlAPI + 'paciente/getidentity', options);
  }
  create(cita: Cita): Observable<any> {
    let citaJson = JSON.stringify(cita);
    let params = 'data=' + citaJson;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let options = { headers };
    return this._http.post(this.urlAPI + 'paciente/cita/agregarPac', params, options);
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

  obtenerCitas(): Observable<{ status: number, message: string, data: Cita[] }> {
    let headers;
    let bearerToken = sessionStorage.getItem('token');
    if (bearerToken) {
      headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('bearerToken', bearerToken);
    } else {
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    let options = { headers };
    return this._http.get<{ status: number, message: string, data: Cita[] }>(`${this.urlAPI}administrador/medico`, options);
  }


  clearSessionData() {
    sessionStorage.removeItem(this.sessionStorageKey);
    sessionStorage.removeItem('token'); 
  }

  private createHeaders(): HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let bearerToken = sessionStorage.getItem('token');
    if (bearerToken) {
      headers = headers.set('bearerToken', bearerToken);
    }
    return headers;
  }

  eliminarCita(id: number): Observable<any> {
    let headers;
    let bearerToken = sessionStorage.getItem('token');
    if (bearerToken) {
      headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('bearerToken', bearerToken);
    } else {
      headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    let options = { headers };
    return this._http.delete(`${this.urlAPI}paciente/cita/eliminar/{id}${id}`, options);
  }

  getCitaById(id: number): Observable<Cita> {
    return this._http.get<Cita>(`${this.urlAPI}/cita/{id}${id}` );
  }

  updateCita(cita: Cita): Observable<any> {
    const params = JSON.stringify(cita);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(`${this.urlAPI}/cita/actualizar/{id}${cita.idCita}`, params, { headers});
  }

}
