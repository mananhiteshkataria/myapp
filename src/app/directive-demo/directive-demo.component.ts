import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {
users: any|undefined;
counter=0;
handleClick(): void
{
  this.counter++;
  if(this.counter%2==0)
  {
  this.users=undefined;
}else{
  this.users=[{id:100,name:"Manan",age:24},{id:200,name:"Max",age:34},{id:300,name:"Manav",age:44}];
}
}
}
