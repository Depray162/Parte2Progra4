import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginDocComponent } from './components/login-doc/login-doc.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'loginDoc',component:LoginDocComponent}

];
