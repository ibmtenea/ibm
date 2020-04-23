import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../models/constantes.model';


@Injectable({
  providedIn: 'root'
})
export class ServicioComun {
 

  constructor(private httpClient: HttpClient) {}

 

}