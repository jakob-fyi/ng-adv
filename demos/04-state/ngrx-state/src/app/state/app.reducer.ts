import { createReducer, on } from '@ngrx/store';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  toggleMockAuthenticated,
  toggleSideNav,
} from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  IsMockAuthenticated: boolean;
  sideNavVisible: boolean;
  sideNavPosition: string;
}

export const initialAppState: AppState = {
  IsMockAuthenticated: false,
  sideNavVisible: true,
  sideNavPosition: 'side',
};

export const appReducer = createReducer(initialAppState,
  on(toggleSideNav, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
  on(changeSideNavVisible, (state, action) => ({
    ...state,
    sideNavVisible: action.visible,
  })),
  on(changeSideNavPosition, (state, action) => ({
    ...state,
    sideNavPosition: action.position,
  })),
  on(toggleMockAuthenticated, (state, action) => {
    return { ...state, IsMockAuthenticated: !state.IsMockAuthenticated };
  }),
);
