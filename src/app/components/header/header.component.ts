import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../services/dataservice.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    
  title = 'ng-bootstrap-modal-demo';


    constructor(
        public translate: TranslateService,
        private dataService: DataserviceService,
        private router:Router,
        private activatedRoute: ActivatedRoute
        ){
        this.translate.addLangs(['es','ca','en']);
        this.translate.setDefaultLang('es');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/es|ca|en/) ? browserLang : 'es');
        }


        Logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('id_rol');
            localStorage.removeItem('id_persona');
            const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/login';
                        this.router.navigate([redirect]);
          }

}


