import { Routes } from '@angular/router';
import { canMatchGuard } from './guard/can-match.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/curso.routes').then((r) => r.cursoRoutes),
    canMatch: [canMatchGuard],
  },
  {
    path: '**',
    title: '',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
