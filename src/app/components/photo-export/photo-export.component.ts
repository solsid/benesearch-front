import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PhotoExportService } from '../../services/photo-export/photo-export.service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'photo-export',
    templateUrl: './photo-export.component.html',
    styleUrls:  ['./photo-export.component.css']
})
export class PhotoExportComponent {

    public downloadToolTipMessage = 'Le téléchargement de l\'intégralité des photos des bénévoles peut prendre plusieurs minutes. Il se fera en plusieurs parties, chaque partie comporte les photos de 100 bénévoles.';
    public teams: string[];
    public missingPhotos = {'Accessibilité': 0, 'Appro Boissons - Gratuités': 2, 'Artistique - Régie Village': 1, 'Camping': 3};
    public enabledExport: boolean = false;
    public enableExport: boolean = false;

    private file: File;

    constructor(private photoExportService: PhotoExportService) {
    }

    public exportAll = () => {
        this.photoExportService.exportAll().subscribe(
            res => {
                const blob = new Blob([res], { type: 'application/octet-stream' });
                saveAs(blob, 'photo_export.zip');
            }
        );
    }

    public fileChange = (event) => {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            this.file = fileList[0];
        }

        this.photoExportService.getAllTeams(this.file).subscribe(
                res => {
                    this.teams = res.teams;
                    this.enableExportAction();
                }
        );
    }

    public exportAllPhotos = () => {
        this.photoExportService.exportAllPhotos(this.file).subscribe(
                res => {
                const blob = new Blob([res], { type: 'application/octet-stream' });
                saveAs(blob, 'toutes_photos_export.zip');
                this.enableExportAction();
            },
                err => {
                    // Log errors if any
                    console.log(err);
                    this.enableExportAction();
                }
        );
        this.disableExportAction();
    }

    public exportPhotosByHundred = (part: number) => {
        if (part === undefined || part == null || part === 1) {
            this.disableExportAction();
            part = 1;
        }
        this.photoExportService.exportPhotosByHundred(this.file, part).subscribe(
                res => {
                    const blob = new Blob([res], { type: 'application/octet-stream' });
                    saveAs(blob, 'photos_export_partie_' + part + '.zip');
                    part++;
                    this.exportPhotosByHundred(part);
                },
                err => {
                    // Log errors if any
                    console.log(err);
                    this.enableExportAction();
                }
        );
    }

    public exportTeamPhotos = (team: string) => {
        this.photoExportService.exportTeamPhotos(this.file, team).subscribe(
                res => {
                const blob = new Blob([res], { type: 'application/octet-stream' });
                saveAs(blob, 'photos_' + team + '_export.zip');
                this.enableExportAction();
            },
                err => {
                    // Log errors if any
                    console.log(err);
                    this.enableExportAction();
                }
        );
        this.disableExportAction();
    }

    public exportWithoutPhoto = () => {
        this.photoExportService.exportWithoutPhoto(this.file).subscribe(
                res => {
                const blob = new Blob([res], { type: 'application/octet-stream' });
                saveAs(blob, 'sans_photo_export.zip');
            },
                err => {
                    // Log errors if any
                    console.log(err);
                    this.enableExportAction();
                }
            );
    }

    private enableExportAction = () => {
        this.enableExport = true;
        this.enabledExport = true;
    }

    private disableExportAction = () => {
        this.enableExport = false;
    }

}
