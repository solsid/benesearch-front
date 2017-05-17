import { Action, Reducer } from 'redux';

import { DisplayVolunteersState } from '../index';
import { DISPLAY_VOLUNTEERS_ACTION } from './display-volunteers.actions';
import { ChoiceElement } from '../../components/choice-inline/choice-element';

export const defaultDisplayVolunteersState: DisplayVolunteersState = {
    displayModes: {
        label: 'Vue',
        list: {
            label: 'Liste',
            active: false
        },
        badge: {
            label: 'Badge',
            active: true
        }
    }
};

export const displayVolunteersReducer: Reducer<DisplayVolunteersState> = (
    state: DisplayVolunteersState = defaultDisplayVolunteersState,
    action: Action) => {

        let newState;
        switch (action.type) {
            case DISPLAY_VOLUNTEERS_ACTION.SWITCH_DISPLAY_MODE:
                newState = {...state};
                const mode: ChoiceElement = action['mode'];
                for (const i in newState.displayModes) {
                    if (newState.displayModes.hasOwnProperty(i)) {
                        if (newState.displayModes[i].label) {
                            newState.displayModes[i].active = !newState.displayModes[i].active;
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
