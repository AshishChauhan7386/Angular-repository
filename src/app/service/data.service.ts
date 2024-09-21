import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getData(){
    return ["Ashish Chauhan", "Anshu Chauhan" , "Sumit", "Mohit", "Lalit"]
  }
}
