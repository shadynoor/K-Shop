import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, number:number ,  ...args: unknown[]): unknown {
    return value.slice(0,number);
  }

}
