import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PhotoExportService } from '../../services/photo-export/photo-export.service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'photo-export',
    templateUrl: './photo-export.component.html',
})
export class PhotoExportComponent {

    public teams: string[] = [
        "Accessibilité",
        "Appro Boissons - Gratuités",
        "Artistique - Accueil Nuit",
        "Artistique - Chauffeur",
        "Artistique - ET2",
        "Artistique - Hospitality",
        "Artistique - Régie Village",
        "Backline",
        "Backstage Tour",
        "Billetterie",
        "Boutique Merch",
        "Campagne Printemps Solidaire",
        "Camping",
        "Catering",
        "Club Solidays",
        "Consignes Publiques",
        "Contrôle Accès",
        "Coordo Accueil du public",
        "Coordo Camping",
        "Entrée Technique 1",
        "Entrées Public",
        "Espace Kids",
        "Forum Café",
        "Greencorner",
        "Harpic Monkeys",
        "Images & Contenus",
        "Invitations",
        "La Justine",
        "Les Volants",
        "Liste d'attente",
        "Loges Partenaires",
        "Logistique",
        "Navettes Festivalier-e-s",
        "Parking",
        "Patchwork",
        "Point info / Objets trouvés",
        "Presse",
        "Propreté",
        "QG Volontaires",
        "QG des partenaires",
        "Recharge Mobile",
        "Relais & Silent Disco",
        "Renfort Volontariat",
        "Réduction des risques",
        "Régie d'exploitation (Kalou)",
        "Sex In The City",
        "Studio Radio",
        "Tirelire - La Cavalerie",
        "Vigie",
        "Village Solidarité"];

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
        this.enableExportAction();
    }

    public exportTeamPhotos = (team: string) => {
        this.photoExportService.exportTeamPhotos(this.file, team).subscribe(
                res => {
                const blob = new Blob([res], { type: 'application/octet-stream' });
                saveAs(blob, 'photos_' + team + '_export.zip');
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
