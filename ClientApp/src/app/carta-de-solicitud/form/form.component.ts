import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  imports: [MaterialModule];
  constructor() { }

  ngOnInit() {
  }

}
