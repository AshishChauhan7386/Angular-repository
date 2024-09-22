import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './component/directives/directives.component';
import { DirectiveDirective } from './Directive/directive.directive';
import { PipeComponent } from './component/pipe/pipe.component';
import { ExponentialStrengthPipe } from './Pipes/exponential-strength.pipe';

import { ServiceAndDependencyInjectionComponent } from './component/service-and-dependency-injection/service-and-dependency-injection.component';
import { SortPipe } from './Pipes/sort.pipe';
import { provideHttpClient, withFetch } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    DirectiveDirective,
    PipeComponent,
    ExponentialStrengthPipe,
    SortPipe,
    ServiceAndDependencyInjectionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
