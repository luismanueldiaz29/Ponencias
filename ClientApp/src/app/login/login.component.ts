import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../Models/docente';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../@base/modals/alert-modal/alert-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario : string;
  private password : string;
  private docentes : Docente[];
  private rol : string;

  constructor(
    private DocenteService : DocenteService,
    private authService : AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.usuario = "";
    this.password = "";
    this.getAll();
  }

  getAll() {
    this.DocenteService.getAll().subscribe(docente => {
      return this.docentes = docente;
    });
  }
  
  acceder(){
    if(this.usuario == "" || this.password == ""){
      this.mensaje("Resultado Operación",'No se permiten espacios vacios');  
    }else{
      this.authService.login(this.usuario, this.password);
    }
  }

  mensaje(titulo : string, mensaje : string){
    const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = titulo;
      messageBox.componentInstance.message = mensaje; 
  }
}
