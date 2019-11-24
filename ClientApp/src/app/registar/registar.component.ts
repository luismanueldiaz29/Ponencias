import { Component, OnInit } from '@angular/core';
import { Docente } from '../Models/docente';
import { MaterialModule } from '../material/material';
import { DocenteService } from '../services/docente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  docente: Docente;
  Imports : [MaterialModule];
  
  constructor
    (
      private DocenteService: DocenteService,
      private location: Location
    ) { }

  ngOnInit() {
    this.docente={id:"",Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: "", Usuario: "", Pass: ""};
  }

  add(){
    this.DocenteService.add(this.docente)
    .subscribe(()=>this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}
