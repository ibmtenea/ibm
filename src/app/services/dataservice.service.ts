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
  redirectUrl: string;

  baseUrl:string = Constantes.API_SERVER; //URL del servicio

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(username,password) {
 
    return this.httpClient.post<any>(`${this.baseUrl}/ajax/login.php`, {username,password})
        .pipe(map(Usermodule => {
            this.setToken(Usermodule[0].nombres);
            this.setID(Usermodule[0].id_persona);
            this.getLoggedInName.emit(true);
            
            return Usermodule;
        }));

    }


    getUserId( id_persona ){
        return this.httpClient.get(`${ this.baseUrl}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
    }


  
// public userregistration(name,email,pwd,mobile) {
//   return this.httpClient.post<any>(this.baseUrl + '/registration.php', { name,email, pwd,mobile })
//       .pipe(map(Usermodule => {
//           return Usermodule;
//       }));
// }



setID(id_persona: string) {
    localStorage.setItem('id_persona', id_persona);
  }
   
getID() {
    return localStorage.getItem('id_persona');
  }
  

//token
setToken(token: string) {
  localStorage.setItem('token', token);
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
 