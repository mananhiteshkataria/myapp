import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
  username="guest";
  firstname=" ";
  lastname= " ";
  
  // below is function that can update the name
  updatename(name:string):void
  {
    this.username=name;
  }
  isDisabled=true;
  
  // below function is called on each input
  handleChange(name:string): void
  {
    if(name.length==0)
    {
      this.isDisabled=true;
     
    }
    else
    {
      this.isDisabled=false;
      
    }
  }
  mystyles={"background-color": "aquamarine"}
  items=["welcome","hello","bye"];
  users=[{name:"Manan", age:24},{name:"Virat",age:25}]
item1=true;
item2=false;
item3=undefined;
item4="Kami";

}
