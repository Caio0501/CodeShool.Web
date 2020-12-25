import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaugoundIdeComponent } from './playground-ide.component';

describe('PlaugoundIdeComponent', () => {
  let component: PlaugoundIdeComponent;
  let fixture: ComponentFixture<PlaugoundIdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaugoundIdeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaugoundIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
