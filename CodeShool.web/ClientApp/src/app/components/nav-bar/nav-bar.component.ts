import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarPara(value) {
    switch (value) {
      case '/':
        this.router.paramsInheritanceStrategy = "emptyOnly";
        this.router.navigate(['/']);
        break;
      case 'perfil':
        this.router.paramsInheritanceStrategy = "emptyOnly";
        this.router.navigate(['/perfil']);
        break;
      case 'desafios':
        this.router.paramsInheritanceStrategy = "emptyOnly";
        this.router.navigate(['/desafios']);
        break;
      case 'playground':
        this.router.paramsInheritanceStrategy = "emptyOnly";
        this.router.navigate(['/playground']);

        break;
      default:
        this.router.paramsInheritanceStrategy = "emptyOnly";
        this.router.navigate(['/']);
        break;
    }
  }

}
