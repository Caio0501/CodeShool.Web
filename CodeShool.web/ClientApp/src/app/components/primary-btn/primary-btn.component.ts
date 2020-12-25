import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.css']
})
export class PrimaryBtnComponent implements OnInit {
  @Input() label;

  constructor() { }

  ngOnInit(): void {
  }

}
