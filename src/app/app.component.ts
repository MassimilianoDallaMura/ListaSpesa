import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listaSpesa';

  constructor(private router: Router) { } 

  navigateToScanner() {
    this.router.navigate(['/scanner']);
  }
}
