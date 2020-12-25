import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {


  constructor(private router: Router,private usuarioService: UsuarioService) { }
  ngOnInit(): void {

  }

  createCont(): void {
    this.router.paramsInheritanceStrategy = 'emptyOnly';
    this.router.navigate(['/register']);
  }

  cadastrar(){
    this.router.paramsInheritanceStrategy = 'emptyOnly';
    this.router.navigate(['/']);
  }
}
