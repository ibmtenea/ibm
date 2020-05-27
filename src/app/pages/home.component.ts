import { Component, ViewChild } from '@angular/core';
import { ApiPersonas } from '../services/apipersonas.service';
import { Personas } from '../models/personas';


@Component({
  selector: 'app-app',
  templateUrl: './home.component.html'

})

export class HomeComponent {

  registroroleperson: Personas = new Personas();

  constructor(private registroRoleService: ApiPersonas ) {

  }

  ngOnInit() {

    //verificar  id_usuario y id_rol
    const id_persona = localStorage.getItem('id_persona');
    this.registroRoleService.getPerson(id_persona)
      .subscribe((respuesta: Personas) => {
        this.registroroleperson = respuesta;
        this.registroroleperson.id_persona = id_persona;
      });


  }





}