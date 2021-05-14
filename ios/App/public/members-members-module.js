(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-members-module"],{

/***/ "FfJP":
/*!*******************************************!*\
  !*** ./src/app/members/members.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #e0e0e0;\n}\n\nion-item {\n  --ion-background-color: white;\n}\n\nion-avatar {\n  width: 5rem;\n  height: 5rem;\n}\n\n.contact-row {\n  text-align: center;\n}\n\n.button-text {\n  color: white;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFHQztFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6Im1lbWJlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5pb24tYXZhdGFyICB7IFxyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1yb3d7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcblxyXG4gLmJ1dHRvbi10ZXh0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiB9Il19 */");

/***/ }),

/***/ "HIYi":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/members.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Miembros</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"data\">\r\n\r\n\r\n  <ion-list inset=true>\r\n    \r\n      <ion-item *ngFor=\"let miembro of data\">\r\n        <ion-grid>\r\n          \r\n          <ion-row>\r\n            <ion-item>\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"{{url}}/{{folder}}/images/{{miembro.image}}\" *ngIf=\"miembro.image\"> \r\n                <img src=\"https://www.flaticon.com/svg/vstatic/svg/860/860784.svg?token=exp=1620992236~hmac=ca97d4049fc1ce538fd16420a5c579df\" *ngIf=\"!miembro.image\"> \r\n                \r\n              </ion-avatar>\r\n\r\n              <ion-label text-wrap>\r\n                <h2>{{ miembro.name }}</h2>\r\n                <h3>{{miembro.description}}</h3>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-row>\r\n          \r\n          <ion-row class=\"contact-row\">\r\n            <ion-col>\r\n              <ion-button  href=\"mailto:{{miembro.email}}\" *ngIf=\"miembro.email\">\r\n                <ion-icon name=\"mail\"></ion-icon>\r\n                <a class=\"button-text\">Enviar email</a>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button href=\"tel:{{miembro.phone_number}}\" *ngIf=\"miembro.phone_number\">\r\n                <ion-icon name=\"call\" ></ion-icon>\r\n                <a class=\"button-text\">Llamar</a>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        \r\n        </ion-grid>\r\n   \r\n      </ion-item>\r\n   \r\n  </ion-list>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Pg1h":
/*!***************************************************!*\
  !*** ./src/app/members/members-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageRoutingModule", function() { return MembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members.page */ "uLgA");




const routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_3__["MembersPage"]
    }
];
let MembersPageRoutingModule = class MembersPageRoutingModule {
};
MembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembersPageRoutingModule);



/***/ }),

/***/ "XKfY":
/*!*******************************************!*\
  !*** ./src/app/members/members.module.ts ***!
  \*******************************************/
/*! exports provided: MembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members-routing.module */ "Pg1h");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members.page */ "uLgA");







let MembersPageModule = class MembersPageModule {
};
MembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _members_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembersPageRoutingModule"]
        ],
        declarations: [_members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]]
    })
], MembersPageModule);



/***/ }),

/***/ "uLgA":
/*!*****************************************!*\
  !*** ./src/app/members/members.page.ts ***!
  \*****************************************/
/*! exports provided: MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_members_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./members.page.html */ "HIYi");
/* harmony import */ var _members_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members.page.scss */ "FfJP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");




// Receive Parameter

let MembersPage = class MembersPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.url = "https://divulgapp.tk";
        this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
        this.folder = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.folder;
    }
    ngOnInit() {
        //console.log(this.data);
    }
};
MembersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-members',
        template: _raw_loader_members_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_members_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MembersPage);



/***/ })

}]);
//# sourceMappingURL=members-members-module.js.map