import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'detalhes/:nome',
    loadComponent: () =>
      import('./pages/detalhes/detalhes.page').then(m => m.DetalhesPage),
  },
];
