import { AppState } from '../index';

export const allFiltersSelector = (state: AppState) => state.filterState;
export const bossesSelector = (state: AppState) => state.filterState.boss;

