import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, prodName: string): any[] {
    const resultArray = [];
    if (
      !value ||
      value.length === 0 ||
      filterString === '' ||
      prodName === ''
    ) {
      return value;
    }
    for (const item of value) {
      if (item[prodName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
