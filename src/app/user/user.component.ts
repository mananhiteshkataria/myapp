import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
firstname ="Manan";
lastname="Kataria";
gender="Male";
obj={
  location:"1001/1002 10th floor 36 babulnath",
  address:{city:"Mumbai",state:"Maharashtra",postcode:400007}
}
}
