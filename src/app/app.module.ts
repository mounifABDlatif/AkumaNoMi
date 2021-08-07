import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { ParameciaComponent } from './paramecia/paramecia.component';
import { ZoanComponent } from './zoan/zoan.component';
import { LogiaComponent } from './logia/logia.component';
import { DescriptionComponent } from './description/description.component';
import { ModifComponent } from './modif/modif.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    ParameciaComponent,
    ZoanComponent,
    LogiaComponent,
    DescriptionComponent,
    ModifComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
