(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"],{

/***/ "GHnz":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" *ngIf=\"data\">\r\n\r\n\r\n  <div id=\"group_info\">\r\n    <h1 id=\"group_name\">\r\n      Grupos de investigación\r\n    </h1>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\r\n      <path fill=\"#ffffff\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n      <path fill=\"#e0e0e0\" fill-opacity=\"1\"\r\n        d=\"M0,256L80,261.3C160,267,320,277,480,250.7C640,224,800,160,960,154.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\">\r\n      </path>\r\n    </svg>\r\n  </div>\r\n\r\n\r\n  <ion-card *ngFor=\"let grupo of data\" (click)=\"navigate('/home', grupo)\">\r\n\r\n    <ion-card-header>\r\n      <ion-card-title class=\"card_title\">{{grupo.group_name}}</ion-card-title>\r\n      <ion-icon name=\"information-circle\" size=\"large\" class=\"left-icon\"></ion-icon>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n  </ion-card>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n          <img src=\"{{url}}/images/logo-uhu.png\" style=\"padding-top:20px;\">\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-footer id=\"footer\">\r\n    <p>DivulgAPP © Victor M. Rodríguez, Ihar Myshkevich</p>\r\n  </ion-footer>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "TxYl":
/*!***************************************!*\
  !*** ./src/app/index/index.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap\");\nion-content {\n  --ion-background-color: #e0e0e0;\n}\nion-item {\n  --ion-background-color: white;\n}\n.titulo_sobre_imagen {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.7);\n  bottom: 0%;\n  width: 100%;\n  height: 56px;\n  max-height: 112px;\n}\nion-row img {\n  width: 80%;\n  padding-left: 10%;\n}\n.titulo_sobre_imagen ion-card-title {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.left-icon {\n  position: absolute;\n  left: 20px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n.right-icon {\n  position: absolute;\n  right: 10px;\n  top: calc(50% - 16px);\n  color: #ab0000;\n}\n.card_title {\n  padding-left: 40px;\n  color: black;\n  width: 90%;\n}\n.card_sub_title {\n  color: black;\n  width: 90%;\n}\n#group_info {\n  background-image: url('group_info_background.png');\n  background-repeat: \"no-repeat\";\n  background-size: \"cover\";\n  background-position: \"center\";\n  color: white;\n}\n#group_name {\n  text-align: center;\n  margin: 0%;\n  padding-top: 6%;\n  text-shadow: 2px 2px 2px #9e9e9e;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 240%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n#id_grupo {\n  font-size: 200%;\n  margin-bottom: 2%;\n}\nion-card {\n  background-color: white;\n  color: black;\n  margin-bottom: 3%;\n}\nion-card-title {\n  color: black;\n}\n#group_info svg {\n  display: block;\n}\n#group_description {\n  margin-top: 2%;\n  font-family: \"Noto Sans KR\", sans-serif;\n  padding-left: 5%;\n  padding-right: 5%;\n}\nion-card hr {\n  display: block;\n  height: 2px;\n  border: 0;\n  border-top: 1px solid #525151;\n  margin-top: 0%;\n  padding: 0;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\nion-card ion-list {\n  background-color: white;\n}\n.item-background-color {\n  --ion-item-background:white;\n}\n.img-center {\n  width: auto;\n  margin: auto;\n  display: block;\n}\nion-footer {\n  color: white;\n  background-color: black;\n  height: 4rem;\n}\nion-footer p {\n  text-align: center;\n  padding-top: calc( 2rem - 15px );\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\nion-card hr {\n  border: 0;\n  border-bottom: 1px solid #a5a5a5;\n}\n#video {\n  width: 90%;\n  margin-left: 5%;\n}\n.texto {\n  padding-left: 16px;\n  padding-right: 16px;\n  color: black;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.div-button {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUNBLGlGQUFBO0FBRVI7RUFDRSwrQkFBQTtBQUFGO0FBR0E7RUFDRSw2QkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBQUY7QUFHQTtFQUNFLGtEQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0FBQUY7QUFJQTtFQUNFLGNBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUM7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREY7QUFLQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFMRjtBQVFBO0VBQ0UscUJBQUE7QUFMRjtBQVFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFMRjtBQVFBO0VBQ0UsdUJBQUE7QUFMRjtBQVFBO0VBQ0UsMkJBQUE7QUFMRjtBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMRjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQVFBO0VBQ0UsU0FBQTtFQUNBLGdDQUFBO0FBTEY7QUFRQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBTEY7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtBQUxGIiwiZmlsZSI6ImluZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXR1bG9fc29icmVfaW1hZ2Vue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOztcclxuICBib3R0b206IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo1NnB4O1xyXG4gIG1heC1oZWlnaHQ6IDExMnB4O1xyXG59XHJcblxyXG5pb24tcm93IGltZ3tcclxuICB3aWR0aDo4MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi50aXR1bG9fc29icmVfaW1hZ2VuIGlvbi1jYXJkLXRpdGxle1xyXG4gIG1hcmdpbi10b3A6MTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmxlZnQtaWNvbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjIwcHg7XHJcbiAgdG9wOmNhbGMoNTAlIC0gMTZweCk7XHJcbiAgY29sb3I6ICNhYjAwMDA7XHJcbn1cclxuXHJcbi5yaWdodC1pY29ue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHJpZ2h0OjEwcHg7XHJcbiAgdG9wOmNhbGMoNTAlIC0gMTZweCk7XHJcbiAgY29sb3I6ICNhYjAwMDA7XHJcbn1cclxuXHJcbi5jYXJkX3RpdGxle1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBjb2xvcjpibGFjaztcclxuICB3aWR0aDo5MCU7XHJcbn1cclxuXHJcbi5jYXJkX3N1Yl90aXRsZXtcclxuICBjb2xvcjpibGFjaztcclxuICB3aWR0aDo5MCU7XHJcbn1cclxuXHJcbiNncm91cF9pbmZve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3JvdXBfaW5mb19iYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogXCJuby1yZXBlYXRcIjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IFwiY292ZXJcIjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBcImNlbnRlclwiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2dyb3VwX25hbWV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgcGFkZGluZy10b3A6IDYlO1xyXG4gIHRleHQtc2hhZG93OiAgMnB4IDJweCAycHggIzllOWU5ZTtcclxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOjI0MCU7XHJcbiAgcGFkZGluZy1sZWZ0OjUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4jaWRfZ3J1cG97XHJcbiAgZm9udC1zaXplOiAyMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjpibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG4jZ3JvdXBfaW5mbyBzdmd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNncm91cF9kZXNjcmlwdGlvbntcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuIGlvbi1jYXJkIGhyIHsgXHJcbiAgZGlzcGxheTogYmxvY2s7IFxyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvcmRlcjogMDsgXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig4MiwgODEsIDgxKTtcclxuICBtYXJnaW4tdG9wOiAwJTtcclxuICBwYWRkaW5nOiAwOyBcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIgIHsgXHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxyXG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLml0ZW0tYmFja2dyb3VuZC1jb2xvcntcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcbi5pbWctY2VudGVye1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbmlvbi1mb290ZXIgcHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IGNhbGMoIDJyZW0gLSAxNXB4ICk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuaW9uLWNhcmQgaHIgeyBcclxuICBib3JkZXI6IDA7IFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbn1cclxuXHJcbiN2aWRlb3tcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OjUlXHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDoxNnB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xyXG59XHJcblxyXG4uZGl2LWJ1dHRvbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "nR/L":
/*!***********************************************!*\
  !*** ./src/app/index/index-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IndexPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page */ "pCgC");




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_3__["IndexPage"]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ "pCgC":
/*!*************************************!*\
  !*** ./src/app/index/index.page.ts ***!
  \*************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.page.html */ "GHnz");
/* harmony import */ var _index_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.page.scss */ "TxYl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let IndexPage = class IndexPage {
    constructor(http, router, sanitizer) {
        this.http = http;
        this.router = router;
        this.sanitizer = sanitizer;
        this.data = [];
        this.url = "https://divulgapp.tk";
    }
    ngOnInit() {
        this.getDirectories().subscribe(res => {
            this.getData(res);
        });
        this.appstate$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const currentState = this.router.getCurrentNavigation();
            return currentState.extras.state;
        }));
    }
    getDirectories() {
        return this.http
            .get(this.url + "/index.json");
    }
    ionViewDidEnter() {
        if (document.getElementById('footer').getBoundingClientRect().y < window.innerHeight - 200) {
            setTimeout(() => { document.getElementById('footer').style.marginTop = "calc(" + (window.innerHeight - document.getElementById('footer').getBoundingClientRect().y) + "px - 3rem)"; }, 200);
        }
    }
    getData(directories) {
        //console.log(directories.data)
        for (let i in directories.data) {
            let directory = directories.data[i];
            //console.log(directory)
            this.http.get(this.url + "/" + directory + "/" + directory + ".json").subscribe((res) => {
                this.data.push(res);
                //console.log(this.data);
            });
        }
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
IndexPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }
];
IndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IndexPage);



/***/ }),

/***/ "rSti":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-routing.module */ "nR/L");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "pCgC");







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndexPageRoutingModule"]
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
    })
], IndexPageModule);



/***/ })

}]);
//# sourceMappingURL=index-index-module.js.map