import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormdataService {
  private formDataSubject = new BehaviorSubject<string>('');
  formData$ = this.formDataSubject.asObservable();


  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateFormData(value: string) {
    this.formDataSubject.next(value);
  }

  postData(name: string, address: string): Observable<any> {
    const data = { name, address };
    const apiUrl = 'http://localhost:3000/Data';
    return this.http.post(apiUrl, data).pipe(
  
      tap(() => this.fetchData())
    );
  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/Data');
  }


  fetchData() {
    this.getData().subscribe((data: any[]) => {
      this.dataSubject.next(data);
    });
  }
}
