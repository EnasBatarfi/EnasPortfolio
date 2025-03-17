_N_E = (window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([
  ["amp"],
  {
    /***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
      /*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (e, n) {
          return (
            (n = n || {}),
            new Promise(function (t, r) {
              var s = new XMLHttpRequest(),
                o = [],
                u = [],
                i = {},
                a = function () {
                  return {
                    ok: 2 == ((s.status / 100) | 0),
                    statusText: s.statusText,
                    status: s.status,
                    url: s.responseURL,
                    text: function () {
                      return Promise.resolve(s.responseText);
                    },
                    json: function () {
                      return Promise.resolve(JSON.parse(s.responseText));
                    },
                    blob: function () {
                      return Promise.resolve(new Blob([s.response]));
                    },
                    clone: a,
                    headers: {
                      keys: function () {
                        return o;
                      },
                      entries: function () {
                        return u;
                      },
                      get: function (e) {
                        return i[e.toLowerCase()];
                      },
                      has: function (e) {
                        return e.toLowerCase() in i;
                      },
                    },
                  };
                };
              for (var l in (s.open(n.method || "get", e, !0),
              (s.onload = function () {
                s
                  .getAllResponseHeaders()
                  .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
                    o.push((n = n.toLowerCase())),
                      u.push([n, t]),
                      (i[n] = i[n] ? i[n] + "," + t : t);
                  }),
                  t(a());
              }),
              (s.onerror = r),
              (s.withCredentials = "include" == n.credentials),
              n.headers))
                s.setRequestHeader(l, n.headers[l]);
              s.send(n.body || null);
            })
          );
        };
        //# sourceMappingURL=unfetch.js.map

        /***/
      },

    /***/ "./node_modules/next/dist/client/dev/amp-dev.js":
      /*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _interopRequireDefault = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
          );
          var _unfetch = _interopRequireDefault(
            __webpack_require__(
              /*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"
            )
          );
          var _eventSourcePolyfill = _interopRequireDefault(
            __webpack_require__(
              /*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"
            )
          );
          var _eventsource = __webpack_require__(
            /*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"
          );
          var _onDemandEntriesUtils = __webpack_require__(
            /*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js"
          );
          var _fouc = __webpack_require__(
            /*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js"
          ); /* globals __webpack_hash__ */
          if (!window.EventSource) {
            window.EventSource = _eventSourcePolyfill.default;
          }
          const data = JSON.parse(
            document.getElementById("__NEXT_DATA__").textContent
          );
          let { assetPrefix, page } = data;
          assetPrefix = assetPrefix || "";
          let mostRecentHash = null; /* eslint-disable-next-line */
          let curHash = __webpack_require__.h();
          const hotUpdatePath =
            assetPrefix +
            (assetPrefix.endsWith("/") ? "" : "/") +
            "_next/static/webpack/"; // Is there a newer version of this code available?
          function isUpdateAvailable() {
            // __webpack_hash__ is the hash of the current compilation.
            // It's a global variable injected by Webpack.
            /* eslint-disable-next-line */
            return mostRecentHash !== __webpack_require__.h();
          } // Webpack disallows updates in other states.
          function canApplyUpdates() {
            return module.hot.status() === "idle";
          } // This function reads code updates on the fly and hard
          // reloads the page when it has changed.
          async function tryApplyUpdates() {
            if (!isUpdateAvailable() || !canApplyUpdates()) {
              return;
            }
            try {
              const res = await (0, _unfetch.default)(
                `${hotUpdatePath}${curHash}.hot-update.json`
              );
              const jsonData = await res.json();
              const curPage = page === "/" ? "index" : page; // webpack 5 uses an array instead
              const pageUpdated = (Array.isArray(jsonData.c)
                ? jsonData.c
                : Object.keys(jsonData.c)
              ).some((mod) => {
                return (
                  mod.indexOf(
                    `pages${
                      curPage.substr(0, 1) === "/" ? curPage : `/${curPage}`
                    }`
                  ) !== -1 ||
                  mod.indexOf(
                    `pages${
                      curPage.substr(0, 1) === "/" ? curPage : `/${curPage}`
                    }`.replace(/\//g, "\\")
                  ) !== -1
                );
              });
              if (pageUpdated) {
                document.location.reload(true);
              } else {
                curHash = mostRecentHash;
              }
            } catch (err) {
              console.error("Error occurred checking for update", err);
              document.location.reload(true);
            }
          }
          (0, _eventsource.getEventSourceWrapper)({
            path: `${assetPrefix}/_next/webpack-hmr`,
          }).addMessageListener((event) => {
            if (event.data === "\uD83D\uDC93") {
              return;
            }
            try {
              const message = JSON.parse(event.data);
              if (message.action === "sync" || message.action === "built") {
                if (!message.hash) {
                  return;
                }
                mostRecentHash = message.hash;
                tryApplyUpdates();
              } else if (message.action === "reloadPage") {
                document.location.reload(true);
              }
            } catch (ex) {
              console.warn("Invalid HMR message: " + event.data + "\n" + ex);
            }
          });
          (0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
          (0, _fouc.displayContent)();

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

    /***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
      /*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.getEventSourceWrapper = getEventSourceWrapper;
          const eventCallbacks = [];
          function EventSourceWrapper(options) {
            var source;
            var lastActivity = new Date();
            var listeners = [];
            if (!options.timeout) {
              options.timeout = 20 * 1000;
            }
            init();
            var timer = setInterval(function () {
              if (new Date() - lastActivity > options.timeout) {
                handleDisconnect();
              }
            }, options.timeout / 2);
            function init() {
              source = new window.EventSource(options.path);
              source.onopen = handleOnline;
              source.onerror = handleDisconnect;
              source.onmessage = handleMessage;
            }
            function handleOnline() {
              if (options.log) console.log("[HMR] connected");
              lastActivity = new Date();
            }
            function handleMessage(event) {
              lastActivity = new Date();
              for (var i = 0; i < listeners.length; i++) {
                listeners[i](event);
              }
              eventCallbacks.forEach((cb) => {
                if (!cb.unfiltered && event.data.indexOf("action") === -1)
                  return;
                cb(event);
              });
            }
            function handleDisconnect() {
              clearInterval(timer);
              source.close();
              setTimeout(init, options.timeout);
            }
            return {
              close: () => {
                clearInterval(timer);
                source.close();
              },
              addMessageListener: function (fn) {
                listeners.push(fn);
              },
            };
          }
          _c = EventSourceWrapper;
          function getEventSourceWrapper(options) {
            if (!options.ondemand) {
              return {
                addMessageListener: (cb) => {
                  eventCallbacks.push(cb);
                },
              };
            }
            return EventSourceWrapper(options);
          }
          var _c;
          $RefreshReg$(_c, "EventSourceWrapper");

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

    /***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
      /*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _interopRequireDefault = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
          );
          exports.__esModule = true;
          exports.default = void 0;
          var _unfetch = _interopRequireDefault(
            __webpack_require__(
              /*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"
            )
          ); /* eslint-disable */ // Improved version of https://github.com/Yaffle/EventSource/
          // Available under MIT License (MIT)
          // Only tries to support IE11 and nothing below
          var document = window.document;
          var Response = window.Response;
          var TextDecoder = window.TextDecoder;
          var TextEncoder = window.TextEncoder;
          var AbortController = window.AbortController;
          if (AbortController == undefined) {
            AbortController = function () {
              this.signal = null;
              this.abort = function () {};
            };
          }
          function TextDecoderPolyfill() {
            this.bitsNeeded = 0;
            this.codePoint = 0;
          }
          _c = TextDecoderPolyfill;
          TextDecoderPolyfill.prototype.decode = function (octets) {
            function valid(codePoint, shift, octetsCount) {
              if (octetsCount === 1) {
                return (
                  codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff
                );
              }
              if (octetsCount === 2) {
                return (
                  (codePoint >= 0x0800 >> shift &&
                    codePoint << shift <= 0xd7ff) ||
                  (codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff)
                );
              }
              if (octetsCount === 3) {
                return (
                  codePoint >= 0x010000 >> shift &&
                  codePoint << shift <= 0x10ffff
                );
              }
              throw new Error();
            }
            function octetsCount(bitsNeeded, codePoint) {
              if (bitsNeeded === 6 * 1) {
                return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
              }
              if (bitsNeeded === 6 * 2) {
                return codePoint > 15 ? 3 : 2;
              }
              if (bitsNeeded === 6 * 3) {
                return 3;
              }
              throw new Error();
            }
            var REPLACER = 0xfffd;
            var string = "";
            var bitsNeeded = this.bitsNeeded;
            var codePoint = this.codePoint;
            for (var i = 0; i < octets.length; i += 1) {
              var octet = octets[i];
              if (bitsNeeded !== 0) {
                if (
                  octet < 128 ||
                  octet > 191 ||
                  !valid(
                    (codePoint << 6) | (octet & 63),
                    bitsNeeded - 6,
                    octetsCount(bitsNeeded, codePoint)
                  )
                ) {
                  bitsNeeded = 0;
                  codePoint = REPLACER;
                  string += String.fromCharCode(codePoint);
                }
              }
              if (bitsNeeded === 0) {
                if (octet >= 0 && octet <= 127) {
                  bitsNeeded = 0;
                  codePoint = octet;
                } else if (octet >= 192 && octet <= 223) {
                  bitsNeeded = 6 * 1;
                  codePoint = octet & 31;
                } else if (octet >= 224 && octet <= 239) {
                  bitsNeeded = 6 * 2;
                  codePoint = octet & 15;
                } else if (octet >= 240 && octet <= 247) {
                  bitsNeeded = 6 * 3;
                  codePoint = octet & 7;
                } else {
                  bitsNeeded = 0;
                  codePoint = REPLACER;
                }
                if (
                  bitsNeeded !== 0 &&
                  !valid(
                    codePoint,
                    bitsNeeded,
                    octetsCount(bitsNeeded, codePoint)
                  )
                ) {
                  bitsNeeded = 0;
                  codePoint = REPLACER;
                }
              } else {
                bitsNeeded -= 6;
                codePoint = (codePoint << 6) | (octet & 63);
              }
              if (bitsNeeded === 0) {
                if (codePoint <= 0xffff) {
                  string += String.fromCharCode(codePoint);
                } else {
                  string += String.fromCharCode(
                    0xd800 + ((codePoint - 0xffff - 1) >> 10)
                  );
                  string += String.fromCharCode(
                    0xdc00 + ((codePoint - 0xffff - 1) & 0x3ff)
                  );
                }
              }
            }
            this.bitsNeeded = bitsNeeded;
            this.codePoint = codePoint;
            return string;
          }; // Firefox < 38 throws an error with stream option
          var supportsStreamOption = function supportsStreamOption() {
            try {
              return (
                new TextDecoder().decode(new TextEncoder().encode("test"), {
                  stream: true,
                }) === "test"
              );
            } catch (error) {
              console.log(error);
            }
            return false;
          }; // IE, Edge
          if (
            TextDecoder == undefined ||
            TextEncoder == undefined ||
            !supportsStreamOption()
          ) {
            TextDecoder = TextDecoderPolyfill;
          }
          var k = function k() {};
          function XHRWrapper(xhr) {
            this.withCredentials = false;
            this.responseType = "";
            this.readyState = 0;
            this.status = 0;
            this.statusText = "";
            this.responseText = "";
            this.onprogress = k;
            this.onreadystatechange = k;
            this._contentType = "";
            this._xhr = xhr;
            this._sendTimeout = 0;
            this._abort = k;
          }
          _c2 = XHRWrapper;
          XHRWrapper.prototype.open = function (method, url) {
            this._abort(true);
            var that = this;
            var xhr = this._xhr;
            var state = 1;
            var timeout = 0;
            this._abort = function (silent) {
              if (that._sendTimeout !== 0) {
                clearTimeout(that._sendTimeout);
                that._sendTimeout = 0;
              }
              if (state === 1 || state === 2 || state === 3) {
                state = 4;
                xhr.onload = k;
                xhr.onerror = k;
                xhr.onabort = k;
                xhr.onprogress = k;
                xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
                // Opera < 10: XMLHttpRequest#abort() does not fire any event
                xhr.abort();
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = 0;
                }
                if (!silent) {
                  that.readyState = 4;
                  that.onreadystatechange();
                }
              }
              state = 0;
            };
            var onStart = function onStart() {
              if (state === 1) {
                // state = 2;
                var status = 0;
                var statusText = "";
                var contentType = undefined;
                if (!("contentType" in xhr)) {
                  try {
                    status = xhr.status;
                    statusText = xhr.statusText;
                    contentType = xhr.getResponseHeader("Content-Type");
                  } catch (error) {
                    // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
                    // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
                    // https://bugs.webkit.org/show_bug.cgi?id=29121
                    status = 0;
                    statusText = "";
                    contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
                    // https://bugs.webkit.org/show_bug.cgi?id=29658
                    // https://bugs.webkit.org/show_bug.cgi?id=77854
                  }
                } else {
                  status = 200;
                  statusText = "OK";
                  contentType = xhr.contentType;
                }
                if (status !== 0) {
                  state = 2;
                  that.readyState = 2;
                  that.status = status;
                  that.statusText = statusText;
                  that._contentType = contentType;
                  that.onreadystatechange();
                }
              }
            };
            var onProgress = function onProgress() {
              onStart();
              if (state === 2 || state === 3) {
                state = 3;
                var responseText = "";
                try {
                  responseText = xhr.responseText;
                } catch (error) {
                  // IE 8 - 9 with XMLHttpRequest
                }
                that.readyState = 3;
                that.responseText = responseText;
                that.onprogress();
              }
            };
            var onFinish = function onFinish() {
              // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
              // IE 8 fires "onload" without "onprogress"
              onProgress();
              if (state === 1 || state === 2 || state === 3) {
                state = 4;
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = 0;
                }
                that.readyState = 4;
                that.onreadystatechange();
              }
            };
            var onReadyStateChange = function onReadyStateChange() {
              if (xhr != undefined) {
                // Opera 12
                if (xhr.readyState === 4) {
                  onFinish();
                } else if (xhr.readyState === 3) {
                  onProgress();
                } else if (xhr.readyState === 2) {
                  onStart();
                }
              }
            };
            var onTimeout = function onTimeout() {
              timeout = setTimeout(function () {
                onTimeout();
              }, 500);
              if (xhr.readyState === 3) {
                onProgress();
              }
            }; // XDomainRequest#abort removes onprogress, onerror, onload
            xhr.onload = onFinish;
            xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
            // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
            // https://code.google.com/p/chromium/issues/detail?id=153570
            // IE 8 fires "onload" without "onprogress
            xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
            if (
              !("sendAsBinary" in XMLHttpRequest.prototype) &&
              !("mozAnon" in XMLHttpRequest.prototype)
            ) {
              xhr.onprogress = onProgress;
            } // IE 8 - 9 (XMLHTTPRequest)
            // Opera < 12
            // Firefox < 3.5
            // Firefox 3.5 - 3.6 - ? < 9.0
            // onprogress is not fired sometimes or delayed
            // see also #64
            xhr.onreadystatechange = onReadyStateChange;
            if ("contentType" in xhr) {
              url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
            }
            xhr.open(method, url, true);
            if ("readyState" in xhr) {
              // workaround for Opera 12 issue with "progress" events
              // #91
              timeout = setTimeout(function () {
                onTimeout();
              }, 0);
            }
          };
          XHRWrapper.prototype.abort = function () {
            this._abort(false);
          };
          XHRWrapper.prototype.getResponseHeader = function (name) {
            return this._contentType;
          };
          XHRWrapper.prototype.setRequestHeader = function (name, value) {
            var xhr = this._xhr;
            if ("setRequestHeader" in xhr) {
              xhr.setRequestHeader(name, value);
            }
          };
          XHRWrapper.prototype.getAllResponseHeaders = function () {
            return this._xhr.getAllResponseHeaders != undefined
              ? this._xhr.getAllResponseHeaders()
              : "";
          };
          XHRWrapper.prototype.send = function () {
            // loading indicator in Safari < ? (6), Chrome < 14, Firefox
            if (
              !("ontimeout" in XMLHttpRequest.prototype) &&
              document != undefined &&
              document.readyState != undefined &&
              document.readyState !== "complete"
            ) {
              var that = this;
              that._sendTimeout = setTimeout(function () {
                that._sendTimeout = 0;
                that.send();
              }, 4);
              return;
            }
            var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
            xhr.withCredentials = this.withCredentials;
            xhr.responseType = this.responseType;
            try {
              // xhr.send(); throws "Not enough arguments" in Firefox 3.0
              xhr.send(undefined);
            } catch (error1) {
              // Safari 5.1.7, Opera 12
              throw error1;
            }
          };
          function toLowerCase(name) {
            return name.replace(/[A-Z]/g, function (c) {
              return String.fromCharCode(c.charCodeAt(0) + 0x20);
            });
          }
          function HeadersPolyfill(all) {
            // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
            var map = Object.create(null);
            var array = all.split("\r\n");
            for (var i = 0; i < array.length; i += 1) {
              var line = array[i];
              var parts = line.split(": ");
              var name = parts.shift();
              var value = parts.join(": ");
              map[toLowerCase(name)] = value;
            }
            this._map = map;
          }
          _c3 = HeadersPolyfill;
          HeadersPolyfill.prototype.get = function (name) {
            return this._map[toLowerCase(name)];
          };
          function XHRTransport() {}
          _c4 = XHRTransport;
          XHRTransport.prototype.open = function (
            xhr,
            onStartCallback,
            onProgressCallback,
            onFinishCallback,
            url,
            withCredentials,
            headers
          ) {
            xhr.open("GET", url);
            var offset = 0;
            xhr.onprogress = function () {
              var responseText = xhr.responseText;
              var chunk = responseText.slice(offset);
              offset += chunk.length;
              onProgressCallback(chunk);
            };
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 2) {
                var status = xhr.status;
                var statusText = xhr.statusText;
                var contentType = xhr.getResponseHeader("Content-Type");
                var headers = xhr.getAllResponseHeaders();
                onStartCallback(
                  status,
                  statusText,
                  contentType,
                  new HeadersPolyfill(headers),
                  function () {
                    xhr.abort();
                  }
                );
              } else if (xhr.readyState === 4) {
                onFinishCallback();
              }
            };
            xhr.withCredentials = withCredentials;
            xhr.responseType = "text";
            for (var name in headers) {
              if (Object.prototype.hasOwnProperty.call(headers, name)) {
                xhr.setRequestHeader(name, headers[name]);
              }
            }
            xhr.send();
          };
          function HeadersWrapper(headers) {
            this._headers = headers;
          }
          _c5 = HeadersWrapper;
          HeadersWrapper.prototype.get = function (name) {
            return this._headers.get(name);
          };
          function FetchTransport() {}
          _c6 = FetchTransport;
          FetchTransport.prototype.open = function (
            xhr,
            onStartCallback,
            onProgressCallback,
            onFinishCallback,
            url,
            withCredentials,
            headers
          ) {
            var controller = new AbortController();
            var signal = controller.signal; // see #120
            var textDecoder = new TextDecoder();
            (0, _unfetch.default)(url, {
              headers: headers,
              credentials: withCredentials ? "include" : "same-origin",
              signal: signal,
              cache: "no-store",
            })
              .then(function (response) {
                var reader = response.body.getReader();
                onStartCallback(
                  response.status,
                  response.statusText,
                  response.headers.get("Content-Type"),
                  new HeadersWrapper(response.headers),
                  function () {
                    controller.abort();
                    reader.cancel();
                  }
                );
                return new Promise(function (resolve, reject) {
                  var readNextChunk = function readNextChunk() {
                    reader
                      .read()
                      .then(function (result) {
                        if (result.done) {
                          // Note: bytes in textDecoder are ignored
                          resolve(undefined);
                        } else {
                          var chunk = textDecoder.decode(result.value, {
                            stream: true,
                          });
                          onProgressCallback(chunk);
                          readNextChunk();
                        }
                      })
                      ["catch"](function (error) {
                        reject(error);
                      });
                  };
                  readNextChunk();
                });
              })
              .then(
                function (result) {
                  onFinishCallback();
                  return result;
                },
                function (error) {
                  onFinishCallback();
                  return Promise.reject(error);
                }
              );
          };
          function EventTarget() {
            this._listeners = Object.create(null);
          }
          _c7 = EventTarget;
          function throwError(e) {
            setTimeout(function () {
              throw e;
            }, 0);
          }
          EventTarget.prototype.dispatchEvent = function (event) {
            event.target = this;
            var typeListeners = this._listeners[event.type];
            if (typeListeners != undefined) {
              var length = typeListeners.length;
              for (var i = 0; i < length; i += 1) {
                var listener = typeListeners[i];
                try {
                  if (typeof listener.handleEvent === "function") {
                    listener.handleEvent(event);
                  } else {
                    listener.call(this, event);
                  }
                } catch (e) {
                  throwError(e);
                }
              }
            }
          };
          EventTarget.prototype.addEventListener = function (type, listener) {
            type = String(type);
            var listeners = this._listeners;
            var typeListeners = listeners[type];
            if (typeListeners == undefined) {
              typeListeners = [];
              listeners[type] = typeListeners;
            }
            var found = false;
            for (var i = 0; i < typeListeners.length; i += 1) {
              if (typeListeners[i] === listener) {
                found = true;
              }
            }
            if (!found) {
              typeListeners.push(listener);
            }
          };
          EventTarget.prototype.removeEventListener = function (
            type,
            listener
          ) {
            type = String(type);
            var listeners = this._listeners;
            var typeListeners = listeners[type];
            if (typeListeners != undefined) {
              var filtered = [];
              for (var i = 0; i < typeListeners.length; i += 1) {
                if (typeListeners[i] !== listener) {
                  filtered.push(typeListeners[i]);
                }
              }
              if (filtered.length === 0) {
                delete listeners[type];
              } else {
                listeners[type] = filtered;
              }
            }
          };
          function Event(type) {
            this.type = type;
            this.target = undefined;
          }
          _c8 = Event;
          function MessageEvent(type, options) {
            Event.call(this, type);
            this.data = options.data;
            this.lastEventId = options.lastEventId;
          }
          _c9 = MessageEvent;
          MessageEvent.prototype = Object.create(Event.prototype);
          function ConnectionEvent(type, options) {
            Event.call(this, type);
            this.status = options.status;
            this.statusText = options.statusText;
            this.headers = options.headers;
          }
          _c10 = ConnectionEvent;
          ConnectionEvent.prototype = Object.create(Event.prototype);
          var WAITING = -1;
          var CONNECTING = 0;
          var OPEN = 1;
          var CLOSED = 2;
          var AFTER_CR = -1;
          var FIELD_START = 0;
          var FIELD = 1;
          var VALUE_START = 2;
          var VALUE = 3;
          var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
          var MINIMUM_DURATION = 1000;
          var MAXIMUM_DURATION = 18000000;
          var parseDuration = function parseDuration(value, def) {
            var n = parseInt(value, 10);
            if (n !== n) {
              n = def;
            }
            return clampDuration(n);
          };
          var clampDuration = function clampDuration(n) {
            return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
          };
          var fire = function fire(that, f, event) {
            try {
              if (typeof f === "function") {
                f.call(that, event);
              }
            } catch (e) {
              throwError(e);
            }
          };
          function EventSourcePolyfill(url, options) {
            EventTarget.call(this);
            this.onopen = undefined;
            this.onmessage = undefined;
            this.onerror = undefined;
            this.url = undefined;
            this.readyState = undefined;
            this.withCredentials = undefined;
            this._close = undefined;
            start(this, url, options);
          }
          _c11 = EventSourcePolyfill;
          var isFetchSupported =
            _unfetch.default != undefined &&
            Response != undefined &&
            "body" in Response.prototype;
          function start(es, url, options) {
            url = String(url);
            var withCredentials =
              options != undefined && Boolean(options.withCredentials);
            var initialRetry = clampDuration(1000);
            var heartbeatTimeout =
              options != undefined && options.heartbeatTimeout != undefined
                ? parseDuration(options.heartbeatTimeout, 45000)
                : clampDuration(45000);
            var lastEventId = "";
            var retry = initialRetry;
            var wasActivity = false;
            var headers =
              options != undefined && options.headers != undefined
                ? JSON.parse(JSON.stringify(options.headers))
                : undefined;
            var CurrentTransport =
              options != undefined && options.Transport != undefined
                ? options.Transport
                : XMLHttpRequest;
            var xhr =
              isFetchSupported &&
              !(options != undefined && options.Transport != undefined)
                ? undefined
                : new XHRWrapper(new CurrentTransport());
            var transport =
              xhr == undefined ? new FetchTransport() : new XHRTransport();
            var cancelFunction = undefined;
            var timeout = 0;
            var currentState = WAITING;
            var dataBuffer = "";
            var lastEventIdBuffer = "";
            var eventTypeBuffer = "";
            var textBuffer = "";
            var state = FIELD_START;
            var fieldStart = 0;
            var valueStart = 0;
            var onStart = function onStart(
              status,
              statusText,
              contentType,
              headers,
              cancel
            ) {
              if (currentState === CONNECTING) {
                cancelFunction = cancel;
                if (
                  status === 200 &&
                  contentType != undefined &&
                  contentTypeRegExp.test(contentType)
                ) {
                  currentState = OPEN;
                  wasActivity = true;
                  retry = initialRetry;
                  es.readyState = OPEN;
                  var event = new ConnectionEvent("open", {
                    status: status,
                    statusText: statusText,
                    headers: headers,
                  });
                  es.dispatchEvent(event);
                  fire(es, es.onopen, event);
                } else {
                  var message = "";
                  if (status !== 200) {
                    if (statusText) {
                      statusText = statusText.replace(/\s+/g, " ");
                    }
                    message =
                      "EventSource's response has a status " +
                      status +
                      " " +
                      statusText +
                      " that is not 200. Aborting the connection.";
                  } else {
                    message =
                      "EventSource's response has a Content-Type specifying an unsupported type: " +
                      (contentType == undefined
                        ? "-"
                        : contentType.replace(/\s+/g, " ")) +
                      ". Aborting the connection.";
                  }
                  throwError(new Error(message));
                  close();
                  var event = new ConnectionEvent("error", {
                    status: status,
                    statusText: statusText,
                    headers: headers,
                  });
                  es.dispatchEvent(event);
                  fire(es, es.onerror, event);
                }
              }
            };
            var onProgress = function onProgress(textChunk) {
              if (currentState === OPEN) {
                var n = -1;
                for (var i = 0; i < textChunk.length; i += 1) {
                  var c = textChunk.charCodeAt(i);
                  if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) {
                    n = i;
                  }
                }
                var chunk =
                  (n !== -1 ? textBuffer : "") + textChunk.slice(0, n + 1);
                textBuffer =
                  (n === -1 ? textBuffer : "") + textChunk.slice(n + 1);
                if (chunk !== "") {
                  wasActivity = true;
                }
                for (var position = 0; position < chunk.length; position += 1) {
                  var c = chunk.charCodeAt(position);
                  if (state === AFTER_CR && c === "\n".charCodeAt(0)) {
                    state = FIELD_START;
                  } else {
                    if (state === AFTER_CR) {
                      state = FIELD_START;
                    }
                    if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
                      if (state !== FIELD_START) {
                        if (state === FIELD) {
                          valueStart = position + 1;
                        }
                        var field = chunk.slice(fieldStart, valueStart - 1);
                        var value = chunk.slice(
                          valueStart +
                            (valueStart < position &&
                            chunk.charCodeAt(valueStart) === " ".charCodeAt(0)
                              ? 1
                              : 0),
                          position
                        );
                        if (field === "data") {
                          dataBuffer += "\n";
                          dataBuffer += value;
                        } else if (field === "id") {
                          lastEventIdBuffer = value;
                        } else if (field === "event") {
                          eventTypeBuffer = value;
                        } else if (field === "retry") {
                          initialRetry = parseDuration(value, initialRetry);
                          retry = initialRetry;
                        } else if (field === "heartbeatTimeout") {
                          heartbeatTimeout = parseDuration(
                            value,
                            heartbeatTimeout
                          );
                          if (timeout !== 0) {
                            clearTimeout(timeout);
                            timeout = setTimeout(function () {
                              onTimeout();
                            }, heartbeatTimeout);
                          }
                        }
                      }
                      if (state === FIELD_START) {
                        if (dataBuffer !== "") {
                          lastEventId = lastEventIdBuffer;
                          if (eventTypeBuffer === "") {
                            eventTypeBuffer = "message";
                          }
                          var event = new MessageEvent(eventTypeBuffer, {
                            data: dataBuffer.slice(1),
                            lastEventId: lastEventIdBuffer,
                          });
                          es.dispatchEvent(event);
                          if (eventTypeBuffer === "message") {
                            fire(es, es.onmessage, event);
                          }
                          if (currentState === CLOSED) {
                            return;
                          }
                        }
                        dataBuffer = "";
                        eventTypeBuffer = "";
                      }
                      state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
                    } else {
                      if (state === FIELD_START) {
                        fieldStart = position;
                        state = FIELD;
                      }
                      if (state === FIELD) {
                        if (c === ":".charCodeAt(0)) {
                          valueStart = position + 1;
                          state = VALUE_START;
                        }
                      } else if (state === VALUE_START) {
                        state = VALUE;
                      }
                    }
                  }
                }
              }
            };
            var onFinish = function onFinish() {
              if (currentState === OPEN || currentState === CONNECTING) {
                currentState = WAITING;
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = 0;
                }
                timeout = setTimeout(function () {
                  onTimeout();
                }, retry);
                retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
                es.readyState = CONNECTING;
                var event = new Event("error");
                es.dispatchEvent(event);
                fire(es, es.onerror, event);
              }
            };
            var close = function close() {
              currentState = CLOSED;
              if (cancelFunction != undefined) {
                cancelFunction();
                cancelFunction = undefined;
              }
              if (timeout !== 0) {
                clearTimeout(timeout);
                timeout = 0;
              }
              es.readyState = CLOSED;
            };
            var onTimeout = function onTimeout() {
              timeout = 0;
              if (currentState !== WAITING) {
                if (!wasActivity && cancelFunction != undefined) {
                  throwError(
                    new Error(
                      "No activity within " +
                        heartbeatTimeout +
                        " milliseconds. Reconnecting."
                    )
                  );
                  cancelFunction();
                  cancelFunction = undefined;
                } else {
                  wasActivity = false;
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
                return;
              }
              wasActivity = false;
              timeout = setTimeout(function () {
                onTimeout();
              }, heartbeatTimeout);
              currentState = CONNECTING;
              dataBuffer = "";
              eventTypeBuffer = "";
              lastEventIdBuffer = lastEventId;
              textBuffer = "";
              fieldStart = 0;
              valueStart = 0;
              state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
              // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
              var requestURL = url;
              if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
                if (lastEventId !== "") {
                  requestURL +=
                    (url.indexOf("?") === -1 ? "?" : "&") +
                    "lastEventId=" +
                    encodeURIComponent(lastEventId);
                }
              }
              var requestHeaders = {};
              requestHeaders["Accept"] = "text/event-stream";
              if (headers != undefined) {
                for (var name in headers) {
                  if (Object.prototype.hasOwnProperty.call(headers, name)) {
                    requestHeaders[name] = headers[name];
                  }
                }
              }
              try {
                transport.open(
                  xhr,
                  onStart,
                  onProgress,
                  onFinish,
                  requestURL,
                  withCredentials,
                  requestHeaders
                );
              } catch (error) {
                close();
                throw error;
              }
            };
            es.url = url;
            es.readyState = CONNECTING;
            es.withCredentials = withCredentials;
            es._close = close;
            onTimeout();
          }
          EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
          EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
          EventSourcePolyfill.prototype.OPEN = OPEN;
          EventSourcePolyfill.prototype.CLOSED = CLOSED;
          EventSourcePolyfill.prototype.close = function () {
            this._close();
          };
          EventSourcePolyfill.CONNECTING = CONNECTING;
          EventSourcePolyfill.OPEN = OPEN;
          EventSourcePolyfill.CLOSED = CLOSED;
          EventSourcePolyfill.prototype.withCredentials = undefined;
          var _default = EventSourcePolyfill;
          exports.default = _default;
          var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
          $RefreshReg$(_c, "TextDecoderPolyfill");
          $RefreshReg$(_c2, "XHRWrapper");
          $RefreshReg$(_c3, "HeadersPolyfill");
          $RefreshReg$(_c4, "XHRTransport");
          $RefreshReg$(_c5, "HeadersWrapper");
          $RefreshReg$(_c6, "FetchTransport");
          $RefreshReg$(_c7, "EventTarget");
          $RefreshReg$(_c8, "Event");
          $RefreshReg$(_c9, "MessageEvent");
          $RefreshReg$(_c10, "ConnectionEvent");
          $RefreshReg$(_c11, "EventSourcePolyfill");

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

    /***/ "./node_modules/next/dist/client/dev/fouc.js":
      /*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          exports.__esModule = true;
          exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
          // `style-loader` in development. It must be called before hydration, or else
          // rendering won't have the correct computed values in effects.
          function displayContent(callback) {
            (window.requestAnimationFrame || setTimeout)(function () {
              for (
                var x = document.querySelectorAll("[data-next-hide-fouc]"),
                  i = x.length;
                i--;

              ) {
                x[i].parentNode.removeChild(x[i]);
              }
              if (callback) {
                callback();
              }
            });
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

    /***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        /* WEBPACK VAR INJECTION */ (function (module) {
          var _interopRequireDefault = __webpack_require__(
            /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
          );
          exports.__esModule = true;
          exports.closePing = closePing;
          exports.setupPing = setupPing;
          exports.currentPage = void 0;
          var _unfetch = _interopRequireDefault(
            __webpack_require__(
              /*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"
            )
          );
          var _eventsource = __webpack_require__(
            /*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js"
          ); /* global location */
          let evtSource;
          let currentPage;
          exports.currentPage = currentPage;
          function closePing() {
            if (evtSource) evtSource.close();
            evtSource = null;
          }
          function setupPing(assetPrefix, pathnameFn, retry) {
            const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed
            if (pathname === currentPage && !retry) return;
            exports.currentPage = currentPage = pathname; // close current EventSource connection
            closePing();
            const url = `${assetPrefix}/_next/webpack-hmr?page=${currentPage}`;
            evtSource = (0, _eventsource.getEventSourceWrapper)({
              path: url,
              timeout: 5000,
              ondemand: 1,
            });
            evtSource.addMessageListener((event) => {
              if (event.data.indexOf("{") === -1) return;
              try {
                const payload = JSON.parse(event.data);
                if (payload.invalid) {
                  // Payload can be invalid even if the page does not exist.
                  // So, we need to make sure it exists before reloading.
                  (0, _unfetch.default)(location.href, {
                    credentials: "same-origin",
                  }).then((pageRes) => {
                    if (pageRes.status === 200) {
                      location.reload();
                    }
                  });
                }
              } catch (err) {
                console.error(
                  "on-demand-entries failed to parse response",
                  err
                );
              }
            });
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
  },
  [["./node_modules/next/dist/client/dev/amp-dev.js", "webpack"]],
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uLy4uL2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uRGF0YSIsImpzb24iLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicGF0aCIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJldmVudENhbGxiYWNrcyIsIkV2ZW50U291cmNlV3JhcHBlciIsIm9wdGlvbnMiLCJzb3VyY2UiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwibGlzdGVuZXJzIiwidGltZW91dCIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImZldGNoIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsImRpc3BsYXlDb250ZW50IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2dFNvdXJjZSIsImN1cnJlbnRQYWdlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBTEE7QUFPQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsV0FBWixFQUF5QjtFQUN2QkQsTUFBTSxDQUFDQyxXQUFQRCxHQUFxQkUsNEJBQXJCRjtBQUNEO0FBRUQsTUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUxELENBQVdFLFFBQVEsQ0FBQ0MsY0FBVEQsQ0FBd0IsZUFBeEJBLEVBQXlDRSxXQUFwREosQ0FBYjtBQUNBLElBQUk7RUFBRUssV0FBRjtFQUFlQztBQUFmLElBQXdCUCxJQUE1QjtBQUNBTSxXQUFXLEdBQUdBLFdBQVcsSUFBSSxFQUE3QkE7QUFDQSxJQUFJRSxjQUFjLEdBQUcsSUFBckIsQ0FDQTtBQUNBLElBQUlDLE9BQU8sR0FBR0MsdUJBQWQ7QUFDQSxNQUFNQyxhQUFhLEdBQ2pCTCxXQUFXLElBQUlBLFdBQVcsQ0FBQ00sUUFBWk4sQ0FBcUIsR0FBckJBLElBQTRCLEVBQTVCQSxHQUFpQyxHQUFyQyxDQUFYQSxHQUF1RCx1QkFEekQsQ0FHQTtBQUNBLFNBQVNPLGlCQUFULEdBQTZCO0VBQzNCO0VBQ0E7RUFDQTtFQUNBLE9BQU9MLGNBQWMsS0FBS0UsdUJBQTFCO0FBQ0QsQ0FFRDtBQUNBLFNBQVNJLGVBQVQsR0FBMkI7RUFDekIsT0FBT0MsTUFBTSxDQUFDQyxHQUFQRCxDQUFXRSxNQUFY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O1FBQ0YsQ0FORDtNQU9EO0lBQ0YsQ0FBQyxRQUFPRSxHQUFQLEVBQVk7TUFDWkMsT0FBTyxDQUFDQyxLQUFSRCxDQUFjLDRDQUFkQSxFQUE0REQsR0FBNURDO0lBQ0Q7RUFDRixDQWxCRDZOO0FBbUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUsbil7cmV0dXJuIG49bnx8e30sbmV3IFByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgcz1uZXcgWE1MSHR0cFJlcXVlc3Qsbz1bXSx1PVtdLGk9e30sYT1mdW5jdGlvbigpe3JldHVybntvazoyPT0ocy5zdGF0dXMvMTAwfDApLHN0YXR1c1RleHQ6cy5zdGF0dXNUZXh0LHN0YXR1czpzLnN0YXR1cyx1cmw6cy5yZXNwb25zZVVSTCx0ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCl9LGpzb246ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEpTT04ucGFyc2Uocy5yZXNwb25zZVRleHQpKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bmZldGNoLmpzLm1hcFxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuaW1wb3J0IEV2ZW50U291cmNlUG9seWZpbGwgZnJvbSAnLi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgeyBzZXR1cFBpbmcgfSBmcm9tICcuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2ZvdWMnXG5cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gIHdpbmRvdy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGxcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudClcbmxldCB7IGFzc2V0UHJlZml4LCBwYWdlIH0gPSBkYXRhXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfX1xuY29uc3QgaG90VXBkYXRlUGF0aCA9XG4gIGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJ1xuXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX19cbn1cblxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSdcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYClcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKVxuICAgICAgPyBqc29uRGF0YS5jXG4gICAgICA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpXG4gICAgKS5zb21lKChtb2QpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YFxuICAgICAgICAgIH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgICAgICkgIT09IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycilcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgfVxufVxuXG5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXJgLFxufSkuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2hcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpXG4gIH1cbn0pXG5cbnNldHVwUGluZyhhc3NldFByZWZpeCwgKCkgPT4gcGFnZSlcbmRpc3BsYXlDb250ZW50KClcbiIsImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW11cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNvdXJjZVxuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB2YXIgbGlzdGVuZXJzID0gW11cblxuICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMFxuICB9XG5cbiAgaW5pdCgpXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpXG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZVxuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdFxuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJylcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuXG4gICAgICBjYihldmVudClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoXG5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gIGlmIChcbiAgICAhKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpXG4gICkge1xuICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlXG5cbiAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJ1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuXG4gIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCAwKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6ICcnXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgaWYgKFxuICAgICEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJ1xuICApIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgICB0aGF0LnNlbmQoKVxuICAgIH0sIDQpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gIHRyeSB7XG4gICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgIHhoci5zZW5kKHVuZGVmaW5lZClcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgIHRocm93IGVycm9yMVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAweDIwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBsaW5lID0gYXJyYXlbaV1cbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpXG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZVxuICB9XG4gIHRoaXMuX21hcCA9IG1hcFxufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXVxufVxuXG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7fVxuXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybClcbiAgdmFyIG9mZnNldCA9IDBcbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KVxuICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gIH1cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCdcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoKVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzXG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgc2lnbmFsOiBzaWduYWwsXG4gICAgY2FjaGU6ICduby1zdG9yZScsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGVcbiAgfSwgMClcbn1cblxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdXG4gICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVyc1xuICB9XG4gIHZhciBmb3VuZCA9IGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlXG4gICAgfVxuICB9XG4gIGlmICghZm91bmQpIHtcbiAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGFcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWRcbn1cblxuTWVzc2FnZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbnZhciBXQUlUSU5HID0gLTFcbnZhciBDT05ORUNUSU5HID0gMFxudmFyIE9QRU4gPSAxXG52YXIgQ0xPU0VEID0gMlxuXG52YXIgQUZURVJfQ1IgPSAtMVxudmFyIEZJRUxEX1NUQVJUID0gMFxudmFyIEZJRUxEID0gMVxudmFyIFZBTFVFX1NUQVJUID0gMlxudmFyIFZBTFVFID0gM1xuXG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pXG5cbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMFxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMFxuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVmKSB7XG4gIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICBpZiAobiAhPT0gbikge1xuICAgIG4gPSBkZWZcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKVxufVxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pXG59XG5cbnZhciBmaXJlID0gZnVuY3Rpb24gKHRoYXQsIGYsIGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3dFcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcylcblxuICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZFxuICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZFxuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWRcblxuICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWRcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZFxuXG4gIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKVxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscylcblxuICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKVxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApXG4gICAgICA6IGNsYW1wRHVyYXRpb24oNDUwMDApXG5cbiAgdmFyIGxhc3RFdmVudElkID0gJydcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gIHZhciBoZWFkZXJzID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSlcbiAgICAgIDogdW5kZWZpbmVkXG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3RcbiAgdmFyIHhociA9XG4gICAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSlcbiAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKVxuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgdmFyIHRpbWVvdXQgPSAwXG4gIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gIHZhciBkYXRhQnVmZmVyID0gJydcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJydcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG5cbiAgdmFyIHRleHRCdWZmZXIgPSAnJ1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICB2YXIgZmllbGRTdGFydCA9IDBcbiAgdmFyIHZhbHVlU3RhcnQgPSAwXG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWxcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdHVzID09PSAyMDAgJiZcbiAgICAgICAgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTlxuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICcnXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICtcbiAgICAgICAgICAgIHN0YXR1cyArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICtcbiAgICAgICAgICAgICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICAgICAgY2xvc2UoKVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTFcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpXG4gICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSlcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbilcbiAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nXG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSlcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJydcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25UaW1lb3V0KClcbiAgICAgIH0sIHJldHJ5KVxuICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKVxuXG4gICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRFxuICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIHRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRURcbiAgfVxuXG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IDBcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIGFjdGl2aXR5IHdpdGhpbiAnICtcbiAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCArXG4gICAgICAgICAgICAgICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgaGVhcnRiZWF0VGltZW91dClcblxuICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICBkYXRhQnVmZmVyID0gJydcbiAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWRcbiAgICB0ZXh0QnVmZmVyID0gJydcbiAgICBmaWVsZFN0YXJ0ID0gMFxuICAgIHZhbHVlU3RhcnQgPSAwXG4gICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsXG4gICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgcmVxdWVzdFVSTCArPVxuICAgICAgICAgICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgK1xuICAgICAgICAgICdsYXN0RXZlbnRJZD0nICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9XG4gICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJ1xuICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0Lm9wZW4oXG4gICAgICAgIHhocixcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgb25GaW5pc2gsXG4gICAgICAgIHJlcXVlc3RVUkwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBlcy51cmwgPSB1cmxcbiAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIGVzLl9jbG9zZSA9IGNsb3NlXG5cbiAgb25UaW1lb3V0KClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSlcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGxcbiIsIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YFxuICBldnRTb3VyY2UgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXIoeyBwYXRoOiB1cmwsIHRpbWVvdXQ6IDUwMDAsIG9uZGVtYW5kOiAxIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
