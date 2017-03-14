import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer';
import { VOLUNTEERS } from './mock-volunteers';

@Injectable()
export class VolunteerService {
    getVolunteers(): Volunteer[] {
        return VOLUNTEERS;
    }
}
