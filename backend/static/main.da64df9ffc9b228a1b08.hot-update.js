"use strict";
self["webpackHotUpdatemy_webpack_project"]("main",{

/***/ "./src/store/slices/auth/auth.api.ts":
/*!*******************************************!*\
  !*** ./src/store/slices/auth/auth.api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthApi": () => (/* binding */ AuthApi),
/* harmony export */   "useLazySignInQuery": () => (/* binding */ useLazySignInQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js");

var AuthApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "auth/api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({
        baseUrl: "/auth",
    }),
    endpoints: function (build) { return ({
        signIn: build.query({
            query: function (payload) { return ({
                url: "/signin",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }); },
        }),
    }); },
});
var useLazySignInQuery = AuthApi.useLazySignInQuery;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4907ae7139e3b17583a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kYTY0ZGY5ZmZjOWIyMjhhMWIwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDbEUsY0FBYyx1RUFBUztBQUM5QjtBQUNBLGVBQWUsNEVBQWM7QUFDN0I7QUFDQSxLQUFLO0FBQ0wsa0NBQWtDO0FBQ2xDO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCLFNBQVM7QUFDVCxLQUFLLElBQUk7QUFDVCxDQUFDO0FBQ007Ozs7Ozs7OztVQ25CUCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdG9yZS9zbGljZXMvYXV0aC9hdXRoLmFwaS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xyXG5leHBvcnQgdmFyIEF1dGhBcGkgPSBjcmVhdGVBcGkoe1xyXG4gICAgcmVkdWNlclBhdGg6IFwiYXV0aC9hcGlcIixcclxuICAgIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xyXG4gICAgICAgIGJhc2VVcmw6IFwiL2F1dGhcIixcclxuICAgIH0pLFxyXG4gICAgZW5kcG9pbnRzOiBmdW5jdGlvbiAoYnVpbGQpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgc2lnbkluOiBidWlsZC5xdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBmdW5jdGlvbiAocGF5bG9hZCkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvc2lnbmluXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICAgICAgICB9KTsgfSxcclxuICAgICAgICB9KSxcclxuICAgIH0pOyB9LFxyXG59KTtcclxuZXhwb3J0IHZhciB1c2VMYXp5U2lnbkluUXVlcnkgPSBBdXRoQXBpLnVzZUxhenlTaWduSW5RdWVyeTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDQ5MDdhZTcxMzllM2IxNzU4M2FcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=