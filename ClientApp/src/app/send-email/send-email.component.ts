import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Email } from '../models/Email';
import { DocenteService } from '../services/docente.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {

  //@Input() docenteId;

  private email : Email;
  constructor(
    public activeModal: NgbActiveModal,
    private docenteService : DocenteService  
  ) { }

  ngOnInit() {
    this.email = {
      to : "",
      cc : "",
      text : "",
      titulo : ""
    }
  }

  enviar(){
    this.docenteService.sendEmail(this.email);
  }
}
