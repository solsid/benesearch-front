import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ChoiceInlineComponent } from './components/choice-inline/choice-inline.component';
import { FilterContainer } from './containers/filter/filter.container';

import { rootReducer, AppState, defaultState } from './store/index';
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
    ChoiceInlineComponent,
    FilterContainer
    ],
  providers: [ FilterActions, VolunteerService],
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
