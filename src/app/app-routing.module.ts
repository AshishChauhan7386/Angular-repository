import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServiceComponent } from './component/service/service.component';
import { GalleryComponent } from './component/gallery/gallery.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "component2",
    component:AboutComponent, 
    children:[
      {
        path:"Gallery",
        component:GalleryComponent
      }
    ]
  },
  {
    path: "component3",
    component:ServiceComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
