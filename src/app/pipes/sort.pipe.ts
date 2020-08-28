import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    //console.log(JSON.stringify(value));
    console.log("pipe triggered");
    if(value.length === 0 || filterString === ''){
      return value;      
    }
    
    // const resultArray = [];
    // for(const item of value){
    //   if(item.status.toLowerCase().includes(filterString)){
    //     resultArray.push(item);
    //   }
    // //
    // }
    //return resultArray;
    return value.filter(m=>m.status.toLowerCase().includes(filterString.toLowerCase()));
  }

    
    
  }


