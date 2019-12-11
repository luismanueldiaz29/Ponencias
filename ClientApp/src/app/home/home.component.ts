import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GrupoInvestigacionComponent } from '../@base/modals/grupo-investigacion/grupo-investigacion.component';
import { Programa } from '../models/Programa';
import { ProgramaComponent } from '../@base/modals/programa/programa.component';
import { RegistarComponent } from '../registar/registar.component';
import { RegistrarFacultadComponent } from '../admin/registrar-facultad/registrar-facultad.component';

@Component({
  styleUrls: ['./home.component.css'],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(
    private modalService: NgbModal,
    private authorizeService : AuthService
  ){}

  public isAuthenticated(): boolean
  {
      return this.authorizeService.isAuthenticated();
  }

  isAuthenticatedRole(user: string): boolean {
    if (this.isAuthenticated() && user != null ) {
      //alert(this.authorizeService.hasRole(user));
      return this.authorizeService.hasRole(user);
    }
  }
  GrupoInvestigacion(){
    const messageBox = this.modalService.open(GrupoInvestigacionComponent);
  }
  Programa(){
    const messageBox = this.modalService.open(ProgramaComponent);
  }
  Facultad(){
    const messageBox = this.modalService.open(RegistrarFacultadComponent);
  }
}
