import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../services/docente.service';
import { Docente } from '../Models/docente';
import { AuthService } from '../services/auth.service';

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
    private authService : AuthService    
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.DocenteService.getAll().subscribe(docente => {
      return this.docentes = docente;
    });
  }
  
  acceder(){
    
  }
}
