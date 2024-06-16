import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponentsComponent } from './landing-components/landing-components.component';

export const routes: Routes = [
    {path:'',component:LandingComponentsComponent},
    {path:'login',component:LoginComponent},
    {path:'landing-components',component:LandingComponentsComponent}
];
