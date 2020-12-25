import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModulosComponent } from './lista-modulos.component';

describe('ListaModulosComponent', () => {
  let component: ListaModulosComponent;
  let fixture: ComponentFixture<ListaModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
