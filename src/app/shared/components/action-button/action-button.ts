import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-button',
  imports: [MatIconModule, CommonModule],
  standalone: true,
  templateUrl: './action-button.html',
  styleUrl: './action-button.scss'
})
export class ActionButtonComponent {
  @Input() label: string = 'Acción';
  @Input() icon: string = ''; // Ejemplo: 'add', 'edit', 'person'
  @Input() color: string = 'from-blue-600 to-blue-400'; // Tailwind gradient opcional
  @Output() action = new EventEmitter<void>();

  onClick() {
    this.action.emit();
  }
}
