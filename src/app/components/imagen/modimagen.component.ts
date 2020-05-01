import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Constantes } from '../../models/constantes.model';
import { HttpClient } from '@angular/common/http';
import { PeriodicidadService } from '../../services/periodicidad.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Personas } from '../../models/personas';
import { ApiPersonas } from '../../services/apipersonas.service';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { JpPreloadService } from '@jaspero/ng-image-preload';



@Component({
  selector: 'app-modimagen',
  templateUrl: './modimagen.component.html'
})

export class ModimagenComponent implements OnInit {

  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  personas: Personas[] = [];
  fotopersona:Personas = new Personas();
  accionForm: FormGroup;
  private imageSrc: string = '';
  datosFoto: string;
    constructor(
      private fb: FormBuilder, 
      private activatedRoute: ActivatedRoute, 
      private httpClient: HttpClient, 
      private perioService: ApiPersonas

      ) {
        

        //modificar valores por defecto en la pagina de insercion TODO
        this.accionForm = this.fb.group({

          fotopersona: ['', Validators.required],
          id_persona: this.activatedRoute.snapshot.paramMap.get('id_persona'),
          id_persona_log: localStorage.getItem('id_persona'),

        });

    }



  ngOnInit() {
      this.cargaMadre();
   
  }
  

  cargaMadre(){
    const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona')
    this.perioService.getFotografia(id_persona).subscribe( (respuesta: Personas) => {
    this.fotopersona = respuesta;
    //this.accionForm.controls['fechafin'].setValue(this.fotopersona[0]['imagen']);
    
    });
  }







  //reload pagina al usar sweet alerts etc
  recarga() {
    location.reload();
  }





  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona')
    
    const id_persona_log = localStorage.getItem('id_persona')

    this.datosFoto = JSON.stringify({ "id_persona_log": id_persona_log ,"id_persona": id_persona , "fotopersona": this.imageSrc});
    this.perioService.altaRegistroFoto(this.datosFoto).subscribe();
    
    Swal.fire({
      text: 'Foto actualizada',
      icon: 'success',
      showConfirmButton: false
    })
    , this.recarga()
    ;


  }



   submitForm() {

    // // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
    // // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;
    // // const id_tarea: FormControl = this.accionForm.get('id_persona') as FormControl;

    // this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
    // Swal.fire({
    //   text: 'Foto actualizada',
    //   icon: 'success',
    //   showConfirmButton: false
    // })
    // , this.recarga()
    // ;
   }














}