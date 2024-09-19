import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
isVisible:boolean=true;
Data:any=[
  {
name:"Ashish Chauhan",
age:21
  },
  {
    name:'Anshu Chauhan',
    age:22
  }
]
selectedOption: string = '';
isActive:boolean=false
toggleActive(){
  this.isActive=!this.isActive
}
}
