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
    console.log(1);
    console.log(1);
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
/******/ 	__webpack_require__.h = () => ("508a8938ebfb4c0c9f1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZDI3Mjc1YjgwOTA1NWJkMDNlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUN4QztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQVc7QUFDOUI7QUFDQTtBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsV0FBVywwREFBbUIsQ0FBQyx1REFBYztBQUM3Qzs7Ozs7Ozs7O1VDakJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaXZhdGUvZ3VhcmQucHJpdmF0ZS50c3giLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuZXhwb3J0IHZhciBHdWFyZFJvdXRlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcclxuICAgIHZhciBzZWNyZXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlY3JldFwiKTtcclxuICAgIHZhciBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZygxKTtcclxuICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoc2VjcmV0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKFwiL2F1dGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWNyZXQgIT09IG51bGwgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiIy9hdXRoXCIpIHtcclxuICAgICAgICAgICAgbmF2aWdhdGUoXCIvQHRlbnNlbnJleVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xyXG59O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MDhhODkzOGViZmI0YzBjOWYxYlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==