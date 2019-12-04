import { Component, OnInit } from '@angular/core';
import { Docente } from '../Models/docente';
import { MaterialModule } from '../material/material';
import { DocenteService } from '../services/docente.service';
import { Location } from '@angular/common';
import { ProgramaService } from '../services/Programa.service';
import { Programa } from '../models/Programa';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  docente: Docente;
  Imports : [MaterialModule];
  
  programas : Programa[];
  facultadId : number =0;
  constructor
    (
      private DocenteService: DocenteService,
      private location: Location,
      private programaServicio : ProgramaService
    ) { }

  ngOnInit() {
    this.docente={id:"",Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: "", Pass: "", FacultadId : 0};
    this.getAll();
  }

  getAll(){
    this.programaServicio.getAll().subscribe(
      programa => {
        return this.programas = programa
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
