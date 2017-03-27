import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Volunteer } from './volunteer';
import { VolunteerService } from './volunteer.service';
import { ChoiceElement } from './components/choice-inline/choice-element';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:  ['./app.component.css'],
    providers: [VolunteerService]
})
export class AppComponent implements OnInit {

    choices: ChoiceElement[];
    volunteers: Volunteer[];

    constructor(private volunteerService: VolunteerService) {
    }

    ngOnInit(): void {
        this.choices = [{'label': 'Choix 1'}, {'label': 'Choix 2'}];
        this.volunteers = this.volunteerService.getVolunteers();
    }
}
