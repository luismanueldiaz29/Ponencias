import { Component, OnInit } from '@angular/core';
import { GrupoInvestigacion } from '../models/grupoInvestingacion';
import { Docente } from '../Models/docente';
import { Solicitud } from '../models/solicitud';
import { AuthService } from '../services/auth.service';
import { SolicitudService } from '../services/solicitud.service';
import { DocenteService } from '../services/docente.service';
import { GrupoInvestigacionService } from '../services/grupoInvestigacion.service';
import { EventoService } from '../services/evento.service';
import { TransporteService } from '../services/transporteService';
import { SemilleroService } from '../services/Semillero.servic';
import { Semillero } from '../models/Semillero';
import { Transporte } from '../models/Transporte';
import { Evento } from '../models/evento';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SendEmailComponent } from '../send-email/send-email.component';
import { Email } from '../models/Email';
import { CartaDeDerechoComponent } from '../carta-de-derecho/carta-de-derecho.component';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-detalle-solicitud-admin',
  templateUrl: './detalle-solicitud-admin.component.html',
  styleUrls: ['./detalle-solicitud-admin.component.css']
})
export class DetalleSolicitudAdminComponent implements OnInit {

  solicitud : Solicitud;
  docente : Docente;
  grupoInvestigacion : GrupoInvestigacion;
  evento : Evento;
  transporte : Transporte;
  semillero : Semillero;
  private email : Email;
  constructor(
    private solicitudService : SolicitudService,
    private authService : AuthService,
    private docenteService : DocenteService,
    private grupoInvestigacionService :GrupoInvestigacionService,
    private eventoService : EventoService,
    private transporteService : TransporteService,
    private grupoService : GrupoInvestigacionService,
    private semilleroService : SemilleroService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.solicitudService.get(parseInt(this.authService.getSolicitudId()))
    .subscribe(
      solicitud => this.agregarDocente(solicitud)
    );
    this.eventoService.getEventoSolicitud(parseInt(this.authService.getSolicitudId())).subscribe(
      evento => this.evento = evento
    );
    this.transporteService.getSolicitudTransporte(parseInt(this.authService.getSolicitudId()))
    .subscribe(
      transporte => this.transporte = transporte
    );
  }

  agregarDocente(solicitud : Solicitud){
    this.solicitud = solicitud;
    this.docenteService.get(solicitud.docenteId)
    .subscribe(
      docente => {this.buscarGrupo(docente)}
    );
  }
  buscarGrupo(Docente : Docente){
    this.docente = Docente;
    this.grupoInvestigacionService.get(Docente.grupoInvestigacionId)
    .subscribe(
      grupo => {this.BuscarSemillero(grupo)}
    );
  }

  BuscarSemillero(grupo : GrupoInvestigacion){
    this.grupoInvestigacion = grupo;
    this.semilleroService.getSemilleroGrupo(grupo.id)
    .subscribe(
      semillero => {this.semillero = semillero}
    )
  }

  

}
