import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiaComponent } from './logia.component';

describe('LogiaComponent', () => {
  let component: LogiaComponent;
  let fixture: ComponentFixture<LogiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
