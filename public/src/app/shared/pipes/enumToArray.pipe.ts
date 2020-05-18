import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})

export class EnumToArrayPipe implements PipeTransform {
  transform(value: any): any {
    const keys = Object.keys(value);
    return keys.slice(0, keys.length / 2);
  }
}