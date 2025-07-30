import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Breadcrumb } from '../breadcrumb/breadcrumb';


@Component({
  selector: 'app-header',
  imports: [MatIconModule, Breadcrumb],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
}
