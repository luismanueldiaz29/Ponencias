import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-menu-acc',
  templateUrl: './nav-menu-acc.component.html',
  styleUrls: ['./nav-menu-acc.component.css']
})
export class NavMenuAccComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

  reset(){
    this.authService.logout();
  }

}
