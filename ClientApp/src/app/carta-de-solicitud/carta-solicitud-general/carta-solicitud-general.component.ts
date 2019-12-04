import {Component, OnInit} from '@angular/core';
import { MaterialModule } from 'src/app/material/material';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carta-solicitud-general',
  templateUrl: './carta-solicitud-general.component.html',
  styleUrls: ['./carta-solicitud-general.component.css']
})
export class CartaSolicitudGeneralComponent implements OnInit {
  
  imports: [MaterialModule];
  
  docente: Docente;
  estudiante : Estudiante;

  registerForm: FormGroup;
  submitted = false;

  constructor(
      private DocenteService: DocenteService,
      private estudianteService: EstudianteService,
      private formBuilder: FormBuilder
    ) { }
  
  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
      //this.docente={id:"0",Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: ""};
      //this.estudiante = { NombreEstudiante: "",ApellidoEstudiante: "" }
    // }); 
  }
  

  add(){
    this.DocenteService.add(this.docente)
    .subscribe();
    this.estudianteService.add(this.estudiante)
    .subscribe(); 
  }

  /*
  add(){
    this.DocenteService.add(this.docente)
    .subscribe(docente => {
      alert('Se agregó un nuevo docente')
    });
    this.estudianteService.add(this.estudiante)
    .subscribe(estudiante => {
      alert('se agrego un estudiante')
    });
  }*/
}
