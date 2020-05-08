import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html'
  
})
export class MensajesComponent implements OnInit {

  constructor(public wsService: WebsocketService) { }

  ngOnInit() {
  }


}
