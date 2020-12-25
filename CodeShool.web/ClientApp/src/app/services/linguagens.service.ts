import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinguagensService {

  public urlJson = 'assets/json/tecnologias.json'
  public linguagen = 'CodeShoolLinguagenEmAndamento';
  
  constructor(public http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any>(`${this.urlJson}`);
  }

  public getLinguagen(): any {
    return <any>JSON.parse(localStorage.getItem(this.linguagen));
  }

  public setLinguagen(data: any): LinguagensService {
    localStorage.setItem(this.linguagen, JSON.stringify(data));
    return this;
  }

}
