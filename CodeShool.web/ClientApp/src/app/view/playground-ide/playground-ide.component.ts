import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground-ide',
  templateUrl: './playground-ide.component.html',
  styleUrls: ['./playground-ide.component.css']
})
export class PlaugoundIdeComponent implements OnInit {

  public ideUrl;
  public dados;

  constructor(private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.dados = this.router.paramsInheritanceStrategy;
    this.updateURL()
  }

  updateURL() {
    this.ideUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dados.url);
  }
}
