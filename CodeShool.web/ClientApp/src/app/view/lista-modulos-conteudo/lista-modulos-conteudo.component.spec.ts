import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaModulosConteudoComponent } from './lista-modulos-conteudo.component';


describe('ListaModulosConteudoComponent', () => {
  let component: ListaModulosConteudoComponent;
  let fixture: ComponentFixture<ListaModulosConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaModulosConteudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaModulosConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
