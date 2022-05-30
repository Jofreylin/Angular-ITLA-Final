import { Component, OnInit } from '@angular/core';
import { IOperations } from 'src/app/models/operations';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-list-operations',
  templateUrl: './list-operations.component.html',
  styleUrls: ['./list-operations.component.css']
})
export class ListOperationsComponent implements OnInit {

  listOperations: IOperations[] = [];
  listOperationsFiltered: IOperations[] = [];

  searchKey: string = "";

  constructor(private operationsService: OperationsService) { }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this.operationsService.getOperations().subscribe({
      next: (res)=>{
        this.listOperations = res;
        this.listOperationsFiltered = [...res];
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  deleteOperation(model: IOperations){
    this.operationsService.deleteOperation(model.id).subscribe({
      next: (res)=>{
        this.getOperations();
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  

}
