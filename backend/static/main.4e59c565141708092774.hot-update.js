"use strict";
self["webpackHotUpdatemy_webpack_project"]("main",{

/***/ "./src/private/guard.private.tsx":
/*!***************************************!*\
  !*** ./src/private/guard.private.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuardRoute": () => (/* binding */ GuardRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/dist/index.js");


var GuardRoute = function (_a) {
    var children = _a.children;
    var secret = localStorage.getItem("secret");
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    console.log("whatsup");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (secret === null) {
            navigate("/auth");
        }
        if (secret !== null && window.location.hash === "#/auth") {
            navigate("/@tensenrey");
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children);
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da64df9ffc9b228a1b08")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZTU5YzU2NTE0MTcwODA5Mjc3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUN4QztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQVc7QUFDOUI7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFdBQVcsMERBQW1CLENBQUMsdURBQWM7QUFDN0M7Ozs7Ozs7OztVQ2hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcml2YXRlL2d1YXJkLnByaXZhdGUudHN4Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmV4cG9ydCB2YXIgR3VhcmRSb3V0ZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XHJcbiAgICB2YXIgc2VjcmV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWNyZXRcIik7XHJcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc29sZS5sb2coXCJ3aGF0c3VwXCIpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoc2VjcmV0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKFwiL2F1dGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXQgIT09IG51bGwgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiIy9hdXRoXCIpIHtcclxuICAgICAgICAgICAgbmF2aWdhdGUoXCIvQHRlbnNlbnJleVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xyXG59O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYTY0ZGY5ZmZjOWIyMjhhMWIwOFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==