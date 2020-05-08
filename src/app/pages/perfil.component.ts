import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


import { DetalleService } from '../services/detalle.service';
import { ActivatedRoute, Router  } from '@angular/router';

import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Constantes } from '../models/constantes.model';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Personas } from '../models/personas';
import { Seguimiento } from '../models/seguimiento';
import { DetalleHistoricoService } from '../services/detallehistorico.service';
import { ApiPersonas } from '../services/apipersonas.service';
import { Roles } from '../models/roles';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
  
})



export class PerfilPersona implements OnInit{
  closeResult = '';
  model: NgbDateStruct;
  registro:Personas = new Personas();

  public Editor = ClassicEditor;
  dias: { name: string; value: string; checked: boolean; }[];
  
  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }


    personas: Personas [] = [];
    roles: Roles[] = [];
    PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

    datosborrado: string;
    numero: number;
    final: Observable<Object>;
    dregistro = null;

    fieldTextType: boolean;
    datoregistro = {
      id_persona: this.activatedRoute.snapshot.paramMap.get('id_persona'),
      id_persona_log: localStorage.getItem('id_persona'),
      nombres: null,
      telefono: null,
      email:  null,
      direccion: null,
      registrado: null,
      id_rol: null,
      password:  null,
      imagen:  null
    }

    

  constructor(private httpClient: HttpClient,private registroService: ApiPersonas,
              private activatedRoute: ActivatedRoute,private router: Router,
              private modalService: NgbModal){

       //cargo los roles para los combos select
        httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
          this.roles = result;
        }, error => console.error(error));

              }



  ngOnInit(){
    const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
 
    this.registroService.getPerson ( id_persona )
      .subscribe( (respuesta:Personas) => {
         this.registro = respuesta;
         this.registro.id_persona =   id_persona;

      });

  }


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  recarga(){ 
    location.reload();
  }



  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  



  //alta de registro
  altaRegistro() {

    //si los campos obligatorios nos llegan vacios
    if(this.datoregistro.nombres==null || this.datoregistro.email==null || this.datoregistro.id_rol==null || this.datoregistro.password==null){
      Swal.fire({
        title: 'Revise los datos',
        text: 'Los campos obligatorios no pueden estar vacíos!!',
        icon: 'error',
      });   
    } else {
      //enviamos el array a la funcions del server
      this.registroService.altaRegistro(this.datoregistro).subscribe(
        datos => {
          Swal.fire({
            title: this.datoregistro.nombres,
            text: 'Registro añadido',
            icon: 'success',  
            showConfirmButton : false
          }),this.recarga();      
        });
    }
  }

  


  guardarregistro( ){
    console.log(this.registro);
    //eliminamos del local storage el id_rol siempre y cuando lo hayamos cambiado
    //y lo volvemos a cambiar por el nuevo
    // if(this.registro.id_rol!=''){
    //   localStorage.removeItem('id_rol');
    //   localStorage.setItem('id_rol',this.registro.id_rol);
    // }

    if(
      this.registro.nombres=='' || 
      this.registro.telefono=='' || 
      this.registro.email=='' || 

      this.registro.direccion=='' ||
      this.registro.id_rol=='' 
      ){
     Swal.fire({
       text: 'Los campos obligatorios no pueden quedar vacíos',
       icon: 'error',  
       showConfirmButton : true
     }); 
    }  else {
            //validacion email      
            var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            var emailResult = patronEmail.test(this.registro.email);
            if(emailResult==false){
              Swal.fire({
                text: 'El campo E-mail debe cumplir con el formato adecuado',
                icon: 'error',  
                showConfirmButton : true
              });
            } else 
            // validacion password
            // al menos 1 número, una minúscula y una mayuscula
            // al menos 6 carácteres
            var patronPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            var passwordResult = patronPassword.test(this.registro.password);
            if(passwordResult==false){
              Swal.fire({
                text: 'El campo Password debe tener al menos 1 número, una minúscula y una mayúscula y como mínimo 6 carácteres',
                icon: 'error',  
                showConfirmButton : true
              });
            } else {
              let peticion: Observable<any>;
              peticion = this.registroService.actualizarRegistro(this.registro);
              peticion.subscribe( respuesta => {
                Swal.fire({
                  title: this.registro.nombres,
                  text: 'Registro modificado',
                  icon: 'success',  
                  showConfirmButton : false
                }),this.recarga();  
              });
            }

   }

 }












}