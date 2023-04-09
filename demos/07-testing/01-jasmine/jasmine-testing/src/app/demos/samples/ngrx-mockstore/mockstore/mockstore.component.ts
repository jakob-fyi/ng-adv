import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllDemos } from '../../../state/demo.selectors';
import { DemoState } from '../../../state/demos.reducer';

@Component({
  selector: 'app-mockstore',
  templateUrl: './mockstore.component.html',
  styleUrls: ['./mockstore.component.scss']
})
export class MockstoreComponent {

  demos = this.store.select(getAllDemos);

  constructor(private store: Store<DemoState>) { }
}
