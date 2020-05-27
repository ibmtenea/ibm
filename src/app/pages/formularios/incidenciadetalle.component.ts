import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Incidencia } from '../../models/incidencia';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Constantes } from '../../models/constantes.model';
import { Observable } from 'rxjs';
import { IncidenciasService } from '../../services/incidencias.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-incidenciadetalle',
  templateUrl: './incidenciadetalle.component.html'
})

export class IncidenciadetalleComponent implements OnInit {

  closeResult = '';
  model: NgbDateStruct;
  registro:Incidencia = new Incidencia();
  isSubmitted = false;
  public Editor = ClassicEditor;
  dias: { name: string; value: string; checked: boolean; }[];
  
  public onReady( editor ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }



  resolverSubmit = new FormGroup({
    id_incidencias: new FormControl(''),
    token_incidencia: new FormControl(''),
  });



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
  constructor(private httpClient: HttpClient,private incidenciasService: IncidenciasService,
              private activatedRoute: ActivatedRoute,private router: Router,private fb: FormBuilder
              ){



              }

  ngOnInit(){
    const token_incidencia = this.activatedRoute.snapshot.paramMap.get('token_incidencia');
    this.incidenciasService.getDetalleIncidencia ( token_incidencia )
      .subscribe( (respuesta:Incidencia) => {
         this.registro = respuesta;
         this.registro.token_incidencia =   token_incidencia;
         this.resolverSubmit = this.fb.group({
          id_incidencias: [this.registro.id_incidencias,Validators.required],
          token_incidencia: [this.registro.token_incidencia,Validators.required]
        });

      });

  }




  recarga(){ 
    location.reload();
  }


  onSubmit() { 
    this.isSubmitted = true;
    const valor = JSON.stringify(this.resolverSubmit.value);
    
    this.incidenciasService.guardarIncidencia( valor ).subscribe( respuesta => {
      Swal.fire({
        title: 'Incidencia resuelta',
        text: 'la incidencia ha quedado como resuelta',
        icon: 'success',  
        showConfirmButton : true
      }), this.recarga();
      
    });   
}

get id_incidencias() { return this.resolverSubmit.get('id_incidencias'); }
get token_incidencia() { return this.resolverSubmit.get('token_incidencia'); }








}