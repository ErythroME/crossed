import { ActionReducer, Action } from '@ngrx/store';

import { TreeNode } from '../models/tree-node';

export interface AppState {
  node: TreeNode,
  text: string
}

export const INCREMENT = 'INCREMENT';

export const INITIAL_STATE = {
  node: null,
  text: ''
}

export const repositoryReducer: ActionReducer<AppState> =
  (state: AppState=INITIAL_STATE, action: Action) => {
    switch (action.type) {
    case 'OPEN_REPOSITORY_SUCCESS':
      return Object.assign({}, state, {
        node: action.payload
      })
    default:
      return state;
    }
}
