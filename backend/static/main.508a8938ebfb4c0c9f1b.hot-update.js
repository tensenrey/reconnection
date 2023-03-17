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
    console.log("hello");
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
/******/ 	__webpack_require__.h = () => ("4e59c565141708092774")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MDhhODkzOGViZmI0YzBjOWYxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTTtBQUN4QztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQVc7QUFDOUI7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFdBQVcsMERBQW1CLENBQUMsdURBQWM7QUFDN0M7Ozs7Ozs7OztVQ2hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcml2YXRlL2d1YXJkLnByaXZhdGUudHN4Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmV4cG9ydCB2YXIgR3VhcmRSb3V0ZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XHJcbiAgICB2YXIgc2VjcmV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWNyZXRcIik7XHJcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNlY3JldCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZShcIi9hdXRoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VjcmV0ICE9PSBudWxsICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiMvYXV0aFwiKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlKFwiL0B0ZW5zZW5yZXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKTtcclxufTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGU1OWM1NjUxNDE3MDgwOTI3NzRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=