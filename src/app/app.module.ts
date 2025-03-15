import { TuiButtonModule, TuiRootModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrarySearchComponent } from './components/library-search/library-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TuiInputModule } from "@taiga-ui/kit";
import { LibraryCardComponent } from "./components/library-card/library-card.component";

@NgModule({
  declarations: [
    AppComponent,
    LibrarySearchComponent,
    LibraryCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiInputModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
