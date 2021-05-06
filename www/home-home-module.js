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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" *ngIf=\"datos\">\r\n\r\n  <div id=\"group_info\">\r\n    <h1 id=\"group_name\">\r\n      {{ datos.group_name }}\r\n    </h1>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\r\n      <path fill=\"#ffffff\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n      <path fill=\"#f1f1f1\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n    </svg>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title id=\"card_title\">{{datos.group_code}}</ion-card-title>\r\n      <ion-icon name=\"information-circle\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n    </ion-card-header>\r\n    <hr>\r\n    <p id=\"group_description\">\r\n      {{ datos.group_description }}\r\n    </p>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card *ngFor=\"let dato of datos.Home\" (click)=\"navigate(dato.url, dato.data)\">\r\n    <img class=\"img-center\" src=\"../assets/images/{{ dato.image }}\" *ngIf=\"dato.image != ''\" />\r\n\r\n    <ion-card-header *ngIf=\"dato.image == ''\">\r\n      <ion-card-title id=\"card_title\">\r\n        {{ dato.title }}\r\n      </ion-card-title>\r\n      <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-circle\" size=\"large\" class=\"right-icon\" *ngIf=\"dato.url != ''\"></ion-icon>\r\n    </ion-card-header>\r\n\r\n    <div class=\"titulo_sobre_imagen\" *ngIf=\"dato.image != ''\">\r\n      <ion-card-title id=\"card_title\">\r\n        {{ dato.title }}\r\n      </ion-card-title>\r\n      <ion-icon name=\"{{dato.icon}}\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-circle\" size=\"large\" class=\"right-icon\" *ngIf=\"dato.url != ''\"></ion-icon>\r\n    </div>\r\n\r\n  </ion-card>\r\n  <ion-grid>\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n        <img src=\"../../assets/images/{{datos.school_icon}}\">\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row >\r\n          <img src=\"../../assets/images/{{datos.department_icon}}\">\r\n        </ion-row>\r\n        <ion-row>\r\n          <img src=\"../../assets/images/{{datos.university_icon}}\" style=\"padding-top:20px;\">\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-footer>\r\n    <p>© Victor M. Rodríguez, Ihar Myshkevich</p>\r\n  </ion-footer>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap\");\nion-content {\n  --ion-background-color: #f1f1f1;\n}\nion-item {\n  --ion-background-color: white;\n}\n.titulo_sobre_imagen {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.7);\n  bottom: 0%;\n  width: 100%;\n  height: 56px;\n  max-height: 112px;\n}\nion-row img {\n  width: 80%;\n  padding-left: 10%;\n}\n.titulo_sobre_imagen ion-card-title {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.left-icon {\n  position: absolute;\n  left: 20px;\n  top: 20%;\n  color: #ab0000;\n}\n.right-icon {\n  position: absolute;\n  right: 5%;\n  top: 12px;\n  color: #ab0000;\n}\n#card_title {\n  padding-left: 40px;\n}\n#group_info {\n  background-image: url('group_info_background.png');\n  background-repeat: \"no-repeat\";\n  background-size: \"cover\";\n  background-position: \"center\";\n  color: white;\n}\n#group_name {\n  text-align: center;\n  margin: 0%;\n  padding-top: 6%;\n  text-shadow: 2px 2px 2px #9e9e9e;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 240%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n#id_grupo {\n  font-size: 200%;\n  margin-bottom: 2%;\n}\nion-card {\n  background-color: white;\n  color: black;\n  margin-bottom: 3%;\n}\nion-card-title {\n  color: black;\n}\n#group_info svg {\n  display: block;\n}\n#group_description {\n  margin-top: 2%;\n  font-family: \"Noto Sans KR\", sans-serif;\n  padding-left: 5%;\n  padding-right: 5%;\n}\nion-card hr {\n  display: block;\n  height: 2px;\n  border: 0;\n  border-top: 1px solid #525151;\n  margin-top: 0%;\n  padding: 0;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\nion-card ion-list {\n  background-color: white;\n}\n.item-background-color {\n  --ion-item-background:white;\n}\n.img-center {\n  width: auto;\n  margin: auto;\n  display: block;\n}\nion-footer {\n  color: white;\n  background-color: black;\n  height: 30px;\n}\nion-footer p {\n  text-align: center;\n  padding-top: 5px;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ0EsaUZBQUE7QUFFUjtFQUNFLCtCQUFBO0FBQUY7QUFHQTtFQUNFLDZCQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxrREFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBSUE7RUFDRSxjQUFBO0FBREY7QUFJQTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlDO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQURGO0FBS0E7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSEY7QUFNQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBTEY7QUFRQTtFQUNFLHFCQUFBO0FBTEY7QUFRQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBTEY7QUFRQTtFQUNFLHVCQUFBO0FBTEY7QUFRQTtFQUNFLDJCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUxGO0FBUUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0dWxvX3NvYnJlX2ltYWdlbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTs7XHJcbiAgYm90dG9tOiAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NTZweDtcclxuICBtYXgtaGVpZ2h0OiAxMTJweDtcclxufVxyXG5cclxuaW9uLXJvdyBpbWd7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4udGl0dWxvX3NvYnJlX2ltYWdlbiBpb24tY2FyZC10aXRsZXtcclxuICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWljb257XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDoyMHB4O1xyXG4gIHRvcDoyMCU7XHJcbiAgY29sb3I6ICNhYjAwMDA7XHJcbn1cclxuXHJcbi5yaWdodC1pY29ue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjUlO1xyXG4gIHRvcDoxMnB4O1xyXG4gIGNvbG9yOiAjYWIwMDAwO1xyXG59XHJcblxyXG4jY2FyZF90aXRsZXtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbiNncm91cF9pbmZve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXBfaW5mb19iYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogXCJuby1yZXBlYXRcIjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IFwiY292ZXJcIjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBcImNlbnRlclwiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2dyb3VwX25hbWV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG4gIHRleHQtc2hhZG93OiAgMnB4IDJweCAycHggIzllOWU5ZTtcclxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOjI0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OjUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4jaWRfZ3J1cG97XHJcbiAgZm9udC1zaXplOiAyMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjpibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG4jZ3JvdXBfaW5mbyBzdmd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNncm91cF9kZXNjcmlwdGlvbntcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuIGlvbi1jYXJkIGhyIHsgXHJcbiAgZGlzcGxheTogYmxvY2s7IFxyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvcmRlcjogMDsgXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig4MiwgODEsIDgxKTtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBwYWRkaW5nOiAwOyBcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIgIHsgXHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxyXG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLml0ZW0tYmFja2dyb3VuZC1jb2xvcntcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcbi5pbWctY2VudGVye1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgcHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59Il19 */");

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







let HomePage = class HomePage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
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
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
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