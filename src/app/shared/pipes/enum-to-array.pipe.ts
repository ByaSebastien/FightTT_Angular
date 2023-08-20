import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value: any, emptyLine: boolean = false): string[] {
    if (emptyLine) {
      return [null, ...Object.keys(value).map(v => value[v as keyof typeof value])];
    }
    return [...Object.keys(value).map(v => value[v as keyof typeof value])];
  }

}
