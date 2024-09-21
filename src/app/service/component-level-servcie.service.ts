import { Injectable } from '@angular/core';

@Injectable()
export class ComponentLevelServcieService {

  constructor() { }
  msg(){
    return "This Is A Component Service"
  }
}
