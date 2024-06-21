import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponentsComponent } from './landing-components/landing-components.component';
import { LoginDocComponent } from './components/login-doc/login-doc.component';
import { AdminComponent } from './components/admin/admin.component';
import { MedicoComponent } from './components/medico/medico.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminPacienteComponent } from './components/admin-paciente/admin-paciente.component';
import { UpdateDocComponent } from './components/update-doc/update-doc.component';
import { RegisterMedicoComponent } from './components/register-medico/register-medico.component';

export const routes: Routes = [
    {path:'',component:LandingComponentsComponent},
    {path:'login',component:LoginComponent},
    {path:'loginDoc',component:LoginDocComponent},
    
    {path:'landing-components',component:LandingComponentsComponent},

    {path:'adminComponent', component:AdminComponent},
    {path:'medicoCompont',component: MedicoComponent},



    { path: 'editMedico/:id', component: UpdateDocComponent },
    {path:'register',component: RegisterComponent},
    {path:'registerMed',component: RegisterMedicoComponent},
    {path:'adminPaciente',component: AdminPacienteComponent},
];
