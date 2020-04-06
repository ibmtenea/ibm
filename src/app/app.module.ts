import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
//import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {DataService} from './services/data.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

import { ToastrModule } from 'ngx-toastr'; 

import { HomeComponent } from './pages/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

import { PersonasPage } from './pages/personas.pages';
import { HistoricoPage } from './pages/historico.pages';
import { DescargaPage } from './pages/descarga.pages';
import { ConfiguracionPage } from './pages/configuracion.pages';
import { PerfilPage } from './pages/perfil.pages';
 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

// import { HammerModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IgxTimePickerModule } from 'igniteui-angular';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,

    
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    BuscadorComponent,
    PersonasPage, 
    HistoricoPage, 
    DescargaPage, 
    ConfiguracionPage,
    PerfilPage 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    //RouterModule.forRoot( routes ),
    RouterModule.forRoot( routes, { useHash: true } ),
    ToastrModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
    
  ],
  entryComponents: [
 
  ],
  exports: [ 
    RouterModule 
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
