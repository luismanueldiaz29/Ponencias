import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SolicitudService } from '../services/solicitud.service';
import { Solicitud } from '../models/solicitud';
import { MaterialModule } from '../material/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/modals/alert-modal/alert-modal.component';


@Component({
  selector: 'app-consultar-solicitudes',
  templateUrl: './consultar-solicitudes.component.html',
  styleUrls: ['./consultar-solicitudes.component.css']
})
export class ConsultarSolicitudesComponent implements OnInit {
  imports : [MaterialModule];
  private solicitudes : Solicitud[];

  constructor( 
      private authService : AuthService,
      private modalService: NgbModal,
      private solicitudService : SolicitudService
    ) { }

  ngOnInit() {
    this.solicitudService.getSolicitudDocente(this.authService.getUserName())
    .subscribe(
      solicitud => this.solicitudes = solicitud
    );
    this.mensaje('Seleccione la fila para ver los de detalles de la solicitud');
  }

  mensaje( mensaje : string){
    const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Mensaje de sugerencia";
      messageBox.componentInstance.message = mensaje; 
  }

  getRecord(solicitud : Solicitud){
    alert('se tomo la fila '+solicitud.id);
    this.authService.GuardarSolicitud(solicitud.id);
  }

  displayedColumns: string[] = ['id', 'nombrePonencia', 'FechaEntrega', 'EstadoSolicitud'];
  
}
