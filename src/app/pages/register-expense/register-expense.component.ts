import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOperations } from 'src/app/models/operations';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-register-expense',
  templateUrl: './register-expense.component.html',
  styleUrls: ['./register-expense.component.css']
})
export class RegisterExpenseComponent implements OnInit {

  listOperations: IOperations[] = [];
  listOperationsFiltered: IOperations[] = [];
  form: FormGroup = new FormGroup({
    description: new FormControl('',Validators.required),
    registerDate: new FormControl(this.datePipe.transform((new Date),'yyyy-MM-dd'),Validators.required),
    typeOperationId: new FormControl(2,Validators.required),
    amount: new FormControl(null,Validators.required),
  });

  constructor(private operationsService: OperationsService, private datePipe:  DatePipe) { }

  ngOnInit(): void {

    this.getOperations();
  }


  getOperations(){
    this.operationsService.getOperations().subscribe({
      next: (res)=>{
        this.listOperations = res.filter(x=>x.typeOperationId == 2);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  saveOperation(){

    if(this.form.invalid){
      return;
    }

    this.form.get('amount')?.setValue(parseFloat(this.form.get('amount')?.value));

    this.operationsService.postOperation(this.form.value).subscribe({
      next:()=>{
        this.form.reset();
        this.getOperations();
        this.form.get('typeOperationId')?.setValue(2);
        this.form.get('registerDate')?.setValue(this.datePipe.transform((new Date),'yyyy-MM-dd'));
      },
      error:(err)=>{
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

}
