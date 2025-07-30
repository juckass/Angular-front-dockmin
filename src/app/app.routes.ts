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
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./modules/auth/login/login')
    },
    {
        path:'**',
        redirectTo: 'dashboard',
    }
    
];
