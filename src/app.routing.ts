import {
  Injectable,
  ModuleWithProviders
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Routes,
  Router,
  RouterModule,
} from '@angular/router';

import Home from './components/home.component';
import Repository from './components/repository.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'repo', component: Repository }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
