import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonDialogComponent } from './pokemon-dialog/pokemon-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonDialogComponent
  ],
  entryComponents: [
    PokemonDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
