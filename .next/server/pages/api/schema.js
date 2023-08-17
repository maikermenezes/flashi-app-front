(function() {
var exports = {};
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 2063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var pages_api_content_schema_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2228);

function handler(_, res) {
  res.status(200).json(pages_api_content_schema_json__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ }),

/***/ 2228:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"home":{"title":"PWA Boilerplate","description":"Progressive Web App boilerplate written in TypeScript, React, and Next. Designed to help you start your next PWA project faster."},"why-pwa":{"title":"Why PWA?","description":"What are the benefits of choosing PWA, what can PWA do, and more."},"get-started":{"title":"How to get started","description":"How to get started with PWA Boilerplate."}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2063));
module.exports = __webpack_exports__;

})();