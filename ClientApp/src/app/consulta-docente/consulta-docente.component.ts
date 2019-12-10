import { Component, OnInit, ViewChild } from '@angular/core';
import {Docente} from '../models/docente';
import {DocenteService} from '../services/docente.service';
import { MaterialModule } from '../material/material';
import { AuthService } from '../services/auth.service';
import { Solicitud } from '../models/solicitud';
import { SolicitudService } from '../services/solicitud.service';
import { AlertModalComponent } from '../@base/modals/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultarSolicitudesComponent } from '../consultar-solicitudes/consultar-solicitudes.component';
import { SolicitudesDocnetesComponent } from '../solicitudes-docnetes/solicitudes-docnetes.component';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent implements OnInit {
  imports: [MaterialModule];
  docentes: Docente[];
  solicitudes : Solicitud[];
  // displayedColumns: string[] = ['No', 'Identificacion', 'nombre', 'apellido', 'telefono', 'vinculoInst', 'email', 'direccion', 'ver'];
  constructor(
    private servicio:DocenteService,
    private authService : AuthService,
    private modalService: NgbModal,
    //private location: Location,
    private solicitudService : SolicitudService
  ) { }

  // dataSource = new MatTableDataSource(this.docentes);
  eventoId : number;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getAll();
    // this.dataSource.sort = this.sort;

  }

  getAll() {
    this.servicio.getAll().subscribe(docente => {
      return this.docentes = docente;
    }); 
  }

  displayedColumns: string[] = ['Identificación', 'Nombres', 'Apellidos', 'Telefono', 'vinculoInst', 'Direccion'];

  getRecord(Docente : Docente){
    this.authService.DocenteSeleccionado(Docente.id);

    this.solicitudService.getSolicitudDocente(Docente.id)
    .subscribe(
      solicitud => this.openModal(solicitud, Docente)
    );

  }

  openModal(solicitudes : Solicitud[], Docente : Docente){
    if(solicitudes.length > 0){
      const messageBox = this.modalService.open(SolicitudesDocnetesComponent);
      messageBox.componentInstance.docenteId = Docente.id;
    }else{
      alert('El Docente no solicitudes registradas');
    }
  }


} 
