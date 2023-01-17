import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';
  username="Manan";
  usernamesArray=["Sachin","Kohli","Dhoni"];
  counter : number =0;

}
