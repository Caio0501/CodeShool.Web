import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesafiosComponent } from './lista-desafios.component';

describe('DesafiosComponent', () => {
  let component: ListaDesafiosComponent;
  let fixture: ComponentFixture<ListaDesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDesafiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
