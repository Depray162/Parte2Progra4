import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-doc',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './login-doc.component.html',
  styleUrl: './login-doc.component.css'
})
export class LoginDocComponent {

}
