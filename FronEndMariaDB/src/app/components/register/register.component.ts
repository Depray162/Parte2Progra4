import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { PacService } from '../../services/pac.service';
import { Paciente } from '../../model/paciente';
import { timer } from 'rxjs';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public status: number;
  public paciente: Paciente;

  constructor(private pacService: PacService, private router: Router) {
    this.status = -1;
    this.paciente = new Paciente(1, '', '', 1, '', '', '', '');
  }

  onSubmit(form: any) {
    this.pacService.register(this.paciente).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status === 201) {
          form.reset();
          this.changeStatus(0);
          this.router.navigate(['/login']);
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
