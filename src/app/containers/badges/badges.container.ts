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

    public loading: boolean = false;

    private volunteersFile: File = null;
    private accessRightsFile: File = null;

    constructor(private badgesService: BadgesService) {
    }

    public volunteersFileChange = (event) => {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            this.volunteersFile = fileList[0];
        }

        if (this.volunteersFile != null && this.accessRightsFile != null) {
            this.getVolunteersWithAccessRights();
        }
    }

    public accessRightsFileChange = (event) => {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            this.accessRightsFile = fileList[0];
        }

        if (this.volunteersFile != null && this.accessRightsFile != null) {
            this.getVolunteersWithAccessRights();
        }
    }

    public getVolunteersWithAccessRights = () => {
        this.badgesService.getVolunteersWithAccessRights(this.volunteersFile, this.accessRightsFile).subscribe(
            res => {
                this.volunteers = res;
                this.volunteer = res[0];
                this.loading = false;
            },
            err => {
                // Log errors if any
                console.log(err);
                this.loading = false;
            }
        );
        this.loading = true;
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
}
