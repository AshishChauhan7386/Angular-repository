import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularModule18';
  rdata:any;
  receiveData(data:any){
    this.rdata=data;
  }
}
