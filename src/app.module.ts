import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  routing,
  appRoutingProviders
} from './app.routing'
import { RepositoryEffects } from './effects/repository';
import GitService from './services/git.service';
import { repositoryReducer, INITIAL_STATE } from './reducers/repository';
import AppComponent from './components/app.component';
import Home from './components/home.component';
import Repository from './components/repository.component';
import SourceTree from './components/source-tree.component';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    EffectsModule.run(RepositoryEffects),
    StoreModule.provideStore({
      repository: repositoryReducer
    }, INITIAL_STATE)
  ],
  declarations: [
    AppComponent,
    Home,
    Repository,
    SourceTree
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    appRoutingProviders,
    GitService,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
