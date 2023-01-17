import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameformat'
})
export class NameformatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
