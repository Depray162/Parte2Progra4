import { Component, OnInit} from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Cita } from '../../model/cita';
import { timer } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../services/cita.service';
import { DocService } from '../../services/doc.service';
import { Doctor } from '../../model/doctor';

@Component({
  selector: 'app-agendar-citar',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule],
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css'
})
export class AgendarCitaComponent implements OnInit{

  public status: number;
  public cita: Cita;
  public medicos: Doctor[] = [];

  constructor(private citaService: CitaService, private router: Router, private docService: DocService) {
    this.status = -1;
    this.cita = new Cita(1, '', '','','', '', 1, 1);
  }

  ngOnInit() {
    this.docService.obtenerusers().subscribe(
      {
        next: (response:any)  => {
          if (response && response.data) {
            this.medicos = response.data;
          }
        },
      }
    );
  }

  onSubmit(form: any) {
    this.citaService.create(this.cita).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status === 201) {
          form.reset();
          this.changeStatus(0);
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
