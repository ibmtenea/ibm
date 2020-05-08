

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Constantes } from '../models/constantes.model';
@Injectable(
    {
        providedIn:'root'
    }
)


export class DetalleHistoricoService {

     //persons:any[] = [];
 
 

        private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

        constructor( private http: HttpClient) {

        }



        //obtener persona por id
        getDetalleHistorico( id_log:string ){
            return this.http.get(`${ this.PHP_API_SERVER}/ajax/registro_historico_detalle.php?id_log=${ id_log }`);
        }


        delete(datosborrado){
            console.log(datosborrado);
            return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_seguimiento_borrado.php`,datosborrado);
          }


 
    
}

