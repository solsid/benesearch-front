import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    volunteers = [
        {
            name : 'John Doe',
            team : 'Backline',
            rights : 'A',
        },
        {
            name : 'Jane Bla',
            team : 'Propreté',
            rights : 'T M',
        },
        {
            name : 'Martin Dupont',
            team : 'Rappro boisson',
            rights : 'P S M',
        }
    ];
}
