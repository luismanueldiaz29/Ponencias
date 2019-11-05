import { Component, OnInit } from '@angular/core';
import {Docente} from '../models/docente';
import {DocenteService} from '../services/docente.service';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent implements OnInit {
    docentes: Docente[];
  constructor(private servicio:DocenteService ) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.servicio.getAll().subscribe(x=>this.docentes=x);
  }
} 
