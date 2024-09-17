import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{
  data:string="Ashish Chauhan"
  @Input() eventEmitter:EventEmitter<string>=new EventEmitter<string>();
ngOnInit(): void {
  this.eventEmitter.emit(this.data)
}
}
