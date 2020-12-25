import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = environment.baseServer + 'users';


  constructor(public http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.URL}`);
  }

  getId(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/id/${id}`);
  }

  getUsuarioNome(nome: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/username/${nome}`);
  }

  criarUsuario(user) {
    return this.http.post<any>(`${this.URL}/register`, user);
  }

  logarUsuario(user) {
    return this.http.post<any>(`${this.URL}/login`, user);
  }

}
