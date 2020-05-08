import { Component, Input, OnInit } from '@angular/core';
  
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { AyudaService } from '../../services/ayuda.service';
import { HttpClient } from '@angular/common/http';
import { Ayuda } from '../../models/ayuda';
import { Constantes } from '../../models/constantes.model';
import { Turnos } from '../../models/turnos';
import { TurnosService } from '../../services/turnos.service';
import { Personas } from '../../models/personas';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../../services/serviciocompartido.service';
import Swal from 'sweetalert2';
  
@Component({
  selector: 'app-turnosanteriores',
  templateUrl: './turnosanteriores.component.html'
})



export class ElegirTurno  implements OnInit {

  userPersona: Personas = new Personas();
  listaturnos: Turnos[] = [];
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  datosturnos = {
    id_persona: localStorage.getItem('id_persona'),
    id_turno: null,
    turno: null,
    tipo_turno:  null,
    turno_horario:  null,
    id_rol: null
  }
  id_rol: string;

  reactiveForm: FormGroup = new FormGroup({
    id_turno: new FormControl(false)
  })

  isSubmitted = false;
  valor: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private httpClient: HttpClient, 
    private servicioCompartido: SharedService, 
    private activatedRoute: ActivatedRoute, 
    private turnosService: TurnosService,
    private router: Router
    ) {
    this.reactiveForm.controls['id_turno'].valueChanges.subscribe((state: any) => {

      id_turno: ['', [Validators.required]];

      console.log(state);
    });

  }
  
  ngOnInit(){
        const id_persona = localStorage.getItem('id_persona');
        //obtener el rol de este id_persona
        this.turnosService.getUserId ( id_persona )
        .subscribe( (respuesta:Personas) => {
          this.userPersona = respuesta; 
          this.id_rol = this.userPersona.id_rol;
              //cargamos los turnos solamente para este id_rol para elegirlos
              this.httpClient.get<any[]>(this.PHP_API_SERVER + `/ajax/turnos_read_by_rol.php?id_rol=${ this.id_rol }`)
              .subscribe(result => {
                  this.listaturnos = result;
                  console.log(this.listaturnos);
              }, error => console.error(error));
        });
  }



  get myForm() {
    return this.reactiveForm.get('id_turno');
  }


  onSubmit() { 
      this.isSubmitted = true;
      const valor = JSON.stringify(this.reactiveForm.value);
      if(valor=='{"id_turno":false}') {
 
        Swal.fire({
          title: 'Error',
          text: 'Debe escoger una opción',
          icon: 'error',  
          showConfirmButton : true
        });  

        return false;
      } else {
        localStorage.setItem('valorTurno', this.reactiveForm.value.id_turno);
        this.servicioCompartido.sendClickEvent (); 
        this.router.navigate(['/home']);
      }
  }















}