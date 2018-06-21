import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
@Injectable()
export class FilterTablePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(singleItem => {
      
      if(singleItem.name.first.toLowerCase().indexOf(value.toLowerCase()) != -1){
        return singleItem.name.first.toLowerCase().indexOf(value.toLowerCase()) != -1;
      
      }else if(singleItem.name.last.toLowerCase().indexOf(value.toLowerCase()) != -1){
        return singleItem.name.last.toLowerCase().indexOf(value.toLowerCase()) != -1;
      
      }else if(singleItem.location.city.toLowerCase().indexOf(value.toLowerCase()) != -1){
        return singleItem.location.city.toLowerCase().indexOf(value.toLowerCase()) != -1;
      
      }else if(String(singleItem.location.postcode).toLowerCase().indexOf(value.toLowerCase()) != -1){
        return String(singleItem.location.postcode).toLowerCase().indexOf(value.toLowerCase()) != -1;
      }

    });
  } 
}
