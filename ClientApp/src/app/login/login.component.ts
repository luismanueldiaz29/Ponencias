import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../Models/docente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private docente : Docente;
  private docentes : Docente[];

  constructor(
    private DocenteService : DocenteService
  ) { }

  ngOnInit() {
    this.docente={id:"",Nombres: "", Apellidos: "", Telefono: "", VinculoInst: "", Email: "", direccion: "", Usuario: "", Pass: ""};
    this.getAll();
  }

  getAll() {
    this.DocenteService.getAll().subscribe(docente => {
      return this.docentes = docente;
    });
  }
  

  Validar(){
    var doc = this.docentes.filter( function (docent) {
      docent.Usuario === this.docente.Usuario && docent.Pass === this.docente.Usuario;
    });
    
    if(doc != null){
      console.log('si');
      
    }else{
      console.log('no');
    }
    console.log('ninguna');
  }

}
