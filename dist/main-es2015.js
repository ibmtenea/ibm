(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/flotante/flotante.component */ "./src/app/components/flotante/flotante.component.ts");










class AppComponent {
    constructor(dataService, wsService, chatService) {
        this.dataService = dataService;
        this.wsService = wsService;
        this.chatService = chatService;
        this.title = 'check';
        dataService.getLoggedInName.subscribe(nombres => this.changeName(nombres));
        if (this.dataService.isLoggedIn()) {
            console.log("loggedin");
            this.loginbtn = false;
            this.logoutbtn = true;
        }
        else {
            this.loginbtn = true;
            this.logoutbtn = false;
        }
    }
    changeName(nombres) {
        this.logoutbtn = nombres;
        this.loginbtn = !nombres;
    }
    logout() {
        this.dataService.deleteToken();
        window.location.href = window.location.href;
    }
    ngOnInit() {
        this.chatService.getMessagesPrivate().subscribe(msg => {
            console.log(msg);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-flotante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_5__["FlotanteComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(1), .mat-header-cell[_ngcontent-%COMP%]:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(2), .mat-header-cell[_ngcontent-%COMP%]:nth-child(2){\n  flex: 0 0 30%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(3), .mat-header-cell[_ngcontent-%COMP%]:nth-child(3){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(7), .mat-header-cell[_ngcontent-%COMP%]:nth-child(7){\n  flex: 0 0 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBLFlBQVk7QUFDWjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBUb29sYmFyICovXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIEZpbHRlciAqL1xuLmZvcm0ge1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXgtaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vKiBNYXQgdGFibGUgKi9cbi5uby1yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpe1xuICBmbGV4OiAwIDAgMzAlO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCg3KSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDcpe1xuICBmbGV4OiAwIDAgNyU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"] }, { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _pages_personas_pages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/personas.pages */ "./src/app/pages/personas.pages.ts");
/* harmony import */ var _pages_descarga_pages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/descarga.pages */ "./src/app/pages/descarga.pages.ts");
/* harmony import */ var _pages_configuracion_pages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/configuracion.pages */ "./src/app/pages/configuracion.pages.ts");
/* harmony import */ var _pages_detalle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/detalle.component */ "./src/app/pages/detalle.component.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _pages_alta_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/alta.component */ "./src/app/pages/alta.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-fullcalendar */ "./node_modules/ngx-fullcalendar/__ivy_ngcc__/fesm2015/ngx-fullcalendar.js");
/* harmony import */ var _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/periodicidad/check.component */ "./src/app/components/periodicidad/check.component.ts");
/* harmony import */ var _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/periodicidad/accion.component */ "./src/app/components/periodicidad/accion.component.ts");
/* harmony import */ var _components_periodicidad_accionhistorico_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/periodicidad/accionhistorico.component */ "./src/app/components/periodicidad/accionhistorico.component.ts");
/* harmony import */ var _pages_historico_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/historico.component */ "./src/app/pages/historico.component.ts");
/* harmony import */ var _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/detallehistorico.component */ "./src/app/pages/detallehistorico.component.ts");
/* harmony import */ var _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/detallepersona.component */ "./src/app/pages/detallepersona.component.ts");
/* harmony import */ var _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/imagen/modimagen.component */ "./src/app/components/imagen/modimagen.component.ts");
/* harmony import */ var _components_imagen_capturas_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/imagen/capturas.component */ "./src/app/components/imagen/capturas.component.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @jaspero/ng-image-preload */ "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");
/* harmony import */ var _pages_perfil_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/perfil.component */ "./src/app/pages/perfil.component.ts");
/* harmony import */ var _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/ayuda/ayuda.component */ "./src/app/components/ayuda/ayuda.component.ts");
/* harmony import */ var _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/turnos/elegir.component */ "./src/app/pages/turnos/elegir.component.ts");
/* harmony import */ var _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/turnos/homeget.component */ "./src/app/pages/turnos/homeget.component.ts");
/* harmony import */ var _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/flotante/flotante.component */ "./src/app/components/flotante/flotante.component.ts");
/* harmony import */ var _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/mensajes/mensajes.component */ "./src/app/pages/mensajes/mensajes.component.ts");
/* harmony import */ var _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/lista-usuarios/lista-usuarios.component */ "./src/app/components/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/identificacion/identificacion.component */ "./src/app/pages/identificacion/identificacion.component.ts");
/* harmony import */ var _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/historicomini.component */ "./src/app/pages/historicomini.component.ts");
/* harmony import */ var _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/formularios/configuracion-general.component */ "./src/app/pages/formularios/configuracion-general.component.ts");
/* harmony import */ var _pages_formularios_ayuda_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/formularios/ayuda.component */ "./src/app/pages/formularios/ayuda.component.ts");
/* harmony import */ var _pages_formularios_roles_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/formularios/roles.component */ "./src/app/pages/formularios/roles.component.ts");
/* harmony import */ var _pages_formularios_turnos_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/formularios/turnos.component */ "./src/app/pages/formularios/turnos.component.ts");
/* harmony import */ var _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/formularios/listados.component */ "./src/app/pages/formularios/listados.component.ts");
/* harmony import */ var _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/abririncidencia.component */ "./src/app/pages/abririncidencia.component.ts");
/* harmony import */ var _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/formularios/incidencias.component */ "./src/app/pages/formularios/incidencias.component.ts");
/* harmony import */ var _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/formularios/incidenciadetalle.component */ "./src/app/pages/formularios/incidenciadetalle.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");



//import { AppRoutingModule } from './app.routes';











































































const config = { url: _environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].wsUrl, options: {} };
Object(_angular_common__WEBPACK_IMPORTED_MODULE_48__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47___default.a, 'es');
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_69__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__["JpImagePreloadModule"].forRoot(),
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__["NgxFullCalendarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"].setLocale('es-419')],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__["NgxDatatableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
            //RouterModule.forRoot( routes ),
            _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"], { useHash: true }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__["SocketIoModule"].forRoot(config),
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                }
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_57__["ChatComponent"],
        _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_56__["ListaUsuariosComponent"],
        _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_55__["MensajesComponent"],
        _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_59__["IdentificacionComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_53__["HomeGetComponent"],
        _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_60__["HistoricoMiniComponent"],
        _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_39__["CheckComponent"],
        _pages_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _pages_detalle_component__WEBPACK_IMPORTED_MODULE_26__["DetalleComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_54__["FlotanteComponent"],
        _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_43__["DetalleHistoricoComponent"],
        _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_40__["AccionComponent"],
        _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_45__["ModimagenComponent"],
        _components_imagen_capturas_component__WEBPACK_IMPORTED_MODULE_46__["CapturasComponent"],
        _components_periodicidad_accionhistorico_component__WEBPACK_IMPORTED_MODULE_41__["AccionHistoricoComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"],
        _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_22__["BuscadorComponent"],
        _pages_personas_pages__WEBPACK_IMPORTED_MODULE_23__["PersonasPage"],
        _pages_historico_component__WEBPACK_IMPORTED_MODULE_42__["HistoricoComponent"],
        _pages_descarga_pages__WEBPACK_IMPORTED_MODULE_24__["DescargaPage"],
        _pages_configuracion_pages__WEBPACK_IMPORTED_MODULE_25__["ConfiguracionPage"],
        _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_52__["ElegirTurno"],
        _pages_alta_component__WEBPACK_IMPORTED_MODULE_36__["AltaComponent"],
        _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_44__["DetallePersona"],
        _pages_perfil_component__WEBPACK_IMPORTED_MODULE_50__["PerfilPersona"],
        _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_51__["AyudaComponent"],
        _pages_formularios_ayuda_component__WEBPACK_IMPORTED_MODULE_62__["AyudaFormComponent"],
        _pages_formularios_roles_component__WEBPACK_IMPORTED_MODULE_63__["RolesFormComponent"],
        _pages_formularios_turnos_component__WEBPACK_IMPORTED_MODULE_64__["TurnosFormComponent"],
        _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_61__["ConfiguracionGeneralComponent"],
        _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_65__["ListadosComponent"],
        _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_66__["AbririncidenciaComponent"],
        _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_67__["IncidenciasComponent"],
        _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_68__["IncidenciadetalleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_69__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__["JpImagePreloadModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__["NgxFullCalendarModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__["NgxDatatableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__["SocketIoModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_57__["ChatComponent"],
                    _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_56__["ListaUsuariosComponent"],
                    _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_55__["MensajesComponent"],
                    _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_59__["IdentificacionComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_53__["HomeGetComponent"],
                    _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_60__["HistoricoMiniComponent"],
                    _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_39__["CheckComponent"],
                    _pages_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _pages_detalle_component__WEBPACK_IMPORTED_MODULE_26__["DetalleComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_54__["FlotanteComponent"],
                    _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_43__["DetalleHistoricoComponent"],
                    _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_40__["AccionComponent"],
                    _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_45__["ModimagenComponent"],
                    _components_imagen_capturas_component__WEBPACK_IMPORTED_MODULE_46__["CapturasComponent"],
                    _components_periodicidad_accionhistorico_component__WEBPACK_IMPORTED_MODULE_41__["AccionHistoricoComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"],
                    _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_22__["BuscadorComponent"],
                    _pages_personas_pages__WEBPACK_IMPORTED_MODULE_23__["PersonasPage"],
                    _pages_historico_component__WEBPACK_IMPORTED_MODULE_42__["HistoricoComponent"],
                    _pages_descarga_pages__WEBPACK_IMPORTED_MODULE_24__["DescargaPage"],
                    _pages_configuracion_pages__WEBPACK_IMPORTED_MODULE_25__["ConfiguracionPage"],
                    _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_52__["ElegirTurno"],
                    _pages_alta_component__WEBPACK_IMPORTED_MODULE_36__["AltaComponent"],
                    _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_44__["DetallePersona"],
                    _pages_perfil_component__WEBPACK_IMPORTED_MODULE_50__["PerfilPersona"],
                    _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_51__["AyudaComponent"],
                    _pages_formularios_ayuda_component__WEBPACK_IMPORTED_MODULE_62__["AyudaFormComponent"],
                    _pages_formularios_roles_component__WEBPACK_IMPORTED_MODULE_63__["RolesFormComponent"],
                    _pages_formularios_turnos_component__WEBPACK_IMPORTED_MODULE_64__["TurnosFormComponent"],
                    _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_61__["ConfiguracionGeneralComponent"],
                    _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_65__["ListadosComponent"],
                    _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_66__["AbririncidenciaComponent"],
                    _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_67__["IncidenciasComponent"],
                    _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_68__["IncidenciadetalleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_69__["NgxSpinnerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__["JpImagePreloadModule"].forRoot(),
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__["NgxFullCalendarModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                    [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"].setLocale('es-419')],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__["NgxDatatableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"],
                    //RouterModule.forRoot( routes ),
                    _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"], { useHash: true }),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__["SocketIoModule"].forRoot(config),
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                        }
                    })
                ],
                entryComponents: [],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"],
                ],
                providers: [
                    _services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _pages_detalle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detalle.component */ "./src/app/pages/detalle.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_personas_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/personas.pages */ "./src/app/pages/personas.pages.ts");
/* harmony import */ var _pages_alta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/alta.component */ "./src/app/pages/alta.component.ts");
/* harmony import */ var _pages_historico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/historico.component */ "./src/app/pages/historico.component.ts");
/* harmony import */ var _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/detallehistorico.component */ "./src/app/pages/detallehistorico.component.ts");
/* harmony import */ var _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/detallepersona.component */ "./src/app/pages/detallepersona.component.ts");
/* harmony import */ var _guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/authguard.guard */ "./src/app/guards/authguard.guard.ts");
/* harmony import */ var _pages_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/perfil.component */ "./src/app/pages/perfil.component.ts");
/* harmony import */ var _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ayuda/ayuda.component */ "./src/app/components/ayuda/ayuda.component.ts");
/* harmony import */ var _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/turnos/elegir.component */ "./src/app/pages/turnos/elegir.component.ts");
/* harmony import */ var _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/mensajes/mensajes.component */ "./src/app/pages/mensajes/mensajes.component.ts");
/* harmony import */ var _guards_usuario_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/usuario-guard.service */ "./src/app/guards/usuario-guard.service.ts");
/* harmony import */ var _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/identificacion/identificacion.component */ "./src/app/pages/identificacion/identificacion.component.ts");
/* harmony import */ var _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/formularios/configuracion-general.component */ "./src/app/pages/formularios/configuracion-general.component.ts");
/* harmony import */ var _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/formularios/listados.component */ "./src/app/pages/formularios/listados.component.ts");
/* harmony import */ var _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/abririncidencia.component */ "./src/app/pages/abririncidencia.component.ts");
/* harmony import */ var _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/turnos/homeget.component */ "./src/app/pages/turnos/homeget.component.ts");
/* harmony import */ var _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/formularios/incidencias.component */ "./src/app/pages/formularios/incidencias.component.ts");
/* harmony import */ var _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/formularios/incidenciadetalle.component */ "./src/app/pages/formularios/incidenciadetalle.component.ts");





















const routes = [
    { path: 'ayuda', component: _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_10__["AyudaComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'elegirturno', component: _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_11__["ElegirTurno"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'homeget', component: _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_18__["HomeGetComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'home', component: _pages_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'alta', component: _pages_alta_component__WEBPACK_IMPORTED_MODULE_4__["AltaComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'personas', component: _pages_personas_pages__WEBPACK_IMPORTED_MODULE_3__["PersonasPage"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'perfil/:id_persona', component: _pages_perfil_component__WEBPACK_IMPORTED_MODULE_9__["PerfilPersona"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'incidenciadetalle/:token_incidencia', component: _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_20__["IncidenciadetalleComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'detallepersona/:id_persona', component: _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_7__["DetallePersona"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'historico', component: _pages_historico_component__WEBPACK_IMPORTED_MODULE_5__["HistoricoComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'detallehistorico/:id_log', component: _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_6__["DetalleHistoricoComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'detalle/:id_tarea', component: _pages_detalle_component__WEBPACK_IMPORTED_MODULE_1__["DetalleComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'formlistados', component: _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_16__["ListadosComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'abririncidencia', component: _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_17__["AbririncidenciaComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'incidencias', component: _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_19__["IncidenciasComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    // { path: 'formroles' , component: RolesFormComponent, canActivate: [ AuthguardGuard ]},
    // { path: 'formturnos' , component: TurnosFormComponent, canActivate: [ AuthguardGuard ]},
    { path: 'configuraciongeneral', component: _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_15__["ConfiguracionGeneralComponent"], canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'identificacion', component: _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_14__["IdentificacionComponent"] },
    { path: 'mensajes', component: _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_12__["MensajesComponent"], canActivate: [_guards_usuario_guard_service__WEBPACK_IMPORTED_MODULE_13__["UsuarioGuardService"]] },
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: '**', redirectTo: '/login' }
];
//export class AppRoutingModule { }


/***/ }),

/***/ "./src/app/components/ayuda/ayuda.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/ayuda/ayuda.component.ts ***!
  \*****************************************************/
/*! exports provided: AyudaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaComponent", function() { return AyudaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_ayuda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ayuda.service */ "./src/app/services/ayuda.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function AyudaComponent_ng_template_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contenido_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#card-element-", contenido_r197.numauto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contenido_r197.ayudatitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "card-element-", contenido_r197.numauto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contenido_r197.ayudatexto, " ");
} }
function AyudaComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ayuda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaComponent_ng_template_3_Template_button_click_3_listener() { const modal_r195 = ctx.$implicit; return modal_r195.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AyudaComponent_ng_template_3_div_7_Template, 9, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaComponent_ng_template_3_Template_button_click_9_listener() { const modal_r195 = ctx.$implicit; return modal_r195.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r194.contenidoayuda);
} }
class AyudaComponent {
    constructor(httpClient, modalService, ayudaService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.ayudaService = ayudaService;
        this.title = 'Ayuda';
        this.contenidoayuda = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__["Constantes"].API_SERVER; //URL del servicio
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop',
            size: 'lg'
        };
    }
    ngOnInit() {
        const id_persona = localStorage.getItem('id_persona');
        //cargo el listado 
        this.httpClient.get(this.PHP_API_SERVER + '/ajax/read_ayuda.php?id_persona=' + id_persona)
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
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
AyudaComponent.ɵfac = function AyudaComponent_Factory(t) { return new (t || AyudaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ayuda_service__WEBPACK_IMPORTED_MODULE_2__["AyudaService"])); };
AyudaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AyudaComponent, selectors: [["app-ayuda"]], decls: 5, vars: 0, consts: [["title", "Ayuda", 1, "nav-link", "pointerplus", 3, "click"], [1, "fa", "fa-question-circle", "mr-1", "fa-1g"], ["class", "modal-lg"], ["ayuda", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["id", "card-966405"], [1, "card"], [1, "card-header"], ["data-toggle", "collapse", "data-parent", "#card-966405", 1, "card-link", "collapsed", 3, "href"], [1, "collapse", 3, "id"], [1, "card-body"]], template: function AyudaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaComponent_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200); const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.open(_r193); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ayuda\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AyudaComponent_ng_template_3_Template, 11, 1, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AyudaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ayuda',
                templateUrl: './ayuda.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _services_ayuda_service__WEBPACK_IMPORTED_MODULE_2__["AyudaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/buscador/buscador.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.ts ***!
  \***********************************************************/
/*! exports provided: BuscadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorComponent", function() { return BuscadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class BuscadorComponent {
}
BuscadorComponent.ɵfac = function BuscadorComponent_Factory(t) { return new (t || BuscadorComponent)(); };
BuscadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuscadorComponent, selectors: [["app-buscador"]], decls: 7, vars: 3, consts: [[1, "row", "mb-4"], [1, "col-md-12", "flex-column", "text-center", "ml-2", "mr-3"], [1, "form-inline"], ["type", "text", 1, "form-control", "mr-sm-2", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-info", "my-2", "my-sm-0", "btn-circle"], [1, "fa", "fa-search"]], template: function BuscadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "txtSearch"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscadorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buscador',
                templateUrl: './buscador.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/historicomini.component */ "./src/app/pages/historicomini.component.ts");






function ChatComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r533 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", msg_r533.de, ": ", msg_r533.cuerpo, " ");
} }
class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.mensajes = [];
    }
    ngOnInit() {
        this.elemento = document.getElementById('chat-mensajes');
        this.mensajesSubscription = this.chatService.getMessages()
            .subscribe(msg => {
            this.mensajes.push(msg);
            setTimeout(() => {
                this.elemento.scrollTop = this.elemento.scrollHeight;
            }, 50);
        });
    }
    ngOnDestroy() {
        this.mensajesSubscription.unsubscribe;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 3, vars: 1, consts: [["id", "chat-mensajes"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_li_1_Template, 2, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-historicomini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mensajes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_3__["HistoricoMiniComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html'
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/flotante/flotante.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/flotante/flotante.component.ts ***!
  \***********************************************************/
/*! exports provided: FlotanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlotanteComponent", function() { return FlotanteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _services_flotante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/flotante.service */ "./src/app/services/flotante.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/mensajes/mensajes.component */ "./src/app/pages/mensajes/mensajes.component.ts");












function FlotanteComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Consola de actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlotanteComponent_ng_container_0_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r527); const ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r526.isOn = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-mensajes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FlotanteComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlotanteComponent_p_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529); const ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r528.isOn = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ abrir consola");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FlotanteComponent {
    constructor(httpClient, router, flotanteService) {
        this.httpClient = httpClient;
        this.router = router;
        this.flotanteService = flotanteService;
        this.user = new _models_personas__WEBPACK_IMPORTED_MODULE_3__["Personas"]();
        this.isOn = true;
        if (localStorage.getItem('id_persona') != null) {
            const id_persona = localStorage.getItem('id_persona');
            this.flotanteService.getUserId(id_persona)
                .subscribe((respuesta) => {
                this.user = respuesta;
            });
        }
    }
    ngOnInit() {
    }
    cerrarConsola() {
    }
}
FlotanteComponent.ɵfac = function FlotanteComponent_Factory(t) { return new (t || FlotanteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_flotante_service__WEBPACK_IMPORTED_MODULE_4__["FlotanteService"])); };
FlotanteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlotanteComponent, selectors: [["app-flotante"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "row"], [1, "col-12", "footer", "text-center"], ["cdkDrag", "", 1, "example-box"], ["id", "card-9668745984", 1, "flotante", "accordion-icons"], [1, "card"], ["title", "Arrastra para recolocar la consola", "alt", "Arrastra para recolocar la consola", "id", "cabeceraDraggable", 1, "card-header"], [1, "col-11", "their"], [1, "col-1", "text-right"], [1, "col-6", "text-right", "botona"], ["data-toggle", "collapse", "data-parent", "#card-9668745984", "href", "#card-element-57874457742", 1, "card-link", "rightfloat"], [1, "col-6", "text-right", "botonb", "pt-1"], ["href", "#", 1, "card-link", "rightfloat", 3, "click"], ["id", "card-element-57874457742", 1, "collapse", "show"], [1, "card-body", "overscroll"], [3, "click"]], template: function FlotanteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlotanteComponent_ng_container_0_Template, 18, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlotanteComponent_p_3_Template, 3, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.level_rol === "8" && ctx.isOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.level_rol === "8" && !ctx.isOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_7__["MensajesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlotanteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flotante',
                templateUrl: './flotante.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_flotante_service__WEBPACK_IMPORTED_MODULE_4__["FlotanteService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function FooterComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(httpClient, router, dataService, wsService) {
        this.httpClient = httpClient;
        this.router = router;
        this.dataService = dataService;
        this.wsService = wsService;
        this.any = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-9", "footer", "bg-dark", "text-center", "text-white"], [1, "col-3", "footer", "bg-dark", "text-center", "text-white"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Status servidor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 2020 - ", ctx.any, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wsService.socketStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.wsService.socketStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] }, { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ayuda/ayuda.component */ "./src/app/components/ayuda/ayuda.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












function HeaderComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r181 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r181)("selected", lang_r181 === ctx_r178.translate.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r181);
} }
function HeaderComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nueva entrada de FAQs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_25_Template_button_click_3_listener() { const modal_r182 = ctx.$implicit; return modal_r182.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_25_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r187.datosformularioayuda.id_persona_log = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Escriba un t\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_25_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r189.datosformularioayuda.ayudatitulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Texto (m\u00E1x 650 car\u00E1cteres)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_25_Template_textarea_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r190.datosformularioayuda.ayudatexto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_25_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r191.guardarNuevaAyuda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Guardar registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.datosformularioayuda.id_persona_log);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.datosformularioayuda.ayudatitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.datosformularioayuda.ayudatexto);
} }
const _c0 = function () { return ["/", "abririncidencia"]; };
class HeaderComponent {
    constructor(translate, dataService, router, activatedRoute) {
        this.translate = translate;
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'ng-bootstrap-modal-demo';
        this.translate.addLangs(['es', 'ca', 'en']);
        this.translate.setDefaultLang('es');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/es|ca|en/) ? browserLang : 'es');
    }
    Logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id_rol');
        localStorage.removeItem('id_persona');
        localStorage.removeItem('valorTurno');
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/login';
        this.router.navigate([redirect]);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 27, vars: 6, consts: [[1, "row"], [1, "col-12", "bg-dark"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["id", "sidebarCollapse", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", "navbar-toggler-right"], [1, "navbar-toggler-icon"], ["id", "bs-example-navbar-collapse-1", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-md-auto"], [1, "nav-item"], ["alt", "Abrir incidencia", "title", "Abrir incidencia", 1, "nav-link", 3, "routerLink"], ["href", "#", 1, "nav-link", 3, "click"], [1, "fa", "fa-times-circle", "mr-1", "fa-1g"], [1, "form-control", "form-control-sm", "moresmall", "mt-2", "ml-4", 3, "change"], ["langSelect", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["content", ""], [3, "value", "selected"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "ayudatitulo"], ["name", "ayudatitulo", "type", "text", "maxlength", "100", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatitulo", "ngModel"], [1, "input-group"], ["rows", "10", "required", "", "maxlength", "650", "name", "ayudatexto", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatexto", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CheckList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Enviar incidencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192); const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.translate.use(_r177.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_option_24_Template, 2, 3, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_ng_template_25_Template, 22, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 3, "txtSalir"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_5__["AyudaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/imagen/capturas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/imagen/capturas.component.ts ***!
  \*********************************************************/
/*! exports provided: CapturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapturasComponent", function() { return CapturasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");













class CapturasComponent {
    constructor(fb, activatedRoute, httpClient, perioService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.personas = [];
        this.fotopersona = new _models_personas__WEBPACK_IMPORTED_MODULE_6__["Personas"]();
        this.imageSrc = '';
        //modificar valores por defecto en la pagina de insercion TODO
        this.accionForm = this.fb.group({
            fotopersona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id_persona: this.activatedRoute.snapshot.paramMap.get('id_persona'),
            id_persona_log: localStorage.getItem('id_persona'),
        });
    }
    ngOnInit() {
        this.cargaMadre();
    }
    cargaMadre() {
        const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
        this.perioService.getFotografia(id_persona).subscribe((respuesta) => {
            this.fotopersona = respuesta;
            //this.accionForm.controls['fechafin'].setValue(this.fotopersona[0]['imagen']);
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
        const id_persona_log = localStorage.getItem('id_persona');
        this.datosFoto = JSON.stringify({ "id_persona_log": id_persona_log, "id_persona": id_persona, "fotopersona": this.imageSrc });
        this.perioService.altaRegistroFoto(this.datosFoto).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: 'Foto actualizada',
            icon: 'success',
            showConfirmButton: false
        })
            , this.recarga();
    }
    submitForm() {
        // // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
        // // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;
        // // const id_tarea: FormControl = this.accionForm.get('id_persona') as FormControl;
        // this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
        // Swal.fire({
        //   text: 'Foto actualizada',
        //   icon: 'success',
        //   showConfirmButton: false
        // })
        // , this.recarga()
        // ;
    }
}
CapturasComponent.ɵfac = function CapturasComponent_Factory(t) { return new (t || CapturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"])); };
CapturasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CapturasComponent, selectors: [["app-capturas"]], decls: 7, vars: 1, consts: [[1, "row"], [1, "col-12", "text-center", "mt-4"], ["novalidate", "", 1, "formulario", 3, "formGroup"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "fileContainer"], [1, "fa", "fa-camera"], ["type", "file", "name", "fotopersona", "formControlName", "fotopersona", "accept", "image/*"]], template: function CapturasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapturasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-capturas',
                templateUrl: './capturas.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/imagen/modimagen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/imagen/modimagen.component.ts ***!
  \**********************************************************/
/*! exports provided: ModimagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModimagenComponent", function() { return ModimagenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jaspero/ng-image-preload */ "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");















function ModimagenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModimagenComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("jpPreload", ctx_r523.fotopersona.imagen);
} }
class ModimagenComponent {
    constructor(fb, activatedRoute, httpClient, perioService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.personas = [];
        this.fotopersona = new _models_personas__WEBPACK_IMPORTED_MODULE_6__["Personas"]();
        this.imageSrc = '';
        //modificar valores por defecto en la pagina de insercion TODO
        this.accionForm = this.fb.group({
            fotopersona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id_persona: localStorage.getItem('id_persona'),
            id_persona_log: localStorage.getItem('id_persona'),
        });
    }
    ngOnInit() {
        this.cargaMadre();
    }
    cargaMadre() {
        const id_persona = localStorage.getItem('id_persona');
        this.perioService.getFotografia(id_persona).subscribe((respuesta) => {
            this.fotopersona = respuesta;
            //this.accionForm.controls['fechafin'].setValue(this.fotopersona[0]['imagen']);
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        const id_persona = localStorage.getItem('id_persona');
        const id_persona_log = localStorage.getItem('id_persona');
        this.datosFoto = JSON.stringify({ "id_persona_log": id_persona_log, "id_persona": id_persona, "fotopersona": this.imageSrc });
        this.perioService.altaRegistroFoto(this.datosFoto).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: 'Foto actualizada',
            icon: 'success',
            showConfirmButton: false
        })
            , this.recarga();
    }
    submitForm() {
        // // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
        // // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;
        // // const id_tarea: FormControl = this.accionForm.get('id_persona') as FormControl;
        // this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
        // Swal.fire({
        //   text: 'Foto actualizada',
        //   icon: 'success',
        //   showConfirmButton: false
        // })
        // , this.recarga()
        // ;
    }
}
ModimagenComponent.ɵfac = function ModimagenComponent_Factory(t) { return new (t || ModimagenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"])); };
ModimagenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModimagenComponent, selectors: [["app-modimagen"]], decls: 9, vars: 3, consts: [["class", "block", 4, "ngIf"], [1, "row"], [1, "col-12", "text-center", "mt-4"], ["novalidate", "", 1, "formulario", 3, "formGroup"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "fileContainer"], [1, "fa", "fa-camera"], ["type", "file", "name", "fotopersona", "formControlName", "fotopersona", "accept", "image/*", 3, "change"], [1, "block"], ["src", "./assets/nophoto.jpg", 1, "nofoto", "animate", "fadeIn"], ["src", "./assets/loader.gif", 1, "perfildetalle", "animate", "fadeIn", 3, "jpPreload"]], template: function ModimagenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModimagenComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModimagenComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModimagenComponent_Template_input_change_8_listener($event) { return ctx.handleInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fotopersona.imagen == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fotopersona.imagen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__["PreloadDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModimagenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modimagen',
                templateUrl: './modimagen.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/lista-usuarios/lista-usuarios.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/lista-usuarios/lista-usuarios.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function() { return ListaUsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListaUsuariosComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r531 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usuario_r531.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r531.sala);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r531.id);
} }
class ListaUsuariosComponent {
    constructor(chatService) {
        this.chatService = chatService;
    }
    ngOnInit() {
        this.usuariosActivosObs = this.chatService.getUsuariosActivos();
        //emitir obtener usuarios
        this.chatService.emitirUsuariosActivos();
    }
}
ListaUsuariosComponent.ɵfac = function ListaUsuariosComponent_Factory(t) { return new (t || ListaUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ListaUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaUsuariosComponent, selectors: [["app-lista-usuarios"]], decls: 6, vars: 3, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "badge", "badge-primary"], [1, "badge", "badge-info"]], template: function ListaUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListaUsuariosComponent_li_4_Template, 6, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.usuariosActivosObs));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lista-usuarios',
                templateUrl: './lista-usuarios.component.html'
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_serviciocompartido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/serviciocompartido.service */ "./src/app/services/serviciocompartido.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jaspero/ng-image-preload */ "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function MenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("jpPreload", ctx_r456.user.imagen);
} }
const _c0 = function () { return ["/", "personas"]; };
const _c1 = function () { return ["/", "historico"]; };
function MenuComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "txtPersonas"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "txtConsultahistorica"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "txtDescargaInformacion"), " ");
} }
const _c2 = function () { return ["/", "formlistados"]; };
const _c3 = function () { return ["/", "incidencias"]; };
const _c4 = function () { return ["/", "configuracion"]; };
function MenuComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Listado de componentes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Incidencias ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "txtRolAdministrador"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "txtConfiguracion"), " ");
} }
const _c5 = function (a2) { return ["/", "perfil", a2]; };
const _c6 = function () { return ["/", "home"]; };
class MenuComponent {
    constructor(httpClient, servicioCompartido, dataService, router) {
        this.httpClient = httpClient;
        this.servicioCompartido = servicioCompartido;
        this.dataService = dataService;
        this.router = router;
        this.user = new _models_personas__WEBPACK_IMPORTED_MODULE_3__["Personas"]();
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__["Constantes"].API_SERVER; //URL del servicio
        this.show = false;
        this.clickEventsubscription = this.servicioCompartido.getClickEvent().subscribe(() => {
            this.incrementCount();
        });
    }
    ngOnInit() {
        const id_persona = localStorage.getItem('id_persona');
        this.dataService.getUserId(localStorage.getItem('id_persona'))
            .subscribe((respuesta) => {
            this.user = respuesta;
            this.user.id_persona = localStorage.getItem('id_persona');
        });
    }
    incrementCount() {
        this.show = !this.show;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_serviciocompartido_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 29, vars: 17, consts: [["id", "sidebar", 1, "vertical-nav", "bg-white"], [1, "py-4", "px-3", "mb-4", "bg-light"], [1, "media", "d-flex", "align-items-center"], [4, "ngIf"], [1, "media-body"], [1, "minnom", "m-0"], [1, "font-weight-light", "roledef", "mt-2", "mb-2"], [1, "text-light", 3, "routerLink"], [1, "fa", "fa-user", "mr-1", "fa-1g"], [1, "text-gray", "font-weight-bold", "text-uppercase", "px-3", "small", "mt-2", "pb-4", "mb-0"], [1, "nav", "flex-column", "bg-white", "mb-0"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "fa", "fa-home", "mr-3", "fa-fw"], ["src", "./assets/nophoto.jpg", "width", "75", 1, "mr-3", "rounded-circle", "img-thumbnail", "shadow-sm"], ["width", "75", "src", "./assets/loader.gif", 1, "mr-3", "rounded-circle", "img-thumbnail", "shadow-sm", 3, "jpPreload"], [1, "fa", "fa-users", "mr-3", "fa-fw"], [1, "fa", "fa-history", "mr-3", "fa-fw"], ["href", "http://ibmes.site:8081/b/ajax/exportar_registros_tareas_csv.php", 1, "nav-link"], [1, "fa", "fa-download", "mr-3", "fa-fw"], [1, "fa", "fa-cog", "mr-3", "fa-fw"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-buscador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tareas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MenuComponent_ng_container_26_Template, 16, 13, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MenuComponent_ng_container_28_Template, 18, 12, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.imagen == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.imagen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.rol_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c5, ctx.user.id_persona));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "txtProfile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, "txtNavegacion"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.level_rol === "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.level_rol === "8");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_8__["BuscadorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__["PreloadDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _services_serviciocompartido_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/periodicidad/accion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/periodicidad/accion.component.ts ***!
  \*************************************************************/
/*! exports provided: AccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionComponent", function() { return AccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/accionpuntual */ "./src/app/models/accionpuntual.ts");
/* harmony import */ var _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/periodicidad.service */ "./src/app/services/periodicidad.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/periodicidad */ "./src/app/models/periodicidad.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/periodicidadmadre */ "./src/app/models/periodicidadmadre.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

















function AccionComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_22_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r487); const ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r486.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dias_r484 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dias_r484.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dias.name", dias_r484.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", dias_r484.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dias_r484.value);
} }
function AccionComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_24_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r491); const ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r490.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tramos_r488 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tramos_r488.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", tramos_r488.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tramos_r488.value);
} }
function AccionComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_31_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r495); const ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r494.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trames_r492 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trames_r492.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", trames_r492.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trames_r492.value);
} }
function AccionComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_59_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r499); const ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r498.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diam_r496 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checkbox", diam_r496.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", diam_r496.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", diam_r496.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", diam_r496.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox", diam_r496.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](diam_r496.name);
} }
class AccionComponent {
    constructor(fb, activatedRoute, httpClient, perioService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.registro = new _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__["ModeloAccionPuntual"]();
        this.registroRetorno = new _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__["ModeloPeriodicidad"]();
        this.periodicidades = [];
        this.datoregistro = {
            id_seguimiento: null,
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
            id_persona: null
        };
        this.mad = new _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__["PeriodicidadMadre"]();
        this.mesActual = Date.now();
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.diasMes = [];
        this.tramosSemana = [];
        this.tramosMes = [];
        this.diasSemana = [];
        this.mesVigente = new Date().getMonth() + 1;
        //cargo los dias del mes en curso
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.diasMes = result;
        }, error => console.error(error));
        //cargo los tramos semana
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.tramosSemana = result;
        }, error => console.error(error));
        //cargo los tramos mes
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.tramosMes = result;
        }, error => console.error(error));
        //cargo los tramos dias de la semana
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.diasSemana = result;
        }, error => console.error(error));
        //cargo el listado de personas para esta ID tarea
        httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.periodicidades = result;
        }, error => console.error(error));
        //modificar valores por defecto en la pagina de insercion TODO
        this.accionForm = this.fb.group({
            checkArrayt: this.fb.array([]),
            fechafin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            //   repeticiones: new FormControl(this.madre),
            repeticiones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
            id_categoria: '3',
            id_persona: localStorage.getItem('id_persona')
        });
    }
    ngOnInit() {
        this.cargaMadre();
    }
    selectAll(e) {
        if (this.diasSemana.every(val => val.checked == true)) {
            this.diasSemana.forEach(val => { val.checked = null; });
        }
        else {
            this.diasSemana.forEach(val => { val.checked = true; });
        }
    }
    cargaMadre() {
        const id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
        this.perioService.getDatosMadre(id_tarea).subscribe((respuesta) => {
            this.madre = respuesta;
            this.mad = respuesta;
        });
    }
    //eliminar registro
    borrarRegistro(identificacion) {
        this.datosborrado = JSON.stringify({ "tarea": this.datoregistro.id_tarea, "id_value": identificacion });
        this.perioService.delete(this.datosborrado).subscribe();
    }
    onCheckboxChange(e) {
        const checkArrayt = this.accionForm.get('checkArrayt');
        if (e.target.checked) {
            checkArrayt.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
        }
        else {
            let i = 0;
            checkArrayt.controls.forEach((item) => {
                if (item.value == e.target.value) {
                    checkArrayt.removeAt(i);
                    return;
                }
                i++;
            });
            //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)
            this.borrarRegistro(e.target.value);
        }
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    submitForm() {
        const valormes = this.mesVigente;
        // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
        // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;
        const id_tarea = this.accionForm.get('id_tarea');
        this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Periodicidad actualizada',
            icon: 'success',
            showConfirmButton: true
        });
    }
}
AccionComponent.ɵfac = function AccionComponent_Factory(t) { return new (t || AccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"])); };
AccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccionComponent, selectors: [["app-accion"]], decls: 65, vars: 12, consts: [["novalidate", "", 1, "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card", "bg-default"], [1, "card-header"], [1, "card-body"], [1, "col-md-7"], [3, "formGroup"], ["type", "hidden", "name", "id_tarea", "formControlName", "id_tarea", 1, "form-control"], ["type", "hidden", "name", "id_categoria", "formControlName", "id_categoria", 1, "form-control"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "titolpetit"], [1, "bdott"], [1, "row", "mt-3"], [1, "col-6", "minitext"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "row", "mt-3", "minitext"], [1, "col-12"], [1, "row", 3, "formGroup"], [1, "col-6"], ["for", "dp"], [1, "input-group"], ["ngbDatepicker", "", "name", "fechafin", "formControlName", "fechafin", "readonly", "", 1, "form-control", 3, "placeholder"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [1, "col-6", 3, "formGroup"], ["for", "repeticiones"], ["type", "number", "name", "repeticiones", "formControlName", "repeticiones", 1, "form-control", 3, "value"], [1, "col-12", "m-0", "p-0"], [1, "row", "mb-3", "p-0", "text-center"], [1, "row", "m-0", "p-0", "checkbox"], ["class", "col-2  text-center p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-info", "mt-3"], [1, "col-8"], [1, "col-4"], ["type", "checkbox", 3, "name", "value", "checked", "change"], ["type", "checkbox", 3, "value", "checked", "change"], [1, "col-4", "text-right"], [1, "col-2", "text-center", "p-0", "m-0"], ["type", "checkbox", 3, "value", "name", "id", "checked", "change"], [3, "for"]], template: function AccionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccionComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Acci\u00F3n puntual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Posici\u00F3n en la semana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AccionComponent_div_22_Template, 6, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccionComponent_div_24_Template, 6, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Posici\u00F3n en el mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccionComponent_div_31_Template, 6, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fecha fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccionComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r500); const _r482 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return _r482.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "N\u00FAmero de repeticiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Selecci\u00F3n de d\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AccionComponent_div_59_Template, 4, 6, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Guardar periodicidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diasSemana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tramosSemana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tramosMes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.mad.fechafin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.mad.repeticiones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diasMes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accion',
                templateUrl: './accion.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/periodicidad/accionhistorico.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/periodicidad/accionhistorico.component.ts ***!
  \**********************************************************************/
/*! exports provided: AccionHistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionHistoricoComponent", function() { return AccionHistoricoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/accionpuntual */ "./src/app/models/accionpuntual.ts");
/* harmony import */ var _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/periodicidad.service */ "./src/app/services/periodicidad.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/periodicidad */ "./src/app/models/periodicidad.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/periodicidadmadre */ "./src/app/models/periodicidadmadre.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

















function AccionHistoricoComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_20_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r509); const ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r508.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dias_r506 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dias_r506.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dias.name", dias_r506.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", dias_r506.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dias_r506.value);
} }
function AccionHistoricoComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r513 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_22_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r513); const ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r512.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tramos_r510 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tramos_r510.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", tramos_r510.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tramos_r510.value);
} }
function AccionHistoricoComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_29_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r517); const ctx_r516 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r516.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trames_r514 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trames_r514.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", trames_r514.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trames_r514.value);
} }
function AccionHistoricoComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_56_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r521); const ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r520.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diam_r518 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checkbox", diam_r518.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", diam_r518.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", diam_r518.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", diam_r518.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox", diam_r518.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](diam_r518.name);
} }
class AccionHistoricoComponent {
    constructor(fb, activatedRoute, httpClient, perioService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.registro = new _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__["ModeloAccionPuntual"]();
        this.registroRetorno = new _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__["ModeloPeriodicidad"]();
        this.periodicidades = [];
        this.datoregistro = {
            id_seguimiento: null,
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
            id_persona: null
        };
        this.mesActual = Date.now();
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.diasMes = [];
        this.tramosSemana = [];
        this.tramosMes = [];
        this.diasSemana = [];
        this.mad = new _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__["PeriodicidadMadre"]();
        this.mesVigente = new Date().getMonth() + 1;
        //cargo los dias del mes en curso
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php').subscribe(result => {
            this.diasMes = result;
        }, error => console.error(error));
        //cargo los tramos semana
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.tramosSemana = result;
        }, error => console.error(error));
        //cargo los tramos mes
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.tramosMes = result;
        }, error => console.error(error));
        //cargo los tramos dias de la semana
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.diasSemana = result;
        }, error => console.error(error));
        //cargo el listado de personas para esta ID tarea
        httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.periodicidades = result;
        }, error => console.error(error));
        //modificar valores por defecto en la pagina de insercion TODO
        this.accionForm = this.fb.group({
            checkArrayt: this.fb.array([]),
            fechafin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            //   repeticiones: new FormControl(this.madre),
            repeticiones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
            id_categoria: '3' //id de accion puntual
        });
    }
    ngOnInit() {
        this.cargaMadre();
    }
    cargaMadre() {
        const id_tarea = this.activatedRoute.snapshot.paramMap.get('id');
        this.perioService.getDatosMadre(id_tarea).subscribe((respuesta) => {
            this.madre = respuesta;
            this.mad = respuesta[0];
            this.accionForm.controls['fechafin'].setValue(this.madre[0]['fechafin']);
            this.accionForm.controls['repeticiones'].setValue(this.madre[0]['repeticiones']);
            console.log(this.mad.fechafin);
        });
    }
    //   this.perioService.getDatosMadre (this.datoregistro.id_tarea)
    //     .subscribe( (
    //       respuesta:PeriodicidadMadre) => {
    //        this.madre = respuesta;
    //        console.log(this.madre);
    //     });
    // }
    //eliminar registro      
    borrarRegistro(identificacion) {
        this.datosborrado = JSON.stringify({ "tarea": this.datoregistro.id_tarea, "id_value": identificacion });
        this.perioService.delete(this.datosborrado).subscribe();
    }
    onCheckboxChange(e) {
        const checkArrayt = this.accionForm.get('checkArrayt');
        if (e.target.checked) {
            checkArrayt.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
        }
        else {
            let i = 0;
            checkArrayt.controls.forEach((item) => {
                if (item.value == e.target.value) {
                    checkArrayt.removeAt(i);
                    return;
                }
                i++;
            });
            //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)
            this.borrarRegistro(e.target.value);
        }
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    submitForm() {
        const valormes = this.mesVigente;
        // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
        // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;
        const id_tarea = this.accionForm.get('id_tarea');
        this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Periodicidad actualizada',
            icon: 'success',
            showConfirmButton: false
        });
    }
}
AccionHistoricoComponent.ɵfac = function AccionHistoricoComponent_Factory(t) { return new (t || AccionHistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"])); };
AccionHistoricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccionHistoricoComponent, selectors: [["app-accionhistorico"]], decls: 60, vars: 10, consts: [["novalidate", "", 1, "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card", "bg-default"], [1, "card-header"], [1, "card-body"], [1, "col-md-7"], [3, "formGroup"], ["type", "hidden", "name", "id_tarea", "formControlName", "id_tarea", 1, "form-control"], ["type", "hidden", "name", "id_categoria", "formControlName", "id_categoria", 1, "form-control"], [1, "titolpetit"], [1, "bdott"], [1, "row", "mt-3"], [1, "col-6", "minitext"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "row", "mt-3", "minitext"], [1, "col-12"], [1, "row", 3, "formGroup"], [1, "col-6"], ["for", "dp"], [1, "input-group"], ["ngbDatepicker", "", "name", "fechafin", "formControlName", "fechafin", "disabled", "", "readonly", "", 1, "form-control", 3, "placeholder"], ["d", "ngbDatepicker"], [1, "input-group-append"], [1, "col-6", 3, "formGroup"], ["for", "repeticiones"], ["type", "number", "name", "repeticiones", "formControlName", "repeticiones", "disabled", "", 1, "form-control"], [1, "col-12", "m-0", "p-0"], [1, "row", "mb-3", "p-0", "text-center"], [1, "row", "m-0", "p-0", "checkbox"], ["class", "col-2  text-center p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], [1, "col-8"], [1, "col-4"], ["type", "checkbox", "disabled", "", 3, "name", "value", "checked", "change"], ["type", "checkbox", "disabled", "", 3, "value", "checked", "change"], [1, "col-4", "text-right"], [1, "col-2", "text-center", "p-0", "m-0"], ["type", "checkbox", "disabled", "", 3, "value", "name", "id", "checked", "change"], [3, "for"]], template: function AccionHistoricoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccionHistoricoComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Acci\u00F3n puntual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Posici\u00F3n en la semana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccionHistoricoComponent_div_20_Template, 6, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AccionHistoricoComponent_div_22_Template, 6, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Posici\u00F3n en el mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccionHistoricoComponent_div_29_Template, 6, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Fecha fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "N\u00FAmero de repeticiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Selecci\u00F3n de d\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AccionHistoricoComponent_div_56_Template, 4, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diasSemana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tramosSemana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tramosMes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.mad.fechafin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diasMes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccionHistoricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accionhistorico',
                templateUrl: './accionhistorico.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/periodicidad/check.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/periodicidad/check.component.ts ***!
  \************************************************************/
/*! exports provided: CheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckComponent", function() { return CheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/accionpuntual */ "./src/app/models/accionpuntual.ts");
/* harmony import */ var _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/periodicidad.service */ "./src/app/services/periodicidad.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/periodicidad */ "./src/app/models/periodicidad.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/periodicidadmadre */ "./src/app/models/periodicidadmadre.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















function CheckComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_22_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r466); const ctx_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r465.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dias_r463 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dias_r463.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dias.name", dias_r463.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", dias_r463.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dias_r463.value);
} }
function CheckComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_24_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470); const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r469.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tramos_r467 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tramos_r467.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", tramos_r467.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tramos_r467.value);
} }
function CheckComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_31_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r474); const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r473.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trames_r471 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trames_r471.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", trames_r471.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trames_r471.value);
} }
function CheckComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_49_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478); const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r477.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diam_r475 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checkbox", diam_r475.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", diam_r475.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", diam_r475.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", diam_r475.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox", diam_r475.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](diam_r475.name);
} }
class CheckComponent {
    constructor(fb, activatedRoute, httpClient, perioService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.registro = new _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__["ModeloAccionPuntual"]();
        this.registroRetorno = new _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__["ModeloPeriodicidad"]();
        this.periodicidades = [];
        this.datoregistro = {
            id_seguimiento: null,
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
            id_persona: null
        };
        this.mad = new _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__["PeriodicidadMadre"]();
        this.mesActual = Date.now();
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.diasMes = [];
        this.tramosSemana = [];
        this.tramosMes = [];
        this.diasSemana = [];
        this.mesVigente = new Date().getMonth() + 1;
        //cargo los dias del mes en curso
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.diasMes = result;
        }, error => console.error(error));
        //cargo los tramos semana
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.tramosSemana = result;
        }, error => console.error(error));
        //cargo los tramos mes
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.tramosMes = result;
        }, error => console.error(error));
        //cargo los tramos dias de la semana
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.diasSemana = result;
        }, error => console.error(error));
        //cargo el listado de personas para esta ID tarea
        httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.periodicidades = result;
        }, error => console.error(error));
        //modificar valores por defecto en la pagina de insercion TODO
        this.accionFormCheck = this.fb.group({
            checkArrayt: this.fb.array([]),
            fechafin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            //   repeticiones: new FormControl(this.madre),
            repeticiones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
            id_categoria: '1',
            id_persona: localStorage.getItem('id_persona')
        });
    }
    ngOnInit() {
        this.cargaMadre();
    }
    cargaMadre() {
        const id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
        this.perioService.getDatosMadre(id_tarea).subscribe((respuesta) => {
            this.madre = respuesta;
            this.mad = respuesta;
        });
    }
    //eliminar registro
    borrarRegistro(identificacion) {
        this.datosborrado = JSON.stringify({ "tarea": this.datoregistro.id_tarea, "id_value": identificacion });
        this.perioService.delete(this.datosborrado).subscribe();
    }
    onCheckboxChange(e) {
        const checkArrayt = this.accionFormCheck.get('checkArrayt');
        if (e.target.checked) {
            checkArrayt.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
        }
        else {
            let i = 0;
            checkArrayt.controls.forEach((item) => {
                if (item.value == e.target.value) {
                    checkArrayt.removeAt(i);
                    return;
                }
                i++;
            });
            //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)
            this.borrarRegistro(e.target.value);
        }
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    submitForm() {
        const valormes = this.mesVigente;
        // const fechafin: FormControl = this.accionFormCheck.get('fechafin') as FormControl;
        // const repeticiones: FormControl = this.accionFormCheck.get('repeticiones') as FormControl;
        const id_tarea = this.accionFormCheck.get('id_tarea');
        this.perioService.altaRegistrochecks(this.accionFormCheck.value).subscribe();
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Periodicidad actualizada',
            icon: 'success',
            showConfirmButton: false
        });
    }
}
CheckComponent.ɵfac = function CheckComponent_Factory(t) { return new (t || CheckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"])); };
CheckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckComponent, selectors: [["app-check"]], decls: 55, vars: 10, consts: [["novalidate", "", 1, "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card", "bg-default"], [1, "card-header"], [1, "card-body"], [1, "col-md-7"], [3, "formGroup"], ["type", "hidden", "name", "id_tarea", "formControlName", "id_tarea", 1, "form-control"], ["type", "hidden", "name", "id_categoria", "formControlName", "id_categoria", 1, "form-control"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "titolpetit"], [1, "bdott"], [1, "row", "mt-3"], [1, "col-6", "minitext"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "row", "mt-3", "minitext"], [1, "col-12"], [1, "row", 3, "formGroup"], [1, "col-6"], [1, "col-6", 3, "formGroup"], [1, "col-12", "m-0", "p-0"], [1, "row", "mb-3", "p-0", "text-center"], [1, "row", "m-0", "p-0", "checkbox"], ["class", "col-2  text-center p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-info", "mt-3"], [1, "col-8"], [1, "col-4"], ["type", "checkbox", 3, "name", "value", "checked", "change"], ["type", "checkbox", 3, "value", "checked", "change"], [1, "col-4", "text-right"], [1, "col-2", "text-center", "p-0", "m-0"], ["type", "checkbox", 3, "value", "name", "id", "checked", "change"], [3, "for"]], template: function CheckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Posici\u00F3n en la semana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CheckComponent_div_22_Template, 6, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CheckComponent_div_24_Template, 6, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Posici\u00F3n en el mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CheckComponent_div_31_Template, 6, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Selecci\u00F3n de d\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CheckComponent_div_49_Template, 4, 6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Guardar periodicidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionFormCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionFormCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionFormCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionFormCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diasSemana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tramosSemana);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tramosMes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionFormCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionFormCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diasMes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check',
                templateUrl: './check.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/authguard.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/authguard.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dataservice.service */ "./src/app/services/dataservice.service.ts");






class AuthguardGuard {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    canActivate(route, state) {
        const routeurl = state.url;
        return this.isLogin(routeurl);
    }
    isLogin(routeurl) {
        if (this.dataService.isLoggedIn()) {
            return true;
        }
        this.dataService.redirectUrl = routeurl;
        this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
    }
}
AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) { return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardGuard, factory: AuthguardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/usuario-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/guards/usuario-guard.service.ts ***!
  \*************************************************/
/*! exports provided: UsuarioGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioGuardService", function() { return UsuarioGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");






class UsuarioGuardService {
    constructor(wsService, router) {
        this.wsService = wsService;
        this.router = router;
    }
    canActivate() {
        if (this.wsService.getUsuario()) {
            return true;
        }
        else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}
UsuarioGuardService.ɵfac = function UsuarioGuardService_Factory(t) { return new (t || UsuarioGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UsuarioGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioGuardService, factory: UsuarioGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/accionpuntual.ts":
/*!*****************************************!*\
  !*** ./src/app/models/accionpuntual.ts ***!
  \*****************************************/
/*! exports provided: ModeloAccionPuntual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloAccionPuntual", function() { return ModeloAccionPuntual; });
class ModeloAccionPuntual {
}


/***/ }),

/***/ "./src/app/models/ayuda.ts":
/*!*********************************!*\
  !*** ./src/app/models/ayuda.ts ***!
  \*********************************/
/*! exports provided: Ayuda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ayuda", function() { return Ayuda; });
class Ayuda {
}


/***/ }),

/***/ "./src/app/models/constantes.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/constantes.model.ts ***!
  \********************************************/
/*! exports provided: Constantes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constantes", function() { return Constantes; });
class Constantes {
}
//public static SERVER_API:string;
Constantes.API_SERVER = 'http://ibmes.site:8081/b';
//public static API_SERVER = 'http://localhost/b';
Constantes.nombreTurnos = 'turnos';
Constantes.ARND = Math.floor(100000000 + Math.random() * 900000000);
Constantes.BRND = Math.floor(100000000 + Math.random() * 900000000);
Constantes.CRND = Math.floor(100000000000 + Math.random() * 900000000000);
Constantes.DRND = Math.floor(100000000000 + Math.random() * 900000000000);


/***/ }),

/***/ "./src/app/models/incidencia.ts":
/*!**************************************!*\
  !*** ./src/app/models/incidencia.ts ***!
  \**************************************/
/*! exports provided: Incidencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Incidencia", function() { return Incidencia; });
class Incidencia {
}


/***/ }),

/***/ "./src/app/models/issue.ts":
/*!*********************************!*\
  !*** ./src/app/models/issue.ts ***!
  \*********************************/
/*! exports provided: Issue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Issue", function() { return Issue; });
class Issue {
}


/***/ }),

/***/ "./src/app/models/issuehistorico.ts":
/*!******************************************!*\
  !*** ./src/app/models/issuehistorico.ts ***!
  \******************************************/
/*! exports provided: IssueHistorico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueHistorico", function() { return IssueHistorico; });
class IssueHistorico {
}


/***/ }),

/***/ "./src/app/models/periodicidad.ts":
/*!****************************************!*\
  !*** ./src/app/models/periodicidad.ts ***!
  \****************************************/
/*! exports provided: ModeloPeriodicidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeloPeriodicidad", function() { return ModeloPeriodicidad; });
class ModeloPeriodicidad {
}


/***/ }),

/***/ "./src/app/models/periodicidadmadre.ts":
/*!*********************************************!*\
  !*** ./src/app/models/periodicidadmadre.ts ***!
  \*********************************************/
/*! exports provided: PeriodicidadMadre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicidadMadre", function() { return PeriodicidadMadre; });
class PeriodicidadMadre {
}


/***/ }),

/***/ "./src/app/models/personas.ts":
/*!************************************!*\
  !*** ./src/app/models/personas.ts ***!
  \************************************/
/*! exports provided: Personas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personas", function() { return Personas; });
class Personas {
}


/***/ }),

/***/ "./src/app/models/seguimiento.ts":
/*!***************************************!*\
  !*** ./src/app/models/seguimiento.ts ***!
  \***************************************/
/*! exports provided: Seguimiento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seguimiento", function() { return Seguimiento; });
class Seguimiento {
}


/***/ }),

/***/ "./src/app/models/turnos.ts":
/*!**********************************!*\
  !*** ./src/app/models/turnos.ts ***!
  \**********************************/
/*! exports provided: Turnos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turnos", function() { return Turnos; });
class Turnos {
}


/***/ }),

/***/ "./src/app/models/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}


/***/ }),

/***/ "./src/app/pages/abririncidencia.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/abririncidencia.component.ts ***!
  \****************************************************/
/*! exports provided: AbririncidenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbririncidenciaComponent", function() { return AbririncidenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/admin-servicio.service */ "./src/app/services/admin-servicio.service.ts");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _models_incidencia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/incidencia */ "./src/app/models/incidencia.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");


















function AbririncidenciaComponent_img_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r351.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/", "home"]; };
class AbririncidenciaComponent {
    constructor(httpClient, formBuilder, adminService) {
        this.httpClient = httpClient;
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.personas = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__["Constantes"].API_SERVER; //URL del servicio
        this.personasdatos = new _models_personas__WEBPACK_IMPORTED_MODULE_6__["Personas"]();
        this.incidenciadatos = new _models_incidencia__WEBPACK_IMPORTED_MODULE_7__["Incidencia"]();
        this.imageSrc = '';
        this.incidenciaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id_persona_log: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            enunciado: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            textoincidencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            imagenincidencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            tokenIncidencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        const id_persona = localStorage.getItem('id_persona');
        this.adminService.getPersonas(id_persona)
            .subscribe((respuesta) => {
            this.personasdatos = respuesta;
            this.incidenciaForm = formBuilder.group({
                id_persona_log: id_persona,
                nombres: this.personasdatos.nombres,
                imagenincidencia: [''],
                tokenIncidencia: [''],
                enunciado: ['',
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                    ]
                ],
                textoincidencia: ['',
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2440),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                    ]
                ]
            });
        });
    }
    ngOnInit() {
    }
    recarga() {
        location.reload();
    }
    preview(e) {
        var files = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (files.length === 0)
            return;
        var pattern = /image-*/;
        if (!files.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            if (this.imgURL.length * 2 > Math.pow(2, 21)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'ERROR en la imagen',
                    text: 'La imagen es mayor de 2Mb',
                    icon: 'success',
                    showConfirmButton: false
                });
            }
        };
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    guardaryenviarIncidencia(form) {
        if (this.incidenciaForm.valid) {
            this.incidenciaForm.value.imagenincidencia = this.imgURL;
            this.incidenciaForm.value.tokenIncidencia = this.makeid(15);
            let peticion;
            peticion = this.adminService.guardarNuevancidencia(this.incidenciaForm.value);
            peticion.subscribe(respuesta => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: this.incidenciadatos.enunciado,
                    text: `La incidencia ha sido abiertacon el token ${this.incidenciaForm.value.tokenIncidencia}`,
                    icon: 'success',
                    showConfirmButton: false
                })
                    , this.recarga();
            });
        }
    }
}
AbririncidenciaComponent.ɵfac = function AbririncidenciaComponent_Factory(t) { return new (t || AbririncidenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"])); };
AbririncidenciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbririncidenciaComponent, selectors: [["app-abririncidencia"]], decls: 43, vars: 8, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "row", "m-2", "mt-4"], [1, "col-md-6", "alturaminima", "mb-5"], [1, "mb-3", "mt-2"], ["type", "text", "placeholder", "Escriba un enunciado", "autocomplete", "off", "value", "", "formControlName", "enunciado", 1, "form-control", "input-sm", "mb-3"], ["rows", "10", "placeholder", "Escriba un texto", "formControlName", "textoincidencia", 1, "form-control", "input-sm", "mb-3"], [1, "btn", "btn-info", 3, "disabled"], [1, "row"], [1, "col-12", "text-center"], ["height", "200", 3, "src", 4, "ngIf"], [1, "col-12", "text-center", "mt-4"], ["for", "imagenincidencia", 1, "fileContainer"], [1, "fa", "fa-camera"], ["type", "file", "id", "imagenincidencia", "name", "imagenincidencia", "formControlName", "imagenincidencia", "accept", "image/*", 3, "change"], [1, "mt-2"], ["height", "200", 3, "src"]], template: function AbririncidenciaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Abrir incidencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AbririncidenciaComponent_Template_form_ngSubmit_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352); const _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.guardaryenviarIncidencia(_r350); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Si tiene alguna sugerencia o incidencia que comunicarnos con respecto al funcionamiento de esta aplicaci\u00F3n, por favor, haga uso del siguiente formulario.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enunciado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Texto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Enviar incidencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AbririncidenciaComponent_img_33_Template, 1, 1, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AbririncidenciaComponent_Template_input_change_38_listener($event) { return ctx.preview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Si desea adjuntar una captura de pantalla, por favor pulse aqu\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.incidenciaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.incidenciaForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbririncidenciaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abririncidencia',
                templateUrl: './abririncidencia.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/alta.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/alta.component.ts ***!
  \*****************************************/
/*! exports provided: AltaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltaComponent", function() { return AltaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiregistros.service */ "./src/app/services/apiregistros.service.ts");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");























function AltaComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r128 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r128.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r128.rol_name, " ");
} }
function AltaComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fecha fin acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_div_62_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AltaComponent_div_62_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r129.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r126.model);
} }
const _c0 = function () { return ["/", "home"]; };
class AltaComponent {
    constructor(httpClient, apiService, router) {
        this.httpClient = httpClient;
        this.apiService = apiService;
        this.router = router;
        this.registro = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.roles = [];
        // recurrencias: Recurrencias[] = [];
        this.estados = [];
        this.categorias = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].API_SERVER; //URL del servicio
        this.personas = [];
        this.issue = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.dregistro = null;
        this.datoregistro = {
            id_tarea: null,
            tarea: null,
            id_persona: localStorage.getItem('id_persona'),
            ibm_hora: null,
            estatus: null,
            observaciones: null,
            id_categoria: null,
            flag_visibilidad: null,
            prioridad: null,
            id_rol: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["ColumnMode"];
        //cargo los roles para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read_noadmin.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
        //cargo las categorias para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(result => {
            this.categorias = result;
        }, error => console.error(error));
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        this.router.navigate(['/home']);
    }
    //alta de registro
    altaRegistro() {
        //si los campos obligatorios nos llegan vacios
        if (this.datoregistro.tarea == null || this.datoregistro.ibm_hora == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'Los campos no pueden estar vacíos!!',
                icon: 'error',
            });
        }
        else {
            //enviamos el array a la funcions del server
            this.apiService.altaRegistro(this.datoregistro).subscribe(datos => {
                console.log(this.datoregistro);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.datoregistro.tarea,
                    text: 'Registro añadido',
                    icon: 'success',
                    showConfirmButton: true
                });
                //una vez creada la tarea, obtenemos el lastId para abrir la tarea creada.
                this.apiService.getLastId()
                    .subscribe((respuesta) => {
                    this.registro = respuesta;
                    const identif = JSON.stringify(this.registro).slice(1, -1);
                    const identificador = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].ARND + identif + _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].BRND;
                    this.router.navigateByUrl(`/detalle/${identificador}`);
                });
                // ,this.recarga()
                // ;      
            });
        }
    }
}
AltaComponent.ɵfac = function AltaComponent_Factory(t) { return new (t || AltaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
AltaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AltaComponent, selectors: [["app-alta"]], viewQuery: function AltaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 79, vars: 38, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-6", "pt-5"], [1, "form-group"], ["name", "id_persona", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona", "ngModel"], ["for", "tarea"], ["required", "", "placeholder", "Resumen tarea", "required", "", "minlength", "4", "name", "tarea", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["tarea", "ngModel"], [1, "row"], [1, "col-md-4"], [1, "form-group", "24hr-example"], ["for", "ibm_hora"], ["required", "", "aria-label", "24hr format", "placeholder", "00:00", "minlength", "5", "maxlength", "5", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", "reloj", 2, "background-color", "white", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["ibm_hora", "ngModel"], [3, "minutesGap"], ["fullTime", ""], ["for", "id_rol"], ["required", "", "name", "id_rol", "placeholder", "Seleccione categoria", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["for", "prioridad"], ["required", "", "name", "prioridad", "placeholder", "Seleccione prioridad", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["prioridad", "ngModel"], ["selected", "", 3, "ngValue"], ["value", "alta"], ["value", "media"], ["value", "baja"], [1, "col-md-2"], [4, "ngIf"], [1, "col-4"], ["for", "observaciones"], ["rows", "10", "placeholder", "Observaciones", "maxlength", "2000", "name", "observaciones", "data", "", 3, "ngModel", "editor", "ready", "ngModelChange"], ["observaciones", "ngModel"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [3, "value"], ["for", "dp"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"]], template: function AltaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_input_ngModelChange_19_listener($event) { return ctx.datoregistro.id_persona = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_input_ngModelChange_24_listener($event) { return ctx.datoregistro.tarea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_input_ngModelChange_32_listener($event) { return ctx.datoregistro.ibm_hora = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngx-material-timepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_select_ngModelChange_39_listener($event) { return ctx.datoregistro.id_rol = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Seleccione Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AltaComponent_option_43_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_select_ngModelChange_47_listener($event) { return ctx.datoregistro.prioridad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Seleccione prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Baja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AltaComponent_div_62_Template, 8, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ckeditor", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function AltaComponent_Template_ckeditor_ready_72_listener($event) { return ctx.onReady($event); })("ngModelChange", function AltaComponent_Template_ckeditor_ngModelChange_72_listener($event) { return ctx.datoregistro.observaciones = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AltaComponent_Template_button_click_75_listener() { return ctx.altaRegistro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
        const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 25, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 27, "txtNuevoRegistro"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.id_persona);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 29, "txtTarea"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r120.invalid && _r120.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.tarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 31, "txtHora"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r121.invalid && _r121.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.ibm_hora)("ngxTimepicker", _r122)("format", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minutesGap", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.id_rol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.prioridad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datoregistro.id_categoria === "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 33, "txtObservaciones"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.observaciones)("editor", ctx.Editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 35, "txtAgregar"), " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbInputDatepicker"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AltaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alta',
                templateUrl: './alta.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/configuracion.pages.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/configuracion.pages.ts ***!
  \**********************************************/
/*! exports provided: ConfiguracionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function() { return ConfiguracionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






const _c0 = function () { return ["/", "home"]; };
class ConfiguracionPage {
}
ConfiguracionPage.ɵfac = function ConfiguracionPage_Factory(t) { return new (t || ConfiguracionPage)(); };
ConfiguracionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfiguracionPage, selectors: [["app-configuracion"]], decls: 56, vars: 2, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "table", "table-hover", "table-sm"], [1, "table-active"]], template: function ConfiguracionPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " categoria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " recurrencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiguracionPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-configuracion',
                templateUrl: './configuracion.pages.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/descarga.pages.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/descarga.pages.ts ***!
  \*****************************************/
/*! exports provided: DescargaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescargaPage", function() { return DescargaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






const _c0 = function () { return ["/", "home"]; };
class DescargaPage {
}
DescargaPage.ɵfac = function DescargaPage_Factory(t) { return new (t || DescargaPage)(); };
DescargaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescargaPage, selectors: [["app-descarga"]], decls: 56, vars: 2, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "table", "table-hover", "table-sm"], [1, "table-active"]], template: function DescargaPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Descarga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descarga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " categoria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " recurrencia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescargaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-descarga',
                templateUrl: './descarga.pages.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/detalle.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/detalle.component.ts ***!
  \********************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _services_detalle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/detalle.service */ "./src/app/services/detalle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_seguimiento__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/seguimiento */ "./src/app/models/seguimiento.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/periodicidad/accion.component */ "./src/app/components/periodicidad/accion.component.ts");
/* harmony import */ var _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/periodicidad/check.component */ "./src/app/components/periodicidad/check.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

























function DetalleComponent_em_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nunca modificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", categoria_r17.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoria_r17.categoria_name, " ");
} }
function DetalleComponent_div_63_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_63_div_1_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.registro.decidecategoria === "3");
} }
function DetalleComponent_div_63_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleComponent_div_63_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_63_div_2_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.registro.decidecategoria === "1");
} }
function DetalleComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_63_div_1_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetalleComponent_div_63_div_2_Template, 2, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.registro.id_categoria === "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.registro.id_categoria === "1");
} }
function DetalleComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleComponent_div_64_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetalleComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_64_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetalleComponent_div_64_div_2_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.registro.id_categoria === "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.registro.id_categoria === "1");
} }
function DetalleComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_div_92_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const suscripcio_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.eliminarpersona(suscripcio_r24, ctx_r25.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suscripcio_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", suscripcio_r24.id_seguimiento, " - ", suscripcio_r24.nombres, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suscripcio_r24.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suscripcio_r24.rol_name);
} }
function DetalleComponent_ng_template_109_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const persona_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", persona_r32.id_persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", persona_r32.nombres, " ");
} }
function DetalleComponent_ng_template_109_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Seguimiento de la issue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_ng_template_109_Template_button_click_3_listener() { const modal_r27 = ctx.$implicit; return modal_r27.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_ng_template_109_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.datoregistro.id_tarea = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_ng_template_109_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.datoregistro.id_persona_log = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Seleccione la persona para designarle el seguimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 79, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_ng_template_109_Template_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.datoregistro.id_persona = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Seleccione persona");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetalleComponent_ng_template_109_option_19_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_ng_template_109_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.guardarseguimiento(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A\u00F1adir persona ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.datoregistro.id_tarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.datoregistro.id_persona_log);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.datoregistro.id_persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.personas);
} }
const _c0 = function () { return ["/", "home"]; };
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["link", "|", "bold", "italic"]; };
const _c3 = function (a0) { return { toolbar: a0 }; };
class DetalleComponent {
    constructor(httpClient, registroService, activatedRoute, router, modalService) {
        this.httpClient = httpClient;
        this.registroService = registroService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.registro = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Issue"]();
        this.dregistroa = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Issue"]();
        this.registropersona = new _models_seguimiento__WEBPACK_IMPORTED_MODULE_9__["Seguimiento"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.roles = [];
        this.recurrencias = [];
        this.estados = [];
        this.categorias = [];
        this.personas = [];
        this.suscripcion = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_7__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_seguimiento: null,
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id_tarea'),
            id_persona: null,
            id_persona_log: localStorage.getItem('id_persona')
        };
        this.dias = [
            { name: 'OptionA', value: 'first_opt', checked: true },
            { name: 'OptionB', value: 'second_opt', checked: false },
            { name: 'OptionC', value: 'third_opt', checked: true }
        ];
        //cargo los roles para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
        //cargo los estados para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/estados_read.php').subscribe(result => {
            this.estados = result;
        }, error => console.error(error));
        //cargo las recurrencias para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/recurrencias_read.php').subscribe(result => {
            this.recurrencias = result;
        }, error => console.error(error));
        //cargo las categorias para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(result => {
            this.categorias = result;
        }, error => console.error(error));
        //cargo las personas para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.personas = result;
        }, error => console.error(error));
        //cargo el listado de personas para esta ID tarea
        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_suscritas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.suscripcion = result;
        }, error => console.error(error));
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        const id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
        this.registroService.getPerson(id_tarea)
            .subscribe((respuesta) => {
            this.registro = respuesta;
            this.registro.id_tarea = id_tarea;
            this.registro.id_persona = localStorage.getItem('id_persona');
            //cargo el listado periodicidades de esta tarea para verificar a que categoria pertenecen y mostrar un combo u otro
            this.httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
                this.periodetalle = result[0];
                if (undefined == this.periodetalle) {
                    this.registro.decidecategoria = '0';
                }
                else {
                    this.periodcate = this.periodetalle['id_categoria'];
                    this.registro.decidecategoria = this.periodcate;
                }
            }, error => console.error(error));
        });
    }
    recarga() {
        location.reload();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    guardarregistro(form) {
        if (this.registro.tarea == '' || this.registro.ibm_hora == '' || this.registro.estatus == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Los campos obligatorios no pueden quedar vacíos',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            let peticion;
            peticion = this.registroService.actualizarRegistro(this.registro);
            peticion.subscribe(respuesta => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.registro.tarea,
                    text: 'Registro modificado',
                    icon: 'success',
                    showConfirmButton: true
                });
                //, this.recarga();
            });
        }
    }
    guardarseguimiento() {
        if (this.datoregistro.id_persona == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Debe seleccionar a alguien!',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            let peticion;
            peticion = this.registroService.actualizarRegistroSeguimiento(this.datoregistro);
            peticion.subscribe(respuesta => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.datoregistro.id_persona,
                    text: 'Persona asignada',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    //eliminar registro      
    eliminarpersona(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: `¿Desea elimina a esta persona del seguimiento?`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                this.datosborrado = JSON.stringify({ "id_seguimiento": registro.id_seguimiento });
                this.registroService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: registro.id_seguimiento,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
}
DetalleComponent.ɵfac = function DetalleComponent_Factory(t) { return new (t || DetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detalle_service__WEBPACK_IMPORTED_MODULE_3__["DetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"])); };
DetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleComponent, selectors: [["app-detalle"]], decls: 112, vars: 57, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "row"], [1, "col-12"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-md-7", "alturaminima", "mb-5"], ["type", "hidden", "name", "id_tarea", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "id_persona", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona", "ngModel"], [1, "form-group"], ["for", "tarea"], ["name", "tarea", "required", "", "minlength", "4", "type", "text", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tarea", "ngModel"], [1, "col-md-4"], ["for", "ibm_hora"], ["name", "ibm_hora", "required", "", "id", "reloj", "placeholder", "00:00", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", "hora", 2, "background-color", "white", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["ibm_hora", "ngModel"], [3, "minutesGap"], ["fullTime", ""], [1, "col-md-8"], ["for", "id_categoria"], ["required", "", "name", "id_categoria", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_categoria", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3"], [4, "ngIf"], [1, "col-4"], ["for", "prioridad"], ["required", "", "name", "prioridad", "placeholder", "Seleccione prioridad", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["prioridad", "ngModel"], ["selected", "", 3, "ngValue"], ["value", "alta"], ["value", "media"], ["value", "baja"], [1, "col-12", "mt-3", "mb-3"], [1, "col-10", "mt-2", "mb-2", "pt3", "pb3"], [1, "titolpetit"], [1, "col-2", "mt-2", "mb-2", "text-right"], ["alt", "Asignar nueva persona de seguimiento", "title", "Asignar nueva persona de seguimiento", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-plus", "fa-1"], ["class", "col-12 mt-1 mb-1 pb1 pt1", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-info", "mr-2"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "col-md-5", "alturaminima", "mb-5"], ["for", "observaciones"], ["id", "ibmeditor", "placeholder", "Observaciones", "maxlength", "2000", "name", "observaciones", "data", "", 3, "config", "ngModel", "editor", "ready", "ngModelChange"], ["observaciones", "ngModel"], ["content", ""], [3, "value"], [1, "col-12", "mt-1", "mb-1", "pb1", "pt1"], [1, "col-2"], [1, "col-2", "text-right"], ["alt", "Eliminar persona de seguimiento", "title", "Eliminar persona de seguimiento", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "bdott"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["name", "id_tarea", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_tarea", "ngModel"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "id_persona"], [1, "input-group"], ["required", "", "name", "id_persona", "placeholder", "Seleccione persona", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"]], template: function DetalleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetalleComponent_em_26_Template, 2, 0, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DetalleComponent_Template_form_ngSubmit_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.guardarregistro(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_33_listener($event) { return ctx.registro.id_tarea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_34_listener($event) { return ctx.registro.id_persona = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_42_listener($event) { return ctx.registro.tarea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_50_listener($event) { return ctx.registro.ibm_hora = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "ngx-material-timepicker", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_select_ngModelChange_58_listener($event) { return ctx.registro.id_categoria = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, DetalleComponent_option_60_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, DetalleComponent_div_63_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, DetalleComponent_div_64_Template, 3, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "select", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_select_ngModelChange_69_listener($event) { return ctx.registro.prioridad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Seleccione prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Alta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Baja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Personas que participan en el seguimiento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_Template_a_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110); return ctx.open(_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, DetalleComponent_div_92_Template, 12, 4, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "ckeditor", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function DetalleComponent_Template_ckeditor_ready_107_listener($event) { return ctx.onReady($event); })("ngModelChange", function DetalleComponent_Template_ckeditor_ngModelChange_107_listener($event) { return ctx.registro.observaciones = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, DetalleComponent_ng_template_109_Template, 23, 5, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.registro.tarea, " - #", ctx.registro.id_tarea, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, "txtCreado"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registro.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 40, "txtUltimaModificacion"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.fechamodi == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registro.fechamodi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_tarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_persona);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 42, "txtTarea"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.tarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 44, "txtHora"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r6.invalid && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.ibm_hora)("ngxTimepicker", _r7)("format", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minutesGap", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.decidecategoria != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.decidecategoria === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.prioridad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suscripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 46, "txtModificar"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 48, "txtVolver"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 50, "txtObservaciones"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](55, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c2)))("ngModel", ctx.registro.observaciones)("editor", ctx.Editor);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["MinLengthValidator"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMaterialTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["MaxLengthValidator"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_17__["AccionComponent"], _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_18__["CheckComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalle',
                templateUrl: './detalle.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_detalle_service__WEBPACK_IMPORTED_MODULE_3__["DetalleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/detallehistorico.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/detallehistorico.component.ts ***!
  \*****************************************************/
/*! exports provided: DetalleHistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleHistoricoComponent", function() { return DetalleHistoricoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_seguimiento__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/seguimiento */ "./src/app/models/seguimiento.ts");
/* harmony import */ var _services_detallehistorico_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/detallehistorico.service */ "./src/app/services/detallehistorico.service.ts");
/* harmony import */ var _models_issuehistorico__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/issuehistorico */ "./src/app/models/issuehistorico.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





















const _c0 = function () { return ["/", "home"]; };
const _c1 = function () { return ["/historico"]; };
class DetalleHistoricoComponent {
    constructor(httpClient, registroService, activatedRoute, router, modalService) {
        this.httpClient = httpClient;
        this.registroService = registroService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.registro = new _models_issuehistorico__WEBPACK_IMPORTED_MODULE_9__["IssueHistorico"]();
        this.registropersona = new _models_seguimiento__WEBPACK_IMPORTED_MODULE_7__["Seguimiento"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.roles = [];
        this.recurrencias = [];
        this.estados = [];
        this.categorias = [];
        this.personas = [];
        this.suscripcion = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_seguimiento: null,
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
            id_persona: null
        };
        //cargo los roles para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
        //cargo los estados para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/estados_read.php').subscribe(result => {
            this.estados = result;
        }, error => console.error(error));
        //cargo las recurrencias para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/recurrencias_read.php').subscribe(result => {
            this.recurrencias = result;
        }, error => console.error(error));
        //cargo las categorias para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(result => {
            this.categorias = result;
        }, error => console.error(error));
        //cargo las personas para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.personas = result;
        }, error => console.error(error));
        //cargo el listado de personas para esta ID tarea
        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_suscritas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(result => {
            this.suscripcion = result;
        }, error => console.error(error));
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        const id_log = this.activatedRoute.snapshot.paramMap.get('id_log');
        this.registroService.getDetalleHistorico(id_log)
            .subscribe((respuesta) => {
            this.registro = respuesta;
            this.registro.id_log = id_log;
        });
    }
    recarga() {
        location.reload();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    //eliminar registro      
    eliminarpersona(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: `¿Desea elimina a esta persona del seguimiento?`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            console.log("id seguimiento: ", registro.id_seguimiento);
            if (respuesta.value) {
                this.datosborrado = JSON.stringify({ "id_seguimiento": registro.id_seguimiento });
                this.registroService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: registro.id_seguimiento,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
}
DetalleHistoricoComponent.ɵfac = function DetalleHistoricoComponent_Factory(t) { return new (t || DetalleHistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detallehistorico_service__WEBPACK_IMPORTED_MODULE_8__["DetalleHistoricoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
DetalleHistoricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleHistoricoComponent, selectors: [["app-detallehistorico"]], decls: 67, vars: 29, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-7", "alturaminima", "mb-5"], ["type", "hidden", "name", "id_log", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "tarea"], ["name", "tarea", "required", "", "minlength", "4", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tarea", "ngModel"], [1, "col-md-4"], ["for", "nombres"], ["name", "nombres", "required", "", "type", "text", "readonly", "", "disabled", "", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["nombres", "ngModel"], ["for", "id_persona"], ["name", "id_persona", "required", "", "type", "text", "readonly", "", "disabled", "", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_persona", "ngModel"], [1, "col-md-12", "mb-3"], [1, "col-4"], [1, "form-group", "text-center"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "col-md-5", "alturaminima", "mb-5"], ["for", "observaciones"], ["rows", "10", "name", "observaciones", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descripcion", "ngModel"]], template: function DetalleHistoricoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hist\u00F3rico de Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_24_listener($event) { return ctx.registro.id_log = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_31_listener($event) { return ctx.registro.tarea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_38_listener($event) { return ctx.registro.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Usuario creado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_44_listener($event) { return ctx.registro.id_persona = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "textarea", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_textarea_ngModelChange_64_listener($event) { return ctx.registro.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.registro.tarea, " - #", ctx.registro.id_log, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 16, "txtCreado"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 18, ctx.registro.fecha, "dd/MM/y HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 21, "txtTarea"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r157.invalid && _r157.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.tarea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_persona);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 23, "txtVolver"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 25, "txtObservaciones"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.descripcion);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleHistoricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detallehistorico',
                templateUrl: './detallehistorico.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_detallehistorico_service__WEBPACK_IMPORTED_MODULE_8__["DetalleHistoricoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/detallepersona.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/detallepersona.component.ts ***!
  \***************************************************/
/*! exports provided: DetallePersona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePersona", function() { return DetallePersona; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/imagen/modimagen.component */ "./src/app/components/imagen/modimagen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





















function DetallePersona_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r168.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r168.rol_name, " ");
} }
const _c0 = function () { return ["/", "home"]; };
const _c1 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class DetallePersona {
    constructor(httpClient, registroService, activatedRoute, router, modalService) {
        this.httpClient = httpClient;
        this.registroService = registroService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.registro = new _models_personas__WEBPACK_IMPORTED_MODULE_7__["Personas"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.personas = [];
        this.roles = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_persona: this.activatedRoute.snapshot.paramMap.get('id_persona'),
            id_persona_log: localStorage.getItem('id_persona'),
            nombres: null,
            telefono: null,
            email: null,
            direccion: null,
            registrado: null,
            id_rol: null,
            password: null,
            imagen: null
        };
        //cargo los roles para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
        this.registroService.getPerson(id_persona)
            .subscribe((respuesta) => {
            this.registro = respuesta;
            this.registro.id_persona = id_persona;
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    recarga() {
        location.reload();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    //alta de registro
    altaRegistro() {
        //si los campos obligatorios nos llegan vacios
        if (this.datoregistro.nombres == null || this.datoregistro.email == null || this.datoregistro.id_rol == null || this.datoregistro.password == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'Los campos obligatorios no pueden estar vacíos!!',
                icon: 'error',
            });
        }
        else {
            //enviamos el array a la funcions del server
            this.registroService.altaRegistro(this.datoregistro).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: this.datoregistro.nombres,
                    text: 'Registro añadido',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    guardarregistro() {
        console.log(this.registro);
        if (this.registro.nombres == '' ||
            this.registro.telefono == '' ||
            this.registro.email == '' ||
            this.registro.password == '' ||
            this.registro.direccion == '' ||
            this.registro.id_rol == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Los campos obligatorios no pueden quedar vacíos',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            //validacion email      
            var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            var emailResult = patronEmail.test(this.registro.email);
            if (emailResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'El campo E-mail debe cumplir con el formato adecuado',
                    icon: 'error',
                    showConfirmButton: true
                });
            }
            else
                // validacion password
                // al menos 1 número, una minúscula y una mayuscula
                // al menos 6 carácteres
                var patronPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            var passwordResult = patronPassword.test(this.registro.password);
            if (passwordResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'El campo Password debe tener al menos 1 número, una minúscula y una mayúscula y como mínimo 6 carácteres',
                    icon: 'error',
                    showConfirmButton: true
                });
            }
            else {
                let peticion;
                peticion = this.registroService.actualizarRegistro(this.registro);
                peticion.subscribe(respuesta => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: this.registro.nombres,
                        text: 'Registro modificado',
                        icon: 'success',
                        showConfirmButton: false
                    }), this.recarga();
                });
            }
        }
    }
}
DetallePersona.ɵfac = function DetallePersona_Factory(t) { return new (t || DetallePersona)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
DetallePersona.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetallePersona, selectors: [["app-detallepersona"]], decls: 85, vars: 71, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-2", "alturaminima", "mb-5"], [1, "col-md-10", "alturaminima", "mb-5"], [1, "form-group"], ["for", "nombres"], ["required", "", "required", "", "minlength", "4", "name", "nombres", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["nombres", "ngModel"], [1, "row"], [1, "col-md-4"], ["for", "email"], ["required", "", "name", "email", "type", "email", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "email", "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], [1, "input-group"], ["required", "", "required", "", "name", "password", "type", "password", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "type", "ngModelChange"], ["password", "ngModel"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], ["for", "telefono"], ["minlength", "9", "name", "telefono", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["telefono", "ngModel"], [1, "col-md-6"], ["for", "direccion"], ["name", "direccion", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "id_rol"], ["required", "", "name", "id_rol", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [3, "value"]], template: function DetallePersona_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-modimagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_31_listener($event) { return ctx.registro.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_40_listener($event) { return ctx.registro.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_49_listener($event) { return ctx.registro.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePersona_Template_i_click_54_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_60_listener($event) { return ctx.registro.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_69_listener($event) { return ctx.registro.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_select_ngModelChange_77_listener($event) { return ctx.registro.id_rol = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, DetallePersona_option_79_Template, 2, 2, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePersona_Template_button_click_81_listener() { return ctx.guardarregistro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](67, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.registro.nombres, " - #", ctx.registro.id_persona, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 38, "txtCreado"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 40, ctx.registro.registrado, "dd/MM/y HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 43, "txtNombres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r161.invalid && _r161.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 45, "txtNombres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 47, "txtEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r162.invalid && _r162.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 49, "txtEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", true)("ngModel", ctx.registro.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 51, "txtPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r163.invalid && _r163.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 53, "txtPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.password)("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](68, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 55, "txtTelefono"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 57, "txt9digitos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 59, "txtDireccion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 61, "txtDireccion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 63, "txtRol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r166.invalid && _r166.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_rol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 65, "txtModificar"), " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__["ModimagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetallePersona, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detallepersona',
                templateUrl: './detallepersona.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/formularios/ayuda.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/formularios/ayuda.component.ts ***!
  \******************************************************/
/*! exports provided: AyudaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaFormComponent", function() { return AyudaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin-servicio.service */ "./src/app/services/admin-servicio.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_ayuda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/ayuda */ "./src/app/models/ayuda.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function AyudaFormComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_tr_18_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273); const ayuda_r271 = ctx.$implicit; const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r272.openayudaModi(_r269, ayuda_r271.id_ayuda); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_tr_18_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273); const ayuda_r271 = ctx.$implicit; const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r274.eliminarAyuda(ayuda_r271, ctx_r274.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ayuda_r271 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ayuda_r271.ayudatitulo);
} }
function AyudaFormComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nueva entrada de FAQs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_19_Template_button_click_3_listener() { const modal_r275 = ctx.$implicit; return modal_r275.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_19_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r280.datosformularioayuda.id_persona_log = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Escriba un t\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_19_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r282.datosformularioayuda.ayudatitulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Texto (m\u00E1x 650 car\u00E1cteres)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_19_Template_textarea_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r283.datosformularioayuda.ayudatexto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_19_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r284.guardarNuevaAyuda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Guardar registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r268.datosformularioayuda.id_persona_log);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r268.datosformularioayuda.ayudatitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r268.datosformularioayuda.ayudatexto);
} }
function AyudaFormComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Modificar entrada de FAQs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_21_Template_button_click_3_listener() { const modal_r285 = ctx.$implicit; return modal_r285.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r291.datosformulariomodi.id_persona_log = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r293.datosformulariomodi.id_ayuda = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Escriba un t\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r294.datosformulariomodi.ayudatitulo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Texto (m\u00E1x 650 car\u00E1cteres)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_textarea_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r295.datosformulariomodi.ayudatexto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_21_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r296.guardarModificarAyuda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Guardar registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.id_persona_log);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.id_ayuda);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.ayudatitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.ayudatexto);
} }
class AyudaFormComponent {
    constructor(httpClient, modalService, adminService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.adminService = adminService;
        this.ayudas = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.closeResult = '';
        this.datosformularioayuda = {
            id_persona_log: localStorage.getItem('id_persona'),
            ayudatitulo: null,
            ayudatexto: null
        };
        this.datosformulariomodi = new _models_ayuda__WEBPACK_IMPORTED_MODULE_7__["Ayuda"]();
        ayudatitulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10));
        httpClient.get(this.PHP_API_SERVER + '/ajax/read_ayuda.php').subscribe(result => {
            this.ayudas = result;
        }, error => console.error(error));
    }
    ngOnInit() {
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
    getDismissReasonA(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    //abrir modal
    openayudaModi(contentmodi, id_ayuda, id_persona_log) {
        this.modalService.open(contentmodi, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReasonB(reason)}`;
        });
        this.edicionAyuda(id_ayuda);
    }
    getDismissReasonB(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    edicionAyuda(id_ayuda) {
        this.adminService.getAyuda(id_ayuda)
            .subscribe((respuesta) => {
            this.datosformulariomodi = respuesta;
            this.datosformulariomodi.id_ayuda = id_ayuda;
            this.datosformulariomodi.id_persona_log = localStorage.getItem('id_persona');
        });
    }
    guardarNuevaAyuda() {
        if (this.datosformularioayuda.ayudatitulo == null || this.datosformularioayuda.ayudatexto == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: 'Debe Escribir un titulo y un texto!',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            let peticion;
            peticion = this.adminService.guardarNewAyuda(this.datosformularioayuda);
            peticion.subscribe(respuesta => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: 'Debe Escribir un titulo y un texto!',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            let peticion;
            peticion = this.adminService.guardarAyudaModificado(this.datosformulariomodi);
            peticion.subscribe(respuesta => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: this.datosformulariomodi.ayudatitulo,
                    text: 'Entrada modificada',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    eliminarAyuda(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: registro.id_ayuda,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
}
AyudaFormComponent.ɵfac = function AyudaFormComponent_Factory(t) { return new (t || AyudaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"])); };
AyudaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AyudaFormComponent, selectors: [["app-formayuda"]], decls: 23, vars: 1, consts: [[1, "rol"], [1, "col-12", "alert", "bg-dark", "text-white"], [1, "row"], [1, "col-9"], [1, "col-3", "text-right"], ["alt", "A\u00F1adir Ayuda", "title", "A\u00F1adir Ayuda", 1, "altaseguimientow", 3, "click"], [1, "fa", "fa-plus", "fa-1"], [1, "col-12", "alert", "p-0", "m-0", "ovefr"], [1, "table"], [4, "ngFor", "ngForOf"], ["content", ""], ["contentmodi", ""], [1, "text-right"], ["alt", "Modificar Ayuda", "title", "Modificar Ayuda", 1, "altaseguimiento", "mr-2", 3, "click"], [1, "fa", "fa-edit"], ["alt", "Eliminar Ayuda", "title", "Eliminar Ayuda", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "ayudatitulo"], ["name", "ayudatitulo", "type", "text", "maxlength", "100", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatitulo", "ngModel"], [1, "input-group"], ["rows", "10", "required", "", "maxlength", "650", "name", "ayudatexto", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatexto", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"], ["name", "id_ayuda", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_ayuda", "ngModel"]], template: function AyudaFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ayuda - A\u00F1ada o edite elementos FAQ a la p\u00E1gina de Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297); const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20); return ctx.openayuda(_r267); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AyudaFormComponent_tr_18_Template, 8, 1, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AyudaFormComponent_ng_template_19_Template, 22, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AyudaFormComponent_ng_template_21_Template, 24, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ayudas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AyudaFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formayuda',
                templateUrl: './ayuda.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/formularios/configuracion-general.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/formularios/configuracion-general.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfiguracionGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionGeneralComponent", function() { return ConfiguracionGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ConfiguracionGeneralComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ConfiguracionGeneralComponent.ɵfac = function ConfiguracionGeneralComponent_Factory(t) { return new (t || ConfiguracionGeneralComponent)(); };
ConfiguracionGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfiguracionGeneralComponent, selectors: [["app-configuracion-general"]], decls: 2, vars: 0, template: function ConfiguracionGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "configuracion-general works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiguracionGeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-configuracion-general',
                templateUrl: './configuracion-general.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/formularios/incidenciadetalle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/formularios/incidenciadetalle.component.ts ***!
  \******************************************************************/
/*! exports provided: IncidenciadetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidenciadetalleComponent", function() { return IncidenciadetalleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_incidencia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/incidencia */ "./src/app/models/incidencia.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _services_incidencias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/incidencias.service */ "./src/app/services/incidencias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @jaspero/ng-image-preload */ "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




















function IncidenciadetalleComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Resuelta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidenciadetalleComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Imagen adjunta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r450.registro.imagenincidencia, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("jpPreload", ctx_r450.registro.imagenincidencia);
} }
function IncidenciadetalleComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resuelta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidenciadetalleComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resolver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r452.resolverSubmit.valid);
} }
const _c0 = function () { return ["/", "home"]; };
const _c1 = function () { return ["/incidencias"]; };
class IncidenciadetalleComponent {
    constructor(httpClient, incidenciasService, activatedRoute, router, fb) {
        this.httpClient = httpClient;
        this.incidenciasService = incidenciasService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fb = fb;
        this.closeResult = '';
        this.registro = new _models_incidencia__WEBPACK_IMPORTED_MODULE_1__["Incidencia"]();
        this.isSubmitted = false;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
        this.resolverSubmit = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            id_incidencias: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            token_incidencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
        });
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_seguimiento: null,
            id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
            id_persona: null
        };
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        const token_incidencia = this.activatedRoute.snapshot.paramMap.get('token_incidencia');
        this.incidenciasService.getDetalleIncidencia(token_incidencia)
            .subscribe((respuesta) => {
            this.registro = respuesta;
            this.registro.token_incidencia = token_incidencia;
            this.resolverSubmit = this.fb.group({
                id_incidencias: [this.registro.id_incidencias, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                token_incidencia: [this.registro.token_incidencia, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
        });
    }
    recarga() {
        location.reload();
    }
    onSubmit() {
        this.isSubmitted = true;
        const valor = JSON.stringify(this.resolverSubmit.value);
        this.incidenciasService.guardarIncidencia(valor).subscribe(respuesta => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                title: 'Incidencia resuelta',
                text: 'la incidencia ha quedado como resuelta',
                icon: 'success',
                showConfirmButton: true
            }), this.recarga();
        });
    }
    get id_incidencias() { return this.resolverSubmit.get('id_incidencias'); }
    get token_incidencia() { return this.resolverSubmit.get('token_incidencia'); }
}
IncidenciadetalleComponent.ɵfac = function IncidenciadetalleComponent_Factory(t) { return new (t || IncidenciadetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_incidencias_service__WEBPACK_IMPORTED_MODULE_4__["IncidenciasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
IncidenciadetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncidenciadetalleComponent, selectors: [["app-incidenciadetalle"]], decls: 50, vars: 21, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-12"], [1, "form-group"], [1, "hachedosgrande"], ["class", "badge badge-success", 4, "ngIf"], [1, "mb-2"], [1, "mt-3", "mb-3"], [4, "ngIf"], [1, "form-group", "text-center"], [3, "formGroup", "ngSubmit"], ["type", "hidden", "formControlName", "id_incidencias", 1, "form-control"], ["type", "hidden", "formControlName", "token_incidencia", 1, "form-control"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "badge", "badge-success"], [1, "mt-4", "mb-2"], ["alt", "", 1, "animate", "fadeIn", "mb-3", 3, "src", "jpPreload"], ["disabled", "", 1, "btn", "btn-success", "mr-2"], ["type", "submit", 1, "btn", "btn-info", "mr-2", 3, "disabled"]], template: function IncidenciadetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hist\u00F3rico de Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Creada: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, IncidenciadetalleComponent_span_28_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Emitida por: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, IncidenciadetalleComponent_div_37_Template, 5, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IncidenciadetalleComponent_Template_form_ngSubmit_41_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, IncidenciadetalleComponent_span_44_Template, 3, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, IncidenciadetalleComponent_span_45_Template, 3, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.registro.enunciado, " - #", ctx.registro.token_incidencia, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 14, ctx.registro.fecha, "dd/MM/y HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.registro.enunciado, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.resuelta === "SI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registro.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registro.textoincidencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.imagenincidencia != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resolverSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.resuelta === "SI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.resuelta != "SI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 17, "txtVolver"), " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_13__["PreloadDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidenciadetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-incidenciadetalle',
                templateUrl: './incidenciadetalle.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _services_incidencias_service__WEBPACK_IMPORTED_MODULE_4__["IncidenciasService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/formularios/incidencias.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/formularios/incidencias.component.ts ***!
  \************************************************************/
/*! exports provided: IncidenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidenciasComponent", function() { return IncidenciasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _services_incidencias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/incidencias.service */ "./src/app/services/incidencias.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






















function IncidenciasComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r432 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r432.id_incidencias);
} }
function IncidenciasComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidenciasComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const value_r434 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, value_r434, 0, 90), " ");
} }
function IncidenciasComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incidencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidenciasComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const row_r438 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, row_r438.enunciado, 0, 90), " ");
} }
function IncidenciasComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Emitida por");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidenciasComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r440 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r440, " ");
} }
function IncidenciasComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resuelta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { positive: a0, negative: a1, posnegtive: a2 }; };
function IncidenciasComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r444 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, row_r444.resuelta == "SI", row_r444.resuelta == "NO", row_r444.resuelta == "STANDBY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r444.resuelta, " ");
} }
function IncidenciasComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha resoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidenciasComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r447 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r447.fecharesuelta, "");
} }
const _c1 = function (a1) { return ["/incidenciadetalle", a1]; };
function IncidenciasComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r448 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, row_r448.token_incidencia));
} }
const _c2 = function () { return ["/", "home"]; };
class IncidenciasComponent {
    constructor(spinner, httpClient, incidenciasService) {
        this.spinner = spinner;
        this.httpClient = httpClient;
        this.incidenciasService = incidenciasService;
        this.personas = [];
        this.issue = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Issue"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_log: null,
            fecha: null,
            tarea: null,
            issueg: null,
            descripcion_accion: null,
            hour: null,
            estatus: null,
            status: null,
            observaciones: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.fetch(data => {
            // cache
            this.temp = [...data];
            this.rows = data;
        });
    }
    //el ngoninit nos servira para recargar en caso de error de validacion
    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 2000);
        this.fetch(data => {
            this.temp = [...data];
            this.rows = data;
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    //cargamos el listado
    fetch(cb) {
        if (cb) {
            const req = new XMLHttpRequest();
            req.open('GET', `${this.PHP_API_SERVER}/ajax/read_incidencias.php`);
            req.onload = () => {
                cb(JSON.parse(req.response));
                console.log(JSON.parse(req.response));
            };
            req.send();
        }
    }
    //eliminar registro      
    borrarRegistro(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `¿Desea borrar el registro histórico ${registro.tarea}`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                this.datosborrado = JSON.stringify({ "tarea": registro.tarea, "id_tarea": registro.id_tarea });
                this.incidenciasService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: registro.tarea,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
    //actualizacion filtro busqueda
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(function (d) {
            return d.fecha.toLowerCase().indexOf(val) !== -1 || d.resuelta.toLowerCase().indexOf(val) !== -1 || d.fecharesuelta.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // actualizamos las rows
        this.rows = temp;
        // Cuando cambie el filtro, regresa a la primera página.
        this.table.offset = 0;
    }
}
IncidenciasComponent.ɵfac = function IncidenciasComponent_Factory(t) { return new (t || IncidenciasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_incidencias_service__WEBPACK_IMPORTED_MODULE_6__["IncidenciasService"])); };
IncidenciasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncidenciasComponent, selectors: [["app-incidencias"]], viewQuery: function IncidenciasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 48, vars: 18, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-6"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-6", "text-right"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "id_incidencias", 3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Fecha", 3, "maxWidth"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Enunciado", 3, "maxWidth"], ["name", "Nombres", 3, "maxWidth"], ["name", "Resuelta", 3, "maxWidth"], ["name", "Fecharesuelta", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [1, "text-center"], [3, "ngClass"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-eye"]], template: function IncidenciasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Incidencias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IncidenciasComponent_Template_input_keyup_21_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngx-datatable", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IncidenciasComponent_ng_template_29_Template, 2, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, IncidenciasComponent_ng_template_31_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, IncidenciasComponent_ng_template_32_Template, 2, 5, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, IncidenciasComponent_ng_template_34_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, IncidenciasComponent_ng_template_35_Template, 2, 5, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, IncidenciasComponent_ng_template_37_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, IncidenciasComponent_ng_template_38_Template, 1, 1, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, IncidenciasComponent_ng_template_40_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, IncidenciasComponent_ng_template_41_Template, 2, 6, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, IncidenciasComponent_ng_template_43_Template, 2, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, IncidenciasComponent_ng_template_44_Template, 2, 1, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngx-datatable-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, IncidenciasComponent_ng_template_46_Template, 5, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "txtFiltrarRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("limit", 15)("columnMode", "force")("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 1010);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidenciasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-incidencias',
                templateUrl: './incidencias.component.html'
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_incidencias_service__WEBPACK_IMPORTED_MODULE_6__["IncidenciasService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/formularios/listados.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/formularios/listados.component.ts ***!
  \*********************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles.component */ "./src/app/pages/formularios/roles.component.ts");
/* harmony import */ var _ayuda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ayuda.component */ "./src/app/pages/formularios/ayuda.component.ts");
/* harmony import */ var _turnos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./turnos.component */ "./src/app/pages/formularios/turnos.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










const _c0 = function () { return ["/", "home"]; };
class ListadosComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ListadosComponent.ɵfac = function ListadosComponent_Factory(t) { return new (t || ListadosComponent)(); };
ListadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListadosComponent, selectors: [["app-listados"]], decls: 26, vars: 5, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-6"], [1, "col-12"]], template: function ListadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Listado de componentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-formroles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-formayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-formturnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesFormComponent"], _ayuda_component__WEBPACK_IMPORTED_MODULE_5__["AyudaFormComponent"], _turnos_component__WEBPACK_IMPORTED_MODULE_6__["TurnosFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listados',
                templateUrl: './listados.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/formularios/roles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/formularios/roles.component.ts ***!
  \******************************************************/
/*! exports provided: RolesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesFormComponent", function() { return RolesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin-servicio.service */ "./src/app/services/admin-servicio.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function RolesFormComponent_tr_22_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_tr_22_span_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305); const rol_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r303.eliminarrol(rol_r301, ctx_r303.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesFormComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RolesFormComponent_tr_22_span_8_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r301 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r301.rol_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r301.rol_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r301.roldescripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rol_r301.id_rol != 8 && rol_r301.id_rol != 7 && rol_r301.id_rol != 6 && rol_r301.id_rol != 5 && rol_r301.id_rol != 4 && rol_r301.id_rol != 3 && rol_r301.id_rol != 2 && rol_r301.id_rol != 1);
} }
function RolesFormComponent_ng_template_23_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rolarray_r312 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rolarray_r312.rol_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", rolarray_r312.rol_level, " - ", rolarray_r312.roldescripcion, " ");
} }
function RolesFormComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nuevo Rol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_ng_template_23_Template_button_click_3_listener() { const modal_r306 = ctx.$implicit; return modal_r306.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r314.datosformulario.id_persona_log = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Asigne un nombre al Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r316.datosformulario.rol_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Seleccione el nivel de acceso de este nuevo rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r317.datosformulario.rol_level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Seleccione nivel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RolesFormComponent_ng_template_23_option_21_Template, 2, 3, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Breve descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_textarea_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r318.datosformulario.roldescripcion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_ng_template_23_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315); const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r319.guardarNuevoRol(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " A\u00F1adir Rol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r300.datosformulario.id_persona_log);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r300.datosformulario.rol_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r300.datosformulario.rol_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r300.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r300.datosformulario.roldescripcion);
} }
class RolesFormComponent {
    constructor(httpClient, modalService, adminService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.adminService = adminService;
        this.roles = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.closeResult = '';
        this.datosformulario = {
            id_persona_log: localStorage.getItem('id_persona'),
            rol_level: null,
            rol_name: null,
            roldescripcion: null
        };
        roldescripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10));
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
    }
    ngOnInit() {
    }
    recarga() {
        location.reload();
    }
    //abrir modal
    openroles(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    guardarNuevoRol() {
        if (this.datosformulario.rol_name == null || this.datosformulario.rol_level == null || this.datosformulario.roldescripcion == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: 'Debe seleccionar un rol, describirlo brevemente y nombrarlo!',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            let peticion;
            peticion = this.adminService.guardarRol(this.datosformulario);
            peticion.subscribe(respuesta => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: this.datosformulario.rol_name,
                    text: 'Nuevo rol creado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    eliminarrol(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `WARNING!! ¿Desea elimina este rol?`,
            text: 'Confirme si desea borrar el rol. Tenga en cuenta que todas las tareas o registros que haya creado bajo este rol quedarán sin rol asignado',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                this.datosborrado = JSON.stringify({ "id_rol": registro.id_rol });
                this.adminService.deleteRol(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: registro.id_rol,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
}
RolesFormComponent.ɵfac = function RolesFormComponent_Factory(t) { return new (t || RolesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"])); };
RolesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesFormComponent, selectors: [["app-formroles"]], decls: 25, vars: 1, consts: [[1, "rol"], [1, "col-12", "alert", "bg-dark", "text-white"], [1, "row"], [1, "col-9"], [1, "col-3", "text-right"], ["alt", "A\u00F1adir rol", "title", "A\u00F1adir rol", 1, "altaseguimientow", 3, "click"], [1, "fa", "fa-plus", "fa-1"], [1, "col-12", "alert", "p-0", "m-0"], [1, "table"], [4, "ngFor", "ngForOf"], ["content", ""], [4, "ngIf"], ["alt", "Eliminar rol", "title", "Eliminar rol", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "rol_name"], ["name", "rol_name", "type", "text", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["rol_name", "ngModel"], [1, "input-group"], ["required", "", "name", "rol_level", "placeholder", "Seleccione nivel", 1, "form-control", "form-control-sm", "mb-2", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["rol_level", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "2", "required", "", "maxlength", "45", "name", "roldescripcion", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["roldescripcion", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"], [3, "value"]], template: function RolesFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Roles - Cree o edite roles con nivel de acceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r320); const _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.openroles(_r299); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nivel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RolesFormComponent_tr_22_Template, 9, 4, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RolesFormComponent_ng_template_23_Template, 30, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formroles',
                templateUrl: './roles.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/formularios/turnos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/formularios/turnos.component.ts ***!
  \*******************************************************/
/*! exports provided: TurnosFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnosFormComponent", function() { return TurnosFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin-servicio.service */ "./src/app/services/admin-servicio.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");














function TurnosFormComponent_tr_26_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_tr_26_span_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328); const turno_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r326.eliminarturno(turno_r324, ctx_r326.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TurnosFormComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TurnosFormComponent_tr_26_span_12_Template, 3, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turno_r324 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](turno_r324.rol_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](turno_r324.turno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](turno_r324.tipo_turno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](turno_r324.horainicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](turno_r324.horafin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", turno_r324.id_turno > 34);
} }
function TurnosFormComponent_ng_template_28_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rolarray_r339 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rolarray_r339.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rolarray_r339.rol_name, " ");
} }
function TurnosFormComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nuevo Rol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_ng_template_28_Template_button_click_3_listener() { const modal_r329 = ctx.$implicit; return modal_r329.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r341.datosformularioturno.id_persona_log = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Asigne un nombre al Turno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r343.datosformularioturno.turno = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Asigne un rol al turno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r344.datosformularioturno.id_rol = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Seleccione rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TurnosFormComponent_ng_template_28_option_21_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Asigne un tipo de turno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_select_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r345.datosformularioturno.tipo_turno = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Seleccione tipo turno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "entre semana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "fin semana");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Hora inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r346.datosformularioturno.horainicio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-material-timepicker", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hora fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r347.datosformularioturno.horafin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ngx-material-timepicker", 36, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_ng_template_28_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r348.guardarNuevoTurno(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " A\u00F1adir Turno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    const ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r323.datosformularioturno.id_persona_log);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r323.datosformularioturno.turno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r323.datosformularioturno.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r323.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r323.datosformularioturno.tipo_turno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r323.datosformularioturno.horainicio)("ngxTimepicker", _r336)("format", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minutesGap", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r323.datosformularioturno.horafin)("ngxTimepicker", _r338)("format", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minutesGap", 15);
} }
class TurnosFormComponent {
    constructor(httpClient, modalService, adminService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.adminService = adminService;
        this.turnos = [];
        this.roles = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.closeResult = '';
        this.datosformularioturno = {
            id_persona_log: localStorage.getItem('id_persona'),
            horainicio: null,
            horafin: null,
            turno: null,
            tipo_turno: null,
            turno_horario: null,
            id_rol: null,
            rol_name: null
        };
        httpClient.get(this.PHP_API_SERVER + '/ajax/turnos_read.php').subscribe(result => {
            this.turnos = result;
        }, error => console.error(error));
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
    }
    ngOnInit() {
    }
    recarga() {
        location.reload();
    }
    //abrir modal
    openturnos(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    guardarNuevoTurno() {
        if (this.datosformularioturno.tipo_turno == null ||
            this.datosformularioturno.turno == null ||
            this.datosformularioturno.horafin == null ||
            this.datosformularioturno.horainicio == null ||
            this.datosformularioturno.id_rol == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: 'Debe completar los campos!',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            //si el campo que recibo es hora...
            //...valido su formato
            var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            var horaResulinicio = patronHora.test(this.datosformularioturno.horainicio);
            var horaResultfin = patronHora.test(this.datosformularioturno.horafin);
            var hoy = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd ', 'es');
            var int = hoy + " " + this.datosformularioturno.horainicio;
            var inicio = Date.parse(int);
            var fnt = hoy + " " + this.datosformularioturno.horafin;
            var fin = Date.parse(fnt);
            if (horaResulinicio == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Revise los datos',
                    text: 'El campo "hora inicio" debe de cumplir con los requerimientos!!',
                    icon: 'error',
                });
                this.ngOnInit();
            }
            else if (horaResultfin == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Revise los datos',
                    text: 'El campo "hora fin" debe de cumplir con los requerimientos!!',
                    icon: 'error',
                });
                this.ngOnInit();
            }
            else if (inicio > fin) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Revise los datos',
                    text: 'La hora de inicio n opuede ser posterior a la hora final',
                    icon: 'error',
                });
                this.ngOnInit();
            }
            else {
                let peticion;
                peticion = this.adminService.guardarTurno(this.datosformularioturno);
                peticion.subscribe(respuesta => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: this.datosformularioturno.turno,
                        text: 'Nuevo turno creado',
                        icon: 'success',
                        showConfirmButton: false
                    }), this.recarga();
                });
            }
        }
    }
    eliminarturno(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `WARNING!! ¿Desea elimina este rol?`,
            text: 'Confirme si desea borrar el turno. Tenga en cuenta que todas las tareas o registros que haya creado bajo este turno quedarán sin turno asignado',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                this.datosborradoturno = JSON.stringify({ "id_turno": registro.id_turno });
                this.adminService.deleteTurno(this.datosborradoturno).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: registro.id_turno,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
}
TurnosFormComponent.ɵfac = function TurnosFormComponent_Factory(t) { return new (t || TurnosFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"])); };
TurnosFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurnosFormComponent, selectors: [["app-formturnos"]], decls: 30, vars: 1, consts: [[1, "rol"], [1, "col-12", "alert", "bg-dark", "text-white"], [1, "row"], [1, "col-9"], [1, "col-3", "text-right"], ["alt", "A\u00F1adir turno", "title", "A\u00F1adir turno", 1, "altaseguimientow", 3, "click"], [1, "fa", "fa-plus", "fa-1"], [1, "col-12", "alert", "p-0", "m-0"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "comod"], ["content", ""], [4, "ngIf"], ["alt", "Eliminar Turno", "title", "Eliminar Turno", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["name", "turno", "type", "text", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["turno", "ngModel"], [1, "input-group"], ["required", "", "name", "id_rol", "placeholder", "Seleccione rol", 1, "form-control", "form-control-sm", "mb-2", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "name", "tipo_turno", "placeholder", "Seleccione tipo de turno", 1, "form-control", "form-control-sm", "mb-2", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["tipo_turno", "ngModel"], ["value", "entre semana"], ["value", "fin semana"], ["name", "horainicio", "type", "text", "id", "reloj", "placeholder", "00:00", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "minlength", "5", "maxlength", "5", "readonly", "", 1, "form-control", "mb-2", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["horainicio", "ngModel"], [3, "minutesGap"], ["fullTime", ""], ["name", "horafin", "type", "text", "id", "reloj", "placeholder", "00:00", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "minlength", "5", "maxlength", "5", "readonly", "", 1, "form-control", "mb-2", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["horafin", "ngModel"], ["fullTimeFin", ""], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"], [3, "value"]], template: function TurnosFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Turnos - A\u00F1ada o edite componentes de turnos para determinados roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r349); const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx.openturnos(_r322); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre Turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hora inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hora fin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TurnosFormComponent_tr_26_Template, 13, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TurnosFormComponent_ng_template_28_Template, 48, 15, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.turnos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__["NgxMaterialTimepickerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnosFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formturnos',
                templateUrl: './turnos.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/historico.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/historico.component.ts ***!
  \**********************************************/
/*! exports provided: HistoricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoComponent", function() { return HistoricoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _services_historico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/historico.service */ "./src/app/services/historico.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




















function HistoricoComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r143.id_log);
} }
function HistoricoComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const value_r145 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, value_r145, 0, 90), " ");
} }
function HistoricoComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const value_r148 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, value_r148, 0, 90), " ");
} }
function HistoricoComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r151 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r151, " ");
} }
function HistoricoComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const value_r155 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r155, " ");
} }
const _c0 = function (a1) { return ["/detallehistorico", a1]; };
function HistoricoComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r156 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r156.id_log));
} }
const _c1 = function () { return ["/", "home"]; };
class HistoricoComponent {
    constructor(httpClient, historicoService) {
        this.httpClient = httpClient;
        this.historicoService = historicoService;
        this.personas = [];
        this.issue = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Issue"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_log: null,
            fecha: null,
            tarea: null,
            issueg: null,
            descripcion_accion: null,
            hour: null,
            estatus: null,
            status: null,
            observaciones: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.fetch(data => {
            // cache
            this.temp = [...data];
            this.rows = data;
        });
    }
    //el ngoninit nos servira para recargar en caso de error de validacion
    ngOnInit() {
        this.fetch(data => {
            this.temp = [...data];
            this.rows = data;
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    //cargamos el listado
    fetch(cb) {
        if (cb) {
            const req = new XMLHttpRequest();
            req.open('GET', `${this.PHP_API_SERVER}/ajax/read_historico.php`);
            req.onload = () => {
                cb(JSON.parse(req.response));
                console.log(JSON.parse(req.response));
            };
            req.send();
        }
    }
    //eliminar registro      
    borrarRegistro(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `¿Desea borrar el registro histórico ${registro.tarea}`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                this.datosborrado = JSON.stringify({ "tarea": registro.tarea, "id_tarea": registro.id_tarea });
                this.historicoService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: registro.tarea,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
    //actualizacion filtro busqueda
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(function (d) {
            return d.tarea.toLowerCase().indexOf(val) !== -1 || d.fecha.toLowerCase().indexOf(val) !== -1 || d.nombres.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // actualizamos las rows
        this.rows = temp;
        // Cuando cambie el filtro, regresa a la primera página.
        this.table.offset = 0;
    }
}
HistoricoComponent.ɵfac = function HistoricoComponent_Factory(t) { return new (t || HistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"])); };
HistoricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoricoComponent, selectors: [["app-historico"]], viewQuery: function HistoricoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 41, vars: 20, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-6"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-6", "text-right"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "id_log", 3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Fecha", 3, "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Tarea", 3, "maxWidth"], ["name", "Nombres", 3, "maxWidth"], ["name", "Descripcion", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [1, "text-center"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-eye"]], template: function HistoricoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HistoricoComponent_Template_input_keyup_22_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngx-datatable", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngx-datatable-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HistoricoComponent_ng_template_29_Template, 2, 1, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HistoricoComponent_ng_template_31_Template, 2, 5, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HistoricoComponent_ng_template_33_Template, 2, 5, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HistoricoComponent_ng_template_35_Template, 1, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HistoricoComponent_ng_template_37_Template, 1, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HistoricoComponent_ng_template_39_Template, 5, 3, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 13, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Historial ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 15, "txtRegistros"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 17, "txtFiltrarRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("limit", 15)("columnMode", "force")("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 1010);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historico',
                templateUrl: './historico.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/historicomini.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/historicomini.component.ts ***!
  \**************************************************/
/*! exports provided: HistoricoMiniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoMiniComponent", function() { return HistoricoMiniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _services_historico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/historico.service */ "./src/app/services/historico.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function HistoricoMiniComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r535 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("\n", row_r535.id_log, "\n", row_r535.fecha, "\n", row_r535.tarea, "\n", row_r535.nombres, "\n", row_r535.descripcion, "\n");
} }
class HistoricoMiniComponent {
    constructor(httpClient, historicoService) {
        this.httpClient = httpClient;
        this.historicoService = historicoService;
        this.personas = [];
        this.issue = new _models_issue__WEBPACK_IMPORTED_MODULE_2__["Issue"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_log: null,
            fecha: null,
            tarea: null,
            issueg: null,
            descripcion_accion: null,
            hour: null,
            estatus: null,
            status: null,
            observaciones: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.fetch(data => {
            // cache
            this.temp = [...data];
            this.rows = data;
        });
    }
    //el ngoninit nos servira para recargar en caso de error de validacion
    ngOnInit() {
        this.fetch(data => {
            this.temp = [...data];
            this.rows = data;
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    //cargamos el listado
    fetch(cb) {
        if (cb) {
            const req = new XMLHttpRequest();
            req.open('GET', `${this.PHP_API_SERVER}/ajax/read_historico.php`);
            req.onload = () => {
                cb(JSON.parse(req.response));
            };
            req.send();
        }
    }
    //eliminar registro      
    borrarRegistro(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `¿Desea borrar el registro histórico ${registro.tarea}`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                this.datosborrado = JSON.stringify({ "tarea": registro.tarea, "id_tarea": registro.id_tarea });
                this.historicoService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: registro.tarea,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            }
        });
    }
    //actualizacion filtro busqueda
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(function (d) {
            return d.tarea.toLowerCase().indexOf(val) !== -1 || d.fecha.toLowerCase().indexOf(val) !== -1 || d.nombres.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // actualizamos las rows
        this.rows = temp;
        // Cuando cambie el filtro, regresa a la primera página.
        this.table.offset = 0;
    }
}
HistoricoMiniComponent.ɵfac = function HistoricoMiniComponent_Factory(t) { return new (t || HistoricoMiniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"])); };
HistoricoMiniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoricoMiniComponent, selectors: [["app-historicomini"]], viewQuery: function HistoricoMiniComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function HistoricoMiniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HistoricoMiniComponent_li_0_Template, 2, 5, "li", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoMiniComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-historicomini',
                templateUrl: './historicomini.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/home.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home.component.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _turnos_homeget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./turnos/homeget.component */ "./src/app/pages/turnos/homeget.component.ts");
/* harmony import */ var _turnos_elegir_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./turnos/elegir.component */ "./src/app/pages/turnos/elegir.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-apphome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-elegirturno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/", "home"]; };
class HomeComponent {
    constructor(registroRoleService) {
        this.registroRoleService = registroRoleService;
        this.registroroleperson = new _models_personas__WEBPACK_IMPORTED_MODULE_2__["Personas"]();
    }
    ngOnInit() {
        //verificar  id_usuario y id_rol
        const id_persona = localStorage.getItem('id_persona');
        this.registroRoleService.getPerson(id_persona)
            .subscribe((respuesta) => {
            this.registroroleperson = respuesta;
            this.registroroleperson.id_persona = id_persona;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_1__["ApiPersonas"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-app"]], decls: 21, vars: 10, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "txtRegistros"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registroroleperson.id_rol === "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registroroleperson.id_rol != "8");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _turnos_homeget_component__WEBPACK_IMPORTED_MODULE_8__["HomeGetComponent"], _turnos_elegir_component__WEBPACK_IMPORTED_MODULE_9__["ElegirTurno"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app',
                templateUrl: './home.component.html'
            }]
    }], function () { return [{ type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_1__["ApiPersonas"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/identificacion/identificacion.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/identificacion/identificacion.component.ts ***!
  \******************************************************************/
/*! exports provided: IdentificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificacionComponent", function() { return IdentificacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class IdentificacionComponent {
    constructor(wsService, router) {
        this.wsService = wsService;
        this.router = router;
        this.nombre = '';
    }
    ngOnInit() {
    }
    ingresar() {
        this.wsService.loginWS(this.nombre)
            .then(() => {
            this.router.navigateByUrl('/mensajes');
        });
    }
}
IdentificacionComponent.ɵfac = function IdentificacionComponent_Factory(t) { return new (t || IdentificacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
IdentificacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdentificacionComponent, selectors: [["app-identificacion"]], decls: 9, vars: 2, consts: [[1, "row", "justify-content-center"], [1, "col-9"], [1, "p-4", 3, "ngSubmit"], ["type", "text", "name", "nombre", "placeholder", "nombre usuario", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-block", "mt-3", 3, "disabled"]], template: function IdentificacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IdentificacionComponent_Template_form_ngSubmit_5_listener() { return ctx.ingresar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IdentificacionComponent_Template_input_ngModelChange_6_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nombre.trim().length === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentificacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-identificacion',
                templateUrl: './identificacion.component.html'
            }]
    }], function () { return [{ type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dataservice.service */ "./src/app/services/dataservice.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/websocket.service */ "./src/app/services/websocket.service.ts");












class LoginComponent {
    constructor(wsService, fb, dataService, router) {
        this.wsService = wsService;
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.mail = '';
        this.angForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.wsService.loginWS(this.mail)
            .then(() => {
            // this.router.navigateByUrl('/mensajes');
        });
    }
    ngOnInit() {
        if (localStorage.removeItem('id_persona') != null) {
            const keysToRemove = ["token", "id_persona", "usuario", "id_rol"];
            for (const key of keysToRemove) {
                localStorage.removeItem(key);
            }
            this.router.navigateByUrl('');
        }
    }
    postdata(angForm) {
        var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var emailResult = patronEmail.test(angForm.value.email);
        if (emailResult == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'El campo E-mail debe cumplir con el formato adecuado',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            // this.datosphp = JSON.stringify({ "email": angForm.value.email, "password": angForm.value.password });
            this.dataService.userlogin(angForm.value.email, angForm.value.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                .subscribe(data => {
                const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
                this.router.navigate([redirect]);
            }, error => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'El campo E-mail o el password son erróneos. revise los datos.',
                    icon: 'error',
                    showConfirmButton: true
                });
            });
        }
    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 1, consts: [[1, "limiter", "animated", "fadeInLeft"], [1, "container-login100"], [1, "wrap-login100", "p-t-50", "p-b-90"], ["autocomplete", "off", 1, "login100-form", "validate-form", "flex-sb", "flex-w", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "p-b-51"], [1, "wrap-input100", "m-b-16"], ["type", "email", "name", "email", "formControlName", "email", "autocomplete", "off", "required", "", "placeholder", "E-mail", 1, "input100"], [1, "focus-input100"], ["type", "password", "name", "Password", "formControlName", "password", "autocomplete", "off", "placeholder", "Password", "required", "", "minlength", "6", 1, "input100"], [1, "container-login100-form-btn", "m-t-17"], ["type", "submit", 1, "login100-form-btn"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.postdata(ctx.angForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/mensajes/mensajes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/mensajes/mensajes.component.ts ***!
  \******************************************************/
/*! exports provided: MensajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesComponent", function() { return MensajesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");





class MensajesComponent {
    constructor(wsService) {
        this.wsService = wsService;
    }
    ngOnInit() {
    }
}
MensajesComponent.ɵfac = function MensajesComponent_Factory(t) { return new (t || MensajesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"])); };
MensajesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MensajesComponent, selectors: [["app-mensajes"]], decls: 3, vars: 0, consts: [[1, "row"], [1, "col-12"]], template: function MensajesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MensajesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mensajes',
                templateUrl: './mensajes.component.html'
            }]
    }], function () { return [{ type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/perfil.component.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/perfil.component.ts ***!
  \*******************************************/
/*! exports provided: PerfilPersona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPersona", function() { return PerfilPersona; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/imagen/modimagen.component */ "./src/app/components/imagen/modimagen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





















function PerfilPersona_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r176.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r176.rol_name, " ");
} }
const _c0 = function () { return ["/", "home"]; };
const _c1 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class PerfilPersona {
    constructor(httpClient, registroService, activatedRoute, router, modalService) {
        this.httpClient = httpClient;
        this.registroService = registroService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.registro = new _models_personas__WEBPACK_IMPORTED_MODULE_7__["Personas"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.personas = [];
        this.roles = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_persona: this.activatedRoute.snapshot.paramMap.get('id_persona'),
            id_persona_log: localStorage.getItem('id_persona'),
            nombres: null,
            telefono: null,
            email: null,
            direccion: null,
            registrado: null,
            id_rol: null,
            password: null,
            imagen: null
        };
        //cargo los roles para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
    }
    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        const id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
        this.registroService.getPerson(id_persona)
            .subscribe((respuesta) => {
            this.registro = respuesta;
            this.registro.id_persona = id_persona;
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    recarga() {
        location.reload();
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    //alta de registro
    altaRegistro() {
        //si los campos obligatorios nos llegan vacios
        if (this.datoregistro.nombres == null || this.datoregistro.email == null || this.datoregistro.id_rol == null || this.datoregistro.password == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'Los campos obligatorios no pueden estar vacíos!!',
                icon: 'error',
            });
        }
        else {
            //enviamos el array a la funcions del server
            this.registroService.altaRegistro(this.datoregistro).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: this.datoregistro.nombres,
                    text: 'Registro añadido',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    guardarregistro() {
        console.log(this.registro);
        //eliminamos del local storage el id_rol siempre y cuando lo hayamos cambiado
        //y lo volvemos a cambiar por el nuevo
        // if(this.registro.id_rol!=''){
        //   localStorage.removeItem('id_rol');
        //   localStorage.setItem('id_rol',this.registro.id_rol);
        // }
        if (this.registro.nombres == '' ||
            this.registro.telefono == '' ||
            this.registro.email == '' ||
            this.registro.direccion == '' ||
            this.registro.id_rol == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Los campos obligatorios no pueden quedar vacíos',
                icon: 'error',
                showConfirmButton: true
            });
        }
        else {
            //validacion email      
            var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            var emailResult = patronEmail.test(this.registro.email);
            if (emailResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'El campo E-mail debe cumplir con el formato adecuado',
                    icon: 'error',
                    showConfirmButton: true
                });
            }
            else
                // validacion password
                // al menos 1 número, una minúscula y una mayuscula
                // al menos 6 carácteres
                var patronPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            var passwordResult = patronPassword.test(this.registro.password);
            if (passwordResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'El campo Password debe tener al menos 1 número, una minúscula y una mayúscula y como mínimo 6 carácteres',
                    icon: 'error',
                    showConfirmButton: true
                });
            }
            else {
                let peticion;
                peticion = this.registroService.actualizarRegistro(this.registro);
                peticion.subscribe(respuesta => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: this.registro.nombres,
                        text: 'Registro modificado',
                        icon: 'success',
                        showConfirmButton: false
                    }), this.recarga();
                });
            }
        }
    }
}
PerfilPersona.ɵfac = function PerfilPersona_Factory(t) { return new (t || PerfilPersona)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
PerfilPersona.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilPersona, selectors: [["app-perfil"]], decls: 85, vars: 71, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-2", "alturaminima", "mb-5"], [1, "col-md-10", "alturaminima", "mb-5"], [1, "form-group"], ["for", "nombres"], ["required", "", "required", "", "minlength", "4", "name", "nombres", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["nombres", "ngModel"], [1, "row"], [1, "col-md-4"], ["for", "email"], ["required", "", "name", "email", "type", "email", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "email", "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], [1, "input-group"], ["required", "", "required", "", "name", "password", "type", "password", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "type", "ngModelChange"], ["password", "ngModel"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], ["for", "telefono"], ["minlength", "9", "name", "telefono", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["telefono", "ngModel"], [1, "col-md-6"], ["for", "direccion"], ["name", "direccion", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "id_rol"], ["required", "", "name", "id_rol", "disabled", "", "readonly", "", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [3, "value"]], template: function PerfilPersona_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-modimagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_31_listener($event) { return ctx.registro.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_40_listener($event) { return ctx.registro.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_49_listener($event) { return ctx.registro.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilPersona_Template_i_click_54_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_60_listener($event) { return ctx.registro.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_69_listener($event) { return ctx.registro.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_select_ngModelChange_77_listener($event) { return ctx.registro.id_rol = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, PerfilPersona_option_79_Template, 2, 2, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilPersona_Template_button_click_81_listener() { return ctx.guardarregistro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "txtRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](67, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.registro.nombres, " - #", ctx.registro.id_persona, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 38, "txtCreado"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 40, ctx.registro.registrado, "dd/MM/y HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 43, "txtNombres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r169.invalid && _r169.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 45, "txtNombres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 47, "txtEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r170.invalid && _r170.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 49, "txtEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", true)("ngModel", ctx.registro.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 51, "txtPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r171.invalid && _r171.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 53, "txtPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.password)("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](68, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 55, "txtTelefono"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 57, "txt9digitos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 59, "txtDireccion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 61, "txtDireccion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 63, "txtRol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r174.invalid && _r174.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_rol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 65, "txtModificar"), " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__["ModimagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilPersona, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil',
                templateUrl: './perfil.component.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/personas.pages.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/personas.pages.ts ***!
  \*****************************************/
/*! exports provided: PersonasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonasPage", function() { return PersonasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





















function PersonasPage_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r57 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r57.id_persona);
} }
function PersonasPage_ng_template_28_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_28_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const rowIndex_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r63.editing[rowIndex_r58 + "-nombres"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, value_r59, 0, 90), " ");
} }
function PersonasPage_ng_template_28_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PersonasPage_ng_template_28_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const rowIndex_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.updateValue($event, "nombres", rowIndex_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r59 = ctx_r70.value;
    const row_r60 = ctx_r70.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r59)("title", row_r60.id_persona);
} }
function PersonasPage_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_28_span_0_Template, 4, 8, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_28_input_1_Template, 1, 2, "input", 49);
} if (rf & 2) {
    const rowIndex_r58 = ctx.rowIndex;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r43.editing[rowIndex_r58 + "-nombres"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.editing[rowIndex_r58 + "-nombres"]);
} }
function PersonasPage_ng_template_30_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_30_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const rowIndex_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r76.editing[rowIndex_r71 + "-telefono"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", value_r72, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, value_r72, 0, 90));
} }
function PersonasPage_ng_template_30_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PersonasPage_ng_template_30_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const rowIndex_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.updateValue($event, "telefono", rowIndex_r71); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r72 = ctx_r83.value;
    const row_r73 = ctx_r83.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r72)("title", row_r73.id_persona);
} }
function PersonasPage_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_30_span_0_Template, 5, 9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_30_input_1_Template, 1, 2, "input", 49);
} if (rf & 2) {
    const rowIndex_r71 = ctx.rowIndex;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r44.editing[rowIndex_r71 + "-telefono"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.editing[rowIndex_r71 + "-telefono"]);
} }
function PersonasPage_ng_template_32_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_32_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r89.editing[rowIndex_r84 + "-email"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", value_r85, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, value_r85, 0, 90), "");
} }
function PersonasPage_ng_template_32_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PersonasPage_ng_template_32_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r93.updateValue($event, "email", rowIndex_r84); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r85 = ctx_r96.value;
    const row_r86 = ctx_r96.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r85)("title", row_r86.id_persona);
} }
function PersonasPage_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_32_span_0_Template, 5, 9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_32_input_1_Template, 1, 2, "input", 49);
} if (rf & 2) {
    const rowIndex_r84 = ctx.rowIndex;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.editing[rowIndex_r84 + "-email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.editing[rowIndex_r84 + "-email"]);
} }
function PersonasPage_ng_template_34_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_34_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r103.editing[rowIndex_r97 + "-id_rol"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r99, " ");
} }
function PersonasPage_ng_template_34_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r108.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r108.rol_name, " ");
} }
function PersonasPage_ng_template_34_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PersonasPage_ng_template_34_select_3_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r109.editing[rowIndex_r97 + "-id_rol"] = false); })("change", function PersonasPage_ng_template_34_select_3_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.updateValue($event, "id_rol", rowIndex_r97); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_34_select_3_option_1_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r99 = ctx_r114.value;
    const row_r98 = ctx_r114.row;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r99)("title", row_r98.id_persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r102.roles);
} }
function PersonasPage_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_34_span_0_Template, 3, 4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PersonasPage_ng_template_34_select_3_Template, 2, 3, "select", 55);
} if (rf & 2) {
    const rowIndex_r97 = ctx.rowIndex;
    const row_r98 = ctx.row;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.editing[rowIndex_r97 + "-id_rol"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", row_r98.id_persona);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.editing[rowIndex_r97 + "-id_rol"]);
} }
const _c0 = function (a1) { return ["/detallepersona", a1]; };
function PersonasPage_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonasPage_ng_template_36_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const row_r115 = ctx.row; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.borrarRegistro(row_r115, ctx_r116.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r115.id_persona));
} }
function PersonasPage_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rol_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r118.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r118.rol_name, " ");
} }
const _c1 = function () { return ["/", "home"]; };
class PersonasPage {
    constructor(httpClient, apiService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
        this.roles = [];
        this.personas = [];
        this.issue = new _models_personas__WEBPACK_IMPORTED_MODULE_6__["Personas"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__["Constantes"].API_SERVER; //URL del servicio
        this.dregistro = null;
        this.datoregistro = {
            id_persona: null,
            nombres: null,
            telefono: null,
            email: null,
            direccion: null,
            id_rol: null,
            password: null,
            imagen: null,
            id_persona_log: localStorage.getItem('id_persona')
        };
        this.emailvalida = {
            mailexiste: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"];
        this.fetch(data => {
            // cache
            this.temp = [...data];
            this.rows = data;
        });
        //cargo los roles para los combos select
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(result => {
            this.roles = result;
        }, error => console.error(error));
    }
    //el ngoninit nos servira para recargar en caso de error de validacion
    ngOnInit() {
        this.fetch(data => {
            this.temp = [...data];
            this.rows = data;
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    //cargamos el listado
    fetch(cb) {
        if (cb) {
            const req = new XMLHttpRequest();
            req.open('GET', `${this.PHP_API_SERVER}/ajax/personas_read.php`);
            req.onload = () => {
                cb(JSON.parse(req.response));
            };
            req.send();
        }
    }
    //alta de registro
    altaRegistro() {
        //compruebo que el email no exista (ya se valida también en el servidor en PHP)
        this.apiService.validaEmail(this.datoregistro.email).subscribe((datosMail) => {
            this.emailvalida = datosMail;
            if (this.emailvalida.mailexiste == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: this.datoregistro.email,
                    text: 'El e-mail indicado ya existe, escoja otro',
                    icon: 'error',
                    showConfirmButton: true
                });
            }
            //si los campos obligatorios nos llegan vacios
            else if (this.datoregistro.nombres == null || this.datoregistro.email == null || this.datoregistro.id_rol == null || this.datoregistro.password == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Revise los datos',
                    text: 'Los campos obligatorios no pueden estar vacíos!!',
                    icon: 'error',
                });
            }
            else {
                //enviamos el array a la funcions del server
                this.apiService.altaRegistro(this.datoregistro).subscribe(datos => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: this.datoregistro.nombres,
                        text: 'Registro añadido',
                        icon: 'success',
                        showConfirmButton: false
                    }), this.recarga();
                });
            }
        });
    }
    //actualización campos inline
    updateValue(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        this.campo = cell;
        this.id_persona = event.target.title;
        this.valor = event.target.value;
        this.ever = this.campo, this.id_persona, this.valor;
        this.datos = JSON.stringify({ "campo": this.campo, "id_persona": this.id_persona, "valor": this.valor });
        //validacion del formato email
        var patronEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        var emailResult = patronEmail.test(this.valor);
        // //si el campo que recibo es email...
        if (this.campo == "email") {
            //...valido su formato
            if (emailResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Revise los datos',
                    text: 'El campo "email" debe de cumplir con los requerimientos!!',
                    icon: 'error',
                });
                this.ngOnInit();
            }
            // else {
            //   Swal.fire({
            //     text: 'Registro actualizado',
            //     icon: 'success',  
            //     showConfirmButton : false
            //   })
            // }
        }
        //el campo que recibo es tarea pero es menor de 3 caracteres
        else if (this.campo == "nombres" && this.valor.length < 3) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "nombres" debe contener como mínimo tres carácteres!!',
                icon: 'error',
            });
            this.ngOnInit();
        }
        else if (this.campo == "telefono" && this.valor.length < 9) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "telefono" debe contener nueve carácteres!!',
                icon: 'error',
            });
            this.ngOnInit();
        }
        else {
            //todo Ok llamo al servicio
            this.apiService.modiRegistro(this.datos).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Registro actualizado',
                    icon: 'success',
                    showConfirmButton: true
                });
            });
        }
    }
    //eliminar registro      
    borrarRegistro(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: `¿Desea borrar el registro ${registro.nombres}`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                const id_persona_log = localStorage.getItem('id_persona');
                this.datosborrado = JSON.stringify({ "id_persona_log": id_persona_log, "nombres": registro.nombres, "id_persona": registro.id_persona });
                this.apiService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: registro.nombres,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                })
                    , this.recarga();
            }
        });
    }
    //actualizacion filtro busqueda
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(function (d) {
            return d.nombres.toLowerCase().indexOf(val) !== -1 || d.telefono.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // actualizamos las rows
        this.rows = temp;
        // Cuando cambie el filtro, regresa a la primera página.
        this.table.offset = 0;
    }
}
PersonasPage.ɵfac = function PersonasPage_Factory(t) { return new (t || PersonasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_5__["ApiPersonas"])); };
PersonasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonasPage, selectors: [["app-personas"]], viewQuery: function PersonasPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 86, vars: 72, consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-8", "alturaminima", "mb-5"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "id_persona", 3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Nombres", 3, "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Telefono", 3, "maxWidth"], ["name", "Email", 3, "maxWidth"], ["name", "Rol", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [1, "col-md-4", "pt-5"], [1, "form-group"], ["for", "nombres"], ["required", "", "required", "", "minlength", "4", "name", "nombres", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["nombres", "ngModel"], ["for", "telefono"], ["minlength", "9", "name", "telefono", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["telefono", "ngModel"], ["for", "email"], ["required", "", "name", "email", "type", "email", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "email", "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "direccion"], ["name", "direccion", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "password"], ["required", "", "required", "", "name", "password", "type", "password", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "id_rol"], ["required", "", "name", "id_rol", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [1, "text-center"], [3, "title", "dblclick", 4, "ngIf"], ["required", "", "autofocus", "", "type", "text", "class", "form-control", 3, "value", "title", "keyup.enter", 4, "ngIf"], [3, "title", "dblclick"], ["required", "", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "keyup.enter"], [3, "href"], ["type", "hidden", 3, "value"], ["varId", ""], ["class", "form-control", "name", "id_rol", 3, "value", "title", "blur", "change", 4, "ngIf"], ["name", "id_rol", 1, "form-control", 3, "value", "title", "blur", "change"], [3, "value"], [1, "row"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-warning", "botonsizes", 3, "click"], [1, "fa", "fa-trash"]], template: function PersonasPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PersonasPage_Template_input_keyup_20_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ngx-datatable", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PersonasPage_ng_template_26_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PersonasPage_ng_template_28_Template, 2, 2, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-datatable-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PersonasPage_ng_template_30_Template, 2, 2, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PersonasPage_ng_template_32_Template, 2, 2, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PersonasPage_ng_template_34_Template, 4, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PersonasPage_ng_template_36_Template, 7, 3, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_43_listener($event) { return ctx.datoregistro.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_50_listener($event) { return ctx.datoregistro.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_57_listener($event) { return ctx.datoregistro.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_64_listener($event) { return ctx.datoregistro.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_71_listener($event) { return ctx.datoregistro.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_select_ngModelChange_78_listener($event) { return ctx.datoregistro.id_rol = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PersonasPage_option_80_Template, 2, 2, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonasPage_Template_button_click_82_listener() { return ctx.altaRegistro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 41, "txtPersonas"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](71, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 43, "txtPersonas"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 45, "txtFiltrarRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("limit", 15)("columnMode", "force")("rows", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 1810);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 47, "txtNombres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r48.invalid && _r48.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 49, "txtNombres"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 51, "txtTelefono"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 53, "txt9digitos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 55, "txtEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r50.invalid && _r50.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 57, "txtEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("email", true)("ngModel", ctx.datoregistro.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 59, "txtDireccion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 61, "txtDireccion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 63, "txtPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r52.invalid && _r52.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 65, "txtPassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 67, "txtRol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r53.invalid && _r53.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.id_rol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 69, "txtAgregar"), " ");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personas',
                templateUrl: './personas.pages.html'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_5__["ApiPersonas"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/turnos/elegir.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/turnos/elegir.component.ts ***!
  \**************************************************/
/*! exports provided: ElegirTurno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElegirTurno", function() { return ElegirTurno; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/apiregistros.service */ "./src/app/services/apiregistros.service.ts");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/detalle.service */ "./src/app/services/detalle.service.ts");
/* harmony import */ var _models_turnos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/turnos */ "./src/app/models/turnos.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_turnos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/turnos.service */ "./src/app/services/turnos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



























function ElegirTurno_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listat_r211 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", listat_r211.id_turno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", listat_r211.turno, " - ", listat_r211.tipo_turno, " - ", listat_r211.horainicio, " ", listat_r211.horafin, "");
} }
const _c0 = function () { return ["/", "alta"]; };
function ElegirTurno_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ElegirTurno_ng_template_30_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r215.id_tarea, " ");
} }
function ElegirTurno_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElegirTurno_ng_template_30_div_0_Template, 2, 1, "div", 31);
} if (rf & 2) {
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.registroroleperson.id_rol == "8");
} }
function ElegirTurno_ng_template_32_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ElegirTurno_ng_template_32_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224); const rowIndex_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r223.editing[rowIndex_r218 + "-tarea"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, value_r219, 0, 90), " ");
} }
function ElegirTurno_ng_template_32_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ElegirTurno_ng_template_32_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228); const rowIndex_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r227.updateValue($event, "tarea", rowIndex_r218); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r219 = ctx_r230.value;
    const row_r220 = ctx_r230.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r219)("title", row_r220.id_tarea);
} }
function ElegirTurno_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElegirTurno_ng_template_32_span_0_Template, 4, 8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElegirTurno_ng_template_32_input_1_Template, 1, 2, "input", 34);
} if (rf & 2) {
    const rowIndex_r218 = ctx.rowIndex;
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r207.editing[rowIndex_r218 + "-tarea"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.editing[rowIndex_r218 + "-tarea"]);
} }
function ElegirTurno_ng_template_34_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ElegirTurno_ng_template_34_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237); const rowIndex_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r236.editing[rowIndex_r231 + "-ibm_hora"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r233.ibm_hora, " ");
} }
function ElegirTurno_ng_template_34_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onError", function ElegirTurno_ng_template_34_input_1_Template_input_onError_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r241); const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r240.myHandleError; })("keyup.enter", function ElegirTurno_ng_template_34_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r241); const rowIndex_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r242.updateValue($event, "ibm_hora", rowIndex_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r232 = ctx_r244.value;
    const row_r233 = ctx_r244.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r232)("title", row_r233.id_tarea);
} }
function ElegirTurno_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElegirTurno_ng_template_34_span_0_Template, 3, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElegirTurno_ng_template_34_input_1_Template, 1, 2, "input", 37);
} if (rf & 2) {
    const rowIndex_r231 = ctx.rowIndex;
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r208.editing[rowIndex_r231 + "-ibm_hora"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r208.editing[rowIndex_r231 + "-ibm_hora"]);
} }
function ElegirTurno_ng_template_36_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ElegirTurno_ng_template_36_span_1_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252); const rowIndex_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r251.editing[rowIndex_r245 + "-estatus"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r247, " ");
} }
function ElegirTurno_ng_template_36_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ElegirTurno_ng_template_36_select_4_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256); const rowIndex_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r255.editing[rowIndex_r245 + "-estatus"] = false); })("change", function ElegirTurno_ng_template_36_select_4_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256); const rowIndex_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r258.updateValue($event, "estatus", rowIndex_r245); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "KO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OK-INC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r247 = ctx_r260.value;
    const row_r246 = ctx_r260.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r247)("title", row_r246.id_tarea);
} }
const _c1 = function (a0, a1, a2) { return { positive: a0, negative: a1, posnegtive: a2 }; };
function ElegirTurno_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElegirTurno_ng_template_36_span_1_Template, 3, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ElegirTurno_ng_template_36_select_4_Template, 7, 2, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r245 = ctx.rowIndex;
    const row_r246 = ctx.row;
    const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, row_r246.estatus == "OK", row_r246.estatus == "KO", row_r246.estatus == "OK-INC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r209.editing[rowIndex_r245 + "-estatus"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", row_r246.id_tarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r209.editing[rowIndex_r245 + "-estatus"]);
} }
const _c2 = function (a1) { return ["/detalle", a1]; };
function ElegirTurno_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElegirTurno_ng_template_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263); const row_r261 = ctx.row; const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r262.duplicar(row_r261, ctx_r262.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElegirTurno_ng_template_38_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263); const row_r261 = ctx.row; const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r264.borrarRegistro(row_r261, ctx_r264.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r261 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, row_r261.tokenid));
} }
class ElegirTurno {
    constructor(turnosService, registroRoleService, translate, httpClient, registroService, apiService) {
        this.turnosService = turnosService;
        this.registroRoleService = registroRoleService;
        this.translate = translate;
        this.httpClient = httpClient;
        this.registroService = registroService;
        this.apiService = apiService;
        this.isSubmitted = false;
        this.turnoValor = localStorage.getItem('valorTurno');
        this.personas = [];
        this.issue = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].API_SERVER; //URL del servicio
        //registroroleperson:Personas = new Personas();
        this.registroroleperson = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        this.dregistro = null;
        this.datoregistro = {
            id_tarea: null,
            rol_name: null,
            tarea: null,
            issueg: null,
            ibm_hora: null,
            hour: null,
            estatus: null,
            status: null,
            observaciones: null
        };
        this.reactiveFormTurnos = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            id_turno: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
            id_persona: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](localStorage.getItem('id_persona')),
        });
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["ColumnMode"];
        this.periodetalle = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        this.my_messages = {
            'emptyMessage': '',
            'totalMessage': ''
        };
        this.turnoestablecido = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        translate.get('Total', { value: 'eeeeeeeeee' })
            .subscribe((res) => this.my_messages.totalMessage = res);
        translate.get('No hay resultados para mostrar', { value: '' })
            .subscribe((res) => this.my_messages.emptyMessage = res);
    }
    //el ngoninit nos servira para recargar en caso de error de validacion
    ngOnInit() {
        this.fetch(data => {
            this.temp = [...data];
            this.rows = data;
        });
        // //verificar  id_usuario y id_rol
        // const id_persona = localStorage.getItem('id_persona');
        // this.registroRoleService.getPerson(id_persona)
        //   .subscribe((respuesta: Personas) => {
        //     this.registroroleperson = respuesta;
        //     this.registroroleperson.id_persona = id_persona;
        //   });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    //cargamos el listado
    fetch(cb) {
        const req = new XMLHttpRequest();
        const id_persona = localStorage.getItem('id_persona');
        //OBTENER EL ULTIMO TURNO DE ESTE USUARIO
        this.registroRoleService.getTurnosbyID(id_persona)
            .subscribe((respuesta) => {
            this.registroroleperson = respuesta;
            this.registroroleperson.id_persona = id_persona;
            //leemos los turnos del rol del usuario actual para mostrarlos en el select combo
            var id_rol;
            if (this.registroroleperson.id_rol == null) {
                var id_rol = localStorage.getItem('id_rol');
            }
            else {
                var id_rol = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].CRND + this.registroroleperson.id_rol + _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].DRND;
            }
            this.registroRoleService.getTurnosReadByRol(id_rol)
                .subscribe((respuesta) => {
                this.listaturnos = respuesta;
            });
            req.open('GET', `${this.PHP_API_SERVER}/ajax/registro_read_by_persona.php?id_persona=${id_persona}`);
            req.onload = () => {
                cb(JSON.parse(req.response));
                console.log(JSON.parse(req.response));
            };
            req.send();
        });
    }
    onSubmit(form) {
        this.isSubmitted = true;
        const valor = JSON.stringify(this.reactiveFormTurnos.value);
        console.log(valor);
        this.turnosService.guardarTurno(valor).subscribe(respuesta => {
            localStorage.removeItem('valorTurno');
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Turno Establecido',
                text: 'El turno ha sido establecido',
                icon: 'success',
                showConfirmButton: false
            }), this.recarga();
        });
    }
    //alta de registro
    altaRegistro() {
        //si los campos obligatorios nos llegan vacios
        if (this.datoregistro.tarea == null || this.datoregistro.ibm_hora == null || this.datoregistro.estatus == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'Los campos no pueden estar vacíos!!',
                icon: 'error',
            });
        }
        else {
            //enviamos el array a la funcions del server
            this.apiService.altaRegistro(this.datoregistro).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.datoregistro.tarea,
                    text: 'Registro añadido',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    //actualización campos inline
    updateValue(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        this.campo = cell;
        this.id_tarea = event.target.title;
        const id_persona = localStorage.getItem('id_persona');
        this.valor = event.target.value;
        this.ever = id_persona, this.campo, this.id_tarea, this.valor;
        this.datos = JSON.stringify({ "id_persona": id_persona, "campo": this.campo, "id_tarea": this.id_tarea, "valor": this.valor });
        //validacion del formato de la hora
        var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        var horaResult = patronHora.test(this.valor);
        //si el campo que recibo es hora...
        if (this.campo == "ibm_hora") {
            //...valido su formato
            if (horaResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Revise los datos',
                    text: 'El campo "hora" debe de cumplir con los requerimientos!!',
                    icon: 'error',
                });
                this.ngOnInit();
            }
            // else {
            //   Swal.fire({
            //     text: 'Registro actualizado',
            //     icon: 'success',  
            //     showConfirmButton : false
            //   })
            // }
        }
        //el campo que recibo es tarea pero es menor de 3 caracteres
        else if (this.campo == "tarea" && this.valor.length < 3) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "tarea" debe contener como mínimo tres carácteres!!',
                icon: 'error',
            });
            this.ngOnInit();
        }
        else {
            //todo Ok llamo al servicio
            this.apiService.modiRegistro(this.datos).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Registro actualizado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    duplicar(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: `¿Desea crear una tarea a partir de esta?`,
            text: 'Confirme si desea proceder',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(orden => {
            if (orden.value) {
                const id_persona = localStorage.getItem('id_persona');
                this.datosclon = JSON.stringify({ "id_persona": id_persona, "id_tarea": registro.id_tarea });
                let peticion;
                peticion = this.registroService.actualizarRegistroNuevaId(this.datosclon);
                peticion.subscribe(respuesta => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: this.id_tarea,
                        text: 'Registro duplicado',
                        icon: 'success',
                        showConfirmButton: true
                    })
                        , this.recarga();
                });
            }
        });
    }
    //eliminar registro      
    borrarRegistro(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: `¿Desea borrar el registro ${registro.tarea}`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                const id_persona = localStorage.getItem('id_persona');
                this.datosborrado = JSON.stringify({ "id_persona": id_persona, "id_tarea": registro.id_tarea });
                this.apiService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: registro.tarea,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                })
                    , this.recarga();
            }
        });
    }
    //actualizacion filtro busqueda
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(function (d) {
            return d.rol_name.toLowerCase().indexOf(val) !== -1 || d.tarea.toLowerCase().indexOf(val) !== -1 || d.ibm_hora.toLowerCase().indexOf(val) !== -1 || d.estatus.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // actualizamos las rows
        this.rows = temp;
        // Cuando cambie el filtro, regresa a la primera página.
        this.table.offset = 0;
    }
}
ElegirTurno.ɵfac = function ElegirTurno_Factory(t) { return new (t || ElegirTurno)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_turnos_service__WEBPACK_IMPORTED_MODULE_12__["TurnosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_10__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
ElegirTurno.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElegirTurno, selectors: [["app-elegirturno"]], viewQuery: function ElegirTurno_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 39, vars: 19, consts: [[1, "row"], [1, "col-6", "text-left"], [1, "upperc"], [1, "col-6", "text-right"], [1, "form-inline", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["type", "hidden", "formControlName", "id_persona", "name", "id_persona", 1, "form-control"], [1, "form-group"], ["formControlName", "id_turno", "name", "id_turno", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-info", "ml-2"], [1, "col-10"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-2", "text-right"], [4, "ngIf"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows", "messages"], ["mydatatable", ""], [3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Tarea", 3, "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "ibm_hora", 3, "maxWidth"], ["name", "Estatus", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [3, "value"], ["alt", "Nuevo registro", "title", "nuevo registro", 1, "btn", "btn-info", "pt4", "btn-circle", "posicionplus", 3, "routerLink"], [1, "fa", "fa-plus", "fa-3"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], [3, "title", "dblclick", 4, "ngIf"], ["required", "", "autofocus", "", "type", "text", "class", "form-control", 3, "value", "title", "keyup.enter", 4, "ngIf"], [3, "title", "dblclick"], ["required", "", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "keyup.enter"], ["required", "", "class", "form-control", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 3, "value", "title", "onError", "keyup.enter", 4, "ngIf"], ["required", "", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "onError", "keyup.enter"], [3, "ngClass"], ["type", "hidden", 3, "value"], ["varId", ""], ["class", "form-control", "name", "estatus", 3, "value", "title", "blur", "change", 4, "ngIf"], ["name", "estatus", 1, "form-control", 3, "value", "title", "blur", "change"], ["value", "OK"], ["value", "KO"], ["value", "OK-INC"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "click"], [1, "fa", "fa-clone"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-warning", "botonsizes", 3, "click"], [1, "fa", "fa-trash"]], template: function ElegirTurno_Template(rf, ctx) { if (rf & 1) {
        const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Turno establecido: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ElegirTurno_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onSubmit(_r201); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cambiar turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ElegirTurno_option_15_Template, 2, 5, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Establecer turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ElegirTurno_Template_input_keyup_22_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ElegirTurno_div_26_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-datatable", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ElegirTurno_ng_template_30_Template, 1, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ngx-datatable-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ElegirTurno_ng_template_32_Template, 2, 2, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ElegirTurno_ng_template_34_Template, 2, 2, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ElegirTurno_ng_template_36_Template, 5, 8, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ElegirTurno_ng_template_38_Template, 9, 3, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.registroroleperson.turno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.registroroleperson.tipo_turno, " ", ctx.registroroleperson.horainicio, " ", ctx.registroroleperson.horafin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reactiveFormTurnos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaturnos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 17, "txtFiltrarRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registroroleperson.id_rol == "8" || ctx.registroroleperson.id_rol == "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("limit", 15)("columnMode", "force")("rows", ctx.rows)("messages", ctx.my_messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 1710);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElegirTurno, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-elegirturno',
                templateUrl: './elegir.component.html'
            }]
    }], function () { return [{ type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_12__["TurnosService"] }, { type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_10__["ApiPersonas"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"] }, { type: _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/turnos/homeget.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/turnos/homeget.component.ts ***!
  \***************************************************/
/*! exports provided: HomeGetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGetComponent", function() { return HomeGetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/apiregistros.service */ "./src/app/services/apiregistros.service.ts");
/* harmony import */ var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issue */ "./src/app/models/issue.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/detalle.service */ "./src/app/services/detalle.service.ts");
/* harmony import */ var _models_turnos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/turnos */ "./src/app/models/turnos.ts");
/* harmony import */ var _models_personas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/personas */ "./src/app/models/personas.ts");
/* harmony import */ var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/apipersonas.service */ "./src/app/services/apipersonas.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

























const _c0 = function () { return ["/", "alta"]; };
function HomeGetComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HomeGetComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r364 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r364.id_tarea, " ");
} }
function HomeGetComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r368 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r368.rol_name, " ");
} }
function HomeGetComponent_ng_template_17_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeGetComponent_ng_template_17_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r375); const rowIndex_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r374.editing[rowIndex_r369 + "-tarea"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, value_r370, 0, 90), " ");
} }
function HomeGetComponent_ng_template_17_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function HomeGetComponent_ng_template_17_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r379); const rowIndex_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r378.updateValue($event, "tarea", rowIndex_r369); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r370 = ctx_r381.value;
    const row_r371 = ctx_r381.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r370)("title", row_r371.id_tarea);
} }
function HomeGetComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeGetComponent_ng_template_17_span_0_Template, 4, 8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeGetComponent_ng_template_17_input_1_Template, 1, 2, "input", 23);
} if (rf & 2) {
    const rowIndex_r369 = ctx.rowIndex;
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r358.editing[rowIndex_r369 + "-tarea"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r358.editing[rowIndex_r369 + "-tarea"]);
} }
function HomeGetComponent_ng_template_19_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeGetComponent_ng_template_19_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r388); const rowIndex_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r387.editing[rowIndex_r382 + "-ibm_hora"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r384.ibm_hora, " ");
} }
function HomeGetComponent_ng_template_19_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onError", function HomeGetComponent_ng_template_19_input_1_Template_input_onError_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r392); const ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r391.myHandleError; })("keyup.enter", function HomeGetComponent_ng_template_19_input_1_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r392); const rowIndex_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r393.updateValue($event, "ibm_hora", rowIndex_r382); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r383 = ctx_r395.value;
    const row_r384 = ctx_r395.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r383)("title", row_r384.id_tarea);
} }
function HomeGetComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeGetComponent_ng_template_19_span_0_Template, 3, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeGetComponent_ng_template_19_input_1_Template, 1, 2, "input", 26);
} if (rf & 2) {
    const rowIndex_r382 = ctx.rowIndex;
    const ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r359.editing[rowIndex_r382 + "-ibm_hora"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r359.editing[rowIndex_r382 + "-ibm_hora"]);
} }
function HomeGetComponent_ng_template_21_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeGetComponent_ng_template_21_span_1_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r403); const rowIndex_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r402.editing[rowIndex_r396 + "-estatus"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r398, " ");
} }
function HomeGetComponent_ng_template_21_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function HomeGetComponent_ng_template_21_select_4_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r407); const rowIndex_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r406.editing[rowIndex_r396 + "-estatus"] = false); })("change", function HomeGetComponent_ng_template_21_select_4_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r407); const rowIndex_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex; const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r409.updateValue($event, "estatus", rowIndex_r396); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "KO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OK-INC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const value_r398 = ctx_r411.value;
    const row_r397 = ctx_r411.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r398)("title", row_r397.id_tarea);
} }
const _c1 = function (a0, a1, a2) { return { positive: a0, negative: a1, posnegtive: a2 }; };
function HomeGetComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeGetComponent_ng_template_21_span_1_Template, 3, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeGetComponent_ng_template_21_select_4_Template, 7, 2, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r396 = ctx.rowIndex;
    const row_r397 = ctx.row;
    const ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, row_r397.estatus == "OK", row_r397.estatus == "KO", row_r397.estatus == "OK-INC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r360.editing[rowIndex_r396 + "-estatus"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", row_r397.id_tarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r360.editing[rowIndex_r396 + "-estatus"]);
} }
const _c2 = function (a1) { return ["/detalle", a1]; };
function HomeGetComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeGetComponent_ng_template_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414); const row_r412 = ctx.row; const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r413.duplicar(row_r412, ctx_r413.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeGetComponent_ng_template_23_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414); const row_r412 = ctx.row; const ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r415.borrarRegistro(row_r412, ctx_r415.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r412 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, row_r412.tokenid));
} }
const _c3 = function (a0, a1) { return { prop: a0, dir: a1 }; };
const _c4 = function (a0) { return [a0]; };
class HomeGetComponent {
    constructor(registroRoleService, translate, httpClient, registroService, apiService) {
        // this.fetch(data => {
        //   // cache
        //   this.temp = [...data];
        //   this.rows = data;
        this.registroRoleService = registroRoleService;
        this.translate = translate;
        this.httpClient = httpClient;
        this.registroService = registroService;
        this.apiService = apiService;
        this.turnoValor = localStorage.getItem('valorTurno');
        this.personas = [];
        this.issue = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].API_SERVER; //URL del servicio
        //registroroleperson:Personas = new Personas();
        this.registroroleperson = new _models_personas__WEBPACK_IMPORTED_MODULE_10__["Personas"]();
        this.dregistro = null;
        this.datoregistro = {
            id_tarea: null,
            rol_name: null,
            tarea: null,
            issueg: null,
            ibm_hora: null,
            hour: null,
            estatus: null,
            status: null,
            observaciones: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["ColumnMode"];
        this.periodetalle = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        this.my_messages = {
            'emptyMessage': '',
            'totalMessage': ''
        };
        this.turnoestablecido = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        this.getmyProp = localStorage.getItem('myProp');
        this.getmyNewValue = localStorage.getItem('myNewValue');
        // });
        translate.get('Total', { value: 'eeeeeeeeee' })
            .subscribe((res) => this.my_messages.totalMessage = res);
        translate.get('No hay resultados para mostrar', { value: '' })
            .subscribe((res) => this.my_messages.emptyMessage = res);
    }
    //el ngoninit nos servira para recargar en caso de error de validacion
    ngOnInit() {
        this.fetch(data => {
            this.temp = [...data];
            this.rows = data;
        });
        //verificar  id_usuario y id_rol
        const id_persona = localStorage.getItem('id_persona');
        this.registroRoleService.getPerson(id_persona)
            .subscribe((respuesta) => {
            this.registroroleperson = respuesta;
            this.registroroleperson.id_persona = id_persona;
        });
    }
    //reload pagina al usar sweet alerts etc
    recarga() {
        location.reload();
    }
    //cargamos el listado
    fetch(cb) {
        const req = new XMLHttpRequest();
        const id_persona = localStorage.getItem('id_persona');
        // this.registroRoleService.getPerson(id_persona)
        // .subscribe((respuesta: Personas) => {
        //   this.registroroleperson = respuesta;
        //   this.registroroleperson.id_persona = id_persona;
        req.open('GET', `${this.PHP_API_SERVER}/ajax/registro_read.php?id_persona=${id_persona}`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
        // });
    }
    //alta de registro
    altaRegistro() {
        //si los campos obligatorios nos llegan vacios
        if (this.datoregistro.tarea == null || this.datoregistro.ibm_hora == null || this.datoregistro.estatus == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'Los campos no pueden estar vacíos!!',
                icon: 'error',
            });
        }
        else {
            //enviamos el array a la funcions del server
            this.apiService.altaRegistro(this.datoregistro).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: this.datoregistro.tarea,
                    text: 'Registro añadido',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    //actualización campos inline
    updateValue(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        this.campo = cell;
        this.id_tarea = event.target.title;
        const id_persona = localStorage.getItem('id_persona');
        this.valor = event.target.value;
        this.ever = id_persona, this.campo, this.id_tarea, this.valor;
        this.datos = JSON.stringify({ "id_persona": id_persona, "campo": this.campo, "id_tarea": this.id_tarea, "valor": this.valor });
        //validacion del formato de la hora
        var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        var horaResult = patronHora.test(this.valor);
        //si el campo que recibo es hora...
        if (this.campo == "ibm_hora") {
            //...valido su formato
            if (horaResult == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Revise los datos',
                    text: 'El campo "hora" debe de cumplir con los requerimientos!!',
                    icon: 'error',
                });
                this.ngOnInit();
            }
            // else {
            //   Swal.fire({
            //     text: 'Registro actualizado',
            //     icon: 'success',  
            //     showConfirmButton : false
            //   })
            // }
        }
        //el campo que recibo es tarea pero es menor de 3 caracteres
        else if (this.campo == "tarea" && this.valor.length < 3) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "tarea" debe contener como mínimo tres carácteres!!',
                icon: 'error',
            });
            this.ngOnInit();
        }
        else {
            //todo Ok llamo al servicio
            this.apiService.modiRegistro(this.datos).subscribe(datos => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Registro actualizado',
                    icon: 'success',
                    showConfirmButton: false
                }), this.recarga();
            });
        }
    }
    duplicar(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: `¿Desea crear una tarea a partir de esta?`,
            text: 'Confirme si desea proceder',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(orden => {
            if (orden.value) {
                const id_persona = localStorage.getItem('id_persona');
                this.datosclon = JSON.stringify({ "id_persona": id_persona, "id_tarea": registro.id_tarea });
                let peticion;
                console.log(this.datosclon);
                peticion = this.registroService.actualizarRegistroNuevaId(this.datosclon);
                peticion.subscribe(respuesta => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: this.id_tarea,
                        text: 'Registro duplicado',
                        icon: 'success',
                        showConfirmButton: true
                    })
                        , this.recarga();
                });
            }
        });
    }
    //eliminar registro      
    borrarRegistro(registro, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: `¿Desea borrar el registro ${registro.tarea}`,
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(respuesta => {
            if (respuesta.value) {
                const id_persona = localStorage.getItem('id_persona');
                this.datosborrado = JSON.stringify({ "id_persona": id_persona, "id_tarea": registro.id_tarea });
                this.apiService.delete(this.datosborrado).subscribe();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: registro.tarea,
                    text: 'Registro eliminado',
                    icon: 'success',
                    showConfirmButton: false
                })
                    , this.recarga();
            }
        });
    }
    onSort(event) {
        localStorage.setItem('myProp', event.column.prop);
        localStorage.setItem('myNewValue', event.newValue);
        this.recarga();
    }
    //actualizacion filtro busqueda
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter(function (d) {
            return d.rol_name.toLowerCase().indexOf(val) !== -1 || d.tarea.toLowerCase().indexOf(val) !== -1 || d.ibm_hora.toLowerCase().indexOf(val) !== -1 || d.estatus.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // actualizamos las rows
        this.rows = temp;
        // Cuando cambie el filtro, regresa a la primera página.
        this.table.offset = 0;
    }
}
HomeGetComponent.ɵfac = function HomeGetComponent_Factory(t) { return new (t || HomeGetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_11__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
HomeGetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeGetComponent, selectors: [["app-apphome"]], viewQuery: function HomeGetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 24, vars: 22, consts: [[1, "row"], [1, "col-8", "text-left"], [1, "col-2"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-2", "text-right"], [4, "ngIf"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows", "messages", "sorts", "sort"], ["mydatatable", ""], ["name", "ID", "prop", "id_tarea", 3, "sortable", "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Rol", "prop", "rol_name", 3, "sortable", "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Tarea", 3, "maxWidth"], ["name", "ibm_hora", 3, "maxWidth"], ["name", "Estatus", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], ["alt", "Nuevo registro", "title", "nuevo registro", 1, "btn", "btn-info", "pt4", "btn-circle", "posicionplus", 3, "routerLink"], [1, "fa", "fa-plus", "fa-3"], [1, "text-center"], [3, "title", "dblclick", 4, "ngIf"], ["required", "", "autofocus", "", "type", "text", "class", "form-control", 3, "value", "title", "keyup.enter", 4, "ngIf"], [3, "title", "dblclick"], ["required", "", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "keyup.enter"], ["required", "", "class", "form-control", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 3, "value", "title", "onError", "keyup.enter", 4, "ngIf"], ["required", "", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "onError", "keyup.enter"], [3, "ngClass"], ["type", "hidden", 3, "value"], ["varId", ""], ["class", "form-control", "name", "estatus", 3, "value", "title", "blur", "change", 4, "ngIf"], ["name", "estatus", 1, "form-control", 3, "value", "title", "blur", "change"], ["value", "OK"], ["value", "KO"], ["value", "OK-INC"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "click"], [1, "fa", "fa-clone"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-warning", "botonsizes", 3, "click"], [1, "fa", "fa-trash"]], template: function HomeGetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeGetComponent_Template_input_keyup_5_listener($event) { return ctx.updateFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeGetComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function HomeGetComponent_Template_ngx_datatable_sort_10_listener($event) { return ctx.onSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeGetComponent_ng_template_13_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngx-datatable-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeGetComponent_ng_template_15_Template, 2, 1, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeGetComponent_ng_template_17_Template, 2, 2, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-datatable-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeGetComponent_ng_template_19_Template, 2, 2, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngx-datatable-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeGetComponent_ng_template_21_Template, 5, 8, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngx-datatable-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeGetComponent_ng_template_23_Template, 9, 3, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "txtFiltrarRegistros"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registroroleperson.id_rol == "8" || ctx.registroroleperson.id_rol == "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("limit", 15)("columnMode", "force")("rows", ctx.rows)("messages", ctx.my_messages)("sorts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c3, ctx.getmyProp, ctx.getmyProp)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sortable", true)("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sortable", true)("maxWidth", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 1810);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeGetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-apphome',
                templateUrl: './homeget.component.html'
            }]
    }], function () { return [{ type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_11__["ApiPersonas"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"] }, { type: _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/services/admin-servicio.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/admin-servicio.service.ts ***!
  \****************************************************/
/*! exports provided: AdminServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServicioService", function() { return AdminServicioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AdminServicioService {
    constructor(http) {
        this.http = http;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_1__["Constantes"].API_SERVER; //URL del servicio
    }
    altaRegistroFoto(datosFoto) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/personas_update_foto.php`, datosFoto);
    }
    guardarRol(datosformulario) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/rol_crear.php`, JSON.stringify(datosformulario));
    }
    deleteRol(datosborrado) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/roles_borrado.php`, datosborrado);
    }
    guardarTurno(datosformularioturno) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/turno_registro_crear.php`, JSON.stringify(datosformularioturno));
    }
    deleteTurno(datosborradoturno) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/turno_registro_borrado.php`, datosborradoturno);
    }
    getPersonas(id_persona) {
        return this.http.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
    guardarNuevancidencia(incidenciaForm) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/incidencia_crear.php`, JSON.stringify(incidenciaForm));
    }
    getAyuda(id_ayuda) {
        return this.http.get(`${this.PHP_API_SERVER}/ajax/ayuda_detalle.php?id_ayuda=${id_ayuda}`);
    }
    guardarNewAyuda(datosformularioayuda) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/ayuda_crear.php`, JSON.stringify(datosformularioayuda));
    }
    guardarAyudaModificado(datosformularioayuda) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/ayuda_update.php`, JSON.stringify(datosformularioayuda));
    }
    deleteAyuda(datosborradoAyuda) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/ayuda_borrado.php`, datosborradoAyuda);
    }
}
AdminServicioService.ɵfac = function AdminServicioService_Factory(t) { return new (t || AdminServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdminServicioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminServicioService, factory: AdminServicioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminServicioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/apipersonas.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/apipersonas.service.ts ***!
  \*************************************************/
/*! exports provided: ApiPersonas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPersonas", function() { return ApiPersonas; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class ApiPersonas {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    //turnos por rol
    getTurnosReadByRol(id_rol) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/turnos_read_by_rol.php?id_rol=${id_rol}`);
    }
    //obtener persona por id_tarea
    getPerson(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
    //obtener foto persona
    getFotografia(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
    validaEmail(email) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_validar_email.php?email=${email}`);
    }
    altaRegistroFoto(datosFoto) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_update_foto.php`, datosFoto);
    }
    altaRegistro(datoregistro) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_crear.php`, JSON.stringify(datoregistro));
    }
    getIdTurnoby(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/turnos_read_by__id_persona.php?id_persona=${id_persona}`);
    }
    getTurnosbyID(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/turno_read_by_persona.php?id_persona=${id_persona}`);
    }
    actualizarRegistro(persona) {
        const personaTemp = Object.assign({}, persona);
        delete personaTemp.id_persona;
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_update_detalle.php`, persona);
    }
    modiRegistro(datos) {
        console.log(datos);
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update_personas.php`, datos);
    }
    delete(datosborrado) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/personas_borrado.php`, datosborrado);
    }
}
ApiPersonas.ɵfac = function ApiPersonas_Factory(t) { return new (t || ApiPersonas)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiPersonas.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiPersonas, factory: ApiPersonas.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiPersonas, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/apiregistros.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/apiregistros.service.ts ***!
  \**************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    getLastId() {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/last_id.php`);
    }
    altaRegistro(datoregistro) {
        console.log(JSON.stringify(datoregistro));
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_crear.php`, JSON.stringify(datoregistro));
    }
    modiRegistro(datos) {
        //console.log(JSON.stringify(datos));
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);
    }
    delete(datosborrado) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_borrado.php`, datosborrado);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/ayuda.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ayuda.service.ts ***!
  \*******************************************/
/*! exports provided: AyudaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaService", function() { return AyudaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class AyudaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    //obtener persona por id_tarea
    open(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
}
AyudaService.ɵfac = function AyudaService_Factory(t) { return new (t || AyudaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AyudaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AyudaService, factory: AyudaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AyudaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/services/websocket.service.ts");




class ChatService {
    constructor(wsService) {
        this.wsService = wsService;
    }
    sendMessage(mensaje) {
        const payload = {
            de: this.wsService.getUsuario().nombre,
            cuerpo: mensaje
        };
        this.wsService.emit('mensaje', payload);
    }
    getMessages() {
        return this.wsService.listen('mensaje-nuevo');
    }
    getMessagesPrivate() {
        return this.wsService.listen('mensaje-privado');
    }
    getUsuariosActivos() {
        return this.wsService.listen('usuarios-activos');
    }
    emitirUsuariosActivos() {
        this.wsService.emit('obtener-usuarios');
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");






class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].API_SERVER; //URL del servicio
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllIssues() {
        this.httpClient.get(`${this.PHP_API_SERVER}/ajax/registro_read.php`).subscribe(data => {
            this.dataChange.next(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    addIssue(issue) {
        this.dialogData = issue;
    }
    updateIssue(issue) {
        this.dialogData = issue;
    }
    deleteIssue(id) {
        console.log(id);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dataservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dataservice.service.ts ***!
  \*************************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");






class DataserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].API_SERVER; //URL del servicio
        this.leftCypt = Math.random().toString(36).substr(2);
        this.rightCypt = Math.random().toString(36).substr(2);
        this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.aRndm = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].ARND; //URL del servicio
        this.bRndm = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].BRND; //URL del servicio
        this.cRndm = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].CRND; //URL del servicio
        this.dRndm = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].DRND; //URL del servicio
        // public userregistration(name,email,pwd,mobile) {
        //   return this.httpClient.post<any>(this.baseUrl + '/registration.php', { name,email, pwd,mobile })
        //       .pipe(map(Usermodule => {
        //           return Usermodule;
        //       }));
        // }
        this.rand = function (token) {
            return Math.random().toString(36).substr(2); // remove `0.`
        };
    }
    userlogin(username, password) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/login.php`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Usermodule => {
            //id mask
            const id_persona_mask = this.aRndm + Usermodule[0].id_persona + this.bRndm;
            this.setToken(Usermodule[0].nombres);
            this.setID(id_persona_mask);
            this.setIDrol(Usermodule[0].id_rol);
            this.getLoggedInName.emit(true);
            return Usermodule;
        }));
    }
    getUserId(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
    setIDrol(id_rol) {
        localStorage.setItem('id_rol', this.cRndm + id_rol + this.dRndm);
    }
    setID(id_persona) {
        localStorage.setItem('id_persona', id_persona);
    }
    getID() {
        return localStorage.getItem('id_persona');
    }
    //token
    setToken(token) {
        localStorage.setItem('token', this.rand(token));
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        const usertoken = this.getToken();
        const idtoken = this.getID();
        if (usertoken != null || idtoken != null) {
            return true;
        }
        return false;
    }
}
DataserviceService.ɵfac = function DataserviceService_Factory(t) { return new (t || DataserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataserviceService, factory: DataserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, { getLoggedInName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/detalle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/detalle.service.ts ***!
  \*********************************************/
/*! exports provided: DetalleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleService", function() { return DetalleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class DetalleService {
    constructor(http) {
        this.http = http;
        this.personas = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    //modificar registro
    actualizarRegistro(persona) {
        const personaTemp = Object.assign({}, persona);
        delete personaTemp.id_tarea;
        console.log(persona);
        return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_update_detalle.php`, persona);
    }
    //duplicar
    actualizarRegistroNuevaId(datosclon) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_duplicar_detalle.php`, datosclon);
    }
    actualizarRegistroSeguimiento(datoregistro) {
        console.log(datoregistro);
        return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_update_seguimiento.php`, JSON.stringify(datoregistro));
    }
    //obtener persona por id_tarea
    getPerson(id_tarea) {
        return this.http.get(`${this.PHP_API_SERVER}/ajax/registro_detalle.php?id_tarea=${id_tarea}`);
    }
    delete(datosborrado) {
        return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_seguimiento_borrado.php`, datosborrado);
    }
}
DetalleService.ɵfac = function DetalleService_Factory(t) { return new (t || DetalleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DetalleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetalleService, factory: DetalleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/detallehistorico.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/detallehistorico.service.ts ***!
  \******************************************************/
/*! exports provided: DetalleHistoricoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleHistoricoService", function() { return DetalleHistoricoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class DetalleHistoricoService {
    constructor(http) {
        this.http = http;
        //persons:any[] = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    //obtener persona por id
    getDetalleHistorico(id_log) {
        return this.http.get(`${this.PHP_API_SERVER}/ajax/registro_historico_detalle.php?id_log=${id_log}`);
    }
    delete(datosborrado) {
        console.log(datosborrado);
        return this.http.post(`${this.PHP_API_SERVER}/ajax/registro_seguimiento_borrado.php`, datosborrado);
    }
}
DetalleHistoricoService.ɵfac = function DetalleHistoricoService_Factory(t) { return new (t || DetalleHistoricoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DetalleHistoricoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetalleHistoricoService, factory: DetalleHistoricoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleHistoricoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/flotante.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/flotante.service.ts ***!
  \**********************************************/
/*! exports provided: FlotanteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlotanteService", function() { return FlotanteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class FlotanteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    getUserId(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
}
FlotanteService.ɵfac = function FlotanteService_Factory(t) { return new (t || FlotanteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FlotanteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlotanteService, factory: FlotanteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlotanteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/historico.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/historico.service.ts ***!
  \***********************************************/
/*! exports provided: HistoricoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricoService", function() { return HistoricoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class HistoricoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    delete(datosborrado) {
        console.log(datosborrado);
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_historico_borrado.php`, datosborrado);
    }
}
HistoricoService.ɵfac = function HistoricoService_Factory(t) { return new (t || HistoricoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HistoricoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HistoricoService, factory: HistoricoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/incidencias.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/incidencias.service.ts ***!
  \*************************************************/
/*! exports provided: IncidenciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidenciasService", function() { return IncidenciasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class IncidenciasService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    //obtener persona por id
    getDetalleIncidencia(token_incidencia) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/incidencia_detalle.php?token_incidencia=${token_incidencia}`);
    }
    guardarIncidencia(valor) {
        console.log(valor);
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/incidencia_update.php`, valor);
    }
    delete(datosborrado) {
        console.log(datosborrado);
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_historico_borrado.php`, datosborrado);
    }
}
IncidenciasService.ɵfac = function IncidenciasService_Factory(t) { return new (t || IncidenciasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IncidenciasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IncidenciasService, factory: IncidenciasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidenciasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/periodicidad.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/periodicidad.service.ts ***!
  \**************************************************/
/*! exports provided: PeriodicidadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodicidadService", function() { return PeriodicidadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class PeriodicidadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    altaRegistrochecks(datoregistro) {
        // console.log(JSON.stringify(datoregistro));
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/periodicidad_crear.php`, JSON.stringify(datoregistro));
    }
    //obtener persona por id
    getCheckeds(id_tarea) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/periodicidad_detalle.php?id_tarea=${id_tarea}`);
    }
    getDatosMadre(id_tarea) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/periodicidad_madre.php?id_tarea=${id_tarea}`);
    }
    //   modiRegistro(datos){
    //     console.log(datos);
    //     return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);   
    //   }
    //   delete(datosborrado){
    //     console.log(datosborrado);
    //     return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_borrado.php`,datosborrado);
    //   }
    delete(datosborrado) {
        console.log(datosborrado);
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_diames_borrado.php`, datosborrado);
    }
}
PeriodicidadService.ɵfac = function PeriodicidadService_Factory(t) { return new (t || PeriodicidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PeriodicidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeriodicidadService, factory: PeriodicidadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeriodicidadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/serviciocompartido.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/serviciocompartido.service.ts ***!
  \********************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class SharedService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendClickEvent() {
        this.subject.next();
    }
    getClickEvent() {
        return this.subject.asObservable();
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/turnos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/turnos.service.ts ***!
  \********************************************/
/*! exports provided: TurnosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnosService", function() { return TurnosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/constantes.model */ "./src/app/models/constantes.model.ts");





class TurnosService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
    }
    guardarTurnoGhost(datosturnos) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/turno_ghost_crear.php`, datosturnos);
    }
    guardarTurno(datosturnos) {
        return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/turno_crear.php`, datosturnos);
    }
    //obtener rol persona 
    getUserId(id_persona) {
        return this.httpClient.get(`${this.PHP_API_SERVER}/ajax/personas_detalle.php?id_persona=${id_persona}`);
    }
}
TurnosService.ɵfac = function TurnosService_Factory(t) { return new (t || TurnosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TurnosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TurnosService, factory: TurnosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class WebsocketService {
    constructor(socket, router) {
        this.socket = socket;
        this.router = router;
        this.socketStatus = false;
        this.usuario = null;
        this.cargarStorage();
        this.checkStatus();
    }
    checkStatus() {
        this.socket.on('connect', () => {
            console.log('Conectado al servidor');
            this.socketStatus = true;
            this.cargarStorage();
        });
        this.socket.on('disconnect', () => {
            console.log('Desconectado del servidor');
            this.socketStatus = false;
        });
    }
    emit(evento, payload, callback) {
        console.log('Emitiendo', evento);
        this.socket.emit(evento, payload, callback);
    }
    //recibe un evento y devuelve un observable
    listen(evento) {
        return this.socket.fromEvent(evento);
    }
    loginWS(id_persona) {
        //retorno promesa para mantener sesion activa
        return new Promise((resolve, reject) => {
            this.emit('configurar-usuario', { id_persona }, resp => {
                this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](id_persona);
                this.guardarStorage();
                resolve(); //resuelvo la promesa
            });
        });
    }
    // logoutWS(){
    //   this.usuario = null;
    //   localStorage.removeItem('usuario');
    //   const payload = {
    //     id_persona: ''
    //   }
    //   this.emit('configurar-usuario', payload, ()=> {} );
    //   this.router.navigateByUrl('');
    // }
    getUsuario() {
        return this.usuario;
    }
    //almacenamos la sesion del usuario el localstorage
    guardarStorage() {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
    }
    //leemos el localstorage
    cargarStorage() {
        if (localStorage.getItem('usuario')) {
            this.usuario = JSON.parse(localStorage.getItem('usuario'));
            this.loginWS(this.usuario.id_persona);
        }
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    wsUrl: 'http://ibmes.site:5001'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nombre.apellidos\Desktop\y\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map