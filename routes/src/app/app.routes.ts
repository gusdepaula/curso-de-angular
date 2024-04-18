import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: PageHomeComponent, pathMatch: 'full' },
  { path: 'sobre', component: PageSobreComponent },
];
