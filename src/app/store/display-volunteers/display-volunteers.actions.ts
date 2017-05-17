import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState} from '../index';
import { ChoiceElement } from '../../components/choice-inline/choice-element';

export const DISPLAY_VOLUNTEERS_ACTION = {
    SWITCH_DISPLAY_MODE: 'SWITCH_DISPLAY_MODE'
};

@Injectable()
export class DisplayVolunteersActions {
    constructor(private store: NgRedux<AppState>) {
    }

    public switchDisplayMode = (choice: ChoiceElement) => {
        this.store.dispatch({
            type: DISPLAY_VOLUNTEERS_ACTION.SWITCH_DISPLAY_MODE,
            mode: choice
        });
    }
}
