import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material';
import {  Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrar-facultad',
  templateUrl: './registrar-facultad.component.html',
  styleUrls: ['./registrar-facultad.component.css']
})
export class RegistrarFacultadComponent implements OnInit {

  imports: [MaterialModule];
facultad:Facultad;
firstFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private facultadService: FacultadService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      Facultad: ['', Validators.required]
    });
    this.facultad = {id:0, nombreFacultad: ""}
  }

  add(){
    if (this.firstFormGroup.invalid) {
      alert('No se pueden dejar campos vacios');
      return;
    }else{
      this.facultadService.add(this.facultad)
      .subscribe(
        facultad => facultad == null ? alert("ocurrio un error") : alert("la informacion se guardo correcamente")
      );
    } 
  }

}
