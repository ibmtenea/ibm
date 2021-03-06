import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';

import { DetalleService } from '../services/detalle.service';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Roles } from '../models/roles';
import { Recurrencias } from '../models/recurrencias';
import { Estados } from '../models/estados';
import { Categorias } from '../models/categorias';
import { Constantes } from '../models/constantes.model';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Personas } from '../models/personas';
import { Seguimiento } from '../models/seguimiento';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'

})



export class DetalleComponent implements OnInit {
  closeResult = '';
  model: NgbDateStruct;
  registro: Issue = new Issue();
  dregistroa: Issue = new Issue();
  registropersona: Seguimiento = new Seguimiento();
  public Editor = ClassicEditor;
  dias: { name: string; value: string; checked: boolean; }[];
  id_categoria: string;
  periodetalle: any[];
  categoperiod: any;
  periodcate: any;

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  roles: Roles[] = [];
  recurrencias: Recurrencias[] = [];
  estados: Estados[] = [];
  categorias: Categorias[] = [];
  personas: Personas[] = [];
  suscripcion: Seguimiento[] = [];
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  datosborrado: string;
  numero: number;
  final: Observable<Object>;
  dregistro = null;
  datoregistro = {
    id_seguimiento: null,
    id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
    id_persona: null,
    id_persona_log: localStorage.getItem('id_persona')
  }
  constructor(private httpClient: HttpClient, private registroService: DetalleService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private modalService: NgbModal) {


    this.dias = [
      { name: 'OptionA', value: 'first_opt', checked: true },
      { name: 'OptionB', value: 'second_opt', checked: false },
      { name: 'OptionC', value: 'third_opt', checked: true }
    ];




    //cargo los roles para los combos select
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
      this.roles = result;
    }, error => console.error(error));
    //cargo los estados para los combos select
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/estados_read.php').subscribe(result => {
      this.estados = result;
    }, error => console.error(error));
    //cargo las recurrencias para los combos select
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/recurrencias_read.php').subscribe(result => {
      this.recurrencias = result;
    }, error => console.error(error));
    //cargo las categorias para los combos select
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(result => {
      this.categorias = result;
    }, error => console.error(error));
    //cargo las personas para los combos select
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/personas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.personas = result;
    }, error => console.error(error));
    //cargo el listado de personas para esta ID tarea
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/personas_suscritas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.suscripcion = result;
    }, error => console.error(error));







  }

  ngOnInit() {
    const id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
    this.registroService.getPerson(id_tarea)
      .subscribe((respuesta: Issue) => {
        this.registro = respuesta;
        this.registro.id_tarea = id_tarea;
        this.registro.id_persona = localStorage.getItem('id_persona');


        //cargo el listado periodicidades de esta tarea para verificar a que categoria pertenecen y mostrar un combo u otro
        this.httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
          this.periodetalle = result[0];
          if (undefined == this.periodetalle) {
            this.registro.decidecategoria = '0';
          } else {
            this.periodcate = this.periodetalle['id_categoria'];
            this.registro.decidecategoria = this.periodcate;
          }
        }, error => console.error(error));

      });

  }


  recarga() {
    location.reload();
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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


  guardarregistro(form: NgForm) {
    if (this.registro.tarea == '' || this.registro.ibm_hora == '' || this.registro.estatus == '') {
      Swal.fire({
        text: 'Los campos obligatorios no pueden quedar vacíos',
        icon: 'error',
        showConfirmButton: true
      });
    } else {


    
        let peticion: Observable<any>;
        peticion = this.registroService.actualizarRegistro(this.registro);
        peticion.subscribe(respuesta => {
          Swal.fire({
            title: this.registro.tarea,
            text: 'Registro modificado',
            icon: 'success',
            showConfirmButton: true
          })
          
          //, this.recarga();

        });

      

    }

  }





  guardarseguimiento() {
    if (this.datoregistro.id_persona == null) {
      Swal.fire({
        text: 'Debe seleccionar a alguien!',
        icon: 'error',
        showConfirmButton: true
      });
    } else {
      let peticion: Observable<any>;
      peticion = this.registroService.actualizarRegistroSeguimiento(this.datoregistro);
      peticion.subscribe(respuesta => {
        Swal.fire({
          title: this.datoregistro.id_persona,
          text: 'Persona asignada',
          icon: 'success',
          showConfirmButton: false
        }), this.recarga();
      });
    }
  }



  




  //eliminar registro      
  eliminarpersona(registro: Seguimiento, i: string) {

    Swal.fire({
      title: `¿Desea elimina a esta persona del seguimiento?`,
      text: 'Confirme si desea borrar el registro',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true

    }).then(respuesta => {

      if (respuesta.value) {
        this.datosborrado = JSON.stringify({ "id_seguimiento": registro.id_seguimiento });
        this.registroService.delete(this.datosborrado).subscribe();

        Swal.fire({
          title: registro.id_seguimiento,
          text: 'Registro eliminado',
          icon: 'success',
          showConfirmButton: false
        }), this.recarga();

      }
    });
  }













  // registro: any = {};


  //   constructor( private activatedRoute: ActivatedRoute, 
  //                private _registroService: registrosService 
  //                ) {

  //     this.activatedRoute.params.subscribe ( params => {
  //       this.registro = this._registroService.getPerson( params['id'] );
  //     })

  //    }

}