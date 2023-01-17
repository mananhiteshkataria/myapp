import { Component, Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input()
  itemname :string="";

  @Output()
  itemCounter:EventEmitter<number>= new EventEmitter<number>();
  ctr:number=0;// ctr that increments in handleClick
  // function that emits the value to parent component
  handleClick()
  {
    this.ctr++;
    this.itemCounter.emit(this.ctr);
  }
}
