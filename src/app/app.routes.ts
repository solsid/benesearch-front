import { Routes } from '@angular/router';
import { BadgesContainer } from './containers/badges/badges.container';
import { BadgesDatabaseContainer } from './containers/badges-database/badges-database.container';
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
        path: 'badges',
        component: BadgesContainer
    },
    {
        path: 'base-badges',
        component: BadgesDatabaseContainer
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
