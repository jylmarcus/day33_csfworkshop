import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './todo/home/home.component';
import { EditComponent } from './todo/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
