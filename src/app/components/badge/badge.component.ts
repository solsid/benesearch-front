import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Volunteer } from '../../volunteer';

@Component({
    selector: 'badge',
    templateUrl: './badge.component.html',
    styleUrls:  ['./badge.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit {

    private volunteer: Volunteer;

    constructor() {
    }

    ngOnInit(): void {
        this.volunteer = {
            name: 'Jean DUPONT',
            team: 'Backline',
            rights: 'P M'
        };
    }

}
