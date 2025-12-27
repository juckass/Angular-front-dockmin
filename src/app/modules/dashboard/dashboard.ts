import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../auth/store/auth.selectors';  // Ajusta la ruta
import { Usuario } from '../auth/model/auth.models';  // Importa el tipo

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export default class Dashboard {
  private store = inject(Store);  // Inyecta Store

  // Selecciona el usuario (usando signal para reactividad)
  user = this.store.selectSignal(selectUser);  // Esto es un signal que se actualiza automáticamente

  constructor() {
    console.log(this.user());  // Accede al valor actual del signal
  }
  // Si prefieres observable (sin signal):
  // user$ = this.store.select(selectUser);
}
