import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesafiosConteudoComponent } from './lista-desafios-conteudo.component';

describe('ListaDesafiosConteudoComponent', () => {
  let component: ListaDesafiosConteudoComponent;
  let fixture: ComponentFixture<ListaDesafiosConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDesafiosConteudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDesafiosConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
