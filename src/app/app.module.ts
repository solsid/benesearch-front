import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ChoiceInlineComponent } from './components/choice-inline/choice-inline.component';
import { DisplayVolunteersContainer } from './containers/display-volunteers/display-volunteers.container';
import { FilterContainer } from './containers/filter/filter.container';
import { ListVolunteersContainer } from './containers/list-volunteers/list-volunteers.container';

import { rootReducer, AppState, defaultState } from './store/index';
import { DisplayVolunteersActions } from './store/display-volunteers/display-volunteers.actions';
import { FilterActions } from './store/filter/filter.actions';

import { VolunteerService } from './volunteer.service';

import { environment } from '../environments/environment'

@NgModule({
  imports: [
    BrowserModule,
    NgReduxModule
    ],
  declarations: [
    AppComponent,
    BadgeComponent,
    ChoiceInlineComponent,
    DisplayVolunteersContainer,
    FilterContainer,
    ListVolunteersContainer
    ],
  providers: [ DisplayVolunteersActions, FilterActions, VolunteerService ],
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
