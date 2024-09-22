import { Component } from '@angular/core';

@Component({
  selector: 'app-template-drivenform',
  templateUrl: './template-drivenform.component.html',
  styleUrl: './template-drivenform.component.css'
})
export class TemplateDrivenformComponent {
  user = {
    name: ''
  };
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
    
    }
  }
}
