import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterIncomeComponent } from './register-income/register-income.component';
import { RegisterExpenseComponent } from './register-expense/register-expense.component';
import { ListOperationsComponent } from './list-operations/list-operations.component';
import { NgxMaskModule } from 'ngx-mask';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterIncomeComponent,
    RegisterExpenseComponent,
    ListOperationsComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class PagesModule { }
