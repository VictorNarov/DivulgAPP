(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "2QCM":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Proyectos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"data\">\r\n  <ion-card *ngFor=\"let dato of data\">\r\n    <div (click)=\"visibility(dato.title)\">\r\n      <img class=\"img-center\" src=\"{{url}}/{{folder}}/images/{{ dato.image }}\" *ngIf=\"dato.image != ''\" class=\"header-image\"/>\r\n      <ion-card-header>\r\n\r\n        <ion-card-title class=\"card-title\">\r\n          {{ dato.title }}\r\n        </ion-card-title>\r\n\r\n        <ion-icon id =\"{{ dato.title }}-icon\" name=\"chevron-forward-outline\" size=\"large\" class=\"right-icon\"></ion-icon>\r\n      </ion-card-header>\r\n\r\n    </div>\r\n\r\n      <div id=\"{{ dato.title }}\" style=\"visibility: hidden; position:absolute;\">\r\n\r\n        <hr>\r\n\r\n        <div *ngFor=\"let content of dato.content\">\r\n          <div *ngIf=\"content.type == 'text' \">\r\n            <p class=\"texto\" *ngFor=\"let paragraph of content.data\">\r\n              {{paragraph}}\r\n            </p>\r\n          </div>\r\n          <div *ngIf=\"content.type == 'video' \">\r\n            <iframe class=\"video\" [src]=\"transform(content.data)\" allowfullscreen></iframe>\r\n          </div>\r\n          <div *ngIf=\"content.type == 'button' \" class=\"div-button\">\r\n            <ion-button color=\"base-color\" href=\" {{content.data }} \">{{content.text}}</ion-button>\r\n          </div>\r\n          <div *ngIf=\"content.type == 'image' \">\r\n            <img class=\"image\" src=\"{{url}}/{{folder}}/images/{{content.data}}\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "A4EA":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageRoutingModule", function() { return ProjectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.page */ "fyPJ");




const routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"]
    }
];
let ProjectsPageRoutingModule = class ProjectsPageRoutingModule {
};
ProjectsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectsPageRoutingModule);



/***/ }),

/***/ "MF/m":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #e0e0e0;\n}\n\nion-item {\n  --ion-background-color: white;\n}\n\nion-card hr {\n  margin: 0;\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid #a5a5a5;\n  margin-bottom: 3%;\n}\n\nion-card {\n  margin-bottom: 3%;\n  background-color: white;\n  color: black;\n  margin-bottom: 3%;\n}\n\n.right-icon {\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n\n.video {\n  width: 94%;\n  margin-left: 3%;\n  margin-bottom: 3%;\n  height: 15rem;\n}\n\n.texto {\n  margin-top: 0%;\n  margin-bottom: 3%;\n  padding-left: 3%;\n  padding-right: 3%;\n  color: black;\n  text-align: justify;\n  text-justify: inter-word;\n}\n\n.div-button {\n  text-align: center;\n  margin-bottom: 3%;\n}\n\n.header-image {\n  display: block;\n  margin: auto;\n  max-height: 15rem;\n}\n\n.image {\n  width: 94%;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 5%;\n}\n\n.card-title {\n  color: black;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGhyIHsgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2NSwgMTY1LCAxNjUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LWljb257XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjEwcHg7XHJcbiAgICB0b3A6Y2FsYyg1MCUgLSAxNnB4KTtcclxuICAgIGNvbG9yOiAjYWIwMDAwO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVve1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDMlO1xyXG4gICAgaGVpZ2h0OjE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRleHRve1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjMlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG4gIH1cclxuXHJcbiAgLmRpdi1idXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdle1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICB3aWR0aDo4NSU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "Wm2z":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-routing.module */ "A4EA");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.page */ "fyPJ");







let ProjectsPageModule = class ProjectsPageModule {
};
ProjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageRoutingModule"]
        ],
        declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
    })
], ProjectsPageModule);



/***/ }),

/***/ "fyPJ":
/*!*******************************************!*\
  !*** ./src/app/projects/projects.page.ts ***!
  \*******************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projects.page.html */ "2QCM");
/* harmony import */ var _projects_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.page.scss */ "MF/m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




// Receive Parameter


let ProjectsPage = class ProjectsPage {
    constructor(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.url = "https://divulgapp.tk";
        this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
        this.folder = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.folder;
    }
    ngOnInit() {
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
};
ProjectsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
ProjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"])({ name: 'safe' })
], ProjectsPage);



/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map