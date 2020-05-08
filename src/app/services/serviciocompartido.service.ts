import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Constantes } from '../models/constantes.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})

export class SharedService {

  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

    private subject = new Subject<any>();


    constructor(private httpClient: HttpClient) {}



    sendClickEvent() {
      this.subject.next();
    }
    getClickEvent(): Observable<any>{ 
      return this.subject.asObservable();
    }

}