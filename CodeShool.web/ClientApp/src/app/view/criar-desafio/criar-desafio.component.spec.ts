import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDesafioComponent } from './criar-desafio.component';

describe('CriarDesafioComponent', () => {
  let component: CriarDesafioComponent;
  let fixture: ComponentFixture<CriarDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarDesafioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
