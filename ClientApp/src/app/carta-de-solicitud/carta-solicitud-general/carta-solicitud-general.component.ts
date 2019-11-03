import {Component, OnInit} from '@angular/core';
import { MaterialModule } from 'src/app/material/material';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';


@Component({
  selector: 'app-carta-solicitud-general',
  templateUrl: './carta-solicitud-general.component.html',
  styleUrls: ['./carta-solicitud-general.component.css']
})
export class CartaSolicitudGeneralComponent implements OnInit {
  imports: [MaterialModule];
  
  constructor(private DocenteService: DocenteService) { }
  docente: Docente;
  ngOnInit() {
    this.docente={id:0, Identificacion: 0, Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: ""};
  }
  
  add(){
    this.DocenteService.add(this.docente)
    .subscribe(docente => {
      alert('Se agregó una nueva tarea')
    });
    
  }
}
