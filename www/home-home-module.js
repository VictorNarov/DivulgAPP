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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" *ngIf=\"datos\" (window:resize)=\"onResize($event)\">\r\n\r\n  <div id=\"group_info\">\r\n    <h1 id=\"group_name\">\r\n      {{ datos.group_name }}\r\n    </h1>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\r\n      <path fill=\"#ffffff\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n      <path fill=\"#e0e0e0\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n    </svg>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title class=\"card_title\">{{datos.group_code}}</ion-card-title>\r\n      <ion-icon name=\"information-circle\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n    </ion-card-header>\r\n    <hr>\r\n    <p id=\"group_description\">\r\n      {{ datos.group_description }}\r\n    </p>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card *ngFor=\"let dato of datos.Home\" (click)=\"navigate(dato.url, dato.data)\">\r\n    <img class=\"img-center\" src=\"../assets/images/{{ dato.image }}\" *ngIf=\"dato.image != ''\" />\r\n\r\n    <ion-card-header *ngIf=\"dato.image == '' && dato.url != ''\">\r\n      <ion-card-title class=\"card_title\">\r\n        {{ dato.title }}\r\n      </ion-card-title>\r\n      <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-circle\" size=\"large\" class=\"right-icon\" *ngIf=\"dato.url != ''\"></ion-icon>\r\n    </ion-card-header>\r\n\r\n    <div class=\"titulo_sobre_imagen\" *ngIf=\"dato.image != '' && dato.url != ''\">\r\n      <ion-card-title class=\"card_title\">\r\n        {{ dato.title }}\r\n      </ion-card-title>\r\n      <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-circle\" size=\"large\" class=\"right-icon\" *ngIf=\"dato.url != ''\"></ion-icon>\r\n    </div>\r\n\r\n    <!-- LINEAS DE INVESTIGACION (DESPLEGABLE) -->\r\n    <div *ngIf=\"dato.url == ''\">\r\n      <div (click)=\"visibility(dato.title)\">\r\n        <img class=\"img-center\" src=\"../assets/images/{{ dato.image }}\" *ngIf=\"dato.image != ''\" />\r\n\r\n        <ion-card-header>\r\n\r\n          <ion-card-title class=\"card_title\">\r\n            {{ dato.title }}\r\n          </ion-card-title>\r\n\r\n          <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n          <ion-icon id=\"{{ dato.title }}-icon\" name=\"chevron-forward-outline\" size=\"large\" class=\"right-icon\">\r\n          </ion-icon>\r\n        </ion-card-header>\r\n      </div>\r\n      <div id=\"{{dato.title}}\" style=\"visibility: hidden; position:absolute;\">\r\n        <hr>\r\n        <!-- CONTENIDO LINEAS DE INVESTIGACION -->\r\n        <div (click)=\"visibility(linea.title)\" *ngFor=\"let linea of dato.data; last as isLast\">\r\n\r\n          <ion-card-header>\r\n\r\n            <ion-card-title class=\"card_sub_title\">\r\n              {{ linea.title }}\r\n            </ion-card-title>\r\n            <ion-icon id=\"{{ linea.title }}-icon\" name=\"chevron-forward-outline\" size=\"large\" class=\"right-icon\" ></ion-icon>\r\n          </ion-card-header>\r\n\r\n\r\n          <div id=\"{{ linea.title }}\" style=\"visibility: hidden; position:absolute;\">\r\n\r\n            <hr>\r\n            <div *ngFor=\"let content of linea.content\">\r\n              <div *ngIf=\"content.type == 'text' \">\r\n                <p class=\"texto\" *ngFor=\"let paragraph of content.data\">\r\n                  {{paragraph}}\r\n                </p>\r\n              </div>\r\n              <div *ngIf=\"content.type == 'video' \">\r\n                <iframe id=\"video\" [src]=\"transform(content.data)\"></iframe>\r\n              </div>\r\n              <div *ngIf=\"content.type == 'button' \" id=\"div-button\">\r\n                <ion-button href=\" {{content.data }} \">{{content.text}}</ion-button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <hr *ngIf=\"!isLast\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n        <img src=\"../../assets/images/{{datos.school_icon}}\">\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row>\r\n          <img src=\"../../assets/images/{{datos.department_icon}}\">\r\n        </ion-row>\r\n        <ion-row>\r\n          <img src=\"../../assets/images/{{datos.university_icon}}\" style=\"padding-top:20px;\">\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-footer>\r\n    <p>DivulgAPP © Victor M. Rodríguez, Ihar Myshkevich</p>\r\n  </ion-footer>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap\");\nion-content {\n  --ion-background-color: #e0e0e0;\n}\nion-item {\n  --ion-background-color: white;\n}\n.titulo_sobre_imagen {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.7);\n  bottom: 0%;\n  width: 100%;\n  height: 56px;\n  max-height: 112px;\n}\nion-row img {\n  width: 80%;\n  padding-left: 10%;\n}\n.titulo_sobre_imagen ion-card-title {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.left-icon {\n  position: absolute;\n  left: 20px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n.right-icon {\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n.card_title {\n  padding-left: 40px;\n  color: black;\n  width: 90%;\n}\n.card_sub_title {\n  color: black;\n  width: 90%;\n}\n#group_info {\n  background-image: url('group_info_background.png');\n  background-repeat: \"no-repeat\";\n  background-size: \"cover\";\n  background-position: \"center\";\n  color: white;\n}\n#group_name {\n  text-align: center;\n  margin: 0%;\n  padding-top: 6%;\n  text-shadow: 2px 2px 2px #9e9e9e;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 240%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n#id_grupo {\n  font-size: 200%;\n  margin-bottom: 2%;\n}\nion-card {\n  background-color: white;\n  color: black;\n  margin-bottom: 3%;\n}\nion-card-title {\n  color: black;\n}\n#group_info svg {\n  display: block;\n}\n#group_description {\n  margin-top: 2%;\n  font-family: \"Noto Sans KR\", sans-serif;\n  padding-left: 5%;\n  padding-right: 5%;\n}\nion-card hr {\n  display: block;\n  height: 2px;\n  border: 0;\n  border-top: 1px solid #525151;\n  margin-top: 0%;\n  padding: 0;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\nion-card ion-list {\n  background-color: white;\n}\n.item-background-color {\n  --ion-item-background:white;\n}\n.img-center {\n  width: auto;\n  margin: auto;\n  display: block;\n}\nion-footer {\n  color: white;\n  background-color: black;\n  height: 4rem;\n}\nion-footer p {\n  text-align: center;\n  padding-top: calc( 2rem - 15px );\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\nion-card hr {\n  border: 0;\n  border-bottom: 1px solid #a5a5a5;\n}\n#video {\n  width: 90%;\n  margin-left: 5%;\n}\n.texto {\n  padding-left: 16px;\n  padding-right: 16px;\n  color: black;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.div-button {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ0EsaUZBQUE7QUFFUjtFQUNFLCtCQUFBO0FBQUY7QUFHQTtFQUNFLDZCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0Usa0RBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFERjtBQUtBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUxGO0FBUUE7RUFDRSxxQkFBQTtBQUxGO0FBUUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtBQUxGO0FBUUE7RUFDRSwyQkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFMRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxGO0FBUUE7RUFDRSxTQUFBO0VBQ0EsZ0NBQUE7QUFMRjtBQVFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFMRjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0FBTEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0dWxvX3NvYnJlX2ltYWdlbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTs7XHJcbiAgYm90dG9tOiAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NTZweDtcclxuICBtYXgtaGVpZ2h0OiAxMTJweDtcclxufVxyXG5cclxuaW9uLXJvdyBpbWd7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4udGl0dWxvX3NvYnJlX2ltYWdlbiBpb24tY2FyZC10aXRsZXtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWljb257XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDoyMHB4O1xyXG4gIHRvcDpjYWxjKDUwJSAtIDE2cHgpO1xyXG4gIGNvbG9yOiAjYWIwMDAwO1xyXG59XHJcblxyXG4ucmlnaHQtaWNvbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICByaWdodDoxMHB4O1xyXG4gIHRvcDpjYWxjKDUwJSAtIDE2cHgpO1xyXG4gIGNvbG9yOiAjYWIwMDAwO1xyXG59XHJcblxyXG4uY2FyZF90aXRsZXtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG4uY2FyZF9zdWJfdGl0bGV7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG4jZ3JvdXBfaW5mb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2dyb3VwX2luZm9fYmFja2dyb3VuZC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IFwibm8tcmVwZWF0XCI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBcImNvdmVyXCI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogXCJjZW50ZXJcIjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNncm91cF9uYW1le1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAlO1xyXG4gIHBhZGRpbmctdG9wOiA2JTtcclxuICB0ZXh0LXNoYWRvdzogIDJweCAycHggMnB4ICM5ZTllOWU7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZToyNDAlO1xyXG4gIHBhZGRpbmctbGVmdDo1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuI2lkX2dydXBve1xyXG4gIGZvbnQtc2l6ZTogMjAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5cclxuI2dyb3VwX2luZm8gc3Zne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jZ3JvdXBfZGVzY3JpcHRpb257XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbiBpb24tY2FyZCBociB7IFxyXG4gIGRpc3BsYXk6IGJsb2NrOyBcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3JkZXI6IDA7IFxyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoODIsIDgxLCA4MSk7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgcGFkZGluZzogMDsgXHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5pb24tYXZhdGFyICB7IFxyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxyXG4gIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxyXG4gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcclxuICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplIFxyXG59XHJcblxyXG5pb24tY2FyZCBpb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGVtLWJhY2tncm91bmQtY29sb3J7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOndoaXRlO1xyXG59XHJcblxyXG4uaW1nLWNlbnRlcntcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1mb290ZXJ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKCAycmVtIC0gMTVweCApO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGhyIHsgXHJcbiAgYm9yZGVyOiAwOyBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2NSwgMTY1LCAxNjUpO1xyXG59XHJcblxyXG4jdmlkZW97XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDo1JVxyXG59XHJcblxyXG4udGV4dG97XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTZweDtcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxufVxyXG5cclxuLmRpdi1idXR0b257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

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
    }
    ngOnInit() {
        this.getData().subscribe(res => {
            this.datos = res;
        });
        this.appstate$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const currentState = this.router.getCurrentNavigation();
            return currentState.extras.state;
        }));
    }
    getData() {
        return this.http
            .get("assets/group_info_(json)/info.json");
    }
    navigate(page, dataP) {
        let navigationExtras = {
            queryParams: {
                data: dataP
            }
        };
        this.router.navigate([page], {
            state: { goToMembers: navigationExtras }
        });
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
        console.log("Hola");
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