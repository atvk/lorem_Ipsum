/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closePopup: () => (/* binding */ closePopup),
/* harmony export */   openPopup: () => (/* binding */ openPopup),
/* harmony export */   setCloseByClickListeners: () => (/* binding */ setCloseByClickListeners)
/* harmony export */ });
function handleEscape(e) {
  if (e.key === "Escape") {
    var openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
}
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}
function setCloseByClickListeners(popups) {
  popups.forEach(function (popup) {
    popup.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("popup__close")) {
        closePopup(popup);
      }
      if (e.target.classList.contains("popup_is-opened")) {
        closePopup(popup);
      }
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/modal.js */ "./src/scripts/modal.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZWVkMTkzY2U0ZDQ3NmE4NGQ1Yy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFNBQVNBLFlBQVlBLENBQUNDLENBQUMsRUFBRTtFQUN2QixJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxRQUFRLEVBQUU7SUFDdEIsSUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5REMsVUFBVSxDQUFDSCxXQUFXLENBQUM7RUFDekI7QUFDRjtBQUVPLFNBQVNJLFNBQVNBLENBQUNDLEtBQUssRUFBRTtFQUMvQkEsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUN0Q04sUUFBUSxDQUFDTyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVYLFlBQVksQ0FBQztBQUNwRDtBQUVPLFNBQVNNLFVBQVVBLENBQUNFLEtBQUssRUFBRTtFQUNoQ0EsS0FBSyxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztFQUN6Q1IsUUFBUSxDQUFDUyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUViLFlBQVksQ0FBQztBQUN2RDtBQUVPLFNBQVNjLHdCQUF3QkEsQ0FBQ0MsTUFBTSxFQUFFO0VBQy9DQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxVQUFDUixLQUFLLEVBQUs7SUFDeEJBLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUNWLENBQUMsRUFBSztNQUN6QyxJQUFJQSxDQUFDLENBQUNnQixNQUFNLENBQUNSLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQy9DWixVQUFVLENBQUNFLEtBQUssQ0FBQztNQUNuQjtNQUNBLElBQUlQLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ1IsU0FBUyxDQUFDUyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNsRFosVUFBVSxDQUFDRSxLQUFLLENBQUM7TUFDbkI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvcGFnZXMvaW5kZXguY3NzPzY1NmQiLCJ3ZWJwYWNrOi8vY2hlc3MvLi9zcmMvc2NyaXB0cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hlc3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaGVzcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NoZXNzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImZ1bmN0aW9uIGhhbmRsZUVzY2FwZShlKSB7XG4gIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IG9wZW5lZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9pcy1vcGVuZWRcIik7XG4gICAgY2xvc2VQb3B1cChvcGVuZWRQb3B1cCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfaXMtb3BlbmVkXCIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfaXMtb3BlbmVkXCIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2xvc2VCeUNsaWNrTGlzdGVuZXJzKHBvcHVwcykge1xuICBwb3B1cHMuZm9yRWFjaCgocG9wdXApID0+IHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlXCIpKSB7XG4gICAgICAgIGNsb3NlUG9wdXAocG9wdXApO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX2lzLW9wZW5lZFwiKSkge1xuICAgICAgICBjbG9zZVBvcHVwKHBvcHVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCAnLi4vcGFnZXMvaW5kZXguY3NzJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzL21vZGFsLmpzJ1xuXG4iXSwibmFtZXMiOlsiaGFuZGxlRXNjYXBlIiwiZSIsImtleSIsIm9wZW5lZFBvcHVwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VQb3B1cCIsIm9wZW5Qb3B1cCIsInBvcHVwIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRDbG9zZUJ5Q2xpY2tMaXN0ZW5lcnMiLCJwb3B1cHMiLCJmb3JFYWNoIiwidGFyZ2V0IiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9