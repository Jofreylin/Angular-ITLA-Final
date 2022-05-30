import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalOperations: number = 0;
  totalIncomes: number = 0;
  totalExpenses: number = 0;

  constructor(private operationsService: OperationsService) { }

  ngOnInit(): void {
    this.operationsService.getOperations().subscribe({
      next: (res)=>{
        res.length > 0 ? res.filter(x=>x.typeOperationId == 2).forEach(y=>{this.totalExpenses = this.totalExpenses + y.amount}) : 0;
        res.length > 0 ? res.filter(x=>x.typeOperationId == 1).forEach(y=>{this.totalIncomes = this.totalIncomes + y.amount}) : 0;
        res.length > 0 ? res.forEach(y=>{this.totalOperations = this.totalOperations + y.amount}) : 0;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
