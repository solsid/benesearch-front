import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Volunteer } from '../../volunteer';

@Component({
    selector: 'badge',
    templateUrl: './badge.component.html',
    styleUrls:  ['./badge.component.css']/*,
    changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class BadgeComponent {

    @Input() volunteer: any;
    @Output() onPrevious = new EventEmitter<any>();
    @Output() onNext = new EventEmitter<any>();

    constructor() {
    }

    public previous = () => {
        this.onPrevious.emit(null);
    }

    public next = () => {
        this.onNext.emit(null);
    }
}
