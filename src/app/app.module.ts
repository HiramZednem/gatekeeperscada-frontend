import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

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
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { DocsComponent } from './views/docs/docs.component';
import { IntroductionComponent } from './components/docs-components/introduction/introduction.component';
import { HardwareComponent } from './components/docs-components/hardware/hardware.component';
import { RepositoryComponent } from './components/docs-components/repository/repository.component';
import { InstallationComponent } from './components/docs-components/installation/installation.component';


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
    RegisterComponent,
    DocsComponent,
    IntroductionComponent,
    HardwareComponent,
    RepositoryComponent,
    InstallationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
