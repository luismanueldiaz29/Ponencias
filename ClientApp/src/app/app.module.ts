import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavMenuAccComponent } from './nav-menu-acc/nav-menu-acc.component';
import { CartaDeOriginalidadComponent } from './carta-de-originalidad/carta-de-originalidad.component';
import { CartaDeDerechoComponent } from './carta-de-derecho/carta-de-derecho.component';
import { CartaSolicitudGeneralComponent } from './carta-de-solicitud/carta-solicitud-general/carta-solicitud-general.component';
import { InfromacionEventoComponent } from './carta-de-solicitud/infromacion-evento/infromacion-evento.component';
import { AnexosComponent } from './carta-de-solicitud/anexos/anexos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    NavMenuAccComponent,
    CartaDeOriginalidadComponent,
    CartaDeDerechoComponent,
    CartaSolicitudGeneralComponent,
    InfromacionEventoComponent,
    AnexosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
