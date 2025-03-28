module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 16));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 16: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("VDXt");

      /***/
    },

    /***/ "2+G7": /***/ function (module, exports) {
      module.exports = require("styled-jsx/server");

      /***/
    },

    /***/ AXZJ: /***/ function (module, exports, __webpack_require__) {
      "use strict";
      exports.__esModule = true;
      exports.htmlEscapeJsonString = htmlEscapeJsonString; // This utility is based on https://github.com/zertosh/htmlescape
      // License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
      const ESCAPE_LOOKUP = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
      };
      const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
      function htmlEscapeJsonString(str) {
        return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
      }
      //# sourceMappingURL=htmlescape.js.map

      /***/
    },

    /***/ GsEv: /***/ function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var ReactPropTypesSecret = __webpack_require__("luDK");

      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      emptyFunctionWithReset.resetWarningCache = emptyFunction;

      module.exports = function () {
        function shim(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
          }
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
              "Use PropTypes.checkPropTypes() to call them. " +
              "Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        // Important!
        // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,

          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,

          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction,
        };

        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
      };

      /***/
    },

    /***/ UJjI: /***/ function (module, exports) {
      module.exports = require("next/dist/next-server/lib/constants.js");

      /***/
    },

    /***/ VDXt: /***/ function (module, exports, __webpack_require__) {
      "use strict";

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
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
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
      function _defineProperty(e, r, t) {
        return (
          (r = _toPropertyKey(r)) in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
      }
      function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      exports.__esModule = true;
      exports.Html = Html;
      exports.Main = Main;
      exports.NextScript = exports.Head = exports.default = void 0;
      var _propTypes = _interopRequireDefault(__webpack_require__("lgD3"));
      var _react = _interopRequireWildcard(__webpack_require__("cDcd"));
      var _server = _interopRequireDefault(__webpack_require__("2+G7"));
      var _constants = __webpack_require__("UJjI");
      var _documentContext = __webpack_require__("nMq/");
      var _utils = __webpack_require__("kYf9");
      exports.DocumentContext = _utils.DocumentContext;
      exports.DocumentInitialProps = _utils.DocumentInitialProps;
      exports.DocumentProps = _utils.DocumentProps;
      var _getPageFiles = __webpack_require__("vHio");
      var _utils2 = __webpack_require__("ri/Y");
      var _htmlescape = __webpack_require__("AXZJ");
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }
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
      function dedupe(bundles) {
        const files = new Set();
        const kept = [];
        for (const bundle of bundles) {
          if (files.has(bundle.file)) continue;
          files.add(bundle.file);
          kept.push(bundle);
        }
        return kept;
      }
      function getOptionalModernScriptVariant(path) {
        if (false) {
        }
        return path;
      }
      function getDocumentFiles(buildManifest, pathname) {
        const sharedFiles = (0, _getPageFiles.getPageFiles)(
          buildManifest,
          "/_app"
        );
        const pageFiles =
          pathname !== "/_error"
            ? (0, _getPageFiles.getPageFiles)(buildManifest, pathname)
            : [];
        return {
          sharedFiles,
          pageFiles,
          allFiles: [...new Set([...sharedFiles, ...pageFiles])],
        };
      }
      /**
       * `Document` component handles the initial `document` markup and renders only on the server side.
       * Commonly used for implementing server side rendering for `css-in-js` libraries.
       */
      class Document extends _react.Component {
        /**
         * `getInitialProps` hook returns the context object with the addition of `renderPage`.
         * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
         */
        static async getInitialProps(ctx) {
          const enhanceApp = (App) => {
            return (props) =>
              /*#__PURE__*/ _react.default.createElement(App, props);
          };
          const { html, head } = await ctx.renderPage({
            enhanceApp,
          });
          const styles = [...(0, _server.default)()];
          return {
            html,
            head,
            styles,
          };
        }
        static renderDocument(DocumentComponent, props) {
          return /*#__PURE__*/ _react.default.createElement(
            _documentContext.DocumentContext.Provider,
            {
              value: props,
            },
            /*#__PURE__*/ _react.default.createElement(DocumentComponent, props)
          );
        }
        render() {
          return /*#__PURE__*/ _react.default.createElement(
            Html,
            null,
            /*#__PURE__*/ _react.default.createElement(Head, null),
            /*#__PURE__*/ _react.default.createElement(
              "body",
              null,
              /*#__PURE__*/ _react.default.createElement(Main, null),
              /*#__PURE__*/ _react.default.createElement(NextScript, null)
            )
          );
        }
      }
      exports.default = Document;
      Document.headTagsMiddleware = false ? undefined : () => [];
      function Html(props) {
        const { inAmpMode, docComponentsRendered, locale } = (0,
        _react.useContext)(_documentContext.DocumentContext);
        docComponentsRendered.Html = true;
        return /*#__PURE__*/ _react.default.createElement(
          "html",
          Object.assign({}, props, {
            lang: props.lang || locale || undefined,
            amp: inAmpMode ? "" : undefined,
            "data-ampdevmode": inAmpMode && false ? "" : undefined,
          })
        );
      }
      class Head extends _react.Component {
        constructor(...args) {
          super(...args);
          this.context = void 0;
        }
        getCssLinks(files) {
          const {
            assetPrefix,
            devOnlyCacheBusterQueryString,
            dynamicImports,
          } = this.context;
          const cssFiles = files.allFiles.filter((f) => f.endsWith(".css"));
          const sharedFiles = new Set(files.sharedFiles);
          let dynamicCssFiles = dedupe(
            dynamicImports.filter((f) => f.file.endsWith(".css"))
          ).map((f) => f.file);
          if (dynamicCssFiles.length) {
            const existing = new Set(cssFiles);
            dynamicCssFiles = dynamicCssFiles.filter(
              (f) => !(existing.has(f) || sharedFiles.has(f))
            );
            cssFiles.push(...dynamicCssFiles);
          }
          const cssLinkElements = [];
          cssFiles.forEach((file) => {
            const isSharedFile = sharedFiles.has(file);
            cssLinkElements.push(
              /*#__PURE__*/ _react.default.createElement("link", {
                key: `${file}-preload`,
                nonce: this.props.nonce,
                rel: "preload",
                href: `${assetPrefix}/_next/${encodeURI(
                  file
                )}${devOnlyCacheBusterQueryString}`,
                as: "style",
                crossOrigin: this.props.crossOrigin || undefined,
              }),
              /*#__PURE__*/ _react.default.createElement("link", {
                key: file,
                nonce: this.props.nonce,
                rel: "stylesheet",
                href: `${assetPrefix}/_next/${encodeURI(
                  file
                )}${devOnlyCacheBusterQueryString}`,
                crossOrigin: this.props.crossOrigin || undefined,
                "data-n-g": isSharedFile ? "" : undefined,
                "data-n-p": isSharedFile ? undefined : "",
              })
            );
          });
          return cssLinkElements.length === 0 ? null : cssLinkElements;
        }
        getPreloadDynamicChunks() {
          const {
            dynamicImports,
            assetPrefix,
            devOnlyCacheBusterQueryString,
          } = this.context;
          return dedupe(dynamicImports)
            .map((bundle) => {
              // `dynamicImports` will contain both `.js` and `.module.js` when the
              // feature is enabled. This clause will filter down to the modern
              // variants only.
              if (
                !bundle.file.endsWith(getOptionalModernScriptVariant(".js"))
              ) {
                return null;
              }
              return /*#__PURE__*/ _react.default.createElement("link", {
                rel: "preload",
                key: bundle.file,
                href: `${assetPrefix}/_next/${encodeURI(
                  bundle.file
                )}${devOnlyCacheBusterQueryString}`,
                as: "script",
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || undefined,
              });
            }) // Filter out nulled scripts
            .filter(Boolean);
        }
        getPreloadMainLinks(files) {
          const { assetPrefix, devOnlyCacheBusterQueryString } = this.context;
          const preloadFiles = files.allFiles.filter((file) => {
            // `dynamicImports` will contain both `.js` and `.module.js` when
            // the feature is enabled. This clause will filter down to the
            // modern variants only.
            return file.endsWith(getOptionalModernScriptVariant(".js"));
          });
          return !preloadFiles.length
            ? null
            : preloadFiles.map((file) =>
                /*#__PURE__*/ _react.default.createElement("link", {
                  key: file,
                  nonce: this.props.nonce,
                  rel: "preload",
                  href: `${assetPrefix}/_next/${encodeURI(
                    file
                  )}${devOnlyCacheBusterQueryString}`,
                  as: "script",
                  crossOrigin: this.props.crossOrigin || undefined,
                })
              );
        }
        makeStylesheetInert(node) {
          return _react.default.Children.map(node, (c) => {
            if (
              c.type === "link" &&
              c.props["href"] &&
              _constants.OPTIMIZED_FONT_PROVIDERS.some((url) =>
                c.props["href"].startsWith(url)
              )
            ) {
              const newProps = _objectSpread({}, c.props || {});
              newProps["data-href"] = newProps["href"];
              newProps["href"] = undefined;
              return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            } else if (c.props && c.props["children"]) {
              c.props["children"] = this.makeStylesheetInert(
                c.props["children"]
              );
            }
            return c;
          });
        }
        render() {
          const {
            styles,
            ampPath,
            inAmpMode,
            hybridAmp,
            canonicalBase,
            __NEXT_DATA__,
            dangerousAsPath,
            headTags,
            unstable_runtimeJS,
          } = this.context;
          const disableRuntimeJS = unstable_runtimeJS === false;
          this.context.docComponentsRendered.Head = true;
          let { head } = this.context;
          let children = this.props.children; // show a warning if Head contains <title> (only in development)
          if (false) {
          }
          if (false) {
          }
          let hasAmphtmlRel = false;
          let hasCanonicalRel = false; // show warning and remove conflicting amp head tags
          head = _react.default.Children.map(head || [], (child) => {
            if (!child) return child;
            const { type, props } = child;
            if (inAmpMode) {
              let badProp = "";
              if (type === "meta" && props.name === "viewport") {
                badProp = 'name="viewport"';
              } else if (type === "link" && props.rel === "canonical") {
                hasCanonicalRel = true;
              } else if (type === "script") {
                // only block if
                // 1. it has a src and isn't pointing to ampproject's CDN
                // 2. it is using dangerouslySetInnerHTML without a type or
                // a type of text/javascript
                if (
                  (props.src && props.src.indexOf("ampproject") < -1) ||
                  (props.dangerouslySetInnerHTML &&
                    (!props.type || props.type === "text/javascript"))
                ) {
                  badProp = "<script";
                  Object.keys(props).forEach((prop) => {
                    badProp += ` ${prop}="${props[prop]}"`;
                  });
                  badProp += "/>";
                }
              }
              if (badProp) {
                console.warn(
                  `Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`
                );
                return null;
              }
            } else {
              // non-amp mode
              if (type === "link" && props.rel === "amphtml") {
                hasAmphtmlRel = true;
              }
            }
            return child;
          }); // try to parse styles from fragment for backwards compat
          const curStyles = Array.isArray(styles) ? styles : [];
          if (
            inAmpMode &&
            styles &&
            // @ts-ignore Property 'props' does not exist on type ReactElement
            styles.props &&
            // @ts-ignore Property 'props' does not exist on type ReactElement
            Array.isArray(styles.props.children)
          ) {
            const hasStyles = (el) => {
              var _el$props, _el$props$dangerously;
              return el == null
                ? void 0
                : (_el$props = el.props) == null
                ? void 0
                : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) ==
                  null
                ? void 0
                : _el$props$dangerously.__html;
            }; // @ts-ignore Property 'props' does not exist on type ReactElement
            styles.props.children.forEach((child) => {
              if (Array.isArray(child)) {
                child.forEach((el) => hasStyles(el) && curStyles.push(el));
              } else if (hasStyles(child)) {
                curStyles.push(child);
              }
            });
          }
          const files = getDocumentFiles(
            this.context.buildManifest,
            this.context.__NEXT_DATA__.page
          );
          return /*#__PURE__*/ _react.default.createElement(
            "head",
            this.props,
            this.context.isDevelopment &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement("style", {
                  "data-next-hide-fouc": true,
                  "data-ampdevmode": inAmpMode ? "true" : undefined,
                  dangerouslySetInnerHTML: {
                    __html: `body{display:none}`,
                  },
                }),
                /*#__PURE__*/ _react.default.createElement(
                  "noscript",
                  {
                    "data-next-hide-fouc": true,
                    "data-ampdevmode": inAmpMode ? "true" : undefined,
                  },
                  /*#__PURE__*/ _react.default.createElement("style", {
                    dangerouslySetInnerHTML: {
                      __html: `body{display:block}`,
                    },
                  })
                )
              ),
            children,
            head,
            inAmpMode &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement("meta", {
                  name: "viewport",
                  content: "width=device-width,minimum-scale=1,initial-scale=1",
                }),
                !hasCanonicalRel &&
                  /*#__PURE__*/ _react.default.createElement("link", {
                    rel: "canonical",
                    href:
                      canonicalBase +
                      (0, _utils2.cleanAmpPath)(dangerousAsPath),
                  }),
                /*#__PURE__*/ _react.default.createElement("link", {
                  rel: "preload",
                  as: "script",
                  href: "https://cdn.ampproject.org/v0.js",
                }),
                styles &&
                  /*#__PURE__*/ _react.default.createElement("style", {
                    "amp-custom": "",
                    dangerouslySetInnerHTML: {
                      __html: curStyles
                        .map(
                          (style) => style.props.dangerouslySetInnerHTML.__html
                        )
                        .join("")
                        .replace(/\/\*# sourceMappingURL=.*\*\//g, "")
                        .replace(/\/\*@ sourceURL=.*?\*\//g, ""),
                    },
                  }),
                /*#__PURE__*/ _react.default.createElement("style", {
                  "amp-boilerplate": "",
                  dangerouslySetInnerHTML: {
                    __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
                  },
                }),
                /*#__PURE__*/ _react.default.createElement(
                  "noscript",
                  null,
                  /*#__PURE__*/ _react.default.createElement("style", {
                    "amp-boilerplate": "",
                    dangerouslySetInnerHTML: {
                      __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
                    },
                  })
                ),
                /*#__PURE__*/ _react.default.createElement("script", {
                  async: true,
                  src: "https://cdn.ampproject.org/v0.js",
                })
              ),
            !inAmpMode &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                !hasAmphtmlRel &&
                  hybridAmp &&
                  /*#__PURE__*/ _react.default.createElement("link", {
                    rel: "amphtml",
                    href: canonicalBase + getAmpPath(ampPath, dangerousAsPath),
                  }),
                false ? undefined : this.getCssLinks(files),
                /*#__PURE__*/ _react.default.createElement("noscript", {
                  "data-n-css": true,
                }),
                !disableRuntimeJS && this.getPreloadDynamicChunks(),
                !disableRuntimeJS && this.getPreloadMainLinks(files),
                this.context.isDevelopment /*#__PURE__*/ && // this element is used to mount development styles so the
                  // ordering matches production
                  // (by default, style-loader injects at the bottom of <head />)
                  _react.default.createElement("noscript", {
                    id: "__next_css__DO_NOT_USE__",
                  }),
                styles || null
              ),
            /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              {},
              ...(headTags || [])
            )
          );
        }
      }
      exports.Head = Head;
      Head.contextType = _documentContext.DocumentContext;
      Head.propTypes = {
        nonce: _propTypes.default.string,
        crossOrigin: _propTypes.default.string,
      };
      function Main() {
        const { inAmpMode, html, docComponentsRendered } = (0,
        _react.useContext)(_documentContext.DocumentContext);
        docComponentsRendered.Main = true;
        if (inAmpMode)
          return /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            _constants.AMP_RENDER_TARGET
          );
        return /*#__PURE__*/ _react.default.createElement("div", {
          id: "__next",
          dangerouslySetInnerHTML: {
            __html: html,
          },
        });
      }
      class NextScript extends _react.Component {
        constructor(...args) {
          super(...args);
          this.context = void 0;
        }
        getDynamicChunks(files) {
          const {
            dynamicImports,
            assetPrefix,
            isDevelopment,
            devOnlyCacheBusterQueryString,
          } = this.context;
          return dedupe(dynamicImports).map((bundle) => {
            let modernProps = {};
            if (false) {
            }
            if (
              !bundle.file.endsWith(".js") ||
              files.allFiles.includes(bundle.file)
            )
              return null;
            return /*#__PURE__*/ _react.default.createElement(
              "script",
              Object.assign(
                {
                  async: !isDevelopment,
                  key: bundle.file,
                  src: `${assetPrefix}/_next/${encodeURI(
                    bundle.file
                  )}${devOnlyCacheBusterQueryString}`,
                  nonce: this.props.nonce,
                  crossOrigin: this.props.crossOrigin || undefined,
                },
                modernProps
              )
            );
          });
        }
        getScripts(files) {
          var _buildManifest$lowPri;
          const {
            assetPrefix,
            buildManifest,
            isDevelopment,
            devOnlyCacheBusterQueryString,
          } = this.context;
          const normalScripts = files.allFiles.filter((file) =>
            file.endsWith(".js")
          );
          const lowPriorityScripts =
            (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null
              ? void 0
              : _buildManifest$lowPri.filter((file) => file.endsWith(".js"));
          return [...normalScripts, ...lowPriorityScripts].map((file) => {
            let modernProps = {};
            if (false) {
            }
            return /*#__PURE__*/ _react.default.createElement(
              "script",
              Object.assign(
                {
                  key: file,
                  src: `${assetPrefix}/_next/${encodeURI(
                    file
                  )}${devOnlyCacheBusterQueryString}`,
                  nonce: this.props.nonce,
                  async: !isDevelopment,
                  crossOrigin: this.props.crossOrigin || undefined,
                },
                modernProps
              )
            );
          });
        }
        getPolyfillScripts() {
          // polyfills.js has to be rendered as nomodule without async
          // It also has to be the first script to load
          const {
            assetPrefix,
            buildManifest,
            devOnlyCacheBusterQueryString,
          } = this.context;
          return buildManifest.polyfillFiles
            .filter(
              (polyfill) =>
                polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")
            )
            .map((polyfill) =>
              /*#__PURE__*/ _react.default.createElement("script", {
                key: polyfill,
                nonce: this.props.nonce,
                crossOrigin: this.props.crossOrigin || undefined,
                noModule: true,
                src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`,
              })
            );
        }
        static getInlineScriptSource(documentProps) {
          const { __NEXT_DATA__ } = documentProps;
          try {
            const data = JSON.stringify(__NEXT_DATA__);
            return (0, _htmlescape.htmlEscapeJsonString)(data);
          } catch (err) {
            if (err.message.indexOf("circular structure")) {
              throw new Error(
                `Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`
              );
            }
            throw err;
          }
        }
        render() {
          const {
            assetPrefix,
            inAmpMode,
            buildManifest,
            unstable_runtimeJS,
            docComponentsRendered,
            devOnlyCacheBusterQueryString,
          } = this.context;
          const disableRuntimeJS = unstable_runtimeJS === false;
          docComponentsRendered.NextScript = true;
          if (inAmpMode) {
            if (true) {
              return null;
            }
            const ampDevFiles = [
              ...buildManifest.devFiles,
              ...buildManifest.ampDevFiles,
            ];
            return /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              disableRuntimeJS
                ? null
                : /*#__PURE__*/ _react.default.createElement("script", {
                    id: "__NEXT_DATA__",
                    type: "application/json",
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || undefined,
                    dangerouslySetInnerHTML: {
                      __html: NextScript.getInlineScriptSource(this.context),
                    },
                    "data-ampdevmode": true,
                  }),
              ampDevFiles.map((file) =>
                /*#__PURE__*/ _react.default.createElement("script", {
                  key: file,
                  src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
                  nonce: this.props.nonce,
                  crossOrigin: this.props.crossOrigin || undefined,
                  "data-ampdevmode": true,
                })
              )
            );
          }
          if (false) {
          }
          const files = getDocumentFiles(
            this.context.buildManifest,
            this.context.__NEXT_DATA__.page
          );
          return /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            !disableRuntimeJS && buildManifest.devFiles
              ? buildManifest.devFiles.map((file) =>
                  /*#__PURE__*/ _react.default.createElement("script", {
                    key: file,
                    src: `${assetPrefix}/_next/${encodeURI(
                      file
                    )}${devOnlyCacheBusterQueryString}`,
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || undefined,
                  })
                )
              : null,
            disableRuntimeJS
              ? null
              : /*#__PURE__*/ _react.default.createElement("script", {
                  id: "__NEXT_DATA__",
                  type: "application/json",
                  nonce: this.props.nonce,
                  crossOrigin: this.props.crossOrigin || undefined,
                  dangerouslySetInnerHTML: {
                    __html: NextScript.getInlineScriptSource(this.context),
                  },
                }),
            false ? /*#__PURE__*/ undefined : null,
            !disableRuntimeJS && this.getPolyfillScripts(),
            disableRuntimeJS ? null : this.getDynamicChunks(files),
            disableRuntimeJS ? null : this.getScripts(files)
          );
        }
      }
      exports.NextScript = NextScript;
      NextScript.contextType = _documentContext.DocumentContext;
      NextScript.propTypes = {
        nonce: _propTypes.default.string,
        crossOrigin: _propTypes.default.string,
      };
      NextScript.safariNomoduleFix =
        '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
      function getAmpPath(ampPath, asPath) {
        return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
      }

      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require("react");

      /***/
    },

    /***/ kYf9: /***/ function (module, exports) {
      module.exports = require("next/dist/next-server/lib/utils.js");

      /***/
    },

    /***/ lgD3: /***/ function (module, exports, __webpack_require__) {
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      if (false) {
        var throwOnDirectAccess, ReactIs;
      } else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__("GsEv")();
      }

      /***/
    },

    /***/ luDK: /***/ function (module, exports, __webpack_require__) {
      "use strict";
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

      module.exports = ReactPropTypesSecret;

      /***/
    },

    /***/ "nMq/": /***/ function (module, exports) {
      module.exports = require("next/dist/next-server/lib/document-context.js");

      /***/
    },

    /***/ "ri/Y": /***/ function (module, exports) {
      module.exports = require("next/dist/next-server/server/utils.js");

      /***/
    },

    /***/ vHio: /***/ function (module, exports) {
      module.exports = require("next/dist/next-server/server/get-page-files.js");

      /***/
    },

    /******/
  }
);
