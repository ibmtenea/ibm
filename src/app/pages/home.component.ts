import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiService } from '../services/apiregistros.service';
import { Issue } from  '../models/issue';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import { Constantes } from '../models/constantes.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-app',
  templateUrl: './home.component.html'
  
})

export class HomeComponent {
   
  personas:Issue[] = [];
  issue: Issue = new Issue();
  editing = {};
  rows = [];
  temp = [];
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  numero: number;
  final: Observable<Object>;
  dregistro = null;
  datoregistro = {
    id_tarea: null,
    tarea: null,
    issueg: null,
    hora: null,
    hour: null,
    estatus: null,
    status: null,
    observaciones: null
  }

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode;
  campo: any;
  id_tarea: any;
  id_persona: any;
  valor: any;
  ever: any;
  datos: string;
  datosborrado: string;


  my_messages = {
    'emptyMessage': '',
    'totalMessage': ''
  };
 
 
  constructor(private translate: TranslateService,private httpClient: HttpClient, private apiService: ApiService) {
        this.fetch(data => {
          // cache
            this.temp = [...data];
            this.rows = data;
        });

        translate.get('Total', {value: 'eeeeeeeeee'})
        .subscribe((res: string) => this.my_messages.totalMessage = res);
        translate.get('No hay resultados para mostrar', {value: ''})
        .subscribe((res: string) => this.my_messages.emptyMessage = res);


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
      const id_persona = localStorage.getItem('id_persona');
      const valorTurno = localStorage.getItem('valorTurno');
      const req = new XMLHttpRequest();
      req.open('GET', `${this.PHP_API_SERVER}/ajax/registro_read.php?id_persona=${id_persona}&valorturno=${valorTurno}`);
      req.onload = () => {
        cb(JSON.parse(req.response));

      };
      req.send();
    }
  }









  //alta de registro
  altaRegistro() {
    //si los campos obligatorios nos llegan vacios
    if(this.datoregistro.tarea==null || this.datoregistro.hora==null || this.datoregistro.estatus==null){
      Swal.fire({
        title: 'Revise los datos',
        text: 'Los campos no pueden estar vacíos!!',
        icon: 'error',
      });   
    } else {
      //enviamos el array a la funcions del server
      this.apiService.altaRegistro(this.datoregistro).subscribe(
        datos => {
          Swal.fire({
            title: this.datoregistro.tarea,
            text: 'Registro añadido',
            icon: 'success',  
            showConfirmButton : false
          }),this.recarga();      
        });
    }
  }

  //actualización campos inline
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    this.campo = cell;
    this.id_tarea = event.target.title;
    const id_persona = localStorage.getItem('id_persona');
    this.valor = event.target.value;
    this.ever = id_persona,this.campo,this.id_tarea,this.valor;
    this.datos = JSON.stringify({ "id_persona": id_persona,"campo": this.campo, "id_tarea": this.id_tarea, "valor": this.valor });
    
    //validacion del formato de la hora
    var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    var horaResult = patronHora.test(this.valor);

    //si el campo que recibo es hora...
    if(this.campo == "hora"){
      //...valido su formato
      if(horaResult==false){
        Swal.fire({
          title: 'Revise los datos',
          text: 'El campo "hora" debe de cumplir con los requerimientos!!',
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
    else if(this.campo == "tarea" && this.valor.length < 3){
       
          Swal.fire({
            title: 'Revise los datos',
            text: 'El campo "tarea" debe contener como mínimo tres carácteres!!',
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
   borrarRegistro ( registro: Issue, i:string){

    Swal.fire({
        title: `¿Desea borrar el registro ${registro.tarea}`,
        text: 'Confirme si desea borrar el registro',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true

    }).then( respuesta => {
        if ( respuesta.value ) {
            const id_persona = localStorage.getItem('id_persona');
            this.datosborrado = JSON.stringify({ "id_persona": id_persona, "id_tarea": registro.id_tarea });
            this.apiService.delete( this.datosborrado ).subscribe();

            Swal.fire({
              title: registro.tarea,
              text: 'Registro eliminado',
              icon: 'success',  
              showConfirmButton : false
            }) ,this.recarga();  

        }
      });
    }



  //actualizacion filtro busqueda
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return  d.tarea.toLowerCase().indexOf(val) !== -1 || d.hora.toLowerCase().indexOf(val) !== -1|| d.estatus.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // actualizamos las rows
    this.rows = temp;
    // Cuando cambie el filtro, regresa a la primera página.
    this.table.offset = 0;
  }


}