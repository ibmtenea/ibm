import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario: Usuario = null;

  constructor(private socket: Socket, private router: Router) { 
    this.cargarStorage();
    this.checkStatus();
  }

  checkStatus(){

    this.socket.on('connect', () =>{
      console.log('Conectado al servidor');
      this.socketStatus = true;
      this.cargarStorage();
    });

    this.socket.on('disconnect', () =>{
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emit( evento: string, payload?: any, callback?: Function ){
    console.log('Emitiendo', evento)
    this.socket.emit ( evento, payload, callback );
  }

  //recibe un evento y devuelve un observable
  listen( evento: string ){
    return this.socket.fromEvent( evento ); 
  }

  loginWS ( id_persona: string ){
    //retorno promesa para mantener sesion activa
    return new Promise( ( resolve, reject ) =>{
      this.emit('configurar-usuario',{id_persona}, resp =>{  
        this.usuario= new Usuario( id_persona );
        this.guardarStorage();
        resolve(); //resuelvo la promesa
      })
    });
  }


  // logoutWS(){
  //   this.usuario = null;
  //   localStorage.removeItem('usuario');
  //   const payload = {
  //     id_persona: ''
  //   }
  //   this.emit('configurar-usuario', payload, ()=> {} );
  //   this.router.navigateByUrl('');
  // }


  getUsuario(){
    return this.usuario;  
  }

  //almacenamos la sesion del usuario el localstorage
  guardarStorage(){
    localStorage.setItem ('usuario', JSON.stringify(this.usuario));
  }

  //leemos el localstorage
  cargarStorage(){ 
    if(localStorage.getItem('usuario')){
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.loginWS(this.usuario.id_persona);
    } 
  }

}
