import {Component, ViewChild, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Issue } from  '../../models/issue';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import { Constantes } from '../../models/constantes.model';
import { IncidenciasService } from '../../services/incidencias.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html'
})
export class IncidenciasComponent implements OnInit {



   
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
    id_log: null,
    fecha: null,
    tarea: null,
    issueg: null,
    descripcion_accion: null,
    hour: null,
    estatus: null,
    status: null,
    observaciones: null
  }

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode;
  campo: any;
  id_log: any;
  valor: any;
  ever: any;
  datos: string;
  datosborrado: string;
  
  constructor(private spinner: NgxSpinnerService,private httpClient: HttpClient, private incidenciasService: IncidenciasService) {
        this.fetch(data => {
          // cache
            this.temp = [...data];
            this.rows = data;
        });


  }

  //el ngoninit nos servira para recargar en caso de error de validacion
  ngOnInit(){

    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);



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
      req.open('GET', `${this.PHP_API_SERVER}/ajax/read_incidencias.php`);
      req.onload = () => {
        cb(JSON.parse(req.response));
        console.log(JSON.parse(req.response));
      };
      req.send();
    }
  }




   //eliminar registro      
   borrarRegistro ( registro: Issue, i:string){

    Swal.fire({
        title: `¿Desea borrar el registro histórico ${registro.tarea}`,
        text: 'Confirme si desea borrar el registro',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true

    }).then( respuesta => {
        if ( respuesta.value ) {
            this.datosborrado = JSON.stringify({ "tarea": registro.tarea, "id_tarea": registro.id_tarea });
            this.incidenciasService.delete( this.datosborrado ).subscribe();

            Swal.fire({
              title: registro.tarea,
              text: 'Registro eliminado',
              icon: 'success',  
              showConfirmButton : false
            }),this.recarga();  

        }
      });
    }



  //actualizacion filtro busqueda
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return  d.fecha.toLowerCase().indexOf(val) !== -1 || d.resuelta.toLowerCase().indexOf(val) !== -1|| d.fecharesuelta.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // actualizamos las rows
    this.rows = temp;
    // Cuando cambie el filtro, regresa a la primera página.
    this.table.offset = 0;
  }


}