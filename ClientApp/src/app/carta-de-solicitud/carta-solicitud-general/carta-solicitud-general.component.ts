import {Component, OnInit} from '@angular/core';
import { MaterialModule } from 'src/app/material/material';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProgramaService } from 'src/app/services/Programa.service';
import { Programa } from 'src/app/models/Programa';
import { InvestigacionService } from 'src/app/services/Investigacion.service';
import { Investigacion } from 'src/app/models/Investigacion';
import { GrupoInvestigacion } from 'src/app/models/grupoInvestingacion';
import { GrupoInvestigacionService } from 'src/app/services/grupoInvestigacion.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-carta-solicitud-general',
  templateUrl: './carta-solicitud-general.component.html',
  styleUrls: ['./carta-solicitud-general.component.css']
})
export class CartaSolicitudGeneralComponent implements OnInit {
  imports: [MaterialModule];
  investigacion : Investigacion;
  programa : Programa;
  docente: Docente;
  grupo : GrupoInvestigacion;
  Imports : [MaterialModule];
  meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  //fechas
  date = new Date();
  dia = this.date.getDate();
  mes = this.meses[this.date.getMonth()];
  ano = this.date.getFullYear();


  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private docenteService : DocenteService,
    private authService : AuthService, 
    private programaService : ProgramaService,
    private investigacioService : InvestigacionService,
    private grupoInvestigacionService : GrupoInvestigacionService
    ) { }

  ngOnInit() {
    this.get();
  }
  

  get(): void{
    const id = this.authService.getUserName();
    this.docenteService.get(id).subscribe(
      docente=> this.buscarPrograma(docente)
    );
  }

  buscarPrograma(docente : Docente){
    this.docente=docente;
    this.buscarGrupo(docente);
    this.programaService.get(docente.facultadId).subscribe
    (
      programa => this.buscarInvestigacion(programa)
    );
  }
  

  buscarInvestigacion(programa : Programa){
    this.programa = programa;
    this.investigacioService.getInvestigacionSolicitud(parseInt(this.authService.getSolicitudId()))
    .subscribe(
      investigacion => this.investigacion = investigacion
    );
  }
  
  buscarGrupo(docente : Docente){
    this.grupoInvestigacionService.get(docente.grupoInvestigacionId)
    .subscribe(
      grupo => this.grupo = grupo
    )
  }

  volver(){
    this._router.navigate(['/Home']);
  }

}
