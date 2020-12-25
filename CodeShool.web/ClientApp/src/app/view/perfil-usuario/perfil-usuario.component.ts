import { Component, OnInit } from '@angular/core';
import { LinguagensService } from 'src/app/services/linguagens.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  public dataSource
  constructor(private linguagensService: LinguagensService) { }

  ngOnInit(): void {
   this.dataSource = this.linguagensService.getLinguagen();
  }

}
