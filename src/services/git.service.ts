const Git = require('nodegit')

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';


class Node {
  type: string;
  constructor(private path, private name) {}
}

class TreeNode extends Node {
  type = 'folder'
  children = []

}

class LeafNode extends Node {
  type = 'file'
}

@Injectable()
export default class GitService {
  private nodeTree: TreeNode;
  private tree: any;

  constructor(private _ngZone: NgZone) {}

  growTree(tree, node, parts) {
    const [head, ...tail] = parts
    if (tail.length) {
      let subtree = tree.children.find(node => node.name === head)
      if (!subtree) {
        const path = tree.path ? `${tree.path}/${head}` : head
        subtree = new TreeNode(path, head)
        tree.children.push(subtree)
      }
      this.growTree(subtree, node, tail)
    } else {
      tree.children.push(node)
    }
  }

  buildTree(tree, entry) {
    const parts = entry.split('/')
    const node = new LeafNode(entry, parts.slice(-1)[0])
    this.growTree(tree, node, parts)
  }

  openRepository(path) {
    return new Observable(obs => {
      Git.Repository.open(path)
        .then(repo => repo.getMasterCommit())
        .then(commit => commit.getTree())
        .then(tree => {
          this.tree = tree;
          this.nodeTree = new TreeNode('', '')
          const walker = tree.walk();
          walker.on('entry', t => this.buildTree(this.nodeTree, t.path()))
          walker.on('end', () => {
            this._ngZone.run(() => {
              obs.next(this.nodeTree)
              obs.complete()
            })
          })
          walker.start();
        })
    })
  }

  openFile(path) {
    return new Observable(obs => {
      if (!this.tree) return obs.error()
      this.tree.getEntry(path)
        .then(entry => entry.getBlob())
        .then(blob => {
          this._ngZone.run(() => {
            obs.next(blob.toString())
            obs.complete()
          })
          return blob.toString()
        })
    })
  }
}
