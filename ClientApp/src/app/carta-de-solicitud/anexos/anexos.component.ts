import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.component.html',
  styleUrls: ['./anexos.component.css']
})
export class AnexosComponent implements OnInit {

  progress: number;
  message: string;
  baseUrl: string;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(
      private http: HttpClient,
       @Inject('BASE_URL') baseUrl: string
  ) {
      this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  public uploadFile = (files) => {
      if (files.length === 0) {
          return;
      }

      let fileToUpload = <File>files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      //formData.append('file', fileToUpload, fileToUpload.name);

      //UploadByte
      //'https://localhost:44390/api/Upload' con  'UploadByte' or 'UploadProfilePicture' o 'UploadMultiplesProfilePicture'
      
      this.http.post(this.baseUrl+'/api/Upload/UploadByte', formData,{ reportProgress: true, observe: 'events' })
          .subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
                  this.progress = Math.round(100 * event.loaded / event.total);
              else if (event.type === HttpEventType.Response) {
                  this.message = 'Upload success.';
                  this.onUploadFinished.emit(event.body);
              }
          });
        }
}
