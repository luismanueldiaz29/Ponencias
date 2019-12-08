import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../models/docente';
import { Location } from '@angular/common';
import { MaterialModule } from '../material/material';
import { AuthService } from '../services/auth.service';
import { GrupoInvestigacionService } from '../services/grupoInvestigacion.service';
import { FacultadService } from '../services/facultad.service';


@Component({
  selector: 'app-docente-edit',
  templateUrl: './docente-edit.component.html',
  styleUrls: ['./docente-edit.component.css']
})
export class DocenteEditComponent implements OnInit {
  imports: [MaterialModule];
  docente: Docente;
  sdocente:string;
  facultad : string;
  grupo : string;
  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteService,
    private grupoService : GrupoInvestigacionService,
    private facultadService : FacultadService,
    private location: Location,
    private authService : AuthService
  ) { this.docente = new Docente(); }

  ngOnInit() {
    this.get();
  }

  get(): void{
    const id = this.authService.getUserName();
    this.docenteService.get(id).subscribe(
      hero=>this.asignar(hero)
    );
  }

  asignar(docente : Docente){
    this.docente = docente;

    this.facultadService.get(this.docente.facultadId).subscribe(
      facultad => this.facultad = facultad.nombreFacultad
    );
    this.grupoService.get(this.docente.grupoInvestigacionId).subscribe(
      grupo => this.grupo = grupo.nombreGrupo
    );
  }

  update(): void{
    this.docenteService.update(this.docente).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.docenteService.delete(this.docente).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }

}

 
