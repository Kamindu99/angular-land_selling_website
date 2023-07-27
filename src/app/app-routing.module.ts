import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HousespageComponent } from './housespage/housespage.component';
import { ApartmentspageComponent } from './apartmentspage/apartmentspage.component';
import { LandspageComponent } from './landspage/landspage.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'lands',
    component:LandspageComponent
  },
  {
    path:'apartments',
    component:ApartmentspageComponent
  },
  {
    path:'houses',
    component:HousespageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
