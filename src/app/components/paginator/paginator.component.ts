import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IFilterModel } from 'src/app/models/filter';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() list: any[] = [];
  //@Output() listParamsOutput: EventEmitter<IFilterModel> = new EventEmitter();
  @Output() listTransformedOutput: EventEmitter<any[]> = new EventEmitter();


  listTransformed: any[] = [];

  listParams: IFilterModel = {
    page: 1,
    quantityToList: 5
  }

  listOfQuantities = [5,10,20,30,50];

  maxOfPages: number = 1;

  constructor() {
   this.transformList(this.list,this.listParams);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['list']){
      this.list = changes['list'].currentValue;

      this.listParams =  {
        page: this.listParams.page = 1,
        quantityToList: this.listParams.quantityToList
      };

      this.transformList(this.list,this.listParams);
      this.listTransformedOutput.emit(this.listTransformed);
    }
    //console.log(changes);
  }

  ngOnInit(): void {
  }

  goNextPage(){

    if(this.list.length > 0)
    {
      this.listParams =  {
        page: this.listParams.page += 1,
        quantityToList: this.listParams.quantityToList
      };
  
      this.transformList(this.list,this.listParams);

      //this.listParamsOutput.emit(this.listParams);
      this.listTransformedOutput.emit(this.listTransformed);
    }
    
  }

  goPreviusPage(){
    if(this.listParams.page > 1){
      this.listParams =  {
        page: this.listParams.page -= 1,
        quantityToList: this.listParams.quantityToList
      };

      this.transformList(this.list,this.listParams);

      //this.listParamsOutput.emit(this.listParams);
      this.listTransformedOutput.emit(this.listTransformed);
    }
  }

  changeQuantityToList(quantity: number){
    console.log(quantity)
    if(quantity == 0 || quantity == null){
      quantity = 5;
    }
    
    this.listParams =  {
      page: this.listParams.page,
      quantityToList: this.listParams.quantityToList = quantity
    };

    this.transformList(this.list,this.listParams);

    //this.listParamsOutput.emit(this.listParams);
    this.listTransformedOutput.emit(this.listTransformed);
  }

  transformList(value: any[], params:IFilterModel) {
    
    let final = params.quantityToList * params.page;
    let beginning = final - params.quantityToList;

    this.listTransformed = value.slice(beginning,final);
  }

  
}
