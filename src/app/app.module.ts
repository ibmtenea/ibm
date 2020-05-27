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
import {environment} from '../environments/environment';
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
import { CapturasComponent } from './components/imagen/capturas.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {JpImagePreloadModule} from '@jaspero/ng-image-preload';
import { PerfilPersona } from './pages/perfil.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ElegirTurno } from './pages/turnos/elegir.component';
import { HomeGetComponent } from './pages/turnos/homeget.component';
import { FlotanteComponent } from './components/flotante/flotante.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ChatComponent } from './components/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { IdentificacionComponent } from './pages/identificacion/identificacion.component';
import { HistoricoMiniComponent } from './pages/historicomini.component';

import { ConfiguracionGeneralComponent } from './pages/formularios/configuracion-general.component';
import { AyudaFormComponent } from './pages/formularios/ayuda.component';
import { RolesFormComponent } from './pages/formularios/roles.component';
import { TurnosFormComponent } from './pages/formularios/turnos.component';
import { ListadosComponent } from './pages/formularios/listados.component';
import { AbririncidenciaComponent } from './pages/abririncidencia.component';
import { IncidenciasComponent } from './pages/formularios/incidencias.component';
import { IncidenciadetalleComponent } from './pages/formularios/incidenciadetalle.component';
import { NgxSpinnerModule } from "ngx-spinner";
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

registerLocaleData(localeEs, 'es');


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [

    ChatComponent,
    ListaUsuariosComponent,
    MensajesComponent,
    IdentificacionComponent,
    AppComponent,
    HomeGetComponent,
    HistoricoMiniComponent,
CheckComponent,
    HomeComponent,
    DetalleComponent,
    LoginComponent,
    FlotanteComponent,
    DetalleHistoricoComponent,
  AccionComponent,
  ModimagenComponent,
  CapturasComponent,
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
AyudaComponent,
AyudaFormComponent,
RolesFormComponent,
TurnosFormComponent,
ConfiguracionGeneralComponent,
ListadosComponent,
AbririncidenciaComponent,
IncidenciasComponent,
IncidenciadetalleComponent
    

 
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
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
    SocketIoModule.forRoot(config),
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
