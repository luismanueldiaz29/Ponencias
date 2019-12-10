import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private _router: Router) {
        
    }

    login(user: string, password: string) {
        //validar en el servidor si el usuario y password son válidos.
        //en el caso que sean válidos se deberian retornar los roles que tiene asociado dicho usuario
        //se podría encriptar el nombre de la variable

        sessionStorage.setItem('user', user);
        sessionStorage.setItem('id', password);
        
        this._router.navigate(['/Home']);
    }

    logout() {
      sessionStorage.clear();
      this._router.navigate(['/login']);
    }

    GuardarSolicitud(id : number){
        sessionStorage.setItem('solicitudId', id.toString());
    }

    getSolicitudId(): string {
        return sessionStorage.getItem('solicitudId') != null ? sessionStorage.getItem('solicitudId'):'Anonimo';
    }

    isAuthenticated(): boolean {
        return sessionStorage.getItem('user')!=null;
    }

    hasRole(rol: string): boolean {
        if (!this.isAuthenticated()) return false;
        let roles: string[] = JSON.parse(sessionStorage.getItem('roles'));
        return roles.indexOf(rol) >= 0;
    }

    getUserName(): string {
        return sessionStorage.getItem('id') != null ? sessionStorage.getItem('id'):'Anonimo';
    }


    DocenteSeleccionado(id : string){
        sessionStorage.setItem('DocenteSeleccionado', id);
    }

    getDocenteSeleccionado(): string {
        return sessionStorage.getItem('DocenteSeleccionado') != null ? sessionStorage.getItem('DocenteSeleccionado'):'Anonimo';
    }

    SolicitudRegistarform(id : number){
        sessionStorage.setItem('SolicitudRegistarform', id.toString());
    }
    getSolicitudRegistarform(){
        return sessionStorage.getItem('SolicitudRegistarform') != null ? sessionStorage.getItem('SolicitudRegistarform'):'Anonimo';
    }
}
