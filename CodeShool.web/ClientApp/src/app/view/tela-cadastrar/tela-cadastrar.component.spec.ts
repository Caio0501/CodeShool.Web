import { ComponentFixture, TestBed } from '@angular/core/testing';

import { telaCadastrarComponent } from './tela-cadastrar.component';

describe('telaCadastrarComponent', () => {
  let component: telaCadastrarComponent;
  let fixture: ComponentFixture<telaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ telaCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(telaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
