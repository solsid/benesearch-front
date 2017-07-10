import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BadgesContainer } from './containers/badges/badges.container';
import { BadgesDatabaseContainer } from './containers/badges-database/badges-database.container';
import { ChoiceInlineComponent } from './components/choice-inline/choice-inline.component';
import { DisplayVolunteersContainer } from './containers/display-volunteers/display-volunteers.container';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FilterContainer } from './containers/filter/filter.container';
import { ListVolunteersContainer } from './containers/list-volunteers/list-volunteers.container';
import { PhotoExportContainer } from './containers/photo-export/photo-export.container';
import { ToolTipComponent } from './components/tool-tip/tool-tip.component';
import { VolunteersContainer } from './containers/volunteers/volunteers.container';
import { PhotoExportComponent } from './components/photo-export/photo-export.component';

import { rootReducer, AppState, defaultState } from './store/index';
import { DisplayVolunteersActions } from './store/display-volunteers/display-volunteers.actions';
import { FilterActions } from './store/filter/filter.actions';

import { BadgesService } from './services/badges.service';
import { PhotoExportService } from './services/photo-export/photo-export.service';
import { VolunteerService } from './volunteer.service';

import { environment } from '../environments/environment'

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ],
  declarations: [
    AppComponent,
    BadgeComponent,
    BadgesContainer,
    BadgesDatabaseContainer,
    ChoiceInlineComponent,
    DisplayVolunteersContainer,
    FileUploaderComponent,
    FilterContainer,
    ListVolunteersContainer,
    PhotoExportComponent,
    PhotoExportContainer,
    ToolTipComponent,
    VolunteersContainer
    ],
  providers: [
    DisplayVolunteersActions,
    FilterActions,
    BadgesService,
    PhotoExportService,
    VolunteerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
    private devTools: DevToolsExtension) {

    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (!environment.production && devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    this.ngRedux.configureStore(
      rootReducer,
      defaultState,
      [],
      enhancers);
  }
}
