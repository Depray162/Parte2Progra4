import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from '../../model/doctor';
import { timer } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-medico',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './register-medico.component.html',
  styleUrl: './register-medico.component.css'
})
export class RegisterMedicoComponent {

  public status: number;
  public doctor: Doctor;

  constructor(private adminService: AdminService, private router: Router) {
    this.status = -1;
    this.doctor = new Doctor(1, '', '', '', '', '', '', '','');
  }

  onSubmit(form: any) {
    this.adminService.create(this.doctor).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status === 201) {
          form.reset();
          this.changeStatus(0);
          this.router.navigate(['/adminComponent']);
        } else {
          this.changeStatus(1);
        }
      },
      error: (error: any) => {
        this.changeStatus(2);
      }
    });
  }

  changeStatus(st: number) {
    this.status = st;
    let countdown = timer(5000);
    countdown.subscribe(() => {
      this.status = -1;
    });
  }
}
