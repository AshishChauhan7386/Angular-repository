import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ComponentLevelServcieService } from '../../service/component-level-servcie.service';
import { ActualData, fakeData } from '../../service/customprovider.service';
import { FormdataService } from '../../service/formdata.service';

@Component({
  selector: 'app-service-and-dependency-injection',
  templateUrl: './service-and-dependency-injection.component.html',
  styleUrl: './service-and-dependency-injection.component.css',
  providers: [
    ComponentLevelServcieService,
    { provide: fakeData, useClass: ActualData },
  ],
})
export class ServiceAndDependencyInjectionComponent {
  data: string[];
  msg: string;
  custommsg: string;
  formDataValue: string = '';
  constructor(
    private dataservice: DataService,
    private componetlevelservice: ComponentLevelServcieService,
    private fakeservice: fakeData,
    private formdata:FormdataService
  ) {
    this.data = this.dataservice.getData();
    this.msg = this.componetlevelservice.msg();
    this.custommsg = this.fakeservice.getdata();
    this.formdata.formData$.subscribe((data:any)=>{
      this.formDataValue=data;
          })
  
  }
  saveData(){
    
this.formdata.updateFormData(this.formDataValue);
console.log(this.formDataValue);
  }
  
}
