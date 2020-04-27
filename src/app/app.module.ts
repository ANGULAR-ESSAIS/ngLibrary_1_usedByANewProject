import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GeneralModule } from 'my-ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    GeneralModule // En l'occurence, UNIQUEMENT pour le composant ComboBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
