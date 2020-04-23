

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Issue } from '../../app/models/issue';
import { Personas } from '../models/personas';
import { Seguimiento } from '../models/seguimiento';
@Injectable(
    {
        providedIn:'root'
    }
)


export class DetalleService {

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

        // //nuevo registro
        // crearPersona( persona: Issue ){
        //     return this.http.post(`${ this.url}/personas.php`,persona)
        //     .pipe(
        //         map( (respuesta:any) => {
        //             persona.id = respuesta.name;
        //             return persona;
        //         })
        //     );
        // }

        //modificar registro
        actualizarRegistro(persona: Issue){

            const personaTemp = {
                ...persona
            };
            delete personaTemp.id_tarea;

            return this.http.post(`${this.url}/registro_update_detalle.php`, persona);  

        }


        actualizarRegistroSeguimiento(datoregistro) {
            console.log(JSON.stringify(datoregistro));
            return this.http.post(`${this.url}/registro_update_seguimiento.php`, JSON.stringify(datoregistro));
        }



        //obtener persona por id_tarea
        getPerson( id_tarea:string ){
            return this.http.get(`${ this.url}/registro_detalle.php?id_tarea=${ id_tarea }`);
        }


        delete(datosborrado){
            console.log(datosborrado);
            return this.http.post(`${this.url}/registro_seguimiento_borrado.php`,datosborrado);
          }


   
          

        // buscarPersonas( termino:string ){
        //     let heroesArr:PersonaModel[] = [];
        //     termino = termino.toLowerCase(); 
        //     //console.log('termino: ', heroesArr); 

        //     for( let i = 0; i < this.personas.length; i ++ ){  

        //       let persona = this.personas[i];     
        //       let nombre = persona.nombre.toLowerCase(); 
                  
        //       if( nombre.indexOf( termino ) >= 0  ){
        //         persona.idx = i;
        //         heroesArr.push( persona )
        //       }
        //     }
        //     return heroesArr; 
        //   }
       
 
    
}

//SI QUEREMOS ESPECIFICAR EL TIPO DE DATOS RECIBIDOS, por lo general ANY
// export interface Heroe{
//         nombre: string;
//          bio: string;
//          img: string;
//          aparicion: string;
//          casa: string;
//          idx?: number
// }

