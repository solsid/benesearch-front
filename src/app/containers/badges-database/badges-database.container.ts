import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgesService } from '../../services/badges.service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'badges-database',
    templateUrl: './badges-database.container.html',
})
export class BadgesDatabaseContainer {

    public volunteers: any;

    public loadingVolunteers = false;
    public loadingFile = false;

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

    generateBadgeDatabaseInputFile = () => {
        this.badgesService.generateBadgeDatabaseInputFile(
            this.volunteersFile,
            this.teamLeadersFile,
            this.nonLeaderAccessRightsFile,
            this.leaderAccessRightsFile).subscribe(
                res => {
                    const blob = new Blob([res], { type: 'application/octet-stream' });
                    saveAs(blob, 'badge_database_input_file.zip');
                    this.loadingFile = false;
                },
                err => {
                    // Log errors if any
                    console.log(err);
                    this.loadingFile = false;
                }
            );
        this.loadingFile = true;
    }

    action = () => {
        if (this.formComplete()) {
            this.generateBadgeDatabaseInputFile();
        }
    }

    private formComplete = () => {
        return this.volunteersFile != null && (this.nonLeaderAccessRightsFile != null || this.leaderAccessRightsFile != null);
    }
}
