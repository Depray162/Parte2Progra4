import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LoginDocComponent } from './components/login-doc/login-doc.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path:'',component:LandingComponentsComponent},
    {path:'login',component:LoginComponent},
    {path:'loginDoc',component:LoginDocComponent},
    {path:'landing-components',component:LandingComponentsComponent},
    {path:'adminComponent', component:AdminComponent}
];
