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

}
