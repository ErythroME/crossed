import { Component, Input } from '@angular/core';

import { TreeNode } from '../models/tree-node'


@Component({
  selector: 'source-tree',
  template: require('./source-tree.html'),
})

export default class SourceTree {
  @Input()
  nodes: Array<TreeNode>;
}
