import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';



@Injectable({
  providedIn: 'root'
})
export class PeriodicidadService {
 
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private httpClient: HttpClient) {}

  altaRegistrochecks(datoregistro) {
      console.log(JSON.stringify(datoregistro));
      return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/periodicidad_crear.php`, JSON.stringify(datoregistro));
  }

  //obtener persona por id
          getCheckeds( id_tarea:string ){
            return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/periodicidad_detalle.php?id_tarea=${ id_tarea }`);
        }

  getDatosMadre( id_tarea ){
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/periodicidad_madre.php?id_tarea=${ id_tarea }`)
    
  }
  

//   modiRegistro(datos){
//     console.log(datos);
//     return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);   
  
//   }

//   delete(datosborrado){
//     console.log(datosborrado);
//     return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_borrado.php`,datosborrado);
//   }


delete(datosborrado){
  console.log(datosborrado);
  return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_diames_borrado.php`,datosborrado);
}



}