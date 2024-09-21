import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  private formDataSubject = new BehaviorSubject<string>("");
  formData$ = this.formDataSubject.asObservable();
  constructor() { }
  updateFormData(value: string) {
    this.formDataSubject.next(value); 
  }
}
