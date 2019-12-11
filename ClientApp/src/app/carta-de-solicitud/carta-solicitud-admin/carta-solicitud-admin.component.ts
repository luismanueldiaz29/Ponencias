import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/Models/docente';
import { Programa } from 'src/app/models/Programa';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service';
import { MaterialModule } from 'src/app/material/material';
import { Investigacion } from 'src/app/models/Investigacion';
import { GrupoInvestigacion } from 'src/app/models/grupoInvestingacion';
import { AuthService } from 'src/app/services/auth.service';
import { ProgramaService } from 'src/app/services/Programa.service';
import { InvestigacionService } from 'src/app/services/Investigacion.service';
import { GrupoInvestigacionService } from 'src/app/services/grupoInvestigacion.service';

@Component({
  selector: 'app-carta-solicitud-admin',
  templateUrl: './carta-solicitud-admin.component.html',
  styleUrls: ['./carta-solicitud-admin.component.css']
})
export class CartaSolicitudAdminComponent implements OnInit {
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
    const id = this.authService.getDocenteSeleccionado();
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


}
