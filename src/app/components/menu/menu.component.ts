import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';



import { map } from 'rxjs/operators';
import { DataserviceService } from '../../services/dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usermodule } from '../../models/usuario.model';

import { Personas } from '../../models/personas';
import { Roles } from '../../models/roles';
import { Constantes } from '../../models/constantes.model';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../services/serviciocompartido.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})




export class MenuComponent implements OnInit{

clickEventsubscription:Subscription;
user:Personas = new Personas();

PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
constructor(private httpClient: HttpClient,private servicioCompartido: SharedService, private dataService: DataserviceService,private router:Router){

    this.clickEventsubscription=this.servicioCompartido.getClickEvent().subscribe(()=>{
        this.incrementCount();
        })

 }
 public show:boolean = false;

        ngOnInit(){
            const id_persona = localStorage.getItem('id_persona');
            this.dataService.getUserId ( localStorage.getItem('id_persona') )
              .subscribe( (respuesta:Personas) => {
                 this.user = respuesta;
                this.user.id_persona=localStorage.getItem('id_persona');
              });
        }

        

        incrementCount(){
            this.show = !this.show;
        }


}
