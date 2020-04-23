

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Issue } from '../models/issue';
import { Personas } from '../models/personas';
import { Seguimiento } from '../models/seguimiento';
@Injectable(
    {
        providedIn:'root'
    }
)


export class DetalleHistoricoService {

    private personas:Issue[] = [];
     //persons:any[] = [];
 
        //definimos la url del servicio
        private url = 'http://joraco.site:8081/b/ajax';



        constructor( private http: HttpClient) {
            // console.log("servicio listo para usar");
            // this.http.get('https://restcountries.eu/rest/v2/lang/es') //URL del servicio
            // .subscribe( (resultados:any) => {
            // this.persons = resultados;
            // } );
        }



        //obtener persona por id
        getPerson( id:string ){
            return this.http.get(`${ this.url}/registro_detalle.php?id=${ id }`);
        }


        delete(datosborrado){
            console.log(datosborrado);
            return this.http.post(`${this.url}/registro_seguimiento_borrado.php`,datosborrado);
          }


 
    
}

