import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Volunteer } from './volunteer';
import { VolunteerService } from './volunteer.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [VolunteerService]
})
export class AppComponent implements OnInit {

    volunteers: Volunteer[];

    constructor(private volunteerService: VolunteerService) {
    }

    ngOnInit(): void {
        this.volunteers = this.volunteerService.getVolunteers();
    }
}
