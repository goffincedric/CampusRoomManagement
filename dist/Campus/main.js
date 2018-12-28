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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNjaG9vbFxcU2Nob29sIDIwMTgtMjAxOVxcVXNlciBJbnRlcmZhY2VzXFxDYW1wdXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _list_floor_list_floor_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/floor-list/floor-list.component */ "./src/app/list/floor-list/floor-list.component.ts");
/* harmony import */ var _floor_plan_floor_map_floor_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./floor plan/floor-map/floor-map.component */ "./src/app/floor plan/floor-map/floor-map.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room-detail/room-detail.component */ "./src/app/room-detail/room-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _campus_header_campus_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./campus-header/campus-header.component */ "./src/app/campus-header/campus-header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _list_room_list_item_room_list_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list/room-list-item/room-list-item.component */ "./src/app/list/room-list-item/room-list-item.component.ts");
/* harmony import */ var _floor_plan_room_map_item_room_map_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./floor plan/room-map-item/room-map-item.component */ "./src/app/floor plan/room-map-item/room-map-item.component.ts");

















var appRoutes = [
    { path: 'list', redirectTo: 'list/campus/groenplaats/floor/0', pathMatch: 'full' },
    { path: 'list/campus', redirectTo: 'list/campus/groenplaats/floor/0', pathMatch: 'full' },
    { path: 'list/campus/:slug', redirectTo: 'list/campus/:slug/floor/0', pathMatch: 'full' },
    { path: 'list/campus/:slug/floor', redirectTo: 'list/campus/:slug/floor/0', pathMatch: 'full' },
    { path: 'list/campus/:slug/floor/:floorNumber', component: _list_floor_list_floor_list_component__WEBPACK_IMPORTED_MODULE_8__["FloorListComponent"] },
    { path: 'map', redirectTo: 'map/campus/groenplaats/floor/0', pathMatch: 'full' },
    { path: 'map/campus', redirectTo: 'map/campus/groenplaats/floor/0', pathMatch: 'full' },
    { path: 'map/campus/:slug', redirectTo: 'map/campus/:slug/floor/0', pathMatch: 'full' },
    { path: 'map/campus/:slug/floor', redirectTo: 'map/campus/:slug/floor/0', pathMatch: 'full' },
    { path: 'map/campus/:slug/floor/:floorNumber', component: _floor_plan_floor_map_floor_map_component__WEBPACK_IMPORTED_MODULE_9__["FloorMapComponent"] },
    { path: 'room/detail/:id', component: _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoomDetailComponent"] },
    { path: '', redirectTo: '/list/campus/groenplaats/floor/0', pathMatch: 'full' },
    { path: '**', component: _list_floor_list_floor_list_component__WEBPACK_IMPORTED_MODULE_8__["FloorListComponent"] } // Veranderen naar error component
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_floor_list_floor_list_component__WEBPACK_IMPORTED_MODULE_8__["FloorListComponent"],
                _floor_plan_floor_map_floor_map_component__WEBPACK_IMPORTED_MODULE_9__["FloorMapComponent"],
                _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoomDetailComponent"],
                _campus_header_campus_header_component__WEBPACK_IMPORTED_MODULE_13__["CampusHeaderComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _list_room_list_item_room_list_item_component__WEBPACK_IMPORTED_MODULE_15__["RoomListItemComponent"],
                _floor_plan_room_map_item_room_map_item_component__WEBPACK_IMPORTED_MODULE_16__["RoomMapItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"].enablePersistence(),
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/campus-header/campus-header.component.html":
/*!************************************************************!*\
  !*** ./src/app/campus-header/campus-header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='brand-container'>\n  <a [routerLink]=\"['/list/campus/' + this.currentCampus.slugUrl + '/floor/0']\">\n    <span class='brand-initials'>{{currentCampus.name}}</span>\n    <span class='brand-name'>Examenproject UI3 2018</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/campus-header/campus-header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/campus-header/campus-header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-container {\n  font-family: \"Raleway\", \"Open Sans\", sans-serif;\n  padding: 10px; }\n  .brand-container a {\n    text-decoration: none;\n    color: white;\n    display: inline-block;\n    transition-property: all;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in; }\n  .brand-container a:hover {\n    color: #8cc63f; }\n  .brand-container .brand-initials {\n    font-size: 3.0625em;\n    font-weight: 700;\n    font-style: normal;\n    display: block; }\n  .brand-container .brand-name {\n    font-size: 0.8125em;\n    text-indent: 3px;\n    display: block; }\n  @media (min-width: 768px) {\n  .brand-container {\n    padding: 10px 10px 25px 10px;\n    display: inline-block; }\n    .brand-container a {\n      display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcHVzLWhlYWRlci9EOlxcU2Nob29sXFxTY2hvb2wgMjAxOC0yMDE5XFxVc2VyIEludGVyZmFjZXNcXENhbXB1cy9zcmNcXGFwcFxcY2FtcHVzLWhlYWRlclxcY2FtcHVzLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUErQztFQUUvQyxjQUFhLEVBb0NkO0VBdkNEO0lBTUksc0JBQXFCO0lBQ3JCLGFBQVk7SUFDWixzQkFBcUI7SUFJckIseUJBQXdCO0lBSXhCLDBCQUF5QjtJQUl6QixvQ0FBbUMsRUFDcEM7RUFyQkg7SUF3QkksZUFBYyxFQUNmO0VBekJIO0lBNEJJLG9CQUFtQjtJQUNuQixpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBQ2xCLGVBQWMsRUFDZjtFQWhDSDtJQW1DSSxvQkFBbUI7SUFDbkIsaUJBQWdCO0lBQ2hCLGVBQWMsRUFDZjtFQUdIO0VBQ0U7SUFDRSw2QkFBNEI7SUFDNUIsc0JBQXFCLEVBS3RCO0lBUEQ7TUFLSSxlQUFjLEVBQ2YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbXB1cy1oZWFkZXIvY2FtcHVzLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjOGNjNjNmO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLWluaXRpYWxzIHtcclxuICAgIGZvbnQtc2l6ZTogMy4wNjI1ZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuODEyNWVtO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJyYW5kLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMjVweCAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/campus-header/campus-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/campus-header/campus-header.component.ts ***!
  \**********************************************************/
/*! exports provided: CampusHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusHeaderComponent", function() { return CampusHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Campus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Campus */ "./src/utils/Campus.ts");



var CampusHeaderComponent = /** @class */ (function () {
    function CampusHeaderComponent() {
        this.currentCampus = new _utils_Campus__WEBPACK_IMPORTED_MODULE_2__["Campus"]('', 'Campus', '');
    }
    CampusHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _utils_Campus__WEBPACK_IMPORTED_MODULE_2__["Campus"])
    ], CampusHeaderComponent.prototype, "currentCampus", void 0);
    CampusHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-campus-header',
            template: __webpack_require__(/*! ./campus-header.component.html */ "./src/app/campus-header/campus-header.component.html"),
            styles: [__webpack_require__(/*! ./campus-header.component.scss */ "./src/app/campus-header/campus-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CampusHeaderComponent);
    return CampusHeaderComponent;
}());



/***/ }),

/***/ "./src/app/floor plan/floor-map/floor-map.component.html":
/*!***************************************************************!*\
  !*** ./src/app/floor plan/floor-map/floor-map.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-campus-header\n    [currentCampus]=\"currentCampus\"\n  ></app-campus-header>\n</header>\n<section class=\"content\">\n  <app-menu\n    [campuses]=\"campuses\"\n    [currentCampus]=\"currentCampus\"\n    [currentFloors]=\"floors\"\n    [currentFloorNumbers]=\"floorNumbers\"\n    [currentFloorNumber]=\"currentFloor.floorNumber\"\n    (changePersonnel)=\"changePersonnel($event)\"\n    (showRoomName)=\"changeRoomName($event)\"\n    (showRoomStatus)=\"changeRoomStatus($event)\"\n    (showRoomType)=\"changeRoomType($event)\"\n    (showRoomCapacity)=\"changeRoomCapacity($event)\"\n    (showRoomBeamer)=\"changeRoomBeamer($event)\"\n  ></app-menu>\n  <!--<div class='social-container'>-->\n  <!--<span>-->\n  <!--<a class='social-roll github' href='#'></a>-->\n  <!--</span>-->\n  <!--<span>-->\n  <!--<a class='social-roll twitter' href='#'></a>-->\n  <!--</span>-->\n  <!--<span>-->\n  <!--<a class='social-roll linkedin' href='#'></a>-->\n  <!--</span>-->\n  <!--<span>-->\n  <!--<a class='social-roll rss' href='#'></a>-->\n  <!--</span>-->\n  <!--</div>-->\n  <section class=\"room-grid\" [style.grid-template-columns]=\"colStyle\">\n    <app-room-map-item\n      *ngFor=\"let room of currentRooms\"\n      [style.grid-column-start]=\"room.x\"\n      [style.grid-column-end]=\"'span ' + room.width\"\n      [style.grid-row-start]=\"room.y\"\n      [style.grid-row-end]=\"'span ' + room.height\"\n      [room]=\"room\"\n      [isPersonnel]=\"isPersonnel\"\n      [showsRoomName]=\"showsRoomName\"\n      [showsRoomStatus]=\"showsRoomStatus\"\n      [showsRoomType]=\"showsRoomType\"\n      [showsRoomCapacity]=\"showsRoomCapacity\"\n      [showsRoomBeamer]=\"showsRoomBeamer\"\n      [showsDetails]=\"showsDetails\"\n      (hideOtherRoomClicks)=\"hideOtherRoomClicks()\"\n    ></app-room-map-item>\n    <!--<app-room-list-item-->\n    <!--*ngFor=\"let room of currentRooms\"-->\n    <!--[room]=\"room\"-->\n    <!--[isPersonnel]=\"isPersonnel\"-->\n    <!--&gt;</app-room-list-item>-->\n  </section>\n</section>\n"

/***/ }),

/***/ "./src/app/floor plan/floor-map/floor-map.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/floor plan/floor-map/floor-map.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\nheader {\n  width: 100%;\n  background-color: #393939; }\n\n.content {\n  display: block;\n  width: 100%;\n  min-height: 100vh; }\n\n.content .room-grid {\n    padding: 20px;\n    display: grid;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n    grid-auto-rows: 1fr;\n    justify-items: stretch;\n    align-items: stretch;\n    width: 100%;\n    min-height: 100%; }\n\n@media (min-width: 768px) {\n  .content {\n    display: inline-flex;\n    flex-direction: row; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxvb3IgcGxhbi9mbG9vci1tYXAvRDpcXFNjaG9vbFxcU2Nob29sIDIwMTgtMjAxOVxcVXNlciBJbnRlcmZhY2VzXFxDYW1wdXMvc3JjXFxhcHBcXGZsb29yIHBsYW5cXGZsb29yLW1hcFxcZmxvb3ItbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVztFQUVYLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGVBQWM7RUFFZCxZQUFXO0VBQ1gsa0JBQWlCLEVBZWxCOztBQW5CRDtJQU9JLGNBQWE7SUFFYixjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsdUJBQXNCO0lBQ3RCLHFCQUFvQjtJQUVwQixZQUFXO0lBQ1gsaUJBQWdCLEVBQ2pCOztBQUdIO0VBQ0U7SUFDRSxxQkFBb0I7SUFDcEIsb0JBQW1CLEVBQ3BCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mbG9vciBwbGFuL2Zsb29yLW1hcC9mbG9vci1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gIC5yb29tLWdyaWQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/floor plan/floor-map/floor-map.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/floor plan/floor-map/floor-map.component.ts ***!
  \*************************************************************/
/*! exports provided: FloorMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorMapComponent", function() { return FloorMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_campus_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/campus-firebase.service */ "./src/app/services/campus-firebase.service.ts");
/* harmony import */ var _services_floor_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/floor-firebase.service */ "./src/app/services/floor-firebase.service.ts");
/* harmony import */ var _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/room-firebase.service */ "./src/app/services/room-firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_Campus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/Campus */ "./src/utils/Campus.ts");
/* harmony import */ var _utils_Floor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/Floor */ "./src/utils/Floor.ts");










var FloorMapComponent = /** @class */ (function () {
    function FloorMapComponent(campusService, floorService, roomService, route, router) {
        this.campusService = campusService;
        this.floorService = floorService;
        this.roomService = roomService;
        this.route = route;
        this.router = router;
        this.campuses = [];
        this.floors = [];
        this.floorNumbers = [];
        this.currentRooms = [];
        this.currentCampus = new _utils_Campus__WEBPACK_IMPORTED_MODULE_8__["Campus"]('', '', '');
        this.currentFloor = new _utils_Floor__WEBPACK_IMPORTED_MODULE_9__["Floor"]('', 0, '');
        this.colStyle = '1fr';
        this.isPersonnel = false;
        this.showsRoomName = true;
        this.showsRoomStatus = true;
        this.showsRoomType = true;
        this.showsRoomCapacity = false;
        this.showsRoomBeamer = false;
        this.showsDetails = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    FloorMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) { return _this.campusService.getCampusBySlug(params.get('slug')); })).subscribe(function (campus) {
            _this.currentCampus = campus[0];
            _this.floorSubscription = _this.floorService.getFloorsByCampus(_this.currentCampus.id).subscribe(function (floors) {
                _this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(+params.get('floorNumber')); })).subscribe(function (floorNumber) {
                    _this.floors = floors;
                    _this.floorNumbers = _this.floors.map(function (floor) { return floor.floorNumber; });
                    _this.currentFloor = _this.floors.filter(function (floor) { return floor.floorNumber === floorNumber; })[0];
                    _this.roomSubscription = _this.roomService.getRoomsByFloor(_this.currentFloor.id).subscribe(function (rooms) {
                        _this.currentRooms = rooms;
                        var colAmount = Math.max.apply(Math, rooms.map(function (room) { return room.x + room.width - 1; }));
                        var colStyleText = '';
                        for (var i = 0; i < colAmount; i++) {
                            colStyleText += '1fr ';
                        }
                        _this.colStyle = colStyleText;
                    });
                });
            });
        });
        this.campusSubscription = this.campusService.getCampuses().subscribe(function (campuses) {
            _this.campuses = campuses;
        });
    };
    FloorMapComponent.prototype.ngOnDestroy = function () {
        this.campusSubscription.unsubscribe();
        this.floorSubscription.unsubscribe();
        this.roomSubscription.unsubscribe();
    };
    FloorMapComponent.prototype.changePersonnel = function (event) {
        this.isPersonnel = event;
    };
    FloorMapComponent.prototype.changeRoomName = function (event) {
        this.showsRoomName = event;
    };
    FloorMapComponent.prototype.changeRoomStatus = function (event) {
        this.showsRoomStatus = event;
    };
    FloorMapComponent.prototype.changeRoomType = function (event) {
        this.showsRoomType = event;
    };
    FloorMapComponent.prototype.changeRoomCapacity = function (event) {
        this.showsRoomCapacity = event;
    };
    FloorMapComponent.prototype.changeRoomBeamer = function (event) {
        this.showsRoomBeamer = event;
    };
    FloorMapComponent.prototype.hideOtherRoomClicks = function () {
        this.showsDetails.next(false);
    };
    FloorMapComponent.prototype.onFloorMapResize = function (event) {
        var _this = this;
        if (window.innerWidth < 768) {
            this.route.url.subscribe(function (segments) {
                var newUrl = '/';
                segments.forEach(function (segment) {
                    if (segment.path.toLowerCase() === 'map') {
                        newUrl += 'list/';
                    }
                    else {
                        newUrl += segment.path.toLowerCase() + '/';
                    }
                });
                _this.router.navigate([newUrl]);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FloorMapComponent.prototype, "onFloorMapResize", null);
    FloorMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-floor-map',
            template: __webpack_require__(/*! ./floor-map.component.html */ "./src/app/floor plan/floor-map/floor-map.component.html"),
            styles: [__webpack_require__(/*! ./floor-map.component.scss */ "./src/app/floor plan/floor-map/floor-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_campus_firebase_service__WEBPACK_IMPORTED_MODULE_2__["CampusFirebaseService"],
            _services_floor_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FloorFirebaseService"],
            _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__["RoomFirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FloorMapComponent);
    return FloorMapComponent;
}());



/***/ }),

/***/ "./src/app/floor plan/room-map-item/room-map-item.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/floor plan/room-map-item/room-map-item.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--https://codepen.io/anon/pen/BvKroX-->\n<div class=\"room-container\">\n  <div class=\"room-inner-container\" (click)=\"onRoomClick()\">\n    <section *ngIf=\"showsRoomName || showsRoomStatus\" class=\"room-details\">\n      <div *ngIf=\"showsRoomName\" class=\"room-name\">{{room.name}}\n        <div *ngIf=\"room.additionalName.length > 0\" class=\"room-additional-name\"> - {{room.additionalName}}</div>\n      </div>\n      <div *ngIf=\"hasCrowdedness && showsRoomStatus\" class=\"room-status\"\n           [style.background-color]=\"getColorForPercentage(1 / room.capacity * room.crowdedness)\">\n        <p>Crowdedness: {{room.crowdedness}}</p>\n      </div>\n      <div *ngIf=\"hasOccupied && showsRoomStatus\" class=\"room-status {{room.occupied?'room-occupied':'room-free'}}\">\n        <p>{{(room.occupied) ? \"Occupied\" : \"Available\"}}</p>\n      </div>\n      <p class=\"countdown\" [style.visibility]=\"(hasOccupied && room.occupied && showsRoomStatus)?'shown': 'hidden'\">Available\n        in {{countdownString}}</p>\n    </section>\n    <section *ngIf=\"showsRoomType || showsRoomCapacity || (room.hasBeamer && showsRoomBeamer)\" class=\"room-facilities\">\n      <div>Facilities:</div>\n      <div *ngIf=\"showsRoomType\" class=\"room-detail-info\">\n        <i class=\"mdi mdi-{{room.icon_class}}\"></i>\n      </div>\n      <div *ngIf=\"room.hasBeamer && showsRoomBeamer\" class=\"room-detail-info\">\n        <div><i class=\"mdi mdi-projector\"></i></div>\n      </div>\n      <div *ngIf=\"showsRoomCapacity\" class=\"room-detail-info capacity\">\n        Capacity: {{room.capacity}}\n      </div>\n    </section>\n    <section *ngIf=\"isPersonnel && ((hasOccupied && !room.occupied) || (hasCrowdedness))\" class=\"room-controls\">\n      <div *ngIf=\"hasCrowdedness\">\n        <label for=\"crowdedness-slider\">Adjust crowdedness:\n          <input id=\"crowdedness-slider\"\n                 class=\"crowdedness-range\"\n                 type=\"range\"\n                 [ngModel]=\"room.crowdedness\"\n                 (ngModelChange)=\"changeCrowdedness($event)\" min=\"0\"\n                 max=\"{{room.capacity}}\">\n        </label>\n      </div>\n      <div *ngIf=\"hasOccupied && !room.occupied\" class=\"room-reservation\">\n        <label for=\"reservation-hours-dropdown\">Reserve for:\n          <span class=\"custom-dropdown\">\n          <select id=\"reservation-hours-dropdown\" [(ngModel)]=\"hoursSelected\">\n            <option value=\"0\" selected>Select duration...</option>\n            <option value=\"1\">1 hour</option>\n            <option value=\"2\">2 hours</option>\n            <option value=\"3\">3 hours</option>\n          </select>\n        </span>\n        </label>\n        <div class=\"button\" (click)=\"onReserve()\">Reserve now</div>\n      </div>\n    </section>\n    <section *ngIf=\"_showsDetails\" class=\"room-actions\">\n      <div class=\"button\" (click)=\"viewDetails()\">View room details</div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/floor plan/room-map-item/room-map-item.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/floor plan/room-map-item/room-map-item.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%; }\n\n/* Custom control styles */\n\n.button {\n  margin-top: 5px;\n  padding: 15px;\n  position: relative;\n  z-index: 1;\n  border: 2px solid rgba(0, 0, 0, 0.05);\n  line-height: 1em;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  overflow: hidden;\n  transition: 0.3s; }\n\n.button:after {\n    position: absolute;\n    transition: 0.3s;\n    content: \"\";\n    width: 0;\n    bottom: -3px;\n    background: rgba(0, 0, 0, 0.05);\n    height: 120%;\n    left: -10%;\n    -webkit-transform: skewX(25deg);\n    transform: skewX(25deg);\n    z-index: -1; }\n\n.button:hover {\n    cursor: pointer;\n    color: #5bcaff; }\n\n.button:hover:after {\n      left: -10%;\n      width: 120%; }\n\n.custom-dropdown {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n\n.custom-dropdown select {\n    background-color: #1abc9c;\n    color: #fff;\n    font-size: inherit;\n    padding: .5em 2.5em .5em .5em;\n    border: 0;\n    margin: 0;\n    border-radius: 3px;\n    text-indent: 0.01px;\n    text-overflow: '';\n    -webkit-appearance: button; }\n\n.custom-dropdown select > option:hover {\n      background-color: #1b9978; }\n\n.custom-dropdown::before, .custom-dropdown::after {\n    content: \"\";\n    position: absolute;\n    pointer-events: none; }\n\n.custom-dropdown::after {\n    content: \"\\25BC\";\n    height: 1em;\n    font-size: .625em;\n    line-height: 1;\n    right: 1.2em;\n    top: 50%;\n    margin-top: -.5em;\n    color: rgba(0, 0, 0, 0.4); }\n\n.custom-dropdown::before {\n    width: 2em;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0 3px 3px 0;\n    background-color: rgba(0, 0, 0, 0.15); }\n\n.custom-dropdown select[disabled] {\n    color: rgba(0, 0, 0, 0.3); }\n\n.custom-dropdown select[disabled]::after {\n      color: rgba(0, 0, 0, 0.1); }\n\n.crowdedness-range {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n  background: #d7dcdf;\n  background: linear-gradient(to right, limegreen 0%, yellow 50%, orangered 100%);\n  outline: none;\n  padding: 0;\n  margin: 0; }\n\n.crowdedness-range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n            appearance: none;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #2c3e50;\n    cursor: pointer;\n    transition: background .15s ease-in-out; }\n\n.crowdedness-range::-moz-range-thumb {\n    width: 16px;\n    height: 16px;\n    border: 0;\n    border-radius: 50%;\n    background: #2c3e50;\n    cursor: pointer;\n    transition: background .15s ease-in-out; }\n\n::-moz-range-track {\n  background: #d7dcdf;\n  background: linear-gradient(to right, limegreen 0%, yellow 50%, orangered 100%);\n  border: 0; }\n\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n  border: 0; }\n\n.room-container {\n  padding: 1.5em;\n  height: 100%;\n  width: 100%;\n  transition: .4s width;\n  box-shadow: -1px 3px 43px -9px rgba(0, 0, 0, 0.75);\n  background: #fcfeff;\n  background: linear-gradient(to right, #fcfeff 85%, #d7e4ea 93%, #b3d7e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfeff', endColorstr='#b3d7e5', GradientType=1);\n  background-attachment: fixed; }\n\n.room-container.check-in {\n    width: 100%; }\n\n.room-container .room-inner-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    height: 100%; }\n\n.room-container .room-inner-container > section {\n      width: 100%;\n      display: flex;\n      font-size: 1.2rem; }\n\n.room-container .room-inner-container .room-details {\n      display: inline-block;\n      position: relative;\n      word-break: break-all; }\n\n.room-container .room-inner-container .room-details .room-name {\n        letter-spacing: 2px;\n        font-weight: bolder;\n        font-size: 1.2rem;\n        text-transform: uppercase; }\n\n.room-container .room-inner-container .room-details .room-additional-name {\n        letter-spacing: 2px;\n        font-weight: bolder;\n        text-transform: uppercase; }\n\n.room-container .room-inner-container .room-details .room-status {\n        padding: .3em 1.3em;\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: auto;\n        justify-self: right;\n        line-height: 1.4em;\n        font-weight: bold;\n        font-size: 1.2rem;\n        text-align: center;\n        text-transform: uppercase;\n        letter-spacing: 3px;\n        color: #fff; }\n\n.room-container .room-inner-container .room-details .room-status p {\n          margin: auto;\n          word-break: unset;\n          text-align: center; }\n\n.room-container .room-inner-container .room-details .room-free {\n        background-color: limegreen; }\n\n.room-container .room-inner-container .room-details .room-occupied {\n        background-color: orangered; }\n\n.room-container .room-inner-container .room-details .countdown {\n        width: auto;\n        float: right; }\n\n.room-container .room-inner-container .room-facilities {\n      flex-wrap: wrap; }\n\n.room-container .room-inner-container .room-facilities > div {\n        margin: 0.4em 0; }\n\n.room-container .room-inner-container .room-facilities .room-detail-info > i {\n        padding-left: 0.4em; }\n\n.room-container .room-inner-container .room-facilities .capacity {\n        width: 100%;\n        display: block; }\n\n.room-container .room-inner-container .room-controls {\n      margin: 0.4em 0;\n      padding: 0; }\n\n.room-container .room-inner-container .room-controls .room-reservation {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: baseline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxvb3IgcGxhbi9yb29tLW1hcC1pdGVtL0Q6XFxTY2hvb2xcXFNjaG9vbCAyMDE4LTIwMTlcXFVzZXIgSW50ZXJmYWNlc1xcQ2FtcHVzL3NyY1xcYXBwXFxmbG9vciBwbGFuXFxyb29tLW1hcC1pdGVtXFxyb29tLW1hcC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRCwyQkFBMkI7O0FBRTNCO0VBQ0UsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixzQ0FBcUM7RUFDckMsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQXlCakI7O0FBdENEO0lBZ0JJLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLFNBQVE7SUFDUixhQUFZO0lBQ1osZ0NBQStCO0lBQy9CLGFBQVk7SUFDWixXQUFVO0lBQ1YsZ0NBQStCO0lBQy9CLHdCQUF1QjtJQUN2QixZQUFXLEVBQ1o7O0FBM0JIO0lBOEJJLGdCQUFlO0lBQ2YsZUFBYyxFQU1mOztBQXJDSDtNQWtDTSxXQUFVO01BQ1YsWUFBVyxFQUNaOztBQUtMO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFvRHZCOztBQXZERDtJQU1JLDBCQUF5QjtJQUN6QixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLDhCQUE2QjtJQUM3QixVQUFTO0lBQ1QsVUFBUztJQUNULG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsa0JBQWlCO0lBQ2pCLDJCQUEwQixFQUszQjs7QUFwQkg7TUFrQk0sMEJBQXlCLEVBQzFCOztBQW5CTDtJQXVCSSxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLHFCQUFvQixFQUNyQjs7QUExQkg7SUE2QkksaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsZUFBYztJQUNkLGFBQVk7SUFDWixTQUFRO0lBQ1Isa0JBQWlCO0lBQ2pCLDBCQUF3QixFQUN6Qjs7QUFyQ0g7SUF3Q0ksV0FBVTtJQUNWLFNBQVE7SUFDUixPQUFNO0lBQ04sVUFBUztJQUNULDJCQUEwQjtJQUMxQixzQ0FBb0MsRUFDckM7O0FBOUNIO0lBaURJLDBCQUF3QixFQUt6Qjs7QUF0REg7TUFvRE0sMEJBQXdCLEVBQ3pCOztBQVdMO0VBQ0UseUJBQXdCO0VBQ3hCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQVR5QjtFQVV6QixnRkFBK0U7RUFDL0UsY0FBYTtFQUNiLFdBQVU7RUFDVixVQUFTLEVBcUJWOztBQTlCRDtJQVlJLHlCQUFnQjtZQUFoQixpQkFBZ0I7SUFDaEIsWUFsQm9CO0lBbUJwQixhQW5Cb0I7SUFvQnBCLG1CQUFrQjtJQUNsQixvQkF0QndCO0lBdUJ4QixnQkFBZTtJQUNmLHdDQUF1QyxFQUN4Qzs7QUFuQkg7SUFzQkksWUEzQm9CO0lBNEJwQixhQTVCb0I7SUE2QnBCLFVBQVM7SUFDVCxtQkFBa0I7SUFDbEIsb0JBaEN3QjtJQWlDeEIsZ0JBQWU7SUFDZix3Q0FBdUMsRUFDeEM7O0FBSUg7RUFDRSxvQkF0Q3lCO0VBdUN6QixnRkFBK0U7RUFDL0UsVUFBUyxFQUNWOztBQUVEOztFQUVFLFVBQVMsRUFDVjs7QUFFRDtFQUNFLGVBQWM7RUFFZCxhQUFZO0VBQ1osWUFBVztFQUVYLHNCQUFxQjtFQUlyQixtREFBa0Q7RUFHbEQsb0JBQThCO0VBTTlCLDhFQUEwSDtFQUMxSCxtSEFBa0g7RUFDbEgsNkJBQTRCLEVBb0g3Qjs7QUF6SUQ7SUF5QkksWUFBVyxFQUNaOztBQTFCSDtJQTZCSSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLDRCQUEyQjtJQUMzQix3QkFBdUI7SUFDdkIsZ0JBQWU7SUFFZixhQUFZLEVBcUdiOztBQXhJSDtNQXNDTSxZQUFXO01BRVgsY0FBYTtNQUViLGtCQUFpQixFQUNsQjs7QUEzQ0w7TUE4Q00sc0JBQXFCO01BQ3JCLG1CQUFrQjtNQUNsQixzQkFBcUIsRUFvRHRCOztBQXBHTDtRQW1EUSxvQkFBbUI7UUFDbkIsb0JBQW1CO1FBQ25CLGtCQUFpQjtRQUNqQiwwQkFBeUIsRUFDMUI7O0FBdkRQO1FBMERRLG9CQUFtQjtRQUNuQixvQkFBbUI7UUFDbkIsMEJBQXlCLEVBQzFCOztBQTdEUDtRQWdFUSxvQkFBbUI7UUFFbkIsbUJBQWtCO1FBQ2xCLE9BQU07UUFDTixTQUFRO1FBQ1IsWUFBVztRQUVYLG9CQUFtQjtRQUNuQixtQkFBa0I7UUFDbEIsa0JBQWlCO1FBQ2pCLGtCQUFpQjtRQUNqQixtQkFBa0I7UUFDbEIsMEJBQXlCO1FBQ3pCLG9CQUFtQjtRQUNuQixZQUFXLEVBUVo7O0FBdEZQO1VBaUZVLGFBQVk7VUFFWixrQkFBaUI7VUFDakIsbUJBQWtCLEVBQ25COztBQXJGVDtRQXlGUSw0QkFBMkIsRUFDNUI7O0FBMUZQO1FBNkZRLDRCQUEyQixFQUM1Qjs7QUE5RlA7UUFpR1EsWUFBVztRQUNYLGFBQVksRUFDYjs7QUFuR1A7TUF1R00sZ0JBQWUsRUFjaEI7O0FBckhMO1FBMEdRLGdCQUFlLEVBQ2hCOztBQTNHUDtRQThHUSxvQkFBbUIsRUFDcEI7O0FBL0dQO1FBa0hRLFlBQVc7UUFDWCxlQUFjLEVBQ2Y7O0FBcEhQO01BeUhNLGdCQUFlO01BQ2YsV0FBVSxFQVFYOztBQWxJTDtRQTZIUSxjQUFhO1FBQ2IsdUJBQXNCO1FBQ3RCLHdCQUF1QjtRQUN2QixzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mbG9vciBwbGFuL3Jvb20tbWFwLWl0ZW0vcm9vbS1tYXAtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEN1c3RvbSBjb250cm9sIHN0eWxlcyAqL1xyXG4vLyBCdXR0b25cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvdHRvbTogLTNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMjVkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNWJjYWZmO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgICB3aWR0aDogMTIwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBkcm9wZG93blxyXG4uY3VzdG9tLWRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDIuNWVtIC41ZW0gLjVlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiAnJztcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG5cclxuICAgID4gb3B0aW9uOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOTk3ODtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDI1QkNcIjtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAuNjI1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHJpZ2h0OiAxLjJlbTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLS41ZW07XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RbZGlzYWJsZWRdIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJhbmdlIHNsaWRlclxyXG4kcmFuZ2UtaGFuZGxlLWNvbG9yOiAjMmMzZTUwICFkZWZhdWx0O1xyXG4kcmFuZ2UtaGFuZGxlLXNpemU6IDE2cHggIWRlZmF1bHQ7XHJcbiRyYW5nZS10cmFjay1jb2xvcjogI2Q3ZGNkZiAhZGVmYXVsdDtcclxuJHJhbmdlLWxhYmVsLWNvbG9yOiAjMmMzZTUwICFkZWZhdWx0O1xyXG4kcmFuZ2UtbGFiZWwtd2lkdGg6IDYwcHggIWRlZmF1bHQ7XHJcblxyXG4uY3Jvd2RlZG5lc3MtcmFuZ2Uge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICRyYW5nZS10cmFjay1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpbWVncmVlbiAwJSwgeWVsbG93IDUwJSwgb3JhbmdlcmVkIDEwMCUpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogJHJhbmdlLWhhbmRsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkcmFuZ2UtaGFuZGxlLXNpemU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtaGFuZGxlLWNvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgJjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgICB3aWR0aDogJHJhbmdlLWhhbmRsZS1zaXplO1xyXG4gICAgaGVpZ2h0OiAkcmFuZ2UtaGFuZGxlLXNpemU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtaGFuZGxlLWNvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRmlyZWZveCBPdmVycmlkZXNcclxuOjotbW96LXJhbmdlLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAkcmFuZ2UtdHJhY2stY29sb3I7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBsaW1lZ3JlZW4gMCUsIHllbGxvdyA1MCUsIG9yYW5nZXJlZCAxMDAlKTtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dDo6LW1vei1mb2N1cy1vdXRlciB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ucm9vbS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEuNWVtO1xyXG5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRyYW5zaXRpb246IC40cyB3aWR0aDtcclxuXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDNweCA0M3B4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IC0xcHggM3B4IDQzcHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDQzcHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG5cclxuICAvL0dyYWRpZW50XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MiwgMjU0LCAyNTUpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjUyLCAyNTQsIDI1NSwgMSkgODUlLCByZ2JhKDIxNSwgMjI4LCAyMzQsIDEpIDkzJSwgcmdiYSgxNzksIDIxNSwgMjI5LCAxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCg4NSUsIHJnYmEoMjUyLCAyNTQsIDI1NSwgMSkpLCBjb2xvci1zdG9wKDkzJSwgcmdiYSgyMTUsIDIyOCwgMjM0LCAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxNzksIDIxNSwgMjI5LCAxKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjUyLCAyNTQsIDI1NSwgMSkgODUlLCByZ2JhKDIxNSwgMjI4LCAyMzQsIDEpIDkzJSwgcmdiYSgxNzksIDIxNSwgMjI5LCAxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTIsIDI1NCwgMjU1LCAxKSA4NSUsIHJnYmEoMjE1LCAyMjgsIDIzNCwgMSkgOTMlLCByZ2JhKDE3OSwgMjE1LCAyMjksIDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTIsIDI1NCwgMjU1LCAxKSA4NSUsIHJnYmEoMjE1LCAyMjgsIDIzNCwgMSkgOTMlLCByZ2JhKDE3OSwgMjE1LCAyMjksIDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTIsIDI1NCwgMjU1LCAxKSA4NSUsIHJnYmEoMjE1LCAyMjgsIDIzNCwgMSkgOTMlLCByZ2JhKDE3OSwgMjE1LCAyMjksIDEpIDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmY2ZlZmYnLCBlbmRDb2xvcnN0cj0nI2IzZDdlNScsIEdyYWRpZW50VHlwZT0xKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5cclxuXHJcbiAgJi5jaGVjay1pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yb29tLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICA+IHNlY3Rpb24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucm9vbS1kZXRhaWxzIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHJcbiAgICAgIC5yb29tLW5hbWUge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9vbS1hZGRpdGlvbmFsLW5hbWUge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9vbS1zdGF0dXMge1xyXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMS4zZW07XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgIHdvcmQtYnJlYWs6IHVuc2V0O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvb20tZnJlZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9vbS1vY2N1cGllZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY291bnRkb3duIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm9vbS1mYWNpbGl0aWVzIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMC40ZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJvb20tZGV0YWlsLWluZm8gPiBpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FwYWNpdHkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9DaGVjay1pblxyXG4gICAgLnJvb20tY29udHJvbHMge1xyXG4gICAgICBtYXJnaW46IDAuNGVtIDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAucm9vbS1yZXNlcnZhdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yb29tLWFjdGlvbnMge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/floor plan/room-map-item/room-map-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/floor plan/room-map-item/room-map-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: RoomMapItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomMapItemComponent", function() { return RoomMapItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Room */ "./src/utils/Room.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/room-firebase.service */ "./src/app/services/room-firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/RoomType */ "./src/utils/RoomType.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var RoomMapItemComponent = /** @class */ (function () {
    function RoomMapItemComponent(roomService, router) {
        var _this = this;
        this.roomService = roomService;
        this.router = router;
        this.percentColors = [
            { pct: 0.0, color: { r: 0x32, g: 0xcd, b: 0x32 } },
            { pct: 0.5, color: { r: 0xf4, g: 0xd8, b: 0x00 } },
            { pct: 1.0, color: { r: 0xff, g: 0x45, b: 0x2b } }
        ];
        this.hasCrowdedness = false;
        this.hasOccupied = false;
        this._showsDetails = false;
        this._showsDetailsTimeoutId = 0;
        this.isPersonnel = true;
        this.showsRoomName = true;
        this.showsRoomStatus = true;
        this.showsRoomType = true;
        this.showsRoomCapacity = false;
        this.showsRoomBeamer = false;
        this.hideOtherRoomClicks = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countdownString = '';
        this.hoursSelected = 0;
        // Crowdedness model for debounce time
        this.crowdednessModelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Set crowdedness slider event
        this.crowdednessModelChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())
            .subscribe(function (crowdedness) { return roomService.updateRoomCrowdedness(_this.room.id, +crowdedness); });
    }
    RoomMapItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this.room.type) {
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__["RoomType"].CAFETARIA:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__["RoomType"].STUDY_HALL:
                this.hasCrowdedness = true;
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__["RoomType"].AUDITORIUM:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__["RoomType"].CLASSROOM:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__["RoomType"].MEETING_ROOM:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_6__["RoomType"].OFFICE:
                this.hasOccupied = true;
        }
        this.reservedUntil = new Date(this.room.reservedUntil);
        if (this.room.occupied) {
            this.countDown();
        }
        this.showsDetails.subscribe(function (newValue) {
            _this._showsDetails = newValue;
        });
    };
    RoomMapItemComponent.prototype.getColorForPercentage = function (pct) {
        var i;
        for (i = 1; i < this.percentColors.length - 1; i++) {
            if (pct <= this.percentColors[i].pct) {
                break;
            }
        }
        var lower = this.percentColors[i - 1];
        var upper = this.percentColors[i];
        var range = upper.pct - lower.pct;
        var rangePct = (pct - lower.pct) / range;
        var pctLower = 1 - rangePct;
        var pctUpper = rangePct;
        var color = {
            r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
            g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
            b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
        // or output as hex if preferred
    };
    RoomMapItemComponent.prototype.countDown = function () {
        var _this = this;
        setTimeout(function () {
            var now = new Date(Date.now());
            if (_this.reservedUntil > now) {
                var totalSeconds = (_this.reservedUntil.getTime() - now.getTime()) / 1000;
                var hours = Math.floor(totalSeconds / 60 / 60) % 24;
                var mins = Math.floor(totalSeconds / 60) % 60;
                var secs = Math.floor(totalSeconds) % 60;
                _this.countdownString = _this.padNumber(hours) + ':' + _this.padNumber(mins) + ':' + _this.padNumber(secs);
                _this.countDown();
            }
            else {
                _this.roomService.unreserveRoom(_this.room.id);
            }
        }, 1000);
    };
    RoomMapItemComponent.prototype.padNumber = function (num) {
        return ((num < 10) ? '0' : '') + num;
    };
    RoomMapItemComponent.prototype.onReserve = function () {
        if (this.hoursSelected > 0) {
            this.roomService.reserveRoom(this.room.id, +this.hoursSelected);
        }
    };
    RoomMapItemComponent.prototype.changeCrowdedness = function (event) {
        this.room.crowdedness = event;
        this.crowdednessModelChanged.next(event);
    };
    RoomMapItemComponent.prototype.viewDetails = function () {
        this.router.navigate(['/room/detail/' + this.room.id]);
    };
    RoomMapItemComponent.prototype.onRoomClick = function () {
        var _this = this;
        clearTimeout(this._showsDetailsTimeoutId);
        this.hideOtherRoomClicks.emit();
        this._showsDetails = true;
        this._showsDetailsTimeoutId = setTimeout(function () { return _this._showsDetails = false; }, 5000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _utils_Room__WEBPACK_IMPORTED_MODULE_2__["Room"])
    ], RoomMapItemComponent.prototype, "room", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomMapItemComponent.prototype, "isPersonnel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomMapItemComponent.prototype, "showsRoomName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomMapItemComponent.prototype, "showsRoomStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomMapItemComponent.prototype, "showsRoomType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomMapItemComponent.prototype, "showsRoomCapacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomMapItemComponent.prototype, "showsRoomBeamer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], RoomMapItemComponent.prototype, "showsDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RoomMapItemComponent.prototype, "hideOtherRoomClicks", void 0);
    RoomMapItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-map-item',
            template: __webpack_require__(/*! ./room-map-item.component.html */ "./src/app/floor plan/room-map-item/room-map-item.component.html"),
            styles: [__webpack_require__(/*! ./room-map-item.component.scss */ "./src/app/floor plan/room-map-item/room-map-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__["RoomFirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RoomMapItemComponent);
    return RoomMapItemComponent;
}());



/***/ }),

/***/ "./src/app/list/floor-list/floor-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/list/floor-list/floor-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <app-campus-header\r\n    [currentCampus]=\"currentCampus\"\r\n  ></app-campus-header>\r\n</header>\r\n<section class=\"content\">\r\n  <app-menu\r\n    [campuses]=\"campuses\"\r\n    [currentCampus]=\"currentCampus\"\r\n    [currentFloors]=\"floors\"\r\n    [currentFloorNumbers]=\"floorNumbers\"\r\n    [currentFloorNumber]=\"currentFloor.floorNumber\"\r\n    (changePersonnel)=\"changePersonnel($event)\"\r\n    (showRoomName)=\"changeRoomName($event)\"\r\n    (showRoomStatus)=\"changeRoomStatus($event)\"\r\n    (showRoomType)=\"changeRoomType($event)\"\r\n    (showRoomCapacity)=\"changeRoomCapacity($event)\"\r\n    (showRoomBeamer)=\"changeRoomBeamer($event)\"\r\n  ></app-menu>\r\n  <!--<div class='social-container'>-->\r\n  <!--<span>-->\r\n  <!--<a class='social-roll github' href='#'></a>-->\r\n  <!--</span>-->\r\n  <!--<span>-->\r\n  <!--<a class='social-roll twitter' href='#'></a>-->\r\n  <!--</span>-->\r\n  <!--<span>-->\r\n  <!--<a class='social-roll linkedin' href='#'></a>-->\r\n  <!--</span>-->\r\n  <!--<span>-->\r\n  <!--<a class='social-roll rss' href='#'></a>-->\r\n  <!--</span>-->\r\n  <!--</div>-->\r\n  <section class=\"room-list\">\r\n    <app-room-list-item\r\n      *ngFor=\"let room of currentRooms\"\r\n      [room]=\"room\"\r\n      [isPersonnel]=\"isPersonnel\"\r\n      [showsRoomName]=\"showsRoomName\"\r\n      [showsRoomStatus]=\"showsRoomStatus\"\r\n      [showsRoomType]=\"showsRoomType\"\r\n      [showsRoomCapacity]=\"showsRoomCapacity\"\r\n      [showsRoomBeamer]=\"showsRoomBeamer\"\r\n      [showsDetails]=\"showsDetails\"\r\n      (hideOtherRoomClicks)=\"hideOtherRoomClicks()\"\r\n    ></app-room-list-item>\r\n  </section>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/list/floor-list/floor-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/list/floor-list/floor-list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\nheader {\n  width: 100%;\n  background-color: #393939; }\n\n.content {\n  display: block;\n  width: 100%; }\n\n.content .room-list {\n    width: 100%; }\n\n@media (min-width: 768px) {\n  .content {\n    display: inline-flex;\n    flex-direction: row; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9mbG9vci1saXN0L0Q6XFxTY2hvb2xcXFNjaG9vbCAyMDE4LTIwMTlcXFVzZXIgSW50ZXJmYWNlc1xcQ2FtcHVzL3NyY1xcYXBwXFxsaXN0XFxmbG9vci1saXN0XFxmbG9vci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVztFQUVYLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLGVBQWM7RUFFZCxZQUFXLEVBS1o7O0FBUkQ7SUFNSSxZQUFXLEVBQ1o7O0FBR0g7RUFDRTtJQUNFLHFCQUFvQjtJQUNwQixvQkFBbUIsRUFDcEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpc3QvZmxvb3ItbGlzdC9mbG9vci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAucm9vbS1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/list/floor-list/floor-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/list/floor-list/floor-list.component.ts ***!
  \*********************************************************/
/*! exports provided: FloorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorListComponent", function() { return FloorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Floor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Floor */ "./src/utils/Floor.ts");
/* harmony import */ var _services_floor_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/floor-firebase.service */ "./src/app/services/floor-firebase.service.ts");
/* harmony import */ var _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/room-firebase.service */ "./src/app/services/room-firebase.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_Campus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/Campus */ "./src/utils/Campus.ts");
/* harmony import */ var _services_campus_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/campus-firebase.service */ "./src/app/services/campus-firebase.service.ts");










var FloorListComponent = /** @class */ (function () {
    function FloorListComponent(campusService, floorService, roomService, route) {
        this.campusService = campusService;
        this.floorService = floorService;
        this.roomService = roomService;
        this.route = route;
        this.campuses = [];
        this.floors = [];
        this.floorNumbers = [];
        this.currentRooms = [];
        this.currentCampus = new _utils_Campus__WEBPACK_IMPORTED_MODULE_8__["Campus"]('', '', '');
        this.currentFloor = new _utils_Floor__WEBPACK_IMPORTED_MODULE_2__["Floor"]('', 0, '');
        this.isPersonnel = false;
        this.showsRoomName = true;
        this.showsRoomStatus = true;
        this.showsRoomType = true;
        this.showsRoomCapacity = false;
        this.showsRoomBeamer = false;
        this.showsDetails = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    FloorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.campusService.getCampusBySlug(params.get('slug')); })).subscribe(function (campus) {
            _this.currentCampus = campus[0];
            _this.floorSubscription = _this.floorService.getFloorsByCampus(_this.currentCampus.id).subscribe(function (floors) {
                _this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(+params.get('floorNumber')); })).subscribe(function (floorNumber) {
                    _this.floors = floors;
                    _this.floorNumbers = _this.floors.map(function (floor) { return floor.floorNumber; });
                    _this.currentFloor = _this.floors.filter(function (floor) { return floor.floorNumber === floorNumber; })[0];
                    _this.roomSubscription = _this.roomService.getRoomsByFloor(_this.currentFloor.id).subscribe(function (rooms) {
                        _this.currentRooms = rooms;
                        _this.currentRooms.sort();
                    });
                });
            });
        });
        this.campusSubscription = this.campusService.getCampuses().subscribe(function (campuses) {
            _this.campuses = campuses;
        });
    };
    FloorListComponent.prototype.ngOnDestroy = function () {
        this.campusSubscription.unsubscribe();
        this.floorSubscription.unsubscribe();
        this.roomSubscription.unsubscribe();
    };
    FloorListComponent.prototype.changePersonnel = function (event) {
        this.isPersonnel = event;
    };
    FloorListComponent.prototype.changeRoomName = function (event) {
        this.showsRoomName = event;
    };
    FloorListComponent.prototype.changeRoomStatus = function (event) {
        this.showsRoomStatus = event;
    };
    FloorListComponent.prototype.changeRoomType = function (event) {
        this.showsRoomType = event;
    };
    FloorListComponent.prototype.changeRoomCapacity = function (event) {
        this.showsRoomCapacity = event;
    };
    FloorListComponent.prototype.changeRoomBeamer = function (event) {
        this.showsRoomBeamer = event;
    };
    FloorListComponent.prototype.hideOtherRoomClicks = function () {
        this.showsDetails.next(false);
    };
    FloorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-floor-list',
            template: __webpack_require__(/*! ./floor-list.component.html */ "./src/app/list/floor-list/floor-list.component.html"),
            styles: [__webpack_require__(/*! ./floor-list.component.scss */ "./src/app/list/floor-list/floor-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_campus_firebase_service__WEBPACK_IMPORTED_MODULE_9__["CampusFirebaseService"],
            _services_floor_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FloorFirebaseService"],
            _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__["RoomFirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], FloorListComponent);
    return FloorListComponent;
}());



/***/ }),

/***/ "./src/app/list/room-list-item/room-list-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/list/room-list-item/room-list-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--https://codepen.io/anon/pen/BvKroX-->\n<div class=\"room-container\">\n  <div class=\"room-inner-container\" (click)=\"onRoomClick()\">\n    <section *ngIf=\"showsRoomName || showsRoomStatus\" class=\"room-details\">\n      <div *ngIf=\"showsRoomName\" class=\"room-name\">{{room.name}}</div>\n      <div *ngIf=\"showsRoomName\" class=\"room-additional-name\">{{room.additionalName}}</div>\n      <div *ngIf=\"hasCrowdedness && showsRoomStatus\" class=\"room-status\"\n           [style.background-color]=\"getColorForPercentage(1 / room.capacity * room.crowdedness)\">\n        <p>Crowdedness: {{room.crowdedness}}</p>\n      </div>\n      <div *ngIf=\"hasOccupied && showsRoomStatus\" class=\"room-status {{room.occupied?'room-occupied':'room-free'}}\">\n        <p>{{(room.occupied) ? \"Occupied\" : \"Available\"}}</p>\n      </div>\n      <p class=\"countdown\" *ngIf=\"hasOccupied && room.occupied && showsRoomStatus\">Available in {{countdownString}}</p>\n    </section>\n    <section *ngIf=\"showsRoomType || showsRoomCapacity || (room.hasBeamer && showsRoomBeamer)\" class=\"room-facilities\">\n      <div *ngIf=\"showsRoomType\" class=\"room-detail-info\">\n        <i class=\"mdi mdi-{{room.icon_class}}\"></i> {{room.type}}\n      </div>\n      <div *ngIf=\"showsRoomCapacity\" class=\"room-detail-info\">\n        Capacity: {{room.capacity}}\n      </div>\n      <div *ngIf=\"room.hasBeamer && showsRoomBeamer\" class=\"room-detail-info\">\n        <div><i class=\"mdi mdi-projector\"></i> Beamer available</div>\n      </div>\n    </section>\n    <section *ngIf=\"isPersonnel && ((hasOccupied && !room.occupied) || (hasCrowdedness))\" class=\"room-controls\">\n      <div *ngIf=\"hasCrowdedness\">\n        <label for=\"crowdedness-slider\">Adjust crowdedness:</label>\n        <input id=\"crowdedness-slider\"\n               class=\"crowdedness-range\"\n               type=\"range\"\n               [ngModel]=\"room.crowdedness\"\n               (ngModelChange)=\"changeCrowdedness($event)\" min=\"0\"\n               max=\"{{room.capacity}}\">\n      </div>\n      <div *ngIf=\"hasOccupied && !room.occupied\" class=\"room-reservation\">\n        <label for=\"reservation-hours-dropdown\">Reserve for: </label>\n        <span class=\"custom-dropdown\">\n        <select id=\"reservation-hours-dropdown\" [(ngModel)]=\"hoursSelected\">\n          <option value=\"0\" selected>Select duration...</option>\n          <option value=\"1\">1 hour</option>\n          <option value=\"2\">2 hours</option>\n          <option value=\"3\">3 hours</option>\n        </select>\n      </span>\n        <div class=\"button\" (click)=\"onReserve()\">Reserve now</div>\n      </div>\n    </section>\n    <section *ngIf=\"_showsDetails\" class=\"room-actions\">\n      <div class=\"button\" (click)=\"viewDetails()\">View room details</div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list/room-list-item/room-list-item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/list/room-list-item/room-list-item.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Custom control styles */\n.button {\n  margin-top: 5px;\n  padding: 15px;\n  position: relative;\n  z-index: 1;\n  border: 2px solid rgba(0, 0, 0, 0.05);\n  line-height: 1em;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  overflow: hidden;\n  transition: 0.3s; }\n.button:after {\n    position: absolute;\n    transition: 0.3s;\n    content: \"\";\n    width: 0;\n    bottom: -3px;\n    background: rgba(0, 0, 0, 0.05);\n    height: 120%;\n    left: -10%;\n    -webkit-transform: skewX(25deg);\n    transform: skewX(25deg);\n    z-index: -1; }\n.button:hover {\n    cursor: pointer;\n    color: #5bcaff; }\n.button:hover:after {\n      left: -10%;\n      width: 120%; }\n.crowdedness-range {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n  background: #d7dcdf;\n  background: linear-gradient(to right, limegreen 0%, yellow 50%, orangered 100%);\n  outline: none;\n  padding: 0;\n  margin: 0; }\n.crowdedness-range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n            appearance: none;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #2c3e50;\n    cursor: pointer;\n    transition: background .15s ease-in-out; }\n.crowdedness-range::-moz-range-thumb {\n    width: 16px;\n    height: 16px;\n    border: 0;\n    border-radius: 50%;\n    background: #2c3e50;\n    cursor: pointer;\n    transition: background .15s ease-in-out; }\n::-moz-range-track {\n  background: #d7dcdf;\n  background: linear-gradient(to right, limegreen 0%, yellow 50%, orangered 100%);\n  border: 0; }\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n  border: 0; }\n.room-container {\n  margin: 50px 20px;\n  padding: 2em 1.5em;\n  transition: .4s width;\n  box-shadow: -1px 3px 43px -9px rgba(0, 0, 0, 0.75);\n  background: #fcfeff;\n  background: linear-gradient(to right, #fcfeff 85%, #d7e4ea 93%, #b3d7e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfeff', endColorstr='#b3d7e5', GradientType=1); }\n.room-container.check-in {\n    width: 100%; }\n.room-container .room-inner-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n.room-container .room-inner-container > section {\n      padding: 0 1.5em;\n      width: 25rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: baseline;\n      font-size: 1.2rem; }\n.room-container .room-inner-container .room-details {\n      min-width: 10em; }\n.room-container .room-inner-container .room-details .room-name {\n        letter-spacing: 2px;\n        font-weight: bolder;\n        font-size: 1.5em;\n        text-transform: uppercase; }\n.room-container .room-inner-container .room-details .room-additional-name {\n        letter-spacing: 2px;\n        font-weight: bolder;\n        text-transform: uppercase; }\n.room-container .room-inner-container .room-details .room-status {\n        margin-top: .5em;\n        padding: .3em .3em;\n        display: flex;\n        height: 2.5em;\n        min-width: 12.5em;\n        line-height: 1em;\n        font-weight: bold;\n        font-size: 1.2em;\n        text-align: center;\n        text-transform: uppercase;\n        letter-spacing: 3px;\n        color: #fff; }\n.room-container .room-inner-container .room-details .room-status p {\n          margin: auto;\n          text-align: center; }\n.room-container .room-inner-container .room-details .room-free {\n        background-color: limegreen; }\n.room-container .room-inner-container .room-details .room-occupied {\n        background-color: orangered; }\n.room-container .room-inner-container .room-details .countdown {\n        margin-bottom: 0; }\n.room-container .room-inner-container .room-facilities {\n      border-right: 1px solid rgba(0, 0, 0, 0.09);\n      border-left: 1px solid rgba(0, 0, 0, 0.09); }\n.room-container .room-inner-container .room-facilities .room-detail-info {\n        margin: 0.4em 0; }\n.room-container .room-inner-container .room-controls {\n      padding: 0;\n      border-right: 1px solid rgba(0, 0, 0, 0.09);\n      border-left: 1px solid rgba(0, 0, 0, 0.09); }\n.room-container .room-inner-container .room-controls > div {\n        margin: 0 1.5em; }\n.room-container .room-inner-container .room-controls .room-reservation {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: baseline; }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown {\n          position: relative;\n          display: inline-block;\n          vertical-align: middle; }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown select {\n            background-color: #1abc9c;\n            color: #fff;\n            font-size: inherit;\n            padding: .5em 2.5em .5em .5em;\n            border: 0;\n            margin: 0;\n            border-radius: 3px;\n            text-indent: 0.01px;\n            text-overflow: '';\n            -webkit-appearance: button; }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown select > option:hover {\n              background-color: #1b9978; }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown::before, .room-container .room-inner-container .room-controls .room-reservation .custom-dropdown::after {\n            content: \"\";\n            position: absolute;\n            pointer-events: none; }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown::after {\n            content: \"\\25BC\";\n            height: 1em;\n            font-size: .625em;\n            line-height: 1;\n            right: 1.2em;\n            top: 50%;\n            margin-top: -.5em;\n            color: rgba(0, 0, 0, 0.4); }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown::before {\n            width: 2em;\n            right: 0;\n            top: 0;\n            bottom: 0;\n            border-radius: 0 3px 3px 0;\n            background-color: rgba(0, 0, 0, 0.15); }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown select[disabled] {\n            color: rgba(0, 0, 0, 0.3); }\n.room-container .room-inner-container .room-controls .room-reservation .custom-dropdown select[disabled]::after {\n              color: rgba(0, 0, 0, 0.1); }\n@media (min-width: 768px) {\n  .room-container .room-inner-container .room-details .room-status {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9yb29tLWxpc3QtaXRlbS9EOlxcU2Nob29sXFxTY2hvb2wgMjAxOC0yMDE5XFxVc2VyIEludGVyZmFjZXNcXENhbXB1cy9zcmNcXGFwcFxcbGlzdFxccm9vbS1saXN0LWl0ZW1cXHJvb20tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUUzQjtFQUNFLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1Ysc0NBQXFDO0VBQ3JDLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUF5QmpCO0FBdENEO0lBZ0JJLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLFNBQVE7SUFDUixhQUFZO0lBQ1osZ0NBQStCO0lBQy9CLGFBQVk7SUFDWixXQUFVO0lBQ1YsZ0NBQStCO0lBQy9CLHdCQUF1QjtJQUN2QixZQUFXLEVBQ1o7QUEzQkg7SUE4QkksZ0JBQWU7SUFDZixlQUFjLEVBTWY7QUFyQ0g7TUFrQ00sV0FBVTtNQUNWLFlBQVcsRUFDWjtBQVdMO0VBQ0UseUJBQXdCO0VBQ3hCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQVR5QjtFQVV6QixnRkFBK0U7RUFDL0UsY0FBYTtFQUNiLFdBQVU7RUFDVixVQUFTLEVBcUJWO0FBOUJEO0lBWUkseUJBQWdCO1lBQWhCLGlCQUFnQjtJQUNoQixZQWxCb0I7SUFtQnBCLGFBbkJvQjtJQW9CcEIsbUJBQWtCO0lBQ2xCLG9CQXRCd0I7SUF1QnhCLGdCQUFlO0lBQ2Ysd0NBQXVDLEVBQ3hDO0FBbkJIO0lBc0JJLFlBM0JvQjtJQTRCcEIsYUE1Qm9CO0lBNkJwQixVQUFTO0lBQ1QsbUJBQWtCO0lBQ2xCLG9CQWhDd0I7SUFpQ3hCLGdCQUFlO0lBQ2Ysd0NBQXVDLEVBQ3hDO0FBSUg7RUFDRSxvQkF0Q3lCO0VBdUN6QixnRkFBK0U7RUFDL0UsVUFBUyxFQUNWO0FBRUQ7O0VBRUUsVUFBUyxFQUNWO0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUlyQixtREFBa0Q7RUFHbEQsb0JBQThCO0VBTTlCLDhFQUEwSDtFQUMxSCxtSEFBa0gsRUFvS25IO0FBckxEO0lBb0JJLFlBQVcsRUFDWjtBQXJCSDtJQXdCSSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZix3QkFBdUIsRUEwSnhCO0FBcExIO01BNkJNLGlCQUFnQjtNQUNoQixhQUFZO01BRVosY0FBYTtNQUNiLHVCQUFzQjtNQUN0Qix3QkFBdUI7TUFDdkIsc0JBQXFCO01BRXJCLGtCQUFpQixFQUNsQjtBQXRDTDtNQXlDTSxnQkFBZSxFQStDaEI7QUF4Rkw7UUE0Q1Esb0JBQW1CO1FBQ25CLG9CQUFtQjtRQUNuQixpQkFBZ0I7UUFDaEIsMEJBQXlCLEVBQzFCO0FBaERQO1FBbURRLG9CQUFtQjtRQUNuQixvQkFBbUI7UUFDbkIsMEJBQXlCLEVBQzFCO0FBdERQO1FBeURRLGlCQUFnQjtRQUNoQixtQkFBa0I7UUFDbEIsY0FBYTtRQUViLGNBQWE7UUFDYixrQkFBaUI7UUFDakIsaUJBQWdCO1FBQ2hCLGtCQUFpQjtRQUNqQixpQkFBZ0I7UUFDaEIsbUJBQWtCO1FBQ2xCLDBCQUF5QjtRQUN6QixvQkFBbUI7UUFDbkIsWUFBVyxFQU1aO0FBM0VQO1VBd0VVLGFBQVk7VUFDWixtQkFBa0IsRUFDbkI7QUExRVQ7UUE4RVEsNEJBQTJCLEVBQzVCO0FBL0VQO1FBa0ZRLDRCQUEyQixFQUM1QjtBQW5GUDtRQXNGUSxpQkFBZ0IsRUFDakI7QUF2RlA7TUEyRk0sNENBQTJDO01BQzNDLDJDQUEwQyxFQUszQztBQWpHTDtRQStGUSxnQkFBZSxFQUNoQjtBQWhHUDtNQXFHTSxXQUFVO01BRVYsNENBQTJDO01BQzNDLDJDQUEwQyxFQXNFM0M7QUE5S0w7UUEyR1EsZ0JBQWUsRUFDaEI7QUE1R1A7UUErR1EsY0FBYTtRQUNiLHVCQUFzQjtRQUN0Qix3QkFBdUI7UUFDdkIsc0JBQXFCLEVBMkR0QjtBQTdLUDtVQXNIVSxtQkFBa0I7VUFDbEIsc0JBQXFCO1VBQ3JCLHVCQUFzQixFQW9EdkI7QUE1S1Q7WUEySFksMEJBQXlCO1lBQ3pCLFlBQVc7WUFDWCxtQkFBa0I7WUFDbEIsOEJBQTZCO1lBQzdCLFVBQVM7WUFDVCxVQUFTO1lBQ1QsbUJBQWtCO1lBQ2xCLG9CQUFtQjtZQUNuQixrQkFBaUI7WUFDakIsMkJBQTBCLEVBSzNCO0FBeklYO2NBdUljLDBCQUF5QixFQUMxQjtBQXhJYjtZQTRJWSxZQUFXO1lBQ1gsbUJBQWtCO1lBQ2xCLHFCQUFvQixFQUNyQjtBQS9JWDtZQWtKWSxpQkFBZ0I7WUFDaEIsWUFBVztZQUNYLGtCQUFpQjtZQUNqQixlQUFjO1lBQ2QsYUFBWTtZQUNaLFNBQVE7WUFDUixrQkFBaUI7WUFDakIsMEJBQXdCLEVBQ3pCO0FBMUpYO1lBNkpZLFdBQVU7WUFDVixTQUFRO1lBQ1IsT0FBTTtZQUNOLFVBQVM7WUFDVCwyQkFBMEI7WUFDMUIsc0NBQW9DLEVBQ3JDO0FBbktYO1lBc0tZLDBCQUF3QixFQUt6QjtBQTNLWDtjQXlLYywwQkFBd0IsRUFDekI7QUFhYjtFQUNFO0lBRUksWUFBVyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0L3Jvb20tbGlzdC1pdGVtL3Jvb20tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIGNvbnRyb2wgc3R5bGVzICovXHJcbi8vIEJ1dHRvblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm90dG9tOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGhlaWdodDogMTIwJTtcclxuICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgyNWRlZyk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM1YmNhZmY7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGxlZnQ6IC0xMCU7XHJcbiAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmFuZ2Ugc2xpZGVyXHJcbiRyYW5nZS1oYW5kbGUtY29sb3I6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcbiRyYW5nZS1oYW5kbGUtc2l6ZTogMTZweCAhZGVmYXVsdDtcclxuJHJhbmdlLXRyYWNrLWNvbG9yOiAjZDdkY2RmICFkZWZhdWx0O1xyXG4kcmFuZ2UtbGFiZWwtY29sb3I6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcbiRyYW5nZS1sYWJlbC13aWR0aDogNjBweCAhZGVmYXVsdDtcclxuXHJcbi5jcm93ZGVkbmVzcy1yYW5nZSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogJHJhbmdlLXRyYWNrLWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGltZWdyZWVuIDAlLCB5ZWxsb3cgNTAlLCBvcmFuZ2VyZWQgMTAwJSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAkcmFuZ2UtaGFuZGxlLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAkcmFuZ2UtaGFuZGxlLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaXJlZm94IE92ZXJyaWRlc1xyXG46Oi1tb3otcmFuZ2UtdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICRyYW5nZS10cmFjay1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpbWVncmVlbiAwJSwgeWVsbG93IDUwJSwgb3JhbmdlcmVkIDEwMCUpO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLW91dGVyIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5yb29tLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1MHB4IDIwcHg7XHJcbiAgcGFkZGluZzogMmVtIDEuNWVtO1xyXG4gIHRyYW5zaXRpb246IC40cyB3aWR0aDtcclxuXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDNweCA0M3B4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IC0xcHggM3B4IDQzcHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggM3B4IDQzcHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG5cclxuICAvL0dyYWRpZW50XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MiwgMjU0LCAyNTUpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjUyLCAyNTQsIDI1NSwgMSkgODUlLCByZ2JhKDIxNSwgMjI4LCAyMzQsIDEpIDkzJSwgcmdiYSgxNzksIDIxNSwgMjI5LCAxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCg4NSUsIHJnYmEoMjUyLCAyNTQsIDI1NSwgMSkpLCBjb2xvci1zdG9wKDkzJSwgcmdiYSgyMTUsIDIyOCwgMjM0LCAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxNzksIDIxNSwgMjI5LCAxKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjUyLCAyNTQsIDI1NSwgMSkgODUlLCByZ2JhKDIxNSwgMjI4LCAyMzQsIDEpIDkzJSwgcmdiYSgxNzksIDIxNSwgMjI5LCAxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTIsIDI1NCwgMjU1LCAxKSA4NSUsIHJnYmEoMjE1LCAyMjgsIDIzNCwgMSkgOTMlLCByZ2JhKDE3OSwgMjE1LCAyMjksIDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTIsIDI1NCwgMjU1LCAxKSA4NSUsIHJnYmEoMjE1LCAyMjgsIDIzNCwgMSkgOTMlLCByZ2JhKDE3OSwgMjE1LCAyMjksIDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTIsIDI1NCwgMjU1LCAxKSA4NSUsIHJnYmEoMjE1LCAyMjgsIDIzNCwgMSkgOTMlLCByZ2JhKDE3OSwgMjE1LCAyMjksIDEpIDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmY2ZlZmYnLCBlbmRDb2xvcnN0cj0nI2IzZDdlNScsIEdyYWRpZW50VHlwZT0xKTtcclxuXHJcbiAgJi5jaGVjay1pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yb29tLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgPiBzZWN0aW9uIHtcclxuICAgICAgcGFkZGluZzogMCAxLjVlbTtcclxuICAgICAgd2lkdGg6IDI1cmVtO1xyXG5cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb29tLWRldGFpbHMge1xyXG4gICAgICBtaW4td2lkdGg6IDEwZW07XHJcblxyXG4gICAgICAucm9vbS1uYW1lIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9vbS1hZGRpdGlvbmFsLW5hbWUge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9vbS1zdGF0dXMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogLjNlbSAuM2VtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDEyLjVlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucm9vbS1mcmVlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb29tLW9jY3VwaWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb3VudGRvd24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm9vbS1mYWNpbGl0aWVzIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG5cclxuICAgICAgLnJvb20tZGV0YWlsLWluZm8ge1xyXG4gICAgICAgIG1hcmdpbjogMC40ZW0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ2hlY2staW5cclxuICAgIC5yb29tLWNvbnRyb2xzIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBtYXJnaW46IDAgMS41ZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb29tLXJlc2VydmF0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAvLyBDdXN0b20gZHJvcGRvd25cclxuICAgICAgICAuY3VzdG9tLWRyb3Bkb3duIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAyLjVlbSAuNWVtIC41ZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwLjAxcHg7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuXHJcbiAgICAgICAgICAgID4gb3B0aW9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5OTc4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjVCQ1wiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuNjI1ZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICByaWdodDogMS4yZW07XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtLjVlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzZWxlY3RbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yb29tLWFjdGlvbnMge1xyXG5cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAucm9vbS1jb250YWluZXIgLnJvb20taW5uZXItY29udGFpbmVyIHtcclxuICAgIC5yb29tLWRldGFpbHMgLnJvb20tc3RhdHVzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/list/room-list-item/room-list-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list/room-list-item/room-list-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoomListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomListItemComponent", function() { return RoomListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/Room */ "./src/utils/Room.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/room-firebase.service */ "./src/app/services/room-firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/RoomType */ "./src/utils/RoomType.ts");








var RoomListItemComponent = /** @class */ (function () {
    function RoomListItemComponent(roomService, router) {
        var _this = this;
        this.roomService = roomService;
        this.router = router;
        this.percentColors = [
            { pct: 0.0, color: { r: 0x32, g: 0xcd, b: 0x32 } },
            { pct: 0.5, color: { r: 0xf4, g: 0xd8, b: 0x00 } },
            { pct: 1.0, color: { r: 0xff, g: 0x45, b: 0x2b } }
        ];
        this.hasCrowdedness = false;
        this.hasOccupied = false;
        this._showsDetails = false;
        this._showsDetailsTimeoutId = 0;
        this.isPersonnel = true;
        this.showsRoomName = true;
        this.showsRoomStatus = true;
        this.showsRoomType = true;
        this.showsRoomCapacity = false;
        this.showsRoomBeamer = false;
        this.hideOtherRoomClicks = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countdownString = '';
        this.hoursSelected = 0;
        // Crowdedness model for debounce time
        this.crowdednessModelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Set crowdedness slider event
        this.crowdednessModelChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])())
            .subscribe(function (crowdedness) { return roomService.updateRoomCrowdedness(_this.room.id, +crowdedness); });
    }
    RoomListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this.room.type) {
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__["RoomType"].CAFETARIA:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__["RoomType"].STUDY_HALL:
                this.hasCrowdedness = true;
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__["RoomType"].AUDITORIUM:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__["RoomType"].CLASSROOM:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__["RoomType"].MEETING_ROOM:
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_7__["RoomType"].OFFICE:
                this.hasOccupied = true;
                break;
        }
        this.reservedUntil = new Date(this.room.reservedUntil);
        if (this.room.occupied) {
            this.countDown();
        }
        this.showsDetails.subscribe(function (newValue) {
            _this._showsDetails = newValue;
        });
    };
    RoomListItemComponent.prototype.getColorForPercentage = function (pct) {
        var i;
        for (i = 1; i < this.percentColors.length - 1; i++) {
            if (pct <= this.percentColors[i].pct) {
                break;
            }
        }
        var lower = this.percentColors[i - 1];
        var upper = this.percentColors[i];
        var range = upper.pct - lower.pct;
        var rangePct = (pct - lower.pct) / range;
        var pctLower = 1 - rangePct;
        var pctUpper = rangePct;
        var color = {
            r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
            g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
            b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
        // or output as hex if preferred
    };
    RoomListItemComponent.prototype.countDown = function () {
        var _this = this;
        setTimeout(function () {
            var now = new Date(Date.now());
            if (_this.reservedUntil > now) {
                var totalSeconds = (_this.reservedUntil.getTime() - now.getTime()) / 1000;
                var hours = Math.floor(totalSeconds / 60 / 60) % 24;
                var mins = Math.floor(totalSeconds / 60) % 60;
                var secs = Math.floor(totalSeconds) % 60;
                _this.countdownString = _this.padNumber(hours) + ':' + _this.padNumber(mins) + ':' + _this.padNumber(secs);
                _this.countDown();
            }
            else {
                _this.roomService.unreserveRoom(_this.room.id);
            }
        }, 1000);
    };
    RoomListItemComponent.prototype.padNumber = function (num) {
        return ((num < 10) ? '0' : '') + num;
    };
    RoomListItemComponent.prototype.onReserve = function () {
        if (this.hoursSelected > 0) {
            this.roomService.reserveRoom(this.room.id, +this.hoursSelected);
        }
    };
    RoomListItemComponent.prototype.changeCrowdedness = function (event) {
        this.room.crowdedness = event;
        this.crowdednessModelChanged.next(event);
    };
    RoomListItemComponent.prototype.viewDetails = function () {
        this.router.navigate(['/room/detail/' + this.room.id]);
    };
    RoomListItemComponent.prototype.onRoomClick = function () {
        var _this = this;
        clearTimeout(this._showsDetailsTimeoutId);
        this.hideOtherRoomClicks.emit();
        this._showsDetails = true;
        this._showsDetailsTimeoutId = setTimeout(function () { return _this._showsDetails = false; }, 5000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _utils_Room__WEBPACK_IMPORTED_MODULE_2__["Room"])
    ], RoomListItemComponent.prototype, "room", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomListItemComponent.prototype, "isPersonnel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomListItemComponent.prototype, "showsRoomName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomListItemComponent.prototype, "showsRoomStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomListItemComponent.prototype, "showsRoomType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomListItemComponent.prototype, "showsRoomCapacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomListItemComponent.prototype, "showsRoomBeamer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"])
    ], RoomListItemComponent.prototype, "showsDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RoomListItemComponent.prototype, "hideOtherRoomClicks", void 0);
    RoomListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-list-item',
            template: __webpack_require__(/*! ./room-list-item.component.html */ "./src/app/list/room-list-item/room-list-item.component.html"),
            styles: [__webpack_require__(/*! ./room-list-item.component.scss */ "./src/app/list/room-list-item/room-list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_room_firebase_service__WEBPACK_IMPORTED_MODULE_4__["RoomFirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RoomListItemComponent);
    return RoomListItemComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class='nav-container'>\n    <div>\n      <input id='slider1' name='slider1' type='checkbox'>\n      <label class='slide has-child' for='slider1'>\n        <span class='element'>Ca</span>\n        <span class='name'>Campus</span>\n      </label>\n      <div class='child-menu'>\n        <a *ngFor=\"let campus of campuses;\"\n          [routerLink]=\"'/list/campus/' + campus.slugUrl + '/floor/0'\">{{campus.name}}</a>\n      </div>\n    </div>\n    <div>\n      <input id='slider2' name='slider2' type='checkbox'>\n      <label class='slide has-child' for='slider2'>\n        <span class='element'>Fl</span>\n        <span class='name'>Floor</span>\n      </label>\n      <div class='child-menu'>\n        <a *ngFor=\"let floor of currentFloors\"\n          [routerLink]=\"['../',  floor.floorNumber]\">Floor {{floor.floorNumber}}</a>\n      </div>\n    </div>\n    <div>\n      <input id='slider3' name='slider3' type='checkbox'>\n      <label class='slide has-child' for='slider3'>\n        <span class='element'>La</span>\n        <span class='name'>Layout</span>\n      </label>\n      <div class='child-menu'>\n        <a [routerLink]=\"['/list']\">List</a>\n        <a *ngIf=\"screenWidth > 768\" [routerLink]=\"['/map']\">Floorplan</a>\n      </div>\n    </div>\n    <div>\n      <a class='slide' href='#'>\n        <span class='element'>Ab</span>\n        <span class='name'>About</span>\n      </a>\n    </div>\n    <div>\n      <a class='slide' href='#'>\n        <span class='element'>C</span>\n        <span class='name'>Contact</span>\n      </a>\n    </div>\n  </div>\n</nav>\n<!--https://codepen.io/MichaelArestad/pen/vbAxI-->\n<div *ngIf=\"!hideSettings\" class=\"side-panel a\">\n  <ul>\n    <li [style.visibility]=\"currentFloorNumber < this.currentFloorNumbers.sort().reverse()[0] ? 'visible' : 'hidden'\"><a [routerLink]=\"['../', currentFloorNumber + 1]\"><i class=\"mdi mdi-arrow-up-drop-circle\"></i><span class=\"menu-item\">Floor up</span></a></li>\n    <li [style.visibility]=\"currentFloorNumber > this.currentFloorNumbers.sort()[0] ? 'visible' : 'hidden'\"><a [routerLink]=\"['../', currentFloorNumber - 1]\"><i class=\"mdi mdi-arrow-down-drop-circle\"></i><span class=\"menu-item\">Floor down</span></a></li>\n    <li>\n      <a><i class=\"mdi mdi-tune\"></i></a>\n      <ul>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb1\" type=\"checkbox\" [ngModel]=\"showsAll\" (ngModelChange)=\"onShowAll($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"Hide all\" data-tg-on=\"Show all\" for=\"cb1\"></label>\n        </a></li>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb2\" type=\"checkbox\" [ngModel]=\"isPersonnel\" (ngModelChange)=\"onChangePersonnel($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"User\" data-tg-on=\"Personnel\" for=\"cb2\"></label>\n        </a></li>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb3\" type=\"checkbox\" [ngModel]=\"showsRoomName\" (ngModelChange)=\"onShowRoomName($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"Hide name\" data-tg-on=\"Show name\" for=\"cb3\"></label>\n        </a></li>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb4\" type=\"checkbox\" [ngModel]=\"showsRoomStatus\" (ngModelChange)=\"onShowRoomStatus($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"Hide status\" data-tg-on=\"Show status\" for=\"cb4\"></label>\n        </a></li>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb5\" type=\"checkbox\" [ngModel]=\"showsRoomType\" (ngModelChange)=\"onShowRoomType($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"Hide type\" data-tg-on=\"Show type\" for=\"cb5\"></label>\n        </a></li>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb6\" type=\"checkbox\" [ngModel]=\"showsRoomCapacity\" (ngModelChange)=\"onShowRoomCapacity($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"Hide capacity\" data-tg-on=\"Show capacity\" for=\"cb6\"></label>\n        </a></li>\n        <li><a>\n          <input class=\"tgl tgl-skewed\" id=\"cb7\" type=\"checkbox\" [ngModel]=\"showsRoomBeamer\" (ngModelChange)=\"onShowRoomBeamer($event)\"/>\n          <label class=\"tgl-btn\" data-tg-off=\"Hide beamer\" data-tg-on=\"Show beamer\" for=\"cb7\"></label>\n        </a></li>\n      </ul>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #393939; }\n\nnav {\n  display: table;\n  position: relative;\n  table-layout: fixed;\n  width: 100%; }\n\nnav input {\n    display: none; }\n\nnav label {\n    margin: 0; }\n\nnav div.nav-container {\n    display: table-row; }\n\nnav div.nav-container > div {\n      display: table-cell; }\n\nnav div.nav-container > div:nth-of-type(5n+1) .slide, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+1) a {\n      border-color: #8cc63f; }\n\nnav div.nav-container > div:nth-of-type(5n+1) .slide:hover, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+1) a:hover {\n      color: #567b24; }\n\nnav div.nav-container > div:nth-of-type(5n+1) .slide ~ .child-menu, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+1) a ~ .child-menu {\n      background-color: #a4d266; }\n\nnav div.nav-container > div:nth-of-type(5n+1) input:checked ~ label, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+1) .slide.active ~ label {\n      color: #8cc63f; }\n\nnav div.nav-container > div:nth-of-type(5n+2) .slide, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+2) a {\n      border-color: #ef3724; }\n\nnav div.nav-container > div:nth-of-type(5n+2) .slide ~ .child-menu, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+2) a ~ .child-menu {\n      background-color: #f26254; }\n\nnav div.nav-container > div:nth-of-type(5n+2) .slide:hover, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+2) a:hover {\n      color: #a11a0c; }\n\nnav div.nav-container > div:nth-of-type(5n+2) input:checked ~ label, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+2) .slide.active ~ label {\n      color: #ef3724; }\n\nnav div.nav-container > div:nth-of-type(5n+3) .slide, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+3) a {\n      border-color: #ffa61a; }\n\nnav div.nav-container > div:nth-of-type(5n+3) .slide:hover, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+3) a:hover {\n      color: #b36d00; }\n\nnav div.nav-container > div:nth-of-type(5n+3) .slide ~ .child-menu, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+3) a ~ .child-menu {\n      background-color: #ffba4d; }\n\nnav div.nav-container > div:nth-of-type(5n+3) input:checked ~ label, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+3) .slide.active ~ label {\n      color: #ffa61a; }\n\nnav div.nav-container > div:nth-of-type(5n+4) .slide, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+4) a {\n      border-color: #1ab1ff; }\n\nnav div.nav-container > div:nth-of-type(5n+4) .slide:hover, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+4) a:hover {\n      color: #0076b3; }\n\nnav div.nav-container > div:nth-of-type(5n+4) .slide ~ .child-menu, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+4) a ~ .child-menu {\n      background-color: #4dc2ff; }\n\nnav div.nav-container > div:nth-of-type(5n+4) input:checked ~ label, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+4) .slide.active ~ label {\n      color: #1ab1ff; }\n\nnav div.nav-container > div:nth-of-type(5n+5) .slide, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+5) a {\n      border-color: #FC1DCF; }\n\nnav div.nav-container > div:nth-of-type(5n+5) .slide:hover, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+5) a:hover {\n      color: #b1028d; }\n\nnav div.nav-container > div:nth-of-type(5n+5) .slide ~ .child-menu, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+5) a ~ .child-menu {\n      background-color: #fd4fda; }\n\nnav div.nav-container > div:nth-of-type(5n+5) input:checked ~ label, nav div.nav-container nav div.nav-container > div:nth-of-type(5n+5) .slide.active ~ label {\n      color: #FC1DCF; }\n\nnav a, nav label {\n    transition-property: color;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in; }\n\nnav .slide {\n    padding: 10px 10px;\n    font-size: 1em;\n    display: block;\n    color: #393939;\n    border-top: 4px solid transparent;\n    position: relative;\n    transition-property: border-width, color;\n    transition-duration: 0.1s, 0.2s;\n    transition-timing-function: ease-in;\n    transition-delay: 0.2s, 0s; }\n\nnav .slide .element {\n      font-size: 1.25em;\n      font-weight: 600;\n      font-style: normal;\n      display: block;\n      line-height: 1; }\n\nnav .slide .name {\n      font-size: 0.6875em;\n      position: relative; }\n\nnav .has-child .name:after {\n    content: \"\";\n    width: 10px;\n    height: 4px;\n    display: block;\n    position: absolute;\n    bottom: -9px;\n    left: 1px;\n    background-repeat: no-repeat;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-duration: 0.5s;\n    transition-timing-function: ease-in;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%; }\n\nnav .child-menu {\n    display: block;\n    position: absolute;\n    max-height: 0;\n    overflow: hidden;\n    background-color: #393939;\n    width: 100%;\n    top: 65px;\n    left: 0;\n    z-index: 5;\n    transition-property: max-height;\n    transition-duration: 0.5s;\n    transition-timing-function: ease-in; }\n\nnav .child-menu a {\n      color: white;\n      display: inline-block;\n      padding: 15px 30px 15px 10px;\n      font-size: 0.9375em; }\n\nnav input:hover ~ .child-menu {\n    max-height: 200px;\n    transition-property: max-height;\n    transition-duration: 0.5s;\n    transition-timing-function: ease-in; }\n\nnav input:hover ~ .has-child .name:after {\n    -webkit-transform: rotateX(180deg);\n    transform: rotateX(180deg); }\n\nnav .child-menu:hover {\n    max-height: 200px;\n    transition-property: max-height;\n    transition-duration: 0.5s;\n    transition-timing-function: ease-in; }\n\n.mdi:before {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  text-align: center; }\n\n.side-panel {\n  position: fixed;\n  padding: 30px 0; }\n\n.side-panel ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n\n.side-panel > ul > li a {\n    width: 100%;\n    padding-bottom: 13px; }\n\n.side-panel > ul ul {\n    width: 200px;\n    padding-left: 10px;\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 100%; }\n\n.side-panel > ul ul li:first-child {\n      border-top-left-radius: 3px;\n      border-top-right-radius: 3px;\n      border-right-color: #efefef; }\n\n.side-panel > ul ul li:first-child:before {\n        position: absolute;\n        content: \"\";\n        width: 0;\n        height: 0;\n        top: 50%;\n        right: 100%;\n        margin-top: -5px;\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        border-right: 5px solid #efefef;\n        border-right-color: inherit; }\n\n.side-panel > ul ul li:first-child:hover {\n        border-right-color: #fff; }\n\n.side-panel > ul ul li:last-child {\n      border-bottom-left-radius: 3px;\n      border-bottom-right-radius: 3px; }\n\n.side-panel li {\n    position: relative;\n    background: #efefef; }\n\n.side-panel li:hover {\n      background: #fff; }\n\n.side-panel li:hover > ul {\n        display: block; }\n\n.side-panel a {\n    display: inline-block;\n    padding: 8px 15px;\n    cursor: pointer; }\n\n.side-panel > ul {\n    width: 150px;\n    -webkit-transform: translateX(-110px);\n            transform: translateX(-110px); }\n\n.side-panel .mdi {\n    display: inline-block;\n    position: relative;\n    left: 105px; }\n\n.side-panel .menu-item {\n    padding: 8px 13px;\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    z-index: -1;\n    background: #efefef;\n    border-radius: 3px;\n    border-right-color: #efefef;\n    color: #393939;\n    font-size: 11px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    white-space: nowrap;\n    -webkit-transform: translate(-100%, -50%) translateZ(0);\n            transform: translate(-100%, -50%) translateZ(0);\n    transition: all .3s ease-in-out; }\n\n.side-panel .menu-item:before {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    top: 50%;\n    right: 100%;\n    margin-top: -5px;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid #efefef;\n    border-right-color: inherit; }\n\n.side-panel li:hover .menu-item {\n    cursor: default;\n    -webkit-transform: translate(10px, -50%);\n            transform: translate(10px, -50%); }\n\n.side-panel > ul ul {\n    display: block;\n    opacity: 0;\n    -webkit-transform: translate(-100%);\n            transform: translate(-100%);\n    transition: all .3s ease-in-out;\n    z-index: -1; }\n\n.side-panel li:hover ul {\n    opacity: 1;\n    -webkit-transform: translate(0);\n            transform: translate(0); }\n\n.tgl {\n  display: none; }\n\n.tgl, .tgl:after, .tgl:before,\n  .tgl *,\n  .tgl *:after,\n  .tgl *:before,\n  .tgl + .tgl-btn {\n    box-sizing: border-box; }\n\n.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection,\n    .tgl *::-moz-selection,\n    .tgl *:after::-moz-selection,\n    .tgl *:before::-moz-selection,\n    .tgl + .tgl-btn::-moz-selection {\n      background: none; }\n\n.tgl::selection, .tgl:after::selection, .tgl:before::selection,\n    .tgl *::selection,\n    .tgl *:after::selection,\n    .tgl *:before::selection,\n    .tgl + .tgl-btn::selection {\n      background: none; }\n\n.tgl + .tgl-btn {\n    outline: 0;\n    display: block;\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      position: relative;\n      display: block;\n      content: \"\";\n      width: 50%;\n      height: 100%; }\n\n.tgl + .tgl-btn:after {\n      left: 0; }\n\n.tgl + .tgl-btn:before {\n      display: none; }\n\n.tgl:checked + .tgl-btn:after {\n    left: 50%; }\n\n.tgl-skewed + .tgl-btn {\n  overflow: hidden;\n  -webkit-transform: skew(-10deg);\n          transform: skew(-10deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all .2s ease;\n  font-family: sans-serif;\n  background: #888; }\n\n.tgl-skewed + .tgl-btn:after, .tgl-skewed + .tgl-btn:before {\n    -webkit-transform: skew(10deg);\n            transform: skew(10deg);\n    display: inline-block;\n    transition: all .2s ease;\n    width: 100%;\n    text-align: center;\n    position: absolute;\n    line-height: 2em;\n    font-weight: bold;\n    color: #fff;\n    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4); }\n\n.tgl-skewed + .tgl-btn:after {\n    left: 100%;\n    content: attr(data-tg-on); }\n\n.tgl-skewed + .tgl-btn:before {\n    left: 0;\n    content: attr(data-tg-off); }\n\n.tgl-skewed + .tgl-btn:active {\n    background: #888; }\n\n.tgl-skewed + .tgl-btn:active:before {\n      left: -10%; }\n\n.tgl-skewed:checked + .tgl-btn {\n  background: #86d993; }\n\n.tgl-skewed:checked + .tgl-btn:before {\n    left: -100%; }\n\n.tgl-skewed:checked + .tgl-btn:after {\n    left: 0; }\n\n.tgl-skewed:checked + .tgl-btn:active:after {\n    left: 10%; }\n\n@media (min-width: 768px) {\n  nav {\n    width: unset; }\n    nav div.nav-container {\n      display: block; }\n      nav div.nav-container > div {\n        display: block;\n        margin: 5px 0; }\n      nav div.nav-container > div:hover .slide {\n        border-left-width: 40px;\n        transition-delay: 0ms; }\n    nav .slide {\n      display: block;\n      width: auto;\n      border-left: solid 4px #393939;\n      border-top: none; }\n      nav .slide .element {\n        line-height: 1; }\n    nav .child-menu {\n      display: block;\n      position: relative;\n      top: 0;\n      background-color: transparent !important;\n      margin-left: 40px;\n      width: auto;\n      max-height: 0;\n      overflow: hidden;\n      border-top: none; }\n      nav .child-menu a {\n        color: #393939;\n        display: block;\n        padding: 3px 0 3px 10px;\n        font-size: 0.8125em;\n        white-space: nowrap; }\n    nav input:checked ~ div.child-menu {\n      max-height: 300px; }\n    nav input:checked ~ .slide {\n      border-width: 40px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcU2Nob29sXFxTY2hvb2wgMjAxOC0yMDE5XFxVc2VyIEludGVyZmFjZXNcXENhbXB1cy9zcmNcXGFwcFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixZQUFXLEVBeVBaOztBQTdQRDtJQU9JLGNBQWEsRUFDZDs7QUFSSDtJQVdJLFVBQVMsRUFDVjs7QUFaSDtJQWVJLG1CQUFrQixFQXFGbkI7O0FBcEdIO01Ba0JNLG9CQUFtQixFQUNwQjs7QUFuQkw7TUFzQk0sc0JBQXFCLEVBQ3RCOztBQXZCTDtNQTBCTSxlQUFjLEVBQ2Y7O0FBM0JMO01BOEJNLDBCQUF5QixFQUMxQjs7QUEvQkw7TUFrQ00sZUFBYyxFQUNmOztBQW5DTDtNQXNDTSxzQkFBcUIsRUFDdEI7O0FBdkNMO01BMENNLDBCQUF5QixFQUMxQjs7QUEzQ0w7TUE4Q00sZUFBYyxFQUNmOztBQS9DTDtNQWtETSxlQUFjLEVBQ2Y7O0FBbkRMO01Bc0RNLHNCQUFxQixFQUN0Qjs7QUF2REw7TUEwRE0sZUFBYyxFQUNmOztBQTNETDtNQThETSwwQkFBeUIsRUFDMUI7O0FBL0RMO01Ba0VNLGVBQWMsRUFDZjs7QUFuRUw7TUFzRU0sc0JBQXFCLEVBQ3RCOztBQXZFTDtNQTBFTSxlQUFjLEVBQ2Y7O0FBM0VMO01BOEVNLDBCQUF5QixFQUMxQjs7QUEvRUw7TUFrRk0sZUFBYyxFQUNmOztBQW5GTDtNQXNGTSxzQkFBcUIsRUFDdEI7O0FBdkZMO01BMEZNLGVBQWMsRUFDZjs7QUEzRkw7TUE4Rk0sMEJBQXlCLEVBQzFCOztBQS9GTDtNQWtHTSxlQUFjLEVBQ2Y7O0FBbkdMO0lBMEdJLDJCQUEwQjtJQUkxQiwwQkFBeUI7SUFJekIsb0NBQW1DLEVBQ3BDOztBQW5ISDtJQXNISSxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGVBQWM7SUFDZCxlQUFjO0lBQ2Qsa0NBQWlDO0lBQ2pDLG1CQUFrQjtJQUlsQix5Q0FBd0M7SUFJeEMsZ0NBQStCO0lBSS9CLG9DQUFtQztJQUluQywyQkFBMEIsRUFjM0I7O0FBekpIO01BOElNLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCxlQUFjLEVBQ2Y7O0FBbkpMO01Bc0pNLG9CQUFtQjtNQUNuQixtQkFBa0IsRUFDbkI7O0FBeEpMO0lBNEpJLFlBQVc7SUFDWCxZQUFXO0lBQ1gsWUFBVztJQUVYLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFVBQVM7SUFDVCw2QkFBNEI7SUFJNUIsdUNBQThCO0lBQTlCLCtCQUE4QjtJQUE5QixrREFBOEI7SUFJOUIsMEJBQXlCO0lBSXpCLG9DQUFtQztJQUduQyxrQ0FBaUM7SUFDakMsMEJBQXlCLEVBQzFCOztBQXJMSDtJQXdMSSxlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsMEJBQXlCO0lBQ3pCLFlBQVc7SUFDWCxVQUFTO0lBQ1QsUUFBTztJQUNQLFdBQVU7SUFJVixnQ0FBK0I7SUFJL0IsMEJBQXlCO0lBSXpCLG9DQUFtQyxFQVFwQzs7QUFwTkg7TUErTU0sYUFBWTtNQUNaLHNCQUFxQjtNQUNyQiw2QkFBNEI7TUFDNUIsb0JBQW1CLEVBQ3BCOztBQW5OTDtJQXdOTSxrQkFBaUI7SUFJakIsZ0NBQStCO0lBSS9CLDBCQUF5QjtJQUl6QixvQ0FBbUMsRUFDcEM7O0FBck9MO0lBeU9NLG1DQUFrQztJQUNsQywyQkFBMEIsRUFDM0I7O0FBM09MO0lBK09JLGtCQUFpQjtJQUlqQixnQ0FBK0I7SUFJL0IsMEJBQXlCO0lBSXpCLG9DQUFtQyxFQUNwQzs7QUFJSDtFQUNFLHNCQUFxQjtFQUNyQixZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLGdCQUFlLEVBeUloQjs7QUEzSUQ7SUFLSSxVQUFTO0lBQ1QsV0FBVTtJQUNWLGlCQUFnQixFQUNqQjs7QUFSSDtJQWFRLFlBQVc7SUFDWCxxQkFBb0IsRUFDckI7O0FBZlA7SUFtQk0sYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixXQUFVLEVBZ0NYOztBQXhETDtNQTRCVSw0QkFBMkI7TUFDM0IsNkJBQTRCO01BQzVCLDRCQUEyQixFQW1CNUI7O0FBakRUO1FBaUNZLG1CQUFrQjtRQUNsQixZQUFXO1FBQ1gsU0FBUTtRQUNSLFVBQVM7UUFDVCxTQUFRO1FBQ1IsWUFBVztRQUNYLGlCQUFvQjtRQUNwQixrQ0FBaUM7UUFDakMscUNBQW9DO1FBQ3BDLGdDQUErQjtRQUMvQiw0QkFBMkIsRUFDNUI7O0FBNUNYO1FBK0NZLHlCQUF3QixFQUN6Qjs7QUFoRFg7TUFvRFUsK0JBQThCO01BQzlCLGdDQUErQixFQUNoQzs7QUF0RFQ7SUE0REksbUJBQWtCO0lBQ2xCLG9CQUFtQixFQVNwQjs7QUF0RUg7TUFnRU0saUJBQWdCLEVBS2pCOztBQXJFTDtRQW1FUSxlQUFjLEVBQ2Y7O0FBcEVQO0lBeUVJLHNCQUFxQjtJQUNyQixrQkFBaUI7SUFDakIsZ0JBQWUsRUFDaEI7O0FBNUVIO0lBK0VJLGFBQVk7SUFDWixzQ0FBNkI7WUFBN0IsOEJBQTZCLEVBQzlCOztBQWpGSDtJQW9GSSxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFlBQVcsRUFDWjs7QUF2Rkg7SUEwRkksa0JBQWlCO0lBQ2pCLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFdBQVU7SUFDVixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQiw0QkFBMkI7SUFDM0IsZUFBYztJQUNkLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsd0RBQStDO1lBQS9DLGdEQUErQztJQUMvQyxnQ0FBK0IsRUFDaEM7O0FBMUdIO0lBNkdJLG1CQUFrQjtJQUNsQixZQUFXO0lBQ1gsU0FBUTtJQUNSLFVBQVM7SUFDVCxTQUFRO0lBQ1IsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixrQ0FBaUM7SUFDakMscUNBQW9DO0lBQ3BDLGdDQUErQjtJQUMvQiw0QkFBMkIsRUFDNUI7O0FBeEhIO0lBMkhJLGdCQUFlO0lBQ2YseUNBQWdDO1lBQWhDLGlDQUFnQyxFQUNqQzs7QUE3SEg7SUFnSUksZUFBYztJQUNkLFdBQVU7SUFDVixvQ0FBMkI7WUFBM0IsNEJBQTJCO0lBQzNCLGdDQUErQjtJQUMvQixZQUFXLEVBQ1o7O0FBcklIO0lBd0lJLFdBQVU7SUFDVixnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQ3hCOztBQUdIO0VBQ0UsY0FBYSxFQTRDZDs7QUE3Q0Q7Ozs7O0lBV0ksdUJBQXNCLEVBSXZCOztBQWZIOzs7OztNQWFNLGlCQUFnQixFQUNqQjs7QUFkTDs7Ozs7TUFhTSxpQkFBZ0IsRUFDakI7O0FBZEw7SUFrQkksV0FBVTtJQUNWLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsMEJBQWlCO09BQWpCLHVCQUFpQjtRQUFqQixzQkFBaUI7WUFBakIsa0JBQWlCLEVBaUJsQjs7QUF4Q0g7TUEwQk0sbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCxZQUFXO01BQ1gsV0FBVTtNQUNWLGFBQVksRUFDYjs7QUEvQkw7TUFrQ00sUUFBTyxFQUNSOztBQW5DTDtNQXNDTSxjQUFhLEVBQ2Q7O0FBdkNMO0lBMkNJLFVBQVMsRUFDVjs7QUFHSDtFQUVJLGlCQUFnQjtFQUNoQixnQ0FBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLG9DQUEyQjtVQUEzQiw0QkFBMkI7RUFDM0IseUJBQXdCO0VBQ3hCLHdCQUF1QjtFQUN2QixpQkFBZ0IsRUErQmpCOztBQXRDSDtJQVVNLCtCQUFzQjtZQUF0Qix1QkFBc0I7SUFDdEIsc0JBQXFCO0lBQ3JCLHlCQUF3QjtJQUN4QixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCx3Q0FBbUMsRUFDcEM7O0FBcEJMO0lBdUJNLFdBQVU7SUFDViwwQkFBeUIsRUFDMUI7O0FBekJMO0lBNEJNLFFBQU87SUFDUCwyQkFBMEIsRUFDM0I7O0FBOUJMO0lBaUNNLGlCQUFnQixFQUlqQjs7QUFyQ0w7TUFtQ1EsV0FBVSxFQUNYOztBQXBDUDtFQXlDSSxvQkFBbUIsRUFZcEI7O0FBckRIO0lBMkNNLFlBQVcsRUFDWjs7QUE1Q0w7SUErQ00sUUFBTyxFQUNSOztBQWhETDtJQW1ETSxVQUFTLEVBQ1Y7O0FBSUw7RUFDRTtJQUNFLGFBQVksRUF3RGI7SUF6REQ7TUFJSSxlQUFjLEVBV2Y7TUFmSDtRQU9NLGVBQWM7UUFDZCxjQUFhLEVBQ2Q7TUFUTDtRQVlNLHdCQUF1QjtRQUN2QixzQkFBcUIsRUFDdEI7SUFkTDtNQWtCSSxlQUFjO01BQ2QsWUFBVztNQUNYLCtCQUE4QjtNQUM5QixpQkFBZ0IsRUFLakI7TUExQkg7UUF3Qk0sZUFBYyxFQUNmO0lBekJMO01BNkJJLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsT0FBTTtNQUNOLHlDQUF3QztNQUN4QyxrQkFBaUI7TUFDakIsWUFBVztNQUNYLGNBQWE7TUFDYixpQkFBZ0I7TUFDaEIsaUJBQWdCLEVBU2pCO01BOUNIO1FBd0NNLGVBQWM7UUFDZCxlQUFjO1FBQ2Qsd0JBQXVCO1FBQ3ZCLG9CQUFtQjtRQUNuQixvQkFBbUIsRUFDcEI7SUE3Q0w7TUFrRE0sa0JBQWlCLEVBQ2xCO0lBbkRMO01Bc0RNLG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMzkzOTM5O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgZGl2Lm5hdi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtcm93O1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1bisxKSAuc2xpZGUsIG5hdiBkaXYubmF2LWNvbnRhaW5lciA+IGRpdjpudGgtb2YtdHlwZSg1bisxKSBhIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjOGNjNjNmO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2Om50aC1vZi10eXBlKDVuKzEpIC5zbGlkZTpob3ZlciwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzEpIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzU2N2IyNDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1bisxKSAuc2xpZGUgfiAuY2hpbGQtbWVudSwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzEpIGEgfiAuY2hpbGQtbWVudSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNGQyNjY7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMSkgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMSkgLnNsaWRlLmFjdGl2ZSB+IGxhYmVsIHtcclxuICAgICAgY29sb3I6ICM4Y2M2M2Y7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMikgLnNsaWRlLCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMikgYSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2VmMzcyNDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1bisyKSAuc2xpZGUgfiAuY2hpbGQtbWVudSwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzIpIGEgfiAuY2hpbGQtbWVudSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjYyNTQ7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMikgLnNsaWRlOmhvdmVyLCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMikgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjYTExYTBjO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2Om50aC1vZi10eXBlKDVuKzIpIGlucHV0OmNoZWNrZWQgfiBsYWJlbCwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzIpIC5zbGlkZS5hY3RpdmUgfiBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjZWYzNzI0O1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2Om50aC1vZi10eXBlKDVuKzMpIC5zbGlkZSwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzMpIGEge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNmZmE2MWE7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMykgLnNsaWRlOmhvdmVyLCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMykgYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjYjM2ZDAwO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2Om50aC1vZi10eXBlKDVuKzMpIC5zbGlkZSB+IC5jaGlsZC1tZW51LCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rMykgYSB+IC5jaGlsZC1tZW51IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmE0ZDtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1biszKSBpbnB1dDpjaGVja2VkIH4gbGFiZWwsIG5hdiBkaXYubmF2LWNvbnRhaW5lciA+IGRpdjpudGgtb2YtdHlwZSg1biszKSAuc2xpZGUuYWN0aXZlIH4gbGFiZWwge1xyXG4gICAgICBjb2xvcjogI2ZmYTYxYTtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1bis0KSAuc2xpZGUsIG5hdiBkaXYubmF2LWNvbnRhaW5lciA+IGRpdjpudGgtb2YtdHlwZSg1bis0KSBhIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMWFiMWZmO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2Om50aC1vZi10eXBlKDVuKzQpIC5zbGlkZTpob3ZlciwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzQpIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzAwNzZiMztcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1bis0KSAuc2xpZGUgfiAuY2hpbGQtbWVudSwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzQpIGEgfiAuY2hpbGQtbWVudSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGMyZmY7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rNCkgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rNCkgLnNsaWRlLmFjdGl2ZSB+IGxhYmVsIHtcclxuICAgICAgY29sb3I6ICMxYWIxZmY7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rNSkgLnNsaWRlLCBuYXYgZGl2Lm5hdi1jb250YWluZXIgPiBkaXY6bnRoLW9mLXR5cGUoNW4rNSkgYSB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZDMURDRjtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdjpudGgtb2YtdHlwZSg1bis1KSAuc2xpZGU6aG92ZXIsIG5hdiBkaXYubmF2LWNvbnRhaW5lciA+IGRpdjpudGgtb2YtdHlwZSg1bis1KSBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNiMTAyOGQ7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXY6bnRoLW9mLXR5cGUoNW4rNSkgLnNsaWRlIH4gLmNoaWxkLW1lbnUsIG5hdiBkaXYubmF2LWNvbnRhaW5lciA+IGRpdjpudGgtb2YtdHlwZSg1bis1KSBhIH4gLmNoaWxkLW1lbnUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ0ZmRhO1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2Om50aC1vZi10eXBlKDVuKzUpIGlucHV0OmNoZWNrZWQgfiBsYWJlbCwgbmF2IGRpdi5uYXYtY29udGFpbmVyID4gZGl2Om50aC1vZi10eXBlKDVuKzUpIC5zbGlkZS5hY3RpdmUgfiBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjRkMxRENGO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSwgbGFiZWwge1xyXG4gICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAuc2xpZGUge1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMzkzOTM5O1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItd2lkdGgsIGNvbG9yO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLXdpZHRoLCBjb2xvcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLXdpZHRoLCBjb2xvcjtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci13aWR0aCwgY29sb3I7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMXMsIDAuMnM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzLCAwLjJzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzLCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcywgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4ycywgMHM7XHJcbiAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjJzLCAwcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4ycywgMHM7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzLCAwcztcclxuXHJcbiAgICAuZWxlbWVudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42ODc1ZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oYXMtY2hpbGQgLm5hbWU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly93d3cuZWxlbWVudGFsLXNoaWZ0LmNvbS9yZW1vdGUtYXNzZXRzL2Rvd24tYXJyb3cuc3ZnXCIpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC05cHg7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiAtbW96LXRyYW5zZm9ybTtcclxuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IC1vLXRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICB9XHJcblxyXG4gIC5jaGlsZC1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDY1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcclxuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IG1heC1oZWlnaHQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG1heC1oZWlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXgtaGVpZ2h0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOTM3NWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQ6aG92ZXIge1xyXG4gICAgfiAuY2hpbGQtbWVudSB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IG1heC1oZWlnaHQ7XHJcbiAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IG1heC1oZWlnaHQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcclxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcclxuICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIH1cclxuXHJcbiAgICB+IC5oYXMtY2hpbGQgLm5hbWU6YWZ0ZXIge1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGlsZC1tZW51OmhvdmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXgtaGVpZ2h0O1xyXG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1heC1oZWlnaHQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNpZGViYXJcclxuLm1kaTpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZGUtcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgPiB1bCB7XHJcbiAgICA+IGxpIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMTAwJTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlZmVmZWY7XHJcblxyXG4gICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4ICogLTE7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbiAgICAgID4gdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgPiB1bCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExMHB4KTtcclxuICB9XHJcblxyXG4gIC5tZGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTA1cHg7XHJcbiAgfVxyXG5cclxuICAubWVudS1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDhweCAxM3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5tZW51LWl0ZW06YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2VmZWZlZjtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIGxpOmhvdmVyIC5tZW51LWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICA+IHVsIHVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcblxyXG4gIGxpOmhvdmVyIHVsIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi50Z2wge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIC8vIGFkZCBkZWZhdWx0IGJveC1zaXppbmcgZm9yIHRoaXMgc2NvcGVcclxuICAmLFxyXG4gICY6YWZ0ZXIsXHJcbiAgJjpiZWZvcmUsXHJcbiAgJiAqLFxyXG4gICYgKjphZnRlcixcclxuICAmICo6YmVmb3JlLFxyXG4gICYgKyAudGdsLWJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgJjo6c2VsZWN0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICsgLnRnbC1idG4ge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICY6YWZ0ZXIsXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmNoZWNrZWQgKyAudGdsLWJ0bjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGdsLXNrZXdlZCB7XHJcbiAgKyAudGdsLWJ0biB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KC0xMGRlZyk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgICAmOmFmdGVyLFxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcpO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsLjQpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGctb24pO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgY29udGVudDogYXR0cihkYXRhLXRnLW9mZik7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogLTEwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpjaGVja2VkICsgLnRnbC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzg2ZDk5MztcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmU6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBuYXYge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG5cclxuICAgIGRpdi5uYXYtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgPiBkaXY6aG92ZXIgLnNsaWRlIHtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogNDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwbXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA0cHggIzM5MzkzOTtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuXHJcbiAgICAgIC5lbGVtZW50IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsZC1tZW51IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzM5MzkzOTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAzcHggMCAzcHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNWVtO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dDpjaGVja2VkIHtcclxuICAgICAgfiBkaXYuY2hpbGQtbWVudSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIH4gLnNsaWRlIHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Campus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Campus */ "./src/utils/Campus.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.hideSettings = false;
        this.changePersonnel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showRoomName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showRoomStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showRoomType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showRoomCapacity = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showRoomBeamer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showsAll = false;
        this.isPersonnel = false;
        this.showsRoomName = true;
        this.showsRoomStatus = true;
        this.showsRoomType = true;
        this.showsRoomCapacity = false;
        this.showsRoomBeamer = false;
        this.screenWidth = window.innerWidth;
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('isPersonnel') !== null) {
            this.onChangePersonnel(JSON.parse(localStorage.getItem('isPersonnel')));
        }
        if (localStorage.getItem('showsRoomName') !== null) {
            this.onShowRoomName(JSON.parse(localStorage.getItem('showsRoomName')));
        }
        if (localStorage.getItem('showsRoomStatus') !== null) {
            this.onShowRoomStatus(JSON.parse(localStorage.getItem('showsRoomStatus')));
        }
        if (localStorage.getItem('showsRoomType') !== null) {
            this.onShowRoomType(JSON.parse(localStorage.getItem('showsRoomType')));
        }
        if (localStorage.getItem('showsRoomCapacity') !== null) {
            this.onShowRoomCapacity(JSON.parse(localStorage.getItem('showsRoomCapacity')));
        }
        if (localStorage.getItem('showsRoomBeamer') !== null) {
            this.onShowRoomBeamer(JSON.parse(localStorage.getItem('showsRoomBeamer')));
        }
    };
    MenuComponent.prototype.onShowAll = function (event) {
        this.showsAll = event;
        this.isPersonnel = this.showsAll;
        localStorage.setItem('isPersonnel', "" + this.showsAll);
        this.showsRoomName = this.showsAll;
        localStorage.setItem('showsRoomName', "" + this.showsAll);
        this.showsRoomStatus = this.showsAll;
        localStorage.setItem('showsRoomStatus', "" + this.showsAll);
        this.showsRoomType = this.showsAll;
        localStorage.setItem('showsRoomType', "" + this.showsAll);
        this.showsRoomCapacity = this.showsAll;
        localStorage.setItem('showsRoomCapacity', "" + this.showsAll);
        this.showsRoomBeamer = this.showsAll;
        localStorage.setItem('showsRoomBeamer', "" + this.showsAll);
        this.changePersonnel.emit(this.isPersonnel);
        this.showRoomName.emit(this.showsRoomName);
        this.showRoomStatus.emit(this.showsRoomStatus);
        this.showRoomType.emit(this.showsRoomType);
        this.showRoomCapacity.emit(this.showsRoomCapacity);
        this.showRoomBeamer.emit(this.showsRoomBeamer);
    };
    MenuComponent.prototype.checkShowHideAll = function () {
        return (this.isPersonnel &&
            this.showsRoomName &&
            this.showsRoomStatus &&
            this.showsRoomType &&
            this.showsRoomCapacity &&
            this.showsRoomBeamer);
    };
    MenuComponent.prototype.onChangePersonnel = function (event) {
        this.isPersonnel = event;
        localStorage.setItem('isPersonnel', "" + this.isPersonnel);
        this.changePersonnel.emit(this.isPersonnel);
        this.showsAll = this.checkShowHideAll();
    };
    MenuComponent.prototype.onShowRoomName = function (event) {
        this.showsRoomName = event;
        localStorage.setItem('showsRoomName', "" + this.showsRoomName);
        this.showRoomName.emit(this.showsRoomName);
        this.showsAll = this.checkShowHideAll();
    };
    MenuComponent.prototype.onShowRoomStatus = function (event) {
        this.showsRoomStatus = event;
        localStorage.setItem('showsRoomStatus', "" + this.showsRoomStatus);
        this.showRoomStatus.emit(this.showsRoomStatus);
        this.showsAll = this.checkShowHideAll();
    };
    MenuComponent.prototype.onShowRoomType = function (event) {
        this.showsRoomType = event;
        localStorage.setItem('showsRoomType', "" + this.showsRoomType);
        this.showRoomType.emit(this.showsRoomType);
        this.showsAll = this.checkShowHideAll();
    };
    MenuComponent.prototype.onShowRoomCapacity = function (event) {
        this.showsRoomCapacity = event;
        localStorage.setItem('showsRoomCapacity', "" + this.showsRoomCapacity);
        this.showRoomCapacity.emit(this.showsRoomCapacity);
        this.showsAll = this.checkShowHideAll();
    };
    MenuComponent.prototype.onShowRoomBeamer = function (event) {
        this.showsRoomBeamer = event;
        localStorage.setItem('showsRoomBeamer', "" + this.showsRoomBeamer);
        this.showRoomBeamer.emit(this.showsRoomBeamer);
        this.showsAll = this.checkShowHideAll();
    };
    MenuComponent.prototype.onMenuResize = function () {
        this.screenWidth = window.innerWidth;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuComponent.prototype, "campuses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _utils_Campus__WEBPACK_IMPORTED_MODULE_2__["Campus"])
    ], MenuComponent.prototype, "currentCampus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuComponent.prototype, "currentFloors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuComponent.prototype, "currentFloorNumbers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MenuComponent.prototype, "currentFloorNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "hideSettings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "changePersonnel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "showRoomName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "showRoomStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "showRoomType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "showRoomCapacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "showRoomBeamer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MenuComponent.prototype, "onMenuResize", null);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/room-detail/room-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/room-detail/room-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-campus-header\n    [currentCampus]=\"campus\"\n  ></app-campus-header>\n</header>\n<section class=\"content\">\n  <form (ngSubmit)=\"saveRoom()\" #roomForm=\"ngForm\">\n    <!--{{diagnostic}}-->\n    <h2 *ngIf=\"room.additionalName.length === 0\">Room: {{room.name}}</h2>\n    <h2 *ngIf=\"room.additionalName.length > 0\">Room: {{room.name}} - {{room.additionalName}}</h2>\n    <div class=\"row\">\n      <h4>General information</h4>\n      <div class=\"input-group input-group-icon\">\n        <input type=\"text\" name=\"name\" placeholder=\"Room name...\" [(ngModel)]=\"room.name\" required/>\n        <div class=\"input-icon\"><i class=\"mdi mdi-card-text-outline\"></i></div>\n      </div>\n      <div class=\"input-group input-group-icon\">\n        <input type=\"text\" name=\"additionalName\" placeholder=\"Additional room name...\"\n               [(ngModel)]=\"room.additionalName\"/>\n        <div class=\"input-icon\"><i class=\"mdi mdi-card-text-outline\"></i></div>\n      </div>\n      <div class=\"input-group input-group-icon\">\n          <span class=\"custom-dropdown\">\n            <select [selectedIndex]=\"roomTypes.indexOf(room.type)\" (change)=\"setRoomType($event)\" required>\n              <option *ngFor=\"let roomType of roomTypes\" name=\"roomType\" [ngValue]=\"roomType\"\n                      ngDefaultControl>{{roomType}}</option>\n            </select>\n          </span>\n        <div class=\"input-icon\"><i class=\"mdi mdi-format-list-bulleted-type\"></i></div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-half\">\n        <h4>Beamer available</h4>\n        <div class=\"input-group\">\n          <input type=\"radio\" name=\"beamer\" [value]=true id=\"beamer-yes\" [(ngModel)]=\"room.hasBeamer\" required/>\n          <label for=\"beamer-yes\">Yes</label>\n          <input type=\"radio\" name=\"beamer\" [value]=false id=\"beamer-no\" [(ngModel)]=\"room.hasBeamer\" required/>\n          <label for=\"beamer-no\">No</label>\n        </div>\n      </div>\n      <div class=\"col-half\">\n        <h4>Occupied</h4>\n        <div class=\"input-group\">\n          <input type=\"radio\" name=\"occupied\" [value]=true id=\"occupied-yes\" [(ngModel)]=\"room.occupied\" required/>\n          <label for=\"occupied-yes\">Yes</label>\n          <input type=\"radio\" name=\"occupied\" [value]=false id=\"occupied-no\" [(ngModel)]=\"room.occupied\" required/>\n          <label for=\"occupied-no\">No</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-half\">\n        <h4>Maximum room capacity</h4>\n        <div class=\"input-group input-group-icon\">\n          <input name=\"capacity\" type=\"number\" placeholder=\"Capacity...\" [(ngModel)]=\"room.capacity\" required/>\n          <div class=\"input-icon\"><i class=\"mdi mdi-account-group\"></i></div>\n        </div>\n      </div>\n      <div class=\"col-half\">\n        <h4>Current room crowdedness</h4>\n        <div class=\"input-group input-group-icon\">\n          <input name=\"crowdedness\" type=\"number\" placeholder=\"Crowdedness...\" [(ngModel)]=\"room.crowdedness\" required/>\n          <div class=\"input-icon\"><i class=\"mdi mdi-account-group\"></i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <h4>Floorplan position</h4>\n      <div class=\"col-fourth\">\n        <div class=\"input-group input-group-icon\">\n          <input name=\"x\" type=\"number\" placeholder=\"X position...\" [(ngModel)]=\"room.x\" required/>\n          <div class=\"input-icon-large\"><i class=\"mdi mdi-alpha-x\"></i></div>\n        </div>\n      </div>\n      <div class=\"col-fourth\">\n        <div class=\"input-group input-group-icon\">\n          <input name=\"y\" type=\"number\" placeholder=\"X position...\" [(ngModel)]=\"room.y\" required/>\n          <div class=\"input-icon-large\"><i class=\"mdi mdi-alpha-y\"></i></div>\n        </div>\n      </div>\n      <div class=\"col-fourth\">\n        <div class=\"input-group input-group-icon\">\n          <input name=\"width\" type=\"number\" placeholder=\"Width...\" [(ngModel)]=\"room.width\" required/>\n          <div class=\"input-icon\"><i class=\"mdi mdi-arrow-expand-horizontal\"></i></div>\n        </div>\n      </div>\n      <div class=\"col-fourth\">\n        <div class=\"input-group input-group-icon\">\n          <input name=\"height\" type=\"number\" placeholder=\"Height...\" [(ngModel)]=\"room.height\" required/>\n          <div class=\"input-icon\"><i class=\"mdi mdi-arrow-expand-vertical\"></i></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <button class=\"button\" (click)=\"goBack()\">Go back</button>\n      <button type=\"submit\" class=\"button\" [disabled]=\"!roomForm.form.valid\">Save</button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/room-detail/room-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/room-detail/room-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n/* Custom control styles */\n\n.button {\n  margin-top: 5px;\n  padding: 15px;\n  position: relative;\n  z-index: 1;\n  border: 1px solid #e5e5e5;\n  line-height: 1em;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  overflow: hidden;\n  transition: 0.3s; }\n\n.button:after {\n    position: absolute;\n    transition: 0.3s;\n    content: \"\";\n    width: 0;\n    bottom: -3px;\n    background: #7ed321;\n    height: 120%;\n    left: -10%;\n    -webkit-transform: skewX(25deg);\n    transform: skewX(25deg);\n    z-index: -1; }\n\n.button[type=submit] {\n    float: right; }\n\n.button:not([disabled]):hover {\n    border: 1px solid transparent;\n    cursor: pointer;\n    color: #ffffff; }\n\n.button:not([disabled]):hover:after {\n      left: -10%;\n      width: 120%; }\n\n.button[disabled] {\n    cursor: default; }\n\n.custom-dropdown {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%; }\n\n.custom-dropdown select {\n    margin: 0;\n    padding: 1em 1em 1em 4.4em;\n    width: 100%;\n    text-indent: 0.01px;\n    text-overflow: '';\n    line-height: 1.4;\n    color: #777;\n    background-color: #f9f9f9;\n    border: 1px solid #e5e5e5;\n    border-radius: 3px;\n    -webkit-appearance: button;\n    transition: 0.35s ease-in-out;\n    transition: all 0.35s ease-in-out; }\n\n.custom-dropdown select:focus {\n      color: #fff;\n      background-color: #7ed321;\n      transition: 0.1s ease-in-out;\n      transition: all 0.1s ease-in-out; }\n\n.custom-dropdown select > option:hover {\n      background-color: #7ed321; }\n\n.custom-dropdown::before, .custom-dropdown::after {\n    content: \"\";\n    position: absolute;\n    pointer-events: none; }\n\n.custom-dropdown::after {\n    content: \"\\25BC\";\n    height: 1em;\n    font-size: .625em;\n    line-height: 1;\n    right: 1.2em;\n    top: 50%;\n    margin-top: -.5em;\n    color: rgba(0, 0, 0, 0.4); }\n\n.custom-dropdown::before {\n    width: 2em;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 0 3px 3px 0;\n    background-color: rgba(0, 0, 0, 0.15); }\n\n.custom-dropdown select[disabled] {\n    color: rgba(0, 0, 0, 0.3); }\n\n.custom-dropdown select[disabled]::after {\n      color: rgba(0, 0, 0, 0.1); }\n\n.crowdedness-range {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n  background: #d7dcdf;\n  background: linear-gradient(to right, limegreen 0%, yellow 50%, orangered 100%);\n  outline: none;\n  padding: 0;\n  margin: 0; }\n\n.crowdedness-range::-webkit-slider-thumb {\n    -webkit-appearance: none;\n            appearance: none;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #2c3e50;\n    cursor: pointer;\n    transition: background .15s ease-in-out; }\n\n.crowdedness-range::-moz-range-thumb {\n    width: 16px;\n    height: 16px;\n    border: 0;\n    border-radius: 50%;\n    background: #2c3e50;\n    cursor: pointer;\n    transition: background .15s ease-in-out; }\n\n::-moz-range-track {\n  background: #d7dcdf;\n  background: linear-gradient(to right, limegreen 0%, yellow 50%, orangered 100%);\n  border: 0; }\n\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n  border: 0; }\n\n/* Page style */\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\nheader {\n  width: 100%;\n  background-color: #393939; }\n\n.content {\n  padding: 1em 3em 2em 3em;\n  margin: 0 auto;\n  width: 100%;\n  display: block;\n  font-size: 15px; }\n\n.content h4 {\n    color: #7ed321; }\n\n.content input, .content input[type=\"radio\"] + label, .content input[type=\"checkbox\"] + label:before {\n    width: 100%;\n    padding: 1em;\n    line-height: 1.4;\n    background-color: #f9f9f9;\n    border: 1px solid #e5e5e5;\n    border-radius: 3px;\n    transition: 0.35s ease-in-out;\n    transition: all 0.35s ease-in-out; }\n\n.content input[type=\"radio\"] + label {\n    padding: 0.8em; }\n\n.content input:focus {\n    outline: 0;\n    border-color: #64ac15; }\n\n.content input:focus + .input-icon i {\n      color: #7ed321; }\n\n.content input:focus + .input-icon:after {\n      border-right-color: #7ed321; }\n\n.content input[type=\"radio\"] {\n    display: none; }\n\n.content input[type=\"radio\"] + label {\n      display: inline-block;\n      width: 50%;\n      text-align: center;\n      float: left;\n      border-radius: 0; }\n\n.content input[type=\"radio\"] + label:first-of-type {\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px; }\n\n.content input[type=\"radio\"] + label:last-of-type {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px; }\n\n.content input[type=\"radio\"] + label i {\n      padding-right: 0.4em; }\n\n.content input[type=\"radio\"]:checked + label, .content input[type=\"radio\"] input:checked + label:before {\n      background-color: #7ed321;\n      color: #fff;\n      border-color: #64ac15; }\n\n.content input[type=\"checkbox\"] {\n    display: none; }\n\n.content input[type=\"checkbox\"] + label {\n      position: relative;\n      display: block;\n      padding-left: 1.6em; }\n\n.content input[type=\"checkbox\"] + label:before {\n        position: absolute;\n        top: 0.2em;\n        left: 0;\n        display: block;\n        width: 1em;\n        height: 1em;\n        padding: 0;\n        content: \"\"; }\n\n.content input[type=\"checkbox\"] + label:after {\n        position: absolute;\n        top: 0.45em;\n        left: 0.2em;\n        font-size: 0.8em;\n        color: #fff;\n        opacity: 0;\n        content: \"\\f00c\"; }\n\n.content input:checked + label:after {\n    opacity: 1; }\n\n.content .input-group {\n    margin-bottom: 1em;\n    zoom: 1; }\n\n.content .input-group:before, .content .input-group:after {\n      content: \"\";\n      display: table; }\n\n.content .input-group:after {\n      clear: both; }\n\n.content .input-group-icon {\n    position: relative; }\n\n.content .input-group-icon input {\n      padding-left: 4.4em; }\n\n.content .input-group-icon .input-icon, .content .input-group-icon .input-icon-large {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 3.4em;\n      height: 3.4em;\n      line-height: 3.4em;\n      text-align: center;\n      pointer-events: none; }\n\n.content .input-group-icon .input-icon:after, .content .input-group-icon .input-icon-large:after {\n        position: absolute;\n        top: 0.6em;\n        bottom: 0.6em;\n        left: 3.4em;\n        display: block;\n        border-right: 1px solid #e5e5e5;\n        content: \"\";\n        transition: 0.35s ease-in-out;\n        transition: all 0.35s ease-in-out; }\n\n.content .input-group-icon .input-icon i, .content .input-group-icon .input-icon-large i {\n        transition: 0.35s ease-in-out;\n        transition: all 0.35s ease-in-out; }\n\n.content .input-group-icon .input-icon-large i {\n      font-size: 1.5em; }\n\n.content button {\n    min-width: 10em; }\n\n.content .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */ }\n\n.content .row {\n    zoom: 1; }\n\n.content .row:before, .content .row:after {\n      content: \"\";\n      display: table; }\n\n.content .row:after {\n      clear: both; }\n\n.content .col-half {\n    padding-right: 10px;\n    float: left;\n    width: 50%; }\n\n.content .col-half:last-of-type {\n      padding-right: 0; }\n\n.content .col-third {\n    padding-right: 10px;\n    float: left;\n    width: 33.33333333%; }\n\n.content .col-third:last-of-type {\n      padding-right: 0; }\n\n.content .col-fourth {\n    padding-right: 10px;\n    float: left;\n    width: 25%; }\n\n.content .col-fourth:last-of-type {\n      padding-right: 0; }\n\n@media only screen and (max-width: 540px) {\n    .content .col-half {\n      width: 100%;\n      padding-right: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS1kZXRhaWwvRDpcXFNjaG9vbFxcU2Nob29sIDIwMTgtMjAxOVxcVXNlciBJbnRlcmZhY2VzXFxDYW1wdXMvc3JjXFxhcHBcXHJvb20tZGV0YWlsXFxyb29tLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFDWjs7QUFFRCwyQkFBMkI7O0FBRTNCO0VBQ0UsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDViwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQWtDakI7O0FBL0NEO0lBZ0JJLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLFNBQVE7SUFDUixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLGFBQVk7SUFDWixXQUFVO0lBQ1YsZ0NBQStCO0lBQy9CLHdCQUF1QjtJQUN2QixZQUFXLEVBQ1o7O0FBM0JIO0lBOEJJLGFBQVksRUFDYjs7QUEvQkg7SUFrQ0ksOEJBQTZCO0lBQzdCLGdCQUFlO0lBQ2YsZUFBYyxFQU1mOztBQTFDSDtNQXVDTSxXQUFVO01BQ1YsWUFBVyxFQUNaOztBQXpDTDtJQTZDSSxnQkFBZSxFQUNoQjs7QUFJSDtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLFlBQVcsRUEyRVo7O0FBL0VEO0lBT0ksVUFBUztJQUNULDJCQUEwQjtJQUUxQixZQUFXO0lBRVgsb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFFaEIsWUFBVztJQUNYLDBCQUF5QjtJQUN6QiwwQkFBeUI7SUFDekIsbUJBQWtCO0lBRWxCLDJCQUEwQjtJQUsxQiw4QkFBNkI7SUFDN0Isa0NBQWlDLEVBaUJsQzs7QUE1Q0g7TUE4Qk0sWUFBVztNQUVYLDBCQUF5QjtNQUt6Qiw2QkFBNEI7TUFDNUIsaUNBQWdDLEVBQ2pDOztBQXZDTDtNQTBDTSwwQkFBeUIsRUFDMUI7O0FBM0NMO0lBK0NJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIscUJBQW9CLEVBQ3JCOztBQWxESDtJQXFESSxpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixlQUFjO0lBQ2QsYUFBWTtJQUNaLFNBQVE7SUFDUixrQkFBaUI7SUFDakIsMEJBQXdCLEVBQ3pCOztBQTdESDtJQWdFSSxXQUFVO0lBQ1YsU0FBUTtJQUNSLE9BQU07SUFDTixVQUFTO0lBQ1QsMkJBQTBCO0lBQzFCLHNDQUFvQyxFQUNyQzs7QUF0RUg7SUF5RUksMEJBQXdCLEVBS3pCOztBQTlFSDtNQTRFTSwwQkFBd0IsRUFDekI7O0FBV0w7RUFDRSx5QkFBd0I7RUFDeEIsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsb0JBVHlCO0VBVXpCLGdGQUErRTtFQUMvRSxjQUFhO0VBQ2IsV0FBVTtFQUNWLFVBQVMsRUFxQlY7O0FBOUJEO0lBWUkseUJBQWdCO1lBQWhCLGlCQUFnQjtJQUNoQixZQWxCb0I7SUFtQnBCLGFBbkJvQjtJQW9CcEIsbUJBQWtCO0lBQ2xCLG9CQXRCd0I7SUF1QnhCLGdCQUFlO0lBQ2Ysd0NBQXVDLEVBQ3hDOztBQW5CSDtJQXNCSSxZQTNCb0I7SUE0QnBCLGFBNUJvQjtJQTZCcEIsVUFBUztJQUNULG1CQUFrQjtJQUNsQixvQkFoQ3dCO0lBaUN4QixnQkFBZTtJQUNmLHdDQUF1QyxFQUN4Qzs7QUFJSDtFQUNFLG9CQXRDeUI7RUF1Q3pCLGdGQUErRTtFQUMvRSxVQUFTLEVBQ1Y7O0FBRUQ7O0VBRUUsVUFBUyxFQUNWOztBQUVELGdCQUFnQjs7QUFDaEI7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxZQUFXO0VBRVgsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UseUJBQXdCO0VBQ3hCLGVBQWM7RUFFZCxZQUFXO0VBRVgsZUFBYztFQUVkLGdCQUFlLEVBbU9oQjs7QUEzT0Q7SUFZSSxlQUFjLEVBQ2Y7O0FBYkg7SUFnQkksWUFBVztJQUNYLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsMEJBQXlCO0lBQ3pCLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFJbEIsOEJBQTZCO0lBQzdCLGtDQUFpQyxFQUNsQzs7QUEzQkg7SUE4QkksZUFBYyxFQUNmOztBQS9CSDtJQWtDSSxXQUFVO0lBQ1Ysc0JBQXFCLEVBU3RCOztBQTVDSDtNQXNDTSxlQUFjLEVBQ2Y7O0FBdkNMO01BMENNLDRCQUEyQixFQUM1Qjs7QUEzQ0w7SUErQ0ksY0FBYSxFQStCZDs7QUE5RUg7TUFrRE0sc0JBQXFCO01BQ3JCLFdBQVU7TUFDVixtQkFBa0I7TUFDbEIsWUFBVztNQUNYLGlCQUFnQixFQUNqQjs7QUF2REw7TUEyRFEsNEJBQTJCO01BQzNCLCtCQUE4QixFQUMvQjs7QUE3RFA7TUFnRVEsNkJBQTRCO01BQzVCLGdDQUErQixFQUNoQzs7QUFsRVA7TUFxRVEscUJBQW9CLEVBQ3JCOztBQXRFUDtNQTBFTSwwQkFBeUI7TUFDekIsWUFBVztNQUNYLHNCQUFxQixFQUN0Qjs7QUE3RUw7SUFpRkksY0FBYSxFQTRCZDs7QUE3R0g7TUFvRk0sbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCxvQkFBbUIsRUFzQnBCOztBQTVHTDtRQXlGUSxtQkFBa0I7UUFDbEIsV0FBVTtRQUNWLFFBQU87UUFDUCxlQUFjO1FBQ2QsV0FBVTtRQUNWLFlBQVc7UUFDWCxXQUFVO1FBQ1YsWUFBVyxFQUNaOztBQWpHUDtRQW9HUSxtQkFBa0I7UUFDbEIsWUFBVztRQUNYLFlBQVc7UUFDWCxpQkFBZ0I7UUFDaEIsWUFBVztRQUNYLFdBQVU7UUFDVixpQkFBZ0IsRUFDakI7O0FBM0dQO0lBZ0hJLFdBQVUsRUFDWDs7QUFqSEg7SUFvSEksbUJBQWtCO0lBQ2xCLFFBQU8sRUFVUjs7QUEvSEg7TUF3SE0sWUFBVztNQUNYLGVBQWMsRUFDZjs7QUExSEw7TUE2SE0sWUFBVyxFQUNaOztBQTlITDtJQWtJSSxtQkFBa0IsRUE2Q25COztBQS9LSDtNQXFJTSxvQkFBbUIsRUFDcEI7O0FBdElMO01BeUlNLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sUUFBTztNQUNQLGFBQVk7TUFDWixjQUFhO01BQ2IsbUJBQWtCO01BQ2xCLG1CQUFrQjtNQUNsQixxQkFBb0IsRUF3QnJCOztBQXhLTDtRQW1KUSxtQkFBa0I7UUFDbEIsV0FBVTtRQUNWLGNBQWE7UUFDYixZQUFXO1FBQ1gsZUFBYztRQUNkLGdDQUErQjtRQUMvQixZQUFXO1FBSVgsOEJBQTZCO1FBQzdCLGtDQUFpQyxFQUNsQzs7QUEvSlA7UUFxS1EsOEJBQTZCO1FBQzdCLGtDQUFpQyxFQUNsQzs7QUF2S1A7TUE0S1EsaUJBQWdCLEVBQ2pCOztBQTdLUDtJQWtMSSxnQkFBZSxFQUNoQjs7QUFuTEg7SUFzTEksK0JBQThCO0lBQUUsU0FBUyxFQUMxQzs7QUF2TEg7SUEwTEksUUFBTyxFQVVSOztBQXBNSDtNQTZMTSxZQUFXO01BQ1gsZUFBYyxFQUNmOztBQS9MTDtNQWtNTSxZQUFXLEVBQ1o7O0FBbk1MO0lBdU1JLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsV0FBVSxFQUtYOztBQTlNSDtNQTRNTSxpQkFBZ0IsRUFDakI7O0FBN01MO0lBaU5JLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsb0JBQW1CLEVBS3BCOztBQXhOSDtNQXNOTSxpQkFBZ0IsRUFDakI7O0FBdk5MO0lBMk5JLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsV0FBVSxFQUtYOztBQWxPSDtNQWdPTSxpQkFBZ0IsRUFDakI7O0FBR0g7SUFwT0Y7TUFzT00sWUFBVztNQUNYLGlCQUFnQixFQUNqQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcm9vbS1kZXRhaWwvcm9vbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEN1c3RvbSBjb250cm9sIHN0eWxlcyAqL1xyXG4vLyBCdXR0b25cclxuLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvdHRvbTogLTNweDtcclxuICAgIGJhY2tncm91bmQ6ICM3ZWQzMjE7XHJcbiAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMjVkZWcpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG5cclxuICAmW3R5cGU9c3VibWl0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAmOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgICB3aWR0aDogMTIwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBkcm9wZG93blxyXG4uY3VzdG9tLWRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSA0LjRlbTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB0ZXh0LWluZGVudDogMC4wMXB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogJyc7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG5cclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWQzMjE7XHJcblxyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgPiBvcHRpb246aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VkMzIxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMjVCQ1wiO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IC42MjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgcmlnaHQ6IDEuMmVtO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtLjVlbTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFtkaXNhYmxlZF0ge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUmFuZ2Ugc2xpZGVyXHJcbiRyYW5nZS1oYW5kbGUtY29sb3I6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcbiRyYW5nZS1oYW5kbGUtc2l6ZTogMTZweCAhZGVmYXVsdDtcclxuJHJhbmdlLXRyYWNrLWNvbG9yOiAjZDdkY2RmICFkZWZhdWx0O1xyXG4kcmFuZ2UtbGFiZWwtY29sb3I6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcbiRyYW5nZS1sYWJlbC13aWR0aDogNjBweCAhZGVmYXVsdDtcclxuXHJcbi5jcm93ZGVkbmVzcy1yYW5nZSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogJHJhbmdlLXRyYWNrLWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgbGltZWdyZWVuIDAlLCB5ZWxsb3cgNTAlLCBvcmFuZ2VyZWQgMTAwJSk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAkcmFuZ2UtaGFuZGxlLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAkcmFuZ2UtaGFuZGxlLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGaXJlZm94IE92ZXJyaWRlc1xyXG46Oi1tb3otcmFuZ2UtdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICRyYW5nZS10cmFjay1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGxpbWVncmVlbiAwJSwgeWVsbG93IDUwJSwgb3JhbmdlcmVkIDEwMCUpO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLW91dGVyIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi8qIFBhZ2Ugc3R5bGUgKi9cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxZW0gM2VtIDJlbSAzZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAvL2h0dHBzOi8vY29kZXBlbi5pby9qb3NlbWMvcGVuL0t3YmFwcFxyXG4gIGg0IHtcclxuICAgIGNvbG9yOiAjN2VkMzIxO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQsIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAwLjhlbTtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NGFjMTU7XHJcblxyXG4gICAgKyAuaW5wdXQtaWNvbiBpIHtcclxuICAgICAgY29sb3I6ICM3ZWQzMjE7XHJcbiAgICB9XHJcblxyXG4gICAgKyAuaW5wdXQtaWNvbjphZnRlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzdlZDMyMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICsgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgKyBsYWJlbCB7XHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC40ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCwgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWQzMjE7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItY29sb3I6ICM2NGFjMTU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjZlbTtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwLjJlbTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwLjQ1ZW07XHJcbiAgICAgICAgbGVmdDogMC4yZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHpvb206IDE7XHJcblxyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtZ3JvdXAtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQuNGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1pY29uLCAuaW5wdXQtaWNvbi1sYXJnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMy40ZW07XHJcbiAgICAgIGhlaWdodDogMy40ZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzLjRlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDAuNmVtO1xyXG4gICAgICAgIGJvdHRvbTogMC42ZW07XHJcbiAgICAgICAgbGVmdDogMy40ZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U1ZTVlNTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtaWNvbi1sYXJnZSB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDEwZW07XHJcbiAgfVxyXG5cclxuICAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXHJcbiAgfVxyXG5cclxuICAucm93IHtcclxuICAgIHpvb206IDE7XHJcblxyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sLWhhbGYge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sLXRoaXJkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbC1mb3VydGgge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuXHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAuY29sLWhhbGYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/room-detail/room-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/room-detail/room-detail.component.ts ***!
  \******************************************************/
/*! exports provided: RoomDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailComponent", function() { return RoomDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_room_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/room-firebase.service */ "./src/app/services/room-firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Room */ "./src/utils/Room.ts");
/* harmony import */ var _services_floor_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/floor-firebase.service */ "./src/app/services/floor-firebase.service.ts");
/* harmony import */ var _services_campus_firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/campus-firebase.service */ "./src/app/services/campus-firebase.service.ts");
/* harmony import */ var _utils_Campus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Campus */ "./src/utils/Campus.ts");
/* harmony import */ var _utils_RoomType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/RoomType */ "./src/utils/RoomType.ts");
/* harmony import */ var _utils_Floor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/Floor */ "./src/utils/Floor.ts");












var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent(roomService, floorService, campusService, route, location, router) {
        this.roomService = roomService;
        this.floorService = floorService;
        this.campusService = campusService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.room = new _utils_Room__WEBPACK_IMPORTED_MODULE_6__["Room"]('', '', '', _utils_RoomType__WEBPACK_IMPORTED_MODULE_10__["RoomType"].STUDY_HALL, 0, false, false, 0, '', 0, 0, 0, 0, '');
        this.roomTypes = Object.keys(_utils_RoomType__WEBPACK_IMPORTED_MODULE_10__["RoomType"]).map(function (roomType) { return _utils_RoomType__WEBPACK_IMPORTED_MODULE_10__["RoomType"][roomType]; }).sort();
        this.campus = new _utils_Campus__WEBPACK_IMPORTED_MODULE_9__["Campus"]('', 'Campus', '');
        this.floor = new _utils_Floor__WEBPACK_IMPORTED_MODULE_11__["Floor"]('', 0, '');
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.roomService.getRoom(params.get('id')); })).subscribe(function (room) {
            _this.floorService.getFloor(room.floorId).subscribe(function (floor) {
                _this.floor = floor;
                _this.campusService.getCampus(floor.campusId).subscribe(function (campus) { return _this.campus = campus; });
            });
        });
    };
    RoomDetailComponent.prototype.setRoomType = function (event) {
        this.room.type = event.target.value;
    };
    RoomDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    RoomDetailComponent.prototype.saveRoom = function () {
        var _this = this;
        this.roomService.updateRoom(this.room)
            .then(function () { return _this.router.navigate(['/list/campus/' + _this.campus.slugUrl + '/floor/' + _this.floor.floorNumber]); });
    };
    RoomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-detail',
            template: __webpack_require__(/*! ./room-detail.component.html */ "./src/app/room-detail/room-detail.component.html"),
            styles: [__webpack_require__(/*! ./room-detail.component.scss */ "./src/app/room-detail/room-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_room_firebase_service__WEBPACK_IMPORTED_MODULE_2__["RoomFirebaseService"],
            _services_floor_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FloorFirebaseService"],
            _services_campus_firebase_service__WEBPACK_IMPORTED_MODULE_8__["CampusFirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/campus-firebase.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/campus-firebase.service.ts ***!
  \*****************************************************/
/*! exports provided: CampusFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusFirebaseService", function() { return CampusFirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CampusFirebaseService = /** @class */ (function () {
    function CampusFirebaseService(afs) {
        this.afs = afs;
        this.collectionName = 'campuses';
        this.allCampuses = this.afs.collection(this.collectionName).valueChanges();
    }
    CampusFirebaseService.prototype.getCampuses = function () {
        return this.allCampuses;
    };
    CampusFirebaseService.prototype.getCampus = function (id) {
        return this.afs.collection(this.collectionName, function (ref) { return ref.where('id', '==', id); }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (campuses) { return campuses[0]; }));
    };
    CampusFirebaseService.prototype.getCampusBySlug = function (slug) {
        return this.afs.collection("" + this.collectionName, function (ref) { return ref.where('slugUrl', '==', slug).limit(1); }).valueChanges();
    };
    CampusFirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CampusFirebaseService);
    return CampusFirebaseService;
}());



/***/ }),

/***/ "./src/app/services/floor-firebase.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/floor-firebase.service.ts ***!
  \****************************************************/
/*! exports provided: FloorFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorFirebaseService", function() { return FloorFirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FloorFirebaseService = /** @class */ (function () {
    function FloorFirebaseService(afs) {
        this.afs = afs;
        this.collectionName = 'floors';
        this.allFloors = this.afs.collection(this.collectionName).valueChanges();
    }
    FloorFirebaseService.prototype.getFloors = function () {
        return this.allFloors;
    };
    FloorFirebaseService.prototype.getFloorsByCampus = function (campusId) {
        return this.afs.collection(this.collectionName, function (ref) { return ref.where('campusId', '==', campusId).orderBy('floorNumber'); }).valueChanges();
    };
    // getFloorByCampusFloorNumber(campusId: string): Observable<Floor> {
    //   return this.afs.collection<Floor>(
    //     this.collectionName,
    //     ref => ref
    //       .where('id', '==', id)
    //       .orderBy('floorNumber')
    //   ).valueChanges().pipe(
    //     map(floors => floors[0])
    //   );
    // }
    FloorFirebaseService.prototype.getFloor = function (id) {
        return this.afs.collection(this.collectionName, function (ref) { return ref
            .where('id', '==', id)
            .orderBy('floorNumber'); }).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (floors) { return floors[0]; }));
    };
    FloorFirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FloorFirebaseService);
    return FloorFirebaseService;
}());



/***/ }),

/***/ "./src/app/services/room-firebase.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/room-firebase.service.ts ***!
  \***************************************************/
/*! exports provided: RoomFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomFirebaseService", function() { return RoomFirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/RoomType */ "./src/utils/RoomType.ts");






var RoomFirebaseService = /** @class */ (function () {
    function RoomFirebaseService(afs) {
        var _this = this;
        this.afs = afs;
        this.collectionName = 'rooms';
        this.roomsCollection = this.afs.collection(this.collectionName);
        this.roomsCollection.snapshotChanges().subscribe(function (actions) {
            _this.allRooms = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(actions.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            }));
        });
    }
    RoomFirebaseService.prototype.getRooms = function () {
        return this.allRooms;
    };
    RoomFirebaseService.prototype.getRoomsByFloor = function (floorId) {
        var _this = this;
        return this.afs.collection(this.collectionName, function (ref) { return ref.where('floorId', '==', floorId); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (action) {
            return _this.mapDataToRoom(action.payload.doc.data(), action.payload.doc.id);
        }); }));
    };
    RoomFirebaseService.prototype.getRoom = function (roomId) {
        return this.afs.collection(this.collectionName)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions
            .map(function (action) {
            var data = action.payload.doc.data();
            data.id = action.payload.doc.id;
            return data;
        })
            .filter(function (room) { return room.id === roomId; })[0]; }));
    };
    RoomFirebaseService.prototype.updateRoom = function (room) {
        return this.roomsCollection.doc(room.id).update({
            name: room.name,
            additionalName: room.additionalName,
            type: room.type,
            capacity: room.capacity,
            hasBeamer: room.hasBeamer,
            occupied: room.occupied,
            crowdedness: room.crowdedness,
            reservedUntil: room.reservedUntil,
            x: room.x,
            y: room.y,
            width: room.width,
            height: room.height
        });
    };
    RoomFirebaseService.prototype.reserveRoom = function (roomId, hours) {
        var until = new Date(Date.now());
        if (+hours + until.getHours() > 23) {
            until.setDate(+1 + until.getDate());
            until.setHours(+hours + until.getHours() - 23);
        }
        else {
            until.setHours(+hours + until.getHours());
        }
        return this.roomsCollection.doc(roomId).update({ occupied: true, reservedUntil: until.toJSON() });
    };
    RoomFirebaseService.prototype.unreserveRoom = function (roomId) {
        return this.roomsCollection.doc(roomId).update({ occupied: false });
    };
    RoomFirebaseService.prototype.updateRoomCrowdedness = function (roomId, crowdedness) {
        return this.roomsCollection.doc(roomId).update({ crowdedness: crowdedness });
    };
    RoomFirebaseService.prototype.mapDataToRoom = function (object, id) {
        var data = object;
        data.id = id;
        switch (data.type) {
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__["RoomType"].AUDITORIUM:
                data.icon_class = 'account-group';
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__["RoomType"].CAFETARIA:
                data.icon_class = 'coffee';
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__["RoomType"].CLASSROOM:
                data.icon_class = 'chair-school';
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__["RoomType"].MEETING_ROOM:
                data.icon_class = 'clipboard-text';
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__["RoomType"].OFFICE:
                data.icon_class = 'desktop-tower-monitor';
                break;
            case _utils_RoomType__WEBPACK_IMPORTED_MODULE_5__["RoomType"].STUDY_HALL:
                data.icon_class = 'book-open-page-variant';
                break;
        }
        return data;
    };
    RoomFirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], RoomFirebaseService);
    return RoomFirebaseService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBB46LogmjHG46vDw4t8Nn7eiOU-ZFU6uI',
        authDomain: 'examenproject-2018-ui3.firebaseapp.com',
        databaseURL: 'https://examenproject-2018-ui3.firebaseio.com',
        projectId: 'examenproject-2018-ui3',
        storageBucket: 'examenproject-2018-ui3.appspot.com',
        messagingSenderId: '96696024308'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/utils/Campus.ts":
/*!*****************************!*\
  !*** ./src/utils/Campus.ts ***!
  \*****************************/
/*! exports provided: Campus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Campus", function() { return Campus; });
var Campus = /** @class */ (function () {
    function Campus(id, name, slugUrl) {
        this.id = id;
        this.name = name;
        this.slugUrl = slugUrl;
    }
    return Campus;
}());



/***/ }),

/***/ "./src/utils/Floor.ts":
/*!****************************!*\
  !*** ./src/utils/Floor.ts ***!
  \****************************/
/*! exports provided: Floor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Floor", function() { return Floor; });
var Floor = /** @class */ (function () {
    function Floor(id, floorNumber, campusId) {
        this.id = id;
        this.floorNumber = floorNumber;
        this.campusId = campusId;
    }
    return Floor;
}());



/***/ }),

/***/ "./src/utils/Room.ts":
/*!***************************!*\
  !*** ./src/utils/Room.ts ***!
  \***************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
var Room = /** @class */ (function () {
    function Room(id, name, additionalName, type, capacity, hasBeamer, occupied, crowdedness, reservedUntil, x, y, width, height, floorId) {
        this.id = id;
        this.name = name;
        this.additionalName = additionalName;
        this.type = type;
        this.capacity = capacity;
        this.hasBeamer = hasBeamer;
        this.occupied = occupied;
        this.crowdedness = crowdedness;
        this.reservedUntil = reservedUntil;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.floorId = floorId;
    }
    return Room;
}());



/***/ }),

/***/ "./src/utils/RoomType.ts":
/*!*******************************!*\
  !*** ./src/utils/RoomType.ts ***!
  \*******************************/
/*! exports provided: RoomType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomType", function() { return RoomType; });
var RoomType;
(function (RoomType) {
    RoomType["CLASSROOM"] = "Classroom";
    RoomType["AUDITORIUM"] = "Auditorium";
    RoomType["MEETING_ROOM"] = "Meeting room";
    RoomType["OFFICE"] = "Office";
    RoomType["STUDY_HALL"] = "Study hall";
    RoomType["CAFETARIA"] = "Cafetaria";
})(RoomType || (RoomType = {}));
// function initCap(type: RoomType) {
//   return type.toString().charAt(0).toUpperCase() + type.toString().slice(1).toLowerCase();
// }


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\School\School 2018-2019\User Interfaces\Campus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map