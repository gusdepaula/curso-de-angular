import { Routes } from '@angular/router';
import { canActivateGuard } from 'app/guard/can-activate.guard';

export const cursoRoutes: Routes = [
  {
    path: '',
    title: 'Home da página',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'sobre',
    title: 'Sobre da página',
    loadComponent: () => import('./sobre/sobre.component'),
    canActivate: [canActivateGuard],
  },
  {
    path: 'servicos/:id',
    title: 'Serviços da página',
    loadComponent: () =>
      import('./servicos-prestados/servicos-prestados.component'),
  },
];
