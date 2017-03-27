import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChoiceInlineComponent } from './components/choice-inline/choice-inline.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ChoiceInlineComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
