import { Component, OnInit, Input } from '@angular/core';
import { Docente } from '../Models/docente';
import { SolicitudService } from '../services/solicitud.service';
import { AuthService } from '../services/auth.service';
import { Solicitud } from '../models/solicitud';
import { DocenteService } from '../services/docente.service';
import { Facultad } from '../models/facultad';
import { GrupoInvestigacion } from '../models/grupoInvestingacion';
import { GrupoInvestigacionService } from '../services/grupoInvestigacion.service';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';
import { TransporteService } from '../services/transporteService';
import { Transporte } from '../models/Transporte';

@Component({
  selector: 'app-detalle-solicitud',
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css']
})
export class DetalleSolicitudComponent implements OnInit {

  solicitud : Solicitud;
  docente : Docente;
  grupoInvestigacion : GrupoInvestigacion;
  evento : Evento;
  transporte : Transporte;

  constructor(
    private solicitudService : SolicitudService,
    private authService : AuthService,
    private docenteService : DocenteService,
    private grupoInvestigacionService :GrupoInvestigacionService,
    private eventoService : EventoService,
    private transporteService : TransporteService
  ) { }

  ngOnInit() {
    this.solicitudService.get(parseInt(this.authService.getSolicitudId()))
    .subscribe(
      solicitud => this.BuscarDocente(solicitud)
    );
    this.eventoService.getEventoSolicitud(parseInt(this.authService.getSolicitudId())).subscribe(
      evento => this.evento = evento
    );
    this.transporteService.getSolicitudTransporte(parseInt(this.authService.getSolicitudId()))
    .subscribe(
      transporte => this.transporte = transporte
    );
  }

  BuscarDocente(solicitud : Solicitud){
    this.solicitud = solicitud
    this.docenteService.get(this.solicitud.DocenteId)
    .subscribe(
      docente => this.docente = docente
    );

  }


}
