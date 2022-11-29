import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TeamComponent } from './components/team/team.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableModule } from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { TeamsComponent } from './components/teams/teams.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TeamComponent,
    NavbarComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    MultiSelectModule,
    TagModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
