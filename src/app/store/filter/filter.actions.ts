import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState} from '../index';
import { ChoiceElement } from '../../components/choice-inline/choice-element';

export const FILTER_ACTION = {
    CHANGE_BOSS_FILTER: 'CHANGE_BOSS_FILTER'
};

@Injectable()
export class FilterActions {
    constructor(private store: NgRedux<AppState>) {
    }

    public changeBossFilter = (choice: ChoiceElement) => {
        this.store.dispatch({
            type: FILTER_ACTION.CHANGE_BOSS_FILTER,
            choice
        });
    }
}
