import { Component, OnInit } from '@angular/core';
import { Docente } from '../Models/docente';
import { MaterialModule } from '../material/material';
import { DocenteService } from '../services/docente.service';
import { Location } from '@angular/common';
import { ProgramaService } from '../services/Programa.service';
import { Programa } from '../models/Programa';
import { GrupoInvestigacion } from '../models/grupoInvestingacion';
import { GrupoInvestigacionService } from '../services/grupoInvestigacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/modals/alert-modal/alert-modal.component';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
 
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
 
  docente: Docente;
  Imports : [MaterialModule];

  formGroup: FormGroup;
  grupos : GrupoInvestigacion[];
  programas : Programa[];
  facultadId : number = 0;
  submitted: boolean;
  
  constructor
    (
      private _formBuilder: FormBuilder,
      private modalService: NgbModal,
      private DocenteService: DocenteService,
      private location: Location,
      private programaServicio : ProgramaService,
      private grupoService : GrupoInvestigacionService
    ) { }

  ngOnInit() {
    this.getAll();
    this.docente={id:"",Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: "", Pass: "", facultadId : 0,  grupoInvestigacionId : 0};
    this.formGroup = this._formBuilder.group({
      Identificacion: ['', Validators.required],
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      VinculoInst: ['', Validators.required],
      Telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      Pass: ['', Validators.required],
      Facultad: ['', Validators.required],
      grupoId: ['', Validators.required],
      //Email : ['', Validators.required]
    });
  }

  getAll(){
    this.programaServicio.getAll().subscribe(
      programa => {
        return this.programas = programa
      }
    );

    this.grupoService.getAll().subscribe(
      grupo => {
        return this.grupos = grupo;
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      this.mensaje("Resultado Operación",'No se permiten campos vacios'+this.formGroup.errors);
      return;
    }
    this.add();
  }

  add(){
      console.log(this.programas);
      this.DocenteService.add(this.docente)
      .subscribe((docente)=>this.goBack(docente));
  }

  goBack(Docente: Docente): void{
    if(Docente != null){
      this.mensaje("Resultado Operación",'La operación fue un exito  SUCCESS!! :-)');
    }else{
      this.mensaje("Resultado Operación",'Ocurrio un error');  
    }

    this.location.back();
  }

  mensaje(titulo : string, mensaje : string){
    const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = titulo;
      messageBox.componentInstance.message = mensaje; 
  }



}
