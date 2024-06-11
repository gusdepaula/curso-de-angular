import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';
import { canactiveGuard } from './shared/guards/canactive.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';

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
];
