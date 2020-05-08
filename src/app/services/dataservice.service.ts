import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';
import { Usermodule } from '../models/usuario.model';
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Observable } from 'rxjs';



 
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  redirectUrl: string;

  leftCypt = Math.random().toString(36).substr(2);
  rightCypt = Math.random().toString(36).substr(2);

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }
 
  private aRndm = Constantes.ARND; //URL del servicio
  private bRndm = Constantes.BRND; //URL del servicio
  private cRndm = Constantes.CRND; //URL del servicio
  private dRndm = Constantes.DRND; //URL del servicio

  public userlogin(username,password) {
    return this.httpClient.post<any>(`${this.PHP_API_SERVER}/ajax/login.php`, {username,password})
        .pipe(map(Usermodule => {
            //id mask
            const id_persona_mask = this.aRndm+Usermodule[0].id_persona+this.bRndm;
            this.setToken(Usermodule[0].nombres);
            this.setID(id_persona_mask);
            this.setIDrol(Usermodule[0].id_rol);
            this.getLoggedInName.emit(true);
            
            return Usermodule;
        }));

    }


    getUserId( id_persona ){
        return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
    }


  
// public userregistration(name,email,pwd,mobile) {
//   return this.httpClient.post<any>(this.baseUrl + '/registration.php', { name,email, pwd,mobile })
//       .pipe(map(Usermodule => {
//           return Usermodule;
//       }));
// }


rand = function(token: string) {
  return Math.random().toString(36).substr(2); // remove `0.`
};


setIDrol(id_rol: string) {
  localStorage.setItem('id_rol', this.cRndm+id_rol+this.dRndm);
}

setID(id_persona: string) {
    localStorage.setItem('id_persona', id_persona);
  }
   
getID() {
    return localStorage.getItem('id_persona');
  }
  

//token
setToken(token: string) {
  localStorage.setItem('token', this.rand(token));
}
 
getToken() {
  return localStorage.getItem('token');
}
 
deleteToken() {
  localStorage.removeItem('token');
}
 
isLoggedIn() {
  const usertoken = this.getToken();
  const idtoken = this.getID();
  if (usertoken != null || idtoken != null) {
    return true
  }
  return false;
}
 
}
 