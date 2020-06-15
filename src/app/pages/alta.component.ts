import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ApiService } from '../services/apiregistros.service';
import { Issue } from  '../models/issue';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ColumnMode } from '@swimlane/ngx-datatable';
import Swal from 'sweetalert2';
import { Constantes } from '../models/constantes.model';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';
import { Roles } from '../models/roles';

import { Estados } from '../models/estados';
import { Categorias } from '../models/categorias';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html'
  
})

export class AltaComponent {

    model: NgbDateStruct;
    registro: Issue = new Issue();
    options: FullCalendarOptions;
   events: EventObject[];

    public Editor = ClassicEditor;
    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
    roles: Roles[] = [];
   // recurrencias: Recurrencias[] = [];
    estados: Estados [] = [];
    categorias: Categorias [] = [];
    PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
    personas:Issue[] = [];
    issue: Issue = new Issue();
    editing = {};
    rows = [];
    temp = [];

    numero: number;
    final: Observable<Object>;
    dregistro = null;
    datoregistro = {
        id_tarea: null,
        tarea: null,
        id_persona: localStorage.getItem('id_persona'),
        ibm_hora: null,
        estatus: null,
        observaciones: null,
        id_categoria:  null,
        flag_visibilidad:  null,
        prioridad:  null,
        id_rol:null
    }

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode;
  campo: any;
  id: any;
  valor: any;
  ever: any;
  datos: string;

  
  constructor(private httpClient: HttpClient, private apiService: ApiService, private router: Router) {


        //cargo los roles para los combos select
        httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/roles_read_noadmin.php').subscribe(result => {
            this.roles = result;
          }, error => console.error(error));
 

        //cargo las categorias para los combos select
        httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(result => {
            this.categorias = result;
          }, error => console.error(error));                   



  }

  ngOnInit(){





  }

  //reload pagina al usar sweet alerts etc
  recarga(){ 
    this.router.navigate(['/home']);
  }


  //alta de registro
  altaRegistro() {

    //si los campos obligatorios nos llegan vacios
    if(this.datoregistro.tarea==null || this.datoregistro.ibm_hora==null ){
      Swal.fire({
        title: 'Revise los datos',
        text: 'Los campos no pueden estar vacíos!!',
        icon: 'error',
      });   
    } else {
      //enviamos el array a la funcions del server
      this.apiService.altaRegistro(this.datoregistro).subscribe(
        datos => {

          console.log(this.datoregistro);
          Swal.fire({
            title: this.datoregistro.tarea,
            text: 'Registro añadido',
            icon: 'success',  
            showConfirmButton : true
          });

          //una vez creada la tarea, obtenemos el lastId para abrir la tarea creada.
          this.apiService.getLastId()
          .subscribe((respuesta: any) => {
            this.registro = respuesta;
            const identif = JSON.stringify(this.registro).slice(1, -1);
            const identificador = Constantes.ARND+identif+Constantes.BRND;
           
            this.router.navigateByUrl(`/detalle/${identificador}`);
          });

          // ,this.recarga()
          // ;      
        });
    }
  }


}