function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/dataservice.service */
    "./src/app/services/dataservice.service.ts");
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/websocket.service */
    "./src/app/services/websocket.service.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/flotante/flotante.component */
    "./src/app/components/flotante/flotante.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dataService, wsService, chatService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.dataService = dataService;
        this.wsService = wsService;
        this.chatService = chatService;
        this.title = 'check';
        dataService.getLoggedInName.subscribe(function (nombres) {
          return _this.changeName(nombres);
        });

        if (this.dataService.isLoggedIn()) {
          console.log("loggedin");
          this.loginbtn = false;
          this.logoutbtn = true;
        } else {
          this.loginbtn = true;
          this.logoutbtn = false;
        }
      }

      _createClass(AppComponent, [{
        key: "changeName",
        value: function changeName(nombres) {
          this.logoutbtn = nombres;
          this.loginbtn = !nombres;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.dataService.deleteToken();
          window.location.href = window.location.href;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chatService.getMessagesPrivate().subscribe(function (msg) {
            console.log(msg);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container-fluid"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-flotante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_5__["FlotanteComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(1), .mat-header-cell[_ngcontent-%COMP%]:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(2), .mat-header-cell[_ngcontent-%COMP%]:nth-child(2){\n  flex: 0 0 30%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(3), .mat-header-cell[_ngcontent-%COMP%]:nth-child(3){\n  flex: 0 0 6%;\n}\n.mat-cell[_ngcontent-%COMP%]:nth-child(7), .mat-header-cell[_ngcontent-%COMP%]:nth-child(7){\n  flex: 0 0 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBLFlBQVk7QUFDWjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBUb29sYmFyICovXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIEZpbHRlciAqL1xuLmZvcm0ge1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXgtaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vKiBNYXQgdGFibGUgKi9cbi5uby1yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpe1xuICBmbGV4OiAwIDAgMzAlO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCg3KSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDcpe1xuICBmbGV4OiAwIDAgNyU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]
        }, {
          type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]
        }, {
          type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _pages_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/home.component */
    "./src/app/pages/home.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/buscador/buscador.component */
    "./src/app/components/buscador/buscador.component.ts");
    /* harmony import */


    var _pages_personas_pages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/personas.pages */
    "./src/app/pages/personas.pages.ts");
    /* harmony import */


    var _pages_descarga_pages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/descarga.pages */
    "./src/app/pages/descarga.pages.ts");
    /* harmony import */


    var _pages_configuracion_pages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/configuracion.pages */
    "./src/app/pages/configuracion.pages.ts");
    /* harmony import */


    var _pages_detalle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/detalle.component */
    "./src/app/pages/detalle.component.ts");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/__ivy_ngcc__/picker.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _pages_alta_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/alta.component */
    "./src/app/pages/alta.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ngx-fullcalendar */
    "./node_modules/ngx-fullcalendar/__ivy_ngcc__/fesm2015/ngx-fullcalendar.js");
    /* harmony import */


    var _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/periodicidad/check.component */
    "./src/app/components/periodicidad/check.component.ts");
    /* harmony import */


    var _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/periodicidad/accion.component */
    "./src/app/components/periodicidad/accion.component.ts");
    /* harmony import */


    var _components_periodicidad_accionhistorico_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/periodicidad/accionhistorico.component */
    "./src/app/components/periodicidad/accionhistorico.component.ts");
    /* harmony import */


    var _pages_historico_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/historico.component */
    "./src/app/pages/historico.component.ts");
    /* harmony import */


    var _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./pages/detallehistorico.component */
    "./src/app/pages/detallehistorico.component.ts");
    /* harmony import */


    var _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./pages/detallepersona.component */
    "./src/app/pages/detallepersona.component.ts");
    /* harmony import */


    var _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/imagen/modimagen.component */
    "./src/app/components/imagen/modimagen.component.ts");
    /* harmony import */


    var _components_imagen_capturas_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/imagen/capturas.component */
    "./src/app/components/imagen/capturas.component.ts");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/common/locales/es */
    "./node_modules/@angular/common/locales/es.js");
    /* harmony import */


    var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @jaspero/ng-image-preload */
    "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");
    /* harmony import */


    var _pages_perfil_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./pages/perfil.component */
    "./src/app/pages/perfil.component.ts");
    /* harmony import */


    var _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/ayuda/ayuda.component */
    "./src/app/components/ayuda/ayuda.component.ts");
    /* harmony import */


    var _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./pages/turnos/elegir.component */
    "./src/app/pages/turnos/elegir.component.ts");
    /* harmony import */


    var _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./pages/turnos/homeget.component */
    "./src/app/pages/turnos/homeget.component.ts");
    /* harmony import */


    var _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/flotante/flotante.component */
    "./src/app/components/flotante/flotante.component.ts");
    /* harmony import */


    var _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./pages/mensajes/mensajes.component */
    "./src/app/pages/mensajes/mensajes.component.ts");
    /* harmony import */


    var _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/lista-usuarios/lista-usuarios.component */
    "./src/app/components/lista-usuarios/lista-usuarios.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./pages/identificacion/identificacion.component */
    "./src/app/pages/identificacion/identificacion.component.ts");
    /* harmony import */


    var _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./pages/historicomini.component */
    "./src/app/pages/historicomini.component.ts");
    /* harmony import */


    var _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./pages/formularios/configuracion-general.component */
    "./src/app/pages/formularios/configuracion-general.component.ts");
    /* harmony import */


    var _pages_formularios_ayuda_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./pages/formularios/ayuda.component */
    "./src/app/pages/formularios/ayuda.component.ts");
    /* harmony import */


    var _pages_formularios_roles_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./pages/formularios/roles.component */
    "./src/app/pages/formularios/roles.component.ts");
    /* harmony import */


    var _pages_formularios_turnos_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./pages/formularios/turnos.component */
    "./src/app/pages/formularios/turnos.component.ts");
    /* harmony import */


    var _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./pages/formularios/listados.component */
    "./src/app/pages/formularios/listados.component.ts");
    /* harmony import */


    var _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./pages/abririncidencia.component */
    "./src/app/pages/abririncidencia.component.ts");
    /* harmony import */


    var _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./pages/formularios/incidencias.component */
    "./src/app/pages/formularios/incidencias.component.ts");
    /* harmony import */


    var _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./pages/formularios/incidenciadetalle.component */
    "./src/app/pages/formularios/incidenciadetalle.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js"); //import { AppRoutingModule } from './app.routes';


    var config = {
      url: _environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].wsUrl,
      options: {}
    };
    Object(_angular_common__WEBPACK_IMPORTED_MODULE_48__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_47___default.a, 'es');

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_27__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'es'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_69__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__["JpImagePreloadModule"].forRoot(), _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__["NgxFullCalendarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"].setLocale('es-419')], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"], //RouterModule.forRoot( routes ),
      _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"], {
        useHash: true
      }), ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(), ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__["SocketIoModule"].forRoot(config), _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
        }
      })], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_57__["ChatComponent"], _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_56__["ListaUsuariosComponent"], _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_55__["MensajesComponent"], _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_59__["IdentificacionComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_53__["HomeGetComponent"], _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_60__["HistoricoMiniComponent"], _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_39__["CheckComponent"], _pages_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _pages_detalle_component__WEBPACK_IMPORTED_MODULE_26__["DetalleComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_54__["FlotanteComponent"], _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_43__["DetalleHistoricoComponent"], _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_40__["AccionComponent"], _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_45__["ModimagenComponent"], _components_imagen_capturas_component__WEBPACK_IMPORTED_MODULE_46__["CapturasComponent"], _components_periodicidad_accionhistorico_component__WEBPACK_IMPORTED_MODULE_41__["AccionHistoricoComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"], _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_22__["BuscadorComponent"], _pages_personas_pages__WEBPACK_IMPORTED_MODULE_23__["PersonasPage"], _pages_historico_component__WEBPACK_IMPORTED_MODULE_42__["HistoricoComponent"], _pages_descarga_pages__WEBPACK_IMPORTED_MODULE_24__["DescargaPage"], _pages_configuracion_pages__WEBPACK_IMPORTED_MODULE_25__["ConfiguracionPage"], _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_52__["ElegirTurno"], _pages_alta_component__WEBPACK_IMPORTED_MODULE_36__["AltaComponent"], _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_44__["DetallePersona"], _pages_perfil_component__WEBPACK_IMPORTED_MODULE_50__["PerfilPersona"], _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_51__["AyudaComponent"], _pages_formularios_ayuda_component__WEBPACK_IMPORTED_MODULE_62__["AyudaFormComponent"], _pages_formularios_roles_component__WEBPACK_IMPORTED_MODULE_63__["RolesFormComponent"], _pages_formularios_turnos_component__WEBPACK_IMPORTED_MODULE_64__["TurnosFormComponent"], _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_61__["ConfiguracionGeneralComponent"], _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_65__["ListadosComponent"], _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_66__["AbririncidenciaComponent"], _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_67__["IncidenciasComponent"], _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_68__["IncidenciadetalleComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_69__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__["JpImagePreloadModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__["NgxFullCalendarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__["SocketIoModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_57__["ChatComponent"], _components_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_56__["ListaUsuariosComponent"], _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_55__["MensajesComponent"], _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_59__["IdentificacionComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_53__["HomeGetComponent"], _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_60__["HistoricoMiniComponent"], _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_39__["CheckComponent"], _pages_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _pages_detalle_component__WEBPACK_IMPORTED_MODULE_26__["DetalleComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_flotante_flotante_component__WEBPACK_IMPORTED_MODULE_54__["FlotanteComponent"], _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_43__["DetalleHistoricoComponent"], _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_40__["AccionComponent"], _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_45__["ModimagenComponent"], _components_imagen_capturas_component__WEBPACK_IMPORTED_MODULE_46__["CapturasComponent"], _components_periodicidad_accionhistorico_component__WEBPACK_IMPORTED_MODULE_41__["AccionHistoricoComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"], _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_22__["BuscadorComponent"], _pages_personas_pages__WEBPACK_IMPORTED_MODULE_23__["PersonasPage"], _pages_historico_component__WEBPACK_IMPORTED_MODULE_42__["HistoricoComponent"], _pages_descarga_pages__WEBPACK_IMPORTED_MODULE_24__["DescargaPage"], _pages_configuracion_pages__WEBPACK_IMPORTED_MODULE_25__["ConfiguracionPage"], _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_52__["ElegirTurno"], _pages_alta_component__WEBPACK_IMPORTED_MODULE_36__["AltaComponent"], _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_44__["DetallePersona"], _pages_perfil_component__WEBPACK_IMPORTED_MODULE_50__["PerfilPersona"], _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_51__["AyudaComponent"], _pages_formularios_ayuda_component__WEBPACK_IMPORTED_MODULE_62__["AyudaFormComponent"], _pages_formularios_roles_component__WEBPACK_IMPORTED_MODULE_63__["RolesFormComponent"], _pages_formularios_turnos_component__WEBPACK_IMPORTED_MODULE_64__["TurnosFormComponent"], _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_61__["ConfiguracionGeneralComponent"], _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_65__["ListadosComponent"], _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_66__["AbririncidenciaComponent"], _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_67__["IncidenciasComponent"], _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_68__["IncidenciadetalleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_69__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_49__["JpImagePreloadModule"].forRoot(), _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], ngx_fullcalendar__WEBPACK_IMPORTED_MODULE_38__["NgxFullCalendarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"], [ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMaterialTimepickerModule"].setLocale('es-419')], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_34__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormsModule"], //RouterModule.forRoot( routes ),
          _angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"], {
            useHash: true
          }), ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(), ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_29__["OwlNativeDateTimeModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_58__["SocketIoModule"].forRoot(config), _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_37__["CKEditorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
            }
          })],
          entryComponents: [],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__["RouterModule"]],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'es'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _pages_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages/home.component */
    "./src/app/pages/home.component.ts");
    /* harmony import */


    var _pages_detalle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/detalle.component */
    "./src/app/pages/detalle.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_personas_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/personas.pages */
    "./src/app/pages/personas.pages.ts");
    /* harmony import */


    var _pages_alta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/alta.component */
    "./src/app/pages/alta.component.ts");
    /* harmony import */


    var _pages_historico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/historico.component */
    "./src/app/pages/historico.component.ts");
    /* harmony import */


    var _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/detallehistorico.component */
    "./src/app/pages/detallehistorico.component.ts");
    /* harmony import */


    var _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/detallepersona.component */
    "./src/app/pages/detallepersona.component.ts");
    /* harmony import */


    var _guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./guards/authguard.guard */
    "./src/app/guards/authguard.guard.ts");
    /* harmony import */


    var _pages_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/perfil.component */
    "./src/app/pages/perfil.component.ts");
    /* harmony import */


    var _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/ayuda/ayuda.component */
    "./src/app/components/ayuda/ayuda.component.ts");
    /* harmony import */


    var _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/turnos/elegir.component */
    "./src/app/pages/turnos/elegir.component.ts");
    /* harmony import */


    var _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/mensajes/mensajes.component */
    "./src/app/pages/mensajes/mensajes.component.ts");
    /* harmony import */


    var _guards_usuario_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guards/usuario-guard.service */
    "./src/app/guards/usuario-guard.service.ts");
    /* harmony import */


    var _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/identificacion/identificacion.component */
    "./src/app/pages/identificacion/identificacion.component.ts");
    /* harmony import */


    var _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/formularios/configuracion-general.component */
    "./src/app/pages/formularios/configuracion-general.component.ts");
    /* harmony import */


    var _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/formularios/listados.component */
    "./src/app/pages/formularios/listados.component.ts");
    /* harmony import */


    var _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/abririncidencia.component */
    "./src/app/pages/abririncidencia.component.ts");
    /* harmony import */


    var _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/turnos/homeget.component */
    "./src/app/pages/turnos/homeget.component.ts");
    /* harmony import */


    var _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/formularios/incidencias.component */
    "./src/app/pages/formularios/incidencias.component.ts");
    /* harmony import */


    var _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/formularios/incidenciadetalle.component */
    "./src/app/pages/formularios/incidenciadetalle.component.ts");

    var routes = [{
      path: 'ayuda',
      component: _components_ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_10__["AyudaComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'elegirturno',
      component: _pages_turnos_elegir_component__WEBPACK_IMPORTED_MODULE_11__["ElegirTurno"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'homeget',
      component: _pages_turnos_homeget_component__WEBPACK_IMPORTED_MODULE_18__["HomeGetComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'home',
      component: _pages_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'alta',
      component: _pages_alta_component__WEBPACK_IMPORTED_MODULE_4__["AltaComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'personas',
      component: _pages_personas_pages__WEBPACK_IMPORTED_MODULE_3__["PersonasPage"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'perfil/:id_persona',
      component: _pages_perfil_component__WEBPACK_IMPORTED_MODULE_9__["PerfilPersona"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'incidenciadetalle/:token_incidencia',
      component: _pages_formularios_incidenciadetalle_component__WEBPACK_IMPORTED_MODULE_20__["IncidenciadetalleComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'detallepersona/:id_persona',
      component: _pages_detallepersona_component__WEBPACK_IMPORTED_MODULE_7__["DetallePersona"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'historico',
      component: _pages_historico_component__WEBPACK_IMPORTED_MODULE_5__["HistoricoComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'detallehistorico/:id_log',
      component: _pages_detallehistorico_component__WEBPACK_IMPORTED_MODULE_6__["DetalleHistoricoComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'detalle/:id_tarea',
      component: _pages_detalle_component__WEBPACK_IMPORTED_MODULE_1__["DetalleComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'formlistados',
      component: _pages_formularios_listados_component__WEBPACK_IMPORTED_MODULE_16__["ListadosComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'abririncidencia',
      component: _pages_abririncidencia_component__WEBPACK_IMPORTED_MODULE_17__["AbririncidenciaComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'incidencias',
      component: _pages_formularios_incidencias_component__WEBPACK_IMPORTED_MODULE_19__["IncidenciasComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, // { path: 'formroles' , component: RolesFormComponent, canActivate: [ AuthguardGuard ]},
    // { path: 'formturnos' , component: TurnosFormComponent, canActivate: [ AuthguardGuard ]},
    {
      path: 'configuraciongeneral',
      component: _pages_formularios_configuracion_general_component__WEBPACK_IMPORTED_MODULE_15__["ConfiguracionGeneralComponent"],
      canActivate: [_guards_authguard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthguardGuard"]]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'identificacion',
      component: _pages_identificacion_identificacion_component__WEBPACK_IMPORTED_MODULE_14__["IdentificacionComponent"]
    }, {
      path: 'mensajes',
      component: _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_12__["MensajesComponent"],
      canActivate: [_guards_usuario_guard_service__WEBPACK_IMPORTED_MODULE_13__["UsuarioGuardService"]]
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: '/login'
    }, {
      path: '**',
      redirectTo: '/login'
    }]; //export class AppRoutingModule { }

    /***/
  },

  /***/
  "./src/app/components/ayuda/ayuda.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/ayuda/ayuda.component.ts ***!
    \*****************************************************/

  /*! exports provided: AyudaComponent */

  /***/
  function srcAppComponentsAyudaAyudaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AyudaComponent", function () {
      return AyudaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_ayuda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/ayuda.service */
    "./src/app/services/ayuda.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AyudaComponent_ng_template_3_div_7_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var contenido_r197 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#card-element-", contenido_r197.numauto, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contenido_r197.ayudatitulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "card-element-", contenido_r197.numauto, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contenido_r197.ayudatexto, " ");
      }
    }

    function AyudaComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ayuda");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaComponent_ng_template_3_Template_button_click_3_listener() {
          var modal_r195 = ctx.$implicit;
          return modal_r195.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AyudaComponent_ng_template_3_div_7_Template, 9, 4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaComponent_ng_template_3_Template_button_click_9_listener() {
          var modal_r195 = ctx.$implicit;
          return modal_r195.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cerrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r194.contenidoayuda);
      }
    }

    var AyudaComponent = /*#__PURE__*/function () {
      function AyudaComponent(httpClient, modalService, ayudaService) {
        _classCallCheck(this, AyudaComponent);

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

      _createClass(AyudaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var id_persona = localStorage.getItem('id_persona'); //cargo el listado 

          this.httpClient.get(this.PHP_API_SERVER + '/ajax/read_ayuda.php?id_persona=' + id_persona).subscribe(function (result) {
            _this2.contenidoayuda = result;
          });
        }
      }, {
        key: "open",
        value: function open(ayuda) {
          var _this3 = this;

          this.modalService.open(ayuda, this.modalOptions).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return AyudaComponent;
    }();

    AyudaComponent.ɵfac = function AyudaComponent_Factory(t) {
      return new (t || AyudaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ayuda_service__WEBPACK_IMPORTED_MODULE_2__["AyudaService"]));
    };

    AyudaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AyudaComponent,
      selectors: [["app-ayuda"]],
      decls: 5,
      vars: 0,
      consts: [["title", "Ayuda", 1, "nav-link", "pointerplus", 3, "click"], [1, "fa", "fa-question-circle", "mr-1", "fa-1g"], ["class", "modal-lg"], ["ayuda", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["id", "card-966405"], [1, "card"], [1, "card-header"], ["data-toggle", "collapse", "data-parent", "#card-966405", 1, "card-link", "collapsed", 3, "href"], [1, "collapse", 3, "id"], [1, "card-body"]],
      template: function AyudaComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaComponent_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r200);

            var _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.open(_r193);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nAyuda\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AyudaComponent_ng_template_3_Template, 11, 1, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AyudaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ayuda',
          templateUrl: './ayuda.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _services_ayuda_service__WEBPACK_IMPORTED_MODULE_2__["AyudaService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/buscador/buscador.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/buscador/buscador.component.ts ***!
    \***********************************************************/

  /*! exports provided: BuscadorComponent */

  /***/
  function srcAppComponentsBuscadorBuscadorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuscadorComponent", function () {
      return BuscadorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var BuscadorComponent = function BuscadorComponent() {
      _classCallCheck(this, BuscadorComponent);
    };

    BuscadorComponent.ɵfac = function BuscadorComponent_Factory(t) {
      return new (t || BuscadorComponent)();
    };

    BuscadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuscadorComponent,
      selectors: [["app-buscador"]],
      decls: 7,
      vars: 3,
      consts: [[1, "row", "mb-4"], [1, "col-md-12", "flex-column", "text-center", "ml-2", "mr-3"], [1, "form-inline"], ["type", "text", 1, "form-control", "mr-sm-2", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-info", "my-2", "my-sm-0", "btn-circle"], [1, "fa", "fa-search"]],
      template: function BuscadorComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "txtSearch"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscadorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-buscador',
          templateUrl: './buscador.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/historicomini.component */
    "./src/app/pages/historicomini.component.ts");

    function ChatComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var msg_r533 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", msg_r533.de, ": ", msg_r533.cuerpo, " ");
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(chatService) {
        _classCallCheck(this, ChatComponent);

        this.chatService = chatService;
        this.mensajes = [];
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.elemento = document.getElementById('chat-mensajes');
          this.mensajesSubscription = this.chatService.getMessages().subscribe(function (msg) {
            _this4.mensajes.push(msg);

            setTimeout(function () {
              _this4.elemento.scrollTop = _this4.elemento.scrollHeight;
            }, 50);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mensajesSubscription.unsubscribe;
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 3,
      vars: 1,
      consts: [["id", "chat-mensajes"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_li_1_Template, 2, 2, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-historicomini");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mensajes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _pages_historicomini_component__WEBPACK_IMPORTED_MODULE_3__["HistoricoMiniComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html'
        }]
      }], function () {
        return [{
          type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/flotante/flotante.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/flotante/flotante.component.ts ***!
    \***********************************************************/

  /*! exports provided: FlotanteComponent */

  /***/
  function srcAppComponentsFlotanteFlotanteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlotanteComponent", function () {
      return FlotanteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _services_flotante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/flotante.service */
    "./src/app/services/flotante.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pages/mensajes/mensajes.component */
    "./src/app/pages/mensajes/mensajes.component.ts");

    function FlotanteComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r527 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlotanteComponent_ng_container_0_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r527);

          var ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r526.isOn = false;
        });

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
      }
    }

    function FlotanteComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r529 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlotanteComponent_p_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r529);

          var ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r528.isOn = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+ abrir consola");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FlotanteComponent = /*#__PURE__*/function () {
      function FlotanteComponent(httpClient, router, flotanteService) {
        var _this5 = this;

        _classCallCheck(this, FlotanteComponent);

        this.httpClient = httpClient;
        this.router = router;
        this.flotanteService = flotanteService;
        this.user = new _models_personas__WEBPACK_IMPORTED_MODULE_3__["Personas"]();
        this.isOn = true;

        if (localStorage.getItem('id_persona') != null) {
          var id_persona = localStorage.getItem('id_persona');
          this.flotanteService.getUserId(id_persona).subscribe(function (respuesta) {
            _this5.user = respuesta;
          });
        }
      }

      _createClass(FlotanteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cerrarConsola",
        value: function cerrarConsola() {}
      }]);

      return FlotanteComponent;
    }();

    FlotanteComponent.ɵfac = function FlotanteComponent_Factory(t) {
      return new (t || FlotanteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_flotante_service__WEBPACK_IMPORTED_MODULE_4__["FlotanteService"]));
    };

    FlotanteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlotanteComponent,
      selectors: [["app-flotante"]],
      decls: 4,
      vars: 2,
      consts: [[4, "ngIf"], [1, "row"], [1, "col-12", "footer", "text-center"], ["cdkDrag", "", 1, "example-box"], ["id", "card-9668745984", 1, "flotante", "accordion-icons"], [1, "card"], ["title", "Arrastra para recolocar la consola", "alt", "Arrastra para recolocar la consola", "id", "cabeceraDraggable", 1, "card-header"], [1, "col-11", "their"], [1, "col-1", "text-right"], [1, "col-6", "text-right", "botona"], ["data-toggle", "collapse", "data-parent", "#card-9668745984", "href", "#card-element-57874457742", 1, "card-link", "rightfloat"], [1, "col-6", "text-right", "botonb", "pt-1"], ["href", "#", 1, "card-link", "rightfloat", 3, "click"], ["id", "card-element-57874457742", 1, "collapse", "show"], [1, "card-body", "overscroll"], [3, "click"]],
      template: function FlotanteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FlotanteComponent_ng_container_0_Template, 18, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlotanteComponent_p_3_Template, 3, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.level_rol === "8" && ctx.isOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.level_rol === "8" && !ctx.isOn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _pages_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_7__["MensajesComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlotanteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flotante',
          templateUrl: './flotante.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_flotante_service__WEBPACK_IMPORTED_MODULE_4__["FlotanteService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/dataservice.service */
    "./src/app/services/dataservice.service.ts");
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/websocket.service */
    "./src/app/services/websocket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Online");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Offline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FooterComponent = function FooterComponent(httpClient, router, dataService, wsService) {
      _classCallCheck(this, FooterComponent);

      this.httpClient = httpClient;
      this.router = router;
      this.dataService = dataService;
      this.wsService = wsService;
      this.any = new Date().getFullYear();
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 7,
      vars: 3,
      consts: [[1, "row"], [1, "col-9", "footer", "bg-dark", "text-center", "text-white"], [1, "col-3", "footer", "bg-dark", "text-center", "text-white"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 2020 - ", ctx.any, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wsService.socketStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.wsService.socketStatus);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]
        }, {
          type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/dataservice.service */
    "./src/app/services/dataservice.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ayuda/ayuda.component */
    "./src/app/components/ayuda/ayuda.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HeaderComponent_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r181 = ctx.$implicit;

        var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r181)("selected", lang_r181 === ctx_r178.translate.currentLang);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r181);
      }
    }

    function HeaderComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nueva entrada de FAQs ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_25_Template_button_click_3_listener() {
          var modal_r182 = ctx.$implicit;
          return modal_r182.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_25_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188);

          var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r187.datosformularioayuda.id_persona_log = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Escriba un t\xEDtulo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_25_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r189.datosformularioayuda.ayudatitulo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Texto (m\xE1x 650 car\xE1cteres)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_ng_template_25_Template_textarea_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r190.datosformularioayuda.ayudatexto = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_25_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r188);

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r191.guardarNuevaAyuda();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Guardar registro ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.datosformularioayuda.id_persona_log);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.datosformularioayuda.ayudatitulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r180.datosformularioayuda.ayudatexto);
      }
    }

    var _c0 = function _c0() {
      return ["/", "abririncidencia"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(translate, dataService, router, activatedRoute) {
        _classCallCheck(this, HeaderComponent);

        this.translate = translate;
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'ng-bootstrap-modal-demo';
        this.translate.addLangs(['es', 'ca', 'en']);
        this.translate.setDefaultLang('es');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/es|ca|en/) ? browserLang : 'es');
      }

      _createClass(HeaderComponent, [{
        key: "Logout",
        value: function Logout() {
          localStorage.removeItem('token');
          localStorage.removeItem('id_rol');
          localStorage.removeItem('id_persona');
          localStorage.removeItem('valorTurno');
          var redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/login';
          this.router.navigate([redirect]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 27,
      vars: 6,
      consts: [[1, "row"], [1, "col-12", "bg-dark"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["id", "sidebarCollapse", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", "navbar-toggler-right"], [1, "navbar-toggler-icon"], ["id", "bs-example-navbar-collapse-1", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-md-auto"], [1, "nav-item"], ["alt", "Abrir incidencia", "title", "Abrir incidencia", 1, "nav-link", 3, "routerLink"], ["href", "#", 1, "nav-link", 3, "click"], [1, "fa", "fa-times-circle", "mr-1", "fa-1g"], [1, "form-control", "form-control-sm", "moresmall", "mt-2", "ml-4", 3, "change"], ["langSelect", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["content", ""], [3, "value", "selected"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "ayudatitulo"], ["name", "ayudatitulo", "type", "text", "maxlength", "100", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatitulo", "ngModel"], [1, "input-group"], ["rows", "10", "required", "", "maxlength", "650", "name", "ayudatexto", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatexto", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
            return ctx.Logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r192);

            var _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx.translate.use(_r177.value);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 3, "txtSalir"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ayuda_ayuda_component__WEBPACK_IMPORTED_MODULE_5__["AyudaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html'
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/imagen/capturas.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/imagen/capturas.component.ts ***!
    \*********************************************************/

  /*! exports provided: CapturasComponent */

  /***/
  function srcAppComponentsImagenCapturasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapturasComponent", function () {
      return CapturasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");

    var CapturasComponent = /*#__PURE__*/function () {
      function CapturasComponent(fb, activatedRoute, httpClient, perioService) {
        _classCallCheck(this, CapturasComponent);

        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio

        this.personas = [];
        this.fotopersona = new _models_personas__WEBPACK_IMPORTED_MODULE_6__["Personas"]();
        this.imageSrc = ''; //modificar valores por defecto en la pagina de insercion TODO

        this.accionForm = this.fb.group({
          fotopersona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          id_persona: this.activatedRoute.snapshot.paramMap.get('id_persona'),
          id_persona_log: localStorage.getItem('id_persona')
        });
      }

      _createClass(CapturasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargaMadre();
        }
      }, {
        key: "cargaMadre",
        value: function cargaMadre() {
          var _this6 = this;

          var id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
          this.perioService.getFotografia(id_persona).subscribe(function (respuesta) {
            _this6.fotopersona = respuesta; //this.accionForm.controls['fechafin'].setValue(this.fotopersona[0]['imagen']);
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "handleInputChange",
        value: function handleInputChange(e) {
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
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(e) {
          var reader = e.target;
          this.imageSrc = reader.result;
          var id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
          var id_persona_log = localStorage.getItem('id_persona');
          this.datosFoto = JSON.stringify({
            "id_persona_log": id_persona_log,
            "id_persona": id_persona,
            "fotopersona": this.imageSrc
          });
          this.perioService.altaRegistroFoto(this.datosFoto).subscribe();
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: 'Foto actualizada',
            icon: 'success',
            showConfirmButton: false
          }), this.recarga();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {// // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
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
      }]);

      return CapturasComponent;
    }();

    CapturasComponent.ɵfac = function CapturasComponent_Factory(t) {
      return new (t || CapturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"]));
    };

    CapturasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CapturasComponent,
      selectors: [["app-capturas"]],
      decls: 7,
      vars: 1,
      consts: [[1, "row"], [1, "col-12", "text-center", "mt-4"], ["novalidate", "", 1, "formulario", 3, "formGroup"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "fileContainer"], [1, "fa", "fa-camera"], ["type", "file", "name", "fotopersona", "formControlName", "fotopersona", "accept", "image/*", 3, "change"]],
      template: function CapturasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CapturasComponent_Template_input_change_6_listener($event) {
            return ctx.handleInputChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapturasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-capturas',
          templateUrl: './capturas.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/imagen/modimagen.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/imagen/modimagen.component.ts ***!
    \**********************************************************/

  /*! exports provided: ModimagenComponent */

  /***/
  function srcAppComponentsImagenModimagenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModimagenComponent", function () {
      return ModimagenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @jaspero/ng-image-preload */
    "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");

    function ModimagenComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModimagenComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("jpPreload", ctx_r523.fotopersona.imagen);
      }
    }

    var ModimagenComponent = /*#__PURE__*/function () {
      function ModimagenComponent(fb, activatedRoute, httpClient, perioService) {
        _classCallCheck(this, ModimagenComponent);

        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.perioService = perioService;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio

        this.personas = [];
        this.fotopersona = new _models_personas__WEBPACK_IMPORTED_MODULE_6__["Personas"]();
        this.imageSrc = ''; //modificar valores por defecto en la pagina de insercion TODO

        this.accionForm = this.fb.group({
          fotopersona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          id_persona: localStorage.getItem('id_persona'),
          id_persona_log: localStorage.getItem('id_persona')
        });
      }

      _createClass(ModimagenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargaMadre();
        }
      }, {
        key: "cargaMadre",
        value: function cargaMadre() {
          var _this7 = this;

          var id_persona = localStorage.getItem('id_persona');
          this.perioService.getFotografia(id_persona).subscribe(function (respuesta) {
            _this7.fotopersona = respuesta; //this.accionForm.controls['fechafin'].setValue(this.fotopersona[0]['imagen']);
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "handleInputChange",
        value: function handleInputChange(e) {
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
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(e) {
          var reader = e.target;
          this.imageSrc = reader.result;
          var id_persona = localStorage.getItem('id_persona');
          var id_persona_log = localStorage.getItem('id_persona');
          this.datosFoto = JSON.stringify({
            "id_persona_log": id_persona_log,
            "id_persona": id_persona,
            "fotopersona": this.imageSrc
          });
          this.perioService.altaRegistroFoto(this.datosFoto).subscribe();
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: 'Foto actualizada',
            icon: 'success',
            showConfirmButton: false
          }), this.recarga();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {// // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
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
      }]);

      return ModimagenComponent;
    }();

    ModimagenComponent.ɵfac = function ModimagenComponent_Factory(t) {
      return new (t || ModimagenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"]));
    };

    ModimagenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModimagenComponent,
      selectors: [["app-modimagen"]],
      decls: 9,
      vars: 3,
      consts: [["class", "block", 4, "ngIf"], [1, "row"], [1, "col-12", "text-center", "mt-4"], ["novalidate", "", 1, "formulario", 3, "formGroup"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "fileContainer"], [1, "fa", "fa-camera"], ["type", "file", "name", "fotopersona", "formControlName", "fotopersona", "accept", "image/*", 3, "change"], [1, "block"], ["src", "./assets/nophoto.jpg", 1, "nofoto", "animate", "fadeIn"], ["src", "./assets/loader.gif", 1, "perfildetalle", "animate", "fadeIn", 3, "jpPreload"]],
      template: function ModimagenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModimagenComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModimagenComponent_div_1_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModimagenComponent_Template_input_change_8_listener($event) {
            return ctx.handleInputChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fotopersona.imagen == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fotopersona.imagen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accionForm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__["PreloadDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModimagenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modimagen',
          templateUrl: './modimagen.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_7__["ApiPersonas"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/lista-usuarios/lista-usuarios.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/lista-usuarios/lista-usuarios.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ListaUsuariosComponent */

  /***/
  function srcAppComponentsListaUsuariosListaUsuariosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function () {
      return ListaUsuariosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListaUsuariosComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var usuario_r531 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", usuario_r531.nombre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r531.sala);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r531.id);
      }
    }

    var ListaUsuariosComponent = /*#__PURE__*/function () {
      function ListaUsuariosComponent(chatService) {
        _classCallCheck(this, ListaUsuariosComponent);

        this.chatService = chatService;
      }

      _createClass(ListaUsuariosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuariosActivosObs = this.chatService.getUsuariosActivos(); //emitir obtener usuarios

          this.chatService.emitirUsuariosActivos();
        }
      }]);

      return ListaUsuariosComponent;
    }();

    ListaUsuariosComponent.ɵfac = function ListaUsuariosComponent_Factory(t) {
      return new (t || ListaUsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]));
    };

    ListaUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListaUsuariosComponent,
      selectors: [["app-lista-usuarios"]],
      decls: 6,
      vars: 3,
      consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "badge", "badge-primary"], [1, "badge", "badge-info"]],
      template: function ListaUsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usuarios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListaUsuariosComponent_li_4_Template, 6, 3, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.usuariosActivosObs));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListaUsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lista-usuarios',
          templateUrl: './lista-usuarios.component.html'
        }]
      }], function () {
        return [{
          type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/dataservice.service */
    "./src/app/services/dataservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_serviciocompartido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/serviciocompartido.service */
    "./src/app/services/serviciocompartido.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../buscador/buscador.component */
    "./src/app/components/buscador/buscador.component.ts");
    /* harmony import */


    var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @jaspero/ng-image-preload */
    "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function MenuComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("jpPreload", ctx_r456.user.imagen);
      }
    }

    var _c0 = function _c0() {
      return ["/", "personas"];
    };

    var _c1 = function _c1() {
      return ["/", "historico"];
    };

    function MenuComponent_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
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
      }
    }

    var _c2 = function _c2() {
      return ["/", "formlistados"];
    };

    var _c3 = function _c3() {
      return ["/", "incidencias"];
    };

    var _c4 = function _c4() {
      return ["/", "configuracion"];
    };

    function MenuComponent_ng_container_28_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
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
      }
    }

    var _c5 = function _c5(a2) {
      return ["/", "perfil", a2];
    };

    var _c6 = function _c6() {
      return ["/", "home"];
    };

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(httpClient, servicioCompartido, dataService, router) {
        var _this8 = this;

        _classCallCheck(this, MenuComponent);

        this.httpClient = httpClient;
        this.servicioCompartido = servicioCompartido;
        this.dataService = dataService;
        this.router = router;
        this.user = new _models_personas__WEBPACK_IMPORTED_MODULE_3__["Personas"]();
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__["Constantes"].API_SERVER; //URL del servicio

        this.show = false;
        this.clickEventsubscription = this.servicioCompartido.getClickEvent().subscribe(function () {
          _this8.incrementCount();
        });
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          var id_persona = localStorage.getItem('id_persona');
          this.dataService.getUserId(localStorage.getItem('id_persona')).subscribe(function (respuesta) {
            _this9.user = respuesta;
            _this9.user.id_persona = localStorage.getItem('id_persona');
          });
        }
      }, {
        key: "incrementCount",
        value: function incrementCount() {
          this.show = !this.show;
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_serviciocompartido_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 29,
      vars: 17,
      consts: [["id", "sidebar", 1, "vertical-nav", "bg-white"], [1, "py-4", "px-3", "mb-4", "bg-light"], [1, "media", "d-flex", "align-items-center"], [4, "ngIf"], [1, "media-body"], [1, "minnom", "m-0"], [1, "font-weight-light", "roledef", "mt-2", "mb-2"], [1, "text-light", 3, "routerLink"], [1, "fa", "fa-user", "mr-1", "fa-1g"], [1, "text-gray", "font-weight-bold", "text-uppercase", "px-3", "small", "mt-2", "pb-4", "mb-0"], [1, "nav", "flex-column", "bg-white", "mb-0"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "fa", "fa-home", "mr-3", "fa-fw"], ["src", "./assets/nophoto.jpg", "width", "75", 1, "mr-3", "rounded-circle", "img-thumbnail", "shadow-sm"], ["width", "75", "src", "./assets/loader.gif", 1, "mr-3", "rounded-circle", "img-thumbnail", "shadow-sm", 3, "jpPreload"], [1, "fa", "fa-users", "mr-3", "fa-fw"], [1, "fa", "fa-history", "mr-3", "fa-fw"], ["href", "http://joraco.site:8081/b/ajax/exportar_registros_tareas_csv.php", 1, "nav-link"], [1, "fa", "fa-download", "mr-3", "fa-fw"], [1, "fa", "fa-cog", "mr-3", "fa-fw"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _buscador_buscador_component__WEBPACK_IMPORTED_MODULE_8__["BuscadorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_9__["PreloadDirective"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _services_serviciocompartido_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_1__["DataserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/periodicidad/accion.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/periodicidad/accion.component.ts ***!
    \*************************************************************/

  /*! exports provided: AccionComponent */

  /***/
  function srcAppComponentsPeriodicidadAccionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccionComponent", function () {
      return AccionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/accionpuntual */
    "./src/app/models/accionpuntual.ts");
    /* harmony import */


    var _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/periodicidad.service */
    "./src/app/services/periodicidad.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/periodicidad */
    "./src/app/models/periodicidad.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/periodicidadmadre */
    "./src/app/models/periodicidadmadre.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function AccionComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_22_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r487);

          var ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r486.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dias_r484 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dias_r484.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dias.name", dias_r484.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", dias_r484.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dias_r484.value);
      }
    }

    function AccionComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_24_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r491);

          var ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r490.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tramos_r488 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tramos_r488.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", tramos_r488.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tramos_r488.value);
      }
    }

    function AccionComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_31_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r495);

          var ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r494.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trames_r492 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trames_r492.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", trames_r492.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trames_r492.value);
      }
    }

    function AccionComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionComponent_div_59_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r499);

          var ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r498.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var diam_r496 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checkbox", diam_r496.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", diam_r496.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", diam_r496.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", diam_r496.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox", diam_r496.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](diam_r496.name);
      }
    }

    var AccionComponent = /*#__PURE__*/function () {
      function AccionComponent(fb, activatedRoute, httpClient, perioService) {
        var _this10 = this;

        _classCallCheck(this, AccionComponent);

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
        this.mesVigente = new Date().getMonth() + 1; //cargo los dias del mes en curso

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this10.diasMes = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos semana

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this10.tramosSemana = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos mes

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this10.tramosMes = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos dias de la semana

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this10.diasSemana = result;
        }, function (error) {
          return console.error(error);
        }); //cargo el listado de personas para esta ID tarea

        httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this10.periodicidades = result;
        }, function (error) {
          return console.error(error);
        }); //modificar valores por defecto en la pagina de insercion TODO

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

      _createClass(AccionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargaMadre();
        }
      }, {
        key: "selectAll",
        value: function selectAll(e) {
          if (this.diasSemana.every(function (val) {
            return val.checked == true;
          })) {
            this.diasSemana.forEach(function (val) {
              val.checked = null;
            });
          } else {
            this.diasSemana.forEach(function (val) {
              val.checked = true;
            });
          }
        }
      }, {
        key: "cargaMadre",
        value: function cargaMadre() {
          var _this11 = this;

          var id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
          this.perioService.getDatosMadre(id_tarea).subscribe(function (respuesta) {
            _this11.madre = respuesta;
            _this11.mad = respuesta;
          });
        } //eliminar registro

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(identificacion) {
          this.datosborrado = JSON.stringify({
            "tarea": this.datoregistro.id_tarea,
            "id_value": identificacion
          });
          this.perioService["delete"](this.datosborrado).subscribe();
        }
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(e) {
          var checkArrayt = this.accionForm.get('checkArrayt');

          if (e.target.checked) {
            checkArrayt.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
          } else {
            var i = 0;
            checkArrayt.controls.forEach(function (item) {
              if (item.value == e.target.value) {
                checkArrayt.removeAt(i);
                return;
              }

              i++;
            }); //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)

            this.borrarRegistro(e.target.value);
          }
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var valormes = this.mesVigente; // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
          // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;

          var id_tarea = this.accionForm.get('id_tarea');
          this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Periodicidad actualizada',
            icon: 'success',
            showConfirmButton: true
          });
        }
      }]);

      return AccionComponent;
    }();

    AccionComponent.ɵfac = function AccionComponent_Factory(t) {
      return new (t || AccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"]));
    };

    AccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccionComponent,
      selectors: [["app-accion"]],
      decls: 65,
      vars: 12,
      consts: [["novalidate", "", 1, "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card", "bg-default"], [1, "card-header"], [1, "card-body"], [1, "col-md-7"], [3, "formGroup"], ["type", "hidden", "name", "id_tarea", "formControlName", "id_tarea", 1, "form-control"], ["type", "hidden", "name", "id_categoria", "formControlName", "id_categoria", 1, "form-control"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "titolpetit"], [1, "bdott"], [1, "row", "mt-3"], [1, "col-6", "minitext"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "row", "mt-3", "minitext"], [1, "col-12"], [1, "row", 3, "formGroup"], [1, "col-6"], ["for", "dp"], [1, "input-group"], ["ngbDatepicker", "", "name", "fechafin", "formControlName", "fechafin", "readonly", "", 1, "form-control", 3, "placeholder"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [1, "col-6", 3, "formGroup"], ["for", "repeticiones"], ["type", "number", "name", "repeticiones", "formControlName", "repeticiones", 1, "form-control", 3, "value"], [1, "col-12", "m-0", "p-0"], [1, "row", "mb-3", "p-0", "text-center"], [1, "row", "m-0", "p-0", "checkbox"], ["class", "col-2  text-center p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-info", "mt-3"], [1, "col-8"], [1, "col-4"], ["type", "checkbox", 3, "name", "value", "checked", "change"], ["type", "checkbox", 3, "value", "checked", "change"], [1, "col-4", "text-right"], [1, "col-2", "text-center", "p-0", "m-0"], ["type", "checkbox", 3, "value", "name", "id", "checked", "change"], [3, "for"]],
      template: function AccionComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccionComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Acci\xF3n puntual ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Posici\xF3n en la semana");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Posici\xF3n en el mes");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccionComponent_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r500);

            var _r482 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

            return _r482.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "N\xFAmero de repeticiones");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Selecci\xF3n de d\xEDas");

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-accion',
          templateUrl: './accion.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/periodicidad/accionhistorico.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/periodicidad/accionhistorico.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AccionHistoricoComponent */

  /***/
  function srcAppComponentsPeriodicidadAccionhistoricoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccionHistoricoComponent", function () {
      return AccionHistoricoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/accionpuntual */
    "./src/app/models/accionpuntual.ts");
    /* harmony import */


    var _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/periodicidad.service */
    "./src/app/services/periodicidad.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/periodicidad */
    "./src/app/models/periodicidad.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/periodicidadmadre */
    "./src/app/models/periodicidadmadre.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function AccionHistoricoComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_20_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r509);

          var ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r508.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dias_r506 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dias_r506.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dias.name", dias_r506.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", dias_r506.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dias_r506.value);
      }
    }

    function AccionHistoricoComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r513 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_22_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r513);

          var ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r512.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tramos_r510 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tramos_r510.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", tramos_r510.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tramos_r510.value);
      }
    }

    function AccionHistoricoComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r517 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_29_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r517);

          var ctx_r516 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r516.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trames_r514 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trames_r514.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", trames_r514.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trames_r514.value);
      }
    }

    function AccionHistoricoComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r521 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccionHistoricoComponent_div_56_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r521);

          var ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r520.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var diam_r518 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checkbox", diam_r518.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", diam_r518.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", diam_r518.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", diam_r518.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox", diam_r518.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](diam_r518.name);
      }
    }

    var AccionHistoricoComponent = /*#__PURE__*/function () {
      function AccionHistoricoComponent(fb, activatedRoute, httpClient, perioService) {
        var _this12 = this;

        _classCallCheck(this, AccionHistoricoComponent);

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
        this.mesVigente = new Date().getMonth() + 1; //cargo los dias del mes en curso

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php').subscribe(function (result) {
          _this12.diasMes = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos semana

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this12.tramosSemana = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos mes

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this12.tramosMes = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos dias de la semana

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this12.diasSemana = result;
        }, function (error) {
          return console.error(error);
        }); //cargo el listado de personas para esta ID tarea

        httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this12.periodicidades = result;
        }, function (error) {
          return console.error(error);
        }); //modificar valores por defecto en la pagina de insercion TODO

        this.accionForm = this.fb.group({
          checkArrayt: this.fb.array([]),
          fechafin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          //   repeticiones: new FormControl(this.madre),
          repeticiones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
          id_categoria: '3' //id de accion puntual

        });
      }

      _createClass(AccionHistoricoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargaMadre();
        }
      }, {
        key: "cargaMadre",
        value: function cargaMadre() {
          var _this13 = this;

          var id_tarea = this.activatedRoute.snapshot.paramMap.get('id');
          this.perioService.getDatosMadre(id_tarea).subscribe(function (respuesta) {
            _this13.madre = respuesta;
            _this13.mad = respuesta[0];

            _this13.accionForm.controls['fechafin'].setValue(_this13.madre[0]['fechafin']);

            _this13.accionForm.controls['repeticiones'].setValue(_this13.madre[0]['repeticiones']);

            console.log(_this13.mad.fechafin);
          });
        } //   this.perioService.getDatosMadre (this.datoregistro.id_tarea)
        //     .subscribe( (
        //       respuesta:PeriodicidadMadre) => {
        //        this.madre = respuesta;
        //        console.log(this.madre);
        //     });
        // }
        //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(identificacion) {
          this.datosborrado = JSON.stringify({
            "tarea": this.datoregistro.id_tarea,
            "id_value": identificacion
          });
          this.perioService["delete"](this.datosborrado).subscribe();
        }
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(e) {
          var checkArrayt = this.accionForm.get('checkArrayt');

          if (e.target.checked) {
            checkArrayt.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
          } else {
            var i = 0;
            checkArrayt.controls.forEach(function (item) {
              if (item.value == e.target.value) {
                checkArrayt.removeAt(i);
                return;
              }

              i++;
            }); //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)

            this.borrarRegistro(e.target.value);
          }
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var valormes = this.mesVigente; // const fechafin: FormControl = this.accionForm.get('fechafin') as FormControl;
          // const repeticiones: FormControl = this.accionForm.get('repeticiones') as FormControl;

          var id_tarea = this.accionForm.get('id_tarea');
          this.perioService.altaRegistrochecks(this.accionForm.value).subscribe();
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Periodicidad actualizada',
            icon: 'success',
            showConfirmButton: false
          });
        }
      }]);

      return AccionHistoricoComponent;
    }();

    AccionHistoricoComponent.ɵfac = function AccionHistoricoComponent_Factory(t) {
      return new (t || AccionHistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"]));
    };

    AccionHistoricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccionHistoricoComponent,
      selectors: [["app-accionhistorico"]],
      decls: 60,
      vars: 10,
      consts: [["novalidate", "", 1, "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card", "bg-default"], [1, "card-header"], [1, "card-body"], [1, "col-md-7"], [3, "formGroup"], ["type", "hidden", "name", "id_tarea", "formControlName", "id_tarea", 1, "form-control"], ["type", "hidden", "name", "id_categoria", "formControlName", "id_categoria", 1, "form-control"], [1, "titolpetit"], [1, "bdott"], [1, "row", "mt-3"], [1, "col-6", "minitext"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "row", "mt-3", "minitext"], [1, "col-12"], [1, "row", 3, "formGroup"], [1, "col-6"], ["for", "dp"], [1, "input-group"], ["ngbDatepicker", "", "name", "fechafin", "formControlName", "fechafin", "disabled", "", "readonly", "", 1, "form-control", 3, "placeholder"], ["d", "ngbDatepicker"], [1, "input-group-append"], [1, "col-6", 3, "formGroup"], ["for", "repeticiones"], ["type", "number", "name", "repeticiones", "formControlName", "repeticiones", "disabled", "", 1, "form-control"], [1, "col-12", "m-0", "p-0"], [1, "row", "mb-3", "p-0", "text-center"], [1, "row", "m-0", "p-0", "checkbox"], ["class", "col-2  text-center p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], [1, "col-8"], [1, "col-4"], ["type", "checkbox", "disabled", "", 3, "name", "value", "checked", "change"], ["type", "checkbox", "disabled", "", 3, "value", "checked", "change"], [1, "col-4", "text-right"], [1, "col-2", "text-center", "p-0", "m-0"], ["type", "checkbox", "disabled", "", 3, "value", "name", "id", "checked", "change"], [3, "for"]],
      template: function AccionHistoricoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccionHistoricoComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Acci\xF3n puntual ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Posici\xF3n en la semana");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Posici\xF3n en el mes");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "N\xFAmero de repeticiones");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Selecci\xF3n de d\xEDas");

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccionHistoricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-accionhistorico',
          templateUrl: './accionhistorico.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/periodicidad/check.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/periodicidad/check.component.ts ***!
    \************************************************************/

  /*! exports provided: CheckComponent */

  /***/
  function srcAppComponentsPeriodicidadCheckComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckComponent", function () {
      return CheckComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_accionpuntual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/accionpuntual */
    "./src/app/models/accionpuntual.ts");
    /* harmony import */


    var _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/periodicidad.service */
    "./src/app/services/periodicidad.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_periodicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/periodicidad */
    "./src/app/models/periodicidad.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _models_periodicidadmadre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/periodicidadmadre */
    "./src/app/models/periodicidadmadre.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_22_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r466);

          var ctx_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r465.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dias_r463 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dias_r463.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dias.name", dias_r463.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", dias_r463.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dias_r463.value);
      }
    }

    function CheckComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_24_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470);

          var ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r469.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tramos_r467 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tramos_r467.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", tramos_r467.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tramos_r467.value);
      }
    }

    function CheckComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_31_Template_input_change_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r474);

          var ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r473.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var trames_r471 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trames_r471.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", trames_r471.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trames_r471.value);
      }
    }

    function CheckComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckComponent_div_49_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r478);

          var ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r477.onCheckboxChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var diam_r475 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checkbox", diam_r475.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checkbox", diam_r475.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("checked", diam_r475.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", diam_r475.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checkbox", diam_r475.value, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](diam_r475.name);
      }
    }

    var CheckComponent = /*#__PURE__*/function () {
      function CheckComponent(fb, activatedRoute, httpClient, perioService) {
        var _this14 = this;

        _classCallCheck(this, CheckComponent);

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
        this.mesVigente = new Date().getMonth() + 1; //cargo los dias del mes en curso

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_dias_mes_actual.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this14.diasMes = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos semana

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this14.tramosSemana = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos mes

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_mes.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this14.tramosMes = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los tramos dias de la semana

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_tramos_dias_semana.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this14.diasSemana = result;
        }, function (error) {
          return console.error(error);
        }); //cargo el listado de personas para esta ID tarea

        httpClient.get(this.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this14.periodicidades = result;
        }, function (error) {
          return console.error(error);
        }); //modificar valores por defecto en la pagina de insercion TODO

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

      _createClass(CheckComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cargaMadre();
        }
      }, {
        key: "cargaMadre",
        value: function cargaMadre() {
          var _this15 = this;

          var id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
          this.perioService.getDatosMadre(id_tarea).subscribe(function (respuesta) {
            _this15.madre = respuesta;
            _this15.mad = respuesta;
          });
        } //eliminar registro

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(identificacion) {
          this.datosborrado = JSON.stringify({
            "tarea": this.datoregistro.id_tarea,
            "id_value": identificacion
          });
          this.perioService["delete"](this.datosborrado).subscribe();
        }
      }, {
        key: "onCheckboxChange",
        value: function onCheckboxChange(e) {
          var checkArrayt = this.accionFormCheck.get('checkArrayt');

          if (e.target.checked) {
            checkArrayt.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
          } else {
            var i = 0;
            checkArrayt.controls.forEach(function (item) {
              if (item.value == e.target.value) {
                checkArrayt.removeAt(i);
                return;
              }

              i++;
            }); //quito el check y borro el registro 8no se aprecia porqu eno recarga la pagina)

            this.borrarRegistro(e.target.value);
          }
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var valormes = this.mesVigente; // const fechafin: FormControl = this.accionFormCheck.get('fechafin') as FormControl;
          // const repeticiones: FormControl = this.accionFormCheck.get('repeticiones') as FormControl;

          var id_tarea = this.accionFormCheck.get('id_tarea');
          this.perioService.altaRegistrochecks(this.accionFormCheck.value).subscribe();
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Periodicidad actualizada',
            icon: 'success',
            showConfirmButton: false
          });
        }
      }]);

      return CheckComponent;
    }();

    CheckComponent.ɵfac = function CheckComponent_Factory(t) {
      return new (t || CheckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"]));
    };

    CheckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckComponent,
      selectors: [["app-check"]],
      decls: 55,
      vars: 10,
      consts: [["novalidate", "", 1, "formulario", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "card", "bg-default"], [1, "card-header"], [1, "card-body"], [1, "col-md-7"], [3, "formGroup"], ["type", "hidden", "name", "id_tarea", "formControlName", "id_tarea", 1, "form-control"], ["type", "hidden", "name", "id_categoria", "formControlName", "id_categoria", 1, "form-control"], ["type", "hidden", "name", "id_persona", "formControlName", "id_persona", 1, "form-control"], [1, "titolpetit"], [1, "bdott"], [1, "row", "mt-3"], [1, "col-6", "minitext"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "row", "mt-3", "minitext"], [1, "col-12"], [1, "row", 3, "formGroup"], [1, "col-6"], [1, "col-6", 3, "formGroup"], [1, "col-12", "m-0", "p-0"], [1, "row", "mb-3", "p-0", "text-center"], [1, "row", "m-0", "p-0", "checkbox"], ["class", "col-2  text-center p-0 m-0", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-info", "mt-3"], [1, "col-8"], [1, "col-4"], ["type", "checkbox", 3, "name", "value", "checked", "change"], ["type", "checkbox", 3, "value", "checked", "change"], [1, "col-4", "text-right"], [1, "col-2", "text-center", "p-0", "m-0"], ["type", "checkbox", 3, "value", "name", "id", "checked", "change"], [3, "for"]],
      template: function CheckComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submitForm();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Posici\xF3n en la semana");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Posici\xF3n en el mes");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Selecci\xF3n de d\xEDas");

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-check',
          templateUrl: './check.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _services_periodicidad_service__WEBPACK_IMPORTED_MODULE_5__["PeriodicidadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/authguard.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/guards/authguard.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthguardGuard */

  /***/
  function srcAppGuardsAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
      return AuthguardGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/dataservice.service */
    "./src/app/services/dataservice.service.ts");

    var AuthguardGuard = /*#__PURE__*/function () {
      function AuthguardGuard(dataService, router) {
        _classCallCheck(this, AuthguardGuard);

        this.dataService = dataService;
        this.router = router;
      }

      _createClass(AuthguardGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var routeurl = state.url;
          return this.isLogin(routeurl);
        }
      }, {
        key: "isLogin",
        value: function isLogin(routeurl) {
          if (this.dataService.isLoggedIn()) {
            return true;
          }

          this.dataService.redirectUrl = routeurl;
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: routeurl
            }
          });
        }
      }]);

      return AuthguardGuard;
    }();

    AuthguardGuard.ɵfac = function AuthguardGuard_Factory(t) {
      return new (t || AuthguardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthguardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthguardGuard,
      factory: AuthguardGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/usuario-guard.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/guards/usuario-guard.service.ts ***!
    \*************************************************/

  /*! exports provided: UsuarioGuardService */

  /***/
  function srcAppGuardsUsuarioGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioGuardService", function () {
      return UsuarioGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/websocket.service */
    "./src/app/services/websocket.service.ts");

    var UsuarioGuardService = /*#__PURE__*/function () {
      function UsuarioGuardService(wsService, router) {
        _classCallCheck(this, UsuarioGuardService);

        this.wsService = wsService;
        this.router = router;
      }

      _createClass(UsuarioGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.wsService.getUsuario()) {
            return true;
          } else {
            this.router.navigateByUrl('/');
            return false;
          }
        }
      }]);

      return UsuarioGuardService;
    }();

    UsuarioGuardService.ɵfac = function UsuarioGuardService_Factory(t) {
      return new (t || UsuarioGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    UsuarioGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsuarioGuardService,
      factory: UsuarioGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/accionpuntual.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/accionpuntual.ts ***!
    \*****************************************/

  /*! exports provided: ModeloAccionPuntual */

  /***/
  function srcAppModelsAccionpuntualTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeloAccionPuntual", function () {
      return ModeloAccionPuntual;
    });

    var ModeloAccionPuntual = function ModeloAccionPuntual() {
      _classCallCheck(this, ModeloAccionPuntual);
    };
    /***/

  },

  /***/
  "./src/app/models/ayuda.ts":
  /*!*********************************!*\
    !*** ./src/app/models/ayuda.ts ***!
    \*********************************/

  /*! exports provided: Ayuda */

  /***/
  function srcAppModelsAyudaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ayuda", function () {
      return Ayuda;
    });

    var Ayuda = function Ayuda() {
      _classCallCheck(this, Ayuda);
    };
    /***/

  },

  /***/
  "./src/app/models/constantes.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/constantes.model.ts ***!
    \********************************************/

  /*! exports provided: Constantes */

  /***/
  function srcAppModelsConstantesModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constantes", function () {
      return Constantes;
    });

    var Constantes = function Constantes() {
      _classCallCheck(this, Constantes);
    }; //public static SERVER_API:string;


    Constantes.API_SERVER = 'http://joraco.site:8081/b'; //public static API_SERVER = 'http://localhost/b';

    Constantes.nombreTurnos = 'turnos';
    Constantes.ARND = Math.floor(100000000 + Math.random() * 900000000);
    Constantes.BRND = Math.floor(100000000 + Math.random() * 900000000);
    Constantes.CRND = Math.floor(100000000000 + Math.random() * 900000000000);
    Constantes.DRND = Math.floor(100000000000 + Math.random() * 900000000000);
    /***/
  },

  /***/
  "./src/app/models/incidencia.ts":
  /*!**************************************!*\
    !*** ./src/app/models/incidencia.ts ***!
    \**************************************/

  /*! exports provided: Incidencia */

  /***/
  function srcAppModelsIncidenciaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Incidencia", function () {
      return Incidencia;
    });

    var Incidencia = function Incidencia() {
      _classCallCheck(this, Incidencia);
    };
    /***/

  },

  /***/
  "./src/app/models/issue.ts":
  /*!*********************************!*\
    !*** ./src/app/models/issue.ts ***!
    \*********************************/

  /*! exports provided: Issue */

  /***/
  function srcAppModelsIssueTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Issue", function () {
      return Issue;
    });

    var Issue = function Issue() {
      _classCallCheck(this, Issue);
    };
    /***/

  },

  /***/
  "./src/app/models/issuehistorico.ts":
  /*!******************************************!*\
    !*** ./src/app/models/issuehistorico.ts ***!
    \******************************************/

  /*! exports provided: IssueHistorico */

  /***/
  function srcAppModelsIssuehistoricoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IssueHistorico", function () {
      return IssueHistorico;
    });

    var IssueHistorico = function IssueHistorico() {
      _classCallCheck(this, IssueHistorico);
    };
    /***/

  },

  /***/
  "./src/app/models/periodicidad.ts":
  /*!****************************************!*\
    !*** ./src/app/models/periodicidad.ts ***!
    \****************************************/

  /*! exports provided: ModeloPeriodicidad */

  /***/
  function srcAppModelsPeriodicidadTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModeloPeriodicidad", function () {
      return ModeloPeriodicidad;
    });

    var ModeloPeriodicidad = function ModeloPeriodicidad() {
      _classCallCheck(this, ModeloPeriodicidad);
    };
    /***/

  },

  /***/
  "./src/app/models/periodicidadmadre.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/periodicidadmadre.ts ***!
    \*********************************************/

  /*! exports provided: PeriodicidadMadre */

  /***/
  function srcAppModelsPeriodicidadmadreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeriodicidadMadre", function () {
      return PeriodicidadMadre;
    });

    var PeriodicidadMadre = function PeriodicidadMadre() {
      _classCallCheck(this, PeriodicidadMadre);
    };
    /***/

  },

  /***/
  "./src/app/models/personas.ts":
  /*!************************************!*\
    !*** ./src/app/models/personas.ts ***!
    \************************************/

  /*! exports provided: Personas */

  /***/
  function srcAppModelsPersonasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Personas", function () {
      return Personas;
    });

    var Personas = function Personas() {
      _classCallCheck(this, Personas);
    };
    /***/

  },

  /***/
  "./src/app/models/seguimiento.ts":
  /*!***************************************!*\
    !*** ./src/app/models/seguimiento.ts ***!
    \***************************************/

  /*! exports provided: Seguimiento */

  /***/
  function srcAppModelsSeguimientoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Seguimiento", function () {
      return Seguimiento;
    });

    var Seguimiento = function Seguimiento() {
      _classCallCheck(this, Seguimiento);
    };
    /***/

  },

  /***/
  "./src/app/models/turnos.ts":
  /*!**********************************!*\
    !*** ./src/app/models/turnos.ts ***!
    \**********************************/

  /*! exports provided: Turnos */

  /***/
  function srcAppModelsTurnosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Turnos", function () {
      return Turnos;
    });

    var Turnos = function Turnos() {
      _classCallCheck(this, Turnos);
    };
    /***/

  },

  /***/
  "./src/app/models/usuario.ts":
  /*!***********************************!*\
    !*** ./src/app/models/usuario.ts ***!
    \***********************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppModelsUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });

    var Usuario = function Usuario(nombre) {
      _classCallCheck(this, Usuario);

      this.nombre = nombre;
    };
    /***/

  },

  /***/
  "./src/app/pages/abririncidencia.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/abririncidencia.component.ts ***!
    \****************************************************/

  /*! exports provided: AbririncidenciaComponent */

  /***/
  function srcAppPagesAbririncidenciaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbririncidenciaComponent", function () {
      return AbririncidenciaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/admin-servicio.service */
    "./src/app/services/admin-servicio.service.ts");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _models_incidencia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/incidencia */
    "./src/app/models/incidencia.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AbririncidenciaComponent_img_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
      }

      if (rf & 2) {
        var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r351.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var AbririncidenciaComponent = /*#__PURE__*/function () {
      function AbririncidenciaComponent(httpClient, formBuilder, adminService) {
        var _this16 = this;

        _classCallCheck(this, AbririncidenciaComponent);

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
        var id_persona = localStorage.getItem('id_persona');
        this.adminService.getPersonas(id_persona).subscribe(function (respuesta) {
          _this16.personasdatos = respuesta;
          _this16.incidenciaForm = formBuilder.group({
            id_persona_log: id_persona,
            nombres: _this16.personasdatos.nombres,
            imagenincidencia: [''],
            tokenIncidencia: [''],
            enunciado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(140), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            textoincidencia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2440), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        });
      }

      _createClass(AbririncidenciaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "preview",
        value: function preview(e) {
          var _this17 = this;

          var files = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
          if (files.length === 0) return;
          var pattern = /image-*/;

          if (!files.type.match(pattern)) {
            alert('invalid format');
            return;
          }

          var reader = new FileReader();
          this.imagePath = files;
          reader.readAsDataURL(files);

          reader.onload = function (_event) {
            _this17.imgURL = reader.result;

            if (_this17.imgURL.length * 2 > Math.pow(2, 21)) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'ERROR en la imagen',
                text: 'La imagen es mayor de 2Mb',
                icon: 'success',
                showConfirmButton: false
              });
            }
          };
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }, {
        key: "guardaryenviarIncidencia",
        value: function guardaryenviarIncidencia(form) {
          var _this18 = this;

          if (this.incidenciaForm.valid) {
            this.incidenciaForm.value.imagenincidencia = this.imgURL;
            this.incidenciaForm.value.tokenIncidencia = this.makeid(15);
            var peticion;
            peticion = this.adminService.guardarNuevancidencia(this.incidenciaForm.value);
            peticion.subscribe(function (respuesta) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: _this18.incidenciadatos.enunciado,
                text: "La incidencia ha sido abiertacon el token ".concat(_this18.incidenciaForm.value.tokenIncidencia),
                icon: 'success',
                showConfirmButton: false
              }), _this18.recarga();
            });
          }
        }
      }]);

      return AbririncidenciaComponent;
    }();

    AbririncidenciaComponent.ɵfac = function AbririncidenciaComponent_Factory(t) {
      return new (t || AbririncidenciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]));
    };

    AbririncidenciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbririncidenciaComponent,
      selectors: [["app-abririncidencia"]],
      decls: 43,
      vars: 8,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [3, "formGroup", "ngSubmit"], ["f", "ngForm"], [1, "row", "m-2", "mt-4"], [1, "col-md-6", "alturaminima", "mb-5"], [1, "mb-3", "mt-2"], ["type", "text", "placeholder", "Escriba un enunciado", "autocomplete", "off", "value", "", "formControlName", "enunciado", 1, "form-control", "input-sm", "mb-3"], ["rows", "10", "placeholder", "Escriba un texto", "formControlName", "textoincidencia", 1, "form-control", "input-sm", "mb-3"], [1, "btn", "btn-info", 3, "disabled"], [1, "row"], [1, "col-12", "text-center"], ["height", "200", 3, "src", 4, "ngIf"], [1, "col-12", "text-center", "mt-4"], ["for", "imagenincidencia", 1, "fileContainer"], [1, "fa", "fa-camera"], ["type", "file", "id", "imagenincidencia", "name", "imagenincidencia", "formControlName", "imagenincidencia", "accept", "image/*", 3, "change"], [1, "mt-2"], ["height", "200", 3, "src"]],
      template: function AbririncidenciaComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AbririncidenciaComponent_Template_form_ngSubmit_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r352);

            var _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            return ctx.guardaryenviarIncidencia(_r350);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Si tiene alguna sugerencia o incidencia que comunicarnos con respecto al funcionamiento de esta aplicaci\xF3n, por favor, haga uso del siguiente formulario.");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AbririncidenciaComponent_Template_input_change_38_listener($event) {
            return ctx.preview($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Si desea adjuntar una captura de pantalla, por favor pulse aqu\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbririncidenciaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-abririncidencia',
          templateUrl: './abririncidencia.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/alta.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/alta.component.ts ***!
    \*****************************************/

  /*! exports provided: AltaComponent */

  /***/
  function srcAppPagesAltaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AltaComponent", function () {
      return AltaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/apiregistros.service */
    "./src/app/services/apiregistros.service.ts");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AltaComponent_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rol_r128 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r128.id_rol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r128.rol_name, " ");
      }
    }

    function AltaComponent_div_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fecha fin acci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 47, 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_div_62_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r130.model = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AltaComponent_div_62_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          return _r129.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r126.model);
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var AltaComponent = /*#__PURE__*/function () {
      function AltaComponent(httpClient, apiService, router) {
        var _this19 = this;

        _classCallCheck(this, AltaComponent);

        this.httpClient = httpClient;
        this.apiService = apiService;
        this.router = router;
        this.registro = new _models_issue__WEBPACK_IMPORTED_MODULE_3__["Issue"]();
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_7__;
        this.roles = []; // recurrencias: Recurrencias[] = [];

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
          hora: null,
          estatus: null,
          observaciones: null,
          id_categoria: null,
          flag_visibilidad: null,
          prioridad: null,
          id_rol: null
        };
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["ColumnMode"]; //cargo los roles para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read_noadmin.php').subscribe(function (result) {
          _this19.roles = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las categorias para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(function (result) {
          _this19.categorias = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(AltaComponent, [{
        key: "onReady",
        value: function onReady(editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          this.router.navigate(['/home']);
        } //alta de registro

      }, {
        key: "altaRegistro",
        value: function altaRegistro() {
          var _this20 = this;

          //si los campos obligatorios nos llegan vacios
          if (this.datoregistro.tarea == null || this.datoregistro.hora == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Revise los datos',
              text: 'Los campos no pueden estar vacíos!!',
              icon: 'error'
            });
          } else {
            //enviamos el array a la funcions del server
            this.apiService.altaRegistro(this.datoregistro).subscribe(function (datos) {
              console.log(_this20.datoregistro);
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: _this20.datoregistro.tarea,
                text: 'Registro añadido',
                icon: 'success',
                showConfirmButton: true
              }); //una vez creada la tarea, obtenemos el lastId para abrir la tarea creada.

              _this20.apiService.getLastId().subscribe(function (respuesta) {
                _this20.registro = respuesta;
                var identif = JSON.stringify(_this20.registro).slice(1, -1);
                var identificador = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].ARND + identif + _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].BRND;

                _this20.router.navigateByUrl("/detalle/".concat(identificador));
              }); // ,this.recarga()
              // ;      

            });
          }
        }
      }]);

      return AltaComponent;
    }();

    AltaComponent.ɵfac = function AltaComponent_Factory(t) {
      return new (t || AltaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]));
    };

    AltaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AltaComponent,
      selectors: [["app-alta"]],
      viewQuery: function AltaComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 79,
      vars: 38,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-md-6", "pt-5"], [1, "form-group"], ["name", "id_persona", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona", "ngModel"], ["for", "tarea"], ["required", "", "placeholder", "Resumen tarea", "required", "", "minlength", "4", "name", "tarea", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["tarea", "ngModel"], [1, "row"], [1, "col-md-4"], [1, "form-group", "24hr-example"], ["for", "hora"], ["required", "", "aria-label", "24hr format", "placeholder", "00:00", "minlength", "5", "maxlength", "5", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", "reloj", 2, "background-color", "white", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["hora", "ngModel"], [3, "minutesGap"], ["fullTime", ""], ["for", "id_rol"], ["required", "", "name", "id_rol", "placeholder", "Seleccione categoria", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["for", "prioridad"], ["required", "", "name", "prioridad", "placeholder", "Seleccione prioridad", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["prioridad", "ngModel"], ["selected", "", 3, "ngValue"], ["value", "alta"], ["value", "media"], ["value", "baja"], [1, "col-md-2"], [4, "ngIf"], [1, "col-4"], ["for", "observaciones"], ["rows", "10", "placeholder", "Observaciones", "maxlength", "2000", "name", "observaciones", "data", "", 3, "ngModel", "editor", "ready", "ngModelChange"], ["observaciones", "ngModel"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [3, "value"], ["for", "dp"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"]],
      template: function AltaComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.datoregistro.id_persona = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.datoregistro.tarea = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.datoregistro.hora = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ngx-material-timepicker", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_select_ngModelChange_39_listener($event) {
            return ctx.datoregistro.id_rol = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AltaComponent_Template_select_ngModelChange_47_listener($event) {
            return ctx.datoregistro.prioridad = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function AltaComponent_Template_ckeditor_ready_72_listener($event) {
            return ctx.onReady($event);
          })("ngModelChange", function AltaComponent_Template_ckeditor_ngModelChange_72_listener($event) {
            return ctx.datoregistro.observaciones = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AltaComponent_Template_button_click_75_listener() {
            return ctx.altaRegistro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.datoregistro.hora)("ngxTimepicker", _r122)("format", 24);

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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbInputDatepicker"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AltaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alta',
          templateUrl: './alta.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/configuracion.pages.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/configuracion.pages.ts ***!
    \**********************************************/

  /*! exports provided: ConfiguracionPage */

  /***/
  function srcAppPagesConfiguracionPagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionPage", function () {
      return ConfiguracionPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var ConfiguracionPage = function ConfiguracionPage() {
      _classCallCheck(this, ConfiguracionPage);
    };

    ConfiguracionPage.ɵfac = function ConfiguracionPage_Factory(t) {
      return new (t || ConfiguracionPage)();
    };

    ConfiguracionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfiguracionPage,
      selectors: [["app-configuracion"]],
      decls: 56,
      vars: 2,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "table", "table-hover", "table-sm"], [1, "table-active"]],
      template: function ConfiguracionPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Configuraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Configuraci\xF3n");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiguracionPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-configuracion',
          templateUrl: './configuracion.pages.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/descarga.pages.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/descarga.pages.ts ***!
    \*****************************************/

  /*! exports provided: DescargaPage */

  /***/
  function srcAppPagesDescargaPagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescargaPage", function () {
      return DescargaPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var DescargaPage = function DescargaPage() {
      _classCallCheck(this, DescargaPage);
    };

    DescargaPage.ɵfac = function DescargaPage_Factory(t) {
      return new (t || DescargaPage)();
    };

    DescargaPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescargaPage,
      selectors: [["app-descarga"]],
      decls: 56,
      vars: 2,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "table", "table-hover", "table-sm"], [1, "table-active"]],
      template: function DescargaPage_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescargaPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-descarga',
          templateUrl: './descarga.pages.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/detalle.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/detalle.component.ts ***!
    \********************************************/

  /*! exports provided: DetalleComponent */

  /***/
  function srcAppPagesDetalleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleComponent", function () {
      return DetalleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _services_detalle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/detalle.service */
    "./src/app/services/detalle.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _models_seguimiento__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models/seguimiento */
    "./src/app/models/seguimiento.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../components/periodicidad/accion.component */
    "./src/app/components/periodicidad/accion.component.ts");
    /* harmony import */


    var _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../components/periodicidad/check.component */
    "./src/app/components/periodicidad/check.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function DetalleComponent_em_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "nunca modificado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleComponent_option_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var categoria_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", categoria_r17.id_categoria);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoria_r17.categoria_name, " ");
      }
    }

    function DetalleComponent_div_65_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-accion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleComponent_div_65_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_65_div_1_div_1_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.registro.decidecategoria === "3");
      }
    }

    function DetalleComponent_div_65_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-check");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleComponent_div_65_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_65_div_2_div_1_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.registro.decidecategoria === "1");
      }
    }

    function DetalleComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_65_div_1_Template, 2, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetalleComponent_div_65_div_2_Template, 2, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.registro.id_categoria === "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.registro.id_categoria === "1");
      }
    }

    function DetalleComponent_div_66_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-accion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleComponent_div_66_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-check");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DetalleComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetalleComponent_div_66_div_1_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetalleComponent_div_66_div_2_Template, 2, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.registro.id_categoria === "3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.registro.id_categoria === "1");
      }
    }

    function DetalleComponent_div_94_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_div_94_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var suscripcio_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.eliminarpersona(suscripcio_r24, ctx_r25.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var suscripcio_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", suscripcio_r24.id_seguimiento, " - ", suscripcio_r24.nombres, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suscripcio_r24.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suscripcio_r24.rol_name);
      }
    }

    function DetalleComponent_ng_template_111_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var persona_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", persona_r32.id_persona);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", persona_r32.nombres, " ");
      }
    }

    function DetalleComponent_ng_template_111_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Seguimiento de la issue ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_ng_template_111_Template_button_click_3_listener() {
          var modal_r27 = ctx.$implicit;
          return modal_r27.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 73, 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_ng_template_111_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.datoregistro.id_tarea = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 75, 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_ng_template_111_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.datoregistro.id_persona_log = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Seleccione la persona para designarle el seguimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 79, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_ng_template_111_Template_select_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.datoregistro.id_persona = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Seleccione persona");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetalleComponent_ng_template_111_option_19_Template, 2, 2, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_ng_template_111_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.guardarseguimiento();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A\xF1adir persona ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var _c1 = function _c1() {
      return ["/home"];
    };

    var _c2 = function _c2() {
      return ["link", "|", "bold", "italic"];
    };

    var _c3 = function _c3(a0) {
      return {
        toolbar: a0
      };
    };

    var DetalleComponent = /*#__PURE__*/function () {
      function DetalleComponent(httpClient, registroService, activatedRoute, router, modalService) {
        var _this21 = this;

        _classCallCheck(this, DetalleComponent);

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
        this.dias = [{
          name: 'OptionA',
          value: 'first_opt',
          checked: true
        }, {
          name: 'OptionB',
          value: 'second_opt',
          checked: false
        }, {
          name: 'OptionC',
          value: 'third_opt',
          checked: true
        }]; //cargo los roles para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this21.roles = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los estados para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/estados_read.php').subscribe(function (result) {
          _this21.estados = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las recurrencias para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/recurrencias_read.php').subscribe(function (result) {
          _this21.recurrencias = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las categorias para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(function (result) {
          _this21.categorias = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las personas para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this21.personas = result;
        }, function (error) {
          return console.error(error);
        }); //cargo el listado de personas para esta ID tarea

        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_suscritas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this21.suscripcion = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(DetalleComponent, [{
        key: "onReady",
        value: function onReady(editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          var id_tarea = this.activatedRoute.snapshot.paramMap.get('id_tarea');
          this.registroService.getPerson(id_tarea).subscribe(function (respuesta) {
            _this22.registro = respuesta;
            _this22.registro.id_tarea = id_tarea;
            _this22.registro.id_persona = localStorage.getItem('id_persona'); //cargo el listado periodicidades de esta tarea para verificar a que categoria pertenecen y mostrar un combo u otro

            _this22.httpClient.get(_this22.PHP_API_SERVER + '/ajax/periodicidad_detalle.php?id_tarea=' + _this22.datoregistro.id_tarea).subscribe(function (result) {
              _this22.periodetalle = result[0];

              if (undefined == _this22.periodetalle) {
                _this22.registro.decidecategoria = '0';
              } else {
                _this22.periodcate = _this22.periodetalle['id_categoria'];
                _this22.registro.decidecategoria = _this22.periodcate;
              }
            }, function (error) {
              return console.error(error);
            });
          });
        }
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this23 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this23.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this23.closeResult = "Dismissed ".concat(_this23.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "guardarregistro",
        value: function guardarregistro(form) {
          var _this24 = this;

          if (this.registro.tarea == '' || this.registro.hora == '' || this.registro.estatus == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              text: 'Los campos obligatorios no pueden quedar vacíos',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            var horaResult = patronHora.test(this.registro.hora);

            if (horaResult == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'El campo Hora debe cumplir con el formato adecuado',
                icon: 'error',
                showConfirmButton: true
              });
            } else {
              var peticion;
              peticion = this.registroService.actualizarRegistro(this.registro);
              peticion.subscribe(function (respuesta) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: _this24.registro.tarea,
                  text: 'Registro modificado',
                  icon: 'success',
                  showConfirmButton: true
                }), _this24.recarga();
              });
            }
          }
        }
      }, {
        key: "guardarseguimiento",
        value: function guardarseguimiento() {
          var _this25 = this;

          if (this.datoregistro.id_persona == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              text: 'Debe seleccionar a alguien!',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            var peticion;
            peticion = this.registroService.actualizarRegistroSeguimiento(this.datoregistro);
            peticion.subscribe(function (respuesta) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: _this25.datoregistro.id_persona,
                text: 'Persona asignada',
                icon: 'success',
                showConfirmButton: false
              }), _this25.recarga();
            });
          }
        } //eliminar registro      

      }, {
        key: "eliminarpersona",
        value: function eliminarpersona(registro, i) {
          var _this26 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "\xBFDesea elimina a esta persona del seguimiento?",
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              _this26.datosborrado = JSON.stringify({
                "id_seguimiento": registro.id_seguimiento
              });

              _this26.registroService["delete"](_this26.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: registro.id_seguimiento,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this26.recarga();
            }
          });
        }
      }]);

      return DetalleComponent;
    }();

    DetalleComponent.ɵfac = function DetalleComponent_Factory(t) {
      return new (t || DetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detalle_service__WEBPACK_IMPORTED_MODULE_3__["DetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]));
    };

    DetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalleComponent,
      selectors: [["app-detalle"]],
      decls: 114,
      vars: 63,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "row"], [1, "col-12"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [3, "ngSubmit"], ["f", "ngForm"], [1, "col-md-7", "alturaminima", "mb-5"], ["type", "hidden", "name", "id_tarea", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "id_persona", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona", "ngModel"], [1, "form-group"], ["for", "tarea"], ["name", "tarea", "required", "", "minlength", "4", "type", "text", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tarea", "ngModel"], [1, "col-md-4"], ["for", "hora"], ["name", "hora", "required", "", "id", "reloj", "placeholder", "00:00", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "minlength", "5", "maxlength", "5", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", "hora", 2, "background-color", "white", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["hora", "ngModel"], [3, "minutesGap"], ["fullTime", ""], [1, "col-md-8"], ["for", "id_categoria"], ["required", "", "name", "id_categoria", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_categoria", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-3"], [4, "ngIf"], [1, "col-4"], ["for", "prioridad"], ["required", "", "name", "prioridad", "placeholder", "Seleccione prioridad", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["prioridad", "ngModel"], ["selected", "", 3, "ngValue"], ["value", "alta"], ["value", "media"], ["value", "baja"], [1, "col-12", "mt-3", "mb-3"], [1, "col-10", "mt-2", "mb-2", "pt3", "pb3"], [1, "titolpetit"], [1, "col-2", "mt-2", "mb-2", "text-right"], ["alt", "Asignar nueva persona de seguimiento", "title", "Asignar nueva persona de seguimiento", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-plus", "fa-1"], ["class", "col-12 mt-1 mb-1 pb1 pt1", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-info", "mr-2"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "col-md-5", "alturaminima", "mb-5"], ["for", "observaciones"], ["id", "ibmeditor", "placeholder", "Observaciones", "maxlength", "2000", "name", "observaciones", "data", "", 3, "config", "ngModel", "editor", "ready", "ngModelChange"], ["observaciones", "ngModel"], ["content", ""], [3, "value"], [1, "col-12", "mt-1", "mb-1", "pb1", "pt1"], [1, "col-2"], [1, "col-2", "text-right"], ["alt", "Eliminar persona de seguimiento", "title", "Eliminar persona de seguimiento", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "bdott"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["name", "id_tarea", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_tarea", "ngModel"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "id_persona"], [1, "input-group"], ["required", "", "name", "id_persona", "placeholder", "Seleccione persona", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"]],
      template: function DetalleComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetalleComponent_em_27_Template, 2, 0, "em", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "em", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DetalleComponent_Template_form_ngSubmit_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            return ctx.guardarregistro(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.registro.id_tarea = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.registro.id_persona = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.registro.tarea = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_input_ngModelChange_52_listener($event) {
            return ctx.registro.hora = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "ngx-material-timepicker", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_select_ngModelChange_60_listener($event) {
            return ctx.registro.id_categoria = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DetalleComponent_option_62_Template, 2, 2, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DetalleComponent_div_65_Template, 3, 2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, DetalleComponent_div_66_Template, 3, 2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Prioridad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleComponent_Template_select_ngModelChange_71_listener($event) {
            return ctx.registro.prioridad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Seleccione prioridad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Alta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Baja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Personas que participan en el seguimiento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleComponent_Template_a_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](112);

            return ctx.open(_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, DetalleComponent_div_94_Template, 12, 4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ckeditor", 58, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function DetalleComponent_Template_ckeditor_ready_109_listener($event) {
            return ctx.onReady($event);
          })("ngModelChange", function DetalleComponent_Template_ckeditor_ngModelChange_109_listener($event) {
            return ctx.registro.observaciones = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, DetalleComponent_ng_template_111_Template, 23, 5, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "txtRegistros"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.registro.tarea, " - #", ctx.registro.id_tarea, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 38, "txtCreado"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 40, ctx.registro.fecha, "dd/MM/y HH:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 43, "txtUltimaModificacion"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registro.fechamodi == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 45, ctx.registro.fechamodi, "dd/MM/y HH:mm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_tarea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.id_persona);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 48, "txtTarea"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.tarea);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 50, "txtHora"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _r6.invalid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registro.hora)("ngxTimepicker", _r7)("format", 24);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 52, "txtModificar"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 54, "txtVolver"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 56, "txtObservaciones"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c2)))("ngModel", ctx.registro.observaciones)("editor", ctx.Editor);
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["MaxLengthValidator"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMaterialTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _components_periodicidad_accion_component__WEBPACK_IMPORTED_MODULE_17__["AccionComponent"], _components_periodicidad_check_component__WEBPACK_IMPORTED_MODULE_18__["CheckComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detalle',
          templateUrl: './detalle.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_detalle_service__WEBPACK_IMPORTED_MODULE_3__["DetalleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/detallehistorico.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/detallehistorico.component.ts ***!
    \*****************************************************/

  /*! exports provided: DetalleHistoricoComponent */

  /***/
  function srcAppPagesDetallehistoricoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleHistoricoComponent", function () {
      return DetalleHistoricoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _models_seguimiento__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/seguimiento */
    "./src/app/models/seguimiento.ts");
    /* harmony import */


    var _services_detallehistorico_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/detallehistorico.service */
    "./src/app/services/detallehistorico.service.ts");
    /* harmony import */


    var _models_issuehistorico__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models/issuehistorico */
    "./src/app/models/issuehistorico.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var _c1 = function _c1() {
      return ["/historico"];
    };

    var DetalleHistoricoComponent = /*#__PURE__*/function () {
      function DetalleHistoricoComponent(httpClient, registroService, activatedRoute, router, modalService) {
        var _this27 = this;

        _classCallCheck(this, DetalleHistoricoComponent);

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
        }; //cargo los roles para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this27.roles = result;
        }, function (error) {
          return console.error(error);
        }); //cargo los estados para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/estados_read.php').subscribe(function (result) {
          _this27.estados = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las recurrencias para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/recurrencias_read.php').subscribe(function (result) {
          _this27.recurrencias = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las categorias para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/categorias_read.php').subscribe(function (result) {
          _this27.categorias = result;
        }, function (error) {
          return console.error(error);
        }); //cargo las personas para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this27.personas = result;
        }, function (error) {
          return console.error(error);
        }); //cargo el listado de personas para esta ID tarea

        httpClient.get(this.PHP_API_SERVER + '/ajax/personas_suscritas_seguimiento_read.php?id_tarea=' + this.datoregistro.id_tarea).subscribe(function (result) {
          _this27.suscripcion = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(DetalleHistoricoComponent, [{
        key: "onReady",
        value: function onReady(editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          var id_log = this.activatedRoute.snapshot.paramMap.get('id_log');
          this.registroService.getDetalleHistorico(id_log).subscribe(function (respuesta) {
            _this28.registro = respuesta;
            _this28.registro.id_log = id_log;
          });
        }
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this29 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this29.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this29.closeResult = "Dismissed ".concat(_this29.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        } //eliminar registro      

      }, {
        key: "eliminarpersona",
        value: function eliminarpersona(registro, i) {
          var _this30 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "\xBFDesea elimina a esta persona del seguimiento?",
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            console.log("id seguimiento: ", registro.id_seguimiento);

            if (respuesta.value) {
              _this30.datosborrado = JSON.stringify({
                "id_seguimiento": registro.id_seguimiento
              });

              _this30.registroService["delete"](_this30.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: registro.id_seguimiento,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this30.recarga();
            }
          });
        }
      }]);

      return DetalleHistoricoComponent;
    }();

    DetalleHistoricoComponent.ɵfac = function DetalleHistoricoComponent_Factory(t) {
      return new (t || DetalleHistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detallehistorico_service__WEBPACK_IMPORTED_MODULE_8__["DetalleHistoricoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
    };

    DetalleHistoricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalleHistoricoComponent,
      selectors: [["app-detallehistorico"]],
      decls: 67,
      vars: 29,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-7", "alturaminima", "mb-5"], ["type", "hidden", "name", "id_log", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "tarea"], ["name", "tarea", "required", "", "minlength", "4", "type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["tarea", "ngModel"], [1, "col-md-4"], ["for", "nombres"], ["name", "nombres", "required", "", "type", "text", "readonly", "", "disabled", "", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["nombres", "ngModel"], ["for", "id_persona"], ["name", "id_persona", "required", "", "type", "text", "readonly", "", "disabled", "", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_persona", "ngModel"], [1, "col-md-12", "mb-3"], [1, "col-4"], [1, "form-group", "text-center"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "col-md-5", "alturaminima", "mb-5"], ["for", "observaciones"], ["rows", "10", "name", "observaciones", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["descripcion", "ngModel"]],
      template: function DetalleHistoricoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hist\xF3rico de Logs");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.registro.id_log = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.registro.tarea = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.registro.nombres = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Usuario creado ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.registro.id_persona = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalleHistoricoComponent_Template_textarea_ngModelChange_64_listener($event) {
            return ctx.registro.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleHistoricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detallehistorico',
          templateUrl: './detallehistorico.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_detallehistorico_service__WEBPACK_IMPORTED_MODULE_8__["DetalleHistoricoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/detallepersona.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/detallepersona.component.ts ***!
    \***************************************************/

  /*! exports provided: DetallePersona */

  /***/
  function srcAppPagesDetallepersonaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetallePersona", function () {
      return DetallePersona;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/imagen/modimagen.component */
    "./src/app/components/imagen/modimagen.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function DetallePersona_option_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rol_r168 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r168.id_rol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r168.rol_name, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "fa-eye-slash": a0,
        "fa-eye": a1
      };
    };

    var DetallePersona = /*#__PURE__*/function () {
      function DetallePersona(httpClient, registroService, activatedRoute, router, modalService) {
        var _this31 = this;

        _classCallCheck(this, DetallePersona);

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
        }; //cargo los roles para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this31.roles = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(DetallePersona, [{
        key: "onReady",
        value: function onReady(editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          var id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
          this.registroService.getPerson(id_persona).subscribe(function (respuesta) {
            _this32.registro = respuesta;
            _this32.registro.id_persona = id_persona;
          });
        }
      }, {
        key: "toggleFieldTextType",
        value: function toggleFieldTextType() {
          this.fieldTextType = !this.fieldTextType;
        }
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this33 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this33.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this33.closeResult = "Dismissed ".concat(_this33.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        } //alta de registro

      }, {
        key: "altaRegistro",
        value: function altaRegistro() {
          var _this34 = this;

          //si los campos obligatorios nos llegan vacios
          if (this.datoregistro.nombres == null || this.datoregistro.email == null || this.datoregistro.id_rol == null || this.datoregistro.password == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Revise los datos',
              text: 'Los campos obligatorios no pueden estar vacíos!!',
              icon: 'error'
            });
          } else {
            //enviamos el array a la funcions del server
            this.registroService.altaRegistro(this.datoregistro).subscribe(function (datos) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: _this34.datoregistro.nombres,
                text: 'Registro añadido',
                icon: 'success',
                showConfirmButton: false
              }), _this34.recarga();
            });
          }
        }
      }, {
        key: "guardarregistro",
        value: function guardarregistro() {
          var _this35 = this;

          console.log(this.registro);

          if (this.registro.nombres == '' || this.registro.telefono == '' || this.registro.email == '' || this.registro.password == '' || this.registro.direccion == '' || this.registro.id_rol == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              text: 'Los campos obligatorios no pueden quedar vacíos',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            //validacion email      
            var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            var emailResult = patronEmail.test(this.registro.email);

            if (emailResult == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'El campo E-mail debe cumplir con el formato adecuado',
                icon: 'error',
                showConfirmButton: true
              });
            } else // validacion password
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
            } else {
              var peticion;
              peticion = this.registroService.actualizarRegistro(this.registro);
              peticion.subscribe(function (respuesta) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: _this35.registro.nombres,
                  text: 'Registro modificado',
                  icon: 'success',
                  showConfirmButton: false
                }), _this35.recarga();
              });
            }
          }
        }
      }]);

      return DetallePersona;
    }();

    DetallePersona.ɵfac = function DetallePersona_Factory(t) {
      return new (t || DetallePersona)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
    };

    DetallePersona.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetallePersona,
      selectors: [["app-detallepersona"]],
      decls: 85,
      vars: 71,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-2", "alturaminima", "mb-5"], [1, "col-md-10", "alturaminima", "mb-5"], [1, "form-group"], ["for", "nombres"], ["required", "", "required", "", "minlength", "4", "name", "nombres", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["nombres", "ngModel"], [1, "row"], [1, "col-md-4"], ["for", "email"], ["required", "", "name", "email", "type", "email", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "email", "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], [1, "input-group"], ["required", "", "required", "", "name", "password", "type", "password", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "type", "ngModelChange"], ["password", "ngModel"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], ["for", "telefono"], ["minlength", "9", "name", "telefono", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["telefono", "ngModel"], [1, "col-md-6"], ["for", "direccion"], ["name", "direccion", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "id_rol"], ["required", "", "name", "id_rol", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [3, "value"]],
      template: function DetallePersona_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_31_listener($event) {
            return ctx.registro.nombres = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_40_listener($event) {
            return ctx.registro.email = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_49_listener($event) {
            return ctx.registro.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePersona_Template_i_click_54_listener() {
            return ctx.toggleFieldTextType();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_60_listener($event) {
            return ctx.registro.telefono = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_input_ngModelChange_69_listener($event) {
            return ctx.registro.direccion = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetallePersona_Template_select_ngModelChange_77_listener($event) {
            return ctx.registro.id_rol = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, DetallePersona_option_79_Template, 2, 2, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetallePersona_Template_button_click_81_listener() {
            return ctx.guardarregistro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

          var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__["ModimagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetallePersona, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detallepersona',
          templateUrl: './detallepersona.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/ayuda.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/formularios/ayuda.component.ts ***!
    \******************************************************/

  /*! exports provided: AyudaFormComponent */

  /***/
  function srcAppPagesFormulariosAyudaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AyudaFormComponent", function () {
      return AyudaFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/admin-servicio.service */
    "./src/app/services/admin-servicio.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_ayuda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../models/ayuda */
    "./src/app/models/ayuda.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AyudaFormComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_tr_18_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ayuda_r271 = ctx.$implicit;

          var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          return ctx_r272.openayudaModi(_r269, ayuda_r271.id_ayuda);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_tr_18_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ayuda_r271 = ctx.$implicit;

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r274.eliminarAyuda(ayuda_r271, ctx_r274.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ayuda_r271 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ayuda_r271.ayudatitulo);
      }
    }

    function AyudaFormComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nueva entrada de FAQs ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_19_Template_button_click_3_listener() {
          var modal_r275 = ctx.$implicit;
          return modal_r275.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_19_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281);

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r280.datosformularioayuda.id_persona_log = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Escriba un t\xEDtulo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_19_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281);

          var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r282.datosformularioayuda.ayudatitulo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Texto (m\xE1x 650 car\xE1cteres)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_19_Template_textarea_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281);

          var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r283.datosformularioayuda.ayudatexto = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_19_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281);

          var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r284.guardarNuevaAyuda();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Guardar registro ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r268.datosformularioayuda.id_persona_log);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r268.datosformularioayuda.ayudatitulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r268.datosformularioayuda.ayudatexto);
      }
    }

    function AyudaFormComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Modificar entrada de FAQs ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_21_Template_button_click_3_listener() {
          var modal_r285 = ctx.$implicit;
          return modal_r285.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r291.datosformulariomodi.id_persona_log = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r293.datosformulariomodi.id_ayuda = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Escriba un t\xEDtulo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r294.datosformulariomodi.ayudatitulo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Texto (m\xE1x 650 car\xE1cteres)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AyudaFormComponent_ng_template_21_Template_textarea_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r295.datosformulariomodi.ayudatexto = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_ng_template_21_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292);

          var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r296.guardarModificarAyuda();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Guardar registro ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.id_persona_log);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.id_ayuda);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.ayudatitulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r270.datosformulariomodi.ayudatexto);
      }
    }

    var AyudaFormComponent = /*#__PURE__*/function () {
      function AyudaFormComponent(httpClient, modalService, adminService) {
        var _this36 = this;

        _classCallCheck(this, AyudaFormComponent);

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

        httpClient.get(this.PHP_API_SERVER + '/ajax/read_ayuda.php').subscribe(function (result) {
          _this36.ayudas = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(AyudaFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //abrir modal

      }, {
        key: "openayuda",
        value: function openayuda(content) {
          var _this37 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this37.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this37.closeResult = "Dismissed ".concat(_this37.getDismissReasonA(reason));
          });
        }
      }, {
        key: "getDismissReasonA",
        value: function getDismissReasonA(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        } //abrir modal

      }, {
        key: "openayudaModi",
        value: function openayudaModi(contentmodi, id_ayuda, id_persona_log) {
          var _this38 = this;

          this.modalService.open(contentmodi, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this38.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this38.closeResult = "Dismissed ".concat(_this38.getDismissReasonB(reason));
          });
          this.edicionAyuda(id_ayuda);
        }
      }, {
        key: "getDismissReasonB",
        value: function getDismissReasonB(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "edicionAyuda",
        value: function edicionAyuda(id_ayuda) {
          var _this39 = this;

          this.adminService.getAyuda(id_ayuda).subscribe(function (respuesta) {
            _this39.datosformulariomodi = respuesta;
            _this39.datosformulariomodi.id_ayuda = id_ayuda;
            _this39.datosformulariomodi.id_persona_log = localStorage.getItem('id_persona');
          });
        }
      }, {
        key: "guardarNuevaAyuda",
        value: function guardarNuevaAyuda() {
          var _this40 = this;

          if (this.datosformularioayuda.ayudatitulo == null || this.datosformularioayuda.ayudatexto == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              text: 'Debe Escribir un titulo y un texto!',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            var peticion;
            peticion = this.adminService.guardarNewAyuda(this.datosformularioayuda);
            peticion.subscribe(function (respuesta) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: _this40.datosformularioayuda.ayudatitulo,
                text: 'Nueva entrada de FAQs creada',
                icon: 'success',
                showConfirmButton: false
              }), _this40.recarga();
            });
          }
        }
      }, {
        key: "guardarModificarAyuda",
        value: function guardarModificarAyuda() {
          var _this41 = this;

          if (this.datosformulariomodi.ayudatitulo == null || this.datosformulariomodi.ayudatexto == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              text: 'Debe Escribir un titulo y un texto!',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            var peticion;
            peticion = this.adminService.guardarAyudaModificado(this.datosformulariomodi);
            peticion.subscribe(function (respuesta) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: _this41.datosformulariomodi.ayudatitulo,
                text: 'Entrada modificada',
                icon: 'success',
                showConfirmButton: false
              }), _this41.recarga();
            });
          }
        }
      }, {
        key: "eliminarAyuda",
        value: function eliminarAyuda(registro, i) {
          var _this42 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "WARNING!! \xBFDesea elimina esta FAQ?",
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              var id_persona_log = localStorage.getItem('id_persona');
              _this42.datosborradoAyuda = JSON.stringify({
                "id_ayuda": registro.id_ayuda,
                "id_persona_log": id_persona_log
              });

              _this42.adminService.deleteAyuda(_this42.datosborradoAyuda).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: registro.id_ayuda,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this42.recarga();
            }
          });
        }
      }]);

      return AyudaFormComponent;
    }();

    AyudaFormComponent.ɵfac = function AyudaFormComponent_Factory(t) {
      return new (t || AyudaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]));
    };

    AyudaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AyudaFormComponent,
      selectors: [["app-formayuda"]],
      decls: 23,
      vars: 1,
      consts: [[1, "rol"], [1, "col-12", "alert", "bg-dark", "text-white"], [1, "row"], [1, "col-9"], [1, "col-3", "text-right"], ["alt", "A\xF1adir Ayuda", "title", "A\xF1adir Ayuda", 1, "altaseguimientow", 3, "click"], [1, "fa", "fa-plus", "fa-1"], [1, "col-12", "alert", "p-0", "m-0", "ovefr"], [1, "table"], [4, "ngFor", "ngForOf"], ["content", ""], ["contentmodi", ""], [1, "text-right"], ["alt", "Modificar Ayuda", "title", "Modificar Ayuda", 1, "altaseguimiento", "mr-2", 3, "click"], [1, "fa", "fa-edit"], ["alt", "Eliminar Ayuda", "title", "Eliminar Ayuda", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "ayudatitulo"], ["name", "ayudatitulo", "type", "text", "maxlength", "100", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatitulo", "ngModel"], [1, "input-group"], ["rows", "10", "required", "", "maxlength", "650", "name", "ayudatexto", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["ayudatexto", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"], ["name", "id_ayuda", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_ayuda", "ngModel"]],
      template: function AyudaFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ayuda - A\xF1ada o edite elementos FAQ a la p\xE1gina de Ayuda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AyudaFormComponent_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297);

            var _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.openayuda(_r267);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T\xEDtulo");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ayudas);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AyudaFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formayuda',
          templateUrl: './ayuda.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/configuracion-general.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/formularios/configuracion-general.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ConfiguracionGeneralComponent */

  /***/
  function srcAppPagesFormulariosConfiguracionGeneralComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracionGeneralComponent", function () {
      return ConfiguracionGeneralComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfiguracionGeneralComponent = /*#__PURE__*/function () {
      function ConfiguracionGeneralComponent() {
        _classCallCheck(this, ConfiguracionGeneralComponent);
      }

      _createClass(ConfiguracionGeneralComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfiguracionGeneralComponent;
    }();

    ConfiguracionGeneralComponent.ɵfac = function ConfiguracionGeneralComponent_Factory(t) {
      return new (t || ConfiguracionGeneralComponent)();
    };

    ConfiguracionGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfiguracionGeneralComponent,
      selectors: [["app-configuracion-general"]],
      decls: 2,
      vars: 0,
      template: function ConfiguracionGeneralComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "configuracion-general works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiguracionGeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-configuracion-general',
          templateUrl: './configuracion-general.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/incidenciadetalle.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/formularios/incidenciadetalle.component.ts ***!
    \******************************************************************/

  /*! exports provided: IncidenciadetalleComponent */

  /***/
  function srcAppPagesFormulariosIncidenciadetalleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidenciadetalleComponent", function () {
      return IncidenciadetalleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_incidencia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/incidencia */
    "./src/app/models/incidencia.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _services_incidencias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/incidencias.service */
    "./src/app/services/incidencias.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @jaspero/ng-image-preload */
    "./node_modules/@jaspero/ng-image-preload/__ivy_ngcc__/fesm2015/jaspero-ng-image-preload.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function IncidenciadetalleComponent_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Resuelta ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IncidenciadetalleComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Imagen adjunta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r450.registro.imagenincidencia, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("jpPreload", ctx_r450.registro.imagenincidencia);
      }
    }

    function IncidenciadetalleComponent_span_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resuelta ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IncidenciadetalleComponent_span_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Resolver ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r452.resolverSubmit.valid);
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var _c1 = function _c1() {
      return ["/incidencias"];
    };

    var IncidenciadetalleComponent = /*#__PURE__*/function () {
      function IncidenciadetalleComponent(httpClient, incidenciasService, activatedRoute, router, fb) {
        _classCallCheck(this, IncidenciadetalleComponent);

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
          token_incidencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].API_SERVER; //URL del servicio

        this.dregistro = null;
        this.datoregistro = {
          id_seguimiento: null,
          id_tarea: this.activatedRoute.snapshot.paramMap.get('id'),
          id_persona: null
        };
      }

      _createClass(IncidenciadetalleComponent, [{
        key: "onReady",
        value: function onReady(editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          var token_incidencia = this.activatedRoute.snapshot.paramMap.get('token_incidencia');
          this.incidenciasService.getDetalleIncidencia(token_incidencia).subscribe(function (respuesta) {
            _this43.registro = respuesta;
            _this43.registro.token_incidencia = token_incidencia;
            _this43.resolverSubmit = _this43.fb.group({
              id_incidencias: [_this43.registro.id_incidencias, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              token_incidencia: [_this43.registro.token_incidencia, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
          });
        }
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this44 = this;

          this.isSubmitted = true;
          var valor = JSON.stringify(this.resolverSubmit.value);
          this.incidenciasService.guardarIncidencia(valor).subscribe(function (respuesta) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Incidencia resuelta',
              text: 'la incidencia ha quedado como resuelta',
              icon: 'success',
              showConfirmButton: true
            }), _this44.recarga();
          });
        }
      }, {
        key: "id_incidencias",
        get: function get() {
          return this.resolverSubmit.get('id_incidencias');
        }
      }, {
        key: "token_incidencia",
        get: function get() {
          return this.resolverSubmit.get('token_incidencia');
        }
      }]);

      return IncidenciadetalleComponent;
    }();

    IncidenciadetalleComponent.ɵfac = function IncidenciadetalleComponent_Factory(t) {
      return new (t || IncidenciadetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_incidencias_service__WEBPACK_IMPORTED_MODULE_4__["IncidenciasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]));
    };

    IncidenciadetalleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IncidenciadetalleComponent,
      selectors: [["app-incidenciadetalle"]],
      decls: 50,
      vars: 21,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-12"], [1, "form-group"], [1, "hachedosgrande"], ["class", "badge badge-success", 4, "ngIf"], [1, "mb-2"], [1, "mt-3", "mb-3"], [4, "ngIf"], [1, "form-group", "text-center"], [3, "formGroup", "ngSubmit"], ["type", "hidden", "formControlName", "id_incidencias", 1, "form-control"], ["type", "hidden", "formControlName", "token_incidencia", 1, "form-control"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "badge", "badge-success"], [1, "mt-4", "mb-2"], ["alt", "", 1, "animate", "fadeIn", "mb-3", 3, "src", "jpPreload"], ["disabled", "", 1, "btn", "btn-success", "mr-2"], ["type", "submit", 1, "btn", "btn-info", "mr-2", 3, "disabled"]],
      template: function IncidenciadetalleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hist\xF3rico de Logs");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IncidenciadetalleComponent_Template_form_ngSubmit_41_listener() {
            return ctx.onSubmit();
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _jaspero_ng_image_preload__WEBPACK_IMPORTED_MODULE_13__["PreloadDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidenciadetalleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-incidenciadetalle',
          templateUrl: './incidenciadetalle.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _services_incidencias_service__WEBPACK_IMPORTED_MODULE_4__["IncidenciasService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/incidencias.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/formularios/incidencias.component.ts ***!
    \************************************************************/

  /*! exports provided: IncidenciasComponent */

  /***/
  function srcAppPagesFormulariosIncidenciasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidenciasComponent", function () {
      return IncidenciasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _services_incidencias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/incidencias.service */
    "./src/app/services/incidencias.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function IncidenciasComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r432 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r432.id_incidencias);
      }
    }

    function IncidenciasComponent_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IncidenciasComponent_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
      }

      if (rf & 2) {
        var value_r434 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, value_r434, 0, 90), " ");
      }
    }

    function IncidenciasComponent_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incidencia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IncidenciasComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
      }

      if (rf & 2) {
        var row_r438 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, row_r438.enunciado, 0, 90), " ");
      }
    }

    function IncidenciasComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Emitida por");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IncidenciasComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var value_r440 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r440, " ");
      }
    }

    function IncidenciasComponent_ng_template_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resuelta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        positive: a0,
        negative: a1,
        posnegtive: a2
      };
    };

    function IncidenciasComponent_ng_template_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r444 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, row_r444.resuelta == "SI", row_r444.resuelta == "NO", row_r444.resuelta == "STANDBY"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r444.resuelta, " ");
      }
    }

    function IncidenciasComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha resoluci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IncidenciasComponent_ng_template_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r447 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r447.fecharesuelta, "");
      }
    }

    var _c1 = function _c1(a1) {
      return ["/incidenciadetalle", a1];
    };

    function IncidenciasComponent_ng_template_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r448 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, row_r448.token_incidencia));
      }
    }

    var _c2 = function _c2() {
      return ["/", "home"];
    };

    var IncidenciasComponent = /*#__PURE__*/function () {
      function IncidenciasComponent(spinner, httpClient, incidenciasService) {
        var _this45 = this;

        _classCallCheck(this, IncidenciasComponent);

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
        this.fetch(function (data) {
          // cache
          _this45.temp = _toConsumableArray(data);
          _this45.rows = data;
        });
      } //el ngoninit nos servira para recargar en caso de error de validacion


      _createClass(IncidenciasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          /** spinner starts on init */
          this.spinner.show();
          setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this46.spinner.hide();
          }, 2000);
          this.fetch(function (data) {
            _this46.temp = _toConsumableArray(data);
            _this46.rows = data;
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //cargamos el listado

      }, {
        key: "fetch",
        value: function fetch(cb) {
          if (cb) {
            var req = new XMLHttpRequest();
            req.open('GET', "".concat(this.PHP_API_SERVER, "/ajax/read_incidencias.php"));

            req.onload = function () {
              cb(JSON.parse(req.response));
              console.log(JSON.parse(req.response));
            };

            req.send();
          }
        } //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(registro, i) {
          var _this47 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "\xBFDesea borrar el registro hist\xF3rico ".concat(registro.tarea),
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              _this47.datosborrado = JSON.stringify({
                "tarea": registro.tarea,
                "id_tarea": registro.id_tarea
              });

              _this47.incidenciasService["delete"](_this47.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: registro.tarea,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this47.recarga();
            }
          });
        } //actualizacion filtro busqueda

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase();
          var temp = this.temp.filter(function (d) {
            return d.fecha.toLowerCase().indexOf(val) !== -1 || d.resuelta.toLowerCase().indexOf(val) !== -1 || d.fecharesuelta.toLowerCase().indexOf(val) !== -1 || !val;
          }); // actualizamos las rows

          this.rows = temp; // Cuando cambie el filtro, regresa a la primera página.

          this.table.offset = 0;
        }
      }]);

      return IncidenciasComponent;
    }();

    IncidenciasComponent.ɵfac = function IncidenciasComponent_Factory(t) {
      return new (t || IncidenciasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_incidencias_service__WEBPACK_IMPORTED_MODULE_6__["IncidenciasService"]));
    };

    IncidenciasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IncidenciasComponent,
      selectors: [["app-incidencias"]],
      viewQuery: function IncidenciasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 48,
      vars: 18,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-6"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-6", "text-right"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "id_incidencias", 3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Fecha", 3, "maxWidth"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Enunciado", 3, "maxWidth"], ["name", "Nombres", 3, "maxWidth"], ["name", "Resuelta", 3, "maxWidth"], ["name", "Fecharesuelta", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [1, "text-center"], [3, "ngClass"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-eye"]],
      template: function IncidenciasComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IncidenciasComponent_Template_input_keyup_21_listener($event) {
            return ctx.updateFilter($event);
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidenciasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-incidencias',
          templateUrl: './incidencias.component.html'
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_incidencias_service__WEBPACK_IMPORTED_MODULE_6__["IncidenciasService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/listados.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/formularios/listados.component.ts ***!
    \*********************************************************/

  /*! exports provided: ListadosComponent */

  /***/
  function srcAppPagesFormulariosListadosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListadosComponent", function () {
      return ListadosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./roles.component */
    "./src/app/pages/formularios/roles.component.ts");
    /* harmony import */


    var _ayuda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ayuda.component */
    "./src/app/pages/formularios/ayuda.component.ts");
    /* harmony import */


    var _turnos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./turnos.component */
    "./src/app/pages/formularios/turnos.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var ListadosComponent = /*#__PURE__*/function () {
      function ListadosComponent() {
        _classCallCheck(this, ListadosComponent);
      }

      _createClass(ListadosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListadosComponent;
    }();

    ListadosComponent.ɵfac = function ListadosComponent_Factory(t) {
      return new (t || ListadosComponent)();
    };

    ListadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListadosComponent,
      selectors: [["app-listados"]],
      decls: 26,
      vars: 5,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-6"], [1, "col-12"]],
      template: function ListadosComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "txtRegistros"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesFormComponent"], _ayuda_component__WEBPACK_IMPORTED_MODULE_5__["AyudaFormComponent"], _turnos_component__WEBPACK_IMPORTED_MODULE_6__["TurnosFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listados',
          templateUrl: './listados.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/roles.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/formularios/roles.component.ts ***!
    \******************************************************/

  /*! exports provided: RolesFormComponent */

  /***/
  function srcAppPagesFormulariosRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesFormComponent", function () {
      return RolesFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/admin-servicio.service */
    "./src/app/services/admin-servicio.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RolesFormComponent_tr_22_span_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_tr_22_span_8_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r305);

          var rol_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r303.eliminarrol(rol_r301, ctx_r303.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RolesFormComponent_tr_22_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var rol_r301 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r301.rol_level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r301.rol_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r301.roldescripcion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rol_r301.id_rol != 8 && rol_r301.id_rol != 7 && rol_r301.id_rol != 6 && rol_r301.id_rol != 5 && rol_r301.id_rol != 4 && rol_r301.id_rol != 3 && rol_r301.id_rol != 2 && rol_r301.id_rol != 1);
      }
    }

    function RolesFormComponent_ng_template_23_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rolarray_r312 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rolarray_r312.rol_level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", rolarray_r312.rol_level, " - ", rolarray_r312.roldescripcion, " ");
      }
    }

    function RolesFormComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nuevo Rol ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_ng_template_23_Template_button_click_3_listener() {
          var modal_r306 = ctx.$implicit;
          return modal_r306.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r314.datosformulario.id_persona_log = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Asigne un nombre al Rol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r316.datosformulario.rol_name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Seleccione el nivel de acceso de este nuevo rol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_select_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r317.datosformulario.rol_level = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Seleccione nivel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RolesFormComponent_ng_template_23_option_21_Template, 2, 3, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Breve descripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesFormComponent_ng_template_23_Template_textarea_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r318.datosformulario.roldescripcion = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_ng_template_23_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r319.guardarNuevoRol();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " A\xF1adir Rol ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var RolesFormComponent = /*#__PURE__*/function () {
      function RolesFormComponent(httpClient, modalService, adminService) {
        var _this48 = this;

        _classCallCheck(this, RolesFormComponent);

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

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this48.roles = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(RolesFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //abrir modal

      }, {
        key: "openroles",
        value: function openroles(content) {
          var _this49 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this49.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this49.closeResult = "Dismissed ".concat(_this49.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "guardarNuevoRol",
        value: function guardarNuevoRol() {
          var _this50 = this;

          if (this.datosformulario.rol_name == null || this.datosformulario.rol_level == null || this.datosformulario.roldescripcion == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              text: 'Debe seleccionar un rol, describirlo brevemente y nombrarlo!',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            var peticion;
            peticion = this.adminService.guardarRol(this.datosformulario);
            peticion.subscribe(function (respuesta) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: _this50.datosformulario.rol_name,
                text: 'Nuevo rol creado',
                icon: 'success',
                showConfirmButton: false
              }), _this50.recarga();
            });
          }
        }
      }, {
        key: "eliminarrol",
        value: function eliminarrol(registro, i) {
          var _this51 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "WARNING!! \xBFDesea elimina este rol?",
            text: 'Confirme si desea borrar el rol. Tenga en cuenta que todas las tareas o registros que haya creado bajo este rol quedarán sin rol asignado',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              _this51.datosborrado = JSON.stringify({
                "id_rol": registro.id_rol
              });

              _this51.adminService.deleteRol(_this51.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: registro.id_rol,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this51.recarga();
            }
          });
        }
      }]);

      return RolesFormComponent;
    }();

    RolesFormComponent.ɵfac = function RolesFormComponent_Factory(t) {
      return new (t || RolesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]));
    };

    RolesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RolesFormComponent,
      selectors: [["app-formroles"]],
      decls: 25,
      vars: 1,
      consts: [[1, "rol"], [1, "col-12", "alert", "bg-dark", "text-white"], [1, "row"], [1, "col-9"], [1, "col-3", "text-right"], ["alt", "A\xF1adir rol", "title", "A\xF1adir rol", 1, "altaseguimientow", 3, "click"], [1, "fa", "fa-plus", "fa-1"], [1, "col-12", "alert", "p-0", "m-0"], [1, "table"], [4, "ngFor", "ngForOf"], ["content", ""], [4, "ngIf"], ["alt", "Eliminar rol", "title", "Eliminar rol", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["for", "rol_name"], ["name", "rol_name", "type", "text", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["rol_name", "ngModel"], [1, "input-group"], ["required", "", "name", "rol_level", "placeholder", "Seleccione nivel", 1, "form-control", "form-control-sm", "mb-2", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["rol_level", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "2", "required", "", "maxlength", "45", "name", "roldescripcion", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["roldescripcion", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"], [3, "value"]],
      template: function RolesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesFormComponent_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r320);

            var _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            return ctx.openroles(_r299);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Descripci\xF3n");

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formroles',
          templateUrl: './roles.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/formularios/turnos.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/formularios/turnos.component.ts ***!
    \*******************************************************/

  /*! exports provided: TurnosFormComponent */

  /***/
  function srcAppPagesFormulariosTurnosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnosFormComponent", function () {
      return TurnosFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/admin-servicio.service */
    "./src/app/services/admin-servicio.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");

    function TurnosFormComponent_tr_26_span_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_tr_26_span_12_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r328);

          var turno_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r326.eliminarturno(turno_r324, ctx_r326.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TurnosFormComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var turno_r324 = ctx.$implicit;

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
      }
    }

    function TurnosFormComponent_ng_template_28_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rolarray_r339 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rolarray_r339.id_rol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rolarray_r339.rol_name, " ");
      }
    }

    function TurnosFormComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nuevo Rol ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_ng_template_28_Template_button_click_3_listener() {
          var modal_r329 = ctx.$implicit;
          return modal_r329.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r341.datosformularioturno.id_persona_log = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Asigne un nombre al Turno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r343.datosformularioturno.turno = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Asigne un rol al turno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_select_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r344.datosformularioturno.id_rol = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_select_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r345.datosformularioturno.tipo_turno = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r346.datosformularioturno.horainicio = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-material-timepicker", 36, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hora fin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 38, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TurnosFormComponent_ng_template_28_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r347.datosformularioturno.horafin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "ngx-material-timepicker", 36, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_ng_template_28_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342);

          var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r348.guardarNuevoTurno();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " A\xF1adir Turno ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

        var _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

        var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var TurnosFormComponent = /*#__PURE__*/function () {
      function TurnosFormComponent(httpClient, modalService, adminService) {
        var _this52 = this;

        _classCallCheck(this, TurnosFormComponent);

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
        httpClient.get(this.PHP_API_SERVER + '/ajax/turnos_read.php').subscribe(function (result) {
          _this52.turnos = result;
        }, function (error) {
          return console.error(error);
        });
        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this52.roles = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(TurnosFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //abrir modal

      }, {
        key: "openturnos",
        value: function openturnos(content) {
          var _this53 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this53.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this53.closeResult = "Dismissed ".concat(_this53.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "guardarNuevoTurno",
        value: function guardarNuevoTurno() {
          var _this54 = this;

          if (this.datosformularioturno.tipo_turno == null || this.datosformularioturno.turno == null || this.datosformularioturno.horafin == null || this.datosformularioturno.horainicio == null || this.datosformularioturno.id_rol == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              text: 'Debe completar los campos!',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            //si el campo que recibo es hora...
            //...valido su formato
            var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
            var horaResulinicio = patronHora.test(this.datosformularioturno.horainicio);
            var horaResultfin = patronHora.test(this.datosformularioturno.horafin);
            var hoy = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd ', 'es');

            var _int = hoy + " " + this.datosformularioturno.horainicio;

            var inicio = Date.parse(_int);
            var fnt = hoy + " " + this.datosformularioturno.horafin;
            var fin = Date.parse(fnt);

            if (horaResulinicio == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "hora inicio" debe de cumplir con los requerimientos!!',
                icon: 'error'
              });
              this.ngOnInit();
            } else if (horaResultfin == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "hora fin" debe de cumplir con los requerimientos!!',
                icon: 'error'
              });
              this.ngOnInit();
            } else if (inicio > fin) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Revise los datos',
                text: 'La hora de inicio n opuede ser posterior a la hora final',
                icon: 'error'
              });
              this.ngOnInit();
            } else {
              var peticion;
              peticion = this.adminService.guardarTurno(this.datosformularioturno);
              peticion.subscribe(function (respuesta) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  title: _this54.datosformularioturno.turno,
                  text: 'Nuevo turno creado',
                  icon: 'success',
                  showConfirmButton: false
                }), _this54.recarga();
              });
            }
          }
        }
      }, {
        key: "eliminarturno",
        value: function eliminarturno(registro, i) {
          var _this55 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "WARNING!! \xBFDesea elimina este rol?",
            text: 'Confirme si desea borrar el turno. Tenga en cuenta que todas las tareas o registros que haya creado bajo este turno quedarán sin turno asignado',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              _this55.datosborradoturno = JSON.stringify({
                "id_turno": registro.id_turno
              });

              _this55.adminService.deleteTurno(_this55.datosborradoturno).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: registro.id_turno,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this55.recarga();
            }
          });
        }
      }]);

      return TurnosFormComponent;
    }();

    TurnosFormComponent.ɵfac = function TurnosFormComponent_Factory(t) {
      return new (t || TurnosFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]));
    };

    TurnosFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TurnosFormComponent,
      selectors: [["app-formturnos"]],
      decls: 30,
      vars: 1,
      consts: [[1, "rol"], [1, "col-12", "alert", "bg-dark", "text-white"], [1, "row"], [1, "col-9"], [1, "col-3", "text-right"], ["alt", "A\xF1adir turno", "title", "A\xF1adir turno", 1, "altaseguimientow", 3, "click"], [1, "fa", "fa-plus", "fa-1"], [1, "col-12", "alert", "p-0", "m-0"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "comod"], ["content", ""], [4, "ngIf"], ["alt", "Eliminar Turno", "title", "Eliminar Turno", 1, "altaseguimiento", 3, "click"], [1, "fa", "fa-trash"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["name", "id_persona_log", "type", "hidden", 3, "ngModel", "ngModelChange"], ["id_persona_log", "ngModel"], ["name", "turno", "type", "text", 1, "form-control", "mb-2", 3, "ngModel", "ngModelChange"], ["turno", "ngModel"], [1, "input-group"], ["required", "", "name", "id_rol", "placeholder", "Seleccione rol", 1, "form-control", "form-control-sm", "mb-2", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", "name", "tipo_turno", "placeholder", "Seleccione tipo de turno", 1, "form-control", "form-control-sm", "mb-2", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["tipo_turno", "ngModel"], ["value", "entre semana"], ["value", "fin semana"], ["name", "horainicio", "type", "text", "id", "reloj", "placeholder", "00:00", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "minlength", "5", "maxlength", "5", "readonly", "", 1, "form-control", "mb-2", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["horainicio", "ngModel"], [3, "minutesGap"], ["fullTime", ""], ["name", "horafin", "type", "text", "id", "reloj", "placeholder", "00:00", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "minlength", "5", "maxlength", "5", "readonly", "", 1, "form-control", "mb-2", 3, "ngModel", "ngxTimepicker", "format", "ngModelChange"], ["horafin", "ngModel"], ["fullTimeFin", ""], [1, "modal-footer"], [1, "btn", "btn-info", 3, "click"], [3, "value"]],
      template: function TurnosFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Turnos - A\xF1ada o edite componentes de turnos para determinados roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TurnosFormComponent_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r349);

            var _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            return ctx.openturnos(_r322);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.turnos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_8__["NgxMaterialTimepickerComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnosFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formturnos',
          templateUrl: './turnos.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _services_admin_servicio_service__WEBPACK_IMPORTED_MODULE_5__["AdminServicioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/historico.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/historico.component.ts ***!
    \**********************************************/

  /*! exports provided: HistoricoComponent */

  /***/
  function srcAppPagesHistoricoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoricoComponent", function () {
      return HistoricoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _services_historico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/historico.service */
    "./src/app/services/historico.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HistoricoComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r143 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r143.id_log);
      }
    }

    function HistoricoComponent_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
      }

      if (rf & 2) {
        var value_r145 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, value_r145, 0, 90), " ");
      }
    }

    function HistoricoComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
      }

      if (rf & 2) {
        var value_r148 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, value_r148, 0, 90), " ");
      }
    }

    function HistoricoComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var value_r151 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r151, " ");
      }
    }

    function HistoricoComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var value_r155 = ctx.value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r155, " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/detallehistorico", a1];
    };

    function HistoricoComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r156 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r156.id_log));
      }
    }

    var _c1 = function _c1() {
      return ["/", "home"];
    };

    var HistoricoComponent = /*#__PURE__*/function () {
      function HistoricoComponent(httpClient, historicoService) {
        var _this56 = this;

        _classCallCheck(this, HistoricoComponent);

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
        this.fetch(function (data) {
          // cache
          _this56.temp = _toConsumableArray(data);
          _this56.rows = data;
        });
      } //el ngoninit nos servira para recargar en caso de error de validacion


      _createClass(HistoricoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this57 = this;

          this.fetch(function (data) {
            _this57.temp = _toConsumableArray(data);
            _this57.rows = data;
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //cargamos el listado

      }, {
        key: "fetch",
        value: function fetch(cb) {
          if (cb) {
            var req = new XMLHttpRequest();
            req.open('GET', "".concat(this.PHP_API_SERVER, "/ajax/read_historico.php"));

            req.onload = function () {
              cb(JSON.parse(req.response));
              console.log(JSON.parse(req.response));
            };

            req.send();
          }
        } //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(registro, i) {
          var _this58 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "\xBFDesea borrar el registro hist\xF3rico ".concat(registro.tarea),
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              _this58.datosborrado = JSON.stringify({
                "tarea": registro.tarea,
                "id_tarea": registro.id_tarea
              });

              _this58.historicoService["delete"](_this58.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: registro.tarea,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this58.recarga();
            }
          });
        } //actualizacion filtro busqueda

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase();
          var temp = this.temp.filter(function (d) {
            return d.tarea.toLowerCase().indexOf(val) !== -1 || d.fecha.toLowerCase().indexOf(val) !== -1 || d.nombres.toLowerCase().indexOf(val) !== -1 || !val;
          }); // actualizamos las rows

          this.rows = temp; // Cuando cambie el filtro, regresa a la primera página.

          this.table.offset = 0;
        }
      }]);

      return HistoricoComponent;
    }();

    HistoricoComponent.ɵfac = function HistoricoComponent_Factory(t) {
      return new (t || HistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"]));
    };

    HistoricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoricoComponent,
      selectors: [["app-historico"]],
      viewQuery: function HistoricoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 41,
      vars: 20,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [1, "row"], [1, "col-6"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-6", "text-right"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "id_log", 3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Fecha", 3, "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Tarea", 3, "maxWidth"], ["name", "Nombres", 3, "maxWidth"], ["name", "Descripcion", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [1, "text-center"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-eye"]],
      template: function HistoricoComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HistoricoComponent_Template_input_keyup_22_listener($event) {
            return ctx.updateFilter($event);
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-historico',
          templateUrl: './historico.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/historicomini.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/historicomini.component.ts ***!
    \**************************************************/

  /*! exports provided: HistoricoMiniComponent */

  /***/
  function srcAppPagesHistoricominiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoricoMiniComponent", function () {
      return HistoricoMiniComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _services_historico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/historico.service */
    "./src/app/services/historico.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HistoricoMiniComponent_li_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r535 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("\n", row_r535.id_log, "\n", row_r535.fecha, "\n", row_r535.tarea, "\n", row_r535.nombres, "\n", row_r535.descripcion, "\n");
      }
    }

    var HistoricoMiniComponent = /*#__PURE__*/function () {
      function HistoricoMiniComponent(httpClient, historicoService) {
        var _this59 = this;

        _classCallCheck(this, HistoricoMiniComponent);

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
        this.fetch(function (data) {
          // cache
          _this59.temp = _toConsumableArray(data);
          _this59.rows = data;
        });
      } //el ngoninit nos servira para recargar en caso de error de validacion


      _createClass(HistoricoMiniComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this60 = this;

          this.fetch(function (data) {
            _this60.temp = _toConsumableArray(data);
            _this60.rows = data;
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //cargamos el listado

      }, {
        key: "fetch",
        value: function fetch(cb) {
          if (cb) {
            var req = new XMLHttpRequest();
            req.open('GET', "".concat(this.PHP_API_SERVER, "/ajax/read_historico.php"));

            req.onload = function () {
              cb(JSON.parse(req.response));
            };

            req.send();
          }
        } //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(registro, i) {
          var _this61 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "\xBFDesea borrar el registro hist\xF3rico ".concat(registro.tarea),
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              _this61.datosborrado = JSON.stringify({
                "tarea": registro.tarea,
                "id_tarea": registro.id_tarea
              });

              _this61.historicoService["delete"](_this61.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: registro.tarea,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this61.recarga();
            }
          });
        } //actualizacion filtro busqueda

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase();
          var temp = this.temp.filter(function (d) {
            return d.tarea.toLowerCase().indexOf(val) !== -1 || d.fecha.toLowerCase().indexOf(val) !== -1 || d.nombres.toLowerCase().indexOf(val) !== -1 || !val;
          }); // actualizamos las rows

          this.rows = temp; // Cuando cambie el filtro, regresa a la primera página.

          this.table.offset = 0;
        }
      }]);

      return HistoricoMiniComponent;
    }();

    HistoricoMiniComponent.ɵfac = function HistoricoMiniComponent_Factory(t) {
      return new (t || HistoricoMiniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"]));
    };

    HistoricoMiniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoricoMiniComponent,
      selectors: [["app-historicomini"]],
      viewQuery: function HistoricoMiniComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]],
      template: function HistoricoMiniComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HistoricoMiniComponent_li_0_Template, 2, 5, "li", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoMiniComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-historicomini',
          templateUrl: './historicomini.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_historico_service__WEBPACK_IMPORTED_MODULE_6__["HistoricoService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/home.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home.component.ts ***!
    \*****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _turnos_homeget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./turnos/homeget.component */
    "./src/app/pages/turnos/homeget.component.ts");
    /* harmony import */


    var _turnos_elegir_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./turnos/elegir.component */
    "./src/app/pages/turnos/elegir.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function HomeComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-apphome");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-elegirturno");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(registroRoleService) {
        _classCallCheck(this, HomeComponent);

        this.registroRoleService = registroRoleService;
        this.registroroleperson = new _models_personas__WEBPACK_IMPORTED_MODULE_2__["Personas"]();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          //verificar  id_usuario y id_rol
          var id_persona = localStorage.getItem('id_persona');
          this.registroRoleService.getPerson(id_persona).subscribe(function (respuesta) {
            _this62.registroroleperson = respuesta;
            _this62.registroroleperson.id_persona = id_persona;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_1__["ApiPersonas"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-app"]],
      decls: 21,
      vars: 10,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12", "alturaminima", "mb-5"], [4, "ngIf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _turnos_homeget_component__WEBPACK_IMPORTED_MODULE_8__["HomeGetComponent"], _turnos_elegir_component__WEBPACK_IMPORTED_MODULE_9__["ElegirTurno"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-app',
          templateUrl: './home.component.html'
        }]
      }], function () {
        return [{
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_1__["ApiPersonas"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/identificacion/identificacion.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/identificacion/identificacion.component.ts ***!
    \******************************************************************/

  /*! exports provided: IdentificacionComponent */

  /***/
  function srcAppPagesIdentificacionIdentificacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentificacionComponent", function () {
      return IdentificacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/websocket.service */
    "./src/app/services/websocket.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var IdentificacionComponent = /*#__PURE__*/function () {
      function IdentificacionComponent(wsService, router) {
        _classCallCheck(this, IdentificacionComponent);

        this.wsService = wsService;
        this.router = router;
        this.nombre = '';
      }

      _createClass(IdentificacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ingresar",
        value: function ingresar() {
          var _this63 = this;

          this.wsService.loginWS(this.nombre).then(function () {
            _this63.router.navigateByUrl('/mensajes');
          });
        }
      }]);

      return IdentificacionComponent;
    }();

    IdentificacionComponent.ɵfac = function IdentificacionComponent_Factory(t) {
      return new (t || IdentificacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    IdentificacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdentificacionComponent,
      selectors: [["app-identificacion"]],
      decls: 9,
      vars: 2,
      consts: [[1, "row", "justify-content-center"], [1, "col-9"], [1, "p-4", 3, "ngSubmit"], ["type", "text", "name", "nombre", "placeholder", "nombre usuario", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-block", "mt-3", 3, "disabled"]],
      template: function IdentificacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IdentificacionComponent_Template_form_ngSubmit_5_listener() {
            return ctx.ingresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IdentificacionComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nombre.trim().length === 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentificacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-identificacion',
          templateUrl: './identificacion.component.html'
        }]
      }], function () {
        return [{
          type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/dataservice.service */
    "./src/app/services/dataservice.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/websocket.service */
    "./src/app/services/websocket.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(wsService, fb, dataService, router) {
        _classCallCheck(this, LoginComponent);

        this.wsService = wsService;
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.mail = '';
        this.angForm = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.wsService.loginWS(this.mail).then(function () {// this.router.navigateByUrl('/mensajes');
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.removeItem('id_persona') != null) {
            var keysToRemove = ["token", "id_persona", "usuario", "id_rol"];

            for (var _i = 0, _keysToRemove = keysToRemove; _i < _keysToRemove.length; _i++) {
              var key = _keysToRemove[_i];
              localStorage.removeItem(key);
            }

            this.router.navigateByUrl('');
          }
        }
      }, {
        key: "postdata",
        value: function postdata(angForm) {
          var _this64 = this;

          var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
          var emailResult = patronEmail.test(angForm.value.email);

          if (emailResult == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              text: 'El campo E-mail debe cumplir con el formato adecuado',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            // this.datosphp = JSON.stringify({ "email": angForm.value.email, "password": angForm.value.password });
            this.dataService.userlogin(angForm.value.email, angForm.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
              var redirect = _this64.dataService.redirectUrl ? _this64.dataService.redirectUrl : '/home';

              _this64.router.navigate([redirect]);
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'El campo E-mail o el password son erróneos. revise los datos.',
                icon: 'error',
                showConfirmButton: true
              });
            });
          }
        }
      }, {
        key: "email",
        get: function get() {
          return this.angForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.angForm.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 15,
      vars: 1,
      consts: [[1, "limiter", "animated", "fadeInLeft"], [1, "container-login100"], [1, "wrap-login100", "p-t-50", "p-b-90"], ["autocomplete", "off", 1, "login100-form", "validate-form", "flex-sb", "flex-w", 3, "formGroup", "ngSubmit"], [1, "login100-form-title", "p-b-51"], [1, "wrap-input100", "m-b-16"], ["type", "email", "name", "email", "formControlName", "email", "autocomplete", "off", "required", "", "placeholder", "E-mail", 1, "input100"], [1, "focus-input100"], ["type", "password", "name", "Password", "formControlName", "password", "autocomplete", "off", "placeholder", "Password", "required", "", "minlength", "6", 1, "input100"], [1, "container-login100-form-btn", "m-t-17"], ["type", "submit", 1, "login100-form-btn"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
            return ctx.postdata(ctx.angForm);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.angForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/mensajes/mensajes.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/mensajes/mensajes.component.ts ***!
    \******************************************************/

  /*! exports provided: MensajesComponent */

  /***/
  function srcAppPagesMensajesMensajesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajesComponent", function () {
      return MensajesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/websocket.service */
    "./src/app/services/websocket.service.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");

    var MensajesComponent = /*#__PURE__*/function () {
      function MensajesComponent(wsService) {
        _classCallCheck(this, MensajesComponent);

        this.wsService = wsService;
      }

      _createClass(MensajesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MensajesComponent;
    }();

    MensajesComponent.ɵfac = function MensajesComponent_Factory(t) {
      return new (t || MensajesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]));
    };

    MensajesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MensajesComponent,
      selectors: [["app-mensajes"]],
      decls: 3,
      vars: 0,
      consts: [[1, "row"], [1, "col-12"]],
      template: function MensajesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MensajesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mensajes',
          templateUrl: './mensajes.component.html'
        }]
      }], function () {
        return [{
          type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/perfil.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/perfil.component.ts ***!
    \*******************************************/

  /*! exports provided: PerfilPersona */

  /***/
  function srcAppPagesPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfilPersona", function () {
      return PerfilPersona;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/imagen/modimagen.component */
    "./src/app/components/imagen/modimagen.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function PerfilPersona_option_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rol_r176 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r176.id_rol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r176.rol_name, " ");
      }
    }

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "fa-eye-slash": a0,
        "fa-eye": a1
      };
    };

    var PerfilPersona = /*#__PURE__*/function () {
      function PerfilPersona(httpClient, registroService, activatedRoute, router, modalService) {
        var _this65 = this;

        _classCallCheck(this, PerfilPersona);

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
        }; //cargo los roles para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this65.roles = result;
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(PerfilPersona, [{
        key: "onReady",
        value: function onReady(editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this66 = this;

          var id_persona = this.activatedRoute.snapshot.paramMap.get('id_persona');
          this.registroService.getPerson(id_persona).subscribe(function (respuesta) {
            _this66.registro = respuesta;
            _this66.registro.id_persona = id_persona;
          });
        }
      }, {
        key: "toggleFieldTextType",
        value: function toggleFieldTextType() {
          this.fieldTextType = !this.fieldTextType;
        }
      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this67 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this67.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this67.closeResult = "Dismissed ".concat(_this67.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        } //alta de registro

      }, {
        key: "altaRegistro",
        value: function altaRegistro() {
          var _this68 = this;

          //si los campos obligatorios nos llegan vacios
          if (this.datoregistro.nombres == null || this.datoregistro.email == null || this.datoregistro.id_rol == null || this.datoregistro.password == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Revise los datos',
              text: 'Los campos obligatorios no pueden estar vacíos!!',
              icon: 'error'
            });
          } else {
            //enviamos el array a la funcions del server
            this.registroService.altaRegistro(this.datoregistro).subscribe(function (datos) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: _this68.datoregistro.nombres,
                text: 'Registro añadido',
                icon: 'success',
                showConfirmButton: false
              }), _this68.recarga();
            });
          }
        }
      }, {
        key: "guardarregistro",
        value: function guardarregistro() {
          var _this69 = this;

          console.log(this.registro); //eliminamos del local storage el id_rol siempre y cuando lo hayamos cambiado
          //y lo volvemos a cambiar por el nuevo
          // if(this.registro.id_rol!=''){
          //   localStorage.removeItem('id_rol');
          //   localStorage.setItem('id_rol',this.registro.id_rol);
          // }

          if (this.registro.nombres == '' || this.registro.telefono == '' || this.registro.email == '' || this.registro.direccion == '' || this.registro.id_rol == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              text: 'Los campos obligatorios no pueden quedar vacíos',
              icon: 'error',
              showConfirmButton: true
            });
          } else {
            //validacion email      
            var patronEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            var emailResult = patronEmail.test(this.registro.email);

            if (emailResult == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'El campo E-mail debe cumplir con el formato adecuado',
                icon: 'error',
                showConfirmButton: true
              });
            } else // validacion password
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
            } else {
              var peticion;
              peticion = this.registroService.actualizarRegistro(this.registro);
              peticion.subscribe(function (respuesta) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: _this69.registro.nombres,
                  text: 'Registro modificado',
                  icon: 'success',
                  showConfirmButton: false
                }), _this69.recarga();
              });
            }
          }
        }
      }]);

      return PerfilPersona;
    }();

    PerfilPersona.ɵfac = function PerfilPersona_Factory(t) {
      return new (t || PerfilPersona)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
    };

    PerfilPersona.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilPersona,
      selectors: [["app-perfil"]],
      decls: 85,
      vars: 71,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4", "tituloseccion"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-12"], [1, "alert", "linealbase"], [1, "text-muted"], [1, "col-md-2", "alturaminima", "mb-5"], [1, "col-md-10", "alturaminima", "mb-5"], [1, "form-group"], ["for", "nombres"], ["required", "", "required", "", "minlength", "4", "name", "nombres", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["nombres", "ngModel"], [1, "row"], [1, "col-md-4"], ["for", "email"], ["required", "", "name", "email", "type", "email", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "email", "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], [1, "input-group"], ["required", "", "required", "", "name", "password", "type", "password", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "type", "ngModelChange"], ["password", "ngModel"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 3, "ngClass", "click"], ["for", "telefono"], ["minlength", "9", "name", "telefono", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["telefono", "ngModel"], [1, "col-md-6"], ["for", "direccion"], ["name", "direccion", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "id_rol"], ["required", "", "name", "id_rol", "disabled", "", "readonly", "", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [3, "value"]],
      template: function PerfilPersona_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_31_listener($event) {
            return ctx.registro.nombres = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_40_listener($event) {
            return ctx.registro.email = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_49_listener($event) {
            return ctx.registro.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilPersona_Template_i_click_54_listener() {
            return ctx.toggleFieldTextType();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_60_listener($event) {
            return ctx.registro.telefono = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_input_ngModelChange_69_listener($event) {
            return ctx.registro.direccion = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PerfilPersona_Template_select_ngModelChange_77_listener($event) {
            return ctx.registro.id_rol = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, PerfilPersona_option_79_Template, 2, 2, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PerfilPersona_Template_button_click_81_listener() {
            return ctx.guardarregistro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

          var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

          var _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_imagen_modimagen_component__WEBPACK_IMPORTED_MODULE_11__["ModimagenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilPersona, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perfil',
          templateUrl: './perfil.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_8__["ApiPersonas"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/personas.pages.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/personas.pages.ts ***!
    \*****************************************/

  /*! exports provided: PersonasPage */

  /***/
  function srcAppPagesPersonasPagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonasPage", function () {
      return PersonasPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function PersonasPage_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r57 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r57.id_persona);
      }
    }

    function PersonasPage_ng_template_28_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_28_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var rowIndex_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.editing[rowIndex_r58 + "-nombres"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, value_r59, 0, 90), " ");
      }
    }

    function PersonasPage_ng_template_28_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PersonasPage_ng_template_28_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var rowIndex_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.updateValue($event, "nombres", rowIndex_r58);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r59 = ctx_r70.value;
        var row_r60 = ctx_r70.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r59)("title", row_r60.id_persona);
      }
    }

    function PersonasPage_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_28_span_0_Template, 4, 8, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_28_input_1_Template, 1, 2, "input", 49);
      }

      if (rf & 2) {
        var rowIndex_r58 = ctx.rowIndex;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r43.editing[rowIndex_r58 + "-nombres"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.editing[rowIndex_r58 + "-nombres"]);
      }
    }

    function PersonasPage_ng_template_30_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_30_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var rowIndex_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.editing[rowIndex_r71 + "-telefono"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:", value_r72, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, value_r72, 0, 90));
      }
    }

    function PersonasPage_ng_template_30_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PersonasPage_ng_template_30_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var rowIndex_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.updateValue($event, "telefono", rowIndex_r71);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r72 = ctx_r83.value;
        var row_r73 = ctx_r83.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r72)("title", row_r73.id_persona);
      }
    }

    function PersonasPage_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_30_span_0_Template, 5, 9, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_30_input_1_Template, 1, 2, "input", 49);
      }

      if (rf & 2) {
        var rowIndex_r71 = ctx.rowIndex;

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r44.editing[rowIndex_r71 + "-telefono"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.editing[rowIndex_r71 + "-telefono"]);
      }
    }

    function PersonasPage_ng_template_32_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_32_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.editing[rowIndex_r84 + "-email"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", value_r85, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, value_r85, 0, 90), "");
      }
    }

    function PersonasPage_ng_template_32_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PersonasPage_ng_template_32_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.updateValue($event, "email", rowIndex_r84);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r85 = ctx_r96.value;
        var row_r86 = ctx_r96.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r85)("title", row_r86.id_persona);
      }
    }

    function PersonasPage_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_32_span_0_Template, 5, 9, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_32_input_1_Template, 1, 2, "input", 49);
      }

      if (rf & 2) {
        var rowIndex_r84 = ctx.rowIndex;

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r45.editing[rowIndex_r84 + "-email"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.editing[rowIndex_r84 + "-email"]);
      }
    }

    function PersonasPage_ng_template_34_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function PersonasPage_ng_template_34_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);

          var rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r103.editing[rowIndex_r97 + "-id_rol"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r99, " ");
      }
    }

    function PersonasPage_ng_template_34_select_3_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rol_r108 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r108.id_rol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r108.rol_name, " ");
      }
    }

    function PersonasPage_ng_template_34_select_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PersonasPage_ng_template_34_select_3_Template_select_blur_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r109.editing[rowIndex_r97 + "-id_rol"] = false;
        })("change", function PersonasPage_ng_template_34_select_3_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);

          var rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r112.updateValue($event, "id_rol", rowIndex_r97);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonasPage_ng_template_34_select_3_option_1_Template, 2, 2, "option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r99 = ctx_r114.value;
        var row_r98 = ctx_r114.row;

        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r99)("title", row_r98.id_persona);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r102.roles);
      }
    }

    function PersonasPage_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonasPage_ng_template_34_span_0_Template, 3, 4, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 53, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PersonasPage_ng_template_34_select_3_Template, 2, 3, "select", 55);
      }

      if (rf & 2) {
        var rowIndex_r97 = ctx.rowIndex;
        var row_r98 = ctx.row;

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.editing[rowIndex_r97 + "-id_rol"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", row_r98.id_persona);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.editing[rowIndex_r97 + "-id_rol"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/detallepersona", a1];
    };

    function PersonasPage_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonasPage_ng_template_36_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          var row_r115 = ctx.row;

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r116.borrarRegistro(row_r115, ctx_r116.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r115 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r115.id_persona));
      }
    }

    function PersonasPage_option_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rol_r118 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", rol_r118.id_rol);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rol_r118.rol_name, " ");
      }
    }

    var _c1 = function _c1() {
      return ["/", "home"];
    };

    var PersonasPage = /*#__PURE__*/function () {
      function PersonasPage(httpClient, apiService) {
        var _this70 = this;

        _classCallCheck(this, PersonasPage);

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
        this.fetch(function (data) {
          // cache
          _this70.temp = _toConsumableArray(data);
          _this70.rows = data;
        }); //cargo los roles para los combos select

        httpClient.get(this.PHP_API_SERVER + '/ajax/roles_read.php').subscribe(function (result) {
          _this70.roles = result;
        }, function (error) {
          return console.error(error);
        });
      } //el ngoninit nos servira para recargar en caso de error de validacion


      _createClass(PersonasPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this71 = this;

          this.fetch(function (data) {
            _this71.temp = _toConsumableArray(data);
            _this71.rows = data;
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //cargamos el listado

      }, {
        key: "fetch",
        value: function fetch(cb) {
          if (cb) {
            var req = new XMLHttpRequest();
            req.open('GET', "".concat(this.PHP_API_SERVER, "/ajax/personas_read.php"));

            req.onload = function () {
              cb(JSON.parse(req.response));
            };

            req.send();
          }
        } //alta de registro

      }, {
        key: "altaRegistro",
        value: function altaRegistro() {
          var _this72 = this;

          //compruebo que el email no exista (ya se valida también en el servidor en PHP)
          this.apiService.validaEmail(this.datoregistro.email).subscribe(function (datosMail) {
            _this72.emailvalida = datosMail;

            if (_this72.emailvalida.mailexiste == true) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: _this72.datoregistro.email,
                text: 'El e-mail indicado ya existe, escoja otro',
                icon: 'error',
                showConfirmButton: true
              });
            } //si los campos obligatorios nos llegan vacios
            else if (_this72.datoregistro.nombres == null || _this72.datoregistro.email == null || _this72.datoregistro.id_rol == null || _this72.datoregistro.password == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  title: 'Revise los datos',
                  text: 'Los campos obligatorios no pueden estar vacíos!!',
                  icon: 'error'
                });
              } else {
                //enviamos el array a la funcions del server
                _this72.apiService.altaRegistro(_this72.datoregistro).subscribe(function (datos) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: _this72.datoregistro.nombres,
                    text: 'Registro añadido',
                    icon: 'success',
                    showConfirmButton: false
                  }), _this72.recarga();
                });
              }
          });
        } //actualización campos inline

      }, {
        key: "updateValue",
        value: function updateValue(event, cell, rowIndex) {
          this.editing[rowIndex + '-' + cell] = false;
          this.rows[rowIndex][cell] = event.target.value;
          this.rows = _toConsumableArray(this.rows);
          this.campo = cell;
          this.id_persona = event.target.title;
          this.valor = event.target.value;
          this.ever = this.campo, this.id_persona, this.valor;
          this.datos = JSON.stringify({
            "campo": this.campo,
            "id_persona": this.id_persona,
            "valor": this.valor
          }); //validacion del formato email

          var patronEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
          var emailResult = patronEmail.test(this.valor); // //si el campo que recibo es email...

          if (this.campo == "email") {
            //...valido su formato
            if (emailResult == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "email" debe de cumplir con los requerimientos!!',
                icon: 'error'
              });
              this.ngOnInit();
            } // else {
            //   Swal.fire({
            //     text: 'Registro actualizado',
            //     icon: 'success',  
            //     showConfirmButton : false
            //   })
            // }

          } //el campo que recibo es tarea pero es menor de 3 caracteres
          else if (this.campo == "nombres" && this.valor.length < 3) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "nombres" debe contener como mínimo tres carácteres!!',
                icon: 'error'
              });
              this.ngOnInit();
            } else if (this.campo == "telefono" && this.valor.length < 9) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "telefono" debe contener nueve carácteres!!',
                icon: 'error'
              });
              this.ngOnInit();
            } else {
              //todo Ok llamo al servicio
              this.apiService.modiRegistro(this.datos).subscribe(function (datos) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                  text: 'Registro actualizado',
                  icon: 'success',
                  showConfirmButton: true
                });
              });
            }
        } //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(registro, i) {
          var _this73 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "\xBFDesea borrar el registro ".concat(registro.nombres),
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              var id_persona_log = localStorage.getItem('id_persona');
              _this73.datosborrado = JSON.stringify({
                "id_persona_log": id_persona_log,
                "nombres": registro.nombres,
                "id_persona": registro.id_persona
              });

              _this73.apiService["delete"](_this73.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: registro.nombres,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this73.recarga();
            }
          });
        } //actualizacion filtro busqueda

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase();
          var temp = this.temp.filter(function (d) {
            return d.nombres.toLowerCase().indexOf(val) !== -1 || d.telefono.toLowerCase().indexOf(val) !== -1 || d.email.toLowerCase().indexOf(val) !== -1 || !val;
          }); // actualizamos las rows

          this.rows = temp; // Cuando cambie el filtro, regresa a la primera página.

          this.table.offset = 0;
        }
      }]);

      return PersonasPage;
    }();

    PersonasPage.ɵfac = function PersonasPage_Factory(t) {
      return new (t || PersonasPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_5__["ApiPersonas"]));
    };

    PersonasPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonasPage,
      selectors: [["app-personas"]],
      viewQuery: function PersonasPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 86,
      vars: 72,
      consts: [["id", "content", 1, "page-content"], [1, "row", "m-2"], [1, "col-md-12", "mt-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "m-2", "mt-4"], [1, "col-md-8", "alturaminima", "mb-5"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows"], ["mydatatable", ""], ["name", "id_persona", 3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Nombres", 3, "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Telefono", 3, "maxWidth"], ["name", "Email", 3, "maxWidth"], ["name", "Rol", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [1, "col-md-4", "pt-5"], [1, "form-group"], ["for", "nombres"], ["required", "", "required", "", "minlength", "4", "name", "nombres", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["nombres", "ngModel"], ["for", "telefono"], ["minlength", "9", "name", "telefono", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["telefono", "ngModel"], ["for", "email"], ["required", "", "name", "email", "type", "email", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "email", "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "direccion"], ["name", "direccion", "type", "text", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["for", "password"], ["required", "", "required", "", "name", "password", "type", "password", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "placeholder", "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "id_rol"], ["required", "", "name", "id_rol", 1, "form-control", "form-control-sm", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], ["id_rol", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], [1, "btn", "btn-primary", "colortopacio", 3, "click"], [1, "text-center"], [3, "title", "dblclick", 4, "ngIf"], ["required", "", "autofocus", "", "type", "text", "class", "form-control", 3, "value", "title", "keyup.enter", 4, "ngIf"], [3, "title", "dblclick"], ["required", "", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "keyup.enter"], [3, "href"], ["type", "hidden", 3, "value"], ["varId", ""], ["class", "form-control", "name", "id_rol", 3, "value", "title", "blur", "change", 4, "ngIf"], ["name", "id_rol", 1, "form-control", 3, "value", "title", "blur", "change"], [3, "value"], [1, "row"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-warning", "botonsizes", 3, "click"], [1, "fa", "fa-trash"]],
      template: function PersonasPage_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PersonasPage_Template_input_keyup_20_listener($event) {
            return ctx.updateFilter($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_43_listener($event) {
            return ctx.datoregistro.nombres = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_50_listener($event) {
            return ctx.datoregistro.telefono = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_57_listener($event) {
            return ctx.datoregistro.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_64_listener($event) {
            return ctx.datoregistro.direccion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_input_ngModelChange_71_listener($event) {
            return ctx.datoregistro.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonasPage_Template_select_ngModelChange_78_listener($event) {
            return ctx.datoregistro.id_rol = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PersonasPage_option_80_Template, 2, 2, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonasPage_Template_button_click_82_listener() {
            return ctx.altaRegistro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79);

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
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonasPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personas',
          templateUrl: './personas.pages.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_5__["ApiPersonas"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/turnos/elegir.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/turnos/elegir.component.ts ***!
    \**************************************************/

  /*! exports provided: ElegirTurno */

  /***/
  function srcAppPagesTurnosElegirComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElegirTurno", function () {
      return ElegirTurno;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/apiregistros.service */
    "./src/app/services/apiregistros.service.ts");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/detalle.service */
    "./src/app/services/detalle.service.ts");
    /* harmony import */


    var _models_turnos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/turnos */
    "./src/app/models/turnos.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_turnos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/turnos.service */
    "./src/app/services/turnos.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ElegirTurno_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var listat_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", listat_r211.id_turno);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", listat_r211.turno, " - ", listat_r211.tipo_turno, " - ", listat_r211.horainicio, " ", listat_r211.horafin, "");
      }
    }

    var _c0 = function _c0() {
      return ["/", "alta"];
    };

    function ElegirTurno_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ElegirTurno_ng_template_30_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r215.id_tarea, " ");
      }
    }

    function ElegirTurno_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElegirTurno_ng_template_30_div_0_Template, 2, 1, "div", 31);
      }

      if (rf & 2) {
        var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.registroroleperson.id_rol == "8");
      }
    }

    function ElegirTurno_ng_template_32_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ElegirTurno_ng_template_32_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224);

          var rowIndex_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r223.editing[rowIndex_r218 + "-tarea"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, value_r219, 0, 90), " ");
      }
    }

    function ElegirTurno_ng_template_32_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ElegirTurno_ng_template_32_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228);

          var rowIndex_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r227.updateValue($event, "tarea", rowIndex_r218);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r219 = ctx_r230.value;
        var row_r220 = ctx_r230.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r219)("title", row_r220.id_tarea);
      }
    }

    function ElegirTurno_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElegirTurno_ng_template_32_span_0_Template, 4, 8, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElegirTurno_ng_template_32_input_1_Template, 1, 2, "input", 34);
      }

      if (rf & 2) {
        var rowIndex_r218 = ctx.rowIndex;

        var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r207.editing[rowIndex_r218 + "-tarea"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.editing[rowIndex_r218 + "-tarea"]);
      }
    }

    function ElegirTurno_ng_template_34_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ElegirTurno_ng_template_34_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          var rowIndex_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r236.editing[rowIndex_r231 + "-hora"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r232, " ");
      }
    }

    function ElegirTurno_ng_template_34_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onError", function ElegirTurno_ng_template_34_input_1_Template_input_onError_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r241);

          var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r240.myHandleError;
        })("keyup.enter", function ElegirTurno_ng_template_34_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r241);

          var rowIndex_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r242.updateValue($event, "hora", rowIndex_r231);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r232 = ctx_r244.value;
        var row_r233 = ctx_r244.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r232)("title", row_r233.id_tarea);
      }
    }

    function ElegirTurno_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElegirTurno_ng_template_34_span_0_Template, 3, 4, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElegirTurno_ng_template_34_input_1_Template, 1, 2, "input", 37);
      }

      if (rf & 2) {
        var rowIndex_r231 = ctx.rowIndex;

        var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r208.editing[rowIndex_r231 + "-hora"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r208.editing[rowIndex_r231 + "-hora"]);
      }
    }

    function ElegirTurno_ng_template_36_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ElegirTurno_ng_template_36_span_1_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252);

          var rowIndex_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r251.editing[rowIndex_r245 + "-estatus"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r247, " ");
      }
    }

    function ElegirTurno_ng_template_36_select_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ElegirTurno_ng_template_36_select_4_Template_select_blur_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256);

          var rowIndex_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r255.editing[rowIndex_r245 + "-estatus"] = false;
        })("change", function ElegirTurno_ng_template_36_select_4_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r256);

          var rowIndex_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r258.updateValue($event, "estatus", rowIndex_r245);
        });

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
      }

      if (rf & 2) {
        var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r247 = ctx_r260.value;
        var row_r246 = ctx_r260.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r247)("title", row_r246.id_tarea);
      }
    }

    var _c1 = function _c1(a0, a1, a2) {
      return {
        positive: a0,
        negative: a1,
        posnegtive: a2
      };
    };

    function ElegirTurno_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ElegirTurno_ng_template_36_span_1_Template, 3, 4, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 40, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ElegirTurno_ng_template_36_select_4_Template, 7, 2, "select", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowIndex_r245 = ctx.rowIndex;
        var row_r246 = ctx.row;

        var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, row_r246.estatus == "OK", row_r246.estatus == "KO", row_r246.estatus == "OK-INC"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r209.editing[rowIndex_r245 + "-estatus"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", row_r246.id_tarea);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r209.editing[rowIndex_r245 + "-estatus"]);
      }
    }

    var _c2 = function _c2(a1) {
      return ["/detalle", a1];
    };

    function ElegirTurno_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElegirTurno_ng_template_38_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var row_r261 = ctx.row;

          var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r262.duplicar(row_r261, ctx_r262.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElegirTurno_ng_template_38_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r263);

          var row_r261 = ctx.row;

          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r264.borrarRegistro(row_r261, ctx_r264.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r261 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, row_r261.tokenid));
      }
    }

    var ElegirTurno = /*#__PURE__*/function () {
      function ElegirTurno(turnosService, registroRoleService, translate, httpClient, registroService, apiService) {
        var _this74 = this;

        _classCallCheck(this, ElegirTurno);

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
          hora: null,
          hour: null,
          estatus: null,
          status: null,
          observaciones: null
        };
        this.reactiveFormTurnos = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
          id_turno: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](''),
          id_persona: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"](localStorage.getItem('id_persona'))
        });
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["ColumnMode"];
        this.periodetalle = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        this.my_messages = {
          'emptyMessage': '',
          'totalMessage': ''
        };
        this.turnoestablecido = new _models_turnos__WEBPACK_IMPORTED_MODULE_9__["Turnos"]();
        translate.get('Total', {
          value: 'eeeeeeeeee'
        }).subscribe(function (res) {
          return _this74.my_messages.totalMessage = res;
        });
        translate.get('No hay resultados para mostrar', {
          value: ''
        }).subscribe(function (res) {
          return _this74.my_messages.emptyMessage = res;
        });
      } //el ngoninit nos servira para recargar en caso de error de validacion


      _createClass(ElegirTurno, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this75 = this;

          this.fetch(function (data) {
            _this75.temp = _toConsumableArray(data);
            _this75.rows = data;
          }); // //verificar  id_usuario y id_rol
          // const id_persona = localStorage.getItem('id_persona');
          // this.registroRoleService.getPerson(id_persona)
          //   .subscribe((respuesta: Personas) => {
          //     this.registroroleperson = respuesta;
          //     this.registroroleperson.id_persona = id_persona;
          //   });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //cargamos el listado

      }, {
        key: "fetch",
        value: function fetch(cb) {
          var _this76 = this;

          var req = new XMLHttpRequest();
          var id_persona = localStorage.getItem('id_persona'); //OBTENER EL ULTIMO TURNO DE ESTE USUARIO

          this.registroRoleService.getTurnosbyID(id_persona).subscribe(function (respuesta) {
            _this76.registroroleperson = respuesta;
            _this76.registroroleperson.id_persona = id_persona; //leemos los turnos del rol del usuario actual para mostrarlos en el select combo

            var id_rol;

            if (_this76.registroroleperson.id_rol == null) {
              var id_rol = localStorage.getItem('id_rol');
            } else {
              var id_rol = _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].CRND + _this76.registroroleperson.id_rol + _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__["Constantes"].DRND;
            }

            _this76.registroRoleService.getTurnosReadByRol(id_rol).subscribe(function (respuesta) {
              _this76.listaturnos = respuesta;
            });

            req.open('GET', "".concat(_this76.PHP_API_SERVER, "/ajax/registro_read_by_persona.php?id_persona=").concat(id_persona));

            req.onload = function () {
              cb(JSON.parse(req.response));
            };

            req.send();
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this77 = this;

          this.isSubmitted = true;
          var valor = JSON.stringify(this.reactiveFormTurnos.value);
          console.log(valor);
          this.turnosService.guardarTurno(valor).subscribe(function (respuesta) {
            localStorage.removeItem('valorTurno');
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Turno Establecido',
              text: 'El turno ha sido establecido',
              icon: 'success',
              showConfirmButton: false
            }), _this77.recarga();
          });
        } //alta de registro

      }, {
        key: "altaRegistro",
        value: function altaRegistro() {
          var _this78 = this;

          //si los campos obligatorios nos llegan vacios
          if (this.datoregistro.tarea == null || this.datoregistro.hora == null || this.datoregistro.estatus == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Revise los datos',
              text: 'Los campos no pueden estar vacíos!!',
              icon: 'error'
            });
          } else {
            //enviamos el array a la funcions del server
            this.apiService.altaRegistro(this.datoregistro).subscribe(function (datos) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: _this78.datoregistro.tarea,
                text: 'Registro añadido',
                icon: 'success',
                showConfirmButton: false
              }), _this78.recarga();
            });
          }
        } //actualización campos inline

      }, {
        key: "updateValue",
        value: function updateValue(event, cell, rowIndex) {
          var _this79 = this;

          this.editing[rowIndex + '-' + cell] = false;
          this.rows[rowIndex][cell] = event.target.value;
          this.rows = _toConsumableArray(this.rows);
          this.campo = cell;
          this.id_tarea = event.target.title;
          var id_persona = localStorage.getItem('id_persona');
          this.valor = event.target.value;
          this.ever = id_persona, this.campo, this.id_tarea, this.valor;
          this.datos = JSON.stringify({
            "id_persona": id_persona,
            "campo": this.campo,
            "id_tarea": this.id_tarea,
            "valor": this.valor
          }); //validacion del formato de la hora

          var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
          var horaResult = patronHora.test(this.valor); //si el campo que recibo es hora...

          if (this.campo == "hora") {
            //...valido su formato
            if (horaResult == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "hora" debe de cumplir con los requerimientos!!',
                icon: 'error'
              });
              this.ngOnInit();
            } // else {
            //   Swal.fire({
            //     text: 'Registro actualizado',
            //     icon: 'success',  
            //     showConfirmButton : false
            //   })
            // }

          } //el campo que recibo es tarea pero es menor de 3 caracteres
          else if (this.campo == "tarea" && this.valor.length < 3) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "tarea" debe contener como mínimo tres carácteres!!',
                icon: 'error'
              });
              this.ngOnInit();
            } else {
              //todo Ok llamo al servicio
              this.apiService.modiRegistro(this.datos).subscribe(function (datos) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  text: 'Registro actualizado',
                  icon: 'success',
                  showConfirmButton: false
                }), _this79.recarga();
              });
            }
        }
      }, {
        key: "duplicar",
        value: function duplicar(registro, i) {
          var _this80 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "\xBFDesea crear una tarea a partir de esta?",
            text: 'Confirme si desea proceder',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (orden) {
            if (orden.value) {
              var id_persona = localStorage.getItem('id_persona');
              _this80.datosclon = JSON.stringify({
                "id_persona": id_persona,
                "id_tarea": registro.id_tarea
              });
              var peticion;
              peticion = _this80.registroService.actualizarRegistroNuevaId(_this80.datosclon);
              peticion.subscribe(function (respuesta) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: _this80.id_tarea,
                  text: 'Registro duplicado',
                  icon: 'success',
                  showConfirmButton: true
                }), _this80.recarga();
              });
            }
          });
        } //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(registro, i) {
          var _this81 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "\xBFDesea borrar el registro ".concat(registro.tarea),
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              var id_persona = localStorage.getItem('id_persona');
              _this81.datosborrado = JSON.stringify({
                "id_persona": id_persona,
                "id_tarea": registro.id_tarea
              });

              _this81.apiService["delete"](_this81.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: registro.tarea,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this81.recarga();
            }
          });
        } //actualizacion filtro busqueda

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase();
          var temp = this.temp.filter(function (d) {
            return d.rol_name.toLowerCase().indexOf(val) !== -1 || d.tarea.toLowerCase().indexOf(val) !== -1 || d.hora.toLowerCase().indexOf(val) !== -1 || d.estatus.toLowerCase().indexOf(val) !== -1 || !val;
          }); // actualizamos las rows

          this.rows = temp; // Cuando cambie el filtro, regresa a la primera página.

          this.table.offset = 0;
        }
      }]);

      return ElegirTurno;
    }();

    ElegirTurno.ɵfac = function ElegirTurno_Factory(t) {
      return new (t || ElegirTurno)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_turnos_service__WEBPACK_IMPORTED_MODULE_12__["TurnosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_10__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    ElegirTurno.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ElegirTurno,
      selectors: [["app-elegirturno"]],
      viewQuery: function ElegirTurno_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 39,
      vars: 19,
      consts: [[1, "row"], [1, "col-6", "text-left"], [1, "upperc"], [1, "col-6", "text-right"], [1, "form-inline", 3, "formGroup", "ngSubmit"], ["f", "ngForm"], ["type", "hidden", "formControlName", "id_persona", "name", "id_persona", 1, "form-control"], [1, "form-group"], ["formControlName", "id_turno", "name", "id_turno", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-info", "ml-2"], [1, "col-10"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-2", "text-right"], [4, "ngIf"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows", "messages"], ["mydatatable", ""], [3, "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Tarea", 3, "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Hora", 3, "maxWidth"], ["name", "Estatus", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], [3, "value"], ["alt", "Nuevo registro", "title", "nuevo registro", 1, "btn", "btn-info", "pt4", "btn-circle", "posicionplus", 3, "routerLink"], [1, "fa", "fa-plus", "fa-3"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], [3, "title", "dblclick", 4, "ngIf"], ["required", "", "autofocus", "", "type", "text", "class", "form-control", 3, "value", "title", "keyup.enter", 4, "ngIf"], [3, "title", "dblclick"], ["required", "", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "keyup.enter"], ["required", "", "class", "form-control", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 3, "value", "title", "onError", "keyup.enter", 4, "ngIf"], ["required", "", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "onError", "keyup.enter"], [3, "ngClass"], ["type", "hidden", 3, "value"], ["varId", ""], ["class", "form-control", "name", "estatus", 3, "value", "title", "blur", "change", 4, "ngIf"], ["name", "estatus", 1, "form-control", 3, "value", "title", "blur", "change"], ["value", "OK"], ["value", "KO"], ["value", "OK-INC"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "click"], [1, "fa", "fa-clone"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-warning", "botonsizes", 3, "click"], [1, "fa", "fa-trash"]],
      template: function ElegirTurno_Template(rf, ctx) {
        if (rf & 1) {
          var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ElegirTurno_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265);

            var _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return ctx.onSubmit(_r201);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ElegirTurno_Template_input_keyup_22_listener($event) {
            return ctx.updateFilter($event);
          });

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
        }

        if (rf & 2) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registroroleperson.id_rol == "8" || ctx.registroroleperson.id_rol == "5" || ctx.registroroleperson.id_rol == "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("limit", 15)("columnMode", "force")("rows", ctx.rows)("messages", ctx.my_messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 1810);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElegirTurno, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-elegirturno',
          templateUrl: './elegir.component.html'
        }]
      }], function () {
        return [{
          type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_12__["TurnosService"]
        }, {
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_10__["ApiPersonas"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"]
        }, {
          type: _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/turnos/homeget.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/turnos/homeget.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeGetComponent */

  /***/
  function srcAppPagesTurnosHomegetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGetComponent", function () {
      return HomeGetComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/apiregistros.service */
    "./src/app/services/apiregistros.service.ts");
    /* harmony import */


    var _models_issue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/issue */
    "./src/app/models/issue.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/detalle.service */
    "./src/app/services/detalle.service.ts");
    /* harmony import */


    var _models_turnos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/turnos */
    "./src/app/models/turnos.ts");
    /* harmony import */


    var _models_personas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../models/personas */
    "./src/app/models/personas.ts");
    /* harmony import */


    var _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/apipersonas.service */
    "./src/app/services/apipersonas.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/", "alta"];
    };

    function HomeGetComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HomeGetComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r364 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r364.id_tarea, " ");
      }
    }

    function HomeGetComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r368 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r368.rol_name, " ");
      }
    }

    function HomeGetComponent_ng_template_17_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeGetComponent_ng_template_17_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r375);

          var rowIndex_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r374.editing[rowIndex_r369 + "-tarea"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 4, value_r370, 0, 90), " ");
      }
    }

    function HomeGetComponent_ng_template_17_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function HomeGetComponent_ng_template_17_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r379);

          var rowIndex_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r378.updateValue($event, "tarea", rowIndex_r369);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r370 = ctx_r381.value;
        var row_r371 = ctx_r381.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r370)("title", row_r371.id_tarea);
      }
    }

    function HomeGetComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeGetComponent_ng_template_17_span_0_Template, 4, 8, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeGetComponent_ng_template_17_input_1_Template, 1, 2, "input", 23);
      }

      if (rf & 2) {
        var rowIndex_r369 = ctx.rowIndex;

        var ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r358.editing[rowIndex_r369 + "-tarea"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r358.editing[rowIndex_r369 + "-tarea"]);
      }
    }

    function HomeGetComponent_ng_template_19_span_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeGetComponent_ng_template_19_span_0_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r388);

          var rowIndex_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r387.editing[rowIndex_r382 + "-hora"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r383, " ");
      }
    }

    function HomeGetComponent_ng_template_19_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onError", function HomeGetComponent_ng_template_19_input_1_Template_input_onError_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r392);

          var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r391.myHandleError;
        })("keyup.enter", function HomeGetComponent_ng_template_19_input_1_Template_input_keyup_enter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r392);

          var rowIndex_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r393.updateValue($event, "hora", rowIndex_r382);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r383 = ctx_r395.value;
        var row_r384 = ctx_r395.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r383)("title", row_r384.id_tarea);
      }
    }

    function HomeGetComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeGetComponent_ng_template_19_span_0_Template, 3, 4, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeGetComponent_ng_template_19_input_1_Template, 1, 2, "input", 26);
      }

      if (rf & 2) {
        var rowIndex_r382 = ctx.rowIndex;

        var ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r359.editing[rowIndex_r382 + "-hora"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r359.editing[rowIndex_r382 + "-hora"]);
      }
    }

    function HomeGetComponent_ng_template_21_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function HomeGetComponent_ng_template_21_span_1_Template_span_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r403);

          var rowIndex_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r402.editing[rowIndex_r396 + "-estatus"] = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "txtDobleclickparaeditar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r398, " ");
      }
    }

    function HomeGetComponent_ng_template_21_select_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function HomeGetComponent_ng_template_21_select_4_Template_select_blur_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r407);

          var rowIndex_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r406.editing[rowIndex_r396 + "-estatus"] = false;
        })("change", function HomeGetComponent_ng_template_21_select_4_Template_select_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r407);

          var rowIndex_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

          var ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r409.updateValue($event, "estatus", rowIndex_r396);
        });

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
      }

      if (rf & 2) {
        var ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var value_r398 = ctx_r411.value;
        var row_r397 = ctx_r411.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r398)("title", row_r397.id_tarea);
      }
    }

    var _c1 = function _c1(a0, a1, a2) {
      return {
        positive: a0,
        negative: a1,
        posnegtive: a2
      };
    };

    function HomeGetComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeGetComponent_ng_template_21_span_1_Template, 3, 4, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 29, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeGetComponent_ng_template_21_select_4_Template, 7, 2, "select", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rowIndex_r396 = ctx.rowIndex;
        var row_r397 = ctx.row;

        var ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, row_r397.estatus == "OK", row_r397.estatus == "KO", row_r397.estatus == "OK-INC"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r360.editing[rowIndex_r396 + "-estatus"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", row_r397.id_tarea);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r360.editing[rowIndex_r396 + "-estatus"]);
      }
    }

    var _c2 = function _c2(a1) {
      return ["/detalle", a1];
    };

    function HomeGetComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeGetComponent_ng_template_23_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414);

          var row_r412 = ctx.row;

          var ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r413.duplicar(row_r412, ctx_r413.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeGetComponent_ng_template_23_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r414);

          var row_r412 = ctx.row;

          var ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r415.borrarRegistro(row_r412, ctx_r415.i);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r412 = ctx.row;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, row_r412.tokenid));
      }
    }

    var _c3 = function _c3(a0, a1) {
      return {
        prop: a0,
        dir: a1
      };
    };

    var _c4 = function _c4(a0) {
      return [a0];
    };

    var HomeGetComponent = /*#__PURE__*/function () {
      function HomeGetComponent(registroRoleService, translate, httpClient, registroService, apiService) {
        var _this82 = this;

        _classCallCheck(this, HomeGetComponent);

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
          hora: null,
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
        this.getmyNewValue = localStorage.getItem('myNewValue'); // });

        translate.get('Total', {
          value: 'eeeeeeeeee'
        }).subscribe(function (res) {
          return _this82.my_messages.totalMessage = res;
        });
        translate.get('No hay resultados para mostrar', {
          value: ''
        }).subscribe(function (res) {
          return _this82.my_messages.emptyMessage = res;
        });
      } //el ngoninit nos servira para recargar en caso de error de validacion


      _createClass(HomeGetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this83 = this;

          this.fetch(function (data) {
            _this83.temp = _toConsumableArray(data);
            _this83.rows = data;
          }); //verificar  id_usuario y id_rol

          var id_persona = localStorage.getItem('id_persona');
          this.registroRoleService.getPerson(id_persona).subscribe(function (respuesta) {
            _this83.registroroleperson = respuesta;
            _this83.registroroleperson.id_persona = id_persona;
          });
        } //reload pagina al usar sweet alerts etc

      }, {
        key: "recarga",
        value: function recarga() {
          location.reload();
        } //cargamos el listado

      }, {
        key: "fetch",
        value: function fetch(cb) {
          var req = new XMLHttpRequest();
          var id_persona = localStorage.getItem('id_persona'); // this.registroRoleService.getPerson(id_persona)
          // .subscribe((respuesta: Personas) => {
          //   this.registroroleperson = respuesta;
          //   this.registroroleperson.id_persona = id_persona;

          req.open('GET', "".concat(this.PHP_API_SERVER, "/ajax/registro_read.php?id_persona=").concat(id_persona));

          req.onload = function () {
            cb(JSON.parse(req.response));
          };

          req.send(); // });
        } //alta de registro

      }, {
        key: "altaRegistro",
        value: function altaRegistro() {
          var _this84 = this;

          //si los campos obligatorios nos llegan vacios
          if (this.datoregistro.tarea == null || this.datoregistro.hora == null || this.datoregistro.estatus == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Revise los datos',
              text: 'Los campos no pueden estar vacíos!!',
              icon: 'error'
            });
          } else {
            //enviamos el array a la funcions del server
            this.apiService.altaRegistro(this.datoregistro).subscribe(function (datos) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: _this84.datoregistro.tarea,
                text: 'Registro añadido',
                icon: 'success',
                showConfirmButton: false
              }), _this84.recarga();
            });
          }
        } //actualización campos inline

      }, {
        key: "updateValue",
        value: function updateValue(event, cell, rowIndex) {
          var _this85 = this;

          this.editing[rowIndex + '-' + cell] = false;
          this.rows[rowIndex][cell] = event.target.value;
          this.rows = _toConsumableArray(this.rows);
          this.campo = cell;
          this.id_tarea = event.target.title;
          var id_persona = localStorage.getItem('id_persona');
          this.valor = event.target.value;
          this.ever = id_persona, this.campo, this.id_tarea, this.valor;
          this.datos = JSON.stringify({
            "id_persona": id_persona,
            "campo": this.campo,
            "id_tarea": this.id_tarea,
            "valor": this.valor
          }); //validacion del formato de la hora

          var patronHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
          var horaResult = patronHora.test(this.valor); //si el campo que recibo es hora...

          if (this.campo == "hora") {
            //...valido su formato
            if (horaResult == false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "hora" debe de cumplir con los requerimientos!!',
                icon: 'error'
              });
              this.ngOnInit();
            } // else {
            //   Swal.fire({
            //     text: 'Registro actualizado',
            //     icon: 'success',  
            //     showConfirmButton : false
            //   })
            // }

          } //el campo que recibo es tarea pero es menor de 3 caracteres
          else if (this.campo == "tarea" && this.valor.length < 3) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Revise los datos',
                text: 'El campo "tarea" debe contener como mínimo tres carácteres!!',
                icon: 'error'
              });
              this.ngOnInit();
            } else {
              //todo Ok llamo al servicio
              this.apiService.modiRegistro(this.datos).subscribe(function (datos) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  text: 'Registro actualizado',
                  icon: 'success',
                  showConfirmButton: false
                }), _this85.recarga();
              });
            }
        }
      }, {
        key: "duplicar",
        value: function duplicar(registro, i) {
          var _this86 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "\xBFDesea crear una tarea a partir de esta?",
            text: 'Confirme si desea proceder',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (orden) {
            if (orden.value) {
              var id_persona = localStorage.getItem('id_persona');
              _this86.datosclon = JSON.stringify({
                "id_persona": id_persona,
                "id_tarea": registro.id_tarea
              });
              var peticion;
              console.log(_this86.datosclon);
              peticion = _this86.registroService.actualizarRegistroNuevaId(_this86.datosclon);
              peticion.subscribe(function (respuesta) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: _this86.id_tarea,
                  text: 'Registro duplicado',
                  icon: 'success',
                  showConfirmButton: true
                }), _this86.recarga();
              });
            }
          });
        } //eliminar registro      

      }, {
        key: "borrarRegistro",
        value: function borrarRegistro(registro, i) {
          var _this87 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "\xBFDesea borrar el registro ".concat(registro.tarea),
            text: 'Confirme si desea borrar el registro',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (respuesta) {
            if (respuesta.value) {
              var id_persona = localStorage.getItem('id_persona');
              _this87.datosborrado = JSON.stringify({
                "id_persona": id_persona,
                "id_tarea": registro.id_tarea
              });

              _this87.apiService["delete"](_this87.datosborrado).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: registro.tarea,
                text: 'Registro eliminado',
                icon: 'success',
                showConfirmButton: false
              }), _this87.recarga();
            }
          });
        }
      }, {
        key: "onSort",
        value: function onSort(event) {
          localStorage.setItem('myProp', event.column.prop);
          localStorage.setItem('myNewValue', event.newValue);
          this.recarga();
        } //actualizacion filtro busqueda

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value.toLowerCase();
          var temp = this.temp.filter(function (d) {
            return d.rol_name.toLowerCase().indexOf(val) !== -1 || d.tarea.toLowerCase().indexOf(val) !== -1 || d.hora.toLowerCase().indexOf(val) !== -1 || d.estatus.toLowerCase().indexOf(val) !== -1 || !val;
          }); // actualizamos las rows

          this.rows = temp; // Cuando cambie el filtro, regresa a la primera página.

          this.table.offset = 0;
        }
      }]);

      return HomeGetComponent;
    }();

    HomeGetComponent.ɵfac = function HomeGetComponent_Factory(t) {
      return new (t || HomeGetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apipersonas_service__WEBPACK_IMPORTED_MODULE_11__["ApiPersonas"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
    };

    HomeGetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeGetComponent,
      selectors: [["app-apphome"]],
      viewQuery: function HomeGetComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 24,
      vars: 22,
      consts: [[1, "row"], [1, "col-8", "text-left"], [1, "col-2"], [1, "form"], ["floatPlaceholder", "never", "color", "accent"], ["matInput", "", 3, "placeholder", "keyup"], ["filter", ""], [1, "col-2", "text-right"], [4, "ngIf"], ["headerHeight", "50", "footerHeight", "50", "rowHeight", "auto", 1, "material", "striped", 3, "limit", "columnMode", "rows", "messages", "sorts", "sort"], ["mydatatable", ""], ["name", "ID", "prop", "id_tarea", 3, "sortable", "maxWidth"], ["class", "mat-column-id", "ngx-datatable-cell-template", ""], ["name", "Rol", "prop", "rol_name", 3, "sortable", "maxWidth"], ["ngx-datatable-cell-template", ""], ["name", "Tarea", 3, "maxWidth"], ["name", "Hora", 3, "maxWidth"], ["name", "Estatus", 3, "maxWidth"], ["name", "ver", 3, "maxWidth"], ["alt", "Nuevo registro", "title", "nuevo registro", 1, "btn", "btn-info", "pt4", "btn-circle", "posicionplus", 3, "routerLink"], [1, "fa", "fa-plus", "fa-3"], [1, "text-center"], [3, "title", "dblclick", 4, "ngIf"], ["required", "", "autofocus", "", "type", "text", "class", "form-control", 3, "value", "title", "keyup.enter", 4, "ngIf"], [3, "title", "dblclick"], ["required", "", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "keyup.enter"], ["required", "", "class", "form-control", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 3, "value", "title", "onError", "keyup.enter", 4, "ngIf"], ["required", "", "min", "5", "max", "5", "pattern", "^([01]?[0-9]|2[0-3]):[0-5][0-9]$", "autofocus", "", "type", "text", 1, "form-control", 3, "value", "title", "onError", "keyup.enter"], [3, "ngClass"], ["type", "hidden", 3, "value"], ["varId", ""], ["class", "form-control", "name", "estatus", 3, "value", "title", "blur", "change", 4, "ngIf"], ["name", "estatus", 1, "form-control", 3, "value", "title", "blur", "change"], ["value", "OK"], ["value", "KO"], ["value", "OK-INC"], [1, "col-12", "p0", "m0"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "click"], [1, "fa", "fa-clone"], [1, "btn", "btn-warning", "botonsizes", "mr-1", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-warning", "botonsizes", 3, "click"], [1, "fa", "fa-trash"]],
      template: function HomeGetComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeGetComponent_Template_input_keyup_5_listener($event) {
            return ctx.updateFilter($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function HomeGetComponent_Template_ngx_datatable_sort_10_listener($event) {
            return ctx.onSort($event);
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "txtFiltrarRegistros"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registroroleperson.id_rol == "8" || ctx.registroroleperson.id_rol == "5" || ctx.registroroleperson.id_rol == "6");

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
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableColumnCellDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_x"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeGetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-apphome',
          templateUrl: './homeget.component.html'
        }]
      }], function () {
        return [{
          type: _services_apipersonas_service__WEBPACK_IMPORTED_MODULE_11__["ApiPersonas"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_detalle_service__WEBPACK_IMPORTED_MODULE_8__["DetalleService"]
        }, {
          type: _services_apiregistros_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/admin-servicio.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/admin-servicio.service.ts ***!
    \****************************************************/

  /*! exports provided: AdminServicioService */

  /***/
  function srcAppServicesAdminServicioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminServicioService", function () {
      return AdminServicioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AdminServicioService = /*#__PURE__*/function () {
      function AdminServicioService(http) {
        _classCallCheck(this, AdminServicioService);

        this.http = http;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_1__["Constantes"].API_SERVER; //URL del servicio
      }

      _createClass(AdminServicioService, [{
        key: "altaRegistroFoto",
        value: function altaRegistroFoto(datosFoto) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/personas_update_foto.php"), datosFoto);
        }
      }, {
        key: "guardarRol",
        value: function guardarRol(datosformulario) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/rol_crear.php"), JSON.stringify(datosformulario));
        }
      }, {
        key: "deleteRol",
        value: function deleteRol(datosborrado) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/roles_borrado.php"), datosborrado);
        }
      }, {
        key: "guardarTurno",
        value: function guardarTurno(datosformularioturno) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/turno_registro_crear.php"), JSON.stringify(datosformularioturno));
        }
      }, {
        key: "deleteTurno",
        value: function deleteTurno(datosborradoturno) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/turno_registro_borrado.php"), datosborradoturno);
        }
      }, {
        key: "getPersonas",
        value: function getPersonas(id_persona) {
          return this.http.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        }
      }, {
        key: "guardarNuevancidencia",
        value: function guardarNuevancidencia(incidenciaForm) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/incidencia_crear.php"), JSON.stringify(incidenciaForm));
        }
      }, {
        key: "getAyuda",
        value: function getAyuda(id_ayuda) {
          return this.http.get("".concat(this.PHP_API_SERVER, "/ajax/ayuda_detalle.php?id_ayuda=").concat(id_ayuda));
        }
      }, {
        key: "guardarNewAyuda",
        value: function guardarNewAyuda(datosformularioayuda) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/ayuda_crear.php"), JSON.stringify(datosformularioayuda));
        }
      }, {
        key: "guardarAyudaModificado",
        value: function guardarAyudaModificado(datosformularioayuda) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/ayuda_update.php"), JSON.stringify(datosformularioayuda));
        }
      }, {
        key: "deleteAyuda",
        value: function deleteAyuda(datosborradoAyuda) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/ayuda_borrado.php"), datosborradoAyuda);
        }
      }]);

      return AdminServicioService;
    }();

    AdminServicioService.ɵfac = function AdminServicioService_Factory(t) {
      return new (t || AdminServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AdminServicioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminServicioService,
      factory: AdminServicioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminServicioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/apipersonas.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/apipersonas.service.ts ***!
    \*************************************************/

  /*! exports provided: ApiPersonas */

  /***/
  function srcAppServicesApipersonasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiPersonas", function () {
      return ApiPersonas;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var ApiPersonas = /*#__PURE__*/function () {
      function ApiPersonas(httpClient) {
        _classCallCheck(this, ApiPersonas);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      } //turnos por rol


      _createClass(ApiPersonas, [{
        key: "getTurnosReadByRol",
        value: function getTurnosReadByRol(id_rol) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/turnos_read_by_rol.php?id_rol=").concat(id_rol));
        } //obtener persona por id_tarea

      }, {
        key: "getPerson",
        value: function getPerson(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        } //obtener foto persona

      }, {
        key: "getFotografia",
        value: function getFotografia(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        }
      }, {
        key: "validaEmail",
        value: function validaEmail(email) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_validar_email.php?email=").concat(email));
        }
      }, {
        key: "altaRegistroFoto",
        value: function altaRegistroFoto(datosFoto) {
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/personas_update_foto.php"), datosFoto);
        }
      }, {
        key: "altaRegistro",
        value: function altaRegistro(datoregistro) {
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/personas_crear.php"), JSON.stringify(datoregistro));
        }
      }, {
        key: "getIdTurnoby",
        value: function getIdTurnoby(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/turnos_read_by__id_persona.php?id_persona=").concat(id_persona));
        }
      }, {
        key: "getTurnosbyID",
        value: function getTurnosbyID(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/turno_read_by_persona.php?id_persona=").concat(id_persona));
        }
      }, {
        key: "actualizarRegistro",
        value: function actualizarRegistro(persona) {
          var personaTemp = Object.assign({}, persona);
          delete personaTemp.id_persona;
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/personas_update_detalle.php"), persona);
        }
      }, {
        key: "modiRegistro",
        value: function modiRegistro(datos) {
          console.log(datos);
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_update_personas.php"), datos);
        }
      }, {
        key: "delete",
        value: function _delete(datosborrado) {
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/personas_borrado.php"), datosborrado);
        }
      }]);

      return ApiPersonas;
    }();

    ApiPersonas.ɵfac = function ApiPersonas_Factory(t) {
      return new (t || ApiPersonas)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiPersonas.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiPersonas,
      factory: ApiPersonas.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiPersonas, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/apiregistros.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/apiregistros.service.ts ***!
    \**************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiregistrosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      }

      _createClass(ApiService, [{
        key: "getLastId",
        value: function getLastId() {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/last_id.php"));
        }
      }, {
        key: "altaRegistro",
        value: function altaRegistro(datoregistro) {
          console.log(JSON.stringify(datoregistro));
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_crear.php"), JSON.stringify(datoregistro));
        }
      }, {
        key: "modiRegistro",
        value: function modiRegistro(datos) {
          //console.log(JSON.stringify(datos));
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_update.php"), datos);
        }
      }, {
        key: "delete",
        value: function _delete(datosborrado) {
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_borrado.php"), datosborrado);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ayuda.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/ayuda.service.ts ***!
    \*******************************************/

  /*! exports provided: AyudaService */

  /***/
  function srcAppServicesAyudaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AyudaService", function () {
      return AyudaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var AyudaService = /*#__PURE__*/function () {
      function AyudaService(httpClient) {
        _classCallCheck(this, AyudaService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      } //obtener persona por id_tarea


      _createClass(AyudaService, [{
        key: "open",
        value: function open(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        }
      }]);

      return AyudaService;
    }();

    AyudaService.ɵfac = function AyudaService_Factory(t) {
      return new (t || AyudaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AyudaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AyudaService,
      factory: AyudaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AyudaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./websocket.service */
    "./src/app/services/websocket.service.ts");

    var ChatService = /*#__PURE__*/function () {
      function ChatService(wsService) {
        _classCallCheck(this, ChatService);

        this.wsService = wsService;
      }

      _createClass(ChatService, [{
        key: "sendMessage",
        value: function sendMessage(mensaje) {
          var payload = {
            de: this.wsService.getUsuario().nombre,
            cuerpo: mensaje
          };
          this.wsService.emit('mensaje', payload);
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          return this.wsService.listen('mensaje-nuevo');
        }
      }, {
        key: "getMessagesPrivate",
        value: function getMessagesPrivate() {
          return this.wsService.listen('mensaje-privado');
        }
      }, {
        key: "getUsuariosActivos",
        value: function getUsuariosActivos() {
          return this.wsService.listen('usuarios-activos');
        }
      }, {
        key: "emitirUsuariosActivos",
        value: function emitirUsuariosActivos() {
          this.wsService.emit('obtener-usuarios');
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]));
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(httpClient) {
        _classCallCheck(this, DataService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__["Constantes"].API_SERVER; //URL del servicio

        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
      }

      _createClass(DataService, [{
        key: "getDialogData",
        value: function getDialogData() {
          return this.dialogData;
        }
        /** CRUD METHODS */

      }, {
        key: "getAllIssues",
        value: function getAllIssues() {
          var _this88 = this;

          this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/registro_read.php")).subscribe(function (data) {
            _this88.dataChange.next(data);
          }, function (error) {
            console.log(error.name + ' ' + error.message);
          });
        } // DEMO ONLY, you can find working methods below

      }, {
        key: "addIssue",
        value: function addIssue(issue) {
          this.dialogData = issue;
        }
      }, {
        key: "updateIssue",
        value: function updateIssue(issue) {
          this.dialogData = issue;
        }
      }, {
        key: "deleteIssue",
        value: function deleteIssue(id) {
          console.log(id);
        }
      }, {
        key: "data",
        get: function get() {
          return this.dataChange.value;
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/dataservice.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/dataservice.service.ts ***!
    \*************************************************/

  /*! exports provided: DataserviceService */

  /***/
  function srcAppServicesDataserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataserviceService", function () {
      return DataserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var DataserviceService = /*#__PURE__*/function () {
      function DataserviceService(httpClient) {
        _classCallCheck(this, DataserviceService);

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

      _createClass(DataserviceService, [{
        key: "userlogin",
        value: function userlogin(username, password) {
          var _this89 = this;

          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/login.php"), {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (Usermodule) {
            //id mask
            var id_persona_mask = _this89.aRndm + Usermodule[0].id_persona + _this89.bRndm;

            _this89.setToken(Usermodule[0].nombres);

            _this89.setID(id_persona_mask);

            _this89.setIDrol(Usermodule[0].id_rol);

            _this89.getLoggedInName.emit(true);

            return Usermodule;
          }));
        }
      }, {
        key: "getUserId",
        value: function getUserId(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        }
      }, {
        key: "setIDrol",
        value: function setIDrol(id_rol) {
          localStorage.setItem('id_rol', this.cRndm + id_rol + this.dRndm);
        }
      }, {
        key: "setID",
        value: function setID(id_persona) {
          localStorage.setItem('id_persona', id_persona);
        }
      }, {
        key: "getID",
        value: function getID() {
          return localStorage.getItem('id_persona');
        } //token

      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', this.rand(token));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var usertoken = this.getToken();
          var idtoken = this.getID();

          if (usertoken != null || idtoken != null) {
            return true;
          }

          return false;
        }
      }]);

      return DataserviceService;
    }();

    DataserviceService.ɵfac = function DataserviceService_Factory(t) {
      return new (t || DataserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DataserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataserviceService,
      factory: DataserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, {
        getLoggedInName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/detalle.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/detalle.service.ts ***!
    \*********************************************/

  /*! exports provided: DetalleService */

  /***/
  function srcAppServicesDetalleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleService", function () {
      return DetalleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var DetalleService = /*#__PURE__*/function () {
      function DetalleService(http) {
        _classCallCheck(this, DetalleService);

        this.http = http;
        this.personas = [];
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      } //modificar registro


      _createClass(DetalleService, [{
        key: "actualizarRegistro",
        value: function actualizarRegistro(persona) {
          var personaTemp = Object.assign({}, persona);
          delete personaTemp.id_tarea;
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/registro_update_detalle.php"), persona);
        } //duplicar

      }, {
        key: "actualizarRegistroNuevaId",
        value: function actualizarRegistroNuevaId(datosclon) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/registro_duplicar_detalle.php"), datosclon);
        }
      }, {
        key: "actualizarRegistroSeguimiento",
        value: function actualizarRegistroSeguimiento(datoregistro) {
          console.log(datoregistro);
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/registro_update_seguimiento.php"), JSON.stringify(datoregistro));
        } //obtener persona por id_tarea

      }, {
        key: "getPerson",
        value: function getPerson(id_tarea) {
          return this.http.get("".concat(this.PHP_API_SERVER, "/ajax/registro_detalle.php?id_tarea=").concat(id_tarea));
        }
      }, {
        key: "delete",
        value: function _delete(datosborrado) {
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/registro_seguimiento_borrado.php"), datosborrado);
        }
      }]);

      return DetalleService;
    }();

    DetalleService.ɵfac = function DetalleService_Factory(t) {
      return new (t || DetalleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DetalleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DetalleService,
      factory: DetalleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/detallehistorico.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/detallehistorico.service.ts ***!
    \******************************************************/

  /*! exports provided: DetalleHistoricoService */

  /***/
  function srcAppServicesDetallehistoricoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalleHistoricoService", function () {
      return DetalleHistoricoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var DetalleHistoricoService = /*#__PURE__*/function () {
      function DetalleHistoricoService(http) {
        _classCallCheck(this, DetalleHistoricoService);

        this.http = http; //persons:any[] = [];

        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      } //obtener persona por id


      _createClass(DetalleHistoricoService, [{
        key: "getDetalleHistorico",
        value: function getDetalleHistorico(id_log) {
          return this.http.get("".concat(this.PHP_API_SERVER, "/ajax/registro_historico_detalle.php?id_log=").concat(id_log));
        }
      }, {
        key: "delete",
        value: function _delete(datosborrado) {
          console.log(datosborrado);
          return this.http.post("".concat(this.PHP_API_SERVER, "/ajax/registro_seguimiento_borrado.php"), datosborrado);
        }
      }]);

      return DetalleHistoricoService;
    }();

    DetalleHistoricoService.ɵfac = function DetalleHistoricoService_Factory(t) {
      return new (t || DetalleHistoricoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DetalleHistoricoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DetalleHistoricoService,
      factory: DetalleHistoricoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleHistoricoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/flotante.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/flotante.service.ts ***!
    \**********************************************/

  /*! exports provided: FlotanteService */

  /***/
  function srcAppServicesFlotanteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlotanteService", function () {
      return FlotanteService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var FlotanteService = /*#__PURE__*/function () {
      function FlotanteService(httpClient) {
        _classCallCheck(this, FlotanteService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      }

      _createClass(FlotanteService, [{
        key: "getUserId",
        value: function getUserId(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        }
      }]);

      return FlotanteService;
    }();

    FlotanteService.ɵfac = function FlotanteService_Factory(t) {
      return new (t || FlotanteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FlotanteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FlotanteService,
      factory: FlotanteService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlotanteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/historico.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/historico.service.ts ***!
    \***********************************************/

  /*! exports provided: HistoricoService */

  /***/
  function srcAppServicesHistoricoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoricoService", function () {
      return HistoricoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var HistoricoService = /*#__PURE__*/function () {
      function HistoricoService(httpClient) {
        _classCallCheck(this, HistoricoService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      }

      _createClass(HistoricoService, [{
        key: "delete",
        value: function _delete(datosborrado) {
          console.log(datosborrado);
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_historico_borrado.php"), datosborrado);
        }
      }]);

      return HistoricoService;
    }();

    HistoricoService.ɵfac = function HistoricoService_Factory(t) {
      return new (t || HistoricoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HistoricoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HistoricoService,
      factory: HistoricoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoricoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/incidencias.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/incidencias.service.ts ***!
    \*************************************************/

  /*! exports provided: IncidenciasService */

  /***/
  function srcAppServicesIncidenciasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncidenciasService", function () {
      return IncidenciasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var IncidenciasService = /*#__PURE__*/function () {
      function IncidenciasService(httpClient) {
        _classCallCheck(this, IncidenciasService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      } //obtener persona por id


      _createClass(IncidenciasService, [{
        key: "getDetalleIncidencia",
        value: function getDetalleIncidencia(token_incidencia) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/incidencia_detalle.php?token_incidencia=").concat(token_incidencia));
        }
      }, {
        key: "guardarIncidencia",
        value: function guardarIncidencia(valor) {
          console.log(valor);
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/incidencia_update.php"), valor);
        }
      }, {
        key: "delete",
        value: function _delete(datosborrado) {
          console.log(datosborrado);
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_historico_borrado.php"), datosborrado);
        }
      }]);

      return IncidenciasService;
    }();

    IncidenciasService.ɵfac = function IncidenciasService_Factory(t) {
      return new (t || IncidenciasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    IncidenciasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IncidenciasService,
      factory: IncidenciasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidenciasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/periodicidad.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/periodicidad.service.ts ***!
    \**************************************************/

  /*! exports provided: PeriodicidadService */

  /***/
  function srcAppServicesPeriodicidadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeriodicidadService", function () {
      return PeriodicidadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var PeriodicidadService = /*#__PURE__*/function () {
      function PeriodicidadService(httpClient) {
        _classCallCheck(this, PeriodicidadService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      }

      _createClass(PeriodicidadService, [{
        key: "altaRegistrochecks",
        value: function altaRegistrochecks(datoregistro) {
          // console.log(JSON.stringify(datoregistro));
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/periodicidad_crear.php"), JSON.stringify(datoregistro));
        } //obtener persona por id

      }, {
        key: "getCheckeds",
        value: function getCheckeds(id_tarea) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/periodicidad_detalle.php?id_tarea=").concat(id_tarea));
        }
      }, {
        key: "getDatosMadre",
        value: function getDatosMadre(id_tarea) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/periodicidad_madre.php?id_tarea=").concat(id_tarea));
        } //   modiRegistro(datos){
        //     console.log(datos);
        //     return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_update.php`, datos);   
        //   }
        //   delete(datosborrado){
        //     console.log(datosborrado);
        //     return this.httpClient.post(`${this.PHP_API_SERVER}/ajax/registro_borrado.php`,datosborrado);
        //   }

      }, {
        key: "delete",
        value: function _delete(datosborrado) {
          console.log(datosborrado);
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/registro_diames_borrado.php"), datosborrado);
        }
      }]);

      return PeriodicidadService;
    }();

    PeriodicidadService.ɵfac = function PeriodicidadService_Factory(t) {
      return new (t || PeriodicidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PeriodicidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PeriodicidadService,
      factory: PeriodicidadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeriodicidadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/serviciocompartido.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/serviciocompartido.service.ts ***!
    \********************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppServicesServiciocompartidoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService(httpClient) {
        _classCallCheck(this, SharedService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(SharedService, [{
        key: "sendClickEvent",
        value: function sendClickEvent() {
          this.subject.next();
        }
      }, {
        key: "getClickEvent",
        value: function getClickEvent() {
          return this.subject.asObservable();
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/turnos.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/turnos.service.ts ***!
    \********************************************/

  /*! exports provided: TurnosService */

  /***/
  function srcAppServicesTurnosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnosService", function () {
      return TurnosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/constantes.model */
    "./src/app/models/constantes.model.ts");

    var TurnosService = /*#__PURE__*/function () {
      function TurnosService(httpClient) {
        _classCallCheck(this, TurnosService);

        this.httpClient = httpClient;
        this.PHP_API_SERVER = _models_constantes_model__WEBPACK_IMPORTED_MODULE_2__["Constantes"].API_SERVER; //URL del servicio
      }

      _createClass(TurnosService, [{
        key: "guardarTurnoGhost",
        value: function guardarTurnoGhost(datosturnos) {
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/turno_ghost_crear.php"), datosturnos);
        }
      }, {
        key: "guardarTurno",
        value: function guardarTurno(datosturnos) {
          return this.httpClient.post("".concat(this.PHP_API_SERVER, "/ajax/turno_crear.php"), datosturnos);
        } //obtener rol persona 

      }, {
        key: "getUserId",
        value: function getUserId(id_persona) {
          return this.httpClient.get("".concat(this.PHP_API_SERVER, "/ajax/personas_detalle.php?id_persona=").concat(id_persona));
        }
      }]);

      return TurnosService;
    }();

    TurnosService.ɵfac = function TurnosService_Factory(t) {
      return new (t || TurnosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TurnosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TurnosService,
      factory: TurnosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TurnosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/websocket.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/websocket.service.ts ***!
    \***********************************************/

  /*! exports provided: WebsocketService */

  /***/
  function srcAppServicesWebsocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
      return WebsocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/usuario */
    "./src/app/models/usuario.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WebsocketService = /*#__PURE__*/function () {
      function WebsocketService(socket, router) {
        _classCallCheck(this, WebsocketService);

        this.socket = socket;
        this.router = router;
        this.socketStatus = false;
        this.usuario = null;
        this.cargarStorage();
        this.checkStatus();
      }

      _createClass(WebsocketService, [{
        key: "checkStatus",
        value: function checkStatus() {
          var _this90 = this;

          this.socket.on('connect', function () {
            console.log('Conectado al servidor');
            _this90.socketStatus = true;

            _this90.cargarStorage();
          });
          this.socket.on('disconnect', function () {
            console.log('Desconectado del servidor');
            _this90.socketStatus = false;
          });
        }
      }, {
        key: "emit",
        value: function emit(evento, payload, callback) {
          console.log('Emitiendo', evento);
          this.socket.emit(evento, payload, callback);
        } //recibe un evento y devuelve un observable

      }, {
        key: "listen",
        value: function listen(evento) {
          return this.socket.fromEvent(evento);
        }
      }, {
        key: "loginWS",
        value: function loginWS(id_persona) {
          var _this91 = this;

          //retorno promesa para mantener sesion activa
          return new Promise(function (resolve, reject) {
            _this91.emit('configurar-usuario', {
              id_persona: id_persona
            }, function (resp) {
              _this91.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](id_persona);

              _this91.guardarStorage();

              resolve(); //resuelvo la promesa
            });
          });
        } // logoutWS(){
        //   this.usuario = null;
        //   localStorage.removeItem('usuario');
        //   const payload = {
        //     id_persona: ''
        //   }
        //   this.emit('configurar-usuario', payload, ()=> {} );
        //   this.router.navigateByUrl('');
        // }

      }, {
        key: "getUsuario",
        value: function getUsuario() {
          return this.usuario;
        } //almacenamos la sesion del usuario el localstorage

      }, {
        key: "guardarStorage",
        value: function guardarStorage() {
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
        } //leemos el localstorage

      }, {
        key: "cargarStorage",
        value: function cargarStorage() {
          if (localStorage.getItem('usuario')) {
            this.usuario = JSON.parse(localStorage.getItem('usuario'));
            this.loginWS(this.usuario.id_persona);
          }
        }
      }]);

      return WebsocketService;
    }();

    WebsocketService.ɵfac = function WebsocketService_Factory(t) {
      return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebsocketService,
      factory: WebsocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      wsUrl: 'http://joraco.site:5001'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\nombre.apellidos\Desktop\y\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map