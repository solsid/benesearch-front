import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ChoiceElement} from './choice-element';

@Component({
    selector: 'choice-inline',
    templateUrl: './choice-inline.component.html',
    styleUrls:  ['./choice-inline.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceInlineComponent {

    @Input() choices: ChoiceElement[];
    @Input() singleChoice: boolean;

    constructor() {
    }

    public onChoiceSelected = (choice: ChoiceElement) => {
    }
}
