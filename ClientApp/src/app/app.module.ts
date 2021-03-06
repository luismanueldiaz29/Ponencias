import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavMenuAccComponent } from './nav-menu-acc/nav-menu-acc.component';
import { CartaDeOriginalidadComponent } from './carta-de-originalidad/carta-de-originalidad.component';
import { CartaDeDerechoComponent } from './carta-de-derecho/carta-de-derecho.component';
import { CartaSolicitudGeneralComponent } from './carta-de-solicitud/carta-solicitud-general/carta-solicitud-general.component';
import { AnexosComponent } from './carta-de-solicitud/anexos/anexos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material';
import { FormComponent } from './carta-de-solicitud/form/form.component';
import { ConsultaDocenteComponent } from './consulta-docente/consulta-docente.component';
import { DocenteEditComponent } from './docente-edit/docente-edit.component';
import { ConsultaEventoComponent } from './consulta-evento/consulta-evento.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';
import { RegistarComponent } from './registar/registar.component';
import { RegistrarFacultadComponent } from './admin/registrar-facultad/registrar-facultad.component';
import { ConsulFacultadComponent } from './ConsulFacultad/consul-facultad/consul-facultad.component';
import { ConsulModalComponent } from './ConsulFacultad/consul-modal/consul-modal.component';
import { AlertModalComponent } from './@base/modals/alert-modal/alert-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultarSolicitudesComponent } from './consultar-solicitudes/consultar-solicitudes.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { SolicitudesDocnetesComponent } from './solicitudes-docnetes/solicitudes-docnetes.component';
import { DetalleSolicitudAdminComponent } from './detalle-solicitud-admin/detalle-solicitud-admin.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { CartaSolicitudAdminComponent } from './carta-de-solicitud/carta-solicitud-admin/carta-solicitud-admin.component';
import { GrupoInvestigacionComponent } from './@base/modals/grupo-investigacion/grupo-investigacion.component';
import { ProgramaComponent } from './@base/modals/programa/programa.component';

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
    AnexosComponent,
    FormComponent,
    ConsultaDocenteComponent,
    DocenteEditComponent,
    ConsultaEventoComponent,
    EventoEditComponent,
    RegistarComponent,
    RegistrarFacultadComponent,
    ConsulFacultadComponent,
    ConsulModalComponent,
    AlertModalComponent,
    ConsultarSolicitudesComponent,
    DetalleSolicitudComponent,
    SolicitudesDocnetesComponent,
    DetalleSolicitudAdminComponent,
    SendEmailComponent,
    CartaSolicitudAdminComponent,
    GrupoInvestigacionComponent,
    ProgramaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      AlertModalComponent
  ]
})
export class AppModule { }
