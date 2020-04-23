import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';
import { Personas } from '../models/personas';


@Injectable({
  providedIn: 'root'
})
export class ApiPersonas {
 
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private httpClient: HttpClient) {}



  //obtener persona por id_tarea
  getPerson( id_persona ){
      return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
  }

  //obtener foto persona
  getFotografia( id_persona ){
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
  }

  altaRegistroFoto(datosFoto) {
    console.log(datosFoto);
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_update_foto.php`, datosFoto);
  } 


  altaRegistro(datoregistro) {
      console.log(JSON.stringify(datoregistro));
      return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_crear.php`, JSON.stringify(datoregistro));
  }


  actualizarRegistro(persona: Personas){
    const personaTemp = {
        ...persona
    };
    delete personaTemp.id_persona;
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_update_detalle.php`, persona);  
  }

  modiRegistro(datos){
    console.log(datos);
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);   
  
  }
  
  delete(datosborrado){
    console.log(datosborrado);
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_borrado.php`,datosborrado);
  }

}