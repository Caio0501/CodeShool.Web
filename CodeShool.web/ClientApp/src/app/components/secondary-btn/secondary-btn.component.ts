import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrls: ['./secondary-btn.component.css']
})
export class SecondaryBtnComponent implements OnInit {
  @Input() label;
  
  constructor() { }

  ngOnInit(): void {

  }

}
