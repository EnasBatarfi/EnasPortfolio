_N_E = (window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([
  ["pages/_app"],
  {
    /***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        var assign = Object.assign.bind(Object);
        module.exports = assign;
        module.exports.default = module.exports;
        //# sourceMappingURL=object-assign.js.map

        /***/
      },

    /***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=next%2Fdist%2Fpages%2F_app!./":
      /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=next%2Fdist%2Fpages%2F_app ***!
  \*******************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/_app",
          function () {
            return __webpack_require__(
              /*! next/dist/pages/_app */ "./node_modules/next/dist/pages/_app.js"
            );
          },
        ]);

        /***/
      },

    /***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.removePathTrailingSlash = removePathTrailingSlash;
          exports.normalizePathTrailingSlash = void 0;
          /**
           * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
           */
          function removePathTrailingSlash(path) {
            return path.endsWith("/") && path !== "/"
              ? path.slice(0, -1)
              : path;
          }
          /**
           * Normalizes the trailing slash of a path according to the `trailingSlash` option
           * in `next.config.js`.
           */
          const normalizePathTrailingSlash = false
            ? undefined
            : removePathTrailingSlash;
          exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/client/router.js":
      /*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _s = $RefreshSig$();
          var _interopRequireWildcard = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
          );
          var _interopRequireDefault = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
          );
          exports.__esModule = true;
          exports.useRouter = useRouter;
          exports.makePublicRouterInstance = makePublicRouterInstance;
          exports.createRouter = exports.withRouter = exports.default = void 0;
          var _react = _interopRequireDefault(
            __webpack_require__(/*! react */ "./node_modules/react/index.js")
          );
          var _router2 = _interopRequireWildcard(
            __webpack_require__(
              /*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"
            )
          );
          exports.Router = _router2.default;
          exports.NextRouter = _router2.NextRouter;
          var _routerContext = __webpack_require__(
            /*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js"
          );
          var _withRouter = _interopRequireDefault(
            __webpack_require__(
              /*! ./with-router */ "./node_modules/next/dist/client/with-router.js"
            )
          );
          exports.withRouter = _withRouter.default; /* global window */
          const singletonRouter = {
            router: null,
            // holds the actual router instance
            readyCallbacks: [],
            ready(cb) {
              if (this.router) return cb();
              if (true) {
                this.readyCallbacks.push(cb);
              }
            },
          }; // Create public properties and methods of the router in the singletonRouter
          const urlPropertyFields = [
            "pathname",
            "route",
            "query",
            "asPath",
            "components",
            "isFallback",
            "basePath",
            "locale",
            "locales",
            "defaultLocale",
          ];
          const routerEvents = [
            "routeChangeStart",
            "beforeHistoryChange",
            "routeChangeComplete",
            "routeChangeError",
            "hashChangeStart",
            "hashChangeComplete",
          ];
          const coreMethodFields = [
            "push",
            "replace",
            "reload",
            "back",
            "prefetch",
            "beforePopState",
          ]; // Events is a static property on the router, the router doesn't have to be initialized to use it
          Object.defineProperty(singletonRouter, "events", {
            get() {
              return _router2.default.events;
            },
          });
          urlPropertyFields.forEach((field) => {
            // Here we need to use Object.defineProperty because, we need to return
            // the property assigned to the actual router
            // The value might get changed as we change routes and this is the
            // proper way to access it
            Object.defineProperty(singletonRouter, field, {
              get() {
                const router = getRouter();
                return router[field];
              },
            });
          });
          coreMethodFields.forEach((field) => {
            // We don't really know the types here, so we add them later instead
            singletonRouter[field] = (...args) => {
              const router = getRouter();
              return router[field](...args);
            };
          });
          routerEvents.forEach((event) => {
            singletonRouter.ready(() => {
              _router2.default.events.on(event, (...args) => {
                const eventField = `on${event
                  .charAt(0)
                  .toUpperCase()}${event.substring(1)}`;
                const _singletonRouter = singletonRouter;
                if (_singletonRouter[eventField]) {
                  try {
                    _singletonRouter[eventField](...args);
                  } catch (err) {
                    console.error(
                      `Error when running the Router event: ${eventField}`
                    );
                    console.error(`${err.message}\n${err.stack}`);
                  }
                }
              });
            });
          });
          function getRouter() {
            if (!singletonRouter.router) {
              const message =
                "No router instance found.\n" +
                'You should only use "next/router" inside the client side of your app.\n';
              throw new Error(message);
            }
            return singletonRouter.router;
          } // Export the singletonRouter and this is the public API.
          var _default = singletonRouter; // Reexport the withRoute HOC
          exports.default = _default;
          function useRouter() {
            _s();
            return _react.default.useContext(_routerContext.RouterContext);
          } // INTERNAL APIS
          // -------------
          // (do not use following exports inside the app)
          // Create a router and assign it as the singleton instance.
          // This is used in client side when we are initilizing the app.
          // This should **not** use inside the server.
          _s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
          const createRouter = (...args) => {
            singletonRouter.router = new _router2.default(...args);
            singletonRouter.readyCallbacks.forEach((cb) => cb());
            singletonRouter.readyCallbacks = [];
            return singletonRouter.router;
          }; // This function is used to create the `withRouter` router instance
          exports.createRouter = createRouter;
          function makePublicRouterInstance(router) {
            const _router = router;
            const instance = {};
            for (const property of urlPropertyFields) {
              if (typeof _router[property] === "object") {
                instance[property] = Object.assign(
                  Array.isArray(_router[property]) ? [] : {},
                  _router[property]
                ); // makes sure query is not stateful
                continue;
              }
              instance[property] = _router[property];
            } // Events is a static property on the router, the router doesn't have to be initialized to use it
            instance.events = _router2.default.events;
            coreMethodFields.forEach((field) => {
              instance[field] = (...args) => {
                return _router[field](...args);
              };
            });
            return instance;
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/client/with-router.js":
      /*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _interopRequireDefault = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
          );
          exports.__esModule = true;
          exports.default = withRouter;
          var _react = _interopRequireDefault(
            __webpack_require__(/*! react */ "./node_modules/react/index.js")
          );
          var _router = __webpack_require__(
            /*! ./router */ "./node_modules/next/dist/client/router.js"
          );
          function withRouter(ComposedComponent) {
            function WithRouterWrapper(props) {
              return /*#__PURE__*/ _react.default.createElement(
                ComposedComponent,
                Object.assign(
                  {
                    router: (0, _router.useRouter)(),
                  },
                  props
                )
              );
            }
            WithRouterWrapper.getInitialProps =
              ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
            WithRouterWrapper.origGetInitialProps =
              ComposedComponent.origGetInitialProps;
            if (true) {
              const name =
                ComposedComponent.displayName ||
                ComposedComponent.name ||
                "Unknown";
              WithRouterWrapper.displayName = `withRouter(${name})`;
            }
            return WithRouterWrapper;
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", { value: true });
        /**
         * Tokenize input string.
         */
        function lexer(str) {
          var tokens = [];
          var i = 0;
          while (i < str.length) {
            var char = str[i];
            if (char === "*" || char === "+" || char === "?") {
              tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
              continue;
            }
            if (char === "\\") {
              tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++],
              });
              continue;
            }
            if (char === "{") {
              tokens.push({ type: "OPEN", index: i, value: str[i++] });
              continue;
            }
            if (char === "}") {
              tokens.push({ type: "CLOSE", index: i, value: str[i++] });
              continue;
            }
            if (char === ":") {
              var name = "";
              var j = i + 1;
              while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                  // `0-9`
                  (code >= 48 && code <= 57) ||
                  // `A-Z`
                  (code >= 65 && code <= 90) ||
                  // `a-z`
                  (code >= 97 && code <= 122) ||
                  // `_`
                  code === 95
                ) {
                  name += str[j++];
                  continue;
                }
                break;
              }
              if (!name) throw new TypeError("Missing parameter name at " + i);
              tokens.push({ type: "NAME", index: i, value: name });
              i = j;
              continue;
            }
            if (char === "(") {
              var count = 1;
              var pattern = "";
              var j = i + 1;
              if (str[j] === "?") {
                throw new TypeError('Pattern cannot start with "?" at ' + j);
              }
              while (j < str.length) {
                if (str[j] === "\\") {
                  pattern += str[j++] + str[j++];
                  continue;
                }
                if (str[j] === ")") {
                  count--;
                  if (count === 0) {
                    j++;
                    break;
                  }
                } else if (str[j] === "(") {
                  count++;
                  if (str[j + 1] !== "?") {
                    throw new TypeError(
                      "Capturing groups are not allowed at " + j
                    );
                  }
                }
                pattern += str[j++];
              }
              if (count) throw new TypeError("Unbalanced pattern at " + i);
              if (!pattern) throw new TypeError("Missing pattern at " + i);
              tokens.push({ type: "PATTERN", index: i, value: pattern });
              i = j;
              continue;
            }
            tokens.push({ type: "CHAR", index: i, value: str[i++] });
          }
          tokens.push({ type: "END", index: i, value: "" });
          return tokens;
        }
        /**
         * Parse a string for the raw tokens.
         */
        function parse(str, options) {
          if (options === void 0) {
            options = {};
          }
          var tokens = lexer(str);
          var _a = options.prefixes,
            prefixes = _a === void 0 ? "./" : _a;
          var defaultPattern =
            "[^" + escapeString(options.delimiter || "/#?") + "]+?";
          var result = [];
          var key = 0;
          var i = 0;
          var path = "";
          var tryConsume = function (type) {
            if (i < tokens.length && tokens[i].type === type)
              return tokens[i++].value;
          };
          var mustConsume = function (type) {
            var value = tryConsume(type);
            if (value !== undefined) return value;
            var _a = tokens[i],
              nextType = _a.type,
              index = _a.index;
            throw new TypeError(
              "Unexpected " + nextType + " at " + index + ", expected " + type
            );
          };
          var consumeText = function () {
            var result = "";
            var value;
            // tslint:disable-next-line
            while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
              result += value;
            }
            return result;
          };
          while (i < tokens.length) {
            var char = tryConsume("CHAR");
            var name = tryConsume("NAME");
            var pattern = tryConsume("PATTERN");
            if (name || pattern) {
              var prefix = char || "";
              if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
              }
              if (path) {
                result.push(path);
                path = "";
              }
              result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
              });
              continue;
            }
            var value = char || tryConsume("ESCAPED_CHAR");
            if (value) {
              path += value;
              continue;
            }
            if (path) {
              result.push(path);
              path = "";
            }
            var open = tryConsume("OPEN");
            if (open) {
              var prefix = consumeText();
              var name_1 = tryConsume("NAME") || "";
              var pattern_1 = tryConsume("PATTERN") || "";
              var suffix = consumeText();
              mustConsume("CLOSE");
              result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
              });
              continue;
            }
            mustConsume("END");
          }
          return result;
        }
        exports.parse = parse;
        /**
         * Compile a string to a template function for the path.
         */
        function compile(str, options) {
          return tokensToFunction(parse(str, options), options);
        }
        exports.compile = compile;
        /**
         * Expose a method for transforming tokens into the path function.
         */
        function tokensToFunction(tokens, options) {
          if (options === void 0) {
            options = {};
          }
          var reFlags = flags(options);
          var _a = options.encode,
            encode =
              _a === void 0
                ? function (x) {
                    return x;
                  }
                : _a,
            _b = options.validate,
            validate = _b === void 0 ? true : _b;
          // Compile all the tokens into regexps.
          var matches = tokens.map(function (token) {
            if (typeof token === "object") {
              return new RegExp("^(?:" + token.pattern + ")$", reFlags);
            }
          });
          return function (data) {
            var path = "";
            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];
              if (typeof token === "string") {
                path += token;
                continue;
              }
              var value = data ? data[token.name] : undefined;
              var optional = token.modifier === "?" || token.modifier === "*";
              var repeat = token.modifier === "*" || token.modifier === "+";
              if (Array.isArray(value)) {
                if (!repeat) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to not repeat, but got an array'
                  );
                }
                if (value.length === 0) {
                  if (optional) continue;
                  throw new TypeError(
                    'Expected "' + token.name + '" to not be empty'
                  );
                }
                for (var j = 0; j < value.length; j++) {
                  var segment = encode(value[j], token);
                  if (validate && !matches[i].test(segment)) {
                    throw new TypeError(
                      'Expected all "' +
                        token.name +
                        '" to match "' +
                        token.pattern +
                        '", but got "' +
                        segment +
                        '"'
                    );
                  }
                  path += token.prefix + segment + token.suffix;
                }
                continue;
              }
              if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to match "' +
                      token.pattern +
                      '", but got "' +
                      segment +
                      '"'
                  );
                }
                path += token.prefix + segment + token.suffix;
                continue;
              }
              if (optional) continue;
              var typeOfMessage = repeat ? "an array" : "a string";
              throw new TypeError(
                'Expected "' + token.name + '" to be ' + typeOfMessage
              );
            }
            return path;
          };
        }
        exports.tokensToFunction = tokensToFunction;
        /**
         * Create path match function from `path-to-regexp` spec.
         */
        function match(str, options) {
          var keys = [];
          var re = pathToRegexp(str, keys, options);
          return regexpToFunction(re, keys, options);
        }
        exports.match = match;
        /**
         * Create a path match function from `path-to-regexp` output.
         */
        function regexpToFunction(re, keys, options) {
          if (options === void 0) {
            options = {};
          }
          var _a = options.decode,
            decode =
              _a === void 0
                ? function (x) {
                    return x;
                  }
                : _a;
          return function (pathname) {
            var m = re.exec(pathname);
            if (!m) return false;
            var path = m[0],
              index = m.index;
            var params = Object.create(null);
            var _loop_1 = function (i) {
              // tslint:disable-next-line
              if (m[i] === undefined) return "continue";
              var key = keys[i - 1];
              if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i]
                  .split(key.prefix + key.suffix)
                  .map(function (value) {
                    return decode(value, key);
                  });
              } else {
                params[key.name] = decode(m[i], key);
              }
            };
            for (var i = 1; i < m.length; i++) {
              _loop_1(i);
            }
            return { path: path, index: index, params: params };
          };
        }
        exports.regexpToFunction = regexpToFunction;
        /**
         * Escape a regular expression string.
         */
        function escapeString(str) {
          return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        /**
         * Get the flags for a regexp from the options.
         */
        function flags(options) {
          return options && options.sensitive ? "" : "i";
        }
        /**
         * Pull out keys from a regexp.
         */
        function regexpToRegexp(path, keys) {
          if (!keys) return path;
          // Use a negative lookahead to match only capturing groups.
          var groups = path.source.match(/\((?!\?)/g);
          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: "",
              });
            }
          }
          return path;
        }
        /**
         * Transform an array into a regexp.
         */
        function arrayToRegexp(paths, keys, options) {
          var parts = paths.map(function (path) {
            return pathToRegexp(path, keys, options).source;
          });
          return new RegExp("(?:" + parts.join("|") + ")", flags(options));
        }
        /**
         * Create a path regexp from string input.
         */
        function stringToRegexp(path, keys, options) {
          return tokensToRegexp(parse(path, options), keys, options);
        }
        /**
         * Expose a function for taking tokens and returning a RegExp.
         */
        function tokensToRegexp(tokens, keys, options) {
          if (options === void 0) {
            options = {};
          }
          var _a = options.strict,
            strict = _a === void 0 ? false : _a,
            _b = options.start,
            start = _b === void 0 ? true : _b,
            _c = options.end,
            end = _c === void 0 ? true : _c,
            _d = options.encode,
            encode =
              _d === void 0
                ? function (x) {
                    return x;
                  }
                : _d;
          var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
          var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
          var route = start ? "^" : "";
          // Iterate over the tokens and create our regexp string.
          for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (typeof token === "string") {
              route += escapeString(encode(token));
            } else {
              var prefix = escapeString(encode(token.prefix));
              var suffix = escapeString(encode(token.suffix));
              if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                  if (token.modifier === "+" || token.modifier === "*") {
                    var mod = token.modifier === "*" ? "?" : "";
                    route +=
                      "(?:" +
                      prefix +
                      "((?:" +
                      token.pattern +
                      ")(?:" +
                      suffix +
                      prefix +
                      "(?:" +
                      token.pattern +
                      "))*)" +
                      suffix +
                      ")" +
                      mod;
                  } else {
                    route +=
                      "(?:" +
                      prefix +
                      "(" +
                      token.pattern +
                      ")" +
                      suffix +
                      ")" +
                      token.modifier;
                  }
                } else {
                  route += "(" + token.pattern + ")" + token.modifier;
                }
              } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
              }
            }
          }
          if (end) {
            if (!strict) route += delimiter + "?";
            route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
          } else {
            var endToken = tokens[tokens.length - 1];
            var isEndDelimited =
              typeof endToken === "string"
                ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
                : // tslint:disable-next-line
                  endToken === undefined;
            if (!strict) {
              route += "(?:" + delimiter + "(?=" + endsWith + "))?";
            }
            if (!isEndDelimited) {
              route += "(?=" + delimiter + "|" + endsWith + ")";
            }
          }
          return new RegExp(route, flags(options));
        }
        exports.tokensToRegexp = tokensToRegexp;
        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         */
        function pathToRegexp(path, keys, options) {
          if (path instanceof RegExp) return regexpToRegexp(path, keys);
          if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
          return stringToRegexp(path, keys, options);
        }
        exports.pathToRegexp = pathToRegexp;
        //# sourceMappingURL=index.js.map

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/mitt.js":
      /*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
          // It's been edited for the needs of this script
          // See the LICENSE at the top of the file
          function mitt() {
            const all = Object.create(null);
            return {
              on(type, handler) {
                (all[type] || (all[type] = [])).push(handler);
              },
              off(type, handler) {
                if (all[type]) {
                  all[type].splice(all[type].indexOf(handler) >>> 0, 1);
                }
              },
              emit(type, ...evts) {
                // eslint-disable-next-line array-callback-return
                (all[type] || []).slice().map((handler) => {
                  handler(...evts);
                });
              },
            };
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router-context.js":
      /*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.RouterContext = void 0;
          var _react = _interopRequireDefault(
            __webpack_require__(/*! react */ "./node_modules/react/index.js")
          );
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj,
                };
          }
          const RouterContext = /*#__PURE__*/ _react.default.createContext(
            null
          );
          exports.RouterContext = RouterContext;
          if (true) {
            RouterContext.displayName = "RouterContext";
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/router.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.addLocale = addLocale;
          exports.delLocale = delLocale;
          exports.hasBasePath = hasBasePath;
          exports.addBasePath = addBasePath;
          exports.delBasePath = delBasePath;
          exports.isLocalURL = isLocalURL;
          exports.interpolateAs = interpolateAs;
          exports.resolveHref = resolveHref;
          exports.markLoadingError = markLoadingError;
          exports.default = void 0;
          var _normalizeTrailingSlash = __webpack_require__(
            /*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js"
          );
          var _denormalizePagePath = __webpack_require__(
            /*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js"
          );
          var _mitt = _interopRequireDefault(
            __webpack_require__(
              /*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"
            )
          );
          var _utils = __webpack_require__(
            /*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js"
          );
          var _isDynamic = __webpack_require__(
            /*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js"
          );
          var _parseRelativeUrl = __webpack_require__(
            /*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js"
          );
          var _querystring = __webpack_require__(
            /*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
          );
          var _resolveRewrites = _interopRequireDefault(
            __webpack_require__(
              /*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"
            )
          );
          var _routeMatcher = __webpack_require__(
            /*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js"
          );
          var _routeRegex = __webpack_require__(
            /*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js"
          );
          var _escapePathDelimiters = _interopRequireDefault(
            __webpack_require__(
              /*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"
            )
          );
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj,
                };
          } /* global __NEXT_DATA__ */ // tslint:disable:no-console
          const basePath = false || "";
          function buildCancellationError() {
            return Object.assign(new Error("Route Cancelled"), {
              cancelled: true,
            });
          }
          function addPathPrefix(path, prefix) {
            return prefix && path.startsWith("/")
              ? path === "/"
                ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(
                    prefix
                  )
                : `${prefix}${path}`
              : path;
          }
          function addLocale(path, locale, defaultLocale) {
            if (false) {
            }
            return path;
          }
          function delLocale(path, locale) {
            if (false) {
            }
            return path;
          }
          function hasBasePath(path) {
            return path === basePath || path.startsWith(basePath + "/");
          }
          function addBasePath(path) {
            // we only add the basepath on relative urls
            return addPathPrefix(path, basePath);
          }
          function delBasePath(path) {
            return path.slice(basePath.length) || "/";
          }
          /**
           * Detects whether a given url is routable by the Next.js router (browser only).
           */
          function isLocalURL(url) {
            if (url.startsWith("/")) return true;
            try {
              // absolute urls can be local if they are on the same origin
              const locationOrigin = (0, _utils.getLocationOrigin)();
              const resolved = new URL(url, locationOrigin);
              return (
                resolved.origin === locationOrigin &&
                hasBasePath(resolved.pathname)
              );
            } catch (_) {
              return false;
            }
          }
          function interpolateAs(route, asPathname, query) {
            let interpolatedRoute = "";
            const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
            const dynamicGroups = dynamicRegex.groups;
            const dynamicMatches =
              // Try to match the dynamic route against the asPath
              (asPathname !== route
                ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname)
                : "") ||
              // Fall back to reading the values from the href
              // TODO: should this take priority; also need to change in the router.
              query;
            interpolatedRoute = route;
            const params = Object.keys(dynamicGroups);
            if (
              !params.every((param) => {
                let value = dynamicMatches[param] || "";
                const { repeat, optional } = dynamicGroups[param]; // support single-level catch-all
                // TODO: more robust handling for user-error (passing `/`)
                let replaced = `[${repeat ? "..." : ""}${param}]`;
                if (optional) {
                  replaced = `${!value ? "/" : ""}[${replaced}]`;
                }
                if (repeat && !Array.isArray(value)) value = [value];
                return (
                  (optional || param in dynamicMatches) &&
                  // Interpolate group into data URL if present
                  (interpolatedRoute =
                    interpolatedRoute.replace(
                      replaced,
                      repeat
                        ? value.map(_escapePathDelimiters.default).join("/")
                        : (0, _escapePathDelimiters.default)(value)
                    ) || "/")
                );
              })
            ) {
              interpolatedRoute = ""; // did not satisfy all requirements
              // n.b. We ignore this error because we handle warning for this case in
              // development in the `<Link>` component directly.
            }
            return {
              params,
              result: interpolatedRoute,
            };
          }
          function omitParmsFromQuery(query, params) {
            const filteredQuery = {};
            Object.keys(query).forEach((key) => {
              if (!params.includes(key)) {
                filteredQuery[key] = query[key];
              }
            });
            return filteredQuery;
          }
          /**
           * Resolves a given hyperlink with a certain router state (basePath not included).
           * Preserves absolute urls.
           */
          function resolveHref(currentPath, href, resolveAs) {
            // we use a dummy base url for relative urls
            const base = new URL(currentPath, "http://n");
            const urlAsString =
              typeof href === "string"
                ? href
                : (0, _utils.formatWithValidation)(href);
            try {
              const finalUrl = new URL(urlAsString, base);
              finalUrl.pathname = (0,
              _normalizeTrailingSlash.normalizePathTrailingSlash)(
                finalUrl.pathname
              );
              let interpolatedAs = "";
              if (
                (0, _isDynamic.isDynamicRoute)(finalUrl.pathname) &&
                finalUrl.searchParams &&
                resolveAs
              ) {
                const query = (0, _querystring.searchParamsToUrlQuery)(
                  finalUrl.searchParams
                );
                const { result, params } = interpolateAs(
                  finalUrl.pathname,
                  finalUrl.pathname,
                  query
                );
                if (result) {
                  interpolatedAs = (0, _utils.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omitParmsFromQuery(query, params),
                  });
                }
              } // if the origin didn't change, it means we received a relative href
              const resolvedHref =
                finalUrl.origin === base.origin
                  ? finalUrl.href.slice(finalUrl.origin.length)
                  : finalUrl.href;
              return resolveAs
                ? [resolvedHref, interpolatedAs || resolvedHref]
                : resolvedHref;
            } catch (_) {
              return resolveAs ? [urlAsString] : urlAsString;
            }
          }
          const PAGE_LOAD_ERROR = Symbol("PAGE_LOAD_ERROR");
          function markLoadingError(err) {
            return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
          }
          function prepareUrlAs(router, url, as) {
            // If url and as provided as an object representation,
            // we'll format them into the string version here.
            return {
              url: addBasePath(resolveHref(router.pathname, url)),
              as: as ? addBasePath(resolveHref(router.pathname, as)) : as,
            };
          }
          const manualScrollRestoration = false && false;
          function fetchRetry(url, attempts) {
            return fetch(url, {
              // Cookies are required to be present for Next.js' SSG "Preview Mode".
              // Cookies may also be required for `getServerSideProps`.
              //
              // > `fetch` won’t send cookies, unless you set the credentials init
              // > option.
              // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
              //
              // > For maximum browser compatibility when it comes to sending &
              // > receiving cookies, always supply the `credentials: 'same-origin'`
              // > option instead of relying on the default.
              // https://github.com/github/fetch#caveats
              credentials: "same-origin",
            }).then((res) => {
              if (!res.ok) {
                if (attempts > 1 && res.status >= 500) {
                  return fetchRetry(url, attempts - 1);
                }
                throw new Error(`Failed to load static props`);
              }
              return res.json();
            });
          }
          function fetchNextData(dataHref, isServerRender) {
            return fetchRetry(dataHref, isServerRender ? 3 : 1).catch((err) => {
              // We should only trigger a server-side transition if this was caused
              // on a client-side transition. Otherwise, we'd get into an infinite
              // loop.
              if (!isServerRender) {
                markLoadingError(err);
              }
              throw err;
            });
          }
          class Router {
            /**
             * Map of all components loaded in `Router`
             */ // Static Data Cache
            constructor(
              _pathname,
              _query,
              _as,
              {
                initialProps,
                pageLoader,
                App,
                wrapApp,
                Component,
                initialStyleSheets,
                err,
                subscription,
                isFallback,
                locale,
                locales,
                defaultLocale,
              }
            ) {
              this.route = void 0;
              this.pathname = void 0;
              this.query = void 0;
              this.asPath = void 0;
              this.basePath = void 0;
              this.components = void 0;
              this.sdc = {};
              this.sub = void 0;
              this.clc = void 0;
              this.pageLoader = void 0;
              this._bps = void 0;
              this.events = void 0;
              this._wrapApp = void 0;
              this.isSsr = void 0;
              this.isFallback = void 0;
              this._inFlightRoute = void 0;
              this._shallow = void 0;
              this.locale = void 0;
              this.locales = void 0;
              this.defaultLocale = void 0;
              this.onPopState = (e) => {
                const state = e.state;
                if (!state) {
                  // We get state as undefined for two reasons.
                  //  1. With older safari (< 8) and older chrome (< 34)
                  //  2. When the URL changed with #
                  //
                  // In the both cases, we don't need to proceed and change the route.
                  // (as it's already changed)
                  // But we can simply replace the state with the new changes.
                  // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                  // So, doing the following for (1) does no harm.
                  const { pathname, query } = this;
                  this.changeState(
                    "replaceState",
                    (0, _utils.formatWithValidation)({
                      pathname: addBasePath(pathname),
                      query,
                    }),
                    (0, _utils.getURL)()
                  );
                  return;
                }
                if (!state.__N) {
                  return;
                }
                const { url, as, options } = state;
                const { pathname } = (0, _parseRelativeUrl.parseRelativeUrl)(
                  url
                ); // Make sure we don't re-render on initial load,
                // can be caused by navigating back from an external site
                if (
                  this.isSsr &&
                  as === this.asPath &&
                  pathname === this.pathname
                ) {
                  return;
                } // If the downstream application returns falsy, return.
                // They will then be responsible for handling the event.
                if (this._bps && !this._bps(state)) {
                  return;
                }
                this.change(
                  "replaceState",
                  url,
                  as,
                  Object.assign({}, options, {
                    shallow: options.shallow && this._shallow,
                  })
                );
              }; // represents the current component key
              this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
                _pathname
              ); // set up the component cache (by route keys)
              this.components = {}; // We should not keep the cache, if there's an error
              // Otherwise, this cause issues when when going back and
              // come again to the errored page.
              if (_pathname !== "/_error") {
                this.components[this.route] = {
                  Component,
                  styleSheets: initialStyleSheets,
                  props: initialProps,
                  err,
                  __N_SSG: initialProps && initialProps.__N_SSG,
                  __N_SSP: initialProps && initialProps.__N_SSP,
                };
              }
              this.components["/_app"] = {
                Component: App,
                styleSheets: [
                  /* /_app does not need its stylesheets managed */
                ],
              }; // Backwards compat for Router.router.events
              // TODO: Should be remove the following major version as it was never documented
              this.events = Router.events;
              this.pageLoader = pageLoader;
              this.pathname = _pathname;
              this.query = _query; // if auto prerendered and dynamic route wait to update asPath
              // until after mount to prevent hydration mismatch
              this.asPath =
                // @ts-ignore this is temporarily global (attached to window)
                (0, _isDynamic.isDynamicRoute)(_pathname) &&
                __NEXT_DATA__.autoExport
                  ? _pathname
                  : _as;
              this.basePath = basePath;
              this.sub = subscription;
              this.clc = null;
              this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
              // back from external site
              this.isSsr = true;
              this.isFallback = isFallback;
              if (false) {
              }
              if (true) {
                // make sure "as" doesn't start with double slashes or else it can
                // throw an error as it's considered invalid
                if (_as.substr(0, 2) !== "//") {
                  // in order for `e.state` to work on the `onpopstate` event
                  // we have to register the initial route upon initialization
                  this.changeState(
                    "replaceState",
                    (0, _utils.formatWithValidation)({
                      pathname: addBasePath(_pathname),
                      query: _query,
                    }),
                    (0, _utils.getURL)()
                  );
                }
                window.addEventListener("popstate", this.onPopState); // enable custom scroll restoration handling when available
                // otherwise fallback to browser's default handling
                if (false) {
                }
              }
            }
            reload() {
              window.location.reload();
            }
            /**
             * Go back in history
             */
            back() {
              window.history.back();
            }
            /**
             * Performs a `pushState` with arguments
             * @param url of the route
             * @param as masks `url` for the browser
             * @param options object you can define `shallow` and other options
             */
            push(url, as = url, options = {}) {
              ({ url, as } = prepareUrlAs(this, url, as));
              return this.change("pushState", url, as, options);
            }
            /**
             * Performs a `replaceState` with arguments
             * @param url of the route
             * @param as masks `url` for the browser
             * @param options object you can define `shallow` and other options
             */
            replace(url, as = url, options = {}) {
              ({ url, as } = prepareUrlAs(this, url, as));
              return this.change("replaceState", url, as, options);
            }
            async change(method, url, as, options) {
              if (!isLocalURL(url)) {
                window.location.href = url;
                return false;
              }
              if (!options._h) {
                this.isSsr = false;
              } // marking route changes as a navigation start entry
              if (_utils.ST) {
                performance.mark("routeChange");
              }
              if (this._inFlightRoute) {
                this.abortComponentLoad(this._inFlightRoute);
              }
              as = addLocale(as, this.locale, this.defaultLocale);
              const cleanedAs = delLocale(
                hasBasePath(as) ? delBasePath(as) : as,
                this.locale
              );
              this._inFlightRoute = as; // If the url change is only related to a hash change
              // We should not proceed. We should only change the state.
              // WARNING: `_h` is an internal option for handing Next.js client-side
              // hydration. Your app should _never_ use this property. It may change at
              // any time without notice.
              if (!options._h && this.onlyAHashChange(cleanedAs)) {
                this.asPath = cleanedAs;
                Router.events.emit("hashChangeStart", as); // TODO: do we need the resolved href when only a hash change?
                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route]);
                Router.events.emit("hashChangeComplete", as);
                return true;
              } // The build manifest needs to be loaded before auto-static dynamic pages
              // get their query parameters to allow ensuring they can be parsed properly
              // when rewritten to
              const pages = await this.pageLoader.getPageList();
              const { __rewrites: rewrites } = await this.pageLoader
                .promisedBuildManifest;
              let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
              let { pathname, query } = parsed;
              parsed = this._resolveHref(parsed, pages);
              if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                url = (0, _utils.formatWithValidation)(parsed);
              } // url and as should always be prefixed with basePath by this
              // point by either next/link or router.push/replace so strip the
              // basePath from the pathname to match the pages dir 1-to-1
              pathname = pathname
                ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(
                    delBasePath(pathname)
                  )
                : pathname; // If asked to change the current URL we should reload the current page
              // (not location.reload() but reload getInitialProps and other Next.js stuffs)
              // We also need to set the method = replaceState always
              // as this should not go into the history (That's how browsers work)
              // We should compare the new asPath to the current asPath, not the url
              if (!this.urlIsNew(cleanedAs)) {
                method = "replaceState";
              }
              let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
                pathname
              );
              const { shallow = false } = options; // we need to resolve the as value using rewrites for dynamic SSG
              // pages to allow building the data URL correctly
              let resolvedAs = as;
              if (true) {
                resolvedAs = (0, _resolveRewrites.default)(
                  (0, _parseRelativeUrl.parseRelativeUrl)(as).pathname,
                  pages,
                  basePath,
                  rewrites,
                  query,
                  (p) =>
                    this._resolveHref(
                      {
                        pathname: p,
                      },
                      pages
                    ).pathname
                );
                if (resolvedAs !== as) {
                  const potentialHref = (0,
                  _normalizeTrailingSlash.removePathTrailingSlash)(
                    this._resolveHref(
                      Object.assign({}, parsed, {
                        pathname: resolvedAs,
                      }),
                      pages,
                      false
                    ).pathname
                  ); // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  if (pages.includes(potentialHref)) {
                    route = potentialHref;
                    pathname = potentialHref;
                    parsed.pathname = pathname;
                    url = (0, _utils.formatWithValidation)(parsed);
                  }
                }
              }
              resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
              if ((0, _isDynamic.isDynamicRoute)(route)) {
                const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(
                  resolvedAs
                );
                const asPathname = parsedAs.pathname;
                const routeRegex = (0, _routeRegex.getRouteRegex)(route);
                const routeMatch = (0, _routeMatcher.getRouteMatcher)(
                  routeRegex
                )(asPathname);
                const shouldInterpolate = route === asPathname;
                const interpolatedAs = shouldInterpolate
                  ? interpolateAs(route, asPathname, query)
                  : {};
                if (
                  !routeMatch ||
                  (shouldInterpolate && !interpolatedAs.result)
                ) {
                  const missingParams = Object.keys(routeRegex.groups).filter(
                    (param) => !query[param]
                  );
                  if (missingParams.length > 0) {
                    if (true) {
                      console.warn(
                        `${
                          shouldInterpolate
                            ? `Interpolating href`
                            : `Mismatching \`as\` and \`href\``
                        } failed to manually provide ` +
                          `the params: ${missingParams.join(
                            ", "
                          )} in the \`href\`'s \`query\``
                      );
                    }
                    throw new Error(
                      (shouldInterpolate
                        ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(
                            ", "
                          )}) to be interpolated properly. `
                        : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) +
                        `Read more: https://err.sh/vercel/next.js/${
                          shouldInterpolate
                            ? "href-interpolation-failed"
                            : "incompatible-href-as"
                        }`
                    );
                  }
                } else if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(
                    Object.assign({}, parsedAs, {
                      pathname: interpolatedAs.result,
                      query: omitParmsFromQuery(query, interpolatedAs.params),
                    })
                  );
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }
              }
              Router.events.emit("routeChangeStart", as);
              try {
                const routeInfo = await this.getRouteInfo(
                  route,
                  pathname,
                  query,
                  as,
                  shallow
                );
                let { error, props, __N_SSG, __N_SSP } = routeInfo; // handle redirect on client-transition
                if (
                  (__N_SSG || __N_SSP) &&
                  props &&
                  props.pageProps &&
                  props.pageProps.__N_REDIRECT
                ) {
                  const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                  // client-navigation if it is falling back to hard navigation if
                  // it's not
                  if (destination.startsWith("/")) {
                    const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(
                      destination
                    );
                    this._resolveHref(parsedHref, pages);
                    if (pages.includes(parsedHref.pathname)) {
                      return this.change(
                        "replaceState",
                        destination,
                        destination,
                        options
                      );
                    }
                  }
                  window.location.href = destination;
                  return new Promise(() => {});
                }
                Router.events.emit("beforeHistoryChange", as);
                this.changeState(
                  method,
                  url,
                  addLocale(as, this.locale, this.defaultLocale),
                  options
                );
                if (true) {
                  const appComp = this.components["/_app"].Component;
                  window.next.isPrerendered =
                    appComp.getInitialProps === appComp.origGetInitialProps &&
                    !routeInfo.Component.getInitialProps;
                }
                await this.set(
                  route,
                  pathname,
                  query,
                  cleanedAs,
                  routeInfo
                ).catch((e) => {
                  if (e.cancelled) error = error || e;
                  else throw e;
                });
                if (error) {
                  Router.events.emit("routeChangeError", error, cleanedAs);
                  throw error;
                }
                if (false) {
                }
                Router.events.emit("routeChangeComplete", as);
                return true;
              } catch (err) {
                if (err.cancelled) {
                  return false;
                }
                throw err;
              }
            }
            changeState(method, url, as, options = {}) {
              if (true) {
                if (typeof window.history === "undefined") {
                  console.error(`Warning: window.history is not available.`);
                  return;
                }
                if (typeof window.history[method] === "undefined") {
                  console.error(
                    `Warning: window.history.${method} is not available`
                  );
                  return;
                }
              }
              if (method !== "pushState" || (0, _utils.getURL)() !== as) {
                this._shallow = options.shallow;
                window.history[method](
                  {
                    url,
                    as,
                    options,
                    __N: true,
                  },
                  // Most browsers currently ignores this parameter, although they may use it in the future.
                  // Passing the empty string here should be safe against future changes to the method.
                  // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
                  "",
                  as
                );
              }
            }
            async handleRouteInfoError(
              err,
              pathname,
              query,
              as,
              loadErrorFail
            ) {
              if (err.cancelled) {
                // bubble up cancellation errors
                throw err;
              }
              if (PAGE_LOAD_ERROR in err || loadErrorFail) {
                Router.events.emit("routeChangeError", err, as); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.
                throw buildCancellationError();
              }
              try {
                const {
                  page: Component,
                  styleSheets,
                } = await this.fetchComponent("/_error");
                const routeInfo = {
                  Component,
                  styleSheets,
                  err,
                  error: err,
                };
                try {
                  routeInfo.props = await this.getInitialProps(Component, {
                    err,
                    pathname,
                    query,
                  });
                } catch (gipErr) {
                  console.error(
                    "Error in error page `getInitialProps`: ",
                    gipErr
                  );
                  routeInfo.props = {};
                }
                return routeInfo;
              } catch (routeInfoErr) {
                return this.handleRouteInfoError(
                  routeInfoErr,
                  pathname,
                  query,
                  as,
                  true
                );
              }
            }
            async getRouteInfo(route, pathname, query, as, shallow = false) {
              try {
                const cachedRouteInfo = this.components[route];
                if (shallow && cachedRouteInfo && this.route === route) {
                  return cachedRouteInfo;
                }
                const routeInfo = cachedRouteInfo
                  ? cachedRouteInfo
                  : await this.fetchComponent(route).then((res) => ({
                      Component: res.page,
                      styleSheets: res.styleSheets,
                      __N_SSG: res.mod.__N_SSG,
                      __N_SSP: res.mod.__N_SSP,
                    }));
                const { Component, __N_SSG, __N_SSP } = routeInfo;
                if (true) {
                  const { isValidElementType } = __webpack_require__(
                    /*! react-is */ "./node_modules/next/node_modules/react-is/index.js"
                  );
                  if (!isValidElementType(Component)) {
                    throw new Error(
                      `The default export is not a React Component in page: "${pathname}"`
                    );
                  }
                }
                let dataHref;
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref(
                    (0, _utils.formatWithValidation)({
                      pathname,
                      query,
                    }),
                    delBasePath(as),
                    __N_SSG,
                    this.locale,
                    this.defaultLocale
                  );
                }
                const props = await this._getData(() =>
                  __N_SSG
                    ? this._getStaticData(dataHref)
                    : __N_SSP
                    ? this._getServerData(dataHref)
                    : this.getInitialProps(
                        Component,
                        // we provide AppTree later so this needs to be `any`
                        {
                          pathname,
                          query,
                          asPath: as,
                        }
                      )
                );
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return routeInfo;
              } catch (err) {
                return this.handleRouteInfoError(err, pathname, query, as);
              }
            }
            set(route, pathname, query, as, data) {
              this.isFallback = false;
              this.route = route;
              this.pathname = pathname;
              this.query = query;
              this.asPath = as;
              return this.notify(data);
            }
            /**
             * Callback to execute before replacing router state
             * @param cb callback to be executed
             */
            beforePopState(cb) {
              this._bps = cb;
            }
            onlyAHashChange(as) {
              if (!this.asPath) return false;
              const [oldUrlNoHash, oldHash] = this.asPath.split("#");
              const [newUrlNoHash, newHash] = as.split("#"); // Makes sure we scroll to the provided hash if the url/hash are the same
              if (
                newHash &&
                oldUrlNoHash === newUrlNoHash &&
                oldHash === newHash
              ) {
                return true;
              } // If the urls are change, there's more than a hash change
              if (oldUrlNoHash !== newUrlNoHash) {
                return false;
              } // If the hash has changed, then it's a hash only change.
              // This check is necessary to handle both the enter and
              // leave hash === '' cases. The identity case falls through
              // and is treated as a next reload.
              return oldHash !== newHash;
            }
            scrollToHash(as) {
              const [, hash] = as.split("#"); // Scroll to top if the hash is just `#` with no value
              if (hash === "") {
                window.scrollTo(0, 0);
                return;
              } // First we check if the element by id is found
              const idEl = document.getElementById(hash);
              if (idEl) {
                idEl.scrollIntoView();
                return;
              } // If there's no element with the id, we check the `name` property
              // To mirror browsers
              const nameEl = document.getElementsByName(hash)[0];
              if (nameEl) {
                nameEl.scrollIntoView();
              }
            }
            urlIsNew(asPath) {
              return this.asPath !== asPath;
            }
            _resolveHref(parsedHref, pages, applyBasePath = true) {
              const { pathname } = parsedHref;
              const cleanPathname = (0,
              _normalizeTrailingSlash.removePathTrailingSlash)(
                (0, _denormalizePagePath.denormalizePagePath)(
                  applyBasePath ? delBasePath(pathname) : pathname
                )
              );
              if (cleanPathname === "/404" || cleanPathname === "/_error") {
                return parsedHref;
              } // handle resolving href for dynamic routes
              if (!pages.includes(cleanPathname)) {
                // eslint-disable-next-line array-callback-return
                pages.some((page) => {
                  if (
                    (0, _isDynamic.isDynamicRoute)(page) &&
                    (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)
                  ) {
                    parsedHref.pathname = applyBasePath
                      ? addBasePath(page)
                      : page;
                    return true;
                  }
                });
              }
              return parsedHref;
            }
            /**
             * Prefetch page code, you may wait for the data during page rendering.
             * This feature only works in production!
             * @param url the href of prefetched page
             * @param asPath the as path of the prefetched page
             */
            async prefetch(url, asPath = url, options = {}) {
              let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
              let { pathname } = parsed;
              const pages = await this.pageLoader.getPageList();
              parsed = this._resolveHref(parsed, pages);
              if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                url = (0, _utils.formatWithValidation)(parsed);
              } // Prefetch is not supported in development mode because it would trigger on-demand-entries
              if (true) {
                return;
              }
              const route = (0,
              _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
              await Promise.all([
                this.pageLoader.prefetchData(
                  url,
                  asPath,
                  this.locale,
                  this.defaultLocale
                ),
                this.pageLoader[options.priority ? "loadPage" : "prefetch"](
                  route
                ),
              ]);
            }
            async fetchComponent(route) {
              let cancelled = false;
              const cancel = (this.clc = () => {
                cancelled = true;
              });
              const componentResult = await this.pageLoader.loadPage(route);
              if (cancelled) {
                const error = new Error(
                  `Abort fetching component for route: "${route}"`
                );
                error.cancelled = true;
                throw error;
              }
              if (cancel === this.clc) {
                this.clc = null;
              }
              return componentResult;
            }
            _getData(fn) {
              let cancelled = false;
              const cancel = () => {
                cancelled = true;
              };
              this.clc = cancel;
              return fn().then((data) => {
                if (cancel === this.clc) {
                  this.clc = null;
                }
                if (cancelled) {
                  const err = new Error("Loading initial props cancelled");
                  err.cancelled = true;
                  throw err;
                }
                return data;
              });
            }
            _getStaticData(dataHref) {
              const { href: cacheKey } = new URL(
                dataHref,
                window.location.href
              );
              if (false) {
              }
              return fetchNextData(dataHref, this.isSsr).then((data) => {
                this.sdc[cacheKey] = data;
                return data;
              });
            }
            _getServerData(dataHref) {
              return fetchNextData(dataHref, this.isSsr);
            }
            getInitialProps(Component, ctx) {
              const { Component: App } = this.components["/_app"];
              const AppTree = this._wrapApp(App);
              ctx.AppTree = AppTree;
              return (0, _utils.loadGetInitialProps)(App, {
                AppTree,
                Component,
                router: this,
                ctx,
              });
            }
            abortComponentLoad(as) {
              if (this.clc) {
                Router.events.emit(
                  "routeChangeError",
                  buildCancellationError(),
                  as
                );
                this.clc();
                this.clc = null;
              }
            }
            notify(data) {
              return this.sub(data, this.components["/_app"].Component);
            }
          }
          exports.default = Router;
          Router.events = (0, _mitt.default)();

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
      /*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
          function escapePathDelimiters(segment) {
            return segment.replace(/[/#?]/g, (char) =>
              encodeURIComponent(char)
            );
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.formatUrl = formatUrl;
          var querystring = _interopRequireWildcard(
            __webpack_require__(
              /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
            )
          );
          function _getRequireWildcardCache() {
            if (typeof WeakMap !== "function") return null;
            var cache = new WeakMap();
            _getRequireWildcardCache = function () {
              return cache;
            };
            return cache;
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            }
            if (
              obj === null ||
              (typeof obj !== "object" && typeof obj !== "function")
            ) {
              return {
                default: obj,
              };
            }
            var cache = _getRequireWildcardCache();
            if (cache && cache.has(obj)) {
              return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(obj, key)
                  : null;
                if (desc && (desc.get || desc.set)) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
            newObj.default = obj;
            if (cache) {
              cache.set(obj, newObj);
            }
            return newObj;
          } // Format function modified from nodejs
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.
          const slashedProtocols = /https?|ftp|gopher|file/;
          function formatUrl(urlObj) {
            let { auth, hostname } = urlObj;
            let protocol = urlObj.protocol || "";
            let pathname = urlObj.pathname || "";
            let hash = urlObj.hash || "";
            let query = urlObj.query || "";
            let host = false;
            auth = auth
              ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@"
              : "";
            if (urlObj.host) {
              host = auth + urlObj.host;
            } else if (hostname) {
              host =
                auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
              if (urlObj.port) {
                host += ":" + urlObj.port;
              }
            }
            if (query && typeof query === "object") {
              query = String(querystring.urlQueryToSearchParams(query));
            }
            let search = urlObj.search || (query && `?${query}`) || "";
            if (protocol && protocol.substr(-1) !== ":") protocol += ":";
            if (
              urlObj.slashes ||
              ((!protocol || slashedProtocols.test(protocol)) && host !== false)
            ) {
              host = "//" + (host || "");
              if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
            } else if (!host) {
              host = "";
            }
            if (hash && hash[0] !== "#") hash = "#" + hash;
            if (search && search[0] !== "?") search = "?" + search;
            pathname = pathname.replace(/[?#]/g, encodeURIComponent);
            search = search.replace("#", "%23");
            return `${protocol}${host}${pathname}${search}${hash}`;
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
          const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
          function isDynamicRoute(route) {
            return TEST_ROUTE.test(route);
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
      /*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.parseRelativeUrl = parseRelativeUrl;
          var _utils = __webpack_require__(
            /*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js"
          );
          var _querystring = __webpack_require__(
            /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
          );
          const DUMMY_BASE = new URL(
            false ? undefined : (0, _utils.getLocationOrigin)()
          );
          /**
           * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
           * (e.g. `./hello`) then at least base must be.
           * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
           * the current origin will be parsed as relative
           */
          function parseRelativeUrl(url, base) {
            const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
            const {
              pathname,
              searchParams,
              search,
              hash,
              href,
              origin,
              protocol,
            } = new URL(url, resolvedBase);
            if (
              origin !== DUMMY_BASE.origin ||
              (protocol !== "http:" && protocol !== "https:")
            ) {
              throw new Error("invariant: invalid relative URL");
            }
            return {
              pathname,
              query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
              search,
              hash,
              href: href.slice(DUMMY_BASE.origin.length),
            };
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _defineProperty = __webpack_require__(
            /*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"
          );
          function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              r &&
                (o = o.filter(function (r) {
                  return Object.getOwnPropertyDescriptor(e, r).enumerable;
                })),
                t.push.apply(t, o);
            }
            return t;
          }
          function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? ownKeys(Object(t), !0).forEach(function (r) {
                    _defineProperty(e, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    );
                  });
            }
            return e;
          }
          exports.__esModule = true;
          exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
          var pathToRegexp = _interopRequireWildcard(
            __webpack_require__(
              /*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"
            )
          );
          exports.pathToRegexp = pathToRegexp;
          function _getRequireWildcardCache() {
            if (typeof WeakMap !== "function") return null;
            var cache = new WeakMap();
            _getRequireWildcardCache = function () {
              return cache;
            };
            return cache;
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            }
            if (
              obj === null ||
              (typeof obj !== "object" && typeof obj !== "function")
            ) {
              return {
                default: obj,
              };
            }
            var cache = _getRequireWildcardCache();
            if (cache && cache.has(obj)) {
              return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(obj, key)
                  : null;
                if (desc && (desc.get || desc.set)) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
            newObj.default = obj;
            if (cache) {
              cache.set(obj, newObj);
            }
            return newObj;
          }
          const matcherOptions = {
            sensitive: false,
            delimiter: "/",
          };
          exports.matcherOptions = matcherOptions;
          const customRouteMatcherOptions = _objectSpread(
            _objectSpread({}, matcherOptions),
            {},
            {
              strict: true,
            }
          );
          exports.customRouteMatcherOptions = customRouteMatcherOptions;
          var _default = (customRoute = false) => {
            return (path) => {
              const keys = [];
              const matcherRegex = pathToRegexp.pathToRegexp(
                path,
                keys,
                customRoute ? customRouteMatcherOptions : matcherOptions
              );
              const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
              return (pathname, params) => {
                const res = pathname == null ? false : matcher(pathname);
                if (!res) {
                  return false;
                }
                if (customRoute) {
                  for (const key of keys) {
                    // unnamed params should be removed as they
                    // are not allowed to be used in the destination
                    if (typeof key.name === "number") {
                      delete res.params[key.name];
                    }
                  }
                }
                return _objectSpread(_objectSpread({}, params), res.params);
              };
            };
          };
          exports.default = _default;

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
      /*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _defineProperty = __webpack_require__(
            /*! @babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"
          );
          function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              r &&
                (o = o.filter(function (r) {
                  return Object.getOwnPropertyDescriptor(e, r).enumerable;
                })),
                t.push.apply(t, o);
            }
            return t;
          }
          function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? ownKeys(Object(t), !0).forEach(function (r) {
                    _defineProperty(e, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys(Object(t)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(t, r)
                    );
                  });
            }
            return e;
          }
          exports.__esModule = true;
          exports.default = prepareDestination;
          var _querystring = __webpack_require__(
            /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
          );
          var _parseRelativeUrl = __webpack_require__(
            /*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js"
          );
          var pathToRegexp = _interopRequireWildcard(
            __webpack_require__(
              /*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"
            )
          );
          function _getRequireWildcardCache() {
            if (typeof WeakMap !== "function") return null;
            var cache = new WeakMap();
            _getRequireWildcardCache = function () {
              return cache;
            };
            return cache;
          }
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            }
            if (
              obj === null ||
              (typeof obj !== "object" && typeof obj !== "function")
            ) {
              return {
                default: obj,
              };
            }
            var cache = _getRequireWildcardCache();
            if (cache && cache.has(obj)) {
              return cache.get(obj);
            }
            var newObj = {};
            var hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(obj, key)
                  : null;
                if (desc && (desc.get || desc.set)) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
            newObj.default = obj;
            if (cache) {
              cache.set(obj, newObj);
            }
            return newObj;
          }
          function prepareDestination(
            destination,
            params,
            query,
            appendParamsToQuery,
            basePath
          ) {
            let parsedDestination = {};
            if (destination.startsWith("/")) {
              parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(
                destination
              );
            } else {
              const {
                pathname,
                searchParams,
                hash,
                hostname,
                port,
                protocol,
                search,
                href,
              } = new URL(destination);
              parsedDestination = {
                pathname,
                query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
                hash,
                protocol,
                hostname,
                port,
                search,
                href,
              };
            }
            const destQuery = parsedDestination.query;
            const destPath = `${parsedDestination.pathname}${
              parsedDestination.hash || ""
            }`;
            const destPathParamKeys = [];
            pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
            const destPathParams = destPathParamKeys.map((key) => key.name);
            let destinationCompiler = pathToRegexp.compile(
              destPath,
              // we don't validate while compiling the destination since we should
              // have already validated before we got to this point and validating
              // breaks compiling destinations with named pattern params from the source
              // e.g. /something:hello(.*) -> /another/:hello is broken with validation
              // since compile validation is meant for reversing and not for inserting
              // params from a separate path-regex into another
              {
                validate: false,
              }
            );
            let newUrl; // update any params in query values
            for (const [key, strOrArray] of Object.entries(destQuery)) {
              let value = Array.isArray(strOrArray)
                ? strOrArray[0]
                : strOrArray;
              if (value) {
                // the value needs to start with a forward-slash to be compiled
                // correctly
                value = `/${value}`;
                const queryCompiler = pathToRegexp.compile(value, {
                  validate: false,
                });
                value = queryCompiler(params).substr(1);
              }
              destQuery[key] = value;
            } // add path params to query if it's not a redirect and not
            // already defined in destination query or path
            const paramKeys = Object.keys(params);
            if (
              appendParamsToQuery &&
              !paramKeys.some((key) => destPathParams.includes(key))
            ) {
              for (const key of paramKeys) {
                if (!(key in destQuery)) {
                  destQuery[key] = params[key];
                }
              }
            }
            const shouldAddBasePath = destination.startsWith("/") && basePath;
            try {
              newUrl = `${
                shouldAddBasePath ? basePath : ""
              }${destinationCompiler(params)}`;
              const [pathname, hash] = newUrl.split("#");
              parsedDestination.pathname = pathname;
              parsedDestination.hash = `${hash ? "#" : ""}${hash || ""}`;
              delete parsedDestination.search;
            } catch (err) {
              if (
                err.message.match(
                  /Expected .*? to not repeat, but got an array/
                )
              ) {
                throw new Error(
                  `To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`
                );
              }
              throw err;
            } // Query merge order lowest priority to highest
            // 1. initial URL query values
            // 2. path segment values
            // 3. destination specified query values
            parsedDestination.query = _objectSpread(
              _objectSpread({}, query),
              parsedDestination.query
            );
            return {
              newUrl,
              parsedDestination,
            };
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
          exports.urlQueryToSearchParams = urlQueryToSearchParams;
          exports.assign = assign;
          function searchParamsToUrlQuery(searchParams) {
            const query = {};
            searchParams.forEach((value, key) => {
              if (typeof query[key] === "undefined") {
                query[key] = value;
              } else if (Array.isArray(query[key])) {
                query[key].push(value);
              } else {
                query[key] = [query[key], value];
              }
            });
            return query;
          }
          function stringifyUrlQueryParam(param) {
            if (
              typeof param === "string" ||
              (typeof param === "number" && !isNaN(param)) ||
              typeof param === "boolean"
            ) {
              return String(param);
            } else {
              return "";
            }
          }
          function urlQueryToSearchParams(urlQuery) {
            const result = new URLSearchParams();
            Object.entries(urlQuery).forEach(([key, value]) => {
              if (Array.isArray(value)) {
                value.forEach((item) =>
                  result.append(key, stringifyUrlQueryParam(item))
                );
              } else {
                result.set(key, stringifyUrlQueryParam(value));
              }
            });
            return result;
          }
          function assign(target, ...searchParamsList) {
            searchParamsList.forEach((searchParams) => {
              Array.from(searchParams.keys()).forEach((key) =>
                target.delete(key)
              );
              searchParams.forEach((value, key) => target.append(key, value));
            });
            return target;
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.default = resolveRewrites;
          var _pathMatch = _interopRequireDefault(
            __webpack_require__(
              /*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"
            )
          );
          var _prepareDestination = _interopRequireDefault(
            __webpack_require__(
              /*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"
            )
          );
          var _normalizeTrailingSlash = __webpack_require__(
            /*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js"
          );
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule
              ? obj
              : {
                  default: obj,
                };
          }
          const customRouteMatcher = (0, _pathMatch.default)(true);
          function resolveRewrites(
            asPath,
            pages,
            basePath,
            rewrites,
            query,
            resolveHref
          ) {
            if (!pages.includes(asPath)) {
              for (const rewrite of rewrites) {
                const matcher = customRouteMatcher(rewrite.source);
                const params = matcher(asPath);
                if (params) {
                  if (!rewrite.destination) {
                    // this is a proxied rewrite which isn't handled on the client
                    break;
                  }
                  const destRes = (0, _prepareDestination.default)(
                    rewrite.destination,
                    params,
                    query,
                    true,
                    rewrite.basePath === false ? "" : basePath
                  );
                  asPath = destRes.parsedDestination.pathname;
                  Object.assign(query, destRes.parsedDestination.query);
                  if (
                    pages.includes(
                      (0, _normalizeTrailingSlash.removePathTrailingSlash)(
                        asPath
                      )
                    )
                  ) {
                    // check if we now match a page as this means we are done
                    // resolving the rewrites
                    break;
                  } // check if we match a dynamic-route, if so we break the rewrites chain
                  const resolvedHref = resolveHref(asPath);
                  if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
                    break;
                  }
                }
              }
            }
            return asPath;
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.getRouteMatcher = getRouteMatcher;
          function getRouteMatcher(routeRegex) {
            const { re, groups } = routeRegex;
            return (pathname) => {
              const routeMatch = re.exec(pathname);
              if (!routeMatch) {
                return false;
              }
              const decode = (param) => {
                try {
                  return decodeURIComponent(param);
                } catch (_) {
                  const err = new Error("failed to decode param");
                  err.code = "DECODE_FAILED";
                  throw err;
                }
              };
              const params = {};
              Object.keys(groups).forEach((slugName) => {
                const g = groups[slugName];
                const m = routeMatch[g.pos];
                if (m !== undefined) {
                  params[slugName] = ~m.indexOf("/")
                    ? m.split("/").map((entry) => decode(entry))
                    : g.repeat
                    ? [decode(m)]
                    : decode(m);
                }
              });
              return params;
            };
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
          // to reduce bytes
          function escapeRegex(str) {
            return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
          }
          function parseParameter(param) {
            const optional = param.startsWith("[") && param.endsWith("]");
            if (optional) {
              param = param.slice(1, -1);
            }
            const repeat = param.startsWith("...");
            if (repeat) {
              param = param.slice(3);
            }
            return {
              key: param,
              repeat,
              optional,
            };
          }
          function getRouteRegex(normalizedRoute) {
            const segments = (normalizedRoute.replace(/\/$/, "") || "/")
              .slice(1)
              .split("/");
            const groups = {};
            let groupIndex = 1;
            const parameterizedRoute = segments
              .map((segment) => {
                if (segment.startsWith("[") && segment.endsWith("]")) {
                  const { key, optional, repeat } = parseParameter(
                    segment.slice(1, -1)
                  );
                  groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional,
                  };
                  return repeat
                    ? optional
                      ? "(?:/(.+?))?"
                      : "/(.+?)"
                    : "/([^/]+?)";
                } else {
                  return `/${escapeRegex(segment)}`;
                }
              })
              .join(""); // dead code eliminate for browser since it's only needed
            // while generating routes-manifest
            if (false) {
            }
            return {
              re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
              groups,
            };
          }

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/utils.js":
      /*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.execOnce = execOnce;
          exports.getLocationOrigin = getLocationOrigin;
          exports.getURL = getURL;
          exports.getDisplayName = getDisplayName;
          exports.isResSent = isResSent;
          exports.loadGetInitialProps = loadGetInitialProps;
          exports.formatWithValidation = formatWithValidation;
          exports.ST = exports.SP = exports.urlObjectKeys = void 0;
          var _formatUrl = __webpack_require__(
            /*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"
          );
          /**
           * Utils
           */
          function execOnce(fn) {
            let used = false;
            let result;
            return (...args) => {
              if (!used) {
                used = true;
                result = fn(...args);
              }
              return result;
            };
          }
          function getLocationOrigin() {
            const { protocol, hostname, port } = window.location;
            return `${protocol}//${hostname}${port ? ":" + port : ""}`;
          }
          function getURL() {
            const { href } = window.location;
            const origin = getLocationOrigin();
            return href.substring(origin.length);
          }
          function getDisplayName(Component) {
            return typeof Component === "string"
              ? Component
              : Component.displayName || Component.name || "Unknown";
          }
          function isResSent(res) {
            return res.finished || res.headersSent;
          }
          async function loadGetInitialProps(App, ctx) {
            if (true) {
              var _App$prototype;
              if (
                (_App$prototype = App.prototype) == null
                  ? void 0
                  : _App$prototype.getInitialProps
              ) {
                const message = `"${getDisplayName(
                  App
                )}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
                throw new Error(message);
              }
            } // when called from _app `ctx` is nested in `ctx`
            const res = ctx.res || (ctx.ctx && ctx.ctx.res);
            if (!App.getInitialProps) {
              if (ctx.ctx && ctx.Component) {
                // @ts-ignore pageProps default
                return {
                  pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
                };
              }
              return {};
            }
            const props = await App.getInitialProps(ctx);
            if (res && isResSent(res)) {
              return props;
            }
            if (!props) {
              const message = `"${getDisplayName(
                App
              )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
              throw new Error(message);
            }
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn(
                  `${getDisplayName(
                    App
                  )} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`
                );
              }
            }
            return props;
          }
          const urlObjectKeys = [
            "auth",
            "hash",
            "host",
            "hostname",
            "href",
            "path",
            "pathname",
            "port",
            "protocol",
            "query",
            "search",
            "slashes",
          ];
          exports.urlObjectKeys = urlObjectKeys;
          function formatWithValidation(url) {
            if (true) {
              if (url !== null && typeof url === "object") {
                Object.keys(url).forEach((key) => {
                  if (urlObjectKeys.indexOf(key) === -1) {
                    console.warn(
                      `Unknown key passed via urlObject into url.format: ${key}`
                    );
                  }
                });
              }
            }
            return (0, _formatUrl.formatUrl)(url);
          }
          const SP = typeof performance !== "undefined";
          exports.SP = SP;
          const ST =
            SP &&
            typeof performance.mark === "function" &&
            typeof performance.measure === "function";
          exports.ST = ST;

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        exports.normalizePathSep = normalizePathSep;
        exports.denormalizePagePath = denormalizePagePath;
        function normalizePathSep(path) {
          return path.replace(/\\/g, "/");
        }
        function denormalizePagePath(page) {
          page = normalizePathSep(page);
          if (page.startsWith("/index/")) {
            page = page.slice(6);
          } else if (page === "/index") {
            page = "/";
          }
          return page;
        }
        //# sourceMappingURL=denormalize-page-path.js.map

        /***/
      },

    /***/ "./node_modules/next/dist/pages/_app.js":
      /*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _interopRequireDefault = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
          );
          exports.__esModule = true;
          exports.Container = Container;
          exports.createUrl = createUrl;
          exports.default = void 0;
          var _react = _interopRequireDefault(
            __webpack_require__(/*! react */ "./node_modules/react/index.js")
          );
          var _utils = __webpack_require__(
            /*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js"
          );
          exports.AppInitialProps = _utils.AppInitialProps;
          exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
          /**
           * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
           * This allows for keeping state between navigation, custom error handling, injecting additional data.
           */
          async function appGetInitialProps({ Component, ctx }) {
            const pageProps = await (0, _utils.loadGetInitialProps)(
              Component,
              ctx
            );
            return {
              pageProps,
            };
          }
          class App extends _react.default.Component {
            // Kept here for backwards compatibility.
            // When someone ended App they could call `super.componentDidCatch`.
            // @deprecated This method is no longer needed. Errors are caught at the top level
            componentDidCatch(error, _errorInfo) {
              throw error;
            }
            render() {
              const {
                router,
                Component,
                pageProps,
                __N_SSG,
                __N_SSP,
              } = this.props;
              return /*#__PURE__*/ _react.default.createElement(
                Component,
                Object.assign(
                  {},
                  pageProps,
                  // we don't add the legacy URL prop if it's using non-legacy
                  // methods like getStaticProps and getServerSideProps
                  !(__N_SSG || __N_SSP)
                    ? {
                        url: createUrl(router),
                      }
                    : {}
                )
              );
            }
          }
          exports.default = App;
          App.origGetInitialProps = appGetInitialProps;
          App.getInitialProps = appGetInitialProps;
          let warnContainer;
          let warnUrl;
          if (true) {
            warnContainer = (0, _utils.execOnce)(() => {
              console.warn(
                `Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`
              );
            });
            warnUrl = (0, _utils.execOnce)(() => {
              console.error(
                `Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`
              );
            });
          } // @deprecated noop for now until removal
          function Container(p) {
            if (true) warnContainer();
            return p.children;
          }
          _c = Container;
          function createUrl(router) {
            // This is to make sure we don't references the router object at call time
            const { pathname, asPath, query } = router;
            return {
              get query() {
                if (true) warnUrl();
                return query;
              },
              get pathname() {
                if (true) warnUrl();
                return pathname;
              },
              get asPath() {
                if (true) warnUrl();
                return asPath;
              },
              back: () => {
                if (true) warnUrl();
                router.back();
              },
              push: (url, as) => {
                if (true) warnUrl();
                return router.push(url, as);
              },
              pushTo: (href, as) => {
                if (true) warnUrl();
                const pushRoute = as ? href : "";
                const pushUrl = as || href;
                return router.push(pushRoute, pushUrl);
              },
              replace: (url, as) => {
                if (true) warnUrl();
                return router.replace(url, as);
              },
              replaceTo: (href, as) => {
                if (true) warnUrl();
                const replaceRoute = as ? href : "";
                const replaceUrl = as || href;
                return router.replace(replaceRoute, replaceUrl);
              },
            };
          }
          var _c;
          $RefreshReg$(_c, "Container");

          var _a, _b;
          // Legacy CSS implementations will `eval` browser code in a Node.js context
          // to extract CSS. For backwards compatibility, we need to check we're in a
          // browser context before continuing.
          if (
            typeof self !== "undefined" &&
            // AMP / No-JS mode does not inject these helpers:
            "$RefreshHelpers$" in self
          ) {
            var currentExports = module.__proto__.exports;
            var prevExports =
              (_b =
                (_a = module.hot.data) === null || _a === void 0
                  ? void 0
                  : _a.prevExports) !== null && _b !== void 0
                ? _b
                : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(
              currentExports,
              module.i
            );
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
              // Save the previous exports on update so we can compare the boundary
              // signatures.
              module.hot.dispose(function (data) {
                data.prevExports = currentExports;
              });
              // Unconditionally accept an update to this module, we'll check if it's
              // still a Refresh Boundary later.
              module.hot.accept();
              // This field is set when the previous version of this module was a
              // Refresh Boundary, letting us know we need to check for invalidation or
              // enqueue an update.
              if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (
                  self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  self.$RefreshHelpers$.scheduleUpdate();
                }
              }
            } else {
              // Since we just executed the code for the module, it's possible that the
              // new exports made it ineligible for being a boundary.
              // We only care about the case when we were _previously_ a boundary,
              // because we already accepted this update (accidental side effect).
              var isNoLongerABoundary = prevExports !== null;
              if (isNoLongerABoundary) {
                module.hot.invalidate();
              }
            }
          }

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js"
          )(module)
        ));

        /***/
      },

    /***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
      /*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        module.exports = _defineProperty;

        /***/
      },

    /***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
      /*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
      /*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js"
        );

        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();

          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };

          return cache;
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }

          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj["default"] = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        module.exports = _interopRequireWildcard;

        /***/
      },

    /***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
      /*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            module.exports = _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            module.exports = _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        module.exports = _typeof;

        /***/
      },

    /***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /** @license React v16.13.1
         * react-is.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          (function () {
            "use strict";

            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            var hasSymbol = typeof Symbol === "function" && Symbol.for;
            var REACT_ELEMENT_TYPE = hasSymbol
              ? Symbol.for("react.element")
              : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol
              ? Symbol.for("react.portal")
              : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol
              ? Symbol.for("react.fragment")
              : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.strict_mode")
              : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol
              ? Symbol.for("react.profiler")
              : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol
              ? Symbol.for("react.provider")
              : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol
              ? Symbol.for("react.context")
              : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
            // (unstable) APIs that have been removed. Can we remove the symbols?

            var REACT_ASYNC_MODE_TYPE = hasSymbol
              ? Symbol.for("react.async_mode")
              : 0xeacf;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.concurrent_mode")
              : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol
              ? Symbol.for("react.forward_ref")
              : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol
              ? Symbol.for("react.suspense")
              : 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol
              ? Symbol.for("react.suspense_list")
              : 0xead8;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
            var REACT_BLOCK_TYPE = hasSymbol
              ? Symbol.for("react.block")
              : 0xead9;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol
              ? Symbol.for("react.fundamental")
              : 0xead5;
            var REACT_RESPONDER_TYPE = hasSymbol
              ? Symbol.for("react.responder")
              : 0xead6;
            var REACT_SCOPE_TYPE = hasSymbol
              ? Symbol.for("react.scope")
              : 0xead7;

            function isValidElementType(type) {
              return (
                typeof type === "string" ||
                typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                (typeof type === "object" &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                    type.$$typeof === REACT_RESPONDER_TYPE ||
                    type.$$typeof === REACT_SCOPE_TYPE ||
                    type.$$typeof === REACT_BLOCK_TYPE))
              );
            }

            function typeOf(object) {
              if (typeof object === "object" && object !== null) {
                var $$typeof = object.$$typeof;

                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;

                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;

                      default:
                        var $$typeofType = type && type.$$typeof;

                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;

                          default:
                            return $$typeof;
                        }
                    }

                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }

              return undefined;
            } // AsyncMode is deprecated along with isAsyncMode

            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;
            var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                  console["warn"](
                    "The ReactIs.isAsyncMode() alias has been deprecated, " +
                      "and will be removed in React 17+. Update your code to use " +
                      "ReactIs.isConcurrentMode() instead. It has the exact same API."
                  );
                }
              }

              return (
                isConcurrentMode(object) ||
                typeOf(object) === REACT_ASYNC_MODE_TYPE
              );
            }
            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
              return (
                typeof object === "object" &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }
            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }

            exports.AsyncMode = AsyncMode;
            exports.ConcurrentMode = ConcurrentMode;
            exports.ContextConsumer = ContextConsumer;
            exports.ContextProvider = ContextProvider;
            exports.Element = Element;
            exports.ForwardRef = ForwardRef;
            exports.Fragment = Fragment;
            exports.Lazy = Lazy;
            exports.Memo = Memo;
            exports.Portal = Portal;
            exports.Profiler = Profiler;
            exports.StrictMode = StrictMode;
            exports.Suspense = Suspense;
            exports.isAsyncMode = isAsyncMode;
            exports.isConcurrentMode = isConcurrentMode;
            exports.isContextConsumer = isContextConsumer;
            exports.isContextProvider = isContextProvider;
            exports.isElement = isElement;
            exports.isForwardRef = isForwardRef;
            exports.isFragment = isFragment;
            exports.isLazy = isLazy;
            exports.isMemo = isMemo;
            exports.isPortal = isPortal;
            exports.isProfiler = isProfiler;
            exports.isStrictMode = isStrictMode;
            exports.isSuspense = isSuspense;
            exports.isValidElementType = isValidElementType;
            exports.typeOf = typeOf;
          })();
        }

        /***/
      },

    /***/ "./node_modules/next/node_modules/react-is/index.js":
      /*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js"
          );
        }

        /***/
      },

    /***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
      /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, "loaded", {
              enumerable: true,
              get: function () {
                return module.l;
              },
            });
            Object.defineProperty(module, "id", {
              enumerable: true,
              get: function () {
                return module.i;
              },
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },

    /***/ "./node_modules/prop-types/checkPropTypes.js":
      /*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var printWarning = function () {};

        if (true) {
          var ReactPropTypesSecret = __webpack_require__(
            /*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
          );
          var loggedTypeFailures = {};
          var has = __webpack_require__(
            /*! ./lib/has */ "./node_modules/prop-types/lib/has.js"
          );

          printWarning = function (text) {
            var message = "Warning: " + text;
            if (typeof console !== "undefined") {
              console.error(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {
              /**/
            }
          };
        }

        /**
         * Assert that the values match with the type specs.
         * Error messages are memorized and will only be shown once.
         *
         * @param {object} typeSpecs Map of name to a ReactPropType
         * @param {object} values Runtime values that need to be type-checked
         * @param {string} location e.g. "prop", "context", "child context"
         * @param {string} componentName Name of the component for error messages.
         * @param {?Function} getStack Returns the component stack.
         * @private
         */
        function checkPropTypes(
          typeSpecs,
          values,
          location,
          componentName,
          getStack
        ) {
          if (true) {
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error(
                      (componentName || "React class") +
                        ": " +
                        location +
                        " type `" +
                        typeSpecName +
                        "` is invalid; " +
                        "it must be a function, usually from the `prop-types` package, but received `" +
                        typeof typeSpecs[typeSpecName] +
                        "`." +
                        "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    );
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error = typeSpecs[typeSpecName](
                    values,
                    typeSpecName,
                    componentName,
                    location,
                    null,
                    ReactPropTypesSecret
                  );
                } catch (ex) {
                  error = ex;
                }
                if (error && !(error instanceof Error)) {
                  printWarning(
                    (componentName || "React class") +
                      ": type specification of " +
                      location +
                      " `" +
                      typeSpecName +
                      "` is invalid; the type checker " +
                      "function must return `null` or an `Error` but returned a " +
                      typeof error +
                      ". " +
                      "You may have forgotten to pass an argument to the type checker " +
                      "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                      "shape all require an argument)."
                  );
                }
                if (
                  error instanceof Error &&
                  !(error.message in loggedTypeFailures)
                ) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error.message] = true;

                  var stack = getStack ? getStack() : "";

                  printWarning(
                    "Failed " +
                      location +
                      " type: " +
                      error.message +
                      (stack != null ? stack : "")
                  );
                }
              }
            }
          }
        }

        /**
         * Resets warning cache when testing.
         *
         * @private
         */
        checkPropTypes.resetWarningCache = function () {
          if (true) {
            loggedTypeFailures = {};
          }
        };

        module.exports = checkPropTypes;

        /***/
      },

    /***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
      /*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret =
          "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

        module.exports = ReactPropTypesSecret;

        /***/
      },

    /***/ "./node_modules/prop-types/lib/has.js":
      /*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

        /***/
      },

    /***/ "./node_modules/react/cjs/react.development.js":
      /*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /** @license React v16.14.0
         * react.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (true) {
          (function () {
            "use strict";

            var _assign = __webpack_require__(
              /*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js"
            );
            var checkPropTypes = __webpack_require__(
              /*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js"
            );

            var ReactVersion = "16.14.0";

            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            var hasSymbol = typeof Symbol === "function" && Symbol.for;
            var REACT_ELEMENT_TYPE = hasSymbol
              ? Symbol.for("react.element")
              : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol
              ? Symbol.for("react.portal")
              : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol
              ? Symbol.for("react.fragment")
              : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.strict_mode")
              : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol
              ? Symbol.for("react.profiler")
              : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol
              ? Symbol.for("react.provider")
              : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol
              ? Symbol.for("react.context")
              : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol
              ? Symbol.for("react.concurrent_mode")
              : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol
              ? Symbol.for("react.forward_ref")
              : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol
              ? Symbol.for("react.suspense")
              : 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol
              ? Symbol.for("react.suspense_list")
              : 0xead8;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
            var REACT_BLOCK_TYPE = hasSymbol
              ? Symbol.for("react.block")
              : 0xead9;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol
              ? Symbol.for("react.fundamental")
              : 0xead5;
            var REACT_RESPONDER_TYPE = hasSymbol
              ? Symbol.for("react.responder")
              : 0xead6;
            var REACT_SCOPE_TYPE = hasSymbol
              ? Symbol.for("react.scope")
              : 0xead7;
            var MAYBE_ITERATOR_SYMBOL =
              typeof Symbol === "function" && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = "@@iterator";
            function getIteratorFn(maybeIterable) {
              if (maybeIterable === null || typeof maybeIterable !== "object") {
                return null;
              }

              var maybeIterator =
                (MAYBE_ITERATOR_SYMBOL &&
                  maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
                maybeIterable[FAUX_ITERATOR_SYMBOL];

              if (typeof maybeIterator === "function") {
                return maybeIterator;
              }

              return null;
            }

            /**
             * Keeps track of the current dispatcher.
             */
            var ReactCurrentDispatcher = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null,
            };

            /**
             * Keeps track of the current batch's configuration such as how long an update
             * should suspend for if it needs to.
             */
            var ReactCurrentBatchConfig = {
              suspense: null,
            };

            /**
             * Keeps track of the current owner.
             *
             * The current owner is the component who should own any components that are
             * currently being constructed.
             */
            var ReactCurrentOwner = {
              /**
               * @internal
               * @type {ReactComponent}
               */
              current: null,
            };

            var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
            function describeComponentFrame(name, source, ownerName) {
              var sourceInfo = "";

              if (source) {
                var path = source.fileName;
                var fileName = path.replace(BEFORE_SLASH_RE, "");

                {
                  // In DEV, include code for a common special case:
                  // prefer "folder/index.js" instead of just "index.js".
                  if (/^index\./.test(fileName)) {
                    var match = path.match(BEFORE_SLASH_RE);

                    if (match) {
                      var pathBeforeSlash = match[1];

                      if (pathBeforeSlash) {
                        var folderName = pathBeforeSlash.replace(
                          BEFORE_SLASH_RE,
                          ""
                        );
                        fileName = folderName + "/" + fileName;
                      }
                    }
                  }
                }

                sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
              } else if (ownerName) {
                sourceInfo = " (created by " + ownerName + ")";
              }

              return "\n    in " + (name || "Unknown") + sourceInfo;
            }

            var Resolved = 1;
            function refineResolvedLazyComponent(lazyComponent) {
              return lazyComponent._status === Resolved
                ? lazyComponent._result
                : null;
            }

            function getWrappedName(outerType, innerType, wrapperName) {
              var functionName = innerType.displayName || innerType.name || "";
              return (
                outerType.displayName ||
                (functionName !== ""
                  ? wrapperName + "(" + functionName + ")"
                  : wrapperName)
              );
            }

            function getComponentName(type) {
              if (type == null) {
                // Host root, text node or just invalid type.
                return null;
              }

              {
                if (typeof type.tag === "number") {
                  error(
                    "Received an unexpected object in getComponentName(). " +
                      "This is likely a bug in React. Please file an issue."
                  );
                }
              }

              if (typeof type === "function") {
                return type.displayName || type.name || null;
              }

              if (typeof type === "string") {
                return type;
              }

              switch (type) {
                case REACT_FRAGMENT_TYPE:
                  return "Fragment";

                case REACT_PORTAL_TYPE:
                  return "Portal";

                case REACT_PROFILER_TYPE:
                  return "Profiler";

                case REACT_STRICT_MODE_TYPE:
                  return "StrictMode";

                case REACT_SUSPENSE_TYPE:
                  return "Suspense";

                case REACT_SUSPENSE_LIST_TYPE:
                  return "SuspenseList";
              }

              if (typeof type === "object") {
                switch (type.$$typeof) {
                  case REACT_CONTEXT_TYPE:
                    return "Context.Consumer";

                  case REACT_PROVIDER_TYPE:
                    return "Context.Provider";

                  case REACT_FORWARD_REF_TYPE:
                    return getWrappedName(type, type.render, "ForwardRef");

                  case REACT_MEMO_TYPE:
                    return getComponentName(type.type);

                  case REACT_BLOCK_TYPE:
                    return getComponentName(type.render);

                  case REACT_LAZY_TYPE: {
                    var thenable = type;
                    var resolvedThenable = refineResolvedLazyComponent(
                      thenable
                    );

                    if (resolvedThenable) {
                      return getComponentName(resolvedThenable);
                    }

                    break;
                  }
                }
              }

              return null;
            }

            var ReactDebugCurrentFrame = {};
            var currentlyValidatingElement = null;
            function setCurrentlyValidatingElement(element) {
              {
                currentlyValidatingElement = element;
              }
            }

            {
              // Stack implementation injected by the current renderer.
              ReactDebugCurrentFrame.getCurrentStack = null;

              ReactDebugCurrentFrame.getStackAddendum = function () {
                var stack = ""; // Add an extra top frame while an element is being validated

                if (currentlyValidatingElement) {
                  var name = getComponentName(currentlyValidatingElement.type);
                  var owner = currentlyValidatingElement._owner;
                  stack += describeComponentFrame(
                    name,
                    currentlyValidatingElement._source,
                    owner && getComponentName(owner.type)
                  );
                } // Delegate to the injected renderer-specific implementation

                var impl = ReactDebugCurrentFrame.getCurrentStack;

                if (impl) {
                  stack += impl() || "";
                }

                return stack;
              };
            }

            /**
             * Used by act() to track whether you're inside an act() scope.
             */
            var IsSomeRendererActing = {
              current: false,
            };

            var ReactSharedInternals = {
              ReactCurrentDispatcher: ReactCurrentDispatcher,
              ReactCurrentBatchConfig: ReactCurrentBatchConfig,
              ReactCurrentOwner: ReactCurrentOwner,
              IsSomeRendererActing: IsSomeRendererActing,
              // Used by renderers to avoid bundling object-assign twice in UMD bundles:
              assign: _assign,
            };

            {
              _assign(ReactSharedInternals, {
                // These should not be included in production.
                ReactDebugCurrentFrame: ReactDebugCurrentFrame,
                // Shim for React DOM 16.0.0 which still destructured (but not used) this.
                // TODO: remove in React 17.0.
                ReactComponentTreeHook: {},
              });
            }

            // by calls to these methods by a Babel plugin.
            //
            // In PROD (or in packages without access to React internals),
            // they are left as they are instead.

            function warn(format) {
              {
                for (
                  var _len = arguments.length,
                    args = new Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                printWarning("warn", format, args);
              }
            }
            function error(format) {
              {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2];
                }

                printWarning("error", format, args);
              }
            }

            function printWarning(level, format, args) {
              // When changing this logic, you might want to also
              // update consoleWithStackDev.www.js as well.
              {
                var hasExistingStack =
                  args.length > 0 &&
                  typeof args[args.length - 1] === "string" &&
                  args[args.length - 1].indexOf("\n    in") === 0;

                if (!hasExistingStack) {
                  var ReactDebugCurrentFrame =
                    ReactSharedInternals.ReactDebugCurrentFrame;
                  var stack = ReactDebugCurrentFrame.getStackAddendum();

                  if (stack !== "") {
                    format += "%s";
                    args = args.concat([stack]);
                  }
                }

                var argsWithFormat = args.map(function (item) {
                  return "" + item;
                }); // Careful: RN currently depends on this prefix

                argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging

                Function.prototype.apply.call(
                  console[level],
                  console,
                  argsWithFormat
                );

                try {
                  // --- Welcome to debugging React ---
                  // This error was thrown as a convenience so that you can use this stack
                  // to find the callsite that caused this warning to fire.
                  var argIndex = 0;
                  var message =
                    "Warning: " +
                    format.replace(/%s/g, function () {
                      return args[argIndex++];
                    });
                  throw new Error(message);
                } catch (x) {}
              }
            }

            var didWarnStateUpdateForUnmountedComponent = {};

            function warnNoop(publicInstance, callerName) {
              {
                var _constructor = publicInstance.constructor;
                var componentName =
                  (_constructor &&
                    (_constructor.displayName || _constructor.name)) ||
                  "ReactClass";
                var warningKey = componentName + "." + callerName;

                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                  return;
                }

                error(
                  "Can't call %s on a component that is not yet mounted. " +
                    "This is a no-op, but it might indicate a bug in your application. " +
                    "Instead, assign to `this.state` directly or define a `state = {};` " +
                    "class property with the desired state in the %s component.",
                  callerName,
                  componentName
                );

                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
              }
            }
            /**
             * This is the abstract API for an update queue.
             */

            var ReactNoopUpdateQueue = {
              /**
               * Checks whether or not this composite component is mounted.
               * @param {ReactClass} publicInstance The instance we want to test.
               * @return {boolean} True if mounted, false otherwise.
               * @protected
               * @final
               */
              isMounted: function (publicInstance) {
                return false;
              },

              /**
               * Forces an update. This should only be invoked when it is known with
               * certainty that we are **not** in a DOM transaction.
               *
               * You may want to call this when you know that some deeper aspect of the
               * component's state has changed but `setState` was not called.
               *
               * This will not invoke `shouldComponentUpdate`, but it will invoke
               * `componentWillUpdate` and `componentDidUpdate`.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueForceUpdate: function (
                publicInstance,
                callback,
                callerName
              ) {
                warnNoop(publicInstance, "forceUpdate");
              },

              /**
               * Replaces all of the state. Always use this or `setState` to mutate state.
               * You should treat `this.state` as immutable.
               *
               * There is no guarantee that `this.state` will be immediately updated, so
               * accessing `this.state` after calling this method may return the old value.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} completeState Next state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} callerName name of the calling function in the public API.
               * @internal
               */
              enqueueReplaceState: function (
                publicInstance,
                completeState,
                callback,
                callerName
              ) {
                warnNoop(publicInstance, "replaceState");
              },

              /**
               * Sets a subset of the state. This only exists because _pendingState is
               * internal. This provides a merging strategy that is not available to deep
               * properties which is confusing. TODO: Expose pendingState or don't use it
               * during the merge.
               *
               * @param {ReactClass} publicInstance The instance that should rerender.
               * @param {object} partialState Next partial state to be merged with state.
               * @param {?function} callback Called after component is updated.
               * @param {?string} Name of the calling function in the public API.
               * @internal
               */
              enqueueSetState: function (
                publicInstance,
                partialState,
                callback,
                callerName
              ) {
                warnNoop(publicInstance, "setState");
              },
            };

            var emptyObject = {};

            {
              Object.freeze(emptyObject);
            }
            /**
             * Base class helpers for the updating state of a component.
             */

            function Component(props, context, updater) {
              this.props = props;
              this.context = context; // If a component has string refs, we will assign a different object later.

              this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
              // renderer.

              this.updater = updater || ReactNoopUpdateQueue;
            }

            Component.prototype.isReactComponent = {};
            /**
             * Sets a subset of the state. Always use this to mutate
             * state. You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * There is no guarantee that calls to `setState` will run synchronously,
             * as they may eventually be batched together.  You can provide an optional
             * callback that will be executed when the call to setState is actually
             * completed.
             *
             * When a function is provided to setState, it will be called at some point in
             * the future (not synchronously). It will be called with the up to date
             * component arguments (state, props, context). These values can be different
             * from this.* because your function may be called after receiveProps but before
             * shouldComponentUpdate, and this new state, props, and context will not yet be
             * assigned to this.
             *
             * @param {object|function} partialState Next partial state or function to
             *        produce next partial state to be merged with current state.
             * @param {?function} callback Called after state is updated.
             * @final
             * @protected
             */

            Component.prototype.setState = function (partialState, callback) {
              if (
                !(
                  typeof partialState === "object" ||
                  typeof partialState === "function" ||
                  partialState == null
                )
              ) {
                {
                  throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                  );
                }
              }

              this.updater.enqueueSetState(
                this,
                partialState,
                callback,
                "setState"
              );
            };
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {?function} callback Called after update is complete.
             * @final
             * @protected
             */

            Component.prototype.forceUpdate = function (callback) {
              this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
            };
            /**
             * Deprecated APIs. These APIs used to exist on classic React classes but since
             * we would like to deprecate them, we're not going to move them over to this
             * modern base class. Instead, we define a getter that warns if it's accessed.
             */

            {
              var deprecatedAPIs = {
                isMounted: [
                  "isMounted",
                  "Instead, make sure to clean up subscriptions and pending requests in " +
                    "componentWillUnmount to prevent memory leaks.",
                ],
                replaceState: [
                  "replaceState",
                  "Refactor your code to use setState instead (see " +
                    "https://github.com/facebook/react/issues/3236).",
                ],
              };

              var defineDeprecationWarning = function (methodName, info) {
                Object.defineProperty(Component.prototype, methodName, {
                  get: function () {
                    warn(
                      "%s(...) is deprecated in plain JavaScript React classes. %s",
                      info[0],
                      info[1]
                    );

                    return undefined;
                  },
                });
              };

              for (var fnName in deprecatedAPIs) {
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                  defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
              }
            }

            function ComponentDummy() {}

            ComponentDummy.prototype = Component.prototype;
            /**
             * Convenience component with default shallow equality check for sCU.
             */

            function PureComponent(props, context, updater) {
              this.props = props;
              this.context = context; // If a component has string refs, we will assign a different object later.

              this.refs = emptyObject;
              this.updater = updater || ReactNoopUpdateQueue;
            }

            var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
            pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

            _assign(pureComponentPrototype, Component.prototype);

            pureComponentPrototype.isPureReactComponent = true;

            // an immutable object with a single mutable value
            function createRef() {
              var refObject = {
                current: null,
              };

              {
                Object.seal(refObject);
              }

              return refObject;
            }

            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var RESERVED_PROPS = {
              key: true,
              ref: true,
              __self: true,
              __source: true,
            };
            var specialPropKeyWarningShown,
              specialPropRefWarningShown,
              didWarnAboutStringRefs;

            {
              didWarnAboutStringRefs = {};
            }

            function hasValidRef(config) {
              {
                if (hasOwnProperty.call(config, "ref")) {
                  var getter = Object.getOwnPropertyDescriptor(config, "ref")
                    .get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }

              return config.ref !== undefined;
            }

            function hasValidKey(config) {
              {
                if (hasOwnProperty.call(config, "key")) {
                  var getter = Object.getOwnPropertyDescriptor(config, "key")
                    .get;

                  if (getter && getter.isReactWarning) {
                    return false;
                  }
                }
              }

              return config.key !== undefined;
            }

            function defineKeyPropWarningGetter(props, displayName) {
              var warnAboutAccessingKey = function () {
                {
                  if (!specialPropKeyWarningShown) {
                    specialPropKeyWarningShown = true;

                    error(
                      "%s: `key` is not a prop. Trying to access it will result " +
                        "in `undefined` being returned. If you need to access the same " +
                        "value within the child component, you should pass it as a different " +
                        "prop. (https://fb.me/react-special-props)",
                      displayName
                    );
                  }
                }
              };

              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true,
              });
            }

            function defineRefPropWarningGetter(props, displayName) {
              var warnAboutAccessingRef = function () {
                {
                  if (!specialPropRefWarningShown) {
                    specialPropRefWarningShown = true;

                    error(
                      "%s: `ref` is not a prop. Trying to access it will result " +
                        "in `undefined` being returned. If you need to access the same " +
                        "value within the child component, you should pass it as a different " +
                        "prop. (https://fb.me/react-special-props)",
                      displayName
                    );
                  }
                }
              };

              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true,
              });
            }

            function warnIfStringRefCannotBeAutoConverted(config) {
              {
                if (
                  typeof config.ref === "string" &&
                  ReactCurrentOwner.current &&
                  config.__self &&
                  ReactCurrentOwner.current.stateNode !== config.__self
                ) {
                  var componentName = getComponentName(
                    ReactCurrentOwner.current.type
                  );

                  if (!didWarnAboutStringRefs[componentName]) {
                    error(
                      'Component "%s" contains the string ref "%s". ' +
                        "Support for string refs will be removed in a future major release. " +
                        "This case cannot be automatically converted to an arrow function. " +
                        "We ask you to manually fix this case by using useRef() or createRef() instead. " +
                        "Learn more about using refs safely here: " +
                        "https://fb.me/react-strict-mode-string-ref",
                      getComponentName(ReactCurrentOwner.current.type),
                      config.ref
                    );

                    didWarnAboutStringRefs[componentName] = true;
                  }
                }
              }
            }
            /**
             * Factory method to create a new React element. This no longer adheres to
             * the class pattern, so do not use new to call it. Also, instanceof check
             * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
             * if something is a React Element.
             *
             * @param {*} type
             * @param {*} props
             * @param {*} key
             * @param {string|object} ref
             * @param {*} owner
             * @param {*} self A *temporary* helper to detect places where `this` is
             * different from the `owner` when React.createElement is called, so that we
             * can warn. We want to get rid of owner and replace string `ref`s with arrow
             * functions, and as long as `this` and owner are the same, there will be no
             * change in behavior.
             * @param {*} source An annotation object (added by a transpiler or otherwise)
             * indicating filename, line number, and/or other information.
             * @internal
             */

            var ReactElement = function (
              type,
              key,
              ref,
              self,
              source,
              owner,
              props
            ) {
              var element = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: REACT_ELEMENT_TYPE,
                // Built-in properties that belong on the element
                type: type,
                key: key,
                ref: ref,
                props: props,
                // Record the component responsible for creating this element.
                _owner: owner,
              };

              {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.

                Object.defineProperty(element._store, "validated", {
                  configurable: false,
                  enumerable: false,
                  writable: true,
                  value: false,
                }); // self and source are DEV only properties.

                Object.defineProperty(element, "_self", {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: self,
                }); // Two elements created in two different places should be considered
                // equal for testing purposes and therefore we hide it from enumeration.

                Object.defineProperty(element, "_source", {
                  configurable: false,
                  enumerable: false,
                  writable: false,
                  value: source,
                });

                if (Object.freeze) {
                  Object.freeze(element.props);
                  Object.freeze(element);
                }
              }

              return element;
            };
            /**
             * Create and return a new ReactElement of the given type.
             * See https://reactjs.org/docs/react-api.html#createelement
             */

            function createElement(type, config, children) {
              var propName; // Reserved names are extracted

              var props = {};
              var key = null;
              var ref = null;
              var self = null;
              var source = null;

              if (config != null) {
                if (hasValidRef(config)) {
                  ref = config.ref;

                  {
                    warnIfStringRefCannotBeAutoConverted(config);
                  }
                }

                if (hasValidKey(config)) {
                  key = "" + config.key;
                }

                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

                for (propName in config) {
                  if (
                    hasOwnProperty.call(config, propName) &&
                    !RESERVED_PROPS.hasOwnProperty(propName)
                  ) {
                    props[propName] = config[propName];
                  }
                }
              } // Children can be more than one argument, and those are transferred onto
              // the newly allocated props object.

              var childrenLength = arguments.length - 2;

              if (childrenLength === 1) {
                props.children = children;
              } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 2];
                }

                {
                  if (Object.freeze) {
                    Object.freeze(childArray);
                  }
                }

                props.children = childArray;
              } // Resolve default props

              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;

                for (propName in defaultProps) {
                  if (props[propName] === undefined) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }

              {
                if (key || ref) {
                  var displayName =
                    typeof type === "function"
                      ? type.displayName || type.name || "Unknown"
                      : type;

                  if (key) {
                    defineKeyPropWarningGetter(props, displayName);
                  }

                  if (ref) {
                    defineRefPropWarningGetter(props, displayName);
                  }
                }
              }

              return ReactElement(
                type,
                key,
                ref,
                self,
                source,
                ReactCurrentOwner.current,
                props
              );
            }
            function cloneAndReplaceKey(oldElement, newKey) {
              var newElement = ReactElement(
                oldElement.type,
                newKey,
                oldElement.ref,
                oldElement._self,
                oldElement._source,
                oldElement._owner,
                oldElement.props
              );
              return newElement;
            }
            /**
             * Clone and return a new ReactElement using element as the starting point.
             * See https://reactjs.org/docs/react-api.html#cloneelement
             */

            function cloneElement(element, config, children) {
              if (!!(element === null || element === undefined)) {
                {
                  throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                      element +
                      "."
                  );
                }
              }

              var propName; // Original props are copied

              var props = _assign({}, element.props); // Reserved names are extracted

              var key = element.key;
              var ref = element.ref; // Self is preserved since the owner is preserved.

              var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
              // transpiler, and the original source is probably a better indicator of the
              // true owner.

              var source = element._source; // Owner will be preserved, unless ref is overridden

              var owner = element._owner;

              if (config != null) {
                if (hasValidRef(config)) {
                  // Silently steal the ref from the parent.
                  ref = config.ref;
                  owner = ReactCurrentOwner.current;
                }

                if (hasValidKey(config)) {
                  key = "" + config.key;
                } // Remaining properties override existing props

                var defaultProps;

                if (element.type && element.type.defaultProps) {
                  defaultProps = element.type.defaultProps;
                }

                for (propName in config) {
                  if (
                    hasOwnProperty.call(config, propName) &&
                    !RESERVED_PROPS.hasOwnProperty(propName)
                  ) {
                    if (
                      config[propName] === undefined &&
                      defaultProps !== undefined
                    ) {
                      // Resolve default props
                      props[propName] = defaultProps[propName];
                    } else {
                      props[propName] = config[propName];
                    }
                  }
                }
              } // Children can be more than one argument, and those are transferred onto
              // the newly allocated props object.

              var childrenLength = arguments.length - 2;

              if (childrenLength === 1) {
                props.children = children;
              } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);

                for (var i = 0; i < childrenLength; i++) {
                  childArray[i] = arguments[i + 2];
                }

                props.children = childArray;
              }

              return ReactElement(
                element.type,
                key,
                ref,
                self,
                source,
                owner,
                props
              );
            }
            /**
             * Verifies the object is a ReactElement.
             * See https://reactjs.org/docs/react-api.html#isvalidelement
             * @param {?object} object
             * @return {boolean} True if `object` is a ReactElement.
             * @final
             */

            function isValidElement(object) {
              return (
                typeof object === "object" &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            }

            var SEPARATOR = ".";
            var SUBSEPARATOR = ":";
            /**
             * Escape and wrap key so it is safe to use as a reactid
             *
             * @param {string} key to be escaped.
             * @return {string} the escaped key.
             */

            function escape(key) {
              var escapeRegex = /[=:]/g;
              var escaperLookup = {
                "=": "=0",
                ":": "=2",
              };
              var escapedString = ("" + key).replace(escapeRegex, function (
                match
              ) {
                return escaperLookup[match];
              });
              return "$" + escapedString;
            }
            /**
             * TODO: Test that a single child and an array with one item have the same key
             * pattern.
             */

            var didWarnAboutMaps = false;
            var userProvidedKeyEscapeRegex = /\/+/g;

            function escapeUserProvidedKey(text) {
              return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
            }

            var POOL_SIZE = 10;
            var traverseContextPool = [];

            function getPooledTraverseContext(
              mapResult,
              keyPrefix,
              mapFunction,
              mapContext
            ) {
              if (traverseContextPool.length) {
                var traverseContext = traverseContextPool.pop();
                traverseContext.result = mapResult;
                traverseContext.keyPrefix = keyPrefix;
                traverseContext.func = mapFunction;
                traverseContext.context = mapContext;
                traverseContext.count = 0;
                return traverseContext;
              } else {
                return {
                  result: mapResult,
                  keyPrefix: keyPrefix,
                  func: mapFunction,
                  context: mapContext,
                  count: 0,
                };
              }
            }

            function releaseTraverseContext(traverseContext) {
              traverseContext.result = null;
              traverseContext.keyPrefix = null;
              traverseContext.func = null;
              traverseContext.context = null;
              traverseContext.count = 0;

              if (traverseContextPool.length < POOL_SIZE) {
                traverseContextPool.push(traverseContext);
              }
            }
            /**
             * @param {?*} children Children tree container.
             * @param {!string} nameSoFar Name of the key path so far.
             * @param {!function} callback Callback to invoke with each child found.
             * @param {?*} traverseContext Used to pass information throughout the traversal
             * process.
             * @return {!number} The number of children in this subtree.
             */

            function traverseAllChildrenImpl(
              children,
              nameSoFar,
              callback,
              traverseContext
            ) {
              var type = typeof children;

              if (type === "undefined" || type === "boolean") {
                // All of the above are perceived as null.
                children = null;
              }

              var invokeCallback = false;

              if (children === null) {
                invokeCallback = true;
              } else {
                switch (type) {
                  case "string":
                  case "number":
                    invokeCallback = true;
                    break;

                  case "object":
                    switch (children.$$typeof) {
                      case REACT_ELEMENT_TYPE:
                      case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                    }
                }
              }

              if (invokeCallback) {
                callback(
                  traverseContext,
                  children, // If it's the only child, treat the name as if it was wrapped in an array
                  // so that it's consistent if the number of children grows.
                  nameSoFar === ""
                    ? SEPARATOR + getComponentKey(children, 0)
                    : nameSoFar
                );
                return 1;
              }

              var child;
              var nextName;
              var subtreeCount = 0; // Count of children found in the current subtree.

              var nextNamePrefix =
                nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;

              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  child = children[i];
                  nextName = nextNamePrefix + getComponentKey(child, i);
                  subtreeCount += traverseAllChildrenImpl(
                    child,
                    nextName,
                    callback,
                    traverseContext
                  );
                }
              } else {
                var iteratorFn = getIteratorFn(children);

                if (typeof iteratorFn === "function") {
                  {
                    // Warn about using Maps as children
                    if (iteratorFn === children.entries) {
                      if (!didWarnAboutMaps) {
                        warn(
                          "Using Maps as children is deprecated and will be removed in " +
                            "a future major release. Consider converting children to " +
                            "an array of keyed ReactElements instead."
                        );
                      }

                      didWarnAboutMaps = true;
                    }
                  }

                  var iterator = iteratorFn.call(children);
                  var step;
                  var ii = 0;

                  while (!(step = iterator.next()).done) {
                    child = step.value;
                    nextName = nextNamePrefix + getComponentKey(child, ii++);
                    subtreeCount += traverseAllChildrenImpl(
                      child,
                      nextName,
                      callback,
                      traverseContext
                    );
                  }
                } else if (type === "object") {
                  var addendum = "";

                  {
                    addendum =
                      " If you meant to render a collection of children, use an array " +
                      "instead." +
                      ReactDebugCurrentFrame.getStackAddendum();
                  }

                  var childrenString = "" + children;

                  {
                    {
                      throw Error(
                        "Objects are not valid as a React child (found: " +
                          (childrenString === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(children).join(", ") +
                              "}"
                            : childrenString) +
                          ")." +
                          addendum
                      );
                    }
                  }
                }
              }

              return subtreeCount;
            }
            /**
             * Traverses children that are typically specified as `props.children`, but
             * might also be specified through attributes:
             *
             * - `traverseAllChildren(this.props.children, ...)`
             * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
             *
             * The `traverseContext` is an optional argument that is passed through the
             * entire traversal. It can be used to store accumulations or anything else that
             * the callback might find relevant.
             *
             * @param {?*} children Children tree object.
             * @param {!function} callback To invoke upon traversing each child.
             * @param {?*} traverseContext Context for traversal.
             * @return {!number} The number of children in this subtree.
             */

            function traverseAllChildren(children, callback, traverseContext) {
              if (children == null) {
                return 0;
              }

              return traverseAllChildrenImpl(
                children,
                "",
                callback,
                traverseContext
              );
            }
            /**
             * Generate a key string that identifies a component within a set.
             *
             * @param {*} component A component that could contain a manual key.
             * @param {number} index Index that is used if a manual key is not provided.
             * @return {string}
             */

            function getComponentKey(component, index) {
              // Do some typechecking here since we call this blindly. We want to ensure
              // that we don't block potential future ES APIs.
              if (
                typeof component === "object" &&
                component !== null &&
                component.key != null
              ) {
                // Explicit key
                return escape(component.key);
              } // Implicit key determined by the index in the set

              return index.toString(36);
            }

            function forEachSingleChild(bookKeeping, child, name) {
              var func = bookKeeping.func,
                context = bookKeeping.context;
              func.call(context, child, bookKeeping.count++);
            }
            /**
             * Iterates through children that are typically specified as `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
             *
             * The provided forEachFunc(child, index) will be called for each
             * leaf child.
             *
             * @param {?*} children Children tree container.
             * @param {function(*, int)} forEachFunc
             * @param {*} forEachContext Context for forEachContext.
             */

            function forEachChildren(children, forEachFunc, forEachContext) {
              if (children == null) {
                return children;
              }

              var traverseContext = getPooledTraverseContext(
                null,
                null,
                forEachFunc,
                forEachContext
              );
              traverseAllChildren(
                children,
                forEachSingleChild,
                traverseContext
              );
              releaseTraverseContext(traverseContext);
            }

            function mapSingleChildIntoContext(bookKeeping, child, childKey) {
              var result = bookKeeping.result,
                keyPrefix = bookKeeping.keyPrefix,
                func = bookKeeping.func,
                context = bookKeeping.context;
              var mappedChild = func.call(context, child, bookKeeping.count++);

              if (Array.isArray(mappedChild)) {
                mapIntoWithKeyPrefixInternal(
                  mappedChild,
                  result,
                  childKey,
                  function (c) {
                    return c;
                  }
                );
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  mappedChild = cloneAndReplaceKey(
                    mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    keyPrefix +
                      (mappedChild.key &&
                      (!child || child.key !== mappedChild.key)
                        ? escapeUserProvidedKey(mappedChild.key) + "/"
                        : "") +
                      childKey
                  );
                }

                result.push(mappedChild);
              }
            }

            function mapIntoWithKeyPrefixInternal(
              children,
              array,
              prefix,
              func,
              context
            ) {
              var escapedPrefix = "";

              if (prefix != null) {
                escapedPrefix = escapeUserProvidedKey(prefix) + "/";
              }

              var traverseContext = getPooledTraverseContext(
                array,
                escapedPrefix,
                func,
                context
              );
              traverseAllChildren(
                children,
                mapSingleChildIntoContext,
                traverseContext
              );
              releaseTraverseContext(traverseContext);
            }
            /**
             * Maps children that are typically specified as `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenmap
             *
             * The provided mapFunction(child, key, index) will be called for each
             * leaf child.
             *
             * @param {?*} children Children tree container.
             * @param {function(*, int)} func The map function.
             * @param {*} context Context for mapFunction.
             * @return {object} Object containing the ordered map of results.
             */

            function mapChildren(children, func, context) {
              if (children == null) {
                return children;
              }

              var result = [];
              mapIntoWithKeyPrefixInternal(
                children,
                result,
                null,
                func,
                context
              );
              return result;
            }
            /**
             * Count the number of children that are typically specified as
             * `props.children`.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrencount
             *
             * @param {?*} children Children tree container.
             * @return {number} The number of children.
             */

            function countChildren(children) {
              return traverseAllChildren(
                children,
                function () {
                  return null;
                },
                null
              );
            }
            /**
             * Flatten a children object (typically specified as `props.children`) and
             * return an array with appropriately re-keyed children.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
             */

            function toArray(children) {
              var result = [];
              mapIntoWithKeyPrefixInternal(children, result, null, function (
                child
              ) {
                return child;
              });
              return result;
            }
            /**
             * Returns the first child in a collection of children and verifies that there
             * is only one child in the collection.
             *
             * See https://reactjs.org/docs/react-api.html#reactchildrenonly
             *
             * The current implementation of this function assumes that a single child gets
             * passed without a wrapper, but the purpose of this helper function is to
             * abstract away the particular structure of children.
             *
             * @param {?object} children Child collection structure.
             * @return {ReactElement} The first and only `ReactElement` contained in the
             * structure.
             */

            function onlyChild(children) {
              if (!isValidElement(children)) {
                {
                  throw Error(
                    "React.Children.only expected to receive a single React element child."
                  );
                }
              }

              return children;
            }

            function createContext(defaultValue, calculateChangedBits) {
              if (calculateChangedBits === undefined) {
                calculateChangedBits = null;
              } else {
                {
                  if (
                    calculateChangedBits !== null &&
                    typeof calculateChangedBits !== "function"
                  ) {
                    error(
                      "createContext: Expected the optional second argument to be a " +
                        "function. Instead received: %s",
                      calculateChangedBits
                    );
                  }
                }
              }

              var context = {
                $$typeof: REACT_CONTEXT_TYPE,
                _calculateChangedBits: calculateChangedBits,
                // As a workaround to support multiple concurrent renderers, we categorize
                // some renderers as primary and others as secondary. We only expect
                // there to be two concurrent renderers at most: React Native (primary) and
                // Fabric (secondary); React DOM (primary) and React ART (secondary).
                // Secondary renderers store their context values on separate fields.
                _currentValue: defaultValue,
                _currentValue2: defaultValue,
                // Used to track how many concurrent renderers this context currently
                // supports within in a single renderer. Such as parallel server rendering.
                _threadCount: 0,
                // These are circular
                Provider: null,
                Consumer: null,
              };
              context.Provider = {
                $$typeof: REACT_PROVIDER_TYPE,
                _context: context,
              };
              var hasWarnedAboutUsingNestedContextConsumers = false;
              var hasWarnedAboutUsingConsumerProvider = false;

              {
                // A separate object, but proxies back to the original context object for
                // backwards compatibility. It has a different $$typeof, so we can properly
                // warn for the incorrect usage of Context as a Consumer.
                var Consumer = {
                  $$typeof: REACT_CONTEXT_TYPE,
                  _context: context,
                  _calculateChangedBits: context._calculateChangedBits,
                }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

                Object.defineProperties(Consumer, {
                  Provider: {
                    get: function () {
                      if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;

                        error(
                          "Rendering <Context.Consumer.Provider> is not supported and will be removed in " +
                            "a future major release. Did you mean to render <Context.Provider> instead?"
                        );
                      }

                      return context.Provider;
                    },
                    set: function (_Provider) {
                      context.Provider = _Provider;
                    },
                  },
                  _currentValue: {
                    get: function () {
                      return context._currentValue;
                    },
                    set: function (_currentValue) {
                      context._currentValue = _currentValue;
                    },
                  },
                  _currentValue2: {
                    get: function () {
                      return context._currentValue2;
                    },
                    set: function (_currentValue2) {
                      context._currentValue2 = _currentValue2;
                    },
                  },
                  _threadCount: {
                    get: function () {
                      return context._threadCount;
                    },
                    set: function (_threadCount) {
                      context._threadCount = _threadCount;
                    },
                  },
                  Consumer: {
                    get: function () {
                      if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;

                        error(
                          "Rendering <Context.Consumer.Consumer> is not supported and will be removed in " +
                            "a future major release. Did you mean to render <Context.Consumer> instead?"
                        );
                      }

                      return context.Consumer;
                    },
                  },
                }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

                context.Consumer = Consumer;
              }

              {
                context._currentRenderer = null;
                context._currentRenderer2 = null;
              }

              return context;
            }

            function lazy(ctor) {
              var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _ctor: ctor,
                // React uses these fields to store the result.
                _status: -1,
                _result: null,
              };

              {
                // In production, this would just set it on the object.
                var defaultProps;
                var propTypes;
                Object.defineProperties(lazyType, {
                  defaultProps: {
                    configurable: true,
                    get: function () {
                      return defaultProps;
                    },
                    set: function (newDefaultProps) {
                      error(
                        "React.lazy(...): It is not supported to assign `defaultProps` to " +
                          "a lazy component import. Either specify them where the component " +
                          "is defined, or create a wrapping component around it."
                      );

                      defaultProps = newDefaultProps; // Match production behavior more closely:

                      Object.defineProperty(lazyType, "defaultProps", {
                        enumerable: true,
                      });
                    },
                  },
                  propTypes: {
                    configurable: true,
                    get: function () {
                      return propTypes;
                    },
                    set: function (newPropTypes) {
                      error(
                        "React.lazy(...): It is not supported to assign `propTypes` to " +
                          "a lazy component import. Either specify them where the component " +
                          "is defined, or create a wrapping component around it."
                      );

                      propTypes = newPropTypes; // Match production behavior more closely:

                      Object.defineProperty(lazyType, "propTypes", {
                        enumerable: true,
                      });
                    },
                  },
                });
              }

              return lazyType;
            }

            function forwardRef(render) {
              {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                  error(
                    "forwardRef requires a render function but received a `memo` " +
                      "component. Instead of forwardRef(memo(...)), use " +
                      "memo(forwardRef(...))."
                  );
                } else if (typeof render !== "function") {
                  error(
                    "forwardRef requires a render function but was given %s.",
                    render === null ? "null" : typeof render
                  );
                } else {
                  if (render.length !== 0 && render.length !== 2) {
                    error(
                      "forwardRef render functions accept exactly two parameters: props and ref. %s",
                      render.length === 1
                        ? "Did you forget to use the ref parameter?"
                        : "Any additional parameter will be undefined."
                    );
                  }
                }

                if (render != null) {
                  if (render.defaultProps != null || render.propTypes != null) {
                    error(
                      "forwardRef render functions do not support propTypes or defaultProps. " +
                        "Did you accidentally pass a React component?"
                    );
                  }
                }
              }

              return {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render,
              };
            }

            function isValidElementType(type) {
              return (
                typeof type === "string" ||
                typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                type === REACT_FRAGMENT_TYPE ||
                type === REACT_CONCURRENT_MODE_TYPE ||
                type === REACT_PROFILER_TYPE ||
                type === REACT_STRICT_MODE_TYPE ||
                type === REACT_SUSPENSE_TYPE ||
                type === REACT_SUSPENSE_LIST_TYPE ||
                (typeof type === "object" &&
                  type !== null &&
                  (type.$$typeof === REACT_LAZY_TYPE ||
                    type.$$typeof === REACT_MEMO_TYPE ||
                    type.$$typeof === REACT_PROVIDER_TYPE ||
                    type.$$typeof === REACT_CONTEXT_TYPE ||
                    type.$$typeof === REACT_FORWARD_REF_TYPE ||
                    type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                    type.$$typeof === REACT_RESPONDER_TYPE ||
                    type.$$typeof === REACT_SCOPE_TYPE ||
                    type.$$typeof === REACT_BLOCK_TYPE))
              );
            }

            function memo(type, compare) {
              {
                if (!isValidElementType(type)) {
                  error(
                    "memo: The first argument must be a component. Instead " +
                      "received: %s",
                    type === null ? "null" : typeof type
                  );
                }
              }

              return {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare,
              };
            }

            function resolveDispatcher() {
              var dispatcher = ReactCurrentDispatcher.current;

              if (!(dispatcher !== null)) {
                {
                  throw Error(
                    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."
                  );
                }
              }

              return dispatcher;
            }

            function useContext(Context, unstable_observedBits) {
              var dispatcher = resolveDispatcher();

              {
                if (unstable_observedBits !== undefined) {
                  error(
                    "useContext() second argument is reserved for future " +
                      "use in React. Passing it is not supported. " +
                      "You passed: %s.%s",
                    unstable_observedBits,
                    typeof unstable_observedBits === "number" &&
                      Array.isArray(arguments[2])
                      ? "\n\nDid you call array.map(useContext)? " +
                          "Calling Hooks inside a loop is not supported. " +
                          "Learn more at https://fb.me/rules-of-hooks"
                      : ""
                  );
                } // TODO: add a more generic warning for invalid values.

                if (Context._context !== undefined) {
                  var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
                  // and nobody should be using this in existing code.

                  if (realContext.Consumer === Context) {
                    error(
                      "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " +
                        "removed in a future major release. Did you mean to call useContext(Context) instead?"
                    );
                  } else if (realContext.Provider === Context) {
                    error(
                      "Calling useContext(Context.Provider) is not supported. " +
                        "Did you mean to call useContext(Context) instead?"
                    );
                  }
                }
              }

              return dispatcher.useContext(Context, unstable_observedBits);
            }
            function useState(initialState) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useState(initialState);
            }
            function useReducer(reducer, initialArg, init) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useReducer(reducer, initialArg, init);
            }
            function useRef(initialValue) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useRef(initialValue);
            }
            function useEffect(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useEffect(create, deps);
            }
            function useLayoutEffect(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useLayoutEffect(create, deps);
            }
            function useCallback(callback, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useCallback(callback, deps);
            }
            function useMemo(create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useMemo(create, deps);
            }
            function useImperativeHandle(ref, create, deps) {
              var dispatcher = resolveDispatcher();
              return dispatcher.useImperativeHandle(ref, create, deps);
            }
            function useDebugValue(value, formatterFn) {
              {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
              }
            }

            var propTypesMisspellWarningShown;

            {
              propTypesMisspellWarningShown = false;
            }

            function getDeclarationErrorAddendum() {
              if (ReactCurrentOwner.current) {
                var name = getComponentName(ReactCurrentOwner.current.type);

                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }

              return "";
            }

            function getSourceInfoErrorAddendum(source) {
              if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return (
                  "\n\nCheck your code at " + fileName + ":" + lineNumber + "."
                );
              }

              return "";
            }

            function getSourceInfoErrorAddendumForProps(elementProps) {
              if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
              }

              return "";
            }
            /**
             * Warn if there's no key explicitly set on dynamic arrays of children or
             * object keys are not valid. This allows us to keep track of children between
             * updates.
             */

            var ownerHasKeyUseWarning = {};

            function getCurrentComponentErrorInfo(parentType) {
              var info = getDeclarationErrorAddendum();

              if (!info) {
                var parentName =
                  typeof parentType === "string"
                    ? parentType
                    : parentType.displayName || parentType.name;

                if (parentName) {
                  info =
                    "\n\nCheck the top-level render call using <" +
                    parentName +
                    ">.";
                }
              }

              return info;
            }
            /**
             * Warn if the element doesn't have an explicit key assigned to it.
             * This element is in an array. The array could grow and shrink or be
             * reordered. All children that haven't already been validated are required to
             * have a "key" property assigned to it. Error statuses are cached so a warning
             * will only be shown once.
             *
             * @internal
             * @param {ReactElement} element Element that requires a key.
             * @param {*} parentType element's parent's type.
             */

            function validateExplicitKey(element, parentType) {
              if (
                !element._store ||
                element._store.validated ||
                element.key != null
              ) {
                return;
              }

              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(
                parentType
              );

              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }

              ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
              // property, it may be the creator of the child that's responsible for
              // assigning it a key.

              var childOwner = "";

              if (
                element &&
                element._owner &&
                element._owner !== ReactCurrentOwner.current
              ) {
                // Give the component that originally created this child.
                childOwner =
                  " It was passed a child from " +
                  getComponentName(element._owner.type) +
                  ".";
              }

              setCurrentlyValidatingElement(element);

              {
                error(
                  'Each child in a list should have a unique "key" prop.' +
                    "%s%s See https://fb.me/react-warning-keys for more information.",
                  currentComponentErrorInfo,
                  childOwner
                );
              }

              setCurrentlyValidatingElement(null);
            }
            /**
             * Ensure that every element either is passed in a static location, in an
             * array with an explicit keys property defined, or in an object literal
             * with valid key property.
             *
             * @internal
             * @param {ReactNode} node Statically passed child of any type.
             * @param {*} parentType node's parent's type.
             */

            function validateChildKeys(node, parentType) {
              if (typeof node !== "object") {
                return;
              }

              if (Array.isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];

                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                // This element was passed in a valid location.
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);

                if (typeof iteratorFn === "function") {
                  // Entry iterators used to provide implicit keys,
                  // but now we print a separate warning for them later.
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;

                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
            /**
             * Given an element, validate that its props follow the propTypes definition,
             * provided by the type.
             *
             * @param {ReactElement} element
             */

            function validatePropTypes(element) {
              {
                var type = element.type;

                if (
                  type === null ||
                  type === undefined ||
                  typeof type === "string"
                ) {
                  return;
                }

                var name = getComponentName(type);
                var propTypes;

                if (typeof type === "function") {
                  propTypes = type.propTypes;
                } else if (
                  typeof type === "object" &&
                  (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                    // Inner props are checked in the reconciler.
                    type.$$typeof === REACT_MEMO_TYPE)
                ) {
                  propTypes = type.propTypes;
                } else {
                  return;
                }

                if (propTypes) {
                  setCurrentlyValidatingElement(element);
                  checkPropTypes(
                    propTypes,
                    element.props,
                    "prop",
                    name,
                    ReactDebugCurrentFrame.getStackAddendum
                  );
                  setCurrentlyValidatingElement(null);
                } else if (
                  type.PropTypes !== undefined &&
                  !propTypesMisspellWarningShown
                ) {
                  propTypesMisspellWarningShown = true;

                  error(
                    "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                    name || "Unknown"
                  );
                }

                if (
                  typeof type.getDefaultProps === "function" &&
                  !type.getDefaultProps.isReactClassApproved
                ) {
                  error(
                    "getDefaultProps is only used on classic React.createClass " +
                      "definitions. Use a static property named `defaultProps` instead."
                  );
                }
              }
            }
            /**
             * Given a fragment, validate that it can only be provided with fragment props
             * @param {ReactElement} fragment
             */

            function validateFragmentProps(fragment) {
              {
                setCurrentlyValidatingElement(fragment);
                var keys = Object.keys(fragment.props);

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];

                  if (key !== "children" && key !== "key") {
                    error(
                      "Invalid prop `%s` supplied to `React.Fragment`. " +
                        "React.Fragment can only have `key` and `children` props.",
                      key
                    );

                    break;
                  }
                }

                if (fragment.ref !== null) {
                  error(
                    "Invalid attribute `ref` supplied to `React.Fragment`."
                  );
                }

                setCurrentlyValidatingElement(null);
              }
            }
            function createElementWithValidation(type, props, children) {
              var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
              // succeed and there will likely be errors in render.

              if (!validType) {
                var info = "";

                if (
                  type === undefined ||
                  (typeof type === "object" &&
                    type !== null &&
                    Object.keys(type).length === 0)
                ) {
                  info +=
                    " You likely forgot to export your component from the file " +
                    "it's defined in, or you might have mixed up default and named imports.";
                }

                var sourceInfo = getSourceInfoErrorAddendumForProps(props);

                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }

                var typeString;

                if (type === null) {
                  typeString = "null";
                } else if (Array.isArray(type)) {
                  typeString = "array";
                } else if (
                  type !== undefined &&
                  type.$$typeof === REACT_ELEMENT_TYPE
                ) {
                  typeString =
                    "<" + (getComponentName(type.type) || "Unknown") + " />";
                  info =
                    " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }

                {
                  error(
                    "React.createElement: type is invalid -- expected a string (for " +
                      "built-in components) or a class/function (for composite " +
                      "components) but got: %s.%s",
                    typeString,
                    info
                  );
                }
              }

              var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
              // TODO: Drop this when these are no longer allowed as the type argument.

              if (element == null) {
                return element;
              } // Skip key warning if the type isn't valid since our key validation logic
              // doesn't expect a non-string/function type and can throw confusing errors.
              // We don't want exception behavior to differ between dev and prod.
              // (Rendering will throw with a helpful message and as soon as the type is
              // fixed, the key warnings will appear.)

              if (validType) {
                for (var i = 2; i < arguments.length; i++) {
                  validateChildKeys(arguments[i], type);
                }
              }

              if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }

              return element;
            }
            var didWarnAboutDeprecatedCreateFactory = false;
            function createFactoryWithValidation(type) {
              var validatedFactory = createElementWithValidation.bind(
                null,
                type
              );
              validatedFactory.type = type;

              {
                if (!didWarnAboutDeprecatedCreateFactory) {
                  didWarnAboutDeprecatedCreateFactory = true;

                  warn(
                    "React.createFactory() is deprecated and will be removed in " +
                      "a future major release. Consider using JSX " +
                      "or use React.createElement() directly instead."
                  );
                } // Legacy hook: remove it

                Object.defineProperty(validatedFactory, "type", {
                  enumerable: false,
                  get: function () {
                    warn(
                      "Factory.type is deprecated. Access the class directly " +
                        "before passing it to createFactory."
                    );

                    Object.defineProperty(this, "type", {
                      value: type,
                    });
                    return type;
                  },
                });
              }

              return validatedFactory;
            }
            function cloneElementWithValidation(element, props, children) {
              var newElement = cloneElement.apply(this, arguments);

              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], newElement.type);
              }

              validatePropTypes(newElement);
              return newElement;
            }

            {
              try {
                var frozenObject = Object.freeze({});
                var testMap = new Map([[frozenObject, null]]);
                var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
                // https://github.com/rollup/rollup/issues/1771
                // TODO: we can remove these if Rollup fixes the bug.

                testMap.set(0, 0);
                testSet.add(0);
              } catch (e) {}
            }

            var createElement$1 = createElementWithValidation;
            var cloneElement$1 = cloneElementWithValidation;
            var createFactory = createFactoryWithValidation;
            var Children = {
              map: mapChildren,
              forEach: forEachChildren,
              count: countChildren,
              toArray: toArray,
              only: onlyChild,
            };

            exports.Children = Children;
            exports.Component = Component;
            exports.Fragment = REACT_FRAGMENT_TYPE;
            exports.Profiler = REACT_PROFILER_TYPE;
            exports.PureComponent = PureComponent;
            exports.StrictMode = REACT_STRICT_MODE_TYPE;
            exports.Suspense = REACT_SUSPENSE_TYPE;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
            exports.cloneElement = cloneElement$1;
            exports.createContext = createContext;
            exports.createElement = createElement$1;
            exports.createFactory = createFactory;
            exports.createRef = createRef;
            exports.forwardRef = forwardRef;
            exports.isValidElement = isValidElement;
            exports.lazy = lazy;
            exports.memo = memo;
            exports.useCallback = useCallback;
            exports.useContext = useContext;
            exports.useDebugValue = useDebugValue;
            exports.useEffect = useEffect;
            exports.useImperativeHandle = useImperativeHandle;
            exports.useLayoutEffect = useLayoutEffect;
            exports.useMemo = useMemo;
            exports.useReducer = useReducer;
            exports.useRef = useRef;
            exports.useState = useState;
            exports.version = ReactVersion;
          })();
        }

        /***/
      },

    /***/ "./node_modules/react/index.js":
      /*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";

        if (false) {
        } else {
          module.exports = __webpack_require__(
            /*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js"
          );
        }

        /***/
      },

    /***/ 0:
      /*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=next%2Fdist%2Fpages%2F_app ./node_modules/next/dist/client/router.js ***!
  \*****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! next-client-pages-loader?page=%2F_app&absolutePagePath=next%2Fdist%2Fpages%2F_app! */ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=next%2Fdist%2Fpages%2F_app!./"
        );
        module.exports = __webpack_require__(
          /*! C:\Users\Enas\Downloads\masterPortfolio-master\masterPortfolio-master\node_modules\next\dist\client\router.js */ "./node_modules/next/dist/client/router.js"
        );

        /***/
      },
  },
  [[0, "webpack"]],
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL2hhcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwiY2IiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJSb3V0ZXIiLCJldmVudHMiLCJmb3JFYWNoIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmdzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkFycmF5IiwiaXNBcnJheSIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsInR5cGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiaW5kZXhPZiIsImVtaXQiLCJldnRzIiwibWFwIiwiY3JlYXRlQ29udGV4dCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImxlbmd0aCIsImlzTG9jYWxVUkwiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwicGF0aG5hbWUiLCJfIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJrZXlzIiwiZXZlcnkiLCJwYXJhbSIsInZhbHVlIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInJlcGxhY2UiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5Iiwia2V5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwiaHJlZiIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwicmVzb2x2ZWRIcmVmIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsImFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImNhdGNoIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJzaGFsbG93Iiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3Vic3RyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicmVzb2x2ZWRBcyIsInAiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsIndhcm4iLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic2V0IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJzb21lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2giLCJwcmVmZXRjaERhdGEiLCJwcmlvcml0eSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwiZW50cmllcyIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInRhcmdldCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVsZXRlIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJ1bmRlZmluZWQiLCJlbnRyeSIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwiZXhlY09uY2UiLCJ1c2VkIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXRVUkwiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiU1AiLCJtZWFzdXJlIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwiY3JlYXRlVXJsIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhLHNDQUFzQyxzQkFBc0I7QUFDekUseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvRUFBc0I7QUFDN0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7NENDTkE7OztBQUdPLFNBQVNBLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1RDtFQUM1RCxPQUFPQSxJQUFJLENBQUNDLFFBQUxELENBQWMsR0FBZEEsS0FBc0JBLElBQUksS0FBSyxHQUEvQkEsR0FBcUNBLElBQUksQ0FBQ0UsS0FBTEYsQ0FBVyxDQUFYQSxFQUFjLENBQUMsQ0FBZkEsQ0FBckNBLEdBQXlEQSxJQUFoRTtBQUNELENBRUQ7Ozs7QUFJTyxNQUFNRywwQkFBMEIsR0FBR0MsU0FDckNKLFNBRHFDSSxHQVV0Q0wsdUJBVkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUNBOzs7QUFDQTtBQXNIQTt5Q0F6SEE7QUFtQkEsTUFBTU0sZUFBb0MsR0FBRztFQUMzQ0MsTUFBTSxFQUFFLElBRG1DO0VBQzdCO0VBQ2RDLGNBQWMsRUFBRSxFQUYyQjtFQUczQ0MsS0FBSyxDQUFDQyxFQUFELEVBQWlCO0lBQ3BCLElBQUksS0FBS0gsTUFBVCxFQUFpQixPQUFPRyxFQUFFLEVBQVQ7SUFDakIsVUFBbUM7TUFDakMsS0FBS0YsY0FBTCxDQUFvQkcsSUFBcEIsQ0FBeUJELEVBQXpCO0lBQ0Q7RUFDRjtBQVIwQyxDQUE3QyxDQVdBO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsQ0FDeEIsVUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsT0FId0IsRUFJeEIsUUFKd0IsRUFLeEIsWUFMd0IsRUFNeEIsWUFOd0IsRUFPeEIsVUFQd0IsRUFReEIsUUFSd0IsRUFTeEIsU0FUd0IsRUFVeEIsZUFWd0IsQ0FBMUI7QUFZQSxNQUFNQyxZQUFZLEdBQUcsQ0FDbkIsa0JBRG1CLEVBRW5CLHFCQUZtQixFQUduQixxQkFIbUIsRUFJbkIsa0JBSm1CLEVBS25CLGlCQUxtQixFQU1uQixvQkFObUIsQ0FBckI7QUFRQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUN2QixNQUR1QixFQUV2QixTQUZ1QixFQUd2QixRQUh1QixFQUl2QixNQUp1QixFQUt2QixVQUx1QixFQU12QixnQkFOdUIsQ0FBekIsQ0FTQTtBQUNBQyxNQUFNLENBQUNDLGNBQVBELENBQXNCVCxlQUF0QlMsRUFBdUMsUUFBdkNBLEVBQWlEO0VBQy9DRSxHQUFHLEdBQUc7SUFDSixPQUFPQyxpQkFBT0MsTUFBZDtFQUNEO0FBSDhDLENBQWpESjtBQU1BSCxpQkFBaUIsQ0FBQ1EsT0FBbEJSLENBQTJCUyxLQUFELElBQVc7RUFDbkM7RUFDQTtFQUNBO0VBQ0E7RUFDQU4sTUFBTSxDQUFDQyxjQUFQRCxDQUFzQlQsZUFBdEJTLEVBQXVDTSxLQUF2Q04sRUFBOEM7SUFDNUNFLEdBQUcsR0FBRztNQUNKLE1BQU1WLE1BQU0sR0FBR2UsU0FBUyxFQUF4QjtNQUNBLE9BQU9mLE1BQU0sQ0FBQ2MsS0FBRCxDQUFiO0lBQ0Q7RUFKMkMsQ0FBOUNOO0FBTUQsQ0FYREg7QUFhQSxnQkFBZ0IsQ0FBQ1EsT0FBakIsQ0FBMEJDLEtBQUQsSUFBVztFQUNsQztFQUNBO0VBQUVmLGVBQUQsQ0FBeUJlLEtBQXpCLElBQWtDLENBQUMsR0FBR0UsSUFBSixLQUFvQjtJQUNyRCxNQUFNaEIsTUFBTSxHQUFHZSxTQUFTLEVBQXhCO0lBQ0EsT0FBT2YsTUFBTSxDQUFDYyxLQUFELENBQU5kLENBQWMsR0FBR2dCLElBQWpCaEIsQ0FBUDtFQUNELENBSEE7QUFJRixDQU5EO0FBUUFNLFlBQVksQ0FBQ08sT0FBYlAsQ0FBc0JXLEtBQUQsSUFBVztFQUM5QmxCLGVBQWUsQ0FBQ0csS0FBaEJILENBQXNCLE1BQU07SUFDMUJZLGlCQUFPQyxNQUFQRCxDQUFjTyxFQUFkUCxDQUFpQk0sS0FBakJOLEVBQXdCLENBQUMsR0FBR0ssSUFBSixLQUFhO01BQ25DLE1BQU1HLFVBQVUsR0FBSSxLQUFJRixLQUFLLENBQUNHLE1BQU5ILENBQWEsQ0FBYkEsRUFBZ0JJLFdBQWhCSixFQUE4QixHQUFFQSxLQUFLLENBQUNLLFNBQU5MLENBQ3RELENBRHNEQSxDQUV0RCxFQUZGO01BR0EsTUFBTU0sZ0JBQWdCLEdBQUd4QixlQUF6QjtNQUNBLElBQUl3QixnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztRQUNoQyxJQUFJO1VBQ0ZJLGdCQUFnQixDQUFDSixVQUFELENBQWhCSSxDQUE2QixHQUFHUCxJQUFoQ087UUFDRCxDQUFDLFFBQU9DLEdBQVAsRUFBWTtVQUNaQyxPQUFPLENBQUNDLEtBQVJELENBQWUsd0NBQXVDTixVQUFXLEVBQWpFTTtVQUNBQSxPQUFPLENBQUNDLEtBQVJELENBQWUsR0FBRUQsR0FBRyxDQUFDRyxPQUFRLEtBQUlILEdBQUcsQ0FBQ0ksS0FBTSxFQUEzQ0g7UUFDRDtNQUNGO0lBQ0YsQ0FiRGQ7RUFjRCxDQWZEWjtBQWdCRCxDQWpCRE87QUFtQkEsU0FBU1MsU0FBVCxHQUE2QjtFQUMzQixJQUFJLENBQUNoQixlQUFlLENBQUNDLE1BQXJCLEVBQTZCO0lBQzNCLE1BQU0yQixPQUFPLEdBQ1gsZ0NBQ0EseUVBRkY7SUFHQSxNQUFNLElBQUlFLEtBQUosQ0FBVUYsT0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPNUIsZUFBZSxDQUFDQyxNQUF2QjtBQUNELENBRUQ7ZUFDZUQsZSxDQUVmOztBQUdPLFNBQVMrQixTQUFULEdBQWlDO0VBQUE7RUFDdEMsT0FBT0MsZUFBTUMsVUFBTkQsQ0FBaUJFLDRCQUFqQkYsQ0FBUDtBQUNELENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUEsR0FWZ0JELFNBQVQ7QUFXQSxNQUFNSSxZQUFZLEdBQUcsQ0FBQyxHQUFHbEIsSUFBSixLQUFpQztFQUMzRGpCLGVBQWUsQ0FBQ0MsTUFBaEJELEdBQXlCLElBQUlZLGdCQUFKLENBQVcsR0FBR0ssSUFBZCxDQUF6QmpCO0VBQ0FBLGVBQWUsQ0FBQ0UsY0FBaEJGLENBQStCYyxPQUEvQmQsQ0FBd0NJLEVBQUQsSUFBUUEsRUFBRSxFQUFqREo7RUFDQUEsZUFBZSxDQUFDRSxjQUFoQkYsR0FBaUMsRUFBakNBO0VBRUEsT0FBT0EsZUFBZSxDQUFDQyxNQUF2QjtBQUNELENBTk0sQ0FRUDs7QUFDTyxTQUFTbUMsd0JBQVQsQ0FBa0NuQyxNQUFsQyxFQUE4RDtFQUNuRSxNQUFNb0MsT0FBTyxHQUFHcEMsTUFBaEI7RUFDQSxNQUFNcUMsUUFBUSxHQUFHLEVBQWpCO0VBRUEsS0FBSyxNQUFNQyxRQUFYLElBQXVCakMsaUJBQXZCLEVBQTBDO0lBQ3hDLElBQUksT0FBTytCLE9BQU8sQ0FBQ0UsUUFBRCxDQUFkLEtBQTZCLFFBQWpDLEVBQTJDO01BQ3pDRCxRQUFRLENBQUNDLFFBQUQsQ0FBUkQsR0FBcUI3QixNQUFNLENBQUMrQixNQUFQL0IsQ0FDbkJnQyxLQUFLLENBQUNDLE9BQU5ELENBQWNKLE9BQU8sQ0FBQ0UsUUFBRCxDQUFyQkUsSUFBbUMsRUFBbkNBLEdBQXdDLEVBRHJCaEMsRUFFbkI0QixPQUFPLENBQUNFLFFBQUQsQ0FGWTlCLENBQXJCNkIsQ0FHRTtNQUNGO0lBQ0Q7SUFFREEsUUFBUSxDQUFDQyxRQUFELENBQVJELEdBQXFCRCxPQUFPLENBQUNFLFFBQUQsQ0FBNUJEO0VBQ0QsQ0FFRDtFQUNBQSxRQUFRLENBQUN6QixNQUFUeUIsR0FBa0IxQixpQkFBT0MsTUFBekJ5QjtFQUVBOUIsZ0JBQWdCLENBQUNNLE9BQWpCTixDQUEwQk8sS0FBRCxJQUFXO0lBQ2xDdUIsUUFBUSxDQUFDdkIsS0FBRCxDQUFSdUIsR0FBa0IsQ0FBQyxHQUFHckIsSUFBSixLQUFvQjtNQUNwQyxPQUFPb0IsT0FBTyxDQUFDdEIsS0FBRCxDQUFQc0IsQ0FBZSxHQUFHcEIsSUFBbEJvQixDQUFQO0lBQ0QsQ0FGREM7RUFHRCxDQUpEOUI7RUFNQSxPQUFPOEIsUUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRDtBQUVBO0FBV2UsU0FBU0ssVUFBVCxDQUliQyxpQkFKYSxFQUsrQjtFQUM1QyxTQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBdUM7SUFDckMsb0JBQU8sNkJBQUMsaUJBQUQ7TUFBbUIsTUFBTSxFQUFFO0lBQTNCLEdBQTRDQSxLQUE1QyxFQUFQO0VBQ0Q7RUFFRCxpQkFBaUIsQ0FBQ0MsZUFBbEIsR0FBb0NILGlCQUFpQixDQUFDRyxlQUN0RDtFQUFBO0VBQ0VGLGlCQUFELENBQTJCRyxtQkFBM0IsR0FBa0RKLGlCQUFELENBQTJCSSxtQkFBNUU7RUFDRCxVQUEyQztJQUN6QyxNQUFNQyxJQUFJLEdBQ1JMLGlCQUFpQixDQUFDTSxXQUFsQk4sSUFBaUNBLGlCQUFpQixDQUFDSyxJQUFuREwsSUFBMkQsU0FEN0Q7SUFFQUMsaUJBQWlCLENBQUNLLFdBQWxCTCxHQUFpQyxjQUFhSSxJQUFLLEdBQW5ESjtFQUNEO0VBRUQsT0FBT0EsaUJBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwyQ0FBMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0Esb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFpRCxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLHdPQUF3TyxVQUFVLEVBQUU7QUFDcFA7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkRBQTZEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7Ozs7dUJDclpBOzs7Ozs7MEJBQUEsQ0FZQTtBQUNBO0FBQ0E7QUFVZSxTQUFTTSxJQUFULEdBQTZCO0VBQzFDLE1BQU1DLEdBQStCLEdBQUczQyxNQUFNLENBQUM0QyxNQUFQNUMsQ0FBYyxJQUFkQSxDQUF4QztFQUVBLE9BQU87SUFDTFUsRUFBRSxDQUFDbUMsSUFBRCxFQUFlQyxPQUFmLEVBQWlDO01BQ2pDO01BQUMsQ0FBQ0gsR0FBRyxDQUFDRSxJQUFELENBQUhGLEtBQWNBLEdBQUcsQ0FBQ0UsSUFBRCxDQUFIRixHQUFZLEVBQTFCQSxDQUFELEVBQWdDL0MsSUFBaEMsQ0FBcUNrRCxPQUFyQztJQUNGLENBSEk7SUFLTEMsR0FBRyxDQUFDRixJQUFELEVBQWVDLE9BQWYsRUFBaUM7TUFDbEMsSUFBSUgsR0FBRyxDQUFDRSxJQUFELENBQVAsRUFBZTtRQUNiRixHQUFHLENBQUNFLElBQUQsQ0FBSEYsQ0FBVUssTUFBVkwsQ0FBaUJBLEdBQUcsQ0FBQ0UsSUFBRCxDQUFIRixDQUFVTSxPQUFWTixDQUFrQkcsT0FBbEJILE1BQStCLENBQWhEQSxFQUFtRCxDQUFuREE7TUFDRDtJQUNGLENBVEk7SUFXTE8sSUFBSSxDQUFDTCxJQUFELEVBQWUsR0FBR00sSUFBbEIsRUFBK0I7TUFDakM7TUFDQTtNQUFDLENBQUNSLEdBQUcsQ0FBQ0UsSUFBRCxDQUFIRixJQUFhLEVBQWQsRUFBa0J2RCxLQUFsQixHQUEwQmdFLEdBQTFCLENBQStCTixPQUFELElBQXNCO1FBQ25EQSxPQUFPLENBQUMsR0FBR0ssSUFBSixDQUFQTDtNQUNELENBRkE7SUFHRjtFQWhCSSxDQUFQO0FBa0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEOzs7Ozs7QUFHTyxNQUFNckIsYUFBYSxnQkFBR0YsZUFBTThCLGFBQU45QixDQUFnQyxJQUFoQ0EsQ0FBdEI7O0FBRVAsVUFBMkM7RUFDekNFLGFBQWEsQ0FBQ2dCLFdBQWRoQixHQUE0QixlQUE1QkE7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBS0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0NBM0JBLDRCQUNBO0FBd0NBLE1BQU02QixRQUFRLEdBQUloRSxNQUFELElBQWtELEVBQW5FO0FBRUEsU0FBU2lFLHNCQUFULEdBQWtDO0VBQ2hDLE9BQU92RCxNQUFNLENBQUMrQixNQUFQL0IsQ0FBYyxJQUFJcUIsS0FBSixDQUFVLGlCQUFWLENBQWRyQixFQUE0QztJQUNqRHdELFNBQVMsRUFBRTtFQURzQyxDQUE1Q3hELENBQVA7QUFHRDtBQUVELFNBQVN5RCxhQUFULENBQXVCdkUsSUFBdkIsRUFBcUN3RSxNQUFyQyxFQUFzRDtFQUNwRCxPQUFPQSxNQUFNLElBQUl4RSxJQUFJLENBQUN5RSxVQUFMekUsQ0FBZ0IsR0FBaEJBLENBQVZ3RSxHQUNIeEUsSUFBSSxLQUFLLEdBQVRBLEdBQ0Usd0RBQTJCd0UsTUFBM0IsQ0FERnhFLEdBRUcsR0FBRXdFLE1BQU8sR0FBRXhFLElBQUssRUFIaEJ3RSxHQUlIeEUsSUFKSjtBQUtEO0FBRU0sU0FBUzBFLFNBQVQsQ0FDTDFFLElBREssRUFFTDJFLE1BRkssRUFHTEMsYUFISyxFQUlMO0VBQ0EsSUFBSXhFLEtBQUosRUFBcUMsRUFJcEM7RUFDRCxPQUFPSixJQUFQO0FBQ0Q7QUFFTSxTQUFTNkUsU0FBVCxDQUFtQjdFLElBQW5CLEVBQWlDMkUsTUFBakMsRUFBa0Q7RUFDdkQsSUFBSXZFLEtBQUosRUFBcUMsRUFJcEM7RUFDRCxPQUFPSixJQUFQO0FBQ0Q7QUFFTSxTQUFTOEUsV0FBVCxDQUFxQjlFLElBQXJCLEVBQTRDO0VBQ2pELE9BQU9BLElBQUksS0FBS29FLFFBQVRwRSxJQUFxQkEsSUFBSSxDQUFDeUUsVUFBTHpFLENBQWdCb0UsUUFBUSxHQUFHLEdBQTNCcEUsQ0FBNUI7QUFDRDtBQUVNLFNBQVMrRSxXQUFULENBQXFCL0UsSUFBckIsRUFBMkM7RUFDaEQ7RUFDQSxPQUFPdUUsYUFBYSxDQUFDdkUsSUFBRCxFQUFPb0UsUUFBUCxDQUFwQjtBQUNEO0FBRU0sU0FBU1ksV0FBVCxDQUFxQmhGLElBQXJCLEVBQTJDO0VBQ2hELE9BQU9BLElBQUksQ0FBQ0UsS0FBTEYsQ0FBV29FLFFBQVEsQ0FBQ2EsTUFBcEJqRixLQUErQixHQUF0QztBQUNELENBRUQ7OztBQUdPLFNBQVNrRixVQUFULENBQW9CQyxHQUFwQixFQUEwQztFQUMvQyxJQUFJQSxHQUFHLENBQUNWLFVBQUpVLENBQWUsR0FBZkEsQ0FBSixFQUF5QixPQUFPLElBQVA7RUFDekIsSUFBSTtJQUNGO0lBQ0EsTUFBTUMsY0FBYyxHQUFHLCtCQUF2QjtJQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxHQUFKLENBQVFILEdBQVIsRUFBYUMsY0FBYixDQUFqQjtJQUNBLE9BQU9DLFFBQVEsQ0FBQ0UsTUFBVEYsS0FBb0JELGNBQXBCQyxJQUFzQ1AsV0FBVyxDQUFDTyxRQUFRLENBQUNHLFFBQVYsQ0FBeEQ7RUFDRCxDQUFDLFFBQU9DLENBQVAsRUFBVTtJQUNWLE9BQU8sS0FBUDtFQUNEO0FBQ0Y7QUFJTSxTQUFTQyxhQUFULENBQ0xDLEtBREssRUFFTEMsVUFGSyxFQUdMQyxLQUhLLEVBSUw7RUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtFQUVBLE1BQU1DLFlBQVksR0FBRywrQkFBY0osS0FBZCxDQUFyQjtFQUNBLE1BQU1LLGFBQWEsR0FBR0QsWUFBWSxDQUFDRSxNQUFuQztFQUNBLE1BQU1DLGNBQWM7RUFDbEI7RUFDQSxDQUFDTixVQUFVLEtBQUtELEtBQWZDLEdBQXVCLG1DQUFnQkcsWUFBaEIsRUFBOEJILFVBQTlCLENBQXZCQSxHQUFtRSxFQUFwRTtFQUNBO0VBQ0E7RUFDQUMsS0FMRjtFQU9BQyxpQkFBaUIsR0FBR0gsS0FBcEJHO0VBQ0EsTUFBTUssTUFBTSxHQUFHckYsTUFBTSxDQUFDc0YsSUFBUHRGLENBQVlrRixhQUFabEYsQ0FBZjtFQUVBLElBQ0UsQ0FBQ3FGLE1BQU0sQ0FBQ0UsS0FBUEYsQ0FBY0csS0FBRCxJQUFXO0lBQ3ZCLElBQUlDLEtBQUssR0FBR0wsY0FBYyxDQUFDSSxLQUFELENBQWRKLElBQXlCLEVBQXJDO0lBQ0EsTUFBTTtNQUFFTSxNQUFGO01BQVVDO0lBQVYsSUFBdUJULGFBQWEsQ0FBQ00sS0FBRCxDQUExQyxDQUVBO0lBQ0E7SUFDQSxJQUFJSSxRQUFRLEdBQUksSUFBR0YsTUFBTSxHQUFHLEtBQUgsR0FBVyxFQUFHLEdBQUVGLEtBQU0sR0FBL0M7SUFDQSxJQUFJRyxRQUFKLEVBQWM7TUFDWkMsUUFBUSxHQUFJLEdBQUUsQ0FBQ0gsS0FBRCxHQUFTLEdBQVQsR0FBZSxFQUFHLElBQUdHLFFBQVMsR0FBNUNBO0lBQ0Q7SUFDRCxJQUFJRixNQUFNLElBQUksQ0FBQzFELEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY3lELEtBQWR6RCxDQUFmLEVBQXFDeUQsS0FBSyxHQUFHLENBQUNBLEtBQUQsQ0FBUkE7SUFFckMsT0FDRSxDQUFDRSxRQUFRLElBQUlILEtBQUssSUFBSUosY0FBdEI7SUFDQTtJQUNDSixpQkFBaUIsR0FDaEJBLGlCQUFpQixDQUFFYSxPQUFuQmIsQ0FDRVksUUFERlosRUFFRVUsTUFBTSxHQUNERCxLQUFELENBQW9CckMsR0FBcEIsQ0FBd0IwQyw2QkFBeEIsRUFBOENDLElBQTlDLENBQW1ELEdBQW5ELENBREUsR0FFRixtQ0FBcUJOLEtBQXJCLENBSk5ULEtBS0ssR0FSUCxDQURGO0VBV0QsQ0F2QkFLLENBREgsRUF5QkU7SUFDQUwsaUJBQWlCLEdBQUcsRUFBcEJBLENBQXVCO0lBRXZCO0lBQ0E7RUFDRDtFQUNELE9BQU87SUFDTEssTUFESztJQUVMVyxNQUFNLEVBQUVoQjtFQUZILENBQVA7QUFJRDtBQUVELFNBQVNpQixrQkFBVCxDQUE0QmxCLEtBQTVCLEVBQW1ETSxNQUFuRCxFQUFxRTtFQUNuRSxNQUFNYSxhQUE2QixHQUFHLEVBQXRDO0VBRUFsRyxNQUFNLENBQUNzRixJQUFQdEYsQ0FBWStFLEtBQVovRSxFQUFtQkssT0FBbkJMLENBQTRCbUcsR0FBRCxJQUFTO0lBQ2xDLElBQUksQ0FBQ2QsTUFBTSxDQUFDZSxRQUFQZixDQUFnQmMsR0FBaEJkLENBQUwsRUFBMkI7TUFDekJhLGFBQWEsQ0FBQ0MsR0FBRCxDQUFiRCxHQUFxQm5CLEtBQUssQ0FBQ29CLEdBQUQsQ0FBMUJEO0lBQ0Q7RUFDRixDQUpEbEc7RUFLQSxPQUFPa0csYUFBUDtBQUNELENBRUQ7Ozs7QUFJTyxTQUFTRyxXQUFULENBQ0xDLFdBREssRUFFTEMsSUFGSyxFQUdMQyxTQUhLLEVBSUc7RUFDUjtFQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJakMsR0FBSixDQUFROEIsV0FBUixFQUFxQixVQUFyQixDQUFiO0VBQ0EsTUFBTUksV0FBVyxHQUNmLE9BQU9ILElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLGlDQUFxQkEsSUFBckIsQ0FEcEM7RUFFQSxJQUFJO0lBQ0YsTUFBTUksUUFBUSxHQUFHLElBQUluQyxHQUFKLENBQVFrQyxXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtJQUNBRSxRQUFRLENBQUNqQyxRQUFUaUMsR0FBb0Isd0RBQTJCQSxRQUFRLENBQUNqQyxRQUFwQyxDQUFwQmlDO0lBQ0EsSUFBSUMsY0FBYyxHQUFHLEVBQXJCO0lBRUEsSUFDRSwrQkFBZUQsUUFBUSxDQUFDakMsUUFBeEIsS0FDQWlDLFFBQVEsQ0FBQ0UsWUFEVCxJQUVBTCxTQUhGLEVBSUU7TUFDQSxNQUFNekIsS0FBSyxHQUFHLHlDQUF1QjRCLFFBQVEsQ0FBQ0UsWUFBaEMsQ0FBZDtNQUVBLE1BQU07UUFBRWIsTUFBRjtRQUFVWDtNQUFWLElBQXFCVCxhQUFhLENBQ3RDK0IsUUFBUSxDQUFDakMsUUFENkIsRUFFdENpQyxRQUFRLENBQUNqQyxRQUY2QixFQUd0Q0ssS0FIc0MsQ0FBeEM7TUFNQSxJQUFJaUIsTUFBSixFQUFZO1FBQ1ZZLGNBQWMsR0FBRyxpQ0FBcUI7VUFDcENsQyxRQUFRLEVBQUVzQixNQUQwQjtVQUVwQ2MsSUFBSSxFQUFFSCxRQUFRLENBQUNHLElBRnFCO1VBR3BDL0IsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUNsQixLQUFELEVBQVFNLE1BQVI7UUFIVyxDQUFyQixDQUFqQnVCO01BS0Q7SUFDRixDQUVEO0lBQ0EsTUFBTUcsWUFBWSxHQUNoQkosUUFBUSxDQUFDbEMsTUFBVGtDLEtBQW9CRixJQUFJLENBQUNoQyxNQUF6QmtDLEdBQ0lBLFFBQVEsQ0FBQ0osSUFBVEksQ0FBY3ZILEtBQWR1SCxDQUFvQkEsUUFBUSxDQUFDbEMsTUFBVGtDLENBQWdCeEMsTUFBcEN3QyxDQURKQSxHQUVJQSxRQUFRLENBQUNKLElBSGY7SUFLQSxPQUFRQyxTQUFTLEdBQ2IsQ0FBQ08sWUFBRCxFQUFlSCxjQUFjLElBQUlHLFlBQWpDLENBRGEsR0FFYkEsWUFGSjtFQUdELENBQUMsUUFBT3BDLENBQVAsRUFBVTtJQUNWLE9BQVE2QixTQUFTLEdBQUcsQ0FBQ0UsV0FBRCxDQUFILEdBQW1CQSxXQUFwQztFQUNEO0FBQ0Y7QUFFRCxNQUFNTSxlQUFlLEdBQUdDLE1BQU0sQ0FBQyxpQkFBRCxDQUE5QjtBQUNPLFNBQVNDLGdCQUFULENBQTBCbEcsR0FBMUIsRUFBNkM7RUFDbEQsT0FBT2hCLE1BQU0sQ0FBQ0MsY0FBUEQsQ0FBc0JnQixHQUF0QmhCLEVBQTJCZ0gsZUFBM0JoSCxFQUE0QyxFQUE1Q0EsQ0FBUDtBQUNEO0FBRUQsU0FBU21ILFlBQVQsQ0FBc0IzSCxNQUF0QixFQUEwQzZFLEdBQTFDLEVBQW9EK0MsRUFBcEQsRUFBNkQ7RUFDM0Q7RUFDQTtFQUNBLE9BQU87SUFDTC9DLEdBQUcsRUFBRUosV0FBVyxDQUFDb0MsV0FBVyxDQUFDN0csTUFBTSxDQUFDa0YsUUFBUixFQUFrQkwsR0FBbEIsQ0FBWixDQURYO0lBRUwrQyxFQUFFLEVBQUVBLEVBQUUsR0FBR25ELFdBQVcsQ0FBQ29DLFdBQVcsQ0FBQzdHLE1BQU0sQ0FBQ2tGLFFBQVIsRUFBa0IwQyxFQUFsQixDQUFaLENBQWQsR0FBbURBO0VBRnBELENBQVA7QUFJRDtBQXFERCxNQUFNQyx1QkFBdUIsR0FDM0IvSCxVQUVBLEtBSEY7QUFLQSxTQUFTZ0ksVUFBVCxDQUFvQmpELEdBQXBCLEVBQWlDa0QsUUFBakMsRUFBaUU7RUFDL0QsT0FBTyxLQUFLLENBQUNsRCxHQUFELEVBQU07SUFDaEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBbUQsV0FBVyxFQUFFO0VBWkcsQ0FBTixDQUFMLENBYUpDLElBYkksQ0FhRUMsR0FBRCxJQUFTO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBYTtNQUNYLElBQUlKLFFBQVEsR0FBRyxDQUFYQSxJQUFnQkcsR0FBRyxDQUFDRSxNQUFKRixJQUFjLEdBQWxDLEVBQXVDO1FBQ3JDLE9BQU9KLFVBQVUsQ0FBQ2pELEdBQUQsRUFBTWtELFFBQVEsR0FBRyxDQUFqQixDQUFqQjtNQUNEO01BQ0QsTUFBTSxJQUFJbEcsS0FBSixDQUFXLDZCQUFYLENBQU47SUFDRDtJQUVELE9BQU9xRyxHQUFHLENBQUNHLElBQUpILEVBQVA7RUFDRCxDQXRCTSxDQUFQO0FBdUJEO0FBRUQsU0FBU0ksYUFBVCxDQUF1QkMsUUFBdkIsRUFBeUNDLGNBQXpDLEVBQWtFO0VBQ2hFLE9BQU8sVUFBVSxDQUFDRCxRQUFELEVBQVdDLGNBQWMsR0FBRyxDQUFILEdBQU8sQ0FBaEMsQ0FBVixDQUE2Q0MsS0FBN0MsQ0FBb0RqSCxHQUFELElBQWdCO0lBQ3hFO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ2dILGNBQUwsRUFBcUI7TUFDbkJkLGdCQUFnQixDQUFDbEcsR0FBRCxDQUFoQmtHO0lBQ0Q7SUFDRCxNQUFNbEcsR0FBTjtFQUNELENBUk0sQ0FBUDtBQVNEO0FBRWMsTUFBTWIsTUFBNkI7RUFPaEQ7O0FBUGdELElBT2hELENBSUE7RUFrQkErSCxXQUFXLENBQ1R4RCxTQURTLEVBRVRLLE1BRlMsRUFHVHFDLEdBSFMsRUFJVDtJQUNFZSxZQURGO0lBRUVDLFVBRkY7SUFHRUMsR0FIRjtJQUlFQyxPQUpGO0lBS0VDLFNBTEY7SUFNRUMsa0JBTkY7SUFPRXhILEdBUEY7SUFRRXlILFlBUkY7SUFTRUMsVUFURjtJQVVFN0UsTUFWRjtJQVdFOEUsT0FYRjtJQVlFN0U7RUFaRixDQUpTLEVBK0JUO0lBQUEsS0EzREZlLEtBMkRFO0lBQUEsS0ExREZILFFBMERFO0lBQUEsS0F6REZLLEtBeURFO0lBQUEsS0F4REY2RCxNQXdERTtJQUFBLEtBdkRGdEYsUUF1REU7SUFBQSxLQWxERnVGLFVBa0RFO0lBQUEsS0FoREZDLEdBZ0RFLEdBaERrQyxFQWdEbEM7SUFBQSxLQS9DRkMsR0ErQ0U7SUFBQSxLQTlDRkMsR0E4Q0U7SUFBQSxLQTdDRlosVUE2Q0U7SUFBQSxLQTVDRmEsSUE0Q0U7SUFBQSxLQTNDRjdJLE1BMkNFO0lBQUEsS0ExQ0Y4SSxRQTBDRTtJQUFBLEtBekNGQyxLQXlDRTtJQUFBLEtBeENGVCxVQXdDRTtJQUFBLEtBdkNGVSxjQXVDRTtJQUFBLEtBdENGQyxRQXNDRTtJQUFBLEtBckNGeEYsTUFxQ0U7SUFBQSxLQXBDRjhFLE9Bb0NFO0lBQUEsS0FuQ0Y3RSxhQW1DRTtJQUFBLEtBcUdGd0YsVUFyR0UsR0FxR1lDLENBQUQsSUFBNEI7TUFDdkMsTUFBTUMsS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQWhCO01BRUEsSUFBSSxDQUFDQSxLQUFMLEVBQVk7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1VBQUU5RSxRQUFGO1VBQVlLO1FBQVosSUFBc0IsSUFBNUI7UUFDQSxLQUFLMEUsV0FBTCxDQUNFLGNBREYsRUFFRSxpQ0FBcUI7VUFBRS9FLFFBQVEsRUFBRVQsV0FBVyxDQUFDUyxRQUFELENBQXZCO1VBQW1DSztRQUFuQyxDQUFyQixDQUZGLEVBR0Usb0JBSEY7UUFLQTtNQUNEO01BRUQsSUFBSSxDQUFDeUUsS0FBSyxDQUFDRSxHQUFYLEVBQWdCO1FBQ2Q7TUFDRDtNQUVELE1BQU07UUFBRXJGLEdBQUY7UUFBTytDLEVBQVA7UUFBV3VDO01BQVgsSUFBdUJILEtBQTdCO01BRUEsTUFBTTtRQUFFOUU7TUFBRixJQUFlLHdDQUFpQkwsR0FBakIsQ0FBckIsQ0FFQTtNQUNBO01BQ0EsSUFBSSxLQUFLOEUsS0FBTCxJQUFjL0IsRUFBRSxLQUFLLEtBQUt3QixNQUExQixJQUFvQ2xFLFFBQVEsS0FBSyxLQUFLQSxRQUExRCxFQUFvRTtRQUNsRTtNQUNELENBRUQ7TUFDQTtNQUNBLElBQUksS0FBS3VFLElBQUwsSUFBYSxDQUFDLEtBQUtBLElBQUwsQ0FBVU8sS0FBVixDQUFsQixFQUFvQztRQUNsQztNQUNEO01BRUQsS0FBS0ksTUFBTCxDQUNFLGNBREYsRUFFRXZGLEdBRkYsRUFHRStDLEVBSEYsRUFJRXBILE1BQU0sQ0FBQytCLE1BQVAvQixDQUFjLEVBQWRBLEVBQWtCMkosT0FBbEIzSixFQUEyQjtRQUN6QjZKLE9BQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSRixJQUFtQixLQUFLTjtNQURSLENBQTNCckosQ0FKRjtJQVFELENBdkpDLENBQ0E7SUFDQSxLQUFLNkUsS0FBTCxHQUFhLHFEQUF3QkgsU0FBeEIsQ0FBYixDQUVBO0lBQ0EsS0FBS21FLFVBQUwsR0FBa0IsRUFBbEIsQ0FDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJbkUsU0FBUSxLQUFLLFNBQWpCLEVBQTRCO01BQzFCLEtBQUttRSxVQUFMLENBQWdCLEtBQUtoRSxLQUFyQixJQUE4QjtRQUM1QjBELFNBRDRCO1FBRTVCdUIsV0FBVyxFQUFFdEIsa0JBRmU7UUFHNUJuRyxLQUFLLEVBQUU4RixZQUhxQjtRQUk1Qm5ILEdBSjRCO1FBSzVCK0ksT0FBTyxFQUFFNUIsWUFBWSxJQUFJQSxZQUFZLENBQUM0QixPQUxWO1FBTTVCQyxPQUFPLEVBQUU3QixZQUFZLElBQUlBLFlBQVksQ0FBQzZCO01BTlYsQ0FBOUI7SUFRRDtJQUVELEtBQUtuQixVQUFMLENBQWdCLE9BQWhCLElBQTJCO01BQ3pCTixTQUFTLEVBQUVGLEdBRGM7TUFFekJ5QixXQUFXLEVBQUU7SUFGWSxDQUEzQixDQU9BO0lBQ0E7SUFDQSxLQUFLMUosTUFBTCxHQUFjRCxNQUFNLENBQUNDLE1BQXJCO0lBRUEsS0FBS2dJLFVBQUwsR0FBa0JBLFVBQWxCO0lBQ0EsS0FBSzFELFFBQUwsR0FBZ0JBLFNBQWhCO0lBQ0EsS0FBS0ssS0FBTCxHQUFhQSxNQUFiLENBQ0E7SUFDQTtJQUNBLEtBQUs2RCxNQUFMO0lBQ0U7SUFDQSwrQkFBZWxFLFNBQWYsS0FBNEJ1RixhQUFhLENBQUNDLFVBQTFDLEdBQXVEeEYsU0FBdkQsR0FBa0UwQyxHQUZwRTtJQUdBLEtBQUs5RCxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUt5RixHQUFMLEdBQVdOLFlBQVg7SUFDQSxLQUFLTyxHQUFMLEdBQVcsSUFBWDtJQUNBLEtBQUtFLFFBQUwsR0FBZ0JaLE9BQWhCLENBQ0E7SUFDQTtJQUNBLEtBQUthLEtBQUwsR0FBYSxJQUFiO0lBRUEsS0FBS1QsVUFBTCxHQUFrQkEsVUFBbEI7SUFFQSxJQUFJcEosS0FBSixFQUFxQyxFQUlwQztJQUVELFVBQW1DO01BQ2pDO01BQ0E7TUFDQSxJQUFJOEgsR0FBRSxDQUFDK0MsTUFBSC9DLENBQVUsQ0FBVkEsRUFBYSxDQUFiQSxNQUFvQixJQUF4QixFQUE4QjtRQUM1QjtRQUNBO1FBQ0EsS0FBS3FDLFdBQUwsQ0FDRSxjQURGLEVBRUUsaUNBQXFCO1VBQUUvRSxRQUFRLEVBQUVULFdBQVcsQ0FBQ1MsU0FBRCxDQUF2QjtVQUFtQ0ssS0FBSyxFQUFMQTtRQUFuQyxDQUFyQixDQUZGLEVBR0Usb0JBSEY7TUFLRDtNQUVEcUYsTUFBTSxDQUFDQyxnQkFBUEQsQ0FBd0IsVUFBeEJBLEVBQW9DLEtBQUtkLFVBQXpDYyxFQUVBO01BQ0E7TUFDQSxJQUFJOUssS0FBSixFQUEyQyxFQXlCMUM7SUFDRjtFQUNGO0VBc0REZ0wsTUFBTSxHQUFTO0lBQ2JGLE1BQU0sQ0FBQ0csUUFBUEgsQ0FBZ0JFLE1BQWhCRjtFQUNELENBRUQ7OztFQUdBSSxJQUFJLEdBQUc7SUFDTEosTUFBTSxDQUFDSyxPQUFQTCxDQUFlSSxJQUFmSjtFQUNELENBRUQ7Ozs7OztFQU1BeEssSUFBSSxDQUFDeUUsR0FBRCxFQUFXK0MsRUFBTyxHQUFHL0MsR0FBckIsRUFBMEJzRixPQUEwQixHQUFHLEVBQXZELEVBQTJEO0lBQzdEO0lBQUMsQ0FBQztNQUFFdEYsR0FBRjtNQUFPK0M7SUFBUCxJQUFjRCxZQUFZLENBQUMsSUFBRCxFQUFPOUMsR0FBUCxFQUFZK0MsRUFBWixDQUEzQjtJQUNELE9BQU8sS0FBS3dDLE1BQUwsQ0FBWSxXQUFaLEVBQXlCdkYsR0FBekIsRUFBOEIrQyxFQUE5QixFQUFrQ3VDLE9BQWxDLENBQVA7RUFDRCxDQUVEOzs7Ozs7RUFNQTlELE9BQU8sQ0FBQ3hCLEdBQUQsRUFBVytDLEVBQU8sR0FBRy9DLEdBQXJCLEVBQTBCc0YsT0FBMEIsR0FBRyxFQUF2RCxFQUEyRDtJQUNoRTtJQUFDLENBQUM7TUFBRXRGLEdBQUY7TUFBTytDO0lBQVAsSUFBY0QsWUFBWSxDQUFDLElBQUQsRUFBTzlDLEdBQVAsRUFBWStDLEVBQVosQ0FBM0I7SUFDRCxPQUFPLEtBQUt3QyxNQUFMLENBQVksY0FBWixFQUE0QnZGLEdBQTVCLEVBQWlDK0MsRUFBakMsRUFBcUN1QyxPQUFyQyxDQUFQO0VBQ0Q7RUFFRCxNQUFNQyxNQUFOLENBQ0VjLE1BREYsRUFFRXJHLEdBRkYsRUFHRStDLEVBSEYsRUFJRXVDLE9BSkYsRUFLb0I7SUFDbEIsSUFBSSxDQUFDdkYsVUFBVSxDQUFDQyxHQUFELENBQWYsRUFBc0I7TUFDcEIrRixNQUFNLENBQUNHLFFBQVBILENBQWdCN0QsSUFBaEI2RCxHQUF1Qi9GLEdBQXZCK0Y7TUFDQSxPQUFPLEtBQVA7SUFDRDtJQUVELElBQUksQ0FBRVQsT0FBRCxDQUFpQmdCLEVBQXRCLEVBQTBCO01BQ3hCLEtBQUt4QixLQUFMLEdBQWEsS0FBYjtJQUNELENBQ0Q7SUFDQSxJQUFJeUIsU0FBSixFQUFRO01BQ05DLFdBQVcsQ0FBQ0MsSUFBWkQsQ0FBaUIsYUFBakJBO0lBQ0Q7SUFFRCxJQUFJLEtBQUt6QixjQUFULEVBQXlCO01BQ3ZCLEtBQUsyQixrQkFBTCxDQUF3QixLQUFLM0IsY0FBN0I7SUFDRDtJQUVEaEMsRUFBRSxHQUFHeEQsU0FBUyxDQUFDd0QsRUFBRCxFQUFLLEtBQUt2RCxNQUFWLEVBQWtCLEtBQUtDLGFBQXZCLENBQWRzRDtJQUNBLE1BQU00RCxTQUFTLEdBQUdqSCxTQUFTLENBQ3pCQyxXQUFXLENBQUNvRCxFQUFELENBQVhwRCxHQUFrQkUsV0FBVyxDQUFDa0QsRUFBRCxDQUE3QnBELEdBQW9Db0QsRUFEWCxFQUV6QixLQUFLdkQsTUFGb0IsQ0FBM0I7SUFJQSxLQUFLdUYsY0FBTCxHQUFzQmhDLEVBQXRCLENBRUE7SUFDQTtJQUVBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBRXVDLE9BQUQsQ0FBaUJnQixFQUFsQixJQUF3QixLQUFLTSxlQUFMLENBQXFCRCxTQUFyQixDQUE1QixFQUE2RDtNQUMzRCxLQUFLcEMsTUFBTCxHQUFjb0MsU0FBZDtNQUNBN0ssTUFBTSxDQUFDQyxNQUFQRCxDQUFjK0MsSUFBZC9DLENBQW1CLGlCQUFuQkEsRUFBc0NpSCxFQUF0Q2pILEVBQ0E7TUFDQSxLQUFLc0osV0FBTCxDQUFpQmlCLE1BQWpCLEVBQXlCckcsR0FBekIsRUFBOEIrQyxFQUE5QixFQUFrQ3VDLE9BQWxDO01BQ0EsS0FBS3VCLFlBQUwsQ0FBa0JGLFNBQWxCO01BQ0EsS0FBS0csTUFBTCxDQUFZLEtBQUt0QyxVQUFMLENBQWdCLEtBQUtoRSxLQUFyQixDQUFaO01BQ0ExRSxNQUFNLENBQUNDLE1BQVBELENBQWMrQyxJQUFkL0MsQ0FBbUIsb0JBQW5CQSxFQUF5Q2lILEVBQXpDakg7TUFDQSxPQUFPLElBQVA7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBLE1BQU1pTCxLQUFLLEdBQUcsTUFBTSxLQUFLaEQsVUFBTCxDQUFnQmlELFdBQWhCLEVBQXBCO0lBQ0EsTUFBTTtNQUFFQyxVQUFVLEVBQUVDO0lBQWQsSUFBMkIsTUFBTSxLQUFLbkQsVUFBTCxDQUFnQm9ELHFCQUF2RDtJQUVBLElBQUlDLE1BQU0sR0FBRyx3Q0FBaUJwSCxHQUFqQixDQUFiO0lBRUEsSUFBSTtNQUFFSyxRQUFGO01BQVlLO0lBQVosSUFBc0IwRyxNQUExQjtJQUVBQSxNQUFNLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkQsTUFBbEIsRUFBMEJMLEtBQTFCLENBQVRLO0lBRUEsSUFBSUEsTUFBTSxDQUFDL0csUUFBUCtHLEtBQW9CL0csUUFBeEIsRUFBa0M7TUFDaENBLFFBQVEsR0FBRytHLE1BQU0sQ0FBQy9HLFFBQWxCQTtNQUNBTCxHQUFHLEdBQUcsaUNBQXFCb0gsTUFBckIsQ0FBTnBIO0lBQ0QsQ0FFRDtJQUNBO0lBQ0E7SUFDQUssUUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCUixXQUFXLENBQUNRLFFBQUQsQ0FBbkMsQ0FEZSxHQUVmQSxRQUZKQSxDQUlBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUMsS0FBS2lILFFBQUwsQ0FBY1gsU0FBZCxDQUFMLEVBQStCO01BQzdCTixNQUFNLEdBQUcsY0FBVEE7SUFDRDtJQUVELElBQUk3RixLQUFLLEdBQUcscURBQXdCSCxRQUF4QixDQUFaO0lBQ0EsTUFBTTtNQUFFbUYsT0FBTyxHQUFHO0lBQVosSUFBc0JGLE9BQTVCLENBRUE7SUFDQTtJQUNBLElBQUlpQyxVQUFVLEdBQUd4RSxFQUFqQjtJQUVBLElBQUk5SCxJQUFKLEVBQXFDO01BQ25Dc00sVUFBVSxHQUFHLDhCQUNYLHdDQUFpQnhFLEVBQWpCLEVBQXFCMUMsUUFEVixFQUVYMEcsS0FGVyxFQUdYOUgsUUFIVyxFQUlYaUksUUFKVyxFQUtYeEcsS0FMVyxFQU1WOEcsQ0FBRCxJQUFlLEtBQUtILFlBQUwsQ0FBa0I7UUFBRWhILFFBQVEsRUFBRW1IO01BQVosQ0FBbEIsRUFBbUNULEtBQW5DLEVBQTBDMUcsUUFOOUMsQ0FBYmtIO01BU0EsSUFBSUEsVUFBVSxLQUFLeEUsRUFBbkIsRUFBdUI7UUFDckIsTUFBTTBFLGFBQWEsR0FBRyxxREFDcEIsS0FBS0osWUFBTCxDQUNFMUwsTUFBTSxDQUFDK0IsTUFBUC9CLENBQWMsRUFBZEEsRUFBa0J5TCxNQUFsQnpMLEVBQTBCO1VBQUUwRSxRQUFRLEVBQUVrSDtRQUFaLENBQTFCNUwsQ0FERixFQUVFb0wsS0FGRixFQUdFLEtBSEYsRUFJRTFHLFFBTGtCLENBQXRCLENBUUE7UUFDQTtRQUNBLElBQUkwRyxLQUFLLENBQUNoRixRQUFOZ0YsQ0FBZVUsYUFBZlYsQ0FBSixFQUFtQztVQUNqQ3ZHLEtBQUssR0FBR2lILGFBQVJqSDtVQUNBSCxRQUFRLEdBQUdvSCxhQUFYcEg7VUFDQStHLE1BQU0sQ0FBQy9HLFFBQVArRyxHQUFrQi9HLFFBQWxCK0c7VUFDQXBILEdBQUcsR0FBRyxpQ0FBcUJvSCxNQUFyQixDQUFOcEg7UUFDRDtNQUNGO0lBQ0Y7SUFDRHVILFVBQVUsR0FBRzdILFNBQVMsQ0FBQ0csV0FBVyxDQUFDMEgsVUFBRCxDQUFaLEVBQTBCLEtBQUsvSCxNQUEvQixDQUF0QitIO0lBRUEsSUFBSSwrQkFBZS9HLEtBQWYsQ0FBSixFQUEyQjtNQUN6QixNQUFNa0gsUUFBUSxHQUFHLHdDQUFpQkgsVUFBakIsQ0FBakI7TUFDQSxNQUFNOUcsVUFBVSxHQUFHaUgsUUFBUSxDQUFDckgsUUFBNUI7TUFFQSxNQUFNc0gsVUFBVSxHQUFHLCtCQUFjbkgsS0FBZCxDQUFuQjtNQUNBLE1BQU1vSCxVQUFVLEdBQUcsbUNBQWdCRCxVQUFoQixFQUE0QmxILFVBQTVCLENBQW5CO01BQ0EsTUFBTW9ILGlCQUFpQixHQUFHckgsS0FBSyxLQUFLQyxVQUFwQztNQUNBLE1BQU04QixjQUFjLEdBQUdzRixpQkFBaUIsR0FDcEN0SCxhQUFhLENBQUNDLEtBQUQsRUFBUUMsVUFBUixFQUFvQkMsS0FBcEIsQ0FEdUIsR0FFbkMsRUFGTDtNQUlBLElBQUksQ0FBQ2tILFVBQUQsSUFBZ0JDLGlCQUFpQixJQUFJLENBQUN0RixjQUFjLENBQUNaLE1BQXpELEVBQWtFO1FBQ2hFLE1BQU1tRyxhQUFhLEdBQUduTSxNQUFNLENBQUNzRixJQUFQdEYsQ0FBWWdNLFVBQVUsQ0FBQzdHLE1BQXZCbkYsRUFBK0JvTSxNQUEvQnBNLENBQ25Cd0YsS0FBRCxJQUFXLENBQUNULEtBQUssQ0FBQ1MsS0FBRCxDQURHeEYsQ0FBdEI7UUFJQSxJQUFJbU0sYUFBYSxDQUFDaEksTUFBZGdJLEdBQXVCLENBQTNCLEVBQThCO1VBQzVCLFVBQTJDO1lBQ3pDbEwsT0FBTyxDQUFDb0wsSUFBUnBMLENBQ0csR0FDQ2lMLGlCQUFpQixHQUNaLG9CQURZLEdBRVosaUNBQ04sOEJBSkQsR0FLRyxlQUFjQyxhQUFhLENBQUNwRyxJQUFkb0csQ0FDYixJQURhQSxDQUViLDhCQVJObEw7VUFVRDtVQUVELE1BQU0sSUFBSUksS0FBSixDQUNKLENBQUM2SyxpQkFBaUIsR0FDYiwwQkFBeUI3SCxHQUFJLG9DQUFtQzhILGFBQWEsQ0FBQ3BHLElBQWRvRyxDQUMvRCxJQUQrREEsQ0FFL0QsaUNBSFksR0FJYiw4QkFBNkJySCxVQUFXLDhDQUE2Q0QsS0FBTSxLQUpoRyxJQUtHLDRDQUNDcUgsaUJBQWlCLEdBQ2IsMkJBRGEsR0FFYixzQkFDTCxFQVZDLENBQU47UUFZRDtNQUNGLENBaENELE1BZ0NPLElBQUlBLGlCQUFKLEVBQXVCO1FBQzVCOUUsRUFBRSxHQUFHLGlDQUNIcEgsTUFBTSxDQUFDK0IsTUFBUC9CLENBQWMsRUFBZEEsRUFBa0IrTCxRQUFsQi9MLEVBQTRCO1VBQzFCMEUsUUFBUSxFQUFFa0MsY0FBYyxDQUFDWixNQURDO1VBRTFCakIsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUNsQixLQUFELEVBQVE2QixjQUFjLENBQUN2QixNQUF2QjtRQUZDLENBQTVCckYsQ0FERyxDQUFMb0g7TUFNRCxDQVBNLE1BT0E7UUFDTDtRQUNBcEgsTUFBTSxDQUFDK0IsTUFBUC9CLENBQWMrRSxLQUFkL0UsRUFBcUJpTSxVQUFyQmpNO01BQ0Q7SUFDRjtJQUVERyxNQUFNLENBQUNDLE1BQVBELENBQWMrQyxJQUFkL0MsQ0FBbUIsa0JBQW5CQSxFQUF1Q2lILEVBQXZDakg7SUFFQSxJQUFJO01BQ0YsTUFBTW1NLFNBQVMsR0FBRyxNQUFNLEtBQUtDLFlBQUwsQ0FDdEIxSCxLQURzQixFQUV0QkgsUUFGc0IsRUFHdEJLLEtBSHNCLEVBSXRCcUMsRUFKc0IsRUFLdEJ5QyxPQUxzQixDQUF4QjtNQU9BLElBQUk7UUFBRTNJLEtBQUY7UUFBU21CLEtBQVQ7UUFBZ0IwSCxPQUFoQjtRQUF5QkM7TUFBekIsSUFBcUNzQyxTQUF6QyxDQUVBO01BQ0EsSUFDRSxDQUFDdkMsT0FBTyxJQUFJQyxPQUFaLEtBQ0EzSCxLQURBLElBRUNBLEtBQUQsQ0FBZW1LLFNBRmYsSUFHQ25LLEtBQUQsQ0FBZW1LLFNBQWYsQ0FBeUJDLFlBSjNCLEVBS0U7UUFDQSxNQUFNQyxXQUFXLEdBQUlySyxLQUFELENBQWVtSyxTQUFmLENBQXlCQyxZQUE3QyxDQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUlDLFdBQVcsQ0FBQy9JLFVBQVorSSxDQUF1QixHQUF2QkEsQ0FBSixFQUFpQztVQUMvQixNQUFNQyxVQUFVLEdBQUcsd0NBQWlCRCxXQUFqQixDQUFuQjtVQUNBLEtBQUtoQixZQUFMLENBQWtCaUIsVUFBbEIsRUFBOEJ2QixLQUE5QjtVQUVBLElBQUlBLEtBQUssQ0FBQ2hGLFFBQU5nRixDQUFldUIsVUFBVSxDQUFDakksUUFBMUIwRyxDQUFKLEVBQXlDO1lBQ3ZDLE9BQU8sS0FBS3hCLE1BQUwsQ0FDTCxjQURLLEVBRUw4QyxXQUZLLEVBR0xBLFdBSEssRUFJTC9DLE9BSkssQ0FBUDtVQU1EO1FBQ0Y7UUFFRFMsTUFBTSxDQUFDRyxRQUFQSCxDQUFnQjdELElBQWhCNkQsR0FBdUJzQyxXQUF2QnRDO1FBQ0EsT0FBTyxJQUFJd0MsT0FBSixDQUFZLE1BQU0sQ0FBRSxDQUFwQixDQUFQO01BQ0Q7TUFFRHpNLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBYytDLElBQWQvQyxDQUFtQixxQkFBbkJBLEVBQTBDaUgsRUFBMUNqSDtNQUNBLEtBQUtzSixXQUFMLENBQ0VpQixNQURGLEVBRUVyRyxHQUZGLEVBR0VULFNBQVMsQ0FBQ3dELEVBQUQsRUFBSyxLQUFLdkQsTUFBVixFQUFrQixLQUFLQyxhQUF2QixDQUhYLEVBSUU2RixPQUpGO01BT0EsVUFBMkM7UUFDekMsTUFBTWtELE9BQVksR0FBRyxLQUFLaEUsVUFBTCxDQUFnQixPQUFoQixFQUF5Qk4sU0FBOUM7UUFDRTZCLE1BQUQsQ0FBZ0IwQyxJQUFoQixDQUFxQkMsYUFBckIsR0FDQ0YsT0FBTyxDQUFDdkssZUFBUnVLLEtBQTRCQSxPQUFPLENBQUN0SyxtQkFBcENzSyxJQUNBLENBQUVQLFNBQVMsQ0FBQy9ELFNBQVgsQ0FBNkJqRyxlQUYvQjtNQUdGO01BRUQsTUFBTSxLQUFLMEssR0FBTCxDQUFTbkksS0FBVCxFQUFnQkgsUUFBaEIsRUFBMkJLLEtBQTNCLEVBQWtDaUcsU0FBbEMsRUFBNkNzQixTQUE3QyxFQUF3RHJFLEtBQXhELENBQ0hzQixDQUFELElBQU87UUFDTCxJQUFJQSxDQUFDLENBQUMvRixTQUFOLEVBQWlCdEMsS0FBSyxHQUFHQSxLQUFLLElBQUlxSSxDQUFqQnJJLENBQWpCLEtBQ0ssTUFBTXFJLENBQU47TUFDTixDQUpHLENBQU47TUFPQSxJQUFJckksS0FBSixFQUFXO1FBQ1RmLE1BQU0sQ0FBQ0MsTUFBUEQsQ0FBYytDLElBQWQvQyxDQUFtQixrQkFBbkJBLEVBQXVDZSxLQUF2Q2YsRUFBOEM2SyxTQUE5QzdLO1FBQ0EsTUFBTWUsS0FBTjtNQUNEO01BRUQsSUFBSTVCLEtBQUosRUFBMkMsRUFJMUM7TUFDRGEsTUFBTSxDQUFDQyxNQUFQRCxDQUFjK0MsSUFBZC9DLENBQW1CLHFCQUFuQkEsRUFBMENpSCxFQUExQ2pIO01BRUEsT0FBTyxJQUFQO0lBQ0QsQ0FBQyxRQUFPYSxHQUFQLEVBQVk7TUFDWixJQUFJQSxHQUFHLENBQUN3QyxTQUFSLEVBQW1CO1FBQ2pCLE9BQU8sS0FBUDtNQUNEO01BQ0QsTUFBTXhDLEdBQU47SUFDRDtFQUNGO0VBRUR5SSxXQUFXLENBQ1RpQixNQURTLEVBRVRyRyxHQUZTLEVBR1QrQyxFQUhTLEVBSVR1QyxPQUEwQixHQUFHLEVBSnBCLEVBS0g7SUFDTixVQUEyQztNQUN6QyxJQUFJLE9BQU9TLE1BQU0sQ0FBQ0ssT0FBZCxLQUEwQixXQUE5QixFQUEyQztRQUN6Q3hKLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBZSwyQ0FBZkE7UUFDQTtNQUNEO01BRUQsSUFBSSxPQUFPbUosTUFBTSxDQUFDSyxPQUFQTCxDQUFlTSxNQUFmTixDQUFQLEtBQWtDLFdBQXRDLEVBQW1EO1FBQ2pEbkosT0FBTyxDQUFDQyxLQUFSRCxDQUFlLDJCQUEwQnlKLE1BQU8sbUJBQWhEeko7UUFDQTtNQUNEO0lBQ0Y7SUFFRCxJQUFJeUosTUFBTSxLQUFLLFdBQVhBLElBQTBCLHlCQUFhdEQsRUFBM0MsRUFBK0M7TUFDN0MsS0FBS2lDLFFBQUwsR0FBZ0JNLE9BQU8sQ0FBQ0UsT0FBeEI7TUFDQSxNQUFNLENBQUNZLE9BQVAsQ0FBZUMsTUFBZixFQUNFO1FBQ0VyRyxHQURGO1FBRUUrQyxFQUZGO1FBR0V1QyxPQUhGO1FBSUVELEdBQUcsRUFBRTtNQUpQLENBREY7TUFPRTtNQUNBO01BQ0E7TUFDQSxFQVZGLEVBV0V0QyxFQVhGO0lBYUQ7RUFDRjtFQUVELE1BQU02RixvQkFBTixDQUNFak0sR0FERixFQUVFMEQsUUFGRixFQUdFSyxLQUhGLEVBSUVxQyxFQUpGLEVBS0U4RixhQUxGLEVBTTZCO0lBQzNCLElBQUlsTSxHQUFHLENBQUN3QyxTQUFSLEVBQW1CO01BQ2pCO01BQ0EsTUFBTXhDLEdBQU47SUFDRDtJQUVELElBQUlnRyxlQUFlLElBQUloRyxHQUFuQmdHLElBQTBCa0csYUFBOUIsRUFBNkM7TUFDM0MvTSxNQUFNLENBQUNDLE1BQVBELENBQWMrQyxJQUFkL0MsQ0FBbUIsa0JBQW5CQSxFQUF1Q2EsR0FBdkNiLEVBQTRDaUgsRUFBNUNqSCxFQUVBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQWlLLE1BQU0sQ0FBQ0csUUFBUEgsQ0FBZ0I3RCxJQUFoQjZELEdBQXVCaEQsRUFBdkJnRCxDQUVBO01BQ0E7TUFDQSxNQUFNN0csc0JBQXNCLEVBQTVCO0lBQ0Q7SUFFRCxJQUFJO01BQ0YsTUFBTTtRQUFFNEosSUFBSSxFQUFFNUUsU0FBUjtRQUFtQnVCO01BQW5CLElBQW1DLE1BQU0sS0FBS3NELGNBQUwsQ0FDN0MsU0FENkMsQ0FBL0M7TUFHQSxNQUFNZCxTQUEyQixHQUFHO1FBQ2xDL0QsU0FEa0M7UUFFbEN1QixXQUZrQztRQUdsQzlJLEdBSGtDO1FBSWxDRSxLQUFLLEVBQUVGO01BSjJCLENBQXBDO01BT0EsSUFBSTtRQUNGc0wsU0FBUyxDQUFDakssS0FBVmlLLEdBQWtCLE1BQU0sS0FBS2hLLGVBQUwsQ0FBcUJpRyxTQUFyQixFQUFnQztVQUN0RHZILEdBRHNEO1VBRXREMEQsUUFGc0Q7VUFHdERLO1FBSHNELENBQWhDLENBQXhCdUg7TUFLRCxDQUFDLFFBQU9lLE1BQVAsRUFBZTtRQUNmcE0sT0FBTyxDQUFDQyxLQUFSRCxDQUFjLHlDQUFkQSxFQUF5RG9NLE1BQXpEcE07UUFDQXFMLFNBQVMsQ0FBQ2pLLEtBQVZpSyxHQUFrQixFQUFsQkE7TUFDRDtNQUVELE9BQU9BLFNBQVA7SUFDRCxDQUFDLFFBQU9nQixZQUFQLEVBQXFCO01BQ3JCLE9BQU8sS0FBS0wsb0JBQUwsQ0FBMEJLLFlBQTFCLEVBQXdDNUksUUFBeEMsRUFBa0RLLEtBQWxELEVBQXlEcUMsRUFBekQsRUFBNkQsSUFBN0QsQ0FBUDtJQUNEO0VBQ0Y7RUFFRCxNQUFNbUYsWUFBTixDQUNFMUgsS0FERixFQUVFSCxRQUZGLEVBR0VLLEtBSEYsRUFJRXFDLEVBSkYsRUFLRXlDLE9BQWdCLEdBQUcsS0FMckIsRUFNNkI7SUFDM0IsSUFBSTtNQUNGLE1BQU0wRCxlQUFlLEdBQUcsS0FBSzFFLFVBQUwsQ0FBZ0JoRSxLQUFoQixDQUF4QjtNQUVBLElBQUlnRixPQUFPLElBQUkwRCxlQUFYMUQsSUFBOEIsS0FBS2hGLEtBQUwsS0FBZUEsS0FBakQsRUFBd0Q7UUFDdEQsT0FBTzBJLGVBQVA7TUFDRDtNQUVELE1BQU1qQixTQUEyQixHQUFHaUIsZUFBZSxHQUMvQ0EsZUFEK0MsR0FFL0MsTUFBTSxLQUFLSCxjQUFMLENBQW9CdkksS0FBcEIsRUFBMkI0QyxJQUEzQixDQUFpQ0MsR0FBRCxLQUFVO1FBQzlDYSxTQUFTLEVBQUViLEdBQUcsQ0FBQ3lGLElBRCtCO1FBRTlDckQsV0FBVyxFQUFFcEMsR0FBRyxDQUFDb0MsV0FGNkI7UUFHOUNDLE9BQU8sRUFBRXJDLEdBQUcsQ0FBQzhGLEdBQUo5RixDQUFRcUMsT0FINkI7UUFJOUNDLE9BQU8sRUFBRXRDLEdBQUcsQ0FBQzhGLEdBQUo5RixDQUFRc0M7TUFKNkIsQ0FBVixDQUFoQyxDQUZWO01BU0EsTUFBTTtRQUFFekIsU0FBRjtRQUFhd0IsT0FBYjtRQUFzQkM7TUFBdEIsSUFBa0NzQyxTQUF4QztNQUVBLFVBQTJDO1FBQ3pDLE1BQU07VUFBRW1CO1FBQUYsSUFBeUJDLG1CQUFPLENBQUMsb0VBQUQsQ0FBdEM7UUFDQSxJQUFJLENBQUNELGtCQUFrQixDQUFDbEYsU0FBRCxDQUF2QixFQUFvQztVQUNsQyxNQUFNLElBQUlsSCxLQUFKLENBQ0gseURBQXdEcUQsUUFBUyxHQUQ5RCxDQUFOO1FBR0Q7TUFDRjtNQUVELElBQUlxRCxRQUFKO01BRUEsSUFBSWdDLE9BQU8sSUFBSUMsT0FBZixFQUF3QjtRQUN0QmpDLFFBQVEsR0FBRyxLQUFLSyxVQUFMLENBQWdCdUYsV0FBaEIsQ0FDVCxpQ0FBcUI7VUFBRWpKLFFBQUY7VUFBWUs7UUFBWixDQUFyQixDQURTLEVBRVRiLFdBQVcsQ0FBQ2tELEVBQUQsQ0FGRixFQUdUMkMsT0FIUyxFQUlULEtBQUtsRyxNQUpJLEVBS1QsS0FBS0MsYUFMSSxDQUFYaUU7TUFPRDtNQUVELE1BQU0xRixLQUFLLEdBQUcsTUFBTSxLQUFLdUwsUUFBTCxDQUFnQyxNQUNsRDdELE9BQU8sR0FDSCxLQUFLOEQsY0FBTCxDQUFvQjlGLFFBQXBCLENBREcsR0FFSGlDLE9BQU8sR0FDUCxLQUFLOEQsY0FBTCxDQUFvQi9GLFFBQXBCLENBRE8sR0FFUCxLQUFLekYsZUFBTCxDQUNFaUcsU0FERjtNQUVFO01BQ0E7UUFDRTdELFFBREY7UUFFRUssS0FGRjtRQUdFNkQsTUFBTSxFQUFFeEI7TUFIVixDQUhGLENBTGMsQ0FBcEI7TUFnQkFrRixTQUFTLENBQUNqSyxLQUFWaUssR0FBa0JqSyxLQUFsQmlLO01BQ0EsS0FBS3pELFVBQUwsQ0FBZ0JoRSxLQUFoQixJQUF5QnlILFNBQXpCO01BQ0EsT0FBT0EsU0FBUDtJQUNELENBQUMsUUFBT3RMLEdBQVAsRUFBWTtNQUNaLE9BQU8sS0FBS2lNLG9CQUFMLENBQTBCak0sR0FBMUIsRUFBK0IwRCxRQUEvQixFQUF5Q0ssS0FBekMsRUFBZ0RxQyxFQUFoRCxDQUFQO0lBQ0Q7RUFDRjtFQUVENEYsR0FBRyxDQUNEbkksS0FEQyxFQUVESCxRQUZDLEVBR0RLLEtBSEMsRUFJRHFDLEVBSkMsRUFLRDJHLElBTEMsRUFNYztJQUNmLEtBQUtyRixVQUFMLEdBQWtCLEtBQWxCO0lBRUEsS0FBSzdELEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBS0ssS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBSzZELE1BQUwsR0FBY3hCLEVBQWQ7SUFDQSxPQUFPLEtBQUsrRCxNQUFMLENBQVk0QyxJQUFaLENBQVA7RUFDRCxDQUVEOzs7O0VBSUFDLGNBQWMsQ0FBQ3JPLEVBQUQsRUFBNkI7SUFDekMsS0FBS3NKLElBQUwsR0FBWXRKLEVBQVo7RUFDRDtFQUVEc0wsZUFBZSxDQUFDN0QsRUFBRCxFQUFzQjtJQUNuQyxJQUFJLENBQUMsS0FBS3dCLE1BQVYsRUFBa0IsT0FBTyxLQUFQO0lBQ2xCLE1BQU0sQ0FBQ3FGLFlBQUQsRUFBZUMsT0FBZixJQUEwQixLQUFLdEYsTUFBTCxDQUFZdUYsS0FBWixDQUFrQixHQUFsQixDQUFoQztJQUNBLE1BQU0sQ0FBQ0MsWUFBRCxFQUFlQyxPQUFmLElBQTBCakgsRUFBRSxDQUFDK0csS0FBSC9HLENBQVMsR0FBVEEsQ0FBaEMsQ0FFQTtJQUNBLElBQUlpSCxPQUFPLElBQUlKLFlBQVksS0FBS0csWUFBNUJDLElBQTRDSCxPQUFPLEtBQUtHLE9BQTVELEVBQXFFO01BQ25FLE9BQU8sSUFBUDtJQUNELENBRUQ7SUFDQSxJQUFJSixZQUFZLEtBQUtHLFlBQXJCLEVBQW1DO01BQ2pDLE9BQU8sS0FBUDtJQUNELENBRUQ7SUFDQTtJQUNBO0lBQ0E7SUFDQSxPQUFPRixPQUFPLEtBQUtHLE9BQW5CO0VBQ0Q7RUFFRG5ELFlBQVksQ0FBQzlELEVBQUQsRUFBbUI7SUFDN0IsTUFBTSxHQUFHTixJQUFILElBQVdNLEVBQUUsQ0FBQytHLEtBQUgvRyxDQUFTLEdBQVRBLENBQWpCLENBQ0E7SUFDQSxJQUFJTixJQUFJLEtBQUssRUFBYixFQUFpQjtNQUNmc0QsTUFBTSxDQUFDa0UsUUFBUGxFLENBQWdCLENBQWhCQSxFQUFtQixDQUFuQkE7TUFDQTtJQUNELENBRUQ7SUFDQSxNQUFNbUUsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVRELENBQXdCMUgsSUFBeEIwSCxDQUFiO0lBQ0EsSUFBSUQsSUFBSixFQUFVO01BQ1JBLElBQUksQ0FBQ0csY0FBTEg7TUFDQTtJQUNELENBQ0Q7SUFDQTtJQUNBLE1BQU1JLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxpQkFBVEosQ0FBMkIxSCxJQUEzQjBILEVBQWlDLENBQWpDQSxDQUFmO0lBQ0EsSUFBSUcsTUFBSixFQUFZO01BQ1ZBLE1BQU0sQ0FBQ0QsY0FBUEM7SUFDRDtFQUNGO0VBRURoRCxRQUFRLENBQUMvQyxNQUFELEVBQTBCO0lBQ2hDLE9BQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7RUFDRDtFQUVEOEMsWUFBWSxDQUFDaUIsVUFBRCxFQUF3QnZCLEtBQXhCLEVBQXlDeUQsYUFBYSxHQUFHLElBQXpELEVBQStEO0lBQ3pFLE1BQU07TUFBRW5LO0lBQUYsSUFBZWlJLFVBQXJCO0lBQ0EsTUFBTW1DLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUczSyxXQUFXLENBQUNRLFFBQUQsQ0FBZCxHQUE0QkEsUUFBN0QsQ0FEb0IsQ0FBdEI7SUFJQSxJQUFJb0ssYUFBYSxLQUFLLE1BQWxCQSxJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO01BQzNELE9BQU9uQyxVQUFQO0lBQ0QsQ0FFRDtJQUNBLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ2hGLFFBQU5nRixDQUFlMEQsYUFBZjFELENBQUwsRUFBcUM7TUFDbkM7TUFDQUEsS0FBSyxDQUFDMkQsSUFBTjNELENBQVkrQixJQUFELElBQVU7UUFDbkIsSUFDRSwrQkFBZUEsSUFBZixLQUNBLCtCQUFjQSxJQUFkLEVBQW9CNkIsRUFBcEIsQ0FBdUJDLElBQXZCLENBQTRCSCxhQUE1QixDQUZGLEVBR0U7VUFDQW5DLFVBQVUsQ0FBQ2pJLFFBQVhpSSxHQUFzQmtDLGFBQWEsR0FBRzVLLFdBQVcsQ0FBQ2tKLElBQUQsQ0FBZCxHQUF1QkEsSUFBMURSO1VBQ0EsT0FBTyxJQUFQO1FBQ0Q7TUFDRixDQVJEdkI7SUFTRDtJQUNELE9BQU91QixVQUFQO0VBQ0QsQ0FFRDs7Ozs7O0VBTUEsTUFBTXVDLFFBQU4sQ0FDRTdLLEdBREYsRUFFRXVFLE1BQWMsR0FBR3ZFLEdBRm5CLEVBR0VzRixPQUF3QixHQUFHLEVBSDdCLEVBSWlCO0lBQ2YsSUFBSThCLE1BQU0sR0FBRyx3Q0FBaUJwSCxHQUFqQixDQUFiO0lBRUEsSUFBSTtNQUFFSztJQUFGLElBQWUrRyxNQUFuQjtJQUVBLE1BQU1MLEtBQUssR0FBRyxNQUFNLEtBQUtoRCxVQUFMLENBQWdCaUQsV0FBaEIsRUFBcEI7SUFFQUksTUFBTSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JELE1BQWxCLEVBQTBCTCxLQUExQixDQUFUSztJQUVBLElBQUlBLE1BQU0sQ0FBQy9HLFFBQVArRyxLQUFvQi9HLFFBQXhCLEVBQWtDO01BQ2hDQSxRQUFRLEdBQUcrRyxNQUFNLENBQUMvRyxRQUFsQkE7TUFDQUwsR0FBRyxHQUFHLGlDQUFxQm9ILE1BQXJCLENBQU5wSDtJQUNELENBRUQ7SUFDQSxVQUEyQztNQUN6QztJQUNEO0lBRUQsTUFBTVEsS0FBSyxHQUFHLHFEQUF3QkgsUUFBeEIsQ0FBZDtJQUNBLE1BQU1rSSxPQUFPLENBQUNqSyxHQUFSaUssQ0FBWSxDQUNoQixLQUFLeEUsVUFBTCxDQUFnQitHLFlBQWhCLENBQ0U5SyxHQURGLEVBRUV1RSxNQUZGLEVBR0UsS0FBSy9FLE1BSFAsRUFJRSxLQUFLQyxhQUpQLENBRGdCLEVBT2hCLEtBQUtzRSxVQUFMLENBQWdCdUIsT0FBTyxDQUFDeUYsUUFBUnpGLEdBQW1CLFVBQW5CQSxHQUFnQyxVQUFoRCxFQUE0RDlFLEtBQTVELENBUGdCLENBQVorSCxDQUFOO0VBU0Q7RUFFRCxNQUFNUSxjQUFOLENBQXFCdkksS0FBckIsRUFBNEQ7SUFDMUQsSUFBSXJCLFNBQVMsR0FBRyxLQUFoQjtJQUNBLE1BQU02TCxNQUFNLEdBQUksS0FBS3JHLEdBQUwsR0FBVyxNQUFNO01BQy9CeEYsU0FBUyxHQUFHLElBQVpBO0lBQ0QsQ0FGRDtJQUlBLE1BQU04TCxlQUFlLEdBQUcsTUFBTSxLQUFLbEgsVUFBTCxDQUFnQm1ILFFBQWhCLENBQXlCMUssS0FBekIsQ0FBOUI7SUFFQSxJQUFJckIsU0FBSixFQUFlO01BQ2IsTUFBTXRDLEtBQVUsR0FBRyxJQUFJRyxLQUFKLENBQ2hCLHdDQUF1Q3dELEtBQU0sR0FEN0IsQ0FBbkI7TUFHQTNELEtBQUssQ0FBQ3NDLFNBQU50QyxHQUFrQixJQUFsQkE7TUFDQSxNQUFNQSxLQUFOO0lBQ0Q7SUFFRCxJQUFJbU8sTUFBTSxLQUFLLEtBQUtyRyxHQUFwQixFQUF5QjtNQUN2QixLQUFLQSxHQUFMLEdBQVcsSUFBWDtJQUNEO0lBRUQsT0FBT3NHLGVBQVA7RUFDRDtFQUVEMUIsUUFBUSxDQUFJNEIsRUFBSixFQUFzQztJQUM1QyxJQUFJaE0sU0FBUyxHQUFHLEtBQWhCO0lBQ0EsTUFBTTZMLE1BQU0sR0FBRyxNQUFNO01BQ25CN0wsU0FBUyxHQUFHLElBQVpBO0lBQ0QsQ0FGRDtJQUdBLEtBQUt3RixHQUFMLEdBQVdxRyxNQUFYO0lBQ0EsT0FBT0csRUFBRSxHQUFHL0gsSUFBTCtILENBQVd6QixJQUFELElBQVU7TUFDekIsSUFBSXNCLE1BQU0sS0FBSyxLQUFLckcsR0FBcEIsRUFBeUI7UUFDdkIsS0FBS0EsR0FBTCxHQUFXLElBQVg7TUFDRDtNQUVELElBQUl4RixTQUFKLEVBQWU7UUFDYixNQUFNeEMsR0FBUSxHQUFHLElBQUlLLEtBQUosQ0FBVSxpQ0FBVixDQUFqQjtRQUNBTCxHQUFHLENBQUN3QyxTQUFKeEMsR0FBZ0IsSUFBaEJBO1FBQ0EsTUFBTUEsR0FBTjtNQUNEO01BRUQsT0FBTytNLElBQVA7SUFDRCxDQVpNeUIsQ0FBUDtFQWFEO0VBRUQzQixjQUFjLENBQUM5RixRQUFELEVBQW9DO0lBQ2hELE1BQU07TUFBRXhCLElBQUksRUFBRWtKO0lBQVIsSUFBcUIsSUFBSWpMLEdBQUosQ0FBUXVELFFBQVIsRUFBa0JxQyxNQUFNLENBQUNHLFFBQVBILENBQWdCN0QsSUFBbEMsQ0FBM0I7SUFDQSxJQUFJakgsS0FBSixFQUFpRSxFQUVoRTtJQUNELE9BQU93SSxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLb0IsS0FBaEIsQ0FBYnJCLENBQW9DTCxJQUFwQ0ssQ0FBMENpRyxJQUFELElBQVU7TUFDeEQsS0FBS2pGLEdBQUwsQ0FBUzJHLFFBQVQsSUFBcUIxQixJQUFyQjtNQUNBLE9BQU9BLElBQVA7SUFDRCxDQUhNakcsQ0FBUDtFQUlEO0VBRURnRyxjQUFjLENBQUMvRixRQUFELEVBQW9DO0lBQ2hELE9BQU9ELGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUtvQixLQUFoQixDQUFwQjtFQUNEO0VBRUQ3RyxlQUFlLENBQ2JpRyxTQURhLEVBRWJtSCxHQUZhLEVBR0M7SUFDZCxNQUFNO01BQUVuSCxTQUFTLEVBQUVGO0lBQWIsSUFBcUIsS0FBS1EsVUFBTCxDQUFnQixPQUFoQixDQUEzQjtJQUNBLE1BQU04RyxPQUFPLEdBQUcsS0FBS3pHLFFBQUwsQ0FBY2IsR0FBZCxDQUFoQjtJQUNBcUgsR0FBRyxDQUFDQyxPQUFKRCxHQUFjQyxPQUFkRDtJQUNBLE9BQU8sZ0NBQTRDckgsR0FBNUMsRUFBaUQ7TUFDdERzSCxPQURzRDtNQUV0RHBILFNBRnNEO01BR3REL0ksTUFBTSxFQUFFLElBSDhDO01BSXREa1E7SUFKc0QsQ0FBakQsQ0FBUDtFQU1EO0VBRUQzRSxrQkFBa0IsQ0FBQzNELEVBQUQsRUFBbUI7SUFDbkMsSUFBSSxLQUFLNEIsR0FBVCxFQUFjO01BQ1o3SSxNQUFNLENBQUNDLE1BQVBELENBQWMrQyxJQUFkL0MsQ0FBbUIsa0JBQW5CQSxFQUF1Q29ELHNCQUFzQixFQUE3RHBELEVBQWlFaUgsRUFBakVqSDtNQUNBLEtBQUs2SSxHQUFMO01BQ0EsS0FBS0EsR0FBTCxHQUFXLElBQVg7SUFDRDtFQUNGO0VBRURtQyxNQUFNLENBQUM0QyxJQUFELEVBQXdDO0lBQzVDLE9BQU8sS0FBS2hGLEdBQUwsQ0FBU2dGLElBQVQsRUFBZSxLQUFLbEYsVUFBTCxDQUFnQixPQUFoQixFQUF5Qk4sU0FBeEMsQ0FBUDtFQUNEO0FBMTNCK0M7O0FBQTdCcEksTSxDQTJCWkMsTSxHQUFzQixvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQzdXL0I7QUFDZSxTQUFTMEYsb0JBQVQsQ0FBOEI4SixPQUE5QixFQUF1RDtFQUNwRSxPQUFPQSxPQUFPLENBQUMvSixPQUFSK0osQ0FBZ0IsUUFBaEJBLEVBQTJCQyxJQUFELElBQWtCQyxrQkFBa0IsQ0FBQ0QsSUFBRCxDQUE5REQsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsTUFBTUcsZ0JBQWdCLEdBQUcsd0JBQXpCO0FBRU8sU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBc0M7RUFDM0MsSUFBSTtJQUFFQyxJQUFGO0lBQVFDO0VBQVIsSUFBcUJGLE1BQXpCO0VBQ0EsSUFBSUcsUUFBUSxHQUFHSCxNQUFNLENBQUNHLFFBQVBILElBQW1CLEVBQWxDO0VBQ0EsSUFBSXZMLFFBQVEsR0FBR3VMLE1BQU0sQ0FBQ3ZMLFFBQVB1TCxJQUFtQixFQUFsQztFQUNBLElBQUluSixJQUFJLEdBQUdtSixNQUFNLENBQUNuSixJQUFQbUosSUFBZSxFQUExQjtFQUNBLElBQUlsTCxLQUFLLEdBQUdrTCxNQUFNLENBQUNsTCxLQUFQa0wsSUFBZ0IsRUFBNUI7RUFDQSxJQUFJSSxJQUFvQixHQUFHLEtBQTNCO0VBRUFILElBQUksR0FBR0EsSUFBSSxHQUFHSixrQkFBa0IsQ0FBQ0ksSUFBRCxDQUFsQkosQ0FBeUJqSyxPQUF6QmlLLENBQWlDLE1BQWpDQSxFQUF5QyxHQUF6Q0EsSUFBZ0QsR0FBbkQsR0FBeUQsRUFBcEVJO0VBRUEsSUFBSUQsTUFBTSxDQUFDSSxJQUFYLEVBQWlCO0lBQ2ZBLElBQUksR0FBR0gsSUFBSSxHQUFHRCxNQUFNLENBQUNJLElBQXJCQTtFQUNELENBRkQsTUFFTyxJQUFJRixRQUFKLEVBQWM7SUFDbkJFLElBQUksR0FBR0gsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBQ2xOLE9BQVRrTixDQUFpQixHQUFqQkEsQ0FBRCxHQUEwQixJQUFHQSxRQUFTLEdBQXRDLEdBQTJDQSxRQUEvQyxDQUFYRTtJQUNBLElBQUlKLE1BQU0sQ0FBQ0ssSUFBWCxFQUFpQjtNQUNmRCxJQUFJLElBQUksTUFBTUosTUFBTSxDQUFDSyxJQUFyQkQ7SUFDRDtFQUNGO0VBRUQsSUFBSXRMLEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0lBQ3RDQSxLQUFLLEdBQUd3TCxNQUFNLENBQUNDLFdBQVcsQ0FBQ0Msc0JBQVpELENBQW1DekwsS0FBbkN5TCxDQUFELENBQWR6TDtFQUNEO0VBRUQsSUFBSTJMLE1BQU0sR0FBR1QsTUFBTSxDQUFDUyxNQUFQVCxJQUFrQmxMLEtBQUssSUFBSyxJQUFHQSxLQUFNLEVBQXJDa0wsSUFBMkMsRUFBeEQ7RUFFQSxJQUFJRyxRQUFRLElBQUlBLFFBQVEsQ0FBQ2pHLE1BQVRpRyxDQUFnQixDQUFDLENBQWpCQSxNQUF3QixHQUF4QyxFQUE2Q0EsUUFBUSxJQUFJLEdBQVpBO0VBRTdDLElBQ0VILE1BQU0sQ0FBQ1UsT0FBUFYsSUFDQyxDQUFDLENBQUNHLFFBQUQsSUFBYUwsZ0JBQWdCLENBQUNkLElBQWpCYyxDQUFzQkssUUFBdEJMLENBQWQsS0FBa0RNLElBQUksS0FBSyxLQUY5RCxFQUdFO0lBQ0FBLElBQUksR0FBRyxRQUFRQSxJQUFJLElBQUksRUFBaEIsQ0FBUEE7SUFDQSxJQUFJM0wsUUFBUSxJQUFJQSxRQUFRLENBQUMsQ0FBRCxDQUFSQSxLQUFnQixHQUFoQyxFQUFxQ0EsUUFBUSxHQUFHLE1BQU1BLFFBQWpCQTtFQUN0QyxDQU5ELE1BTU8sSUFBSSxDQUFDMkwsSUFBTCxFQUFXO0lBQ2hCQSxJQUFJLEdBQUcsRUFBUEE7RUFDRDtFQUVELElBQUl2SixJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFELENBQUpBLEtBQVksR0FBeEIsRUFBNkJBLElBQUksR0FBRyxNQUFNQSxJQUFiQTtFQUM3QixJQUFJNEosTUFBTSxJQUFJQSxNQUFNLENBQUMsQ0FBRCxDQUFOQSxLQUFjLEdBQTVCLEVBQWlDQSxNQUFNLEdBQUcsTUFBTUEsTUFBZkE7RUFFakNoTSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ21CLE9BQVRuQixDQUFpQixPQUFqQkEsRUFBMEJvTCxrQkFBMUJwTCxDQUFYQTtFQUNBZ00sTUFBTSxHQUFHQSxNQUFNLENBQUM3SyxPQUFQNkssQ0FBZSxHQUFmQSxFQUFvQixLQUFwQkEsQ0FBVEE7RUFFQSxPQUFRLEdBQUVOLFFBQVMsR0FBRUMsSUFBSyxHQUFFM0wsUUFBUyxHQUFFZ00sTUFBTyxHQUFFNUosSUFBSyxFQUFyRDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NDeEVEO0FBQ0EsTUFBTThKLFVBQVUsR0FBRyxzQkFBbkI7QUFFTyxTQUFTQyxjQUFULENBQXdCaE0sS0FBeEIsRUFBZ0Q7RUFDckQsT0FBTytMLFVBQVUsQ0FBQzNCLElBQVgyQixDQUFnQi9MLEtBQWhCK0wsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUVBLE1BQU1FLFVBQVUsR0FBRyxJQUFJdE0sR0FBSixDQUNqQixRQUFnQyxTQUFoQyxHQUE2QywrQkFENUIsQ0FBbkIsQ0FJQTs7Ozs7O0FBTU8sU0FBU3VNLGdCQUFULENBQTBCMU0sR0FBMUIsRUFBdUNvQyxJQUF2QyxFQUFzRDtFQUMzRCxNQUFNdUssWUFBWSxHQUFHdkssSUFBSSxHQUFHLElBQUlqQyxHQUFKLENBQVFpQyxJQUFSLEVBQWNxSyxVQUFkLENBQUgsR0FBK0JBLFVBQXhEO0VBQ0EsTUFBTTtJQUNKcE0sUUFESTtJQUVKbUMsWUFGSTtJQUdKNkosTUFISTtJQUlKNUosSUFKSTtJQUtKUCxJQUxJO0lBTUo5QixNQU5JO0lBT0oyTDtFQVBJLElBUUYsSUFBSTVMLEdBQUosQ0FBUUgsR0FBUixFQUFhMk0sWUFBYixDQVJKO0VBU0EsSUFDRXZNLE1BQU0sS0FBS3FNLFVBQVUsQ0FBQ3JNLE1BQXRCQSxJQUNDMkwsUUFBUSxLQUFLLE9BQWJBLElBQXdCQSxRQUFRLEtBQUssUUFGeEMsRUFHRTtJQUNBLE1BQU0sSUFBSS9PLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPO0lBQ0xxRCxRQURLO0lBRUxLLEtBQUssRUFBRSx5Q0FBdUI4QixZQUF2QixDQUZGO0lBR0w2SixNQUhLO0lBSUw1SixJQUpLO0lBS0xQLElBQUksRUFBRUEsSUFBSSxDQUFDbkgsS0FBTG1ILENBQVd1SyxVQUFVLENBQUNyTSxNQUFYcU0sQ0FBa0IzTSxNQUE3Qm9DO0VBTEQsQ0FBUDtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPLE1BQU0wSyxjQUNjLEdBQUc7RUFDNUJDLFNBQVMsRUFBRSxLQURpQjtFQUU1QkMsU0FBUyxFQUFFO0FBRmlCLENBRHZCOztBQU1BLE1BQU1DLHlCQUNjLG1DQUN0QkgsY0FEeUI7RUFFNUJJLE1BQU0sRUFBRTtBQUZvQixFQUR2Qjs7ZUFNUSxDQUFDQyxXQUFXLEdBQUcsS0FBZixLQUF5QjtFQUN0QyxPQUFRcFMsSUFBRCxJQUFrQjtJQUN2QixNQUFNb0csSUFBd0IsR0FBRyxFQUFqQztJQUNBLE1BQU1pTSxZQUFZLEdBQUdDLFlBQVksQ0FBQ0EsWUFBYkEsQ0FDbkJ0UyxJQURtQnNTLEVBRW5CbE0sSUFGbUJrTSxFQUduQkYsV0FBVyxHQUFHRix5QkFBSCxHQUErQkgsY0FIdkJPLENBQXJCO0lBS0EsTUFBTUMsT0FBTyxHQUFHRCxZQUFZLENBQUNFLGdCQUFiRixDQUE4QkQsWUFBOUJDLEVBQTRDbE0sSUFBNUNrTSxDQUFoQjtJQUVBLE9BQU8sQ0FBQzlNLFFBQUQsRUFBc0NXLE1BQXRDLEtBQXVEO01BQzVELE1BQU1xQyxHQUFHLEdBQUdoRCxRQUFRLElBQUksSUFBWkEsR0FBbUIsS0FBbkJBLEdBQTJCK00sT0FBTyxDQUFDL00sUUFBRCxDQUE5QztNQUNBLElBQUksQ0FBQ2dELEdBQUwsRUFBVTtRQUNSLE9BQU8sS0FBUDtNQUNEO01BRUQsSUFBSTRKLFdBQUosRUFBaUI7UUFDZixLQUFLLE1BQU1uTCxHQUFYLElBQWtCYixJQUFsQixFQUF3QjtVQUN0QjtVQUNBO1VBQ0EsSUFBSSxPQUFPYSxHQUFHLENBQUMzRCxJQUFYLEtBQW9CLFFBQXhCLEVBQWtDO1lBQ2hDLE9BQVFrRixHQUFHLENBQUNyQyxNQUFMLENBQW9CYyxHQUFHLENBQUMzRCxJQUF4QixDQUFQO1VBQ0Q7UUFDRjtNQUNGO01BRUQsdUNBQVk2QyxNQUFMLEdBQWdCcUMsR0FBRyxDQUFDckMsTUFBM0I7SUFDRCxDQWpCRDtFQWtCRCxDQTNCRDtBQTRCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZSxTQUFTc00sa0JBQVQsQ0FDYmpGLFdBRGEsRUFFYnJILE1BRmEsRUFHYk4sS0FIYSxFQUliNk0sbUJBSmEsRUFLYnRPLFFBTGEsRUFNYjtFQUNBLElBQUl1TyxpQkFLbUMsR0FBRyxFQUwxQztFQU9BLElBQUluRixXQUFXLENBQUMvSSxVQUFaK0ksQ0FBdUIsR0FBdkJBLENBQUosRUFBaUM7SUFDL0JtRixpQkFBaUIsR0FBRyx3Q0FBaUJuRixXQUFqQixDQUFwQm1GO0VBQ0QsQ0FGRCxNQUVPO0lBQ0wsTUFBTTtNQUNKbk4sUUFESTtNQUVKbUMsWUFGSTtNQUdKQyxJQUhJO01BSUpxSixRQUpJO01BS0pHLElBTEk7TUFNSkYsUUFOSTtNQU9KTSxNQVBJO01BUUpuSztJQVJJLElBU0YsSUFBSS9CLEdBQUosQ0FBUWtJLFdBQVIsQ0FUSjtJQVdBbUYsaUJBQWlCLEdBQUc7TUFDbEJuTixRQURrQjtNQUVsQkssS0FBSyxFQUFFLHlDQUF1QjhCLFlBQXZCLENBRlc7TUFHbEJDLElBSGtCO01BSWxCc0osUUFKa0I7TUFLbEJELFFBTGtCO01BTWxCRyxJQU5rQjtNQU9sQkksTUFQa0I7TUFRbEJuSztJQVJrQixDQUFwQnNMO0VBVUQ7RUFFRCxNQUFNQyxTQUFTLEdBQUdELGlCQUFpQixDQUFDOU0sS0FBcEM7RUFDQSxNQUFNZ04sUUFBUSxHQUFJLEdBQUVGLGlCQUFpQixDQUFDbk4sUUFBVSxHQUM5Q21OLGlCQUFpQixDQUFDL0ssSUFBbEIrSyxJQUEwQixFQUMzQixFQUZEO0VBR0EsTUFBTUcsaUJBQXFDLEdBQUcsRUFBOUM7RUFDQVIsWUFBWSxDQUFDQSxZQUFiQSxDQUEwQk8sUUFBMUJQLEVBQW9DUSxpQkFBcENSO0VBRUEsTUFBTVMsY0FBYyxHQUFHRCxpQkFBaUIsQ0FBQzVPLEdBQWxCNE8sQ0FBdUI3TCxHQUFELElBQVNBLEdBQUcsQ0FBQzNELElBQW5Dd1AsQ0FBdkI7RUFFQSxJQUFJRSxtQkFBbUIsR0FBRyxZQUFZLENBQUNDLE9BQWIsQ0FDeEJKLFFBRHdCO0VBRXhCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0lBQUVLLFFBQVEsRUFBRTtFQUFaLENBUndCLENBQTFCO0VBVUEsSUFBSUMsTUFBSixDQUVBO0VBQ0EsS0FBSyxNQUFNLENBQUNsTSxHQUFELEVBQU1tTSxVQUFOLENBQVgsSUFBZ0N0UyxNQUFNLENBQUN1UyxPQUFQdlMsQ0FBZThSLFNBQWY5UixDQUFoQyxFQUEyRDtJQUN6RCxJQUFJeUYsS0FBSyxHQUFHekQsS0FBSyxDQUFDQyxPQUFORCxDQUFjc1EsVUFBZHRRLElBQTRCc1EsVUFBVSxDQUFDLENBQUQsQ0FBdEN0USxHQUE0Q3NRLFVBQXhEO0lBQ0EsSUFBSTdNLEtBQUosRUFBVztNQUNUO01BQ0E7TUFDQUEsS0FBSyxHQUFJLElBQUdBLEtBQU0sRUFBbEJBO01BQ0EsTUFBTStNLGFBQWEsR0FBR2hCLFlBQVksQ0FBQ1csT0FBYlgsQ0FBcUIvTCxLQUFyQitMLEVBQTRCO1FBQUVZLFFBQVEsRUFBRTtNQUFaLENBQTVCWixDQUF0QjtNQUNBL0wsS0FBSyxHQUFHK00sYUFBYSxDQUFDbk4sTUFBRCxDQUFibU4sQ0FBc0JySSxNQUF0QnFJLENBQTZCLENBQTdCQSxDQUFSL007SUFDRDtJQUNEcU0sU0FBUyxDQUFDM0wsR0FBRCxDQUFUMkwsR0FBaUJyTSxLQUFqQnFNO0VBQ0QsQ0FFRDtFQUNBO0VBQ0EsTUFBTVcsU0FBUyxHQUFHelMsTUFBTSxDQUFDc0YsSUFBUHRGLENBQVlxRixNQUFackYsQ0FBbEI7RUFFQSxJQUNFNFIsbUJBQW1CLElBQ25CLENBQUNhLFNBQVMsQ0FBQzFELElBQVYwRCxDQUFnQnRNLEdBQUQsSUFBUzhMLGNBQWMsQ0FBQzdMLFFBQWY2TCxDQUF3QjlMLEdBQXhCOEwsQ0FBeEJRLENBRkgsRUFHRTtJQUNBLEtBQUssTUFBTXRNLEdBQVgsSUFBa0JzTSxTQUFsQixFQUE2QjtNQUMzQixJQUFJLEVBQUV0TSxHQUFHLElBQUkyTCxTQUFULENBQUosRUFBeUI7UUFDdkJBLFNBQVMsQ0FBQzNMLEdBQUQsQ0FBVDJMLEdBQWlCek0sTUFBTSxDQUFDYyxHQUFELENBQXZCMkw7TUFDRDtJQUNGO0VBQ0Y7RUFFRCxNQUFNWSxpQkFBaUIsR0FBR2hHLFdBQVcsQ0FBQy9JLFVBQVorSSxDQUF1QixHQUF2QkEsS0FBK0JwSixRQUF6RDtFQUVBLElBQUk7SUFDRitPLE1BQU0sR0FBSSxHQUFFSyxpQkFBaUIsR0FBR3BQLFFBQUgsR0FBYyxFQUFHLEdBQUU0TyxtQkFBbUIsQ0FDakU3TSxNQURpRSxDQUVqRSxFQUZGZ047SUFJQSxNQUFNLENBQUMzTixRQUFELEVBQVdvQyxJQUFYLElBQW1CdUwsTUFBTSxDQUFDbEUsS0FBUGtFLENBQWEsR0FBYkEsQ0FBekI7SUFDQVIsaUJBQWlCLENBQUNuTixRQUFsQm1OLEdBQTZCbk4sUUFBN0JtTjtJQUNBQSxpQkFBaUIsQ0FBQy9LLElBQWxCK0ssR0FBMEIsR0FBRS9LLElBQUksR0FBRyxHQUFILEdBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBRyxFQUF6RCtLO0lBQ0EsT0FBT0EsaUJBQWlCLENBQUNuQixNQUF6QjtFQUNELENBQUMsUUFBTzFQLEdBQVAsRUFBWTtJQUNaLElBQUlBLEdBQUcsQ0FBQ0csT0FBSkgsQ0FBWTJSLEtBQVozUixDQUFrQiw4Q0FBbEJBLENBQUosRUFBdUU7TUFDckUsTUFBTSxJQUFJSyxLQUFKLENBQ0gsd0tBREcsQ0FBTjtJQUdEO0lBQ0QsTUFBTUwsR0FBTjtFQUNELENBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTZRLGlCQUFpQixDQUFDOU0sS0FBbEI4TSxtQ0FDSzlNLEtBRHFCLEdBRXJCOE0saUJBQWlCLENBQUM5TSxLQUZHLENBQTFCOE07RUFLQSxPQUFPO0lBQ0xRLE1BREs7SUFFTFI7RUFGSyxDQUFQO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ITSxTQUFTZSxzQkFBVCxDQUNML0wsWUFESyxFQUVXO0VBQ2hCLE1BQU05QixLQUFxQixHQUFHLEVBQTlCO0VBQ0E4QixZQUFZLENBQUN4RyxPQUFid0csQ0FBcUIsQ0FBQ3BCLEtBQUQsRUFBUVUsR0FBUixLQUFnQjtJQUNuQyxJQUFJLE9BQU9wQixLQUFLLENBQUNvQixHQUFELENBQVosS0FBc0IsV0FBMUIsRUFBdUM7TUFDckNwQixLQUFLLENBQUNvQixHQUFELENBQUxwQixHQUFhVSxLQUFiVjtJQUNELENBRkQsTUFFTyxJQUFJL0MsS0FBSyxDQUFDQyxPQUFORCxDQUFjK0MsS0FBSyxDQUFDb0IsR0FBRCxDQUFuQm5FLENBQUosRUFBK0I7TUFDcEM7TUFBRStDLEtBQUssQ0FBQ29CLEdBQUQsQ0FBTixDQUF5QnZHLElBQXpCLENBQThCNkYsS0FBOUI7SUFDRixDQUZNLE1BRUE7TUFDTFYsS0FBSyxDQUFDb0IsR0FBRCxDQUFMcEIsR0FBYSxDQUFDQSxLQUFLLENBQUNvQixHQUFELENBQU4sRUFBdUJWLEtBQXZCLENBQWJWO0lBQ0Q7RUFDRixDQVJEOEI7RUFTQSxPQUFPOUIsS0FBUDtBQUNEO0FBRUQsU0FBUzhOLHNCQUFULENBQWdDck4sS0FBaEMsRUFBdUQ7RUFDckQsSUFDRSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQ0MsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QixDQUFDc04sS0FBSyxDQUFDdE4sS0FBRCxDQURwQyxJQUVBLE9BQU9BLEtBQVAsS0FBaUIsU0FIbkIsRUFJRTtJQUNBLE9BQU8rSyxNQUFNLENBQUMvSyxLQUFELENBQWI7RUFDRCxDQU5ELE1BTU87SUFDTCxPQUFPLEVBQVA7RUFDRDtBQUNGO0FBRU0sU0FBU2lMLHNCQUFULENBQ0xzQyxRQURLLEVBRVk7RUFDakIsTUFBTS9NLE1BQU0sR0FBRyxJQUFJZ04sZUFBSixFQUFmO0VBQ0FoVCxNQUFNLENBQUN1UyxPQUFQdlMsQ0FBZStTLFFBQWYvUyxFQUF5QkssT0FBekJMLENBQWlDLENBQUMsQ0FBQ21HLEdBQUQsRUFBTVYsS0FBTixDQUFELEtBQWtCO0lBQ2pELElBQUl6RCxLQUFLLENBQUNDLE9BQU5ELENBQWN5RCxLQUFkekQsQ0FBSixFQUEwQjtNQUN4QnlELEtBQUssQ0FBQ3BGLE9BQU5vRixDQUFld04sSUFBRCxJQUFVak4sTUFBTSxDQUFDa04sTUFBUGxOLENBQWNHLEdBQWRILEVBQW1CNk0sc0JBQXNCLENBQUNJLElBQUQsQ0FBekNqTixDQUF4QlA7SUFDRCxDQUZELE1BRU87TUFDTE8sTUFBTSxDQUFDZ0gsR0FBUGhILENBQVdHLEdBQVhILEVBQWdCNk0sc0JBQXNCLENBQUNwTixLQUFELENBQXRDTztJQUNEO0VBQ0YsQ0FORGhHO0VBT0EsT0FBT2dHLE1BQVA7QUFDRDtBQUVNLFNBQVNqRSxNQUFULENBQ0xvUixNQURLLEVBRUwsR0FBR0MsZ0JBRkUsRUFHWTtFQUNqQkEsZ0JBQWdCLENBQUMvUyxPQUFqQitTLENBQTBCdk0sWUFBRCxJQUFrQjtJQUN6QzdFLEtBQUssQ0FBQ3FSLElBQU5yUixDQUFXNkUsWUFBWSxDQUFDdkIsSUFBYnVCLEVBQVg3RSxFQUFnQzNCLE9BQWhDMkIsQ0FBeUNtRSxHQUFELElBQVNnTixNQUFNLENBQUNHLE1BQVBILENBQWNoTixHQUFkZ04sQ0FBakRuUjtJQUNBNkUsWUFBWSxDQUFDeEcsT0FBYndHLENBQXFCLENBQUNwQixLQUFELEVBQVFVLEdBQVIsS0FBZ0JnTixNQUFNLENBQUNELE1BQVBDLENBQWNoTixHQUFkZ04sRUFBbUIxTixLQUFuQjBOLENBQXJDdE07RUFDRCxDQUhEdU07RUFJQSxPQUFPRCxNQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTtBQUVBOzs7Ozs7QUFFQSxNQUFNSSxrQkFBa0IsR0FBRyx3QkFBVSxJQUFWLENBQTNCO0FBRWUsU0FBU0MsZUFBVCxDQUNiNUssTUFEYSxFQUVid0MsS0FGYSxFQUdiOUgsUUFIYSxFQUliaUksUUFKYSxFQUtieEcsS0FMYSxFQU1ic0IsV0FOYSxFQU9iO0VBQ0EsSUFBSSxDQUFDK0UsS0FBSyxDQUFDaEYsUUFBTmdGLENBQWV4QyxNQUFmd0MsQ0FBTCxFQUE2QjtJQUMzQixLQUFLLE1BQU1xSSxPQUFYLElBQXNCbEksUUFBdEIsRUFBZ0M7TUFDOUIsTUFBTWtHLE9BQU8sR0FBRzhCLGtCQUFrQixDQUFDRSxPQUFPLENBQUNDLE1BQVQsQ0FBbEM7TUFDQSxNQUFNck8sTUFBTSxHQUFHb00sT0FBTyxDQUFDN0ksTUFBRCxDQUF0QjtNQUVBLElBQUl2RCxNQUFKLEVBQVk7UUFDVixJQUFJLENBQUNvTyxPQUFPLENBQUMvRyxXQUFiLEVBQTBCO1VBQ3hCO1VBQ0E7UUFDRDtRQUNELE1BQU1pSCxPQUFPLEdBQUcsaUNBQ2RGLE9BQU8sQ0FBQy9HLFdBRE0sRUFFZHJILE1BRmMsRUFHZE4sS0FIYyxFQUlkLElBSmMsRUFLZDBPLE9BQU8sQ0FBQ25RLFFBQVJtUSxLQUFxQixLQUFyQkEsR0FBNkIsRUFBN0JBLEdBQWtDblEsUUFMcEIsQ0FBaEI7UUFPQXNGLE1BQU0sR0FBRytLLE9BQU8sQ0FBQzlCLGlCQUFSOEIsQ0FBMEJqUCxRQUFuQ2tFO1FBQ0E1SSxNQUFNLENBQUMrQixNQUFQL0IsQ0FBYytFLEtBQWQvRSxFQUFxQjJULE9BQU8sQ0FBQzlCLGlCQUFSOEIsQ0FBMEI1TyxLQUEvQy9FO1FBRUEsSUFBSW9MLEtBQUssQ0FBQ2hGLFFBQU5nRixDQUFlLHFEQUF3QnhDLE1BQXhCLENBQWZ3QyxDQUFKLEVBQXFEO1VBQ25EO1VBQ0E7VUFDQTtRQUNELENBRUQ7UUFDQSxNQUFNckUsWUFBWSxHQUFHVixXQUFXLENBQUN1QyxNQUFELENBQWhDO1FBRUEsSUFBSTdCLFlBQVksS0FBSzZCLE1BQWpCN0IsSUFBMkJxRSxLQUFLLENBQUNoRixRQUFOZ0YsQ0FBZXJFLFlBQWZxRSxDQUEvQixFQUE2RDtVQUMzRDtRQUNEO01BQ0Y7SUFDRjtFQUNGO0VBQ0QsT0FBT3hDLE1BQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxTQUFTZ0wsZUFBVCxDQUF5QjVILFVBQXpCLEVBQXVFO0VBQzVFLE1BQU07SUFBRWdELEVBQUY7SUFBTTdKO0VBQU4sSUFBaUI2RyxVQUF2QjtFQUNBLE9BQVF0SCxRQUFELElBQXlDO0lBQzlDLE1BQU11SCxVQUFVLEdBQUcrQyxFQUFFLENBQUM2RSxJQUFIN0UsQ0FBUXRLLFFBQVJzSyxDQUFuQjtJQUNBLElBQUksQ0FBQy9DLFVBQUwsRUFBaUI7TUFDZixPQUFPLEtBQVA7SUFDRDtJQUVELE1BQU02SCxNQUFNLEdBQUl0TyxLQUFELElBQW1CO01BQ2hDLElBQUk7UUFDRixPQUFPdU8sa0JBQWtCLENBQUN2TyxLQUFELENBQXpCO01BQ0QsQ0FBQyxRQUFPYixDQUFQLEVBQVU7UUFDVixNQUFNM0QsR0FBOEIsR0FBRyxJQUFJSyxLQUFKLENBQ3JDLHdCQURxQyxDQUF2QztRQUdBTCxHQUFHLENBQUNnVCxJQUFKaFQsR0FBVyxlQUFYQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtJQUNGLENBVkQ7SUFXQSxNQUFNcUUsTUFBa0QsR0FBRyxFQUEzRDtJQUVBckYsTUFBTSxDQUFDc0YsSUFBUHRGLENBQVltRixNQUFabkYsRUFBb0JLLE9BQXBCTCxDQUE2QmlVLFFBQUQsSUFBc0I7TUFDaEQsTUFBTUMsQ0FBQyxHQUFHL08sTUFBTSxDQUFDOE8sUUFBRCxDQUFoQjtNQUNBLE1BQU1FLENBQUMsR0FBR2xJLFVBQVUsQ0FBQ2lJLENBQUMsQ0FBQ0UsR0FBSCxDQUFwQjtNQUNBLElBQUlELENBQUMsS0FBS0UsU0FBVixFQUFxQjtRQUNuQmhQLE1BQU0sQ0FBQzRPLFFBQUQsQ0FBTjVPLEdBQW1CLENBQUM4TyxDQUFDLENBQUNsUixPQUFGa1IsQ0FBVSxHQUFWQSxDQUFELEdBQ2ZBLENBQUMsQ0FBQ2hHLEtBQUZnRyxDQUFRLEdBQVJBLEVBQWEvUSxHQUFiK1EsQ0FBa0JHLEtBQUQsSUFBV1IsTUFBTSxDQUFDUSxLQUFELENBQWxDSCxDQURlLEdBRWZELENBQUMsQ0FBQ3hPLE1BQUZ3TyxHQUNBLENBQUNKLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFQLENBREFELEdBRUFKLE1BQU0sQ0FBQ0ssQ0FBRCxDQUpWOU87TUFLRDtJQUNGLENBVkRyRjtJQVdBLE9BQU9xRixNQUFQO0VBQ0QsQ0EvQkQ7QUFnQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0M5QkQ7QUFDQTtBQUNBLFNBQVNrUCxXQUFULENBQXFCQyxHQUFyQixFQUFrQztFQUNoQyxPQUFPQSxHQUFHLENBQUMzTyxPQUFKMk8sQ0FBWSxzQkFBWkEsRUFBb0MsTUFBcENBLENBQVA7QUFDRDtBQUVELFNBQVNDLGNBQVQsQ0FBd0JqUCxLQUF4QixFQUF1QztFQUNyQyxNQUFNRyxRQUFRLEdBQUdILEtBQUssQ0FBQzdCLFVBQU42QixDQUFpQixHQUFqQkEsS0FBeUJBLEtBQUssQ0FBQ3JHLFFBQU5xRyxDQUFlLEdBQWZBLENBQTFDO0VBQ0EsSUFBSUcsUUFBSixFQUFjO0lBQ1pILEtBQUssR0FBR0EsS0FBSyxDQUFDcEcsS0FBTm9HLENBQVksQ0FBWkEsRUFBZSxDQUFDLENBQWhCQSxDQUFSQTtFQUNEO0VBQ0QsTUFBTUUsTUFBTSxHQUFHRixLQUFLLENBQUM3QixVQUFONkIsQ0FBaUIsS0FBakJBLENBQWY7RUFDQSxJQUFJRSxNQUFKLEVBQVk7SUFDVkYsS0FBSyxHQUFHQSxLQUFLLENBQUNwRyxLQUFOb0csQ0FBWSxDQUFaQSxDQUFSQTtFQUNEO0VBQ0QsT0FBTztJQUFFVyxHQUFHLEVBQUVYLEtBQVA7SUFBY0UsTUFBZDtJQUFzQkM7RUFBdEIsQ0FBUDtBQUNEO0FBRU0sU0FBUytPLGFBQVQsQ0FDTEMsZUFESyxFQU9MO0VBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUNELGVBQWUsQ0FBQzlPLE9BQWhCOE8sQ0FBd0IsS0FBeEJBLEVBQStCLEVBQS9CQSxLQUFzQyxHQUF2QyxFQUNkdlYsS0FEYyxDQUNSLENBRFEsRUFFZCtPLEtBRmMsQ0FFUixHQUZRLENBQWpCO0VBSUEsTUFBTWhKLE1BQXNDLEdBQUcsRUFBL0M7RUFDQSxJQUFJMFAsVUFBVSxHQUFHLENBQWpCO0VBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLFFBQVEsQ0FDaEN4UixHQUR3QndSLENBQ25CaEYsT0FBRCxJQUFhO0lBQ2hCLElBQUlBLE9BQU8sQ0FBQ2pNLFVBQVJpTSxDQUFtQixHQUFuQkEsS0FBMkJBLE9BQU8sQ0FBQ3pRLFFBQVJ5USxDQUFpQixHQUFqQkEsQ0FBL0IsRUFBc0Q7TUFDcEQsTUFBTTtRQUFFekosR0FBRjtRQUFPUixRQUFQO1FBQWlCRDtNQUFqQixJQUE0QitPLGNBQWMsQ0FBQzdFLE9BQU8sQ0FBQ3hRLEtBQVJ3USxDQUFjLENBQWRBLEVBQWlCLENBQUMsQ0FBbEJBLENBQUQsQ0FBaEQ7TUFDQXpLLE1BQU0sQ0FBQ2dCLEdBQUQsQ0FBTmhCLEdBQWM7UUFBRWlQLEdBQUcsRUFBRVMsVUFBVSxFQUFqQjtRQUFxQm5QLE1BQXJCO1FBQTZCQztNQUE3QixDQUFkUjtNQUNBLE9BQU9PLE1BQU0sR0FBSUMsUUFBUSxHQUFHLGFBQUgsR0FBbUIsUUFBL0IsR0FBMkMsV0FBeEQ7SUFDRCxDQUpELE1BSU87TUFDTCxPQUFRLElBQUc0TyxXQUFXLENBQUMzRSxPQUFELENBQVUsRUFBaEM7SUFDRDtFQUNGLENBVHdCZ0YsRUFVeEI3TyxJQVZ3QjZPLENBVW5CLEVBVm1CQSxDQUEzQixDQVlBO0VBQ0E7RUFDQSxXQUFtQyxFQThEbEM7RUFFRCxPQUFPO0lBQ0w1RixFQUFFLEVBQUUsSUFBSStGLE1BQUosQ0FBWSxJQUFHRCxrQkFBbUIsU0FBbEMsQ0FEQztJQUVMM1A7RUFGSyxDQUFQO0FBSUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhELDZJQXlRQTs7O0FBR08sU0FBUzZQLFFBQVQsQ0FDTHhGLEVBREssRUFFRjtFQUNILElBQUl5RixJQUFJLEdBQUcsS0FBWDtFQUNBLElBQUlqUCxNQUFKO0VBRUEsT0FBUSxDQUFDLEdBQUd4RixJQUFKLEtBQW9CO0lBQzFCLElBQUksQ0FBQ3lVLElBQUwsRUFBVztNQUNUQSxJQUFJLEdBQUcsSUFBUEE7TUFDQWpQLE1BQU0sR0FBR3dKLEVBQUUsQ0FBQyxHQUFHaFAsSUFBSixDQUFYd0Y7SUFDRDtJQUNELE9BQU9BLE1BQVA7RUFDRCxDQU5EO0FBT0Q7QUFFTSxTQUFTa1AsaUJBQVQsR0FBNkI7RUFDbEMsTUFBTTtJQUFFOUUsUUFBRjtJQUFZRCxRQUFaO0lBQXNCRztFQUF0QixJQUErQmxHLE1BQU0sQ0FBQ0csUUFBNUM7RUFDQSxPQUFRLEdBQUU2RixRQUFTLEtBQUlELFFBQVMsR0FBRUcsSUFBSSxHQUFHLE1BQU1BLElBQVQsR0FBZ0IsRUFBRyxFQUF6RDtBQUNEO0FBRU0sU0FBUzZFLE1BQVQsR0FBa0I7RUFDdkIsTUFBTTtJQUFFNU87RUFBRixJQUFXNkQsTUFBTSxDQUFDRyxRQUF4QjtFQUNBLE1BQU05RixNQUFNLEdBQUd5USxpQkFBaUIsRUFBaEM7RUFDQSxPQUFPM08sSUFBSSxDQUFDekYsU0FBTHlGLENBQWU5QixNQUFNLENBQUNOLE1BQXRCb0MsQ0FBUDtBQUNEO0FBRU0sU0FBUzZPLGNBQVQsQ0FBMkI3TSxTQUEzQixFQUF3RDtFQUM3RCxPQUFPLE9BQU9BLFNBQVAsS0FBcUIsUUFBckIsR0FDSEEsU0FERyxHQUVIQSxTQUFTLENBQUM5RixXQUFWOEYsSUFBeUJBLFNBQVMsQ0FBQy9GLElBQW5DK0YsSUFBMkMsU0FGL0M7QUFHRDtBQUVNLFNBQVM4TSxTQUFULENBQW1CM04sR0FBbkIsRUFBd0M7RUFDN0MsT0FBT0EsR0FBRyxDQUFDNE4sUUFBSjVOLElBQWdCQSxHQUFHLENBQUM2TixXQUEzQjtBQUNEO0FBRU0sZUFBZUMsbUJBQWYsQ0FJTG5OLEdBSkssRUFJNkJxSCxHQUo3QixFQUlrRDtFQUN2RCxVQUEyQztJQUFBO0lBQ3pDLHNCQUFJckgsR0FBRyxDQUFDb04sU0FBUixxQkFBSXBOLGVBQWUvRixlQUFuQixFQUFvQztNQUNsQyxNQUFNbkIsT0FBTyxHQUFJLElBQUdpVSxjQUFjLENBQ2hDL00sR0FEZ0MsQ0FFaEMsMEpBRkY7TUFHQSxNQUFNLElBQUloSCxLQUFKLENBQVVGLE9BQVYsQ0FBTjtJQUNEO0VBQ0YsQ0FDRDtFQUNBLE1BQU11RyxHQUFHLEdBQUdnSSxHQUFHLENBQUNoSSxHQUFKZ0ksSUFBWUEsR0FBRyxDQUFDQSxHQUFKQSxJQUFXQSxHQUFHLENBQUNBLEdBQUpBLENBQVFoSSxHQUEzQztFQUVBLElBQUksQ0FBQ1csR0FBRyxDQUFDL0YsZUFBVCxFQUEwQjtJQUN4QixJQUFJb04sR0FBRyxDQUFDQSxHQUFKQSxJQUFXQSxHQUFHLENBQUNuSCxTQUFuQixFQUE4QjtNQUM1QjtNQUNBLE9BQU87UUFDTGlFLFNBQVMsRUFBRSxNQUFNZ0osbUJBQW1CLENBQUM5RixHQUFHLENBQUNuSCxTQUFMLEVBQWdCbUgsR0FBRyxDQUFDQSxHQUFwQjtNQUQvQixDQUFQO0lBR0Q7SUFDRCxPQUFPLEVBQVA7RUFDRDtFQUVELE1BQU1yTixLQUFLLEdBQUcsTUFBTWdHLEdBQUcsQ0FBQy9GLGVBQUorRixDQUFvQnFILEdBQXBCckgsQ0FBcEI7RUFFQSxJQUFJWCxHQUFHLElBQUkyTixTQUFTLENBQUMzTixHQUFELENBQXBCLEVBQTJCO0lBQ3pCLE9BQU9yRixLQUFQO0VBQ0Q7RUFFRCxJQUFJLENBQUNBLEtBQUwsRUFBWTtJQUNWLE1BQU1sQixPQUFPLEdBQUksSUFBR2lVLGNBQWMsQ0FDaEMvTSxHQURnQyxDQUVoQywrREFBOERoRyxLQUFNLFlBRnRFO0lBR0EsTUFBTSxJQUFJaEIsS0FBSixDQUFVRixPQUFWLENBQU47RUFDRDtFQUVELFVBQTJDO0lBQ3pDLElBQUluQixNQUFNLENBQUNzRixJQUFQdEYsQ0FBWXFDLEtBQVpyQyxFQUFtQm1FLE1BQW5CbkUsS0FBOEIsQ0FBOUJBLElBQW1DLENBQUMwUCxHQUFHLENBQUNBLEdBQTVDLEVBQWlEO01BQy9Dek8sT0FBTyxDQUFDb0wsSUFBUnBMLENBQ0csR0FBRW1VLGNBQWMsQ0FDZi9NLEdBRGUsQ0FFZiw4S0FISnBIO0lBS0Q7RUFDRjtFQUVELE9BQU9vQixLQUFQO0FBQ0Q7QUFFTSxNQUFNcVQsYUFBYSxHQUFHLENBQzNCLE1BRDJCLEVBRTNCLE1BRjJCLEVBRzNCLE1BSDJCLEVBSTNCLFVBSjJCLEVBSzNCLE1BTDJCLEVBTTNCLE1BTjJCLEVBTzNCLFVBUDJCLEVBUTNCLE1BUjJCLEVBUzNCLFVBVDJCLEVBVTNCLE9BVjJCLEVBVzNCLFFBWDJCLEVBWTNCLFNBWjJCLENBQXRCOztBQWVBLFNBQVNDLG9CQUFULENBQThCdFIsR0FBOUIsRUFBc0Q7RUFDM0QsVUFBNEM7SUFDMUMsSUFBSUEsR0FBRyxLQUFLLElBQVJBLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFuQyxFQUE2QztNQUMzQ3JFLE1BQU0sQ0FBQ3NGLElBQVB0RixDQUFZcUUsR0FBWnJFLEVBQWlCSyxPQUFqQkwsQ0FBMEJtRyxHQUFELElBQVM7UUFDaEMsSUFBSXVQLGFBQWEsQ0FBQ3pTLE9BQWR5UyxDQUFzQnZQLEdBQXRCdVAsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztVQUNyQ3pVLE9BQU8sQ0FBQ29MLElBQVJwTCxDQUNHLHFEQUFvRGtGLEdBQUksRUFEM0RsRjtRQUdEO01BQ0YsQ0FORGpCO0lBT0Q7RUFDRjtFQUVELE9BQU8sMEJBQVVxRSxHQUFWLENBQVA7QUFDRDtBQUVNLE1BQU11UixFQUFFLEdBQUcsT0FBTy9LLFdBQVAsS0FBdUIsV0FBbEM7O0FBQ0EsTUFBTUQsRUFBRSxHQUNiZ0wsRUFBRSxJQUNGLE9BQU8vSyxXQUFXLENBQUNDLElBQW5CLEtBQTRCLFVBRDVCOEssSUFFQSxPQUFPL0ssV0FBVyxDQUFDZ0wsT0FBbkIsS0FBK0IsVUFIMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzt5REFrQkE7Ozs7QUFJQSxlQUFlQyxrQkFBZixDQUFrQztFQUNoQ3ZOLFNBRGdDO0VBRWhDbUg7QUFGZ0MsQ0FBbEMsRUFHeUM7RUFDdkMsTUFBTWxELFNBQVMsR0FBRyxNQUFNLGdDQUFvQmpFLFNBQXBCLEVBQStCbUgsR0FBL0IsQ0FBeEI7RUFDQSxPQUFPO0lBQUVsRDtFQUFGLENBQVA7QUFDRDtBQUVjLE1BQU1uRSxHQUFOLFNBQTJDOUcsZUFBTWdILFNBRzlEO0VBSUE7RUFDQTtFQUNBO0VBQ0F3TixpQkFBaUIsQ0FBQzdVLEtBQUQsRUFBZThVLFVBQWYsRUFBNEM7SUFDM0QsTUFBTTlVLEtBQU47RUFDRDtFQUVEK1UsTUFBTSxHQUFHO0lBQ1AsTUFBTTtNQUFFelcsTUFBRjtNQUFVK0ksU0FBVjtNQUFxQmlFLFNBQXJCO01BQWdDekMsT0FBaEM7TUFBeUNDO0lBQXpDLElBQXFELEtBQ3hEM0gsS0FESDtJQUdBLG9CQUNFLDZCQUFDLFNBQUQsb0JBQ01tSyxTQUROO0lBR0k7SUFDQTtJQUNJLEVBQUV6QyxPQUFPLElBQUlDLE9BQWIsSUFBd0I7TUFBRTNGLEdBQUcsRUFBRTZSLFNBQVMsQ0FBQzFXLE1BQUQ7SUFBaEIsQ0FBeEIsR0FBcUQsRUFMN0QsRUFERjtFQVVEO0FBekJEOztBQUhtQjZJLEcsQ0FJWjlGLG1CLEdBQXNCdVQsa0I7QUFKVnpOLEcsQ0FLWi9GLGUsR0FBa0J3VCxrQjtBQTBCM0IsSUFBSUssYUFBSjtBQUNBLElBQUlDLE9BQUo7QUFFQSxVQUEyQztFQUN6Q0QsYUFBYSxHQUFHLHFCQUFTLE1BQU07SUFDN0JsVixPQUFPLENBQUNvTCxJQUFScEwsQ0FDRywwSUFESEE7RUFHRCxDQUplLENBQWhCa1Y7RUFNQUMsT0FBTyxHQUFHLHFCQUFTLE1BQU07SUFDdkJuVixPQUFPLENBQUNDLEtBQVJELENBQ0cseUZBREhBO0VBR0QsQ0FKUyxDQUFWbVY7QUFLRCxDQUVEO0FBQ08sU0FBU0MsU0FBVCxDQUFtQnhLLENBQW5CLEVBQTJCO0VBQ2hDLFVBQTJDc0ssYUFBYTtFQUN4RCxPQUFPdEssQ0FBQyxDQUFDeUssUUFBVDtBQUNEO0FBRU0sS0FMU0QsU0FBVDtBQUtBLFNBQVNILFNBQVQsQ0FBbUIxVyxNQUFuQixFQUFtQztFQUN4QztFQUNBLE1BQU07SUFBRWtGLFFBQUY7SUFBWWtFLE1BQVo7SUFBb0I3RDtFQUFwQixJQUE4QnZGLE1BQXBDO0VBQ0EsT0FBTztJQUNMLElBQUl1RixLQUFKLEdBQVk7TUFDVixVQUEyQ3FSLE9BQU87TUFDbEQsT0FBT3JSLEtBQVA7SUFDRCxDQUpJO0lBS0wsSUFBSUwsUUFBSixHQUFlO01BQ2IsVUFBMkMwUixPQUFPO01BQ2xELE9BQU8xUixRQUFQO0lBQ0QsQ0FSSTtJQVNMLElBQUlrRSxNQUFKLEdBQWE7TUFDWCxVQUEyQ3dOLE9BQU87TUFDbEQsT0FBT3hOLE1BQVA7SUFDRCxDQVpJO0lBYUw0QixJQUFJLEVBQUUsTUFBTTtNQUNWLFVBQTJDNEwsT0FBTztNQUNsRDVXLE1BQU0sQ0FBQ2dMLElBQVBoTDtJQUNELENBaEJJO0lBaUJMSSxJQUFJLEVBQUUsQ0FBQ3lFLEdBQUQsRUFBYytDLEVBQWQsS0FBOEI7TUFDbEMsVUFBMkNnUCxPQUFPO01BQ2xELE9BQU81VyxNQUFNLENBQUNJLElBQVBKLENBQVk2RSxHQUFaN0UsRUFBaUI0SCxFQUFqQjVILENBQVA7SUFDRCxDQXBCSTtJQXFCTCtXLE1BQU0sRUFBRSxDQUFDaFEsSUFBRCxFQUFlYSxFQUFmLEtBQStCO01BQ3JDLFVBQTJDZ1AsT0FBTztNQUNsRCxNQUFNSSxTQUFTLEdBQUdwUCxFQUFFLEdBQUdiLElBQUgsR0FBVSxFQUE5QjtNQUNBLE1BQU1rUSxPQUFPLEdBQUdyUCxFQUFFLElBQUliLElBQXRCO01BRUEsT0FBTy9HLE1BQU0sQ0FBQ0ksSUFBUEosQ0FBWWdYLFNBQVpoWCxFQUF1QmlYLE9BQXZCalgsQ0FBUDtJQUNELENBM0JJO0lBNEJMcUcsT0FBTyxFQUFFLENBQUN4QixHQUFELEVBQWMrQyxFQUFkLEtBQThCO01BQ3JDLFVBQTJDZ1AsT0FBTztNQUNsRCxPQUFPNVcsTUFBTSxDQUFDcUcsT0FBUHJHLENBQWU2RSxHQUFmN0UsRUFBb0I0SCxFQUFwQjVILENBQVA7SUFDRCxDQS9CSTtJQWdDTGtYLFNBQVMsRUFBRSxDQUFDblEsSUFBRCxFQUFlYSxFQUFmLEtBQStCO01BQ3hDLFVBQTJDZ1AsT0FBTztNQUNsRCxNQUFNTyxZQUFZLEdBQUd2UCxFQUFFLEdBQUdiLElBQUgsR0FBVSxFQUFqQztNQUNBLE1BQU1xUSxVQUFVLEdBQUd4UCxFQUFFLElBQUliLElBQXpCO01BRUEsT0FBTy9HLE1BQU0sQ0FBQ3FHLE9BQVByRyxDQUFlbVgsWUFBZm5YLEVBQTZCb1gsVUFBN0JwWCxDQUFQO0lBQ0Q7RUF0Q0ksQ0FBUDtBQXdDRDtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsNEZBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOE1BQThNOztBQUU5TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFX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QUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdjNEYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxpRkFBNEI7QUFDdkQiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwibmV4dC9kaXN0L3BhZ2VzL19hcHBcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSb3V0ZXJDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxOZXh0Um91dGVyPihudWxsIGFzIGFueSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdSb3V0ZXJDb250ZXh0J1xufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IHJlcXVpcmUoJy4vbGliL2hhcycpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7IC8qKi8gfVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArXG4gICAgICAgICAgICAgICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjE0LjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjE0LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
