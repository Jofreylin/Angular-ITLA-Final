import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IOperations } from 'src/app/models/operations';
import { OperationsService } from 'src/app/services/operations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-income',
  templateUrl: './register-income.component.html',
  styleUrls: ['./register-income.component.css']
})
export class RegisterIncomeComponent implements OnInit {


  listOperations: IOperations[] = [];
  listOperationsFiltered: IOperations[] = [];

  form: FormGroup = new FormGroup({
    description: new FormControl('',Validators.required),
    registerDate: new FormControl(this.datePipe.transform((new Date),'yyyy-MM-dd'),Validators.required),
    typeOperationId: new FormControl(1,Validators.required),
    amount: new FormControl(null,Validators.required),
  });

  constructor(private operationsService: OperationsService, private datePipe:  DatePipe) { }

  ngOnInit(): void {

    this.getOperations();
  }


  getOperations(){
    this.operationsService.getOperations().subscribe({
      next: (res)=>{
        this.listOperations = res.filter(x=>x.typeOperationId == 1);
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
        this.form.get('typeOperationId')?.setValue(1);
        this.form.get('registerDate')?.setValue(this.datePipe.transform((new Date),'yyyy-MM-dd'));
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteOperation(model: IOperations){
    Swal.fire({
      title: '¿Seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#e63946',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          title: '',
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
          allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        })
    
          this.operationsService.deleteOperation(model.id).subscribe({
            next: (res)=>{
              Swal.close();
              this.getOperations();
            },
            error: (err)=>{
              console.log(err);
              Swal.close()
            }
          })
        
      }
    })
  }

  changeListForPaginator(value: IOperations[]){
    this.listOperationsFiltered = value;
  }

}
