import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(Value:any[],property:any): any {
    return Value.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
  }

}
