import { Component, OnInit } from '@angular/core';
import { IFilterModel, ISearcherOptions } from 'src/app/models/filter';
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
  listOperationsFilteredByKey: IOperations[] = [];

  searchOptions: ISearcherOptions[]=[
    {
      name: 'Tipo',
      attribute: 'typeOperationId',
      isDate: false,
      isMoney: false,
      isDropDown: true,
      nestedDropdown: [
        {
          name: 'Ingresos',
          value: (1).toString()
        },
        {
          name: 'Gastos',
          value: (2).toString()
        }
      ]
    },
    {
      name: 'Fecha',
      attribute: 'registerDate',
      isDate: true,
      isMoney: false,
      isDropDown: false,
      nestedDropdown: []
    },
    {
      name: 'Monto',
      attribute: 'amount',
      isDate: false,
      isMoney: true,
      isDropDown: false,
      nestedDropdown: []
    }
    
  ]
  
  

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

  changeListForPaginator(value: IOperations[]){
    this.listOperationsFiltered = value;
  }

  changeListForSearch(value: IOperations[]){
    this.listOperationsFilteredByKey = value;
  }
  

}
