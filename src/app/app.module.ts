import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ChoiceInlineComponent } from './components/choice-inline/choice-inline.component';
import { FilterContainer } from './containers/filter/filter.container';

import { rootReducer, AppState, defaultState } from './store/index';
import { FilterActions } from './store/filter/filter.actions';

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
  providers: [ FilterActions ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, defaultState, [ ]);
  }
}
