import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import { Constantes } from '../models/constantes.model';
import { ApiPersonas } from '../services/apipersonas.service';
import { Roles } from '../models/roles';
import { Personas } from '../models/personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.pages.html'
  
})

export class PersonasPage {
  roles: Roles[] = [];
  personas:Personas[] = [];
  issue: Personas = new Personas();
  editing = {};
  rows = [];
  temp = [];
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  final: Observable<Object>;
  dregistro = null;
  datoregistro = {
    id_persona: null,
    nombres: null,
    telefono: null,
    email:  null,
    direccion: null,
    id_rol: null,
    password:  null,
    imagen:  null,
    id_persona_log: localStorage.getItem('id_persona')
  }
  emailvalida = {
    mailexiste: null
  }
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode;
  campo: any;
  id_persona: any;
  valor: any;
  ever: any;
  datos: string;
  datosborrado: string;


  
  constructor(private httpClient: HttpClient, private apiService: ApiPersonas) {
        this.fetch(data => {
          // cache
            this.temp = [...data];
            this.rows = data;
        });

        //cargo los roles para los combos select
        httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
          }, error => console.error(error));

  }

  //el ngoninit nos servira para recargar en caso de error de validacion
  ngOnInit(){
    this.fetch(data => {
        this.temp = [...data];
        this.rows = data;
      });
  }

  //reload pagina al usar sweet alerts etc
  recarga(){ 
      location.reload();
  }

  //cargamos el listado
  fetch(cb) {
    if(cb){
      const req = new XMLHttpRequest();
      req.open('GET', `${this.PHP_API_SERVER}/ajax/personas_read.php`);
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
      req.send();
    }
  }

  


  //alta de registro
  altaRegistro() {

    //compruebo que el email no exista (ya se valida también en el servidor en PHP)
    this.apiService.validaEmail(this.datoregistro.email).subscribe(
      (datosMail:any) => {
        this.emailvalida = datosMail;  
        if(this.emailvalida.mailexiste==true) {
              Swal.fire({
                title: this.datoregistro.email,
                text: 'El e-mail indicado ya existe, escoja otro',
                icon: 'error',  
                showConfirmButton : true
              });  
        }
        //si los campos obligatorios nos llegan vacios
        else if(this.datoregistro.nombres==null || this.datoregistro.email==null || this.datoregistro.id_rol==null || this.datoregistro.password==null){
          Swal.fire({
            title: 'Revise los datos',
            text: 'Los campos obligatorios no pueden estar vacíos!!',
            icon: 'error',
          });   
        } else {

      //enviamos el array a la funcions del server
      this.apiService.altaRegistro(this.datoregistro).subscribe(
        datos => {
          Swal.fire({
            title: this.datoregistro.nombres,
            text: 'Registro añadido',
            icon: 'success',  
            showConfirmButton : false
          }),this.recarga(); 
        });
       }
   });
  }

  //actualización campos inline
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    this.campo = cell;
    this.id_persona = event.target.title;
    this.valor = event.target.value;
    this.ever = this.campo,this.id_persona,this.valor;
    this.datos = JSON.stringify({ "campo": this.campo, "id_persona": this.id_persona, "valor": this.valor });

    //validacion del formato email
     var patronEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
     var emailResult = patronEmail.test(this.valor);

    // //si el campo que recibo es email...
    if(this.campo == "email"){
      //...valido su formato
      if(emailResult==false){
        Swal.fire({
          title: 'Revise los datos',
          text: 'El campo "email" debe de cumplir con los requerimientos!!',
          icon: 'error',
        }); 
        this.ngOnInit();  
      } 
      // else {
      //   Swal.fire({
      //     text: 'Registro actualizado',
      //     icon: 'success',  
      //     showConfirmButton : false
      //   })
      // }
    }
    //el campo que recibo es tarea pero es menor de 3 caracteres
    else 
    if(this.campo == "nombres" && this.valor.length < 3){
       
          Swal.fire({
            title: 'Revise los datos',
            text: 'El campo "nombres" debe contener como mínimo tres carácteres!!',
            icon: 'error',
          });   
          this.ngOnInit();  
             
    } 
    else 
    if(this.campo == "telefono" && this.valor.length < 9){       
          Swal.fire({
            title: 'Revise los datos',
            text: 'El campo "telefono" debe contener nueve carácteres!!',
            icon: 'error',
          });   
          this.ngOnInit();  
             
    } else {
      //todo Ok llamo al servicio
      this.apiService.modiRegistro(this.datos).subscribe(
        datos => {
          Swal.fire({
            text: 'Registro actualizado',
            icon: 'success',  
            showConfirmButton : false
          })
      
        });
    }

  }


   //eliminar registro      
   borrarRegistro ( registro: Personas, i:string){
    
    Swal.fire({
        title: `¿Desea borrar el registro ${registro.nombres}`,
        text: 'Confirme si desea borrar el registro',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true

    }).then( respuesta => {
         
        if ( respuesta.value ) {
            const id_persona_log = localStorage.getItem('id_persona');
            this.datosborrado = JSON.stringify({ "id_persona_log": id_persona_log,"nombres": registro.nombres, "id_persona": registro.id_persona });
            this.apiService.delete( this.datosborrado ).subscribe();

            Swal.fire({
              title: registro.nombres,
              text: 'Registro eliminado',
              icon: 'success',  
              showConfirmButton : false
            })
            ,this.recarga();  

        }
      });
    }



  //actualizacion filtro busqueda
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return  d.nombres.toLowerCase().indexOf(val) !== -1 || d.telefono.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // actualizamos las rows
    this.rows = temp;
    // Cuando cambie el filtro, regresa a la primera página.
    this.table.offset = 0;
  }

}

interface Rols {
    rol_name: string;
}