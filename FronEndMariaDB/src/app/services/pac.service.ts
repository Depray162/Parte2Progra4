import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { server } from "./global";
import { Paciente } from "../model/paciente";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PacService {

    private urlAPI: string;
    constructor(private _http: HttpClient) {
      this.urlAPI = server.url;
    }

    login(paciente: Paciente): Observable<any> {
        let pacienteJson = JSON.stringify(paciente);
    
        let params = {cedula: paciente.cedula,contrasena: paciente.contrasena};
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let options = { headers };
        return this._http.post(this.urlAPI + 'paciente/loginPac', params, options);
      }

      getIdentityFromAPI(): Observable<any> {
        let headers;
        let bearerToken = sessionStorage.getItem('token');
        if (bearerToken) {
          headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('bearertoken', bearerToken);
        } else {
          headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        let options = { headers };
        return this._http.get(this.urlAPI + 'paciente/getidentity', options);
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
    
      obtenerusers(): Observable<{ status: number, message: string, data: Paciente[] }> {
        let headers;
        let bearerToken = sessionStorage.getItem('token');
        if (bearerToken) {
          headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('bearerToken', bearerToken);
        } else {
          headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        let options = { headers };

        return this._http.get<{ status: number, message: string, data: Paciente[] }>(`${this.urlAPI}administrador/paciente`, options);
      }

      register(paciente: Paciente): Observable<any> {
        let pacienteJson = JSON.stringify(paciente);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.urlAPI + 'paciente/registerPac', pacienteJson, { headers });
      }

      eliminarPac(id: number): Observable<any> {
        let headers;
        let bearerToken = sessionStorage.getItem('token');
        if (bearerToken) {
          headers = new HttpHeaders().set('Content-Type', 'application/json')
            .set('bearerToken', bearerToken);
        } else {
          headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        let options = { headers };

        return this._http.delete(`${this.urlAPI}administrador/paciente/${id}`, options);
      }
}