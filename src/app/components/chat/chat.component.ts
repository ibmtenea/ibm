import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
  
})
export class ChatComponent implements OnInit, OnDestroy {

  texto: string;
  mensajesSubscription: Subscription;
  elemento: HTMLElement;

  mensajes: any[] = [];

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSubscription = this.chatService.getMessages()
                                          .subscribe(msg => {
                                            this.mensajes.push( msg );
                                            setTimeout(() =>{
                                                this.elemento.scrollTop = this.elemento.scrollHeight;
                                            },50);
                                          });
  }

ngOnDestroy(){
this.mensajesSubscription.unsubscribe;
}
  


  

}
