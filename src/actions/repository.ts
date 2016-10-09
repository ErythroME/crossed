import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';


@Injectable()
export class RepositoryActions {
  static OPEN = '[Repository] Open';
  open(path): Action {
    return {
      type: RepositoryActions.OPEN,
      payload: path
    }
  }

  static OPEN_SUCCESS = '[Repository] Open Success';
  openSuccess(nodes): Action {
    return {
      type: RepositoryActions.OPEN_SUCCESS,
      payload: nodes
    }
  }

  static OPEN_FAIL = '[Repository] Open Fail';
  openFail(): Action {
    return {
      type: RepositoryActions.OPEN_FAIL,
      payload: []
    }
  }
}
