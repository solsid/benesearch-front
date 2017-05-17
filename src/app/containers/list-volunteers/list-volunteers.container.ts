import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Volunteer } from '../../volunteer';
import { VolunteerService } from '../../volunteer.service';
import { ChoiceElement } from '../../components/choice-inline/choice-element';

@Component({
    selector: 'list-volunteers',
    templateUrl: './list-volunteers.container.html',
    styleUrls:  ['./list-volunteers.container.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListVolunteersContainer implements OnInit {

    choices: ChoiceElement[];
    volunteers: Volunteer[];

    constructor(private volunteerService: VolunteerService) {
    }

    ngOnInit(): void {
        this.choices = [{'label': 'Choix 1'}, {'label': 'Choix 2'}];
        this.volunteers = this.volunteerService.getVolunteers();
    }
}
