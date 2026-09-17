import { Routes } from '@angular/router';

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
    path: 'host/new',
    loadComponent: () =>
      import('./pages/host-new/host-new').then(m => m.HostNew)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];