import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameformat'
})
export class NameformatPipe implements PipeTransform {
// we will use {{name| nameFormat : gender,married}}
  transform(value: string, ...args: any[]): string {
   args.forEach((item, index) => {
    console.log(item);
   })
   let maleCounter = 0;
   let femaleCounter = 0;
   let marriedCounter = 0;
   for(let i = 0; i < args.length; i++) {
    if(args[i] == true) {
      marriedCounter++;
    }
    if(args[i] == 'Male') {
      maleCounter++;
    }
    if(args[i] == 'Female') {
      femaleCounter++;
    }
   }
   if(femaleCounter > 0 && marriedCounter > 0) {
    return 'Mrs. '+value;
   }
   if(femaleCounter >0 && marriedCounter == 0) {
    return 'Ms. '+value;
   }
   else {
    return 'Mr.'+value;
   }
    
  }

}
