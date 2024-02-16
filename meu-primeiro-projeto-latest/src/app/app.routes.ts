import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/curso.routes').then((r) => r.cursoRoutes),
  },
  {
    path: '**',
    title: '',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
