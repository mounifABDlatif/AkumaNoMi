import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameciaComponent } from './paramecia.component';

describe('ParameciaComponent', () => {
  let component: ParameciaComponent;
  let fixture: ComponentFixture<ParameciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
