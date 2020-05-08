
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Constantes } from '../models/constantes.model';
import { AdminServicioService } from '../services/admin-servicio.service';
import { Personas } from '../models/personas';
import { Incidencia } from '../models/incidencia';



@Component({
  selector: 'app-abririncidencia',
  templateUrl: './abririncidencia.component.html',
  styles: [
  ],
})

export class AbririncidenciaComponent implements OnInit {

  personas: Personas[] = [];
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio

  personasdatos: Personas = new Personas();
  incidenciadatos: Incidencia = new Incidencia();

  public imagePath;
  imgURL: any;
  public message: string;
  private imageSrc: string = '';
  datosFoto: string;
  incidenciaForm = new FormGroup({
      id_persona_log: new FormControl(),
      nombres: new FormControl(),
      enunciado: new FormControl(),
      textoincidencia: new FormControl(),
      imagenincidencia: new FormControl(),
      tokenIncidencia: new FormControl()
  });
  base64textString: string;

  constructor(private httpClient: HttpClient,private formBuilder: FormBuilder,private adminService: AdminServicioService) {


    const id_persona = localStorage.getItem('id_persona');
    this.adminService.getPersonas(id_persona)
      .subscribe((respuesta: Personas) => {
        this.personasdatos = respuesta;

        this.incidenciaForm = formBuilder.group({
          id_persona_log: id_persona,
          nombres: this.personasdatos.nombres,
          imagenincidencia: [''],
          tokenIncidencia: [''],
          enunciado: 
              ['',
                  [
                    Validators.minLength(10),
                    Validators.maxLength(140),
                    Validators.required
                  ]
              ],
          textoincidencia: 
              ['',
                  [
                    Validators.minLength(10),
                    Validators.maxLength(2440),
                    Validators.required
                  ]
              ]
        });
      
      });






   }

  ngOnInit(){





  }

  recarga() {
    location.reload();
  }




  preview(e) {
    var files = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (files.length === 0)
      return;
 
      var pattern = /image-*/;
      if (!files.type.match(pattern)) {
        alert('invalid format');
        return;
      }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      if (this.imgURL.length * 2  > 2**21) {  
          Swal.fire({
            title: 'ERROR en la imagen',
            text: 'La imagen es mayor de 2Mb',
            icon: 'success',
            showConfirmButton: false
          })
       }
    }
  }

 makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

  
  guardaryenviarIncidencia(form: NgForm) { 

      if (this.incidenciaForm.valid) {
        this.incidenciaForm.value.imagenincidencia = this.imgURL;
        this.incidenciaForm.value.tokenIncidencia = this.makeid(15);
        let peticion: Observable<any>;
        peticion = this.adminService.guardarNuevancidencia(this.incidenciaForm.value);
        peticion.subscribe(respuesta => {
          Swal.fire({
            title: this.incidenciadatos.enunciado,
            text: `La incidencia ha sido abiertacon el token ${this.incidenciaForm.value.tokenIncidencia}`,
            icon: 'success',
            showConfirmButton: false
          })
           , this.recarga()
         ;
        });
    

      } 
    
   }







}
