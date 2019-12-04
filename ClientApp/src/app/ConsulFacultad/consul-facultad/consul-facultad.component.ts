import { Component, OnInit } from '@angular/core';
import { FacultadService } from 'src/app/services/facultad.service';
import { Facultad } from 'src/app/models/facultad';

@Component({
  selector: 'app-consul-facultad',
  templateUrl: './consul-facultad.component.html',
  styleUrls: ['./consul-facultad.component.css']
})
export class ConsulFacultadComponent implements OnInit {

  facultades : Facultad[];

  constructor(private facultadService : FacultadService) { }

  ngOnInit() {
    this.facultadService.getAll().subscribe(
      facultad => {
       return this.facultades = facultad
      }
    );
  }

}
