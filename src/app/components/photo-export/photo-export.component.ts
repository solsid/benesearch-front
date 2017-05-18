import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PhotoExportService } from '../../services/photo-export/photo-export.service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'photo-export',
    templateUrl: './photo-export.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoExportComponent {

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
}
