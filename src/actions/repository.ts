import { Action } from '@ngrx/store';


export const RepositoryActions = {
  OPEN: '[Repository] Open',
  open(path): Action {
    return {
      type: RepositoryActions.OPEN,
      payload: path
    }
  },

  OPEN_SUCCESS: '[Repository] Open Success',
  openSuccess(nodes): Action {
    return {
      type: RepositoryActions.OPEN_SUCCESS,
      payload: nodes
    }
  },

  OPEN_FAIL: '[Repository] Open Fail',
  openFail(): Action {
    return {
      type: RepositoryActions.OPEN_FAIL,
      payload: []
    }
  },
}
