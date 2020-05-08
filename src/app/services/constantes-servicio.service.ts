
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';


@Injectable({
  providedIn: 'root',
})
export class ConstantesServicioService {

  constructor(private http:HttpClient) {


    // hacer una petición en el constructor del servicio
    this.http.get('https://jsonplaceholder.typicode.com/photos/1')
    .subscribe((respuesta: any) =>{
        // inicializar las variables de la clase Constante
        Constantes.API_SERVER = "http://joraco.site:8081/b";

  

    });
   }

}