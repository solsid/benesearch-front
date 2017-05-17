import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { select } from '@angular-redux/store';
import { ChoiceElement } from '../../components/choice-inline/choice-element';
import { DisplayVolunteersActions } from '../../store/display-volunteers/display-volunteers.actions';
import { FilterState, AppState } from '../../store';
import { Observable, Subscription } from 'rxjs/Rx';
import { DisplayModes } from './display-modes';

@Component({
    selector: 'display-volunteers',
    templateUrl: './display-volunteers.container.html',
    styleUrls:  ['./display-volunteers.container.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayVolunteersContainer implements OnInit, OnDestroy {

    public displayModesArray: ChoiceElement[];
    @select((state: AppState) => state.displayVolunteersState.displayModes) public displayModesObservable: Observable<DisplayModes>;
    private displayModesSubscription: Subscription;

    public displayModesLabel: string;

    constructor(private displayVolunteersActions: DisplayVolunteersActions) {
    }

    ngOnInit() {
        this.displayModesSubscription = this.displayModesObservable.subscribe(
        (displayModes) => {
            this.displayModesArray = Object.keys(displayModes).filter(key => displayModes[key].label).map(key => displayModes[key]);
            this.displayModesLabel = displayModes.label;
        });
    }

    ngOnDestroy() {
        this.displayModesSubscription.unsubscribe();
    }

    public switchDisplayMode = (choice: ChoiceElement) => {
        this.displayVolunteersActions.switchDisplayMode(choice);
    }
}
