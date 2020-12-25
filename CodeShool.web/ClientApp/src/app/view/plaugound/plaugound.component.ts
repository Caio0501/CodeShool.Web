import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plaugound',
  templateUrl: './plaugound.component.html',
  styleUrls: ['./plaugound.component.css']
})
export class PlaugoundComponent implements OnInit {

  public dados = [
    { id: 1, descricao: 'Javascript', img: 'assets/img/JavaScript.svg', url: 'https://stackblitz.com/fork/js' },
    { id: 4, descricao: 'React.JS', img: 'assets/img/React.svg', url: 'https://stackblitz.com/fork/react' },
    { id: 5, descricao: 'React.TS', img: 'assets/img/React.svg', url: 'https://stackblitz.com/fork/react-ts' },
    { id: 6, descricao: 'Angular', img: 'assets/img/Angular.svg', url: 'https://stackblitz.com/fork/angular-ivy' },
    { id: 7, descricao: 'Vue.Js', img: 'assets/img/Vue.svg', url: 'https://stackblitz.com/fork/vue' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirIde(value): void {
    this.router.paramsInheritanceStrategy = value;
    this.router.navigate(['/playground/ide']);
  }
}
