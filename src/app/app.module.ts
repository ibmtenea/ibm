import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { routes } from './app.routes';
//import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from './services/data.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';

import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './pages/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

import { PersonasPage } from './pages/personas.pages';

import { DescargaPage } from './pages/descarga.pages';
import { ConfiguracionPage } from './pages/configuracion.pages';

import { DetalleComponent } from './pages/detalle.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AltaComponent } from './pages/alta.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxFullCalendarModule } from 'ngx-fullcalendar';
import { CheckComponent } from './components/periodicidad/check.component';
import { AccionComponent } from './components/periodicidad/accion.component';
import { AccionHistoricoComponent } from './components/periodicidad/accionhistorico.component';
import { HistoricoComponent } from './pages/historico.component';
import { DetalleHistoricoComponent } from './pages/detallehistorico.component';
import { DetallePersona } from './pages/detallepersona.component';
import { ModimagenComponent } from './components/imagen/modimagen.component';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {JpImagePreloadModule} from '@jaspero/ng-image-preload';
import { PerfilPersona } from './pages/perfil.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ElegirTurno } from './pages/turnos/elegir.component';
import { FlotanteComponent } from './components/flotante/flotante.component';



registerLocaleData(localeEs, 'es');


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
CheckComponent,
    HomeComponent,
    DetalleComponent,
    LoginComponent,
    FlotanteComponent,
    DetalleHistoricoComponent,
  AccionComponent,
  ModimagenComponent,
  AccionHistoricoComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    BuscadorComponent,
    PersonasPage,
HistoricoComponent,
    DescargaPage,
    ConfiguracionPage,
    ElegirTurno,
    AltaComponent,
    DetallePersona,
    PerfilPersona,
AyudaComponent
    

 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    JpImagePreloadModule.forRoot(),
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    NgxFullCalendarModule,
    MatPaginatorModule,
    [NgxMaterialTimepickerModule.setLocale('es-419')],
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    ReactiveFormsModule,
    //RouterModule.forRoot( routes ),
    RouterModule.forRoot(routes, { useHash: true }),
    ToastrModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CKEditorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [],
  exports: [
    RouterModule,
  ],
  providers: [

    DataService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
