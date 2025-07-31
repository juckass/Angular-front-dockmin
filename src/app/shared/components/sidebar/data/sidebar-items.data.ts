import { SidebarItem } from '../model/sidebar-item.model';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
  { name: 'Clientes', icon: 'people', route: '/clientes' },
  { name: 'Ambientes', icon: 'home', route: '/ambientes' },
  { name: 'Usuarios', icon: 'person', route: '/usuarios' },
  { name: 'Roles', icon: 'security', route: '/roles' },
  { name: 'Dockers', icon: 'docker_logo', route: '/dockers' }
];