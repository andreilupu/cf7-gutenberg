/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Editor__ = __webpack_require__(1);
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    Editable = _wp$blocks.Editable,
    MediaUploadButton = _wp$blocks.MediaUploadButton,
    _wp$blocks$source = _wp$blocks.source,
    attr = _wp$blocks$source.attr,
    children = _wp$blocks$source.children;




registerBlockType('orbitfox/contact-form-7', {
	title: __('Contact Form 7'),
	icon: 'index-card',
	category: 'common',
	supports: {
		html: false
	},

	edit: __WEBPACK_IMPORTED_MODULE_0__components_Editor__["a" /* default */],
	save: function save() {
		return null;
	}
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WordPress dependencies
 */
var Component = wp.element.Component;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    withAPIData = _wp$components.withAPIData;
var __ = wp.i18n.__;
var InspectorControls = wp.blocks.InspectorControls;
var TextControl = InspectorControls.TextControl,
    SelectControl = InspectorControls.SelectControl;

var Editor = function (_Component) {
	_inherits(Editor, _Component);

	function Editor() {
		_classCallCheck(this, Editor);

		return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
	}

	_createClass(Editor, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    forms = _props.forms,
			    focus = _props.focus,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;

			var options = [{ value: 'none', label: __('-- Select Form --') }];

			var formID = attributes.formID,
			    title = attributes.title,
			    className = attributes.className;


			if (typeof forms.data !== "undefined" && forms.data !== []) {
				forms.data.forEach(function (e, i) {
					options.push({
						value: e.id,
						label: e.title
					});
				});
			}

			return wp.element.createElement(
				Placeholder,
				{
					key: 'cf-7-block',
					icon: 'email',
					label: __('Contact Form 7 Block'),
					className: className },
				wp.element.createElement(SelectControl, {
					label: __('Contact Form'),
					value: formID || "none",
					onChange: function onChange(newValue) {
						setAttributes({ formID: newValue });
					},
					options: options
				}),
				formID !== "none" && focus ? wp.element.createElement(
					InspectorControls,
					null,
					wp.element.createElement(TextControl, {
						placeholder: __('Title'),
						value: title,
						onChange: function onChange(newValue) {
							setAttributes({ title: newValue });
						} }),
					wp.element.createElement(TextControl, {
						label: __('Email'),
						onChange: function onChange(newValue) {
							setAttributes({ email: newValue });
						} })
				) : null
			);
		}
	}]);

	return Editor;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (withAPIData(function () {
	return {
		forms: '/contact-form-7/v1/contact-forms/'
	};
})(Editor));

/***/ })
/******/ ]);