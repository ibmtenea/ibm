import {Component, OnInit} from '@angular/core';
import { DataserviceService } from './services/dataservice.service';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'check';

          loginbtn:boolean;
          logoutbtn:boolean;
          constructor(private dataService: DataserviceService, public wsService: WebsocketService, public chatService: ChatService) {
            dataService.getLoggedInName.subscribe(nombres => this.changeName(nombres));
            if(this.dataService.isLoggedIn())
            {
              console.log("loggedin");
              this.loginbtn=false;
              this.logoutbtn=true
            }
            else{
            this.loginbtn=true;
            this.logoutbtn=false
            }
        
        
        }
        private changeName(nombres: boolean): void {
          this.logoutbtn = nombres;
          this.loginbtn = !nombres;
        }
        logout()
        {
          this.dataService.deleteToken();
          window.location.href = window.location.href;
        }


        ngOnInit(){
          this.chatService.getMessagesPrivate().subscribe( msg =>{
            console.log(msg);
          });
        }

}
