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


  //turnos por rol
  getTurnosReadByRol( id_rol:string ){
      return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/turnos_read_by_rol.php?id_rol=${ id_rol }`);
  }

  //obtener persona por id_tarea
  getPerson( id_persona ){
      return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
  }

  //obtener foto persona
  getFotografia( id_persona ){
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
  }

  validaEmail( email ){
    
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_validar_email.php?email=${ email }`);
  }


  altaRegistroFoto(datosFoto) {
  
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_update_foto.php`, datosFoto);
  } 


  altaRegistro(datoregistro) {
      return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_crear.php`, JSON.stringify(datoregistro));
  }

  getIdTurnoby( id_persona ){
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/turnos_read_by__id_persona.php?id_persona=${ id_persona }`);
 }

 getTurnosbyID( id_persona ){
  return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/turno_read_by_persona.php?id_persona=${ id_persona }`);
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
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update_personas.php`, datos);   
  
  }
  
  delete(datosborrado){
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_borrado.php`,datosborrado);
  }

}