import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { canactiveGuard } from './shared/guards/canactive.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { core } from '@angular/compiler';
import { CoreModule } from './core/core.module';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [canactiveGuard],
    canDeactivate: [CanDeactiveGuard],
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard],
  },
];
