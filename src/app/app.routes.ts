import { Routes } from '@angular/router';
import { PhotoExportContainer } from './containers/photo-export/photo-export.container';
import { VolunteersContainer } from './containers/volunteers/volunteers.container';

export const appRoutes: Routes = [
    {
        path: 'benevoles',
        component: VolunteersContainer
    },
    {
        path: 'photo-export',
        component: PhotoExportContainer
    },
    {
        path: '',
        redirectTo: '/benevoles',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/benevoles',
        pathMatch: 'full'
    }
];
