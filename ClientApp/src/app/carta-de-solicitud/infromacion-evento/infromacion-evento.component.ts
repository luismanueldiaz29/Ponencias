import { Component, OnInit } from '@angular/core';

import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';


@Component({
  selector: 'app-infromacion-evento',
  templateUrl: './infromacion-evento.component.html',
  styleUrls: ['./infromacion-evento.component.css']
})
export class InfromacionEventoComponent implements OnInit {

  
  constructor(private EventoService: EventoService) { }
  evento: Evento;
  ngOnInit() {
    this.evento={id:0,
                NombreEvento:"",
                LinkEvento: "",
                Email:"", 
                Pais: "",
                Ciudad:"", 
                Telefono: 0, 
                ValorInscripcion: 0,
                FechaEvento: "", 
                FechaInicio: "",
                FechaFinal: "",
                NumeroDias: 0, 
                TipoTransporte:"",
                ValorTrasporte: 0 ,
                Entidad:""};
  }
  


  add(){
    this.EventoService.add(this.evento)
    .subscribe(evento => {
      alert('Se guardó la informacion del evento')
    });
  }
}