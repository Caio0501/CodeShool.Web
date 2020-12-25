import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesafiosService } from 'src/app/services/desafios.service';

@Component({
  selector: 'app-criar-desafio',
  templateUrl: './criar-desafio.component.html',
  styleUrls: ['./criar-desafio.component.css']
})
export class CriarDesafioComponent implements OnInit {

  public formModel: FormGroup;
  public liberarPush: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private serviceDesafio: DesafiosService) { }

  ngOnInit(): void {
    this.criarFormulario()
  }

  criarFormulario() {
    this.formModel = this.fb.group({
      id: null,
      titulo: new FormControl('', Validators.required),
      nomeCriador: 'Caio Eduardo',
      dataCriacao: new Date(),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar() {
    console.log(this.formModel.value)

    let listaLocal = [];

    if (this.serviceDesafio.getDesafio() != null) {

      this.formModel.value.id = this.serviceDesafio.getDesafio().length + 1

      this.serviceDesafio.getDesafio().forEach(element => {

        if (element.id != this.formModel.value.id) {
          listaLocal.push(element)
          this.liberarPush = true
        } else {
          this.liberarPush = false
        }

      });

      if (this.liberarPush) {
        listaLocal.push(this.formModel.value)
        this.serviceDesafio.setDesafio(listaLocal)
      }

    } else {
      this.formModel.value.id = 1
      listaLocal.push(this.formModel.value)
      this.serviceDesafio.setDesafio(listaLocal)
    }

  }

  back() {
    this.router.paramsInheritanceStrategy = "emptyOnly";
    this.router.navigate(['/desafios'],);
  }
}
