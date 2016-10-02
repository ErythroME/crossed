import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import GitService from '../services/git.service'


@Injectable()
export class RepositoryEffects {
  constructor(
    private actions$: Actions,
    private gitService: GitService,
  ) { }

  @Effect() open$ = this.actions$
    .ofType('OPEN_REPOSITORY')
    .map(action => action.payload)
    .switchMap(payload => this.gitService.openRepository(payload.path)
      .map(res => {
        return {
          type: 'OPEN_REPOSITORY_SUCCESS',
          payload: res
        }
      })
      .catch(() => Observable.of({ type: 'OPEN_REPOSITORY_FAILED' }))
    )
}
