import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';
import { Personas } from '../models/personas';


@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private httpClient: HttpClient) {}


  //obtener rol persona 
  getUserId( id_persona ){
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
  }
  

}