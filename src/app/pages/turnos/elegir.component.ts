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
import { FormGroup, FormControl, Validators, FormBuilder, NgForm , FormsModule} from '@angular/forms';
import { SharedService } from '../../services/serviciocompartido.service';
import Swal from 'sweetalert2';
import { ApiPersonas } from '../../services/apipersonas.service';


  
@Component({
  selector: 'app-elegirturno',
  templateUrl: './elegir.component.html'
})



export class ElegirTurno  implements OnInit {

  userPersona: Personas = new Personas();
  userTurnos: Turnos = new Turnos();
  listaturnos: Turnos[] = [];
  selectedOption;

  reactiveFormTurnos = new FormGroup({
    id_turno: new FormControl(''),
    id_persona: new FormControl(localStorage.getItem('id_persona')),

  });

  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  datosturnos = {
    id_persona: localStorage.getItem('id_persona'),
    id_turno: localStorage.getItem('valorTurno')
  }
  id_rol: string;


  registroroleperson:Personas = new Personas();
  turnoactivo = localStorage.getItem('valorTurno');
  isSubmitted = false;
  valor: boolean;
  id_persona: string;

  periodetalle: Turnos = new Turnos();
  //periodetalle: Turnos[] = [];
  turno: any;

  constructor(
    private formbuilder: FormBuilder,
    private httpClient: HttpClient, 
    private servicioCompartido: SharedService, 
    private activatedRoute: ActivatedRoute, 
    private turnosService: TurnosService,
    private router: Router,
    private registroRoleService: ApiPersonas
    ) {
    // this.reactiveFormTurnos.controls['id_turno'].valueChanges.subscribe((state: any) => {

    //   id_turno: ['', [Validators.required]];

    //   console.log(state);
    // });

  }
  

    // loadFuncionBoxTurnos(id_persona){
    //     if(localStorage.getItem('valorTurno')==null){
    //             //consultamos la bbdd
    //             this.httpClient.get<any[]>(this.PHP_API_SERVER + `/ajax/turnos_read_by__id_persona.php?id_persona=${ id_persona }` )
    //             .subscribe(  (result:any) => {
    //               this.periodetalle = result;
    //               this.selectedOption = this.periodetalle.id_turno;
    //             }, error => console.error(error));
    //       } else {
    //         this.selectedOption = localStorage.getItem('valorTurno');
    //       }
    // }

  ngOnInit(){


    const id_persona = localStorage.getItem('id_persona');
    this.registroRoleService.getPerson ( id_persona )
      .subscribe( (respuesta:Personas) => {
         this.registroroleperson = respuesta;
         this.registroroleperson.id_persona =   id_persona;

      });
    // si no recibimos ningún id_turno_persona asociado a este usuario
    // siendo este el último por fecha
    // recogemos selectedoption del dato almacenado en localstorage
    // porque supone que se acaba de elegir por primera vez y aún no se ha almacenado
    //this.loadFuncionBoxTurnos(id_persona);

    //obtener el rol de este id_persona
        this.turnosService.getUserId ( id_persona )
        .subscribe( (respuesta:Personas) => {
          this.userPersona = respuesta; 
          this.id_rol = this.userPersona.id_rol;

          
              //cargamos los turnos solamente para este id_rol e id_persona para elegirlos
              this.httpClient.get<any[]>(this.PHP_API_SERVER + `/ajax/turnos_read_by_rol.php?id_rol=${ this.id_rol }`)
              .subscribe(result => {
                  this.listaturnos = result;


                if(localStorage.getItem('valorTurno')==null){



                  
                  this.httpClient.get<any[]>(this.PHP_API_SERVER + `/ajax/turnos_read_by__id_persona.php?id_persona=${ id_persona }` )
                  .subscribe(  (result:any) => {
                    this.periodetalle = result;
                    this.selectedOption = this.periodetalle.id_turno;
                  }, error => console.error(error));
                } else {
                  this.selectedOption = localStorage.getItem('valorTurno');
                }

              }, error => console.error(error));
        });
  }




  get myForm() {
    return this.reactiveFormTurnos.get('id_turno');
  }

  recarga() {
    location.reload();
  }

  onSubmitSelect() { 
      this.isSubmitted = true;
      const valor = JSON.stringify(this.reactiveFormTurnos.value);
        localStorage.setItem('valorTurno', this.reactiveFormTurnos.value.id_turno);
        this.servicioCompartido.sendClickEvent (); 

        this.recarga();
  }


  onSubmit(form: NgForm) { 
    
      this.isSubmitted = true;
      const valor = JSON.stringify(this.reactiveFormTurnos.value);

      this.turnosService.guardarTurno( valor ).subscribe( respuesta => {
        localStorage.removeItem('valorTurno');
        Swal.fire({
          title: 'Turno Establecido',
          text: 'El turno ha sido establecido',
          icon: 'success',  
          showConfirmButton : true
        });
        
      });   
      
  }













}