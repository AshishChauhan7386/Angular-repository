import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../../service/formdata.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent implements OnInit{
  today: any = new Date();
  price: number = 2000;
  amount: number = 12;
  percentage: number = 72;
  msg:string="";
 
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
  private subscription: Subscription | null=null;
  constructor(private formdata:FormdataService){

  }
  ngOnInit(): void {
    this.subscription = this.formdata.formData$.subscribe((data:string)=>{
      
this.msg=data      

    })
  }
}
