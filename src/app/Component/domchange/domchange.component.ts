import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-domchange',
  templateUrl: './domchange.component.html',
  styleUrl: './domchange.component.css'
})
export class DOMChangeComponent {
//   @ViewChild('ptag') divElement!:ElementRef;
//   // changetext(){
//   //  this.divElement.nativeElement.innerText="This Is A Paragraph Tag."
//   // }
//   @HostListener('mouseover') onMouseOver(){
//     console.log('Mouse is over the text!');
//     this.divElement.nativeElement.innerText="A"
//   }
isHighlighted = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
