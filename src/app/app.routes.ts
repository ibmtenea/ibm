// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home.component';

// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { PerfilPage } from './pages/perfil.pages';
// import { PersonasPage } from './pages/personas.pages';
// import { ConfiguracionPage } from './pages/configuracion.pages';
// import { DescargaPage } from './pages/descarga.pages';
// import { HistoricoPage } from './pages/historico.pages';
 
// import { RegistroComponent } from './pages/registro/registro.component';
// import { LoginComponent } from './pages/login/login.component';


// const APP_ROUTES: Routes = [

//  { path: 'home', component: HomeComponent},
//  { path: 'historico', component: HistoricoPage },
//  { path: 'descarga', component: DescargaPage },
//  { path: 'configuracion', component: ConfiguracionPage },
//  { path: 'personas', component: PersonasPage },
// // { path: 'resultadopersonas/:termino', component: ResultadoPersonasComponent },
// // { path: 'persona/:id', component: PersonaComponent },
// { path: 'login'   , component: LoginComponent },
// { path: 'registro', component: RegistroComponent },
// { path: 'perfil', component: PerfilPage },
// //{ path: '**', redirectTo: 'login' }
// { path: '**',  redirectTo: '/registro'}    
// ];

// @NgModule({
//     imports:[
//         RouterModule.forRoot ( APP_ROUTES, {useHash:false})
//     ],
//     exports: [ RouterModule ]
// })

// export class AppRoutingModule {}
// //CON HASH (??) export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES ,{useHash:true});
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);






import { Routes} from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { DetalleComponent } from './pages/detalle.component';
import { LoginComponent } from './pages/login/login.component';

import { PersonasPage } from './pages/personas.pages';
import { AltaComponent } from './pages/alta.component';
import { HistoricoComponent } from './pages/historico.component';
import { DetalleHistoricoComponent } from './pages/detallehistorico.component';
import { DetallePersona } from './pages/detallepersona.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { PerfilPersona } from './pages/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { ElegirTurno } from './pages/turnos/elegir.component';

export const routes: Routes = [
  { path: 'ayuda' , component: AyudaComponent, canActivate: [ AuthguardGuard ] },
  { path: 'elegirturno' , component: ElegirTurno, canActivate: [ AuthguardGuard ] },
  { path: 'home' , component: HomeComponent, canActivate: [ AuthguardGuard ] },
  { path: 'alta' , component: AltaComponent, canActivate: [ AuthguardGuard ] },
  { path: 'personas' , component: PersonasPage, canActivate: [ AuthguardGuard ] },
  { path: 'perfil/:id_persona' , component: PerfilPersona, canActivate: [ AuthguardGuard ] },
  { path: 'detallepersona/:id_persona' , component: DetallePersona, canActivate: [ AuthguardGuard ] },
  { path: 'historico' , component: HistoricoComponent, canActivate: [ AuthguardGuard ] },
  { path: 'detallehistorico/:id_log' , component: DetalleHistoricoComponent, canActivate: [ AuthguardGuard ] },
  { path: 'detalle/:id_tarea' , component: DetalleComponent, canActivate: [ AuthguardGuard ]},
  { path: 'login'   , component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: '**', redirectTo: '/login' }
];


//export class AppRoutingModule { }

