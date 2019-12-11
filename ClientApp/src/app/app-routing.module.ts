import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartaDeDerechoComponent } from './carta-de-derecho/carta-de-derecho.component';
import { CartaDeOriginalidadComponent } from './carta-de-originalidad/carta-de-originalidad.component';
import { CartaSolicitudGeneralComponent } from './carta-de-solicitud/carta-solicitud-general/carta-solicitud-general.component';
import { AnexosComponent } from './carta-de-solicitud/anexos/anexos.component';

import { FormComponent } from './carta-de-solicitud/form/form.component';
import{ConsultaDocenteComponent}from './consulta-docente/consulta-docente.component';
import{ConsultaEventoComponent}from './consulta-evento/consulta-evento.component';
import {EventoEditComponent}from './evento-edit/evento-edit.component';
import{DocenteEditComponent} from './docente-edit/docente-edit.component';
import { RegistarComponent } from './registar/registar.component';
import {RegistrarFacultadComponent} from './admin/registrar-facultad/registrar-facultad.component';
import { ConsultarSolicitudesComponent } from './consultar-solicitudes/consultar-solicitudes.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { SolicitudesDocnetesComponent } from './solicitudes-docnetes/solicitudes-docnetes.component';
import { DetalleSolicitudAdminComponent } from './detalle-solicitud-admin/detalle-solicitud-admin.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { CartaSolicitudAdminComponent } from './carta-de-solicitud/carta-solicitud-admin/carta-solicitud-admin.component';
import { GrupoInvestigacion } from './models/grupoInvestingacion';
import { GrupoInvestigacionComponent } from './@base/modals/grupo-investigacion/grupo-investigacion.component';
import { ProgramaComponent } from './@base/modals/programa/programa.component';

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
  },
  {
      path:'docenteEdit',
      component:DocenteEditComponent
  },
  {
    path: 'Carta_Originalidad/:id',
    component: CartaDeOriginalidadComponent
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
  },
  {
    path : "Consultar_solicitud",
    component : ConsultarSolicitudesComponent
  },
  {
    path : "detalle_Solicitud",
    component : DetalleSolicitudComponent
  },
  {
    path : "solicitudes_Docente",
    component : SolicitudesDocnetesComponent
  },
  {
    path : "DetalleSolicitudAdmin",
    component : DetalleSolicitudAdminComponent
  },
  {
    path : "SendEmailComponent",
    component : SendEmailComponent
  },
  {
    path : "cartas",
    component : CartaSolicitudAdminComponent
  },
  {
    path : "gupoInvestigacion",
    component : GrupoInvestigacionComponent
  },
  {
    path : "Programa",
    component : ProgramaComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
