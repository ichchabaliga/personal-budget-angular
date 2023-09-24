import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    pathMatch:'full'
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },{
    path:'Contact',
    component:ContactComponent
  },{
    path:'**',
    component:P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
