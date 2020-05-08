import { Injectable } from '@angular/core';
import { Constantes } from '../models/constantes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServicioService {

  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private http: HttpClient) { }


  altaRegistroFoto(datosFoto) {
    return this.http.post(`${this.PHP_API_SERVER}/ajax/personas_update_foto.php`, datosFoto);
  } 


  guardarRol(datosformulario){

    return this.http.post(`${this.PHP_API_SERVER}/ajax/rol_crear.php`, JSON.stringify(datosformulario));
  }

  deleteRol(datosborrado){
  
    return this.http.post(`${this.PHP_API_SERVER}/ajax/roles_borrado.php`, datosborrado);
  }
  
  guardarTurno(datosformularioturno){
 
    return this.http.post(`${this.PHP_API_SERVER}/ajax/turno_registro_crear.php`, JSON.stringify(datosformularioturno));
  }
  
  deleteTurno(datosborradoturno){
 
    return this.http.post(`${this.PHP_API_SERVER}/ajax/turno_registro_borrado.php`, datosborradoturno);
  }


  getPersonas( id_persona:string ){

    return this.http.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
  }

  guardarNuevancidencia(incidenciaForm){

    return this.http.post(`${this.PHP_API_SERVER}/ajax/incidencia_crear.php`, JSON.stringify(incidenciaForm));
  }      


  getAyuda( id_ayuda:string ){
      return this.http.get(`${ this.PHP_API_SERVER}/ajax/ayuda_detalle.php?id_ayuda=${ id_ayuda }`);
  }

  guardarNewAyuda(datosformularioayuda){

    return this.http.post(`${this.PHP_API_SERVER}/ajax/ayuda_crear.php`, JSON.stringify(datosformularioayuda));
  }

  guardarAyudaModificado(datosformularioayuda){
 
    return this.http.post(`${this.PHP_API_SERVER}/ajax/ayuda_update.php`, JSON.stringify(datosformularioayuda));
  }

  deleteAyuda(datosborradoAyuda){
  
    return this.http.post(`${this.PHP_API_SERVER}/ajax/ayuda_borrado.php`, datosborradoAyuda);
  }
}
