import { combineReducers, Reducer } from 'redux';

import { BossChoices } from '../containers/filter/boss-choices';

import { defaultFilterState, filterReducer } from './filter/filter.reducer';

export interface FilterState {
    boss: BossChoices;
}

export interface AppState {
    filterState: FilterState;
}

export const defaultState: AppState = {
    filterState: defaultFilterState
};

export const rootReducer: Reducer<AppState> = combineReducers<AppState> ({
    filterState: filterReducer
});

