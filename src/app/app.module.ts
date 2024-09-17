import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DOMChangeComponent } from './Component/domchange/domchange.component';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './Component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DOMChangeComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
