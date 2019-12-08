import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material';
import {  Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';

@Component({
  selector: 'app-registrar-facultad',
  templateUrl: './registrar-facultad.component.html',
  styleUrls: ['./registrar-facultad.component.css']
})
export class RegistrarFacultadComponent implements OnInit {

  imports: [MaterialModule];
facultad:Facultad;

  constructor(
    private facultadService: FacultadService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.facultad = {id:0, nombreFacultad: ""}
  }

  add(){
    this.facultadService.add(this.facultad)
    .subscribe(); 
  }

}
