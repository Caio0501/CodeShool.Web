import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-modulos-conteudo',
  templateUrl: './lista-modulos-conteudo.component.html',
  styleUrls: ['./lista-modulos-conteudo.component.css']
})
export class ListaModulosConteudoComponent implements OnInit {

  public dataSource;
  public dataMoudulos = [];
  public databack;
  public index = 0;
  public numberIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.paramsInheritanceStrategy === "emptyOnly") {
      this.router.navigate(['/']);
    } else {
      this.dataSource = this.router.paramsInheritanceStrategy['value'];
      this.databack = this.router.paramsInheritanceStrategy['backValue'];
      this.dataMoudulos = this.router.paramsInheritanceStrategy['indexsList'];
    }

    this.numberIndex = this.dataMoudulos.length
    this.index = this.dataSource.index
    this.index -= 1
    console.log(this.index)
  }

  nextIndex() {
    this.index = this.dataSource.index

    console.log(this.index, this.dataSource.index)
    if (this.index != this.numberIndex) {
      this.dataSource = this.dataMoudulos[this.index];
    } else if (this.index >= this.numberIndex) {
      this.index = this.numberIndex - 1
    }
  }

  previousIndex() {

    if (this.index <= this.numberIndex && this.index >= 1) {
      this.index -= 1
      this.dataSource = this.dataMoudulos[this.index];
    } else if (this.dataSource.index === 1) {
      this.index = 0
    }
  }

  back() {
    this.router.paramsInheritanceStrategy = this.databack;
    this.router.navigate(['/modulos'], this.databack);
  }
}
