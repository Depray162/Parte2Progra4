import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor';
import { DocService } from '../../services/doc.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  Doctores: Doctor[] = [];
  Doctor: Doctor = new Doctor(0, '', '', '', '', '', '','','');
  searchText: string = '';
  TipoMedico: any;

  constructor(private docService: DocService) {}

  ngOnInit(): void {
    this.obtenerDoctores();
    const identity = sessionStorage.getItem('identity');
    if (identity) {
        this.TipoMedico = JSON.parse(identity).iss;
    } else {
        this.TipoMedico = null;
    }
  }

  obtenerDoctores(): void {
    this.docService.obtenerusers().subscribe(
      (response) => {
        if (response && response.data) {
          this.Doctores = response.data;
        }
      },
      error => {
        console.error('Error fetching Doctores', error);
      }
    );
  }

  addUser(): void {
    // Implementa la lógica para añadir un nuevo usuario
  }

  editUser(user: any): void {
    // Implementa la lógica para editar un usuario
  }

  deleteUser(user: any): void {
    // Implementa la lógica para eliminar un usuario
  }
}

