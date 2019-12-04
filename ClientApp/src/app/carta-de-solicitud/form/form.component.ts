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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  imports: [MaterialModule];
  
  estudiante : Estudiante;
  evento : Evento;  
  transporte : Transporte;
  solicitud : Solicitud;
  solicitudes : Solicitud[];
  SolicitudId = Math.round(Math.random()*100);

  meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  //fechas
  date = new Date();
  dia = this.date.getDate();
  mes = this.date.getMonth();
  ano = this.date.getFullYear();

  constructor(
    private EventoService : EventoService,
    private solicitudService : SolicitudService,
    private docenteService : DocenteService,
    private transporteService : TransporteService
    ){}



  ngOnInit() {

    this.getAll();
    
    this.solicitud = {
      id : this.SolicitudId.toString(),
      NombrePonencia : "",
      FechaEntrega : this.dia+"/"+this.mes+"/"+this.ano,
      DocenteId : "2"
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
      SolicitudId : this.SolicitudId.toString()
    };

    this.estudiante = { 
      id : 0,
      NombreEstudiante: "",
      ApellidoEstudiante: "" 
    };



    this.transporte = {
      id : 0,
      TipoTransporte : "",
      ValorTrasporte : 0,
      SolicitudId : this.SolicitudId.toString()
    };

  }

  add(){
    this.solicitudService.add(this.solicitud).subscribe( solicitud =>
      console.log("se guardo la solicitud")
    );

    this.EventoService.add(this.evento)
    .subscribe(evento => {
      console.log('Se guardó la informacion del evento')
    });
    
    this.transporteService.add(this.transporte)
    .subscribe(evento => {
      console.log('Se guardó la informacion del transporte')
    });


  }    
  
  getAll(){
      this.solicitudService.getAll().subscribe(
        solicitud => {
        return this.solicitudes = solicitud;
      });
    }



}
