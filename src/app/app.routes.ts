import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./modules/dashboard/dashboard')
            },
            {
                path: 'clientes',
                loadComponent: () => import('./modules/clientes/clientes')
            },
            {
                path: 'ambientes',
                loadComponent: () => import('./modules/ambientes/ambientes')
            },
            {
                path: 'usuarios',
                loadComponent: () => import('./modules/usuarios/usuarios')
            },
            {
                path: 'roles',
                loadComponent: () => import('./modules/roles/roles')
            },
            {
                path: 'dockers',
                loadComponent: () => import('./modules/dockers/dockers')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./modules/auth/login/login').then(m => m.LoginComponent)
    },
    {
        path:'**',
        redirectTo: 'dashboard',
    }
    
];
