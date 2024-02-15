import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Home da página',
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'sobre',
        title: 'Sobre da página',
        loadComponent: () => import('./pages/sobre/sobre.component'),
      },
      {
        path: 'servicos/:id',
        title: 'Serviços da página',
        loadComponent: () =>
          import('./pages/servicos-prestados/servicos-prestados.component'),
      },
    ],
  },
  {
    path: '**',
    title: '',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
