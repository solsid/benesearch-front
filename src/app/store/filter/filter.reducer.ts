import { Action, Reducer } from 'redux';

import { FilterState } from '../index';
import { FILTER_ACTION } from './filter.actions';
import { ChoiceElement } from '../../components/choice-inline/choice-element';

export const defaultFilterState: FilterState = {
    boss: {
        label: 'default',
        includeBosses: {
            label: 'Oui',
            active: true
        },
        includeNonBosses: {
            label: 'Non',
            active: true
        }
    }
};

export const filterReducer: Reducer<FilterState> = (
    state: FilterState = defaultFilterState,
    action: Action) => {

        let newState;
        switch (action.type) {
            case FILTER_ACTION.CHANGE_BOSS_FILTER:
                newState = {...state};
                const choice: ChoiceElement = action['choice'];
                for (const i in newState.boss) {
                    if (newState.boss.hasOwnProperty(i)) {
                        if (newState.boss[i].label === choice.label) { // Change state of the right boss choice
                            newState.boss.label = String(choice.label);
                            newState.boss[i].active = !newState.boss[i].active;
                        }
                    }
                }
                break;
            default:
                newState = state;
                break;
        }
        return newState;
};
