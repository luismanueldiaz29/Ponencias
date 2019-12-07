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
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/@base/modals/alert-modal/alert-modal.component';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  imports: [MaterialModule];
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  investigacion : Investigacion;
  estudiante : Estudiante;
  evento : Evento;  
  transporte : Transporte;
  solicitud : Solicitud;
  solicitudes : Solicitud[];
  semillero : Semillero;
  //fechas
  date = new Date();
  dia = this.date.getDate();
  mes = this.date.getMonth();
  ano = this.date.getFullYear();
  submitted: boolean;

  constructor(
    private location: Location,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    private EventoService : EventoService,
    private solicitudService : SolicitudService,
    private docenteService : DocenteService,
    private transporteService : TransporteService,
    private authService : AuthService, 
    private investigacionService : InvestigacionService,
    private semilleroService : SemilleroService,
    private estudianteService : EstudianteService
    ){}

  ngOnInit() {

    this.getAll();
    this.getDocente();
    this.validar();

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
      Telefono: "", 
      ValorInscripcion: null,
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
      ApellidoEstudiante: "",
      SemilleroId : 0
    };


    this.investigacion = {
      id : 0,
      NombreInvestigacion : "",
      SolicitudId : 0
    };
    
    this.transporte = {
      id : 0,
      TipoTransporte : "",
      ValorTrasporte : null,
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
  try {
   
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

    this.semilleroService.add(this.semillero).subscribe(
      semillero => {
        this.estudiante.SemilleroId = semillero.id;
        this.agregarEstudiante();
      }
    );
    
    this.mensaje("Resultado Operación",'La operación fue un exito  SUCCESS!! :-)');
    this.location.back()
  } catch (error) {

    this.mensaje("Resultado Operación",'Ocurrio un error'+error);  
  } 
  }

  agregarEstudiante(){
    this.estudianteService.add(this.estudiante).subscribe(
      estudiante => console.log('se guardo el estudiante '+estudiante.id)
    );
  }

  mensaje(titulo : string, mensaje : string){
    const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = titulo;
      messageBox.componentInstance.message = mensaje; 
  }

  getAll(){
    this.solicitudService.getAll().subscribe(
      solicitud => {
      return this.solicitudes = solicitud;
    });    
  }


  getDocente(){
    this.docenteService.get(this.authService.getUserName()).subscribe(
      docente => this.semillero.GrupoInvestigacionId = docente.grupoInvestigacionId
    );
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      this.mensaje("Resultado Operación",'No se permiten campos vacios');  
      return;
    }
    this.add();
  }

  validar(){
    this.firstFormGroup = this._formBuilder.group({
      nombrePonencia: ['', Validators.required],
      nomSemillero: ['', Validators.required],
      nombreInvestigacion: ['', Validators.required],
      NombreEstudiante : [''],
      ApellidoEstudiante : ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      evento: ['', Validators.required],
      entidad: ['', Validators.required],
      Link: ['', Validators.required],
      pais: ['', Validators.required],
      cuidad: ['', Validators.required],
      Telefono: ['', Validators.required],
      CostoInscripcion: ['', Validators.required],
      CostoTransporte: ['', Validators.required],
      TipoTransporte: ['', Validators.required],
      FechaEvento: ['', Validators.required],
      inicio: ['', Validators.required],
      Finaliza: ['', Validators.required],
      email : ['', Validators.required]
    });
  }

}
