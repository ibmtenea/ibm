import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private PHP_API_SERVER = "http://joraco.site:8081/b"; //URL del servicio

  constructor(private httpClient: HttpClient) {}

  altaRegistro(datoregistro) {
    console.log(JSON.stringify(datoregistro));
      return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_crear.php`, JSON.stringify(datoregistro));
  }

  modiRegistro(datos){

    return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);   
  
  }

  // delete(id: number){
  //   return this.httpClient.delete<Issue>(`${this.PHP_API_SERVER}/ajax/registro_delete.php/?id=${id}`);
  // }

}