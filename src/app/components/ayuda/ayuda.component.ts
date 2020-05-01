import { Component, Input, OnInit } from '@angular/core';
  
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { AyudaService } from '../../services/ayuda.service';
import { HttpClient } from '@angular/common/http';
import { Ayuda } from '../../models/ayuda';
import { Constantes } from '../../models/constantes.model';
  
@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html'
})
export class AyudaComponent  implements OnInit {
  title = 'Ayuda';

  
  contenidoayuda: Ayuda[] = [];
  private PHP_API_SERVER = Constantes.API_SERVER; //URL del servicio
  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(private httpClient: HttpClient,private modalService: NgbModal, private ayudaService: AyudaService) {

    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop',
      size: 'lg' 
    }

  }
  
  ngOnInit(){
    const id_persona = localStorage.getItem('id_persona');

    //cargo el listado 
    this.httpClient.get<any[]>(this.PHP_API_SERVER + '/ajax/read_ayuda.php?id_persona=' + id_persona)
    .subscribe(result => {
      this.contenidoayuda = result;
    });


  }

  open(ayuda) {
    this.modalService.open(ayuda, this.modalOptions).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }
}