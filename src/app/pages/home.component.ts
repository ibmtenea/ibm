import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiService } from '../services/apiregistros.service';
import { Issue } from  '../models/issue';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-app',
  templateUrl: './home.component.html'
  
})

export class HomeComponent {
   
  issue: Issue = new Issue();
  editing = {};
  rows = [];
  temp = [];
  PHP_API_SERVER = "http://joraco.site:8081/b"; //URL del servicio
  numero: number;
  final: Observable<Object>;
  dregistro = null;
  datoregistro = {
    id: null,
    tarea: null,
    hora: null,
    estatus: null
  }

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode;
  campo: any;
  id: any;
  valor: any;
  ever: any;
  datos: string;
  
  constructor(private httpClient: HttpClient, private apiService: ApiService) {
    this.fetch(data => {
      // cache
      this.temp = [...data];
      this.rows = data;
    });
  }

  //el ngoninit nos servira para recargar en caso de error de validacion
  ngOnInit(){
    this.fetch(data => {
      this.temp = [...data];
      this.rows = data;
    });
  }

  recarga(){ 
      location.reload();
  }

  //cargamos el listado
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `${this.PHP_API_SERVER}/ajax/registro_read.php`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

//alta de registro
  altaRegistro() {
    if(this.datoregistro.tarea==null || this.datoregistro.hora==null || this.datoregistro.estatus==null){
      Swal.fire({
        title: 'Revise los datos',
        text: 'Los campos no pueden estar vacíos!!',
        icon: 'error',
      });   
    } else {     
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
    this.id = event.target.title;
    this.valor = event.target.value;
    this.ever = this.campo,this.id,this.valor;
    this.datos = JSON.stringify({ "campo": this.campo, "id": this.id, "valor": this.valor });

    var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    var horaResult = patronHora.test(this.valor);

    if(this.campo == "hora"){
      if(horaResult==false){
        Swal.fire({
          title: 'Revise los datos',
          text: 'El campo "hora" debe de cumplir con los requerimientos!!',
          icon: 'error',
        }); 
        this.ngOnInit();  
      } else {
        Swal.fire({
          text: 'Registro actualizado',
          icon: 'success',  
          showConfirmButton : false
        })
      }
    }
    else if(this.campo == "tarea" && this.valor.length != 3){
      Swal.fire({
        title: 'Revise los datos',
        text: 'El campo "tarea" debe contener como mínimo tres carácteres!!',
        icon: 'error',
      });   
      this.ngOnInit();   
    } else {
      this.apiService.modiRegistro(this.datos).subscribe(
        datos => {
          Swal.fire({
            text: 'Registro actualizado',
            icon: 'success',  
            showConfirmButton : false
          })
          
          console.log(event);       
        });
    }

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