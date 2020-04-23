import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';


@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
 
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  constructor(private httpClient: HttpClient) {}




  delete(datosborrado){
    console.log(datosborrado);
    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_historico_borrado.php`,datosborrado);
  }

}