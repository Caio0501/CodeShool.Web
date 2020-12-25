import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { LinguagensService } from 'src/app/services/linguagens.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public dataSource = []
  public dataProgresso = [];
  public liberarPush = false;

  public UserList = [
    { xp: 0, nome: 'Caio Eduardo' },
    { xp: 0, nome: 'Thiago' },
    { xp: 0, nome: 'Kleytin' },
    { xp: 0, nome: 'Victhor' },
    { xp: 0, nome: 'Davi' },
    { xp: 0, nome: 'Yan' },
  ];



  constructor(private router: Router, private linguagensService: LinguagensService) { }

  ngOnInit(): void {
    this.load()
  }

  load(): void {
    this.linguagensService.getAll().subscribe(result => {
      this.dataSource = result
    })
    if (this.linguagensService.getLinguagen() != null) {
      this.dataProgresso = this.linguagensService.getLinguagen();
    }
  }

  abrirMateria(value): void {
    console.log(value)
    if (value) {
      this.router.paramsInheritanceStrategy = value;
      this.router.navigate(['/modulos'], value);
    }
    this.iniciarMateria(value)
  }

  iniciarMateria(item) {
    let listaLocal = [];

    const dados = {
      id: item.id,
      imgURL: item.img,
      linguagen: item.linguagen,
      progresso: 0,
    }

    if (this.linguagensService.getLinguagen() != null) {
      this.linguagensService.getLinguagen().forEach(element => {

        if (element.id != item.id) {
          listaLocal.push(element)
          this.liberarPush = true
        } else {
          this.liberarPush = false
        }

      });

      if (this.liberarPush) {
        listaLocal.push(dados)
        this.linguagensService.setLinguagen(listaLocal)
      }

    } else {
      listaLocal.push(dados)
      this.linguagensService.setLinguagen(listaLocal)
    }
  }


}
