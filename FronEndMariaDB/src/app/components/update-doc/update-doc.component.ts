import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../model/doctor';
import { DocService } from '../../services/doc.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-medico',
  standalone: true,
  imports: [FormsModule],
 templateUrl: './update-doc.component.html',
  styleUrl: './update-doc.component.css'
})
export class UpdateDocComponent implements OnInit {

  public status: number;
  public doctor: Doctor;

  constructor(
    private docService: DocService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.status = -1;
    this.doctor = new Doctor(0, '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.docService.getDoctorById(id).subscribe({
      next: (response: any) => {
        if (response) {
          this.doctor = response;
        }
      },
      error: (error: any) => {
        console.error('Error fetching doctor', error);
      }
    });
  }

  onSubmit(form: any): void {
    this.docService.updateDoctor(this.doctor).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status === 200) {
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

  changeStatus(st: number): void {
    this.status = st;
    setTimeout(() => {
      this.status = -1;
    }, 5000);
  }

}
