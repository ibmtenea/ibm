import { Component, OnInit } from '@angular/core';
import { Roles } from '../../models/roles';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../models/constantes.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { AdminServicioService } from '../../services/admin-servicio.service';
import { FormControl, Validators } from '@angular/forms';
import { Ayuda } from '../../models/ayuda';

@Component({
  selector: 'app-formayuda',
  templateUrl: './ayuda.component.html',
  styles: [
  ],
})

export class AyudaFormComponent implements OnInit {

  ayudas: Ayuda[] = [];
  
  PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  closeResult = '';

  datosformularioayuda = {
    id_persona_log: localStorage.getItem('id_persona'),
    ayudatitulo: null,
    ayudatexto: null
  }

  datosformulariomodi: Ayuda = new Ayuda();

  datosborrado: string;
  datosborradoAyuda: string;
  constructor(private httpClient: HttpClient,private modalService: NgbModal,private adminService: AdminServicioService) {
     
    ayudatitulo: new FormControl('', Validators.maxLength(10)) 

      httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/read_ayuda.php').subscribe(result => {
        this.ayudas = result;
      }, error => console.error(error));

   }

  ngOnInit(){

  }

  recarga() {
    location.reload();
  }

  //abrir modal
  openayuda(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReasonA(reason)}`;
        });
  }
  private getDismissReasonA(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
}

  //abrir modal
  openayudaModi(contentmodi, id_ayuda: string, id_persona_log: string) {
      this.modalService.open(contentmodi, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReasonB(reason)}`;
      });
      this.edicionAyuda(id_ayuda);
  }

  private getDismissReasonB(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
  }



edicionAyuda(id_ayuda){

  this.adminService.getAyuda(id_ayuda)
    .subscribe((respuesta: Ayuda) => {
      this.datosformulariomodi = respuesta;
      this.datosformulariomodi.id_ayuda = id_ayuda;
      this.datosformulariomodi.id_persona_log = localStorage.getItem('id_persona');
    });

}


  
  guardarNuevaAyuda() {
    if (this.datosformularioayuda.ayudatitulo == null || this.datosformularioayuda.ayudatexto == null) {
      Swal.fire({
        text: 'Debe Escribir un titulo y un texto!',
        icon: 'error',
        showConfirmButton: true
      });

    } else {
      let peticion: Observable<any>;
      peticion = this.adminService.guardarNewAyuda(this.datosformularioayuda);
      peticion.subscribe(respuesta => {
        Swal.fire({
          title: this.datosformularioayuda.ayudatitulo,
          text: 'Nueva entrada de FAQs creada',
          icon: 'success',
          showConfirmButton: false
        }), this.recarga();
      });
    }
   }


   guardarModificarAyuda() {
    if (this.datosformulariomodi.ayudatitulo == null || this.datosformulariomodi.ayudatexto == null) {
      Swal.fire({
        text: 'Debe Escribir un titulo y un texto!',
        icon: 'error',
        showConfirmButton: true
      });
    } else {
      let peticion: Observable<any>;
      peticion = this.adminService.guardarAyudaModificado(this.datosformulariomodi);
      peticion.subscribe(respuesta => {
        Swal.fire({
          title: this.datosformulariomodi.ayudatitulo,
          text: 'Entrada modificada',
          icon: 'success',
          showConfirmButton: false
        }), this.recarga();
      });
    }
   }

   
eliminarAyuda(registro: Ayuda, i: string) {
  Swal.fire({
    title: `WARNING!! ¿Desea elimina esta FAQ?`,
    text: 'Confirme si desea borrar el registro',
    icon: 'question',
    showConfirmButton: true,
    showCancelButton: true
  }).then(respuesta => {
    if (respuesta.value) {
      const id_persona_log = localStorage.getItem('id_persona');
      this.datosborradoAyuda = JSON.stringify({ "id_ayuda": registro.id_ayuda, "id_persona_log": id_persona_log });
      this.adminService.deleteAyuda(this.datosborradoAyuda).subscribe();
      Swal.fire({
        title: registro.id_ayuda,
        text: 'Registro eliminado',
        icon: 'success',
        showConfirmButton: false
      }), this.recarga();
    }
  });
}



}
