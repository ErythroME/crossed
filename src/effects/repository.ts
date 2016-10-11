import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import GitService from '../services/git.service'
import { RepositoryActions } from '../actions/repository';


@Injectable()
export class RepositoryEffects {
  constructor(
    private actions$: Actions,
    private gitService: GitService,
  ) { }

  @Effect() open$ = this.actions$
    .ofType(RepositoryActions.OPEN)
    .map(toPayload)
    .switchMap(payload => this.gitService.openRepository(payload)
      .map(RepositoryActions.openSuccess)
      .catch(() => Observable.of(RepositoryActions.openFail()))
    )

  @Effect() openFile$ = this.actions$
    .ofType(RepositoryActions.OPEN_FILE)
    .map(toPayload)
    .switchMap(payload => this.gitService.openFile(payload)
      .map(RepositoryActions.openFileSuccess)
      .catch(() => Observable.of(RepositoryActions.openFileFail()))
    )
}
