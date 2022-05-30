import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIncomeComponent } from './register-income.component';

describe('RegisterIncomeComponent', () => {
  let component: RegisterIncomeComponent;
  let fixture: ComponentFixture<RegisterIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
