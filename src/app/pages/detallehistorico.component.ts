import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Issue } from  '../models/issue';

import { DetalleService } from '../services/detalle.service';
import { ActivatedRoute, Router  } from '@angular/router';

import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Roles } from '../models/roles';
import { Recurrencias } from '../models/recurrencias';
import { Estados } from '../models/estados';
import { Categorias } from '../models/categorias';
import { Constantes } from '../models/constantes.model';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Personas } from '../models/personas';
import { Seguimiento } from '../models/seguimiento';
import { DetalleHistoricoService } from '../services/detallehistorico.service';
import { IssueHistorico } from '../models/issuehistorico';
@Component({
  selector: 'app-detallehistorico',
  templateUrl: './detallehistorico.component.html'
  
})



export class DetalleHistoricoComponent implements OnInit{
  closeResult = '';
  model: NgbDateStruct;
  registro:IssueHistorico = new IssueHistorico();
  registropersona:Seguimiento = new Seguimiento();
  public Editor = ClassicEditor;
  dias: { name: string; value: string; checked: boolean; }[];
  
  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  roles: Roles[] = [];
    recurrencias: Recurrencias[] = [];
    estados: Estados [] = [];
    categorias: Categorias [] = [];
    personas: Personas [] = [];
    suscripcion: Seguimiento[] = [];
    PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

    datosborrado: string;
    numero: number;
    final: Observable<Object>;
    dregistro = null;
    datoregistro = {
      id_seguimiento: null,
      id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
      id_persona: null
    }
  constructor(private httpClient: HttpClient,private registroService: DetalleHistoricoService,
              private activatedRoute: ActivatedRoute,private router: Router,
              private modalService: NgbModal){



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

  ngOnInit(){
    const id_log = this.activatedRoute.snapshot.paramMap.get('id_log');
    this.registroService.getDetalleHistorico ( id_log )
      .subscribe( (respuesta:IssueHistorico) => {
         this.registro = respuesta;
         this.registro.id_log =   id_log;
    
      });

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


  





  




   //eliminar registro      
   eliminarpersona ( registro: Seguimiento, i:string){

    Swal.fire({
        title: `¿Desea elimina a esta persona del seguimiento?`,
        text: 'Confirme si desea borrar el registro',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true

    }).then( respuesta => {
      console.log("id seguimiento: ",registro.id_seguimiento);
        if ( respuesta.value ) {
            this.datosborrado = JSON.stringify({ "id_seguimiento": registro.id_seguimiento });
            this.registroService.delete( this.datosborrado ).subscribe();

            Swal.fire({
              title: registro.id_seguimiento,
              text: 'Registro eliminado',
              icon: 'success',  
              showConfirmButton : false
            }),this.recarga();  

        }
      });
    }









}