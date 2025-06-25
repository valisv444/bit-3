import { Routes } from '@angular/router';
import { Pag1 } from './pag1/pag1';
import { Pag2 } from './pag2/pag2';
import { Pag404 } from './pag404/pag404';

export const routes: Routes = [
  { path: '', redirectTo: '/pag1', pathMatch: 'full' },
  { path: 'pag1', component: Pag1 },
  { path: 'pag2/all', component: Pag2 },
  { path: 'pag2/:id', component: Pag2 }, 
  { path: '**', component: Pag404 }
];


