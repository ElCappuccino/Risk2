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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hub_hub_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hub/hub.component */ "./src/app/hub/hub.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: 'hub', component: _hub_hub_component__WEBPACK_IMPORTED_MODULE_2__["HubComponent"] },
                    { path: '', pathMatch: 'full', redirectTo: '/hub' },
                    { path: '**', redirectTo: '/hub' }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n<nav>\n  <ul>\n    <li><a routerLink=\"/hub\">Hub</a></li>\n    <li><a routerLink=\"/map-list\">Map list</a></li>\n    <li><a routerLink=\"/player-list\">Player list</a></li>\n  </ul>\n</nav>\n<router-outlet></router-outlet>\n<app-message-list></app-message-list>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Risk';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/map/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message */ "./src/app/message/index.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player */ "./src/app/player/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hub_hub_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hub/hub.component */ "./src/app/hub/hub.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _hub_hub_component__WEBPACK_IMPORTED_MODULE_8__["HubComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _map__WEBPACK_IMPORTED_MODULE_4__["MapModule"],
                _message__WEBPACK_IMPORTED_MODULE_5__["MessageModule"],
                _player__WEBPACK_IMPORTED_MODULE_6__["PlayerModule"],
                // Last: routing module
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hub/hub.component.css":
/*!***************************************!*\
  !*** ./src/app/hub/hub.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hub/hub.component.html":
/*!****************************************!*\
  !*** ./src/app/hub/hub.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-player-search></app-player-search>\n<app-map-search></app-map-search>\n"

/***/ }),

/***/ "./src/app/hub/hub.component.ts":
/*!**************************************!*\
  !*** ./src/app/hub/hub.component.ts ***!
  \**************************************/
/*! exports provided: HubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubComponent", function() { return HubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HubComponent = /** @class */ (function () {
    function HubComponent() {
    }
    HubComponent.prototype.ngOnInit = function () {
    };
    HubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hub',
            template: __webpack_require__(/*! ./hub.component.html */ "./src/app/hub/hub.component.html"),
            styles: [__webpack_require__(/*! ./hub.component.css */ "./src/app/hub/hub.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HubComponent);
    return HubComponent;
}());



/***/ }),

/***/ "./src/app/map/index.ts":
/*!******************************!*\
  !*** ./src/app/map/index.ts ***!
  \******************************/
/*! exports provided: MapModule, MapRoutingModule, MapDetailComponent, MapListComponent, MapSearchComponent, Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.module */ "./src/app/map/map.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return _map_module__WEBPACK_IMPORTED_MODULE_0__["MapModule"]; });

/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/map/map-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return _map_routing_module__WEBPACK_IMPORTED_MODULE_1__["MapRoutingModule"]; });

/* harmony import */ var _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-detail/map-detail.component */ "./src/app/map/map-detail/map-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapDetailComponent", function() { return _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_2__["MapDetailComponent"]; });

/* harmony import */ var _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-list/map-list.component */ "./src/app/map/map-list/map-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapListComponent", function() { return _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_3__["MapListComponent"]; });

/* harmony import */ var _map_search_map_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-search/map-search.component */ "./src/app/map/map-search/map-search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapSearchComponent", function() { return _map_search_map_search_component__WEBPACK_IMPORTED_MODULE_4__["MapSearchComponent"]; });

/* harmony import */ var _map_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.model */ "./src/app/map/map.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map_model__WEBPACK_IMPORTED_MODULE_5__["Map"]; });









/***/ }),

/***/ "./src/app/map/map-detail/map-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/map/map-detail/map-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map-detail/map-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/map/map-detail/map-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"map$ | async as map\">\n  <h2>Map {{map.name | uppercase}} detail</h2>\n  <div>\n    <span>id: </span>\n    {{map.id}}\n  </div>\n  <div>\n    <label>\n      name:\n      <input\n        [(ngModel)]=\"map.name\"\n        placeholder=\"name\"\n      >\n    </label>\n  </div>\n  <div>\n    <label>\n      url:\n      <input\n        [(ngModel)]=\"map.url\"\n        placeholder=\"url\"\n      >\n    </label>\n    <div>\n      <img [src]=\"map.url\">\n    </div>\n  </div>\n  <button (click)=\"back()\">Back</button>\n  <button (click)=\"save(map)\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map-detail/map-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/map/map-detail/map-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MapDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDetailComponent", function() { return MapDetailComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message */ "./src/app/message/index.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapDetailComponent = /** @class */ (function () {
    function MapDetailComponent(_activatedRoute, _location, _messageService, _mapService) {
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this._messageService = _messageService;
        this._mapService = _mapService;
    }
    MapDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._map$ = this._activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (paramMap) { return _this._mapService.fetchMap(+paramMap.get('id')); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this._messageService.add(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    Object.defineProperty(MapDetailComponent.prototype, "map$", {
        get: function () {
            return this._map$;
        },
        enumerable: true,
        configurable: true
    });
    MapDetailComponent.prototype.back = function () {
        this._location.back();
    };
    MapDetailComponent.prototype.save = function (map) {
        this._mapService.updateMap(map).subscribe();
        this._location.back();
    };
    MapDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-detail',
            template: __webpack_require__(/*! ./map-detail.component.html */ "./src/app/map/map-detail/map-detail.component.html"),
            styles: [__webpack_require__(/*! ./map-detail.component.css */ "./src/app/map/map-detail/map-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            _message__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]])
    ], MapDetailComponent);
    return MapDetailComponent;
}());



/***/ }),

/***/ "./src/app/map/map-list/map-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maps {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.maps li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.maps li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.maps a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.maps a:hover {\n  color:#607D8B;\n}\n.maps .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.remove {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/map/map-list/map-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Map list\n</h2>\n\n<div>\n  <label>\n    Name:\n    <input #name />\n  </label>\n  <label>\n      URL:\n      <input #url />\n    </label>\n    <button (click)=\"add(name.value, url.value); name.value=''; url.value=''\">\n    Add\n  </button>\n</div>\n\n<ul class=\"maps\">\n  <li *ngFor=\"let map of maps\">\n    <a routerLink=\"/map/{{map.id}}\">\n      <span class=\"badge\">\n        {{map.id}}\n      </span>\n      {{map.name}}\n    </a>\n    <button\n      class=\"remove\"\n      title=\"Remove\"\n      (click)=\"remove(map)\"\n    >X</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/map/map-list/map-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map/map-list/map-list.component.ts ***!
  \****************************************************/
/*! exports provided: MapListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapListComponent", function() { return MapListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapListComponent = /** @class */ (function () {
    function MapListComponent(_mapService) {
        this._mapService = _mapService;
    }
    MapListComponent.prototype.ngOnInit = function () {
        this.fetchMaps();
    };
    Object.defineProperty(MapListComponent.prototype, "maps", {
        get: function () {
            return this._maps;
        },
        enumerable: true,
        configurable: true
    });
    MapListComponent.prototype.fetchMaps = function () {
        var _this = this;
        this._mapService.fetchMaps()
            .subscribe(function (maps) { return _this._maps = maps; });
    };
    MapListComponent.prototype.add = function (name, url) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        url = url.trim();
        if (!url) {
            return;
        }
        this._mapService.createMap({ name: name, url: url })
            .subscribe(function (map) {
            _this._maps.push(map);
        });
    };
    MapListComponent.prototype.remove = function (map) {
        this._maps = this._maps.filter(function (item) { return item !== map; });
        this._mapService.removeMap(map).subscribe();
    };
    MapListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-list',
            template: __webpack_require__(/*! ./map-list.component.html */ "./src/app/map/map-list/map-list.component.html"),
            styles: [__webpack_require__(/*! ./map-list.component.css */ "./src/app/map/map-list/map-list.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapListComponent);
    return MapListComponent;
}());



/***/ }),

/***/ "./src/app/map/map-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/*! exports provided: MapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return MapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-detail/map-detail.component */ "./src/app/map/map-detail/map-detail.component.ts");
/* harmony import */ var _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-list/map-list.component */ "./src/app/map/map-list/map-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapRoutingModule = /** @class */ (function () {
    function MapRoutingModule() {
    }
    MapRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'map/:id', component: _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_2__["MapDetailComponent"] },
                    { path: 'map-list', component: _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_3__["MapListComponent"] },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MapRoutingModule);
    return MapRoutingModule;
}());



/***/ }),

/***/ "./src/app/map/map-search/map-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/map/map-search/map-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  width: 200px;\n  height: 20px;\n}\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result li:hover {\n  background-color: #607D8B;\n}\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n.search-result li a:hover {\n  color: white;\n}\n.search-result li a:active {\n  color: white;\n}\nul.search-result {\n  margin-top: 0;\n  padding-left: 0;\n}\n"

/***/ }),

/***/ "./src/app/map/map-search/map-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/map/map-search/map-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Map search</h4>\n\n  <input #searchBox class=\"search-box\" (keyup)=\"next(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let map of maps$ | async\" >\n      <a routerLink=\"/map/{{map.id}}\">\n        {{map.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map-search/map-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/map/map-search/map-search.component.ts ***!
  \********************************************************/
/*! exports provided: MapSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSearchComponent", function() { return MapSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapSearchComponent = /** @class */ (function () {
    function MapSearchComponent(_mapService) {
        this._mapService = _mapService;
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    MapSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._maps$ = this._subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this._mapService.searchMaps(term); }));
    };
    Object.defineProperty(MapSearchComponent.prototype, "maps$", {
        get: function () {
            return this._maps$;
        },
        enumerable: true,
        configurable: true
    });
    MapSearchComponent.prototype.next = function (term) {
        this._subject.next(term);
    };
    MapSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-search',
            template: __webpack_require__(/*! ./map-search.component.html */ "./src/app/map/map-search/map-search.component.html"),
            styles: [__webpack_require__(/*! ./map-search.component.css */ "./src/app/map/map-search/map-search.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
    ], MapSearchComponent);
    return MapSearchComponent;
}());



/***/ }),

/***/ "./src/app/map/map.model.ts":
/*!**********************************!*\
  !*** ./src/app/map/map.model.ts ***!
  \**********************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
var Map = /** @class */ (function () {
    function Map() {
    }
    return Map;
}());



/***/ }),

/***/ "./src/app/map/map.module.ts":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/map/map-routing.module.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message */ "./src/app/message/index.ts");
/* harmony import */ var _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-detail/map-detail.component */ "./src/app/map/map-detail/map-detail.component.ts");
/* harmony import */ var _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-list/map-list.component */ "./src/app/map/map-list/map-list.component.ts");
/* harmony import */ var _map_search_map_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-search/map-search.component */ "./src/app/map/map-search/map-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_6__["MapDetailComponent"],
                _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_7__["MapListComponent"],
                _map_search_map_search_component__WEBPACK_IMPORTED_MODULE_8__["MapSearchComponent"]
            ],
            exports: [
                _map_detail_map_detail_component__WEBPACK_IMPORTED_MODULE_6__["MapDetailComponent"],
                _map_list_map_list_component__WEBPACK_IMPORTED_MODULE_7__["MapListComponent"],
                _map_search_map_search_component__WEBPACK_IMPORTED_MODULE_8__["MapSearchComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _message__WEBPACK_IMPORTED_MODULE_5__["MessageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // Last: routing module
                _map_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapRoutingModule"]
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/map/map.service.ts":
/*!************************************!*\
  !*** ./src/app/map/map.service.ts ***!
  \************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MapService = /** @class */ (function () {
    function MapService(_httpService) {
        this._httpService = _httpService;
    }
    MapService_1 = MapService;
    MapService.prototype.fetchMaps = function () {
        return this._httpService.get(MapService_1._baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.createMap = function (map) {
        return this._httpService.post(MapService_1._baseUrl, map, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.removeMap = function (map) {
        return this._httpService.delete(MapService_1._baseUrl + "/" + map.id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.fetchMap = function (id) {
        return this._httpService.get(MapService_1._baseUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.updateMap = function (map) {
        return this._httpService.put(MapService_1._baseUrl + "/" + map.id, map, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.searchMaps = function (term) {
        if (term) {
            term = term.trim();
        }
        if (!term) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this._httpService.get(MapService_1._baseUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MapService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", body was: " + error.error);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    MapService._baseUrl = 'api/maps';
    MapService = MapService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MapService);
    return MapService;
    var MapService_1;
}());



/***/ }),

/***/ "./src/app/message/index.ts":
/*!**********************************!*\
  !*** ./src/app/message/index.ts ***!
  \**********************************/
/*! exports provided: MessageModule, MessageListComponent, MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.module */ "./src/app/message/message.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return _message_module__WEBPACK_IMPORTED_MODULE_0__["MessageModule"]; });

/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/message/message-list/message-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__["MessageListComponent"]; });

/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message/message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]; });






/***/ }),

/***/ "./src/app/message/message-list/message-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/message/message-list/message-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/message/message-list/message-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/message/message-list/message-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messages.length\">\n  <h2>Messages</h2>\n  <button\n    class=\"clear\"\n    (click)=\"clear()\"\n  >\n    clear\n  </button>\n  <div\n    *ngFor='let message of messages'\n  >\n    {{message}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/message/message-list/message-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/message/message-list/message-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MessageListComponent.prototype, "messages", {
        get: function () {
            return this._messageService.messages;
        },
        enumerable: true,
        configurable: true
    });
    MessageListComponent.prototype.clear = function () {
        this._messageService.clear();
    };
    MessageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.css */ "./src/app/message/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/message/message-list/message-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_2__["MessageListComponent"]
            ],
            exports: [
                _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_2__["MessageListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/message/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/message/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this._messages = [];
    }
    Object.defineProperty(MessageService.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        enumerable: true,
        configurable: true
    });
    MessageService.prototype.add = function (message) {
        this._messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this._messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/player/index.ts":
/*!*********************************!*\
  !*** ./src/app/player/index.ts ***!
  \*********************************/
/*! exports provided: PlayerModule, PlayerRoutingModule, PlayerDetailComponent, PlayerListComponent, PlayerSearchComponent, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.module */ "./src/app/player/player.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return _player_module__WEBPACK_IMPORTED_MODULE_0__["PlayerModule"]; });

/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/player/player-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerRoutingModule", function() { return _player_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlayerRoutingModule"]; });

/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player/player-detail/player-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailComponent", function() { return _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__["PlayerDetailComponent"]; });

/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player/player-list/player-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__["PlayerListComponent"]; });

/* harmony import */ var _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-search/player-search.component */ "./src/app/player/player-search/player-search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchComponent", function() { return _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_4__["PlayerSearchComponent"]; });

/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player.model */ "./src/app/player/player.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return _player_model__WEBPACK_IMPORTED_MODULE_5__["Player"]; });









/***/ }),

/***/ "./src/app/player/player-detail/player-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/player/player-detail/player-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player-detail/player-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/player/player-detail/player-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"player$ | async as player\">\n  <h2>Player {{player.name | uppercase}} details</h2>\n  <div>\n    <span>id: </span>\n    {{player.id}}\n  </div>\n  <div>\n    <label>\n      name:\n      <input\n        [(ngModel)]=\"player.name\"\n        placeholder=\"name\"\n      >\n    </label>\n  </div>\n  <button (click)=\"back()\">Back</button>\n  <button (click)=\"save(player)\">Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player-detail/player-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/player/player-detail/player-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailComponent", function() { return PlayerDetailComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../message */ "./src/app/message/index.ts");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player.service */ "./src/app/player/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(_activatedRoute, _location, _messageService, _playerService) {
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this._messageService = _messageService;
        this._playerService = _playerService;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._player$ = this._activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (paramMap) { return _this._playerService.fetchPlayer(+paramMap.get('id')); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this._messageService.add(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    Object.defineProperty(PlayerDetailComponent.prototype, "player$", {
        get: function () {
            return this._player$;
        },
        enumerable: true,
        configurable: true
    });
    PlayerDetailComponent.prototype.back = function () {
        this._location.back();
    };
    PlayerDetailComponent.prototype.save = function (player) {
        this._playerService.updatePlayer(player).subscribe();
        this._location.back();
    };
    PlayerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-detail',
            template: __webpack_require__(/*! ./player-detail.component.html */ "./src/app/player/player-detail/player-detail.component.html"),
            styles: [__webpack_require__(/*! ./player-detail.component.css */ "./src/app/player/player-detail/player-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            _message__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _player_service__WEBPACK_IMPORTED_MODULE_6__["PlayerService"]])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "./src/app/player/player-list/player-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".players {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.players li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.players li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.players a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.players a:hover {\n  color:#607D8B;\n}\n.players .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.remove {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/player/player-list/player-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  Player list\n</h2>\n\n<div>\n  <label>\n    Name:\n    <input #name />\n  </label>\n  <button (click)=\"add(name.value); name.value=''\">\n    Add\n  </button>\n</div>\n\n<ul class=\"players\">\n  <li *ngFor=\"let player of players\">\n    <a routerLink=\"/player/{{player.id}}\">\n      <span class=\"badge\">\n        {{player.id}}\n      </span>\n      {{player.name}}\n    </a>\n    <button\n      class=\"remove\"\n      title=\"Remove\"\n      (click)=\"remove(player)\"\n    >X</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/player/player-list/player-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player.service */ "./src/app/player/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(_playerService) {
        this._playerService = _playerService;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        this.fetchPlayers();
    };
    Object.defineProperty(PlayerListComponent.prototype, "players", {
        get: function () {
            return this._players;
        },
        enumerable: true,
        configurable: true
    });
    PlayerListComponent.prototype.fetchPlayers = function () {
        var _this = this;
        this._playerService.fetchPlayers()
            .subscribe(function (players) { return _this._players = players; });
    };
    PlayerListComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this._playerService.createPlayer({ name: name })
            .subscribe(function (player) {
            _this._players.push(player);
        });
    };
    PlayerListComponent.prototype.remove = function (player) {
        this._players = this._players.filter(function (item) { return item !== player; });
        this._playerService.removePlayer(player).subscribe();
    };
    PlayerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-list',
            template: __webpack_require__(/*! ./player-list.component.html */ "./src/app/player/player-list/player-list.component.html"),
            styles: [__webpack_require__(/*! ./player-list.component.css */ "./src/app/player/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/player/player-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/player/player-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlayerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRoutingModule", function() { return PlayerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player/player-detail/player-detail.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player/player-list/player-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlayerRoutingModule = /** @class */ (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'player/:id', component: _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_2__["PlayerDetailComponent"] },
                    { path: 'player-list', component: _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__["PlayerListComponent"] },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());



/***/ }),

/***/ "./src/app/player/player-search/player-search.component.css":
/*!******************************************************************!*\
  !*** ./src/app/player/player-search/player-search.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  width: 200px;\n  height: 20px;\n}\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n.search-result li:hover {\n  background-color: #607D8B;\n}\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n.search-result li a:hover {\n  color: white;\n}\n.search-result li a:active {\n  color: white;\n}\nul.search-result {\n  margin-top: 0;\n  padding-left: 0;\n}\n"

/***/ }),

/***/ "./src/app/player/player-search/player-search.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/player/player-search/player-search.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Player search</h4>\n\n  <input #searchBox class=\"search-box\" (keyup)=\"next(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let player of players$ | async\" >\n      <a routerLink=\"/player/{{player.id}}\">\n        {{player.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player-search/player-search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/player/player-search/player-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerSearchComponent", function() { return PlayerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player.service */ "./src/app/player/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerSearchComponent = /** @class */ (function () {
    function PlayerSearchComponent(_playerService) {
        this._playerService = _playerService;
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PlayerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._players$ = this._subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this._playerService.searchPlayers(term); }));
    };
    Object.defineProperty(PlayerSearchComponent.prototype, "players$", {
        get: function () {
            return this._players$;
        },
        enumerable: true,
        configurable: true
    });
    PlayerSearchComponent.prototype.next = function (term) {
        this._subject.next(term);
    };
    PlayerSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-search',
            template: __webpack_require__(/*! ./player-search.component.html */ "./src/app/player/player-search/player-search.component.html"),
            styles: [__webpack_require__(/*! ./player-search.component.css */ "./src/app/player/player-search/player-search.component.css")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_3__["PlayerService"]])
    ], PlayerSearchComponent);
    return PlayerSearchComponent;
}());



/***/ }),

/***/ "./src/app/player/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/player/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/player/player.module.ts":
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/message/index.ts");
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/player/player-routing.module.ts");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/player/player-detail/player-detail.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player/player-list/player-list.component.ts");
/* harmony import */ var _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player-search/player-search.component */ "./src/app/player/player-search/player-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_6__["PlayerDetailComponent"],
                _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__["PlayerListComponent"],
                _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_8__["PlayerSearchComponent"]
            ],
            exports: [
                _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_6__["PlayerDetailComponent"],
                _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__["PlayerListComponent"],
                _player_search_player_search_component__WEBPACK_IMPORTED_MODULE_8__["PlayerSearchComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _message__WEBPACK_IMPORTED_MODULE_4__["MessageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // Last: routing module
                _player_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlayerRoutingModule"]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ }),

/***/ "./src/app/player/player.service.ts":
/*!******************************************!*\
  !*** ./src/app/player/player.service.ts ***!
  \******************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PlayerService = /** @class */ (function () {
    function PlayerService(_httpService) {
        this._httpService = _httpService;
    }
    PlayerService_1 = PlayerService;
    PlayerService.prototype.fetchPlayers = function () {
        return this._httpService.get(PlayerService_1._baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.createPlayer = function (player) {
        return this._httpService.post(PlayerService_1._baseUrl, player, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.removePlayer = function (player) {
        return this._httpService.delete(PlayerService_1._baseUrl + "/" + player.id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.fetchPlayer = function (id) {
        return this._httpService.get(PlayerService_1._baseUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.updatePlayer = function (player) {
        return this._httpService.put(PlayerService_1._baseUrl + "/" + player.id, player, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.searchPlayers = function (term) {
        if (term) {
            term = term.trim();
        }
        if (!term) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this._httpService.get(PlayerService_1._baseUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PlayerService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", body was: " + error.error);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    PlayerService._baseUrl = 'api/players';
    PlayerService = PlayerService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
    var PlayerService_1;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jpernet/VSCodeProjects/risk/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map