import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'stays',
    loadComponent: () =>
      import('./pages/stays/stays').then(m => m.Stays)
  },
  {
    path: 'stays/:id',
    loadComponent: () =>
      import('./pages/stay-details/stay-details').then(m => m.StayDetails)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then(m => m.RegisterPage)
  },
  {
    path: 'host/new',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/host-new/host-new').then(m => m.HostNew)
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./pages/admin/admin').then(m => m.Admin)
  },
  {
    path: 'not-allowed',
    loadComponent: () =>
      import('./pages/not-allowed/not-allowed').then(m => m.NotAllowed)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];