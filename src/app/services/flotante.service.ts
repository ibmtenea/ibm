import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';

@Injectable({
  providedIn: 'root'
})
export class FlotanteService {

  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private httpClient : HttpClient) { }

  getUserId( id_persona ){
    return this.httpClient.get(`${ this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${ id_persona }`);
}

}


