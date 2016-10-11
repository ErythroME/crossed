import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers/repository';
import { RepositoryActions } from '../actions/repository';

@Component({
  selector: 'source-view',
  template: '<div>{{ content | async }}</div>',
})

export default class SourceView {
  content: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) {
    this.content = store.select<AppState>('repository').map(r => r.text)
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url.length) {
        this.store.dispatch(RepositoryActions.openFile(url[0].path));
      }
    })
  }
}
