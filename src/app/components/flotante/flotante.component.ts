import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataserviceService } from '../../services/dataservice.service';
import { Personas } from '../../models/personas';

@Component({
    selector: 'app-flotante',
    templateUrl: './flotante.component.html'
})

export class FlotanteComponent implements OnInit {
    user:Personas = new Personas();

    constructor(
        private httpClient: HttpClient,
        private router:Router,
        private dataService: DataserviceService
        ){

        const id_persona = localStorage.getItem('id_persona');
        this.dataService.getUserId ( id_persona )
          .subscribe( (respuesta:Personas) => {
             this.user = respuesta;
          });
    }

    ngOnInit() {

    }
  










}


