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

  OPEN_FILE: '[File] Open',
  openFile(path): Action {
    return {
      type: RepositoryActions.OPEN_FILE,
      payload: path
    }
  },

  OPEN_FILE_SUCCESS: '[File] Open Success',
  openFileSuccess(content): Action {
    return {
      type: RepositoryActions.OPEN_FILE_SUCCESS,
      payload: content
    }
  },

  OPEN_FILE_FAIL: '[File] Open Fail',
  openFileFail(): Action {
    return {
      type: RepositoryActions.OPEN_FILE_FAIL,
      payload: ''
    }
  },
}
