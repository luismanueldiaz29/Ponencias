import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material';
import { Evento } from 'src/app/models/evento';
import { Transporte } from 'src/app/models/Transporte';
import { EventoService } from 'src/app/services/evento.service';
import { Estudiante } from 'src/app/models/estudiante';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { DocenteService } from 'src/app/services/docente.service';
import { TransporteService } from 'src/app/services/transporteService';
import { AuthService } from 'src/app/services/auth.service';
import { InvestigacionService } from 'src/app/services/Investigacion.service';
import { Investigacion } from 'src/app/models/Investigacion';
import { Docente } from 'src/app/Models/docente';
import { SemilleroService } from 'src/app/services/Semillero.servic';
import { Semillero } from 'src/app/models/Semillero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  imports: [MaterialModule];
  
  investigacion : Investigacion;
  estudiante : Estudiante;
  evento : Evento;  
  transporte : Transporte;
  solicitud : Solicitud;
  solicitudes : Solicitud[];
  Docente : Docente;
  semillero : Semillero;
  //fechas
  date = new Date();
  dia = this.date.getDate();
  mes = this.date.getMonth();
  ano = this.date.getFullYear();

  constructor(
    private EventoService : EventoService,
    private solicitudService : SolicitudService,
    private docenteService : DocenteService,
    private transporteService : TransporteService,
    private authService : AuthService, 
    private investigacionService : InvestigacionService,
    private semilleroService : SemilleroService
    ){}

  ngOnInit() {

    this.getAll();
    this.getDocente();

    this.solicitud = {
      id : 0,
      NombrePonencia : "",
      FechaEntrega : this.dia+"/"+this.mes+"/"+this.ano,
      DocenteId : this.authService.getUserName()
    };

    this.evento={
      id:0,
      NombreEvento:"",
      LinkEvento: "",
      Email:"", 
      Pais: "",
      Ciudad:"", 
      Telefono: 0, 
      ValorInscripcion: 0,
      FechaEvento: "", 
      FechaInicio: "",
      FechaFinal: "",
      NumeroDias: 0, 
      Entidad:"",
      SolicitudId : 0
    };

    this.estudiante = { 
      id : 0,
      NombreEstudiante: "",
      ApellidoEstudiante: "" 
    };


    this.investigacion = {
      id : 0,
      NombreInvestigacion : "",
      SolicitudId : 0
    };
    
    this.transporte = {
      id : 0,
      TipoTransporte : "",
      ValorTrasporte : 0,
      SolicitudId : 0
    };

    this.semillero = {
      id : 0,
      NombreSemillero : "",
      GrupoInvestigacionId : 0 //this.Docente.GrupoInvestigacionId
    }

  }

  add(){
    this.solicitudService.add(this.solicitud).subscribe( solicitud =>
      this.agregar(solicitud.id)
    );
  }
  
  agregar(SolicitudId: number){
    
    this.evento.SolicitudId = SolicitudId;
    this.investigacion.SolicitudId = SolicitudId;
    this.transporte.SolicitudId = SolicitudId;

    this.investigacionService.add(this.investigacion)
    .subscribe( investigacion =>{
      console.log('Se guardo la informacion de investigacion')
    });

    this.EventoService.add(this.evento)
    .subscribe(evento => {
      console.log('Se guardó la informacion del evento')
    });
    
    this.transporteService.add(this.transporte)
    .subscribe(evento => {
      console.log('Se guardó la informacion del transporte')
    });

    this.addSemillero();

  }
  
 addSemillero(){
  this.semillero.GrupoInvestigacionId = this.Docente.GrupoInvestigacionId;
  this.semilleroService.add(this.semillero).subscribe(
    semillero => {
      console.log('Se guardo la informacion del semillero');
    }
  );
 }

  getAll(){
    this.solicitudService.getAll().subscribe(
      solicitud => {
      return this.solicitudes = solicitud;
    });    
  }

  getDocente(){
    this.docenteService.get(this.authService.getUserName()).subscribe(
      docente => console.log(docente)
    );
  }


}
