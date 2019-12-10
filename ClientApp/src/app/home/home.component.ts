import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  styleUrls: ['./home.component.css'],
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(
    private authorizeService : AuthService
  ){

  }

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
}
