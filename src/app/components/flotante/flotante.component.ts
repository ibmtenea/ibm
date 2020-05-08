import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Personas } from '../../models/personas';
import { FlotanteService } from '../../services/flotante.service';
import { empty } from 'rxjs';

@Component({
    selector: 'app-flotante',
    templateUrl: './flotante.component.html'
})

export class FlotanteComponent implements OnInit {
    user:Personas = new Personas();

    isOn = true;

    constructor(
        private httpClient: HttpClient,
        private router:Router,
        private flotanteService: FlotanteService
        ){

            if(localStorage.getItem('id_persona')!=null){
                    const id_persona = localStorage.getItem('id_persona');
                    this.flotanteService.getUserId ( id_persona )
                    .subscribe( (respuesta:Personas) => {
                        this.user = respuesta;
                    });
            }

    }

    ngOnInit() {

    }
  
    cerrarConsola(){
        
    }



}


