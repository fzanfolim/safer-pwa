(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar color=\"#fa8d00\"></ngx-loading-bar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <!-- <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form> -->\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item \" href=\"javascript:void(0)\" (click)=\"sair()\">Sair</a>\n                       \n                    </div>\n                </li>\n      \n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\" style=\"width:150px; height: 49px; max-height: 49px;\">\n            <!-- <img src=\"/assets/img/angular2-logo-red.png\"/> -->\n            <img src=\"/assets/img/safer-logo.png\" style=\"width:60px;\"/>\n        </div>\n        \n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"orange\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-3.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange \" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div> -->\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full-layout/full-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full-layout/full-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <div style=\"text-align:center\">\n        <img src=\"/assets/img/safer-logo1.png\" style=\"width:155px;\"/>\n    </div>\n    \n    <!-- <div class=\"sidebar\" data-color=\"orange\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-3.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div> -->\n    <div class=\"main-panel\">\n        <!-- <app-navbar></app-navbar> -->\n        <router-outlet></router-outlet>\n        <!-- <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div> -->\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange \" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div> -->\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"default~layouts-admin-layout-admin-layout-module~layouts-full-layout-full-layout-module",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/full-layout/full-layout.module": [
		"./src/app/layouts/full-layout/full-layout.module.ts",
		"default~layouts-admin-layout-admin-layout-module~layouts-full-layout-full-layout-module",
		"layouts-full-layout-full-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ "./src/app/layouts/full-layout/full-layout.component.ts");
/* harmony import */ var _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/auth/auth.service */ "./src/app/providers/auth/auth.service.ts");
/* harmony import */ var _providers_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./providers/auth/auth-guard.service */ "./src/app/providers/auth/auth-guard.service.ts");
/* harmony import */ var _providers_local_storage_local_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/local-storage/local-storage */ "./src/app/providers/local-storage/local-storage.ts");
/* harmony import */ var _providers_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/local-storage/jwt-token */ "./src/app/providers/local-storage/jwt-token.ts");
/* harmony import */ var _providers_remote_service_remote_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/remote-service/remote-service */ "./src/app/providers/remote-service/remote-service.ts");
/* harmony import */ var _providers_remote_service_remote_service_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./providers/remote-service/remote-service-users */ "./src/app/providers/remote-service/remote-service-users.ts");
/* harmony import */ var _providers_remote_service_remote_service_perfil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./providers/remote-service/remote-service-perfil */ "./src/app/providers/remote-service/remote-service-perfil.ts");
/* harmony import */ var _providers_remote_service_remote_service_empresa__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./providers/remote-service/remote-service-empresa */ "./src/app/providers/remote-service/remote-service-empresa.ts");
/* harmony import */ var _providers_remote_service_remote_service_unidade__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./providers/remote-service/remote-service-unidade */ "./src/app/providers/remote-service/remote-service-unidade.ts");
/* harmony import */ var _providers_remote_service_remote_service_cargo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./providers/remote-service/remote-service-cargo */ "./src/app/providers/remote-service/remote-service-cargo.ts");
/* harmony import */ var _providers_remote_service_remote_service_funcionarios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./providers/remote-service/remote-service-funcionarios */ "./src/app/providers/remote-service/remote-service-funcionarios.ts");
/* harmony import */ var _providers_remote_service_remote_service_tipo_sanguinio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./providers/remote-service/remote-service-tipo-sanguinio */ "./src/app/providers/remote-service/remote-service-tipo-sanguinio.ts");
/* harmony import */ var _providers_remote_service_remote_service_treinamento__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./providers/remote-service/remote-service-treinamento */ "./src/app/providers/remote-service/remote-service-treinamento.ts");
/* harmony import */ var _providers_notification_notification__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./providers/notification/notification */ "./src/app/providers/notification/notification.ts");
/* harmony import */ var _providers_default_default__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./providers/default/default */ "./src/app/providers/default/default.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _ngx_loading_bar_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-loading-bar/http */ "./node_modules/@ngx-loading-bar/http/__ivy_ngcc__/fesm5/ngx-loading-bar-http.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/__ivy_ngcc__/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_26__["LoadingBarModule"],
                _ngx_loading_bar_http__WEBPACK_IMPORTED_MODULE_27__["LoadingBarHttpModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_28__["LoadingBarRouterModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
                _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_10__["FullLayoutComponent"]
            ],
            providers: [
                _providers_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _providers_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _providers_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_14__["JwtTokenService"],
                _providers_local_storage_local_storage__WEBPACK_IMPORTED_MODULE_13__["LocalStorageService"],
                _providers_remote_service_remote_service__WEBPACK_IMPORTED_MODULE_15__["RemoteServiceProvider"],
                _providers_remote_service_remote_service_users__WEBPACK_IMPORTED_MODULE_16__["RemoteServiceUsersProvider"],
                _providers_remote_service_remote_service_perfil__WEBPACK_IMPORTED_MODULE_17__["RemoteServicePerfilProvider"],
                _providers_remote_service_remote_service_empresa__WEBPACK_IMPORTED_MODULE_18__["RemoteServiceEmpresaProvider"],
                _providers_remote_service_remote_service_unidade__WEBPACK_IMPORTED_MODULE_19__["RemoteServiceUnidadeProvider"],
                _providers_notification_notification__WEBPACK_IMPORTED_MODULE_24__["NotificationeService"],
                _providers_default_default__WEBPACK_IMPORTED_MODULE_25__["DefaultService"],
                _providers_remote_service_remote_service_cargo__WEBPACK_IMPORTED_MODULE_20__["RemoteServiceCargoProvider"],
                _providers_remote_service_remote_service_funcionarios__WEBPACK_IMPORTED_MODULE_21__["RemoteServiceFuncionariosProvider"],
                _providers_remote_service_remote_service_tipo_sanguinio__WEBPACK_IMPORTED_MODULE_22__["RemoteServiceTipoSanguinioProvider"],
                _providers_remote_service_remote_service_treinamento__WEBPACK_IMPORTED_MODULE_23__["RemoteServiceTreinamentoProvider"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MAT_DATE_LOCALE"], useValue: 'pt-BR' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full-layout/full-layout.component */ "./src/app/layouts/full-layout/full-layout.component.ts");
/* harmony import */ var _providers_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/auth/auth-guard.service */ "./src/app/providers/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }],
        canActivate: [_providers_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: '',
        component: _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/full-layout/full-layout.module#FullLayoutModule',
                canActivate: [_providers_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
            }]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.dropdown-menu .dropdown-item:hover { background: #ff9800 }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNDQUFzQyxvQkFBb0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZmY5ODAwIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _providers_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/local-storage/jwt-token */ "./src/app/providers/local-storage/jwt-token.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, route, jwtToken, router) {
        this.element = element;
        this.route = route;
        this.jwtToken = jwtToken;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sair = function () {
        this.jwtToken.token = '';
        this.router.navigate(['/login'], { relativeTo: this.route.parent });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _providers_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_4__["JwtTokenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _providers_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_4__["JwtTokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/usuarios', title: 'Usuários Sistema', icon: 'person', class: '' },
    { path: '/perfil', title: 'Pefil Acesso', icon: 'supervised_user_circle', class: '' },
    { path: '/empresa', title: 'Empresas', icon: 'work', class: '' },
    { path: '/unidade', title: 'Unidades', icon: 'account_balance', class: '' },
    { path: '/treinamento', title: 'Treinamentos', icon: 'pending_actions', class: '' },
    { path: '/cargo', title: 'Cargos', icon: 'engineering', class: '' },
    { path: '/funcionario', title: 'Funcionarios', icon: 'portrait', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full-layout/full-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/full-layout/full-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC1sYXlvdXQvZnVsbC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/full-layout/full-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        //   const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        //   if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
        //       // if we are on windows OS we activate the perfectScrollbar function
        //       document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        //   } else {
        //       document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        //   }
        //   const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        //   const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
        //   this.location.subscribe((ev:PopStateEvent) => {
        //       this.lastPoppedUrl = ev.url;
        //   });
        //    this.router.events.subscribe((event:any) => {
        //       if (event instanceof NavigationStart) {
        //          if (event.url != this.lastPoppedUrl)
        //              this.yScrollStack.push(window.scrollY);
        //      } else if (event instanceof NavigationEnd) {
        //          if (event.url == this.lastPoppedUrl) {
        //              this.lastPoppedUrl = undefined;
        //              window.scrollTo(0, this.yScrollStack.pop());
        //          } else
        //              window.scrollTo(0, 0);
        //      }
        //   });
        //   this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //        elemMainPanel.scrollTop = 0;
        //        elemSidebar.scrollTop = 0;
        //   });
        //   if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        //       let ps = new PerfectScrollbar(elemMainPanel);
        //       ps = new PerfectScrollbar(elemSidebar);
        //   }
        //   const window_width = $(window).width();
        //   let $sidebar = $('.sidebar');
        //   let $sidebar_responsive = $('body > .navbar-collapse');
        //   let $sidebar_img_container = $sidebar.find('.sidebar-background');
        //   if(window_width > 767){
        //       if($('.fixed-plugin .dropdown').hasClass('show-dropdown')){
        //           $('.fixed-plugin .dropdown').addClass('open');
        //       }
        //   }
        //   $('.fixed-plugin a').click(function(event){
        //     // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        //       if($(this).hasClass('switch-trigger')){
        //           if(event.stopPropagation){
        //               event.stopPropagation();
        //           }
        //           else if(window.event){
        //              window.event.cancelBubble = true;
        //           }
        //       }
        //   });
        //   $('.fixed-plugin .badge').click(function(){
        //       let $full_page_background = $('.full-page-background');
        //       $(this).siblings().removeClass('active');
        //       $(this).addClass('active');
        //       var new_color = $(this).data('color');
        //       if($sidebar.length !== 0){
        //           $sidebar.attr('data-color', new_color);
        //       }
        //       if($sidebar_responsive.length != 0){
        //           $sidebar_responsive.attr('data-color',new_color);
        //       }
        //   });
        //   $('.fixed-plugin .img-holder').click(function(){
        //       let $full_page_background = $('.full-page-background');
        //       $(this).parent('li').siblings().removeClass('active');
        //       $(this).parent('li').addClass('active');
        //       var new_image = $(this).find("img").attr('src');
        //       if($sidebar_img_container.length !=0 ){
        //           $sidebar_img_container.fadeOut('fast', function(){
        //              $sidebar_img_container.css('background-image','url("' + new_image + '")');
        //              $sidebar_img_container.fadeIn('fast');
        //           });
        //       }
        //       if($full_page_background.length != 0){
        //           $full_page_background.fadeOut('fast', function(){
        //              $full_page_background.css('background-image','url("' + new_image + '")');
        //              $full_page_background.fadeIn('fast');
        //           });
        //       }
        //       if($sidebar_responsive.length != 0){
        //           $sidebar_responsive.css('background-image','url("' + new_image + '")');
        //       }
        //   });
    };
    FullLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./full-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full-layout/full-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full-layout/full-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/providers/auth/auth-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/auth/auth-guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/providers/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    //canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log('AUTH GUARD: ' + this.authService.check);
        if (this.authService.check || state.url == '/login' || state.url == '/nova-senha') {
            return true;
        }
        else {
            this.router.navigate(['../login'], { relativeTo: this.route.parent });
            return true;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/providers/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/providers/auth/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../local-storage/jwt-token */ "./src/app/providers/local-storage/jwt-token.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthService = /** @class */ (function () {
    function AuthService(jwtToken, router) {
        this.jwtToken = jwtToken;
        this.router = router;
        this.check = false;
        this.check = this.jwtToken.get('token') ? true : false;
        console.log('AUTH.SERVICE : ' + this.check);
    }
    AuthService.ctorParameters = function () { return [
        { type: _local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_2__["JwtTokenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_2__["JwtTokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/providers/default/default.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/default/default.ts ***!
  \**********************************************/
/*! exports provided: DefaultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultService", function() { return DefaultService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/jwt-token */ "./src/app/providers/local-storage/jwt-token.ts");
/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification/notification */ "./src/app/providers/notification/notification.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var DefaultService = /** @class */ (function () {
    function DefaultService(jwtToken, router, route, notifification) {
        this.jwtToken = jwtToken;
        this.router = router;
        this.route = route;
        this.notifification = notifification;
    }
    DefaultService.prototype.error = function (error, title) {
        console.log("ERROR: ", error);
        if (error.hasOwnProperty('status') || error.status == 401) {
            this.notifification.show('top', 'right', 'danger', title, 'Não autorizado faça login novamente!');
            this.jwtToken.token = '';
            this.router.navigate(['/login'], { relativeTo: this.route.parent });
        }
        else {
            this.notifification.show('top', 'right', 'danger', title, error);
        }
    };
    DefaultService.prototype.formatDDMMYYYY = function (myDate) {
        return __awaiter(this, void 0, void 0, function () {
            var format, locale;
            return __generator(this, function (_a) {
                format = 'dd/MM/yyyy';
                locale = 'en-US';
                return [2 /*return*/, Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(myDate, format, locale)];
            });
        });
    };
    DefaultService.prototype.formatYYYYMMDD = function (myDate) {
        return __awaiter(this, void 0, void 0, function () {
            var format, locale;
            return __generator(this, function (_a) {
                format = 'yyyy-MM-dd';
                locale = 'en-US';
                return [2 /*return*/, Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(myDate, format, locale)];
            });
        });
    };
    DefaultService.ctorParameters = function () { return [
        { type: _local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_1__["JwtTokenService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _notification_notification__WEBPACK_IMPORTED_MODULE_2__["NotificationeService"] }
    ]; };
    DefaultService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage_jwt_token__WEBPACK_IMPORTED_MODULE_1__["JwtTokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _notification_notification__WEBPACK_IMPORTED_MODULE_2__["NotificationeService"]])
    ], DefaultService);
    return DefaultService;
}());



/***/ }),

/***/ "./src/app/providers/local-storage/jwt-token.ts":
/*!******************************************************!*\
  !*** ./src/app/providers/local-storage/jwt-token.ts ***!
  \******************************************************/
/*! exports provided: JwtTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtTokenService", function() { return JwtTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ "./src/app/providers/local-storage/local-storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TOKEN_KEY = 'token';
var JwtTokenService = /** @class */ (function () {
    function JwtTokenService(localStorage) {
        this.localStorage = localStorage;
    }
    Object.defineProperty(JwtTokenService.prototype, "token", {
        set: function (value) {
            value ? this.localStorage.set(TOKEN_KEY, value) : this.localStorage.remove(TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    JwtTokenService.prototype.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this.localStorage.get(TOKEN_KEY);
    };
    JwtTokenService.ctorParameters = function () { return [
        { type: _local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }
    ]; };
    JwtTokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], JwtTokenService);
    return JwtTokenService;
}());



/***/ }),

/***/ "./src/app/providers/local-storage/local-storage.ts":
/*!**********************************************************!*\
  !*** ./src/app/providers/local-storage/local-storage.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.set = function (key, value) {
        window.localStorage[key] = value;
        return this;
    };
    LocalStorageService.prototype.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return window.localStorage[key] || defaultValue;
    };
    LocalStorageService.prototype.setObject = function (key, value) {
        window.localStorage[key] = JSON.stringify(value);
        return this;
    };
    LocalStorageService.prototype.getObject = function (key) {
        if (window.localStorage[key]) {
            return JSON.parse(window.localStorage[key]);
        }
        else {
            return '';
        }
    };
    LocalStorageService.prototype.remove = function (key) {
        window.localStorage.removeItem(key);
        return this;
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/providers/notification/notification.ts":
/*!********************************************************!*\
  !*** ./src/app/providers/notification/notification.ts ***!
  \********************************************************/
/*! exports provided: NotificationeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationeService", function() { return NotificationeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotificationeService = /** @class */ (function () {
    function NotificationeService() {
    }
    NotificationeService.prototype.show = function (from, align, type, title, message) {
        // const type = ['','info','success','warning','danger'];
        // const color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            // type: type[color],
            type: type,
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: "<div data-notify=\"container\" class=\"col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon\" role=\"alert\">\n          <button mat-button  type=\"button\" aria-hidden=\"true\" class=\"close mat-button\" data-notify=\"dismiss\">  <i class=\"material-icons\">close</i></button>\n          <i class=\"material-icons\" data-notify=\"icon\">notifications</i> \n          <span data-notify=\"title\">" + title + "</span> \n          <span data-notify=\"message\">" + message + "</span>\n          <div class=\"progress\" data-notify=\"progressbar\">\n            <div class=\"progress-bar progress-bar-{0}\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"></div>\n          </div>\n          <a href=\"{3}\" target=\"{4}\" data-notify=\"url\"></a> \n        </div>"
        });
    };
    NotificationeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationeService);
    return NotificationeService;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-cargo.ts":
/*!******************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-cargo.ts ***!
  \******************************************************************/
/*! exports provided: RemoteServiceCargoProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceCargoProvider", function() { return RemoteServiceCargoProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceCargoProvider = /** @class */ (function () {
    function RemoteServiceCargoProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceCargoProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceCargoProvider.prototype.configureTokenHeaderForm = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + token
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceCargoProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].CARGO, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceCargoProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].CARGO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceCargoProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].CARGO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceCargoProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceCargoProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceCargoProvider);
    return RemoteServiceCargoProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-empresa.ts":
/*!********************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-empresa.ts ***!
  \********************************************************************/
/*! exports provided: RemoteServiceEmpresaProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceEmpresaProvider", function() { return RemoteServiceEmpresaProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceEmpresaProvider = /** @class */ (function () {
    function RemoteServiceEmpresaProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceEmpresaProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceEmpresaProvider.prototype.configureTokenHeaderForm = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + token
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceEmpresaProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].EMPRESA, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceEmpresaProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeaderForm(token);
        var res = new Promise(function (resolve, reject) {
            // let body = JSON.stringify(dados);
            var formData = new FormData();
            formData.append('nome', dados.nome);
            formData.append('cnpj', dados.cnpj);
            formData.append('logo', dados.logo);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].EMPRESA, formData, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceEmpresaProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeaderForm(token);
        var res = new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append('id', dados.id);
            formData.append('nome', dados.nome);
            formData.append('cnpj', dados.cnpj);
            formData.append('logo', dados.logo);
            formData.append('status', dados.status);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].EMPRESA, formData, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceEmpresaProvider.prototype.listUnidades = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var json = {
                empresas: dados
            };
            var body = JSON.stringify(json);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].UNIDADES_BY_EMPRESAS, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceEmpresaProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceEmpresaProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceEmpresaProvider);
    return RemoteServiceEmpresaProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-funcionarios.ts":
/*!*************************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-funcionarios.ts ***!
  \*************************************************************************/
/*! exports provided: RemoteServiceFuncionariosProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceFuncionariosProvider", function() { return RemoteServiceFuncionariosProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceFuncionariosProvider = /** @class */ (function () {
    function RemoteServiceFuncionariosProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceFuncionariosProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceFuncionariosProvider.prototype.configureTokenHeaderForm = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + token
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceFuncionariosProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].FUNCIONARIO, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceFuncionariosProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeaderForm(token);
        var res = new Promise(function (resolve, reject) {
            var formData = new FormData();
            formData.append('nome', dados.nome);
            formData.append('idUnidade', dados.idUnidade);
            formData.append('rg', dados.rg);
            formData.append('emissor', dados.emissor);
            formData.append('dataAdmissao', dados.dataAdmissao);
            formData.append('dataNascimento', dados.dataNascimento);
            formData.append('dataVencimentoAso', dados.dataVencimentoAso);
            formData.append('cnh', dados.cnh);
            formData.append('categoriaCnh', dados.categoriaCnh);
            formData.append('idTipoSaguinio', dados.idTipoSaguinio);
            formData.append('idCargo', dados.idCargo);
            formData.append('tercerizado', dados.tercerizado);
            formData.append('empresaTerceira', dados.empresaTerceira);
            formData.append('status', dados.status);
            formData.append('foto', dados.foto);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].FUNCIONARIO, formData, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceFuncionariosProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].FUNCIONARIO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceFuncionariosProvider.prototype.byUnidade = function (idUnidade, token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].FUNCIONARIO + "?idUnidade=" + idUnidade, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceFuncionariosProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceFuncionariosProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceFuncionariosProvider);
    return RemoteServiceFuncionariosProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-perfil.ts":
/*!*******************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-perfil.ts ***!
  \*******************************************************************/
/*! exports provided: RemoteServicePerfilProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServicePerfilProvider", function() { return RemoteServicePerfilProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServicePerfilProvider = /** @class */ (function () {
    function RemoteServicePerfilProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServicePerfilProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServicePerfilProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].PERFIL, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServicePerfilProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].PERFIL, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServicePerfilProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].PERFIL, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServicePerfilProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServicePerfilProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServicePerfilProvider);
    return RemoteServicePerfilProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-tipo-sanguinio.ts":
/*!***************************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-tipo-sanguinio.ts ***!
  \***************************************************************************/
/*! exports provided: RemoteServiceTipoSanguinioProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceTipoSanguinioProvider", function() { return RemoteServiceTipoSanguinioProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceTipoSanguinioProvider = /** @class */ (function () {
    function RemoteServiceTipoSanguinioProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceTipoSanguinioProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceTipoSanguinioProvider.prototype.configureTokenHeaderForm = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + token
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceTipoSanguinioProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].TIPO_SANGUINIO, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceTipoSanguinioProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].TIPO_SANGUINIO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceTipoSanguinioProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].TIPO_SANGUINIO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceTipoSanguinioProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceTipoSanguinioProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceTipoSanguinioProvider);
    return RemoteServiceTipoSanguinioProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-treinamento.ts":
/*!************************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-treinamento.ts ***!
  \************************************************************************/
/*! exports provided: RemoteServiceTreinamentoProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceTreinamentoProvider", function() { return RemoteServiceTreinamentoProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceTreinamentoProvider = /** @class */ (function () {
    function RemoteServiceTreinamentoProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceTreinamentoProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceTreinamentoProvider.prototype.configureTokenHeaderForm = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + token
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceTreinamentoProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].TREINAMENTO, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceTreinamentoProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].TREINAMENTO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceTreinamentoProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].TREINAMENTO, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceTreinamentoProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceTreinamentoProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceTreinamentoProvider);
    return RemoteServiceTreinamentoProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-unidade.ts":
/*!********************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-unidade.ts ***!
  \********************************************************************/
/*! exports provided: RemoteServiceUnidadeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceUnidadeProvider", function() { return RemoteServiceUnidadeProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceUnidadeProvider = /** @class */ (function () {
    function RemoteServiceUnidadeProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceUnidadeProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceUnidadeProvider.prototype.configureTokenHeaderForm = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + token
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceUnidadeProvider.prototype.all = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].UNIDADE, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUnidadeProvider.prototype.add = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].UNIDADE, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUnidadeProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].UNIDADE, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUnidadeProvider.prototype.funcionarios = function (idUnidade, token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].FUNCIONARIO_BY_UNIDADE + "?idUnidade=" + idUnidade, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUnidadeProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceUnidadeProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceUnidadeProvider);
    return RemoteServiceUnidadeProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service-users.ts":
/*!******************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service-users.ts ***!
  \******************************************************************/
/*! exports provided: RemoteServiceUsersProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceUsersProvider", function() { return RemoteServiceUsersProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceUsersProvider = /** @class */ (function () {
    function RemoteServiceUsersProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceUsersProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceUsersProvider.prototype.usuarioLista = function (token) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            _this.http.get(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].USERS, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUsersProvider.prototype.incluir = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].USERS, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUsersProvider.prototype.update = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.put(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].USERS, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    resolve(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUsersProvider.prototype.config = function (token, dados) {
        var _this = this;
        this.configureTokenHeader(token);
        var res = new Promise(function (resolve, reject) {
            var body = JSON.stringify(dados);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].USERS_CONFIG, body, _this.tokenHttpOptions).subscribe(function (response) {
                var data = response.json();
                console.log(data);
                if (data.error) {
                    //Token Inválido
                    reject(false);
                }
                else if (data.success) {
                    resolve(data.success);
                }
            }, function (error) {
                reject(error);
            });
        });
        return res;
    };
    RemoteServiceUsersProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceUsersProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceUsersProvider);
    return RemoteServiceUsersProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/remote-service.ts":
/*!************************************************************!*\
  !*** ./src/app/providers/remote-service/remote-service.ts ***!
  \************************************************************/
/*! exports provided: RemoteServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteServiceProvider", function() { return RemoteServiceProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/providers/remote-service/routes.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RemoteServiceProvider = /** @class */ (function () {
    function RemoteServiceProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider remote-service');
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.httpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headers
        });
        this.headersLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.httpOptionsLocal = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: this.headersLocal
        });
    }
    RemoteServiceProvider.prototype.doLogin = function (email, password) {
        var _this = this;
        console.log("RemoteServiceProvider.doLogin");
        var res = new Promise(function (resolve) {
            var jsonBody = {
                email: email,
                password: password
            };
            var body = JSON.stringify(jsonBody);
            _this.http.post(_routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].LOGIN, body, _this.httpOptions).subscribe(function (response) {
                //this.http.get(ServiceURL.LOGIN, this.httpOptions).subscribe((response) => {
                var data = response.json();
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log('[ERROR] RemoteServiceProvider.doLogin: http.post' + _routes__WEBPACK_IMPORTED_MODULE_2__["ServiceURL"].LOGIN);
                // console.log(JSON.stringify(error));
                resolve(error.json());
            });
        });
        return res;
    };
    RemoteServiceProvider.prototype.configureTokenHeader = function (token) {
        var tokenHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json;',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        });
        this.tokenHttpOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: tokenHeader
        });
    };
    RemoteServiceProvider.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    RemoteServiceProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());



/***/ }),

/***/ "./src/app/providers/remote-service/routes.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/remote-service/routes.ts ***!
  \****************************************************/
/*! exports provided: BASE_URL, ServiceURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceURL", function() { return ServiceURL; });
/*
Constantes das URLs dos Serviços Produção
*/
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function BASE_URL() {
    var url;
    if (window.location.origin == window.location.protocol + "//140.238.187.249:8081") {
        url = window.location.protocol + "//140.238.187.249:3030";
    }
    else {
        url = window.location.origin == 'http://localhost:8081'
            ? "http://localhost:3030"
            : window.location.protocol + "//URL_HOMOLOGACAO";
    }
    return url;
}
// export const PAIS = 1;
var ServiceURL = /** @class */ (function () {
    function ServiceURL() {
    }
    ServiceURL.LOGIN = BASE_URL() + "/auth";
    ServiceURL.USERS = BASE_URL() + "/api/v1/users";
    ServiceURL.USERS_CONFIG = BASE_URL() + "/api/v1/users-config";
    ServiceURL.PERFIL = BASE_URL() + "/api/v1/perfil";
    ServiceURL.EMPRESA = BASE_URL() + "/api/v1/empresa";
    ServiceURL.UNIDADES_BY_EMPRESAS = BASE_URL() + "/api/v1/unidadesByEmpresa";
    ServiceURL.UNIDADE = BASE_URL() + "/api/v1/unidade";
    ServiceURL.CARGO = BASE_URL() + "/api/v1/cargo";
    ServiceURL.FUNCIONARIO_BY_UNIDADE = BASE_URL() + "/api/v1/unidade/funcionario";
    ServiceURL.FUNCIONARIO = BASE_URL() + "/api/v1/funcionario";
    ServiceURL.TIPO_SANGUINIO = BASE_URL() + "/api/v1/tipo-sanguinio";
    ServiceURL.TREINAMENTO = BASE_URL() + "/api/v1/treinamento";
    return ServiceURL;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/felipezanfolimdasilva/Felipe Zanfolim/Desenvolvimento Web/safer/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map