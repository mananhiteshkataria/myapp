import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameformat'
})
export class NameformatPipe implements PipeTransform {
// we will use {{name| nameFormat : gender}}
  transform(value: string,args: string): string {
    if(args=='Male') return 'Mr. '+value;
    else return 'Ms. '+value;
  }

}
