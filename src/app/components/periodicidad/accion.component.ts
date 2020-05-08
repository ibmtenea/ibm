import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Constantes } from '../../models/constantes.model';
import { HttpClient } from '@angular/common/http';
import { DiasMes } from '../../models/diasdelmes';
import { ModeloAccionPuntual } from '../../models/accionpuntual';
import { PeriodicidadService } from '../../services/periodicidad.service';
import { ActivatedRoute } from '@angular/router';
import { ModeloPeriodicidad } from '../../models/periodicidad';
import { TramosSemana } from '../../models/tramossemana';
import { TramosMes } from '../../models/tramosmes';
import { TramosDias } from '../../models/tramosdias';
import Swal from 'sweetalert2';
import { PeriodicidadMadre } from '../../models/periodicidadmadre';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.component.html'
})

export class AccionComponent implements OnInit {


  registro: ModeloAccionPuntual = new ModeloAccionPuntual();
  registroRetorno: ModeloPeriodicidad = new ModeloPeriodicidad();
  periodicidades: ModeloPeriodicidad[] = [];

  datoregistro = {
    id_seguimiento: null,
    id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
    id_persona: null
  }
  madre: PeriodicidadMadre;

  mad:PeriodicidadMadre = new PeriodicidadMadre();

  mesActual: number = Date.now();
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  diasMes: DiasMes[] = [];
  tramosSemana: TramosSemana[] = [];
  tramosMes: TramosMes[] = [];
  diasSemana: TramosDias[] = [];

  datosRecibidos: string;
  dias: any;
  accionForm: FormGroup;

  selectedHobbiesNames: [string];

  mesVigente = new Date().getMonth() + 1;
  datosborrado: string;
  repeticiones: PeriodicidadMadre;
  fechafin: any;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private perioService: PeriodicidadService) {

    //cargo los dias del mes en curso
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.diasMes = result;
    }, error => console.error(error));

    //cargo los tramos semana
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.tramosSemana = result;
    }, error => console.error(error));

    //cargo los tramos mes
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.tramosMes = result;
    }, error => console.error(error));

    //cargo los tramos dias de la semana
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.diasSemana = result;
    }, error => console.error(error));

    //cargo el listado de personas para esta ID tarea
    httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
      this.periodicidades = result;
    }, error => console.error(error));






    //modificar valores por defecto en la pagina de insercion TODO
    this.accionForm = this.fb.group({
      checkArrayt: this.fb.array([]),
      fechafin: new FormControl(''),
    //   repeticiones: new FormControl(this.madre),
      repeticiones: ['', Validators.required],
      id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
      id_categoria: '3', //id de accion puntual
      id_persona: localStorage.getItem('id_persona')
    });


  }







  ngOnInit() {

 this.cargaMadre();

  }


  cargaMadre(){


    const id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');

    this.perioService.getDatosMadre(id_tarea).subscribe( (respuesta: PeriodicidadMadre) => {
    this.madre = respuesta;
    this.mad = respuesta;

    });

  }




  //eliminar registro
  borrarRegistro(identificacion) {
    this.datosborrado = JSON.stringify({ "tarea": this.datoregistro.id_tarea, "id_value": identificacion });
    this.perioService.delete(this.datosborrado).subscribe();

  }

  onCheckboxChange(e) {
    const checkArrayt: FormArray = this.accionForm.get('checkArrayt') as FormArray;
    if (e.target.checked) {
      checkArrayt.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArrayt.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArrayt.removeAt(i);
          return;
        }
        i++;
      });
      //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)
      this.borrarRegistro(e.target.value);
    }
  }

  //reload pagina al usar sweet alerts etc
  recarga() {
    location.reload();
  }

  submitForm() {
    const valormes = this.mesVigente;
    // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
    // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;
    const id_tarea: FormControl = this.accionForm.get('id_tarea') as FormControl;

    this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
    Swal.fire({
      text: 'Periodicidad actualizada',
      icon: 'success',
      showConfirmButton: true
    })
    //, this.recarga()
    ;
  }


}