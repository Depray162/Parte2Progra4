import { Component } from '@angular/core';

import { RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../model/doctor';
import { DocService } from '../../services/doc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-doc',
  standalone: true,
  imports: [FormsModule,RouterLink, RouterOutlet],
  templateUrl: './login-doc.component.html',
  styleUrl: './login-doc.component.css',
  providers:[DocService]
})
export class LoginDocComponent {

  public status:number;
  public doctor:Doctor;
  constructor(
    
    private docService:DocService,
    private _router:Router,
    private _routes:ActivatedRoute
  ){
    this.status=-1;
    this.doctor=new Doctor(1,"","","","","","","","")
  }


  onSubmit(form:any){
    // console.log("Iniciando sesión")
    // console.log(this.user.email)
    this.docService.login(this.doctor).subscribe({
      next:(response:any)=>{        
        if(response.status!=401){
          sessionStorage.setItem("token",response);
          this.docService.getIdentityFromAPI().subscribe({
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
