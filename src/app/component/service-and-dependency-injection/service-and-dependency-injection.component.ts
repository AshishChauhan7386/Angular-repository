import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ComponentLevelServcieService } from '../../service/component-level-servcie.service';

@Component({
  selector: 'app-service-and-dependency-injection',
  templateUrl: './service-and-dependency-injection.component.html',
  styleUrl: './service-and-dependency-injection.component.css',
  providers:[ComponentLevelServcieService ]
  
})
export class ServiceAndDependencyInjectionComponent {
  data:string[];
  msg:string;
constructor(private dataservice:DataService, private componetlevelservice:ComponentLevelServcieService){
this.data=this.dataservice.getData();
this.msg=this.componetlevelservice.msg();
}


}
