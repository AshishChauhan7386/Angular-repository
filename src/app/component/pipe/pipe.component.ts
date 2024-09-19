import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
today:any=new Date();
price:number=2000;
amount:number=12;
percentage:number=72
}
