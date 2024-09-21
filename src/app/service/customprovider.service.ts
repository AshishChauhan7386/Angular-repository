import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class fakeData {

  constructor() { }
  getdata(){
    return "This Is A Fake Message"
  }
}

@Injectable({
  providedIn: 'root'
})

export class ActualData {

  constructor() { }
  getdata(){
    return "This Is A Actual Message"
  }
}

