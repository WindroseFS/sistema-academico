import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  constructor(private router: Router) {}

  irParaLista() {
    this.router.navigate(['/']);
  }

  irParaNovo() {
    this.router.navigate(['/novo']);
  }
}
