import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


import { SidebarItem } from './model/sidebar-item.model';
import { SIDEBAR_ITEMS } from './data/sidebar-items.data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  @Input() open = false;

  public sidebarItems: SidebarItem[] = SIDEBAR_ITEMS;

  public siteName = 'Dockmin';

 @Output() toggleSidebar = new EventEmitter<void>();
}
