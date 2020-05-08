import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private httpClient: HttpClient) {}

  altaRegistro(datoregistro) {
     console.log(JSON.stringify(datoregistro));
      return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_crear.php`, JSON.stringify(datoregistro));
  }

  modiRegistro(datos){
    //console.log(JSON.stringify(datos));
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);   
  
  }

  delete(datosborrado){
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_borrado.php`,datosborrado);
  }

}