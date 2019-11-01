import {Component, OnInit} from '@angular/core';
import { MaterialModule } from 'src/app/material/material';


@Component({
  selector: 'app-carta-solicitud-general',
  templateUrl: './carta-solicitud-general.component.html',
  styleUrls: ['./carta-solicitud-general.component.css']
})
export class CartaSolicitudGeneralComponent implements OnInit {
  imports: [MaterialModule];
  
  constructor() {}

  ngOnInit() {
    
  }
}
