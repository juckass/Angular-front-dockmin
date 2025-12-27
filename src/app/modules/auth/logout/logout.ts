import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { logout } from '../store/auth.actions';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.html'  // Template simple, ya que redirige rápido
})
export class LogoutComponent implements OnInit {
  private authService = inject(AuthService);
  private store = inject(Store);
  private router = inject(Router);

  ngOnInit() {
    // Llamar al backend (el interceptor agrega el token automáticamente)
    this.authService.logout().subscribe({
      next: () => console.log('Logout backend ok'),
      error: (err) => {
        console.error('Error logout backend:', err);
        // Redirigir igual
        this.redirectAfterLogout();
      },
      complete: () => {
        this.redirectAfterLogout();
      }
    });
  }

  // Método separado para redirigir
  private redirectAfterLogout() {
    // Limpiar estado NgRx
    this.store.dispatch(logout());
    
    // Borrar tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    
    // Redirigir
    this.router.navigate(['/login']);
  }
}