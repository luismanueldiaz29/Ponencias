import { Component, OnInit, ViewChild } from '@angular/core';
import {Docente} from '../models/docente';
import {DocenteService} from '../services/docente.service';
import { MaterialModule } from '../material/material';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent implements OnInit {
  imports: [MaterialModule];
  docentes: Docente[];
  // displayedColumns: string[] = ['No', 'Identificacion', 'nombre', 'apellido', 'telefono', 'vinculoInst', 'email', 'direccion', 'ver'];
  constructor(private servicio:DocenteService ) { }

  // dataSource = new MatTableDataSource(this.docentes);
  eventoId : number;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getAll();
    // this.dataSource.sort = this.sort;

  }

  getAll() {
    this.servicio.getAll().subscribe(docente => {
      return this.docentes = docente;
    });
    
  }

} 
