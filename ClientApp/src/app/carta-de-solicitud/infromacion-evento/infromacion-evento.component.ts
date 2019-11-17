import { Component, OnInit } from '@angular/core';

import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';
import { MaterialModule } from 'src/app/material/material';


@Component({
  selector: 'app-infromacion-evento',
  templateUrl: './infromacion-evento.component.html',
  styleUrls: ['./infromacion-evento.component.css']
})
export class InfromacionEventoComponent implements OnInit {
  imports: [MaterialModule];
  
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
                Entidad:""};
  }
  


  add(){
    this.EventoService.add(this.evento)
    .subscribe(evento => {
      alert('Se guardó la informacion del evento')
    });
  }
}