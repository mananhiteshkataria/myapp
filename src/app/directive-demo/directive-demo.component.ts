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
  this.users=[{id:100,name:"Manan Kataria",age:24,salary:400000,dob:"1998-08-22",gender:"Male"},
  {id:200,name:"Max Lemin",age:34,salary:50000,dob:"1988-08-22",gender:"Male"},
  {id:300,name:"Mansi Mashru",age:44,salary:5000,dob:"1978-08-22",gender:"Female"}];
}
}
}
