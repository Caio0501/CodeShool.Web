import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesafiosService {
  
  public desafios = 'CodeShoolDesafios';
  public desafiosEntregesById = 'CodeShoolDesafiosEntregesById';
  public desafiosAceitos = 'CodeShoolDesafiosAceitos';

  constructor() { }

  // pegar todos os desafios
  public getDesafio(): any {
    return <any>JSON.parse(localStorage.getItem(this.desafios));
  }

  public setDesafio(data: any): DesafiosService {
    localStorage.setItem(this.desafios, JSON.stringify(data));
    return this;
  }

  // pegar desafios lista de desafios referente ao desafio pai
  public getDesafioEntregesById(): any {
    return <any>JSON.parse(localStorage.getItem(this.desafiosEntregesById));
  }

  public setDesafioEntrege(data: any): DesafiosService {
    localStorage.setItem(this.desafiosEntregesById, JSON.stringify(data));
    return this;
  }

  // pegar todos os seus desafios aceitos
  public getSeusDesafioAceitos(): any {
    return <any>JSON.parse(localStorage.getItem(this.desafiosAceitos));
  }

  public setSeusDesafioAceitos(data: any): DesafiosService {
    localStorage.setItem(this.desafiosAceitos, JSON.stringify(data));
    return this;
  }

  // pegar todos os seus desafis entreges
  public getSeusDesafioEntreges(): any {
    return <any>JSON.parse(localStorage.getItem(this.desafiosEntregesById));
  }

  public setSeusDesafioEntrege(data: any): DesafiosService {
    localStorage.setItem(this.desafiosEntregesById, JSON.stringify(data));
    return this;
  }
}
