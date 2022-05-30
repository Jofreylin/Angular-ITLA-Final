import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterExpenseComponent } from './register-expense.component';

describe('RegisterExpenseComponent', () => {
  let component: RegisterExpenseComponent;
  let fixture: ComponentFixture<RegisterExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
