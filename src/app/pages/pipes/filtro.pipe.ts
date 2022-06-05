import { Pipe, PipeTransform } from '@angular/core';
import { IFilterModel } from 'src/app/models/filter';
import { IOperations } from 'src/app/models/operations';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], params:IFilterModel): any[] {
    
    let final = params.quantityToList * params.page;
    let beginning = final - params.quantityToList;
    
    console.log('Valores Filtro',{beginning,final})

    return value.slice(beginning,final);
  }

}
