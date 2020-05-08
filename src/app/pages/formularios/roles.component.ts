import { Component, OnInit } from '@angular/core';
import { Roles } from '../../models/roles';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../models/constantes.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { AdminServicioService } from '../../services/admin-servicio.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formroles',
  templateUrl: './roles.component.html',
  styles: [
  ],
})

export class RolesFormComponent implements OnInit {

  roles: Roles[] = [];
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  closeResult = '';

  datosformulario = {
    id_persona_log: localStorage.getItem('id_persona'),
    rol_level: null,
    rol_name: null,
    roldescripcion: null
  }
  datosborrado: string;
  constructor(private httpClient: HttpClient,private modalService: NgbModal,private adminService: AdminServicioService) {
     
    roldescripcion: new FormControl('', Validators.maxLength(10)) 

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
  openroles(content) {
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



  guardarNuevoRol() {
    if (this.datosformulario.rol_name == null || this.datosformulario.rol_level == null || this.datosformulario.roldescripcion == null) {
      Swal.fire({
        text: 'Debe seleccionar un rol, describirlo brevemente y nombrarlo!',
        icon: 'error',
        showConfirmButton: true
      });

    } else {
      let peticion: Observable<any>;
      peticion = this.adminService.guardarRol(this.datosformulario);
      peticion.subscribe(respuesta => {
        Swal.fire({
          title: this.datosformulario.rol_name,
          text: 'Nuevo rol creado',
          icon: 'success',
          showConfirmButton: false
        }), this.recarga();
      });
    }
   }


 
eliminarrol(registro: Roles, i: string) {
  Swal.fire({
    title: `WARNING!! ¿Desea elimina este rol?`,
    text: 'Confirme si desea borrar el rol. Tenga en cuenta que todas las tareas o registros que haya creado bajo este rol quedarán sin rol asignado',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true
  }).then(respuesta => {
    if (respuesta.value) {
      this.datosborrado = JSON.stringify({ "id_rol": registro.id_rol });
      this.adminService.deleteRol(this.datosborrado).subscribe();
      Swal.fire({
        title: registro.id_rol,
        text: 'Registro eliminado',
        icon: 'success',
        showConfirmButton: false
      }), this.recarga();
    }
  });
}



}
