import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
 templateUrl: './app.html',
 styleUrl: './app.css'
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