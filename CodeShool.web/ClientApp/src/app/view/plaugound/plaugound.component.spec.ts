import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaugoundComponent } from './plaugound.component';

describe('PlaugoundComponent', () => {
  let component: PlaugoundComponent;
  let fixture: ComponentFixture<PlaugoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaugoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaugoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
