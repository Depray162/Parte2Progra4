import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Paciente } from '../../model/paciente';
import { PacService } from '../../services/pac.service';

@Component({
  selector: 'app-admin-paciente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-paciente.component.html',
  styleUrl: './admin-paciente.component.css'
})
export class AdminPacienteComponent implements OnInit {

  Pacientes: Paciente[] = [];
  Paciente: Paciente = new Paciente(0, '', '', 0, '', '', '','');
  searchText: string = '';
  TipoMedico: any;

  constructor(private pacService: PacService) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.pacService.obtenerusers().subscribe(
      (response) => {
        if (response && response.data) {
          this.Pacientes = response.data;
        }
      },
      error => {
        console.error('Error fetching Pacientes', error);
      }
    );
  }

  addUser(): void {
    // Implementa la lógica para añadir un nuevo usuario
  }

  editUser(user: any): void {
    // Implementa la lógica para editar un usuario
  }

  deleteUser(paciente: Paciente): void {
    if (confirm(`¿Estás seguro de que deseas eliminar al médico ${paciente.nombre}?`)) {
      this.pacService.eliminarPac(paciente.idPaciente).subscribe({
        next: response => {
          console.log('Response from server:', response);
          this.Pacientes = this.Pacientes.filter(d => d.idPaciente !== paciente.idPaciente);
        },
        error: error => {
          console.error('Error al eliminar el Paciente', error);
        }
      });
    }
  }
 
  
}

