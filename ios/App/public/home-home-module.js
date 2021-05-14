(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar position=\"top\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" defaultHref=\"index\"></ion-back-button>\r\n    </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" *ngIf=\"datos\" (window:resize)=\"onResize($event)\">\r\n\r\n  <div id=\"group_info\">\r\n    <h1 id=\"group_name\">\r\n      {{ datos.group_name }}\r\n    </h1>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\r\n      <path fill=\"#ffffff\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n      <path fill=\"#e0e0e0\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n    </svg>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title class=\"card_title\">{{datos.group_code}}</ion-card-title>\r\n      <ion-icon name=\"information-circle\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n    </ion-card-header>\r\n    <hr>\r\n    <p id=\"group_description\">\r\n      {{ datos.group_description }}\r\n    </p>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card *ngFor=\"let dato of datos.Home\" (click)=\"navigate(dato.url, dato.data)\">\r\n    <img class=\"img-center\" src=\"{{url}}/{{datos.folder}}/images/{{ dato.image }}\" *ngIf=\"dato.image != ''\" />\r\n\r\n    <ion-card-header *ngIf=\"dato.image == '' && dato.url != ''\">\r\n      <ion-card-title class=\"card_title\">\r\n        {{ dato.title }}\r\n      </ion-card-title>\r\n      <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-circle\" size=\"large\" class=\"right-icon\" *ngIf=\"dato.url != ''\"></ion-icon>\r\n    </ion-card-header>\r\n\r\n    <div class=\"titulo_sobre_imagen\" *ngIf=\"dato.image != '' && dato.url != ''\">\r\n      <ion-card-title class=\"card_title\">\r\n        {{ dato.title }}\r\n      </ion-card-title>\r\n      <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-circle\" size=\"large\" class=\"right-icon\" *ngIf=\"dato.url != ''\"></ion-icon>\r\n    </div>\r\n\r\n    <!-- LINEAS DE INVESTIGACION (DESPLEGABLE) -->\r\n    <div *ngIf=\"dato.url == ''\">\r\n      <div (click)=\"visibility(dato.title)\">\r\n        <img class=\"img-center\" src=\"{{url}}/{{datos.folder}}/images/{{ dato.image }}\" *ngIf=\"dato.image != ''\" />\r\n\r\n        <ion-card-header>\r\n\r\n          <ion-card-title class=\"card_title\">\r\n            {{ dato.title }}\r\n          </ion-card-title>\r\n\r\n          <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n          <ion-icon id=\"{{ dato.title }}-icon\" name=\"chevron-forward-outline\" size=\"large\" class=\"right-icon\">\r\n          </ion-icon>\r\n        </ion-card-header>\r\n      </div>\r\n      <div id=\"{{dato.title}}\" style=\"visibility: hidden; position:absolute;\">\r\n        <hr>\r\n        <!-- CONTENIDO LINEAS DE INVESTIGACION -->\r\n        <div (click)=\"visibility(linea.title)\" *ngFor=\"let linea of dato.data; last as isLast\">\r\n\r\n          <ion-card-header>\r\n\r\n            <ion-card-title class=\"card_sub_title\">\r\n              {{ linea.title }}\r\n            </ion-card-title>\r\n            <ion-icon id=\"{{ linea.title }}-icon\" name=\"chevron-forward-outline\" size=\"large\" class=\"right-icon\" ></ion-icon>\r\n          </ion-card-header>\r\n\r\n\r\n          <div id=\"{{ linea.title }}\" style=\"visibility: hidden; position:absolute;\">\r\n\r\n            <hr>\r\n            <div *ngFor=\"let content of linea.content\">\r\n              <div *ngIf=\"content.type == 'text' \">\r\n                <p class=\"texto\" *ngFor=\"let paragraph of content.data\">\r\n                  {{paragraph}}\r\n                </p>\r\n              </div>\r\n              <div *ngIf=\"content.type == 'video' \">\r\n                <iframe id=\"video\" [src]=\"transform(content.data)\"></iframe>\r\n              </div>\r\n              <div *ngIf=\"content.type == 'button' \" id=\"div-button\">\r\n                <ion-button href=\" {{content.data }} \">{{content.text}}</ion-button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <hr *ngIf=\"!isLast\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n        <img src=\"{{url}}/{{datos.folder}}/images/{{datos.school_icon}}\" *ngIf=\"datos.school_icon != ''\">\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row>\r\n          <img src=\"{{url}}/{{datos.folder}}/images/{{datos.department_icon}}\" *ngIf=\"datos.department_icon != ''\">\r\n        </ion-row>\r\n        <ion-row>\r\n          <img src=\"{{url}}/images/logo-uhu.png\" style=\"padding-top:20px;\">\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-footer>\r\n    <p>DivulgAPP © Victor M. Rodríguez, Ihar Myshkevich</p>\r\n  </ion-footer>\r\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap\");\nion-content {\n  --ion-background-color: #e0e0e0;\n}\nion-item {\n  --ion-background-color: white;\n}\n.titulo_sobre_imagen {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.7);\n  bottom: 0%;\n  width: 100%;\n  height: 56px;\n  max-height: 112px;\n}\nion-row img {\n  width: 80%;\n  padding-left: 10%;\n}\n.titulo_sobre_imagen ion-card-title {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.left-icon {\n  position: absolute;\n  left: 20px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n.right-icon {\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n.card_title {\n  padding-left: 40px;\n  color: black;\n  width: 90%;\n}\n.card_sub_title {\n  color: black;\n  width: 90%;\n}\n#group_info {\n  background-image: url('group_info_background.png');\n  background-repeat: \"no-repeat\";\n  background-size: \"cover\";\n  background-position: \"center\";\n  color: white;\n}\n#group_name {\n  text-align: center;\n  margin: 0%;\n  padding-top: 6%;\n  text-shadow: 2px 2px 2px #9e9e9e;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 240%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n#id_grupo {\n  font-size: 200%;\n  margin-bottom: 2%;\n}\nion-card {\n  background-color: white;\n  color: black;\n  margin-bottom: 3%;\n}\nion-card-title {\n  color: black;\n}\n#group_info svg {\n  display: block;\n}\n#group_description {\n  margin-top: 2%;\n  font-family: \"Noto Sans KR\", sans-serif;\n  padding-left: 5%;\n  padding-right: 5%;\n}\nion-card hr {\n  display: block;\n  height: 2px;\n  border: 0;\n  border-top: 1px solid #525151;\n  margin-top: 0%;\n  padding: 0;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\nion-card ion-list {\n  background-color: white;\n}\n.item-background-color {\n  --ion-item-background:white;\n}\n.img-center {\n  width: auto;\n  margin: auto;\n  display: block;\n}\nion-footer {\n  color: white;\n  background-color: black;\n  height: 4rem;\n}\nion-footer p {\n  text-align: center;\n  padding-top: calc( 2rem - 15px );\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\nion-card hr {\n  border: 0;\n  border-bottom: 1px solid #a5a5a5;\n}\n#video {\n  width: 90%;\n  margin-left: 5%;\n}\n.texto {\n  padding-left: 16px;\n  padding-right: 16px;\n  color: black;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.div-button {\n  text-align: center;\n}\nion-toolbar {\n  width: 50px;\n  position: fixed;\n  border-radius: 0px 0px 25px 0px;\n}\nion-toolbar ion-buttons {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ0EsaUZBQUE7QUFFUjtFQUNFLCtCQUFBO0FBQUY7QUFHQTtFQUNFLDZCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0Usa0RBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFERjtBQUtBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUxGO0FBUUE7RUFDRSxxQkFBQTtBQUxGO0FBUUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtBQUxGO0FBUUE7RUFDRSwyQkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFMRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxGO0FBUUE7RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7QUFMRjtBQVFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFMRjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFMRjtBQVFBO0VBQ0UsY0FBQTtBQUxGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1ImZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdHVsb19zb2JyZV9pbWFnZW57XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7O1xyXG4gIGJvdHRvbTogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjU2cHg7XHJcbiAgbWF4LWhlaWdodDogMTEycHg7XHJcbn1cclxuXHJcbmlvbi1yb3cgaW1ne1xyXG4gIHdpZHRoOjgwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLnRpdHVsb19zb2JyZV9pbWFnZW4gaW9uLWNhcmQtdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubGVmdC1pY29ue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MjBweDtcclxuICB0b3A6Y2FsYyg1MCUgLSAxNnB4KTtcclxuICBjb2xvcjogI2FiMDAwMDtcclxufVxyXG5cclxuLnJpZ2h0LWljb257XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcmlnaHQ6MTBweDtcclxuICB0b3A6Y2FsYyg1MCUgLSAxNnB4KTtcclxuICBjb2xvcjogI2FiMDAwMDtcclxufVxyXG5cclxuLmNhcmRfdGl0bGV7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHdpZHRoOjkwJTtcclxufVxyXG5cclxuLmNhcmRfc3ViX3RpdGxle1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHdpZHRoOjkwJTtcclxufVxyXG5cclxuI2dyb3VwX2luZm97XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ncm91cF9pbmZvX2JhY2tncm91bmQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBcIm5vLXJlcGVhdFwiO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogXCJjb3ZlclwiO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IFwiY2VudGVyXCI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jZ3JvdXBfbmFtZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgdGV4dC1zaGFkb3c6ICAycHggMnB4IDJweCAjOWU5ZTllO1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6MjQwJTtcclxuICBwYWRkaW5nLWxlZnQ6NSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbiNpZF9ncnVwb3tcclxuICBmb250LXNpemU6IDIwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZXtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcbiNncm91cF9pbmZvIHN2Z3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2dyb3VwX2Rlc2NyaXB0aW9ue1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4gaW9uLWNhcmQgaHIgeyBcclxuICBkaXNwbGF5OiBibG9jazsgXHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm9yZGVyOiAwOyBcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDgyLCA4MSwgODEpO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIHBhZGRpbmc6IDA7IFxyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWF2YXRhciAgeyBcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7ICBcclxuICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7ICBcclxuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXHJcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZSBcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp3aGl0ZTtcclxufVxyXG5cclxuLmltZy1jZW50ZXJ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogNHJlbTtcclxufVxyXG5cclxuaW9uLWZvb3RlciBwe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogY2FsYyggMnJlbSAtIDE1cHggKTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5pb24tY2FyZCBociB7IFxyXG4gIGJvcmRlcjogMDsgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjUsIDE2NSwgMTY1KTtcclxufVxyXG5cclxuI3ZpZGVve1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6NSVcclxufVxyXG5cclxuLnRleHRve1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE2cHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbn1cclxuXHJcbi5kaXYtYnV0dG9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgd2lkdGg6NTBweDtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI1cHggMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciBpb24tYnV0dG9uc3tcclxuICBtYXJnaW4tbGVmdDogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let HomePage = class HomePage {
    constructor(http, router, sanitizer) {
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
        this.url = "https://divulgapp.tk";
        this.datos = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
    }
    ngOnInit() {
        // this.getData().subscribe(res=>{
        //   this.datos = res;
        // }
        //)
        this.appstate$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const currentState = this.router.getCurrentNavigation();
            return currentState.extras.state;
        }));
    }
    // getData(){
    //   return this.http
    //   .get("assets/group_info_(json)/info.json")
    // }
    navigate(page, dataP) {
        if (page != "") {
            let navigationExtras = {
                queryParams: {
                    data: dataP,
                    folder: this.datos.folder
                }
            };
            this.router.navigate([page], {
                state: { goToMembers: navigationExtras }
            });
        }
    }
    visibility(id) {
        if (document.getElementById(id).style.visibility == "hidden") {
            document.getElementById(id).style.visibility = "visible";
            document.getElementById(id).style.position = "static";
            document.getElementById(id + "-icon").setAttribute("name", "chevron-down-outline");
        }
        else {
            document.getElementById(id).style.visibility = "hidden";
            document.getElementById(id).style.position = "absolute";
            document.getElementById(id + "-icon").setAttribute("name", "chevron-forward-outline");
        }
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    onResize(event) {
        //console.log("Hola")
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map