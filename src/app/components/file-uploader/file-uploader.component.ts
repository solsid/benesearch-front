import { EventEmitter, Component, Input, Output } from '@angular/core';

/*
 * USAGE:     <file-uploader [accept]="'.csv'" (inputChange)="onChange()"></file-uploader>
 */
@Component({
    selector: 'file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: [ './file-uploader.component.css' ]
})
export class FileUploaderComponent {

    @Input() accept: string = '*';
    @Output() inputChange = new EventEmitter<any>();

    public fileName: string = 'Choisissez un fichier...';

    handleInputChange = (e) => {
       if ( e.target.value ) {
            this.fileName = e.target.value.split( '\\' ).pop();
       } else {
           this.fileName = 'Choisissez un fichier...';
       }
       this.inputChange.emit(e);
    }
}
