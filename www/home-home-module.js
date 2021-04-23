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
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label text-wrap>\r\n      Sistemas de Visión, Predicción, Optimización y Control\r\n    </ion-label>\r\n  </ion-item>\r\n  \r\n  <ion-card>\r\n    <ion-card-header>\r\n\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      <img src=\"https://media.discordapp.net/attachments/372850093587431425/834753974854615040/Computer-vision-Extracting-business-value-from-images.png?width=810&height=450\" />\r\n      Keep close to Nature's heart... and break clear away, once in awhile,\r\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card href=\"/projects\">\r\n    \r\n    <ion-card-header>\r\n      <ion-card-title>Nuestros proyectos</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n\r\n      Keep close to Nature's heart... and break clear away, once in awhile,\r\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n      <ion-item>\r\n        <ion-button href =\"/projects\" fill=\"outline\" slot=\"end\">Ver</ion-button>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card href=\"/contact\">\r\n    <ion-item>\r\n      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n      <ion-label>Contacto</ion-label>\r\n      \r\n    </ion-item>\r\n  \r\n  </ion-card>\r\n\r\n  \r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        Texto1\r\n      </ion-col>\r\n      <ion-col>\r\n        Texto2\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        Texto3\r\n      </ion-col>\r\n      <ion-col>\r\n        Texto4\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  background-color: var(--ion-color-mycolor);\n}\n\nion-content {\n  --ion-background-color:#dbdbdb;\n}\n\nion-card {\n  --ion-background-color:#ffffff;\n}\n\n.btn {\n  background-color: var(--ion-color-mycolor-shade);\n  color: var(--ion-color-mycolor-contrast);\n  padding: 20px 30px 20px 30px;\n  border-radius: 10px;\n  font-size: 20px;\n}\n\n#container {\n  text-align: center;\n  margin: auto;\n  margin-top: 50%;\n  transform: translateY(50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUFDSjs7QUFFQTtFQUVJLDhCQUFBO0FBQUo7O0FBSUE7RUFFSSw4QkFBQTtBQUZKOztBQUlBO0VBQ0ksZ0RBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFESiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15Y29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGI7XHJcbn1cclxuXHJcblxyXG5pb24tY2FyZHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn1cclxuLmJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teWNvbG9yLXNoYWRlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXljb2xvci1jb250cmFzdCk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG59Il19 */");

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




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
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