import { Component } from '@angular/core';

import { RouterLink,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-expediente',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './expediente.component.html',
  styleUrl: './expediente.component.css'
})
export class ExpedienteComponent {

}
