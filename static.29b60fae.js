(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MenuBar = __webpack_require__(27);

var _MenuBar2 = _interopRequireDefault(_MenuBar);

var _SpMenuBar = __webpack_require__(29);

var _SpMenuBar2 = _interopRequireDefault(_SpMenuBar);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _Intro = __webpack_require__(41);

var _Intro2 = _interopRequireDefault(_Intro);

var _Product = __webpack_require__(42);

var _Product2 = _interopRequireDefault(_Product);

var _Skill = __webpack_require__(47);

var _Skill2 = _interopRequireDefault(_Skill);

var _Contact = __webpack_require__(54);

var _Contact2 = _interopRequireDefault(_Contact);

var _Footer = __webpack_require__(56);

var _Footer2 = _interopRequireDefault(_Footer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackGround = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Page__BackGround",
  componentId: "sc-1tl47bl-0"
})(["background-color:rgba(45,45,45,1);"]);

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        BackGround,
        null,
        _react2.default.createElement(_MenuBar2.default, null),
        _react2.default.createElement(_SpMenuBar2.default, null),
        _react2.default.createElement("a", { id: "top" }),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement("a", { id: "intro" }),
        _react2.default.createElement(_Intro2.default, null),
        _react2.default.createElement("a", { id: "product" }),
        _react2.default.createElement(_Product2.default, null),
        _react2.default.createElement("a", { id: "skill" }),
        _react2.default.createElement(_Skill2.default, null),
        _react2.default.createElement("a", { id: "contact" }),
        _react2.default.createElement(_Contact2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    _reactStatic.Switch,
    null,
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        null,
        "It's blog time."
      ),
      _react2.default.createElement("br", null),
      "All Posts:",
      _react2.default.createElement(
        "ul",
        null,
        posts.map(function (post) {
          return _react2.default.createElement(
            "li",
            { key: post.id },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: "/blog/post/" + post.id + "/" },
              post.title
            )
          );
        })
      )
    )
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  body {\n    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n      'Lucida Grande', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n  body {\n    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\n      'Lucida Grande', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n"]);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHotLoader = __webpack_require__(17);

var _reactStaticRoutes = __webpack_require__(18);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _MuiThemeProvider = __webpack_require__(57);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


(0, _styledComponents.injectGlobal)(_templateObject);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      _MuiThemeProvider2.default,
      null,
      _react2.default.createElement(
        _reactStatic.Switch,
        null,
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = App;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(19);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(20);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(21);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _reactUniversalComponent = __webpack_require__(23);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/pages/Page',
  file: '/Users/otonari-yuki/murasame-intro/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/components/pages/Page', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/pages/Page');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/components/pages/Page';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/otonari-yuki/murasame-intro/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/otonari-yuki/murasame-intro/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/otonari-yuki/murasame-intro/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 3

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(24);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(25);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(6);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(28);

var _AppBar = __webpack_require__(8);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(9);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnchorLinkSmoothScroll = __webpack_require__(10);

var _reactAnchorLinkSmoothScroll2 = _interopRequireDefault(_reactAnchorLinkSmoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    textAlign: "right"
  }
};

var Bar = (0, _styledComponents2.default)(_AppBar2.default).withConfig({
  displayName: "MenuBar__Bar",
  componentId: "sc-1l9m1ib-0"
})(["&&{position:fixed;background-color:rgba(206,206,206,0.8);@media only screen and (max-width:750px){display:none;}}"]);

var MenuTitle = (0, _styledComponents2.default)(_reactAnchorLinkSmoothScroll2.default).withConfig({
  displayName: "MenuBar__MenuTitle",
  componentId: "sc-1l9m1ib-1"
})(["&&{color:white;font-size:32px;text-decoration:none;:hover{color:black;}}"]);

var MenuButton = (0, _styledComponents2.default)(_reactAnchorLinkSmoothScroll2.default).withConfig({
  displayName: "MenuBar__MenuButton",
  componentId: "sc-1l9m1ib-2"
})(["&&{color:white;font-size:20px;font-weight:600;text-decoration:none;margin-left:30px;:hover{color:black;}}"]);

var MenuBar = function (_React$Component) {
  _inherits(MenuBar, _React$Component);

  function MenuBar(props) {
    _classCallCheck(this, MenuBar);

    return _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).call(this, props));
  }

  _createClass(MenuBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        "div",
        { className: classes.root },
        _react2.default.createElement(
          Bar,
          null,
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              MenuTitle,
              { href: "#top" },
              "Murasame Usa"
            ),
            _react2.default.createElement(
              "div",
              { className: classes.grow },
              _react2.default.createElement(
                MenuButton,
                { href: "#intro", offset: "64" },
                "Introduction"
              ),
              _react2.default.createElement(
                MenuButton,
                { href: "#product", offset: "63" },
                "Product"
              ),
              _react2.default.createElement(
                MenuButton,
                { href: "#skill", offset: "63" },
                "Skill"
              ),
              _react2.default.createElement(
                MenuButton,
                { href: "#contact", offset: "65" },
                "Contact"
              )
            )
          )
        )
      );
    }
  }]);

  return MenuBar;
}(_react2.default.Component);

MenuBar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(MenuBar);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Drawer = __webpack_require__(30);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = __webpack_require__(8);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(9);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _List = __webpack_require__(31);

var _List2 = _interopRequireDefault(_List);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(32);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(33);

var _Menu2 = _interopRequireDefault(_Menu);

var _ChevronLeft = __webpack_require__(34);

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ChevronRight = __webpack_require__(35);

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _Divider = __webpack_require__(36);

var _Divider2 = _interopRequireDefault(_Divider);

var _ListItem = __webpack_require__(37);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = __webpack_require__(38);

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnchorLinkSmoothScroll = __webpack_require__(10);

var _reactAnchorLinkSmoothScroll2 = _interopRequireDefault(_reactAnchorLinkSmoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpBar = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SpMenuBar__SpBar",
  componentId: "ovb928-0"
})(["@media only screen and (min-width:750px){position:fixed;}"]);

var Bar = (0, _styledComponents2.default)(_AppBar2.default).withConfig({
  displayName: "SpMenuBar__Bar",
  componentId: "ovb928-1"
})(["&&{background-color:rgba(206,206,206,0.8);}"]);

var FixToolbar = (0, _styledComponents2.default)(_Toolbar2.default).withConfig({
  displayName: "SpMenuBar__FixToolbar",
  componentId: "ovb928-2"
})(["&&{padding:0;}"]);

var MenuTitle = (0, _styledComponents2.default)(_reactAnchorLinkSmoothScroll2.default).withConfig({
  displayName: "SpMenuBar__MenuTitle",
  componentId: "ovb928-3"
})(["&&{color:#fff;font-size:22px;text-decoration:none;}"]);

var DrawerMain = (0, _styledComponents2.default)(_Drawer2.default).withConfig({
  displayName: "SpMenuBar__DrawerMain",
  componentId: "ovb928-4"
})(["&&{> div{background-color:rgba(206,206,206,0.9);}}"]);

var DrawerHeader = (0, _styledComponents2.default)("div").withConfig({
  displayName: "SpMenuBar__DrawerHeader",
  componentId: "ovb928-5"
})(["display:flex;align-items:center;padding:0 8px;justify-content:\"flex-end\";"]);

var MenuButton = (0, _styledComponents2.default)(_reactAnchorLinkSmoothScroll2.default).withConfig({
  displayName: "SpMenuBar__MenuButton",
  componentId: "ovb928-6"
})(["&&{color:black;font-size:16px;text-decoration:none;padding:20px 20px;}"]);

var SpMenuBar = function (_React$Component) {
  _inherits(SpMenuBar, _React$Component);

  function SpMenuBar(props) {
    _classCallCheck(this, SpMenuBar);

    var _this = _possibleConstructorReturn(this, (SpMenuBar.__proto__ || Object.getPrototypeOf(SpMenuBar)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleDrawerOpen = function () {
      _this.setState({ open: true });
    };

    _this.handleDrawerClose = function () {
      _this.setState({ open: false });
    };

    return _this;
  }

  _createClass(SpMenuBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;

      return _react2.default.createElement(
        SpBar,
        null,
        _react2.default.createElement(
          Bar,
          null,
          _react2.default.createElement(
            FixToolbar,
            null,
            _react2.default.createElement(
              _Toolbar2.default,
              { disableGutters: !open },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  color: "inherit",
                  "aria-label": "Open drawer",
                  onClick: this.handleDrawerOpen
                },
                _react2.default.createElement(_Menu2.default, null)
              ),
              _react2.default.createElement(
                MenuTitle,
                { href: "#top" },
                "Murasame Usa"
              )
            )
          )
        ),
        _react2.default.createElement(
          DrawerMain,
          { anchor: "left", open: open },
          _react2.default.createElement(
            DrawerHeader,
            null,
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleDrawerClose },
              "\xD7"
            )
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _List2.default,
            null,
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                MenuButton,
                {
                  href: "#top",
                  offset: "64",
                  onClick: function onClick() {
                    _this2.setState({ open: false });
                  }
                },
                "Top"
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                MenuButton,
                {
                  href: "#intro",
                  offset: "56",
                  onClick: function onClick() {
                    _this2.setState({ open: false });
                  }
                },
                "Introduction"
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                MenuButton,
                {
                  href: "#product",
                  offset: "56",
                  onClick: function onClick() {
                    _this2.setState({ open: false });
                  }
                },
                "Product"
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                MenuButton,
                {
                  href: "#skill",
                  offset: "56",
                  onClick: function onClick() {
                    _this2.setState({ open: false });
                  }
                },
                "Skill"
              )
            ),
            _react2.default.createElement(
              _ListItem2.default,
              null,
              _react2.default.createElement(
                MenuButton,
                {
                  href: "#contact",
                  offset: "54",
                  onClick: function onClick() {
                    _this2.setState({ open: false });
                  }
                },
                "Contact"
              )
            )
          )
        )
      );
    }
  }]);

  return SpMenuBar;
}(_react2.default.Component);

exports.default = SpMenuBar;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = __webpack_require__(40);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageMedia = (0, _styledComponents2.default)(_Card.CardMedia).withConfig({
  displayName: "Header__ImageMedia",
  componentId: "sc-1lw7zqu-0"
})(["&&{height:100vh;::before{background-color:rgba(0,0,0,0.5);position:absolute;top:0;right:0;bottom:0;left:0;content:\" \";}}"]);

var HeaderCharacter = (0, _styledComponents2.default)(_Typography2.default).withConfig({
  displayName: "Header__HeaderCharacter",
  componentId: "sc-1lw7zqu-1"
})(["&&{color:#fff;font-size:64px;font-weight:300;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;padding:0;text-align:center;@media only screen and (max-width:750px){font-size:36px;}}"]);

var Headers = function (_React$Component) {
  _inherits(Headers, _React$Component);

  function Headers(props) {
    _classCallCheck(this, Headers);

    return _possibleConstructorReturn(this, (Headers.__proto__ || Object.getPrototypeOf(Headers)).call(this, props));
  }

  _createClass(Headers, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        ImageMedia,
        {
          overlay: _react2.default.createElement(_Card.CardTitle, {
            title: "scroll \u2193",
            subtitle: "",
            style: { textAlign: "center" }
          })
        },
        _react2.default.createElement(
          HeaderCharacter,
          null,
          "Murasame s' Portfolio Site"
        ),
        _react2.default.createElement("img", {
          src: "./image/back_image.jpg",
          className: "backgroundImage",
          style: { height: "100vh" }
        })
      );
    }
  }]);

  return Headers;
}(_react2.default.Component);

exports.default = Headers;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroDiv = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Intro__IntroDiv",
  componentId: "sc-166g3vg-0"
})(["display:flex;justify-content:center;@media only screen and (max-width:750px){flex-wrap:wrap;}"]);

var IntroTitle = (0, _styledComponents2.default)(_Typography2.default).withConfig({
  displayName: "Intro__IntroTitle",
  componentId: "sc-166g3vg-1"
})(["&&{color:#fff;font-size:32px;font-weight:600;text-align:center;margin-top:30px;}"]);

var IntroImage = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Intro__IntroImage",
  componentId: "sc-166g3vg-2"
})([".pcBackgroundImage{height:700px;}.spBackgroundImage{display:none;}@media only screen and (max-width:750px){.pcBackgroundImage{display:none;}.spBackgroundImage{display:block;width:120px;}}"]);

var IntroContents = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Intro__IntroContents",
  componentId: "sc-166g3vg-3"
})(["max-width:40%;height:600px;background:white;opacity:0.8;font-weight:600;font-size:18px;margin-top:50px;margin-left:5%;padding:10px;border-radius:10px;overflow:auto;@media only screen and (max-width:750px){max-width:300px;margin:0;margin-top:10px;margin-bottom:30px;font-weight:300;font-size:16px;}"]);

var Intro = function (_React$Component) {
  _inherits(Intro, _React$Component);

  function Intro(props) {
    _classCallCheck(this, Intro);

    return _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).call(this, props));
  }

  _createClass(Intro, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          IntroTitle,
          null,
          "Introduction"
        ),
        _react2.default.createElement(
          IntroDiv,
          null,
          _react2.default.createElement(
            IntroImage,
            null,
            _react2.default.createElement("img", { src: "./image/murasame.png", className: "pcBackgroundImage" }),
            _react2.default.createElement("img", { src: "./image/icon.png", className: "spBackgroundImage" })
          ),
          _react2.default.createElement(
            IntroContents,
            null,
            _react2.default.createElement(
              "h3",
              null,
              "\u79C1\u306B\u3064\u3044\u3066"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u798F\u5CA1\u770C\u751F\u307E\u308C\u3002"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u8DA3\u5473\u306F\u3001\u30A2\u30CB\u30E1\u9451\u8CDE\u3001\u30D0\u30D3\u8089\u304A\u3058\u3055\u3093\u306E\u914D\u4FE1\u3092\u898B\u308B\u3053\u3068\u3001VRChat\u3001\u8AAD\u66F8\u3001\u300C\u3054\u6CE8\u6587\u306F\u3046\u3055\u304E\u3067\u3059\u304B\uFF1F\u300D\u3068\u3044\u3046\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8FFD\u3044\u304B\u3051\u308B\u3053\u3068\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u7684\u306A\u3053\u3068\u3002"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u6CD5\u5B66\u90E8\u306E\u5B66\u751F\u6642\u4EE3\u306B\u798F\u5CA1\u5927\u5B66\u3067\u958B\u50AC\u3055\u308C\u305FIT\u7CFB\u306E\u30AB\u30F3\u30D5\u30A1\u30EC\u30F3\u30B9\u306B\u305F\u307E\u305F\u307E\u53C2\u52A0\u3057\u3001IT\u696D\u754C\u9762\u767D\u305D\u3046\u3060\u306A\u3068\u8208\u5473\u3092\u6301\u3064\u3002"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u305D\u306E\u5F8C\u3001\u72EC\u5B66\u3067\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3092\u52C9\u5F37\u3057\u306A\u304C\u3089\u3001\u52C9\u5F37\u4F1A\u306B\u3082\u591A\u3005\u53C2\u52A0\u3002"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u73FE\u5728\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u754C\u9688\u306E\u4EBA\u305F\u3061\u3068\u306E\u4EBA\u8108\u3092\u4F5C\u308A\u306A\u304C\u3089\u30B9\u30AD\u30EB\u3092\u9AD8\u3081\u3066\u3044\u308B\u3002"
            ),
            _react2.default.createElement(
              "h3",
              null,
              "\u7D4C\u6B74"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u30FBTECH::CAMP\u306B\u3066\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u5165\u9580\u8005\u306BRails\u3092\u6559\u3048\u308B\u30E1\u30F3\u30BF\u30FC\u696D\u52D9\u306E\u30A4\u30F3\u30BF\u30FC\u30F3"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u30FB\u798F\u5CA1\u5927\u5B66 \u6CD5\u5B66\u90E8 \u6CD5\u5F8B\u5B66\u79D1\u5352"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u30FB\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u3067\u30D0\u30A4\u30C81:Node.js\u3092\u4F7F\u3063\u305FAPI\u958B\u767A\u306E\u304A\u624B\u4F1D\u3044\u3001CSV\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u4F5C\u6210\u3057HTML\u306B\u66F8\u304D\u51FA\u3059\u4F5C\u696D"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u30FB\u30EA\u30E2\u30FC\u30C8\u30EF\u30FC\u30AF\u3067\u30D0\u30A4\u30C82:Android\u30A2\u30D7\u30EA\u306E\u958B\u767A\u3092\u304A\u624B\u4F1D\u3044\u3002Kotlin\u4F7F\u7528"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u30FB\u682A\u5F0F\u4F1A\u793E\u30C7\u30A3\u30FC\u30BC\u30ED\u306B\u3066\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066\u30D0\u30A4\u30C8\u3002React\u3067UI\u4F5C\u6210\u3002"
            )
          )
        )
      );
    }
  }]);

  return Intro;
}(_react2.default.Component);

exports.default = Intro;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(43);

var _Card2 = _interopRequireDefault(_Card);

var _CardActionArea = __webpack_require__(44);

var _CardActionArea2 = _interopRequireDefault(_CardActionArea);

var _CardContent = __webpack_require__(45);

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardMedia = __webpack_require__(46);

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDiv = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Product__ProductDiv",
  componentId: "e8gma9-0"
})(["color:#fff;background-color:rgba(95,95,95,1);"]);

var ProductCard = (0, _styledComponents2.default)(_Card2.default).withConfig({
  displayName: "Product__ProductCard",
  componentId: "e8gma9-1"
})(["&&{background-color:rgba(95,95,95,1);display:flex;margin:0 auto;margin-top:30px;justify-content:center;padding-bottom:30px;flex-wrap:wrap;}"]);

var ProductTitle = (0, _styledComponents2.default)(_Typography2.default).withConfig({
  displayName: "Product__ProductTitle",
  componentId: "e8gma9-2"
})(["&&{color:#fff;font-size:32px;font-weight:600;text-align:center;padding-top:30px;}"]);

var CardBorder = (0, _styledComponents2.default)(_Card2.default).withConfig({
  displayName: "Product__CardBorder",
  componentId: "e8gma9-3"
})(["&&{max-width:300px;background-color:#c0c0c0;margin:auto;}"]);

var Product = function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product(props) {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        ProductDiv,
        null,
        _react2.default.createElement(
          ProductTitle,
          null,
          "Product"
        ),
        _react2.default.createElement(
          ProductCard,
          null,
          _react2.default.createElement(
            CardBorder,
            {
              onClick: function onClick() {
                return window.open("https://soundring.github.io/kirara_website/");
              }
            },
            _react2.default.createElement(
              _CardActionArea2.default,
              null,
              _react2.default.createElement(_CardMedia2.default, {
                component: "img",
                alt: "Kirara Website",
                height: "140",
                image: "./image/kirara_website.png",
                title: "Kirara Website"
              }),
              _react2.default.createElement(
                _CardContent2.default,
                null,
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true, variant: "h5", component: "h2" },
                  "Kirara Website"
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { component: "p" },
                  "\u79C1\u306E\u597D\u304D\u306A\u300C\u307E\u3093\u304C\u30BF\u30A4\u30E0\u304D\u3089\u3089\u300D\u3067\u306E\u597D\u304D\u306A\u4F5C\u54C1\u306E\u7D39\u4ECB\u30B5\u30A4\u30C8\u3067\u3059\u3002"
                )
              )
            )
          ),
          _react2.default.createElement(
            CardBorder,
            {
              onClick: function onClick() {
                return window.open("https://twitter.com/murasame_usa/status/991747302862635008");
              }
            },
            _react2.default.createElement(
              _CardActionArea2.default,
              null,
              _react2.default.createElement(_CardMedia2.default, {
                component: "img",
                alt: "\u30C9\u30DF\u30CD\u30FC\u30BF\u30FC",
                height: "140",
                image: "./image/dominator_vr.png",
                title: "Kirara Website"
              }),
              _react2.default.createElement(
                _CardContent2.default,
                null,
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true, variant: "h5", component: "h2" },
                  "\u30C9\u30DF\u30CD\u30FC\u30BF\u30FCVR"
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { component: "p" },
                  "Unity\u3067\u4F5C\u3063\u305FVR\u30A2\u30D7\u30EA\u3067\u3001#D\u30A2\u30D0\u30BF\u30FC\u306E\u8996\u70B9\u3092\u5408\u308F\u305B\u308B\u3068UI\u306E\u8868\u793A\u3068\u97F3\u58F0\u304C\u6D41\u308C\u307E\u3059\u3002\u30A2\u30CB\u30E1\u300CSYCHO-PASS \u30B5\u30A4\u30B3\u30D1\u30B9\u300D\u306B\u61A7\u308C\u3066\u4F5C\u308A\u307E\u3057\u305F\u3002"
                )
              )
            )
          ),
          _react2.default.createElement(
            CardBorder,
            {
              onClick: function onClick() {
                return window.open("https://soundring.github.io/MyPortfolioSite/");
              }
            },
            _react2.default.createElement(
              _CardActionArea2.default,
              null,
              _react2.default.createElement(_CardMedia2.default, {
                component: "img",
                alt: "\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8",
                height: "140",
                image: "./image/portfolio_withbook.png",
                title: "\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8"
              }),
              _react2.default.createElement(
                _CardContent2.default,
                null,
                _react2.default.createElement(
                  _Typography2.default,
                  { gutterBottom: true, variant: "h5", component: "h2" },
                  "\u672C\u3092\u53C2\u8003\u306B\u4F5C\u6210\u3057\u305F\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30A4\u30C8"
                ),
                _react2.default.createElement(
                  _Typography2.default,
                  { component: "p" },
                  "\u672C\u3092\u53C2\u8003\u306B\u3057\u3066\u81EA\u5206\u7528\u306B\u6539\u9020\u3057\u3066\u4F5C\u6210\u3057\u305F\u30B7\u30F3\u30B0\u30EB\u30DA\u30FC\u30B8\u30B5\u30A4\u30C8\u3002HTML,CSS\u306E\u307F\u3002"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Product;
}(_react2.default.Component);

exports.default = Product;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(48);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(49);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = __webpack_require__(50);

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableHead = __webpack_require__(51);

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = __webpack_require__(52);

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Paper = __webpack_require__(53);

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillDiv = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Skill__SkillDiv",
  componentId: "sc-1710br0-0"
})(["color:#fff;padding-bottom:30px;"]);

var SkillTitle = (0, _styledComponents2.default)(_Typography2.default).withConfig({
  displayName: "Skill__SkillTitle",
  componentId: "sc-1710br0-1"
})(["&&{color:#fff;font-size:32px;font-weight:600;text-align:center;padding-top:30px;}"]);

var TableDiv = (0, _styledComponents2.default)(_Paper2.default).withConfig({
  displayName: "Skill__TableDiv",
  componentId: "sc-1710br0-2"
})(["&&{width:50%;margin:0 auto;margin-top:30px;@media only screen and (max-width:750px){min-width:320px;}}"]);

var FixTableCell = (0, _styledComponents2.default)(_TableCell2.default).withConfig({
  displayName: "Skill__FixTableCell",
  componentId: "sc-1710br0-3"
})(["&&{width:50%;text-align:center;font-size:20px;}"]);

var Skill = function (_React$Component) {
  _inherits(Skill, _React$Component);

  function Skill(props) {
    _classCallCheck(this, Skill);

    return _possibleConstructorReturn(this, (Skill.__proto__ || Object.getPrototypeOf(Skill)).call(this, props));
  }

  _createClass(Skill, [{
    key: "render",
    value: function render() {
      var id = 0;
      function createData(name, year) {
        id += 1;
        return { id: id, name: name, year: year };
      }

      var rows = [createData("HTML5", 1), createData("CSS3", 1), createData("Javascript", 1), createData("React", 0.2), createData("React Static", 0.1), createData("Ruby", 0.5), createData("Rails", 0.5)];

      return _react2.default.createElement(
        SkillDiv,
        null,
        _react2.default.createElement(
          SkillTitle,
          null,
          "Skill"
        ),
        _react2.default.createElement(
          TableDiv,
          null,
          _react2.default.createElement(
            _Table2.default,
            null,
            _react2.default.createElement(
              _TableHead2.default,
              null,
              _react2.default.createElement(
                _TableRow2.default,
                null,
                _react2.default.createElement(
                  FixTableCell,
                  null,
                  "\u8A00\u8A9E\u30FB\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF"
                ),
                _react2.default.createElement(
                  FixTableCell,
                  { numeric: true },
                  "\u671F\u9593(\u5E74)"
                )
              )
            ),
            _react2.default.createElement(
              _TableBody2.default,
              null,
              rows.map(function (row) {
                return _react2.default.createElement(
                  _TableRow2.default,
                  { key: row.id },
                  _react2.default.createElement(
                    FixTableCell,
                    { component: "th", scope: "row" },
                    row.name
                  ),
                  _react2.default.createElement(
                    FixTableCell,
                    { numeric: true },
                    row.year
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Skill;
}(_react2.default.Component);

exports.default = Skill;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Typography = __webpack_require__(2);

var _Typography2 = _interopRequireDefault(_Typography);

var _reactTwitterEmbed = __webpack_require__(55);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactDiv = (0, _styledComponents2.default)("div").withConfig({
  displayName: "Contact__ContactDiv",
  componentId: "sc-1e78u1q-0"
})(["color:#fff;background-color:rgba(95,95,95,1);text-align:center;padding-bottom:30px;> p{font-size:20px;margin:0;}"]);

var ContactTitle = (0, _styledComponents2.default)(_Typography2.default).withConfig({
  displayName: "Contact__ContactTitle",
  componentId: "sc-1e78u1q-1"
})(["&&{color:#fff;font-size:32px;font-weight:600;text-align:center;padding-top:30px;padding-bottom:30px;}"]);

var Twitter = (0, _styledComponents2.default)(_Typography2.default).withConfig({
  displayName: "Contact__Twitter",
  componentId: "sc-1e78u1q-2"
})(["&&{color:#fff;font-size:24px;font-weight:300;text-align:center;margin-bottom:30px;}"]);

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        ContactDiv,
        null,
        _react2.default.createElement(
          ContactTitle,
          null,
          "\u30B3\u30F3\u30BF\u30AF\u30C8"
        ),
        _react2.default.createElement(
          Twitter,
          null,
          "Twitter\u3067\u3069\u3046\u305E"
        ),
        _react2.default.createElement(
          "div",
          { style: { marginBottom: 30 } },
          _react2.default.createElement(_reactTwitterEmbed.TwitterFollowButton, { screenName: "murasame_usa" })
        ),
        _react2.default.createElement(_reactTwitterEmbed.TwitterTimelineEmbed, {
          sourceType: "profile",
          screenName: "murasame_usa",
          options: { width: 600, height: 600 }
        })
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-twitter-embed");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterSelect = (0, _styledComponents2.default)("footer").withConfig({
  displayName: "Footer__FooterSelect",
  componentId: "sc-176bagk-0"
})(["color:white;background-color:rgba(77,77,77,1);height:20px;text-align:center;"]);

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        FooterSelect,
        null,
        _react2.default.createElement(
          "small",
          null,
          "\xA9 Murasame Usa All Rights Reserved."
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.29b60fae.js.map