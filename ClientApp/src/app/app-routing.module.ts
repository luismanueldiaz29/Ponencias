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
import { FormComponent } from './carta-de-solicitud/form/form.component';
import{ConsultaDocenteComponent}from './consulta-docente/consulta-docente.component';
import{ConsultaEventoComponent}from './consulta-evento/consulta-evento.component';
import {EventoEditComponent}from './evento-edit/evento-edit.component';
import{DocenteEditComponent} from './docente-edit/docente-edit.component';
import { RegistarComponent } from './registar/registar.component';
import {RegistrarFacultadComponent} from './admin/registrar-facultad/registrar-facultad.component';

const routes: Routes = [
  

    {
    path: '', 
    component: LoginComponent,
    pathMatch: 'full' 
  }, 
  {
    path: 'Facultad', 
    component: RegistrarFacultadComponent 
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Solicitud',
    component: FormComponent
  },
  {
    path: 'Carta_Derecho',
    component: CartaDeDerechoComponent
  },
  {
    path:'eventoEdit/:id',
    component:EventoEditComponent
  },{
    path:'Docente',
    component:ConsultaDocenteComponent

  },
  {
    path:'Evento',
    component:ConsultaEventoComponent
  },{
      path:'docenteEdit/:id',
      component:DocenteEditComponent
    },
  {
    path: 'Carta_Originalidad/:id',
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
  },
  {
    path: 'Registro',
    component: RegistarComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
