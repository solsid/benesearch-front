import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgesService } from '../../services/badges.service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'badges',
    templateUrl: './badges.container.html',
})
export class BadgesContainer {

    public volunteers: any;
    public volunteer: any;
    public volunteerIndex = 0;

    public loadingVolunteers = false;

    private volunteersFile: File = null;
    private teamLeadersFile: File = null;
    private nonLeaderAccessRightsFile: File = null;
    private leaderAccessRightsFile: File = null;

    constructor(private badgesService: BadgesService) {
    }

    volunteersFileChange = (event) => {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.volunteersFile = fileList[0];
        }
    }

    teamLeadersFileChange = (event) => {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.teamLeadersFile = fileList[0];
        }
    }

    nonLeaderAccessRightsFileChange = (event) => {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.nonLeaderAccessRightsFile = fileList[0];
        }
    }

    leaderAccessRightsFileChange = (event) => {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.leaderAccessRightsFile = fileList[0];
        }
    }

    getVolunteersWithAccessRights = () => {
        this.badgesService.getVolunteersWithAccessRights(
            this.volunteersFile,
            this.teamLeadersFile,
            this.nonLeaderAccessRightsFile,
            this.leaderAccessRightsFile).subscribe(
                res => {
                    this.volunteers = res;
                    this.volunteer = res[0];
                    this.loadingVolunteers = false;
                },
                err => {
                    // Log errors if any
                    console.log(err);
                    this.loadingVolunteers = false;
                }
            );
        this.loadingVolunteers = true;
    }

    previous = () => {
        if (this.volunteerIndex > 0) {
            this.volunteerIndex--;
            this.volunteer = this.volunteers[this.volunteerIndex];
        }
    }

    next = () => {
        if (this.volunteerIndex < (this.volunteers.length - 1)) {
            this.volunteerIndex++;
            this.volunteer = this.volunteers[this.volunteerIndex];
        }
    }

    action = () => {
        if (this.formComplete()) {
            this.getVolunteersWithAccessRights();
        }
    }

    private formComplete = () => {
        return this.volunteersFile != null && (this.nonLeaderAccessRightsFile != null || this.leaderAccessRightsFile != null);
    }
}
