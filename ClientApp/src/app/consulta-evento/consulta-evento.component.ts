import { Component, OnInit } from '@angular/core';
import {Evento} from '../models/evento';
import {EventoService} from '../services/evento.service';

@Component({
  selector: 'app-consulta-evento',
  templateUrl: './consulta-evento.component.html',
  styleUrls: ['./consulta-evento.component.css']
})
export class ConsultaEventoComponent implements OnInit {

  eventos: Evento[];
  constructor(private servicio:EventoService ) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.servicio.getAll().subscribe(x=>this.eventos=x);
  }

  mostrar(){
    alert('si');
  }
  displayedColumns: string[] = ['id', 'NombreEvento', 'Entidad', 'Telefono', 'Ciudad', 'Pais', 'ValorInscripcion', 'ver'];
}
