

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Issue } from '../../app/models/issue';
import { Personas } from '../models/personas';
import { Seguimiento } from '../models/seguimiento';
import { Constantes } from '../models/constantes.model';

@Injectable(
    {
        providedIn:'root'
    }
)


export class DetalleService {

    private personas:Issue[] = [];
    private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio


        constructor( private http: HttpClient) {}


        //modificar registro
        actualizarRegistro(persona: Issue){

            const personaTemp = {
                ...persona
            };
            delete personaTemp.id_tarea;

            return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_update_detalle.php`, persona);  

        }

         //duplicar
         actualizarRegistroNuevaId(datosclon){
            return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_duplicar_detalle.php`,datosclon);
          }



        actualizarRegistroSeguimiento(datoregistro) {
            console.log(datoregistro);
            return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_update_seguimiento.php`, JSON.stringify(datoregistro));
        }

        //obtener persona por id_tarea
        getPerson( id_tarea:string ){
            return this.http.get(`${ this.PHP_API_SERVER}/ajax/registro_detalle.php?id_tarea=${ id_tarea }`);
        }


        delete(datosborrado){
            return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_seguimiento_borrado.php`,datosborrado);
          }


   
    
       
 
    
}

