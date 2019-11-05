import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/evento';
import { Location } from '@angular/common';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css']
})
export class EventoEditComponent implements OnInit {

  evento: Evento;
  sevento:string;

  constructor(
    private route: ActivatedRoute,
    private Servicio: EventoService,
    private location: Location
  ) { }
 
  ngOnInit() {
    this.get();
  }

  get(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.Servicio.get(id).subscribe(hero=>this.evento=hero);
  }

  update(): void{
    this.Servicio.update(this.evento).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.Servicio.delete(this.evento).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }


}


 
