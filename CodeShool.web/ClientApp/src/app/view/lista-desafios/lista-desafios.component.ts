import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesafiosService } from 'src/app/services/desafios.service';

@Component({
  selector: 'app-lista-desafios',
  templateUrl: './lista-desafios.component.html',
  styleUrls: ['./lista-desafios.component.css']
})
export class ListaDesafiosComponent implements OnInit {

  public dataSourceAll = [];
  public dataSourceAceitos = [];
  public dataSourceEntregues= [];

  public desafiosEntreges = [
    { id: null, nome: null, url: null, desafioId: null }
  ]

  constructor(private router: Router, private serviceDesafio: DesafiosService) { }

  ngOnInit(): void {
    this.getall()
    this.getDesafiosAceitos()
    this.getDesafioEntregues()
  }

  criarDesafio() {
    this.router.paramsInheritanceStrategy = "emptyOnly";
    this.router.navigate(['/desafios/criar']);
  }

  openDesafio(value) {
    this.router.paramsInheritanceStrategy = value;
    this.router.navigate(['/desafios/conteudo'], value);
  }

  getall() {
    this.dataSourceAll = this.serviceDesafio.getDesafio()
  }

  getDesafiosAceitos() {
    this.dataSourceAceitos = this.serviceDesafio.getSeusDesafioAceitos()
  }

  getDesafioEntregues() {
    this.dataSourceEntregues = this.serviceDesafio.getSeusDesafioEntreges()
  }
  
  abrirProjeto(value) {
    this.router.paramsInheritanceStrategy = value;
    this.router.navigate(['/playground/ide']);
  }
}
