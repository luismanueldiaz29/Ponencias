import { Component, OnInit } from '@angular/core';
import { GrupoInvestigacionService } from '../../../services/grupoInvestigacion.service';
import { GrupoInvestigacion } from '../../../models/grupoInvestingacion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material/material';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grupo-investigacion',
  templateUrl: './grupo-investigacion.component.html',
  styleUrls: ['./grupo-investigacion.component.css']
})
export class GrupoInvestigacionComponent implements OnInit {

  imports : [MaterialModule];

  grupoInvestigacion : GrupoInvestigacion;
  firstFormGroup: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private _formBuilder: FormBuilder,
    private grupoInvestigacionService : GrupoInvestigacionService

  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      GrupoInvestigacion: ['', Validators.required]
    });
    this.grupoInvestigacion = {
      id : 0,
      nombreGrupo : ""
    }
  }

  Guardar(){
    if(this.firstFormGroup.invalid){
      alert('no se permiten campos vacios');
      return;
    }else{
      this.grupoInvestigacionService.add(this.grupoInvestigacion)
      .subscribe(
        grupo => grupo.id == null ? alert('Ocurrio un error') : alert('La informacion se guardo correctamente') 
      );
      this.activeModal.close();
    }
  }

}
