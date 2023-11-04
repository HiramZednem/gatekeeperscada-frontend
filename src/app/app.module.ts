import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { DownloadComponent } from './views/download/download.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { DescargarAhoraComponent } from './components/descargar-ahora/descargar-ahora.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DownloadComponent,
    HomeComponent,
    FooterComponent,
    ObjetivosComponent,
    DevelopersComponent,
    DescargarAhoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
