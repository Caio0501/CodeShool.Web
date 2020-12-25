import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesafiosService } from 'src/app/services/desafios.service';

@Component({
  selector: 'app-lista-desafios-conteudo',
  templateUrl: './lista-desafios-conteudo.component.html',
  styleUrls: ['./lista-desafios-conteudo.component.css']
})
export class ListaDesafiosConteudoComponent implements OnInit {

  public dataSource;
  public dataSourceEntreges;
  public liberarPush = false
  public formModel: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private serviceDesafio: DesafiosService) { }

  ngOnInit(): void {
    this.criarFormulario()

    if (this.router.paramsInheritanceStrategy === "emptyOnly") {
      this.router.navigate(['/']);
    } else {
      this.dataSource = this.router.paramsInheritanceStrategy;
    }
    this.loadEntreges()
  }

  criarFormulario() {
    this.formModel = this.fb.group({
      id: null,
      idDesafio: null,
      nomeCriador: 'Caio Eduardo',
      dataCriacao: new Date(),
      url: new FormControl('', Validators.required),
    });
  }

  aceitarDesafio() {

    let dados = this.dataSource
    let listaLocal = [];

    if (this.serviceDesafio.getSeusDesafioAceitos() != null) {

      dados.id = this.serviceDesafio.getSeusDesafioAceitos().length + 1

      this.serviceDesafio.getSeusDesafioAceitos().forEach(element => {

        if (element.id != dados.id) {
          listaLocal.push(element)
          this.liberarPush = true
        } else {
          this.liberarPush = false
        }

      });

      if (this.liberarPush) {
        listaLocal.push(dados)
        this.serviceDesafio.setSeusDesafioAceitos(listaLocal)
      }

    } else {
      dados.id = 1

      listaLocal.push(dados)
      this.serviceDesafio.setSeusDesafioAceitos(listaLocal)
    }
  }

  entregar() {
    let listaLocal = [];

    if (this.serviceDesafio.getSeusDesafioEntreges() != null) {

      this.formModel.value.id = this.serviceDesafio.getSeusDesafioEntreges().length + 1
      this.formModel.value.idDesafio = this.dataSource.id;

      this.serviceDesafio.getSeusDesafioEntreges().forEach(element => {

        if (element.id != this.formModel.value.id) {
          listaLocal.push(element)
          this.liberarPush = true
        } else {
          this.liberarPush = false
        }

      });

      if (this.liberarPush) {
        listaLocal.push(this.formModel.value)
        this.serviceDesafio.setSeusDesafioEntrege(listaLocal)
      }

    } else {
      this.formModel.value.id = 1
      this.formModel.value.idDesafio = this.dataSource.id;

      listaLocal.push(this.formModel.value)
      this.serviceDesafio.setSeusDesafioEntrege(listaLocal)
    }
    this.loadEntreges()
  }

  loadEntreges() {
    if (this.serviceDesafio.getDesafioEntregesById()) {
      this.dataSourceEntreges = this.serviceDesafio.getDesafioEntregesById().filter(a => a.idDesafio === this.dataSource.id);
    }
  }

  abrirProjeto(value) {
    this.router.paramsInheritanceStrategy = value;
    this.router.navigate(['/playground/ide']);
  }

}
//https://stackblitz.com/edit/js-vzeonk?file=index.js