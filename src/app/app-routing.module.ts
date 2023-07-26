import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'services',
    component:ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
