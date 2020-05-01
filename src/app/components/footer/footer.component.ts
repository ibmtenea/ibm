import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    any: number;

    constructor(
        private httpClient: HttpClient,
        private router:Router,
        private dataService: DataserviceService
        ){
        this.any = new Date().getFullYear();


    }
}


