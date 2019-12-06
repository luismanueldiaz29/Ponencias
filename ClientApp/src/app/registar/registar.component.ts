import { Component, OnInit } from '@angular/core';
import { Docente } from '../Models/docente';
import { MaterialModule } from '../material/material';
import { DocenteService } from '../services/docente.service';
import { Location } from '@angular/common';
import { ProgramaService } from '../services/Programa.service';
import { Programa } from '../models/Programa';
import { GrupoInvestigacion } from '../models/grupoInvestingacion';
import { GrupoInvestigacionService } from '../services/grupoInvestigacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/modals/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  docente: Docente;
  Imports : [MaterialModule];
  
  grupos : GrupoInvestigacion[];
  programas : Programa[];
  facultadId : number =0;
  constructor
    (
      private modalService: NgbModal,
      private DocenteService: DocenteService,
      private location: Location,
      private programaServicio : ProgramaService,
      private grupoService : GrupoInvestigacionService
    ) { }

  ngOnInit() {
    this.docente={id:"",Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: "", Pass: "", FacultadId : 0,  GrupoInvestigacionId : 0};
    this.getAll();
  }

  getAll(){
    this.programaServicio.getAll().subscribe(
      programa => {
        return this.programas = programa
      }
    );

    this.grupoService.getAll().subscribe(
      grupo => {
        return this.grupos = grupo;
      }
    );
  }


  add(){
      console.log(this.programas);
      this.DocenteService.add(this.docente)
      .subscribe(()=>this.goBack());
  }



  goBack(): void{
    this.location.back();
  }

}
