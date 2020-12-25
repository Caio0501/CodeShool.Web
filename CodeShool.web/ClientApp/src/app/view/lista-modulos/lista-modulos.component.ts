import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinguagensService } from 'src/app/services/linguagens.service';


@Component({
  selector: 'app-lista-modulos',
  templateUrl: './lista-modulos.component.html',
  styleUrls: ['./lista-modulos.component.css']
})
export class ListaModulosComponent implements OnInit {

  public dataSource

  constructor(private router: Router, private linguagensService: LinguagensService) { }

  ngOnInit(): void {
    if (this.router.paramsInheritanceStrategy === "emptyOnly") {
      this.router.navigate(['/']);
    } else {
      this.dataSource = this.router.paramsInheritanceStrategy;
    }
  }
  back() {
    this.router.paramsInheritanceStrategy = this.dataSource;
    this.router.navigate(['/'], this.dataSource);
  }
}
