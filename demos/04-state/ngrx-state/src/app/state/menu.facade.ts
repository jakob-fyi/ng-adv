import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';
import { AppState } from './app.reducer';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  toggleSideNav,
} from './app.actions';
import { getSideNavVisible, getSideNavPosition } from './app.selector';



@Injectable({
  providedIn: 'root',
})
export class MenuFacade {

  breakpointObserver = inject(BreakpointObserver);
  store = inject(Store<AppState>);

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        tap((matchesBreakpoint) => {
          console.log(matchesBreakpoint);
          const position = matchesBreakpoint.matches ? 'over' : 'side';
          const visible = matchesBreakpoint.matches ? false : true;
          this.store.dispatch(changeSideNavVisible({ visible }));
          this.store.dispatch(changeSideNavPosition({ position }));
        })
      ).subscribe();
  }

  getSideNavVisible() {
    return this.store.select(getSideNavVisible);
  }

  getSideNavPosition() {
    return this.store.select(getSideNavPosition);
  }

  toggleMenuVisibility() {
    this.store.dispatch(toggleSideNav());
  }
}
