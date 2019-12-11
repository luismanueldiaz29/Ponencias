import { Component, OnInit } from '@angular/core';
import { ProgramaService } from 'src/app/services/Programa.service';
import { Programa } from 'src/app/models/Programa';
import { MaterialModule } from 'src/app/material/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FacultadService } from 'src/app/services/facultad.service';
import { Facultad } from 'src/app/models/facultad';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
  imports: [MaterialModule];
  
  firstFormGroup: FormGroup;
  programa : Programa;
  facultades : Facultad[];
  facultad : Facultad;
  constructor(
    public activeModal: NgbActiveModal,
    private _formBuilder: FormBuilder,
    private programaService : ProgramaService,
    private facultadService : FacultadService
  ) { }

  ngOnInit() {
    this.getallFacultad();
    this.programa = {
      id : 0,
      NombrePrograma : "",
      FacultadId : 0
    }
    this.facultad = {
      id : 0,
      nombreFacultad : ""
    }
    this.firstFormGroup = this._formBuilder.group({
      Programa: ['', Validators.required],
      Facultad: ['', Validators.required]
    });
  }

  getallFacultad(){
    this.facultadService.getAll().subscribe(
      facultades => this.facultades = facultades
    );
  }
  Guardar(){
    if (this.firstFormGroup.invalid) {
      alert('No se pueden dejar campos vacios');
      return;
    }else{
      this.programaService.add(this.programa).subscribe(
        programa => programa == null ? alert("a ocurrido un error") : alert("la infromacion se guardo correctamente")
      );
    }
  }
}
