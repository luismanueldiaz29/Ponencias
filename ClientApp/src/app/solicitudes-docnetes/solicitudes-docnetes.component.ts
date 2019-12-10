import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../material/material';
import { AuthService } from '../services/auth.service';
import { SolicitudService } from '../services/solicitud.service';
import { Solicitud } from '../models/solicitud';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../Models/docente';

@Component({
  selector: 'app-solicitudes-docnetes',
  templateUrl: './solicitudes-docnetes.component.html',
  styleUrls: ['./solicitudes-docnetes.component.css']
})
export class SolicitudesDocnetesComponent implements OnInit {

  imposts : [MaterialModule];

  solicitudes : Solicitud[];

  @Input() docenteId;

  constructor(
    public activeModal: NgbActiveModal,
    private solicitudService : SolicitudService,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.solicitudService.getSolicitudDocente(this.docenteId)
    .subscribe(
      solicitud => this.solicitudes = solicitud
    );
  }

  getRecord(solicitud : Solicitud){
    alert(solicitud.id);
    this.authService.GuardarSolicitud(solicitud.id);
  }

  displayedColumns: string[] = ['id', 'nombrePonencia', 'FechaEntrega', 'EstadoSolicitud'];

}
