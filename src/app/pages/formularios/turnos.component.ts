import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../models/constantes.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { AdminServicioService } from '../../services/admin-servicio.service';
import { FormControl, Validators } from '@angular/forms';
import { Turnos } from '../../models/turnos';
import { Roles } from '../../models/roles';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-formturnos',
  templateUrl: './turnos.component.html',
  styles: [
  ],
})

export class TurnosFormComponent implements OnInit {
  model: NgbDateStruct;
  turnos: Turnos[] = [];
  roles: Roles[] = [];
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  closeResult = '';

  datosformularioturno = {
    id_persona_log: localStorage.getItem('id_persona'),
    horainicio: null,
    horafin: null,
    turno:  null,
    tipo_turno:  null,
    turno_horario:  null,
    id_rol: null,
    rol_name: null
  }
  datosborradoturno: string;
  constructor(private httpClient: HttpClient,private modalService: NgbModal,private adminService: AdminServicioService) {

      httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/turnos_read.php').subscribe(result => {
        this.turnos = result;
      }, error => console.error(error));

      httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
        this.roles = result;
      }, error => console.error(error));

   }

  ngOnInit(){
  }

  recarga() {
    location.reload();
  }

  //abrir modal
  openturnos(content) {
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


  guardarNuevoTurno() {

    if (
        this.datosformularioturno.tipo_turno == null || 
        this.datosformularioturno.turno == null || 
        this.datosformularioturno.horafin == null || 
        this.datosformularioturno.horainicio == null || 
        this.datosformularioturno.id_rol == null 
      ) {
      Swal.fire({
        text: 'Debe completar los campos!',
        icon: 'error',
        showConfirmButton: true
      });

    } else {
            //si el campo que recibo es hora...
            //...valido su formato
              var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
              var horaResulinicio = patronHora.test(this.datosformularioturno.horainicio);
              var horaResultfin = patronHora.test(this.datosformularioturno.horafin);

              var hoy = formatDate(new Date(), 'yyyy-MM-dd ', 'es');
              var int = hoy + " " + this.datosformularioturno.horainicio;
              var inicio = Date.parse(int);
              var fnt = hoy + " " + this.datosformularioturno.horafin;
              var fin = Date.parse(fnt);

              if(horaResulinicio==false){

                Swal.fire({
                  title: 'Revise los datos',
                  text: 'El campo "hora inicio" debe de cumplir con los requerimientos!!',
                  icon: 'error',
                }); 
                this.ngOnInit();  

              } else if(horaResultfin==false){
                  Swal.fire({
                    title: 'Revise los datos',
                    text: 'El campo "hora fin" debe de cumplir con los requerimientos!!',
                    icon: 'error',
                  }); 
                  this.ngOnInit();  
              }
              else if(inicio > fin){
                Swal.fire({
                  title: 'Revise los datos',
                  text: 'La hora de inicio n opuede ser posterior a la hora final',
                  icon: 'error',
                }); 
                this.ngOnInit();  
            }

                else {
                  let peticion: Observable<any>;
                  peticion = this.adminService.guardarTurno(this.datosformularioturno);
                  peticion.subscribe(respuesta => {
                    Swal.fire({
                      title: this.datosformularioturno.turno,
                      text: 'Nuevo turno creado',
                      icon: 'success',
                      showConfirmButton: false
                    }), this.recarga();
                  });
              }
             
     }
    }

 
eliminarturno(registro: Turnos, i: string) {
  Swal.fire({
    title: `WARNING!! ¿Desea elimina este rol?`,
    text: 'Confirme si desea borrar el turno. Tenga en cuenta que todas las tareas o registros que haya creado bajo este turno quedarán sin turno asignado',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true
  }).then(respuesta => {
    if (respuesta.value) {
      this.datosborradoturno = JSON.stringify({ "id_turno": registro.id_turno });
      this.adminService.deleteTurno(this.datosborradoturno).subscribe();
      Swal.fire({
        title: registro.id_turno,
        text: 'Registro eliminado',
        icon: 'success',
        showConfirmButton: false
      }), this.recarga();
    }
  });
}



}
