import { createReducer, on } from '@ngrx/store';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  changeTitle,
  toggleMockAuthenticated,
  toggleSideNav,
} from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  title: string;
  sideNavVisible: boolean;
  sideNavPosition: string;
  IsMockAuthenticated: boolean;
}

export const initialAppState: AppState = {
  title: 'Advanced Angular Development',
  sideNavVisible: true,
  sideNavPosition: 'side',
  IsMockAuthenticated: false,
};

export const appReducer = createReducer(
  initialAppState,
  on(changeTitle, (state, action) => {
    return { ...state, title: action.title };
  }),
  on(toggleMockAuthenticated, (state, action) => {
    return { ...state, IsMockAuthenticated: !state.IsMockAuthenticated };
  }),
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
  }))
);
