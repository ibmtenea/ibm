
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

import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuarioGuardService } from './guards/usuario-guard.service';
import { IdentificacionComponent } from './pages/identificacion/identificacion.component';
import { ConfiguracionGeneralComponent } from './pages/formularios/configuracion-general.component';
import { AyudaFormComponent } from './pages/formularios/ayuda.component';
import { RolesFormComponent } from './pages/formularios/roles.component';
import { TurnosFormComponent } from './pages/formularios/turnos.component';
import { ListadosComponent } from './pages/formularios/listados.component';
import { AbririncidenciaComponent } from './pages/abririncidencia.component';
import { HomeGetComponent } from './pages/turnos/homeget.component';
import { IncidenciasComponent } from './pages/formularios/incidencias.component';
import { IncidenciadetalleComponent } from './pages/formularios/incidenciadetalle.component';



export const routes: Routes = [
  { path: 'ayuda' , component: AyudaComponent, canActivate: [ AuthguardGuard ] },
  { path: 'elegirturno' , component: ElegirTurno, canActivate: [ AuthguardGuard ] },
  { path: 'homeget' , component: HomeGetComponent, canActivate: [ AuthguardGuard ] },
  { path: 'home' , component: HomeComponent, canActivate: [ AuthguardGuard ] },
  { path: 'alta' , component: AltaComponent, canActivate: [ AuthguardGuard ] },
  { path: 'personas' , component: PersonasPage, canActivate: [ AuthguardGuard ] },
  { path: 'perfil/:id_persona' , component: PerfilPersona, canActivate: [ AuthguardGuard ] },
  { path: 'incidenciadetalle/:token_incidencia' , component: IncidenciadetalleComponent, canActivate: [ AuthguardGuard ] },
  { path: 'detallepersona/:id_persona' , component: DetallePersona, canActivate: [ AuthguardGuard ] },
  { path: 'historico' , component: HistoricoComponent, canActivate: [ AuthguardGuard ] },
  { path: 'detallehistorico/:id_log' , component: DetalleHistoricoComponent, canActivate: [ AuthguardGuard ] },
  { path: 'detalle/:id_tarea' , component: DetalleComponent, canActivate: [ AuthguardGuard ]},
  { path: 'formlistados' , component: ListadosComponent, canActivate: [ AuthguardGuard ]},
  { path: 'abririncidencia' , component: AbririncidenciaComponent, canActivate: [ AuthguardGuard ]},
  { path: 'incidencias' , component: IncidenciasComponent, canActivate: [ AuthguardGuard ]},

  // { path: 'formroles' , component: RolesFormComponent, canActivate: [ AuthguardGuard ]},
  // { path: 'formturnos' , component: TurnosFormComponent, canActivate: [ AuthguardGuard ]},
  { path: 'configuraciongeneral' , component: ConfiguracionGeneralComponent, canActivate: [ AuthguardGuard ]},

  { path: 'login'   , component: LoginComponent },
  { path: 'identificacion'   , component: IdentificacionComponent },
  { path: 'mensajes', component: MensajesComponent, canActivate: [ UsuarioGuardService ] },
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: '**', redirectTo: '/login' }
];


//export class AppRoutingModule { }

