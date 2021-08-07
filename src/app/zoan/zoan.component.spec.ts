import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoanComponent } from './zoan.component';

describe('ZoanComponent', () => {
  let component: ZoanComponent;
  let fixture: ComponentFixture<ZoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
