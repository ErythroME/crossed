import {
  Component,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: 'home page',
})

export default class Home {
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.navigate([ 'repo' ])
  }
}
