import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOperationsComponent } from './list-operations/list-operations.component';
import { RegisterExpenseComponent } from './register-expense/register-expense.component';
import { RegisterIncomeComponent } from './register-income/register-income.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register-income',
    component: RegisterIncomeComponent
  },
  {
    path: 'register-expense',
    component: RegisterExpenseComponent
  },
  {
    path: 'register-income/:type',
    component: RegisterIncomeComponent
  },
  {
    path: 'register-expense/:type',
    component: RegisterExpenseComponent
  },
  {
    path: 'list-operations',
    component: ListOperationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
