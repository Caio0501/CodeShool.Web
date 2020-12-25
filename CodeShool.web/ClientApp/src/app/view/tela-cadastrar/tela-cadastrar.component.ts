import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tela-cadastrar',
  templateUrl: './tela-cadastrar.component.html',
  styleUrls: ['./tela-cadastrar.component.css']
})
export class telaCadastrarComponent implements OnInit {

  public formModel: FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.criarFormulario()
  }


  criarFormulario() {
    this.formModel = this.fb.group({
      name: new FormControl('', Validators.required),
      username: null,
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  loginScreen(): void {
    this.router.paramsInheritanceStrategy = 'emptyOnly';
    this.router.navigate(['/login']);
  }

  cadastrar() {
    this.formModel.value.username = '@' + this.formModel.value.name;

    this.usuarioService.criarUsuario(this.formModel.value).subscribe(result => {
      console.log(result, 'usuario criado')
    }, error => {
      console.log(error, 'erro ao criar usuario')
    })
  }

}
