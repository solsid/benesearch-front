import { combineReducers, Reducer } from 'redux';

import { BossChoices } from '../containers/filter/boss-choices';
import { DisplayModes } from '../containers/display-volunteers/display-modes';

import { defaultFilterState, filterReducer } from './filter/filter.reducer';
import { defaultDisplayVolunteersState, displayVolunteersReducer } from './display-volunteers/display-volunteers.reducer';

export interface FilterState {
    boss: BossChoices;
}

export interface DisplayVolunteersState {
    displayModes: DisplayModes;
}

export interface AppState {
    filterState: FilterState;
    displayVolunteersState: DisplayVolunteersState;
}

export const defaultState: AppState = {
    filterState: defaultFilterState,
    displayVolunteersState: defaultDisplayVolunteersState
};

export const rootReducer: Reducer<AppState> = combineReducers<AppState> ({
    filterState: filterReducer,
    displayVolunteersState: displayVolunteersReducer
});

