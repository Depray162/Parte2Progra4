import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { LoginDocComponent } from '../login-doc/login-doc.component';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../model/paciente';
import { PacService } from '../../services/pac.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet, RouterLink, LoginDocComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public status:number;
  public paciente:Paciente;
  constructor(
    private pacService:PacService,
    private _router:Router,
    private _routes:ActivatedRoute
  ){
    this.status=-1;
    this.paciente=new Paciente(1,"","",1,"","","","")
  }


  onSubmit(form:any){
    // console.log("Iniciando sesión")
    // console.log(this.user.email)
    this.pacService.login(this.paciente).subscribe({
      next:(response:any)=>{        
        if(response.status!=401){
          sessionStorage.setItem("token",response);
          this.pacService.getIdentityFromAPI().subscribe({
            next:(resp:any)=>{
              console.log(resp);
              sessionStorage.setItem('identity',JSON.stringify(resp));
              this._router.navigate(['']);
            },
            error:(error:Error)=>{
            }
          })
        }else{
          this.status=0;
        }
        
      },
      error:(err:any)=>{
        this.status=1;
      }
    })
  }

}
