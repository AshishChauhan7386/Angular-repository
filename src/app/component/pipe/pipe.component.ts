import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  today: any = new Date();
  price: number = 2000;
  amount: number = 12;
  percentage: number = 72;
  Data: any = [
    { name: 'Ashish Chauhan', age: 22 },
    {
      name: 'Sumit Kashyap',
      age: 24,
    },
    {
      name: 'Lalit Kimer',
      age: 21
    },
    {
      name: 'Amit',
      age: 20,
    },
    {
      name: 'Mohit',
      age: 26,
    },
  ];
}
