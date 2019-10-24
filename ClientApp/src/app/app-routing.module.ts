import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartaDeDerechoComponent } from './carta-de-derecho/carta-de-derecho.component';
import { CartaDeOriginalidadComponent } from './carta-de-originalidad/carta-de-originalidad.component';
import { CartaSolicitudGeneralComponent } from './carta-de-solicitud/carta-solicitud-general/carta-solicitud-general.component';
import { AnexosComponent } from './carta-de-solicitud/anexos/anexos.component';
import { InfromacionEventoComponent } from './carta-de-solicitud/infromacion-evento/infromacion-evento.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,
    pathMatch: 'full' 
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Carta_Derecho',
    component: CartaDeDerechoComponent
  },
  {
    path: 'Carta_Originalidad',
    component: CartaDeOriginalidadComponent
  },
  {
    path: 'carta_solicitud_informacion',
    component: InfromacionEventoComponent
  },
  {
    path: 'carta_Solicitud_general',
    component: CartaSolicitudGeneralComponent
  },
  {
    path: 'carta_solicitud_anexo',
    component: AnexosComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
