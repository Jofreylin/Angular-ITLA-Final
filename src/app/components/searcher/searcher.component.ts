import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { INestedDropDown, ISearcherOptions } from 'src/app/models/filter';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit, OnChanges {

  @Input() list: any[] = [];
  @Input() searchOptions: ISearcherOptions[] = [];
  @Output() listFilteredOutput: EventEmitter<any[]> = new EventEmitter();

  filteredList: any[] = [];

  selectedOption: ISearcherOptions = {
    name: '',
    attribute: '',
    isDate: false,
    isMoney: false,
    isDropDown: false,
    nestedDropdown: []
  }

  selectedFromNestedDrop: INestedDropDown = {
    name: '',
    value: ''
  }

  selectedFromDate: string = '';
  selectedToDate: string = '';
  searchKey: string = '';


  constructor() { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['list']){
      this.list = changes['list'].currentValue;
      this.filterList();
    }
  }

  ngOnInit(): void {
    
  }

  filterList(){
    let attribute: string;
    let value: string;

    if(!this.selectedOption.attribute){
      this.filteredList = [...this.list];
      this.listFilteredOutput.emit(this.filteredList);
      console.log(this.filteredList)
      return;
    }

    

    if(this.selectedOption.isDropDown){
      console.log('dropdown')
      if(!this.selectedFromNestedDrop.value){
        return;
      }
      console.log('dropdown con data')
      attribute = this.selectedOption.attribute;
      value = this.selectedFromNestedDrop.value;
      this.filteredList = [...this.list.filter(x=>x[attribute].toString().toLowerCase() == value.toString().toLowerCase())];
      this.listFilteredOutput.emit(this.filteredList);
      return;
    }

    if(this.selectedOption.isDate){
      console.log('fecha')
      attribute = this.selectedOption.attribute;
      let fromDate = new Date(this.selectedFromDate);
      let toDate = new Date(this.selectedToDate);




      if(!this.selectedFromDate || !this.selectedToDate){
        this.filteredList = [...this.list];
      }else{
        this.filteredList = [...this.list.filter(x=> (new Date(x[attribute])).getTime() >= fromDate.getTime() && (new Date(x[attribute])).getTime() <= toDate.getTime()  )];
      }

      this.listFilteredOutput.emit(this.filteredList);
      return;
    }

    if(this.selectedOption.isMoney){
      console.log('dinero')
      attribute = this.selectedOption.attribute;
      value = this.searchKey;

      if(!value){
        this.filteredList = [...this.list];
      }else{
        this.filteredList = [...this.list.filter(x=> x[attribute].toString().includes(value.toString()))];
      }
      

      
      this.listFilteredOutput.emit(this.filteredList);
      return;
    }

    if(!this.selectedOption.isMoney && !this.selectedOption.isDate && !this.selectedOption.isDropDown){
      console.log('normal')
      attribute = this.selectedOption.attribute;
      value = this.searchKey;

      if(!value){
        this.filteredList = [...this.list];
      }else{
        try{
          this.filteredList = [...this.list.filter(x=> x[attribute].toString().toLowerCase().includes(value.toString().toLowerCase()))];
        }catch(e){
          this.filteredList = [...this.list];
        }
        
      }
      
      this.listFilteredOutput.emit(this.filteredList);
      return;
    }

    
  }

  changeOption(){
    console.log(this.selectedOption);
  }

}
