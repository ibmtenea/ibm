import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html'
})
export class IdentificacionComponent implements OnInit {


  nombre='';

  constructor(public wsService: WebsocketService, private router: Router ) { }

  ngOnInit(): void {
  }


  ingresar(){
    this.wsService.loginWS( this.nombre )
    .then( () =>{
        this.router.navigateByUrl('/mensajes');
    });
  }
}
