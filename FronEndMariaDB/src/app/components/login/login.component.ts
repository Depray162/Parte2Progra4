import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { LoginDocComponent } from '../login-doc/login-doc.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginDocComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public identity:any;
}
