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
        this.totalExpenses = res.length > 0 ? res.filter(x=>x.typeOperationId == 2).length : 0;
        this.totalIncomes = res.length > 0 ? res.filter(x=>x.typeOperationId == 1).length: 0;
        this.totalOperations = res.length;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
