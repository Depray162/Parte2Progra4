import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { DocService } from '../../src/app/services/doc.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private checkIdentity: any;
  public identity: any;

  constructor(private doctorService: DocService) {
    this.checkIdentity = setInterval(() => {
      this.identity = this.doctorService.getIdentityFromStorage();
    }, 500);
  }

  ngOnDestroy() {
    if (this.checkIdentity) {
      clearInterval(this.checkIdentity);
    }
  }
}
