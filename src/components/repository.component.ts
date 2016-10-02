import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers/repository';
import { TreeNode } from '../models/tree-node';

@Component({
  selector: 'repository',
  template: require('./repository.html'),
  styles: [require('./repository.css')],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Native
})

export default class Repository {
  node: Observable<TreeNode>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.node = store.select<AppState>('repository').map(r => r.node)
  }

  ngOnInit() {
    this.store.dispatch({
      type: 'OPEN_REPOSITORY',
      payload: {
        path: process.cwd()
      }
    })
  }
}
