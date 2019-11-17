import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../Models/docente';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../material/material';

@Component({
  selector: 'app-carta-de-originalidad',
  templateUrl: './carta-de-originalidad.component.html',
  styleUrls: ['./carta-de-originalidad.component.css']
})
export class CartaDeOriginalidadComponent implements OnInit {

  docente: Docente;
  Imports : [MaterialModule];
  meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  //fechas
  date = new Date();
  dia = this.date.getDate();
  mes = this.meses[this.date.getMonth()];
  ano = this.date.getFullYear();



  constructor(
    private route: ActivatedRoute,
    private docenteService : DocenteService
    ) {this.docente = new Docente(); }

  ngOnInit() {
    this.get();
  }

  get(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.docenteService.get(id).subscribe(hero=>this.docente=hero);
  }

}
