module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../ssr-module-cache.js"); // The require function
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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 2));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 2: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("7100");

      /***/
    },

    /***/ "2vHJ": /***/ function (module, exports) {
      /***/
    },

    /***/ "3X8q": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return TopButton;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _TopButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "bOmX"
      );
      /* harmony import */ var _TopButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _TopButton_css__WEBPACK_IMPORTED_MODULE_1__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      function TopButton({ theme }) {
        function GoUpEvent() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
        function scrollFunction() {
          if (
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
          ) {
            document.getElementById("topButton").style.visibility = "visible";
          } else {
            document.getElementById("topButton").style.visibility = "hidden";
          }
        }
        window.onscroll = function () {
          scrollFunction();
        };
        const onMouseEnter = (color, bgColor) => {
          /* For the button */
          const topButton = document.getElementById("topButton");
          topButton.style.color = color;
          topButton.style.backgroundColor = bgColor;

          /* For arrow icon */
          const arrow = document.getElementById("arrow");
          arrow.style.color = color;
          arrow.style.backgroundColor = bgColor;
        };
        const onMouseLeave = (color, bgColor) => {
          /* For the button */
          const topButton = document.getElementById("topButton");
          topButton.style.color = color;
          topButton.style.backgroundColor = bgColor;

          /* For arrow icon */
          const arrow = document.getElementById("arrow");
          arrow.style.color = color;
          arrow.style.backgroundColor = bgColor;
        };
        return __jsx(
          "div",
          {
            onClick: GoUpEvent,
            id: "topButton",
            style: {
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
            },
            title: "Go up",
            onMouseEnter: () => onMouseEnter(theme.text, theme.body),
            onMouseLeave: () => onMouseLeave(theme.body, theme.text),
          },
          __jsx("i", {
            className: "fas fa-arrow-up",
            id: "arrow",
            "aria-hidden": "true",
          })
        );
      }

      /***/
    },

    /***/ "7100": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _components_topButton_TopButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "3X8q"
      );
      /* harmony import */ var _components_socialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "KTl6"
      );
      /* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "R+8Y"
      );
      /* harmony import */ var _BlogsImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        "dnrx"
      );
      /* harmony import */ var _AddressImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        "7SPY"
      );
      /* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        "HfBV"
      );
      /* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react_reveal__WEBPACK_IMPORTED_MODULE_6__
      );
      /* harmony import */ var _ContactComponent_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        "2vHJ"
      );
      /* harmony import */ var _ContactComponent_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _ContactComponent_css__WEBPACK_IMPORTED_MODULE_7__
      );
      /* harmony import */ var _portfolio_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        "QjGT"
      );
      /* harmony import */ var _ContactForm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        "q1LP"
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      // import Header from "../../components/header/Header";
      // import Footer from "../../components/footer/Footer";

      const ContactData =
        _portfolio_js__WEBPACK_IMPORTED_MODULE_8__[/* contactPageData */ "c"]
          .contactSection;
      // const blogSection = contactPageData.blogSection;
      // const addressSection = contactPageData.addressSection;
      const phoneSection =
        _portfolio_js__WEBPACK_IMPORTED_MODULE_8__[/* contactPageData */ "c"]
          .phoneSection;
      class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
        render() {
          const theme = this.props.theme;
          return __jsx(
            "div",
            {
              className: "contact-main",
            },
            __jsx(
              "div",
              {
                className: "basic-contact",
              },
              __jsx(
                react_reveal__WEBPACK_IMPORTED_MODULE_6__["Fade"],
                {
                  bottom: true,
                  duration: 1000,
                  distance: "40px",
                },
                __jsx(
                  "div",
                  {
                    className: "contact-heading-div",
                  },
                  __jsx(
                    "div",
                    {
                      className: "contact-heading-text-div",
                    },
                    __jsx(
                      "h1",
                      {
                        className: "contact-heading-text",
                        style: {
                          color: theme.text,
                        },
                      },
                      ContactData["title"]
                    ),
                    __jsx(
                      "p",
                      {
                        className: "contact-header-detail-text subTitle",
                        style: {
                          color: theme.secondaryText,
                        },
                      },
                      ContactData["description"]
                    ),
                    __jsx(
                      _components_socialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_2__[
                        /* default */ "a"
                      ],
                      {
                        theme: theme,
                      }
                    ),
                    __jsx(
                      "div",
                      {
                        className: "resume-btn-div",
                      },
                      __jsx(
                        _components_button_Button__WEBPACK_IMPORTED_MODULE_3__[
                          /* default */ "a"
                        ],
                        {
                          text: "See My Resume",
                          newTab: true,
                          href:
                            _portfolio_js__WEBPACK_IMPORTED_MODULE_8__[
                              /* greeting */ "f"
                            ].resumeLink,
                          theme: theme,
                        }
                      )
                    )
                  ),
                  __jsx(
                    "div",
                    {
                      className: "contact-heading-img-div",
                    },
                    __jsx(_BlogsImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      theme: theme,
                    })
                  )
                )
              ),
              __jsx(
                react_reveal__WEBPACK_IMPORTED_MODULE_6__["Fade"],
                {
                  bottom: true,
                  duration: 1000,
                  distance: "40px",
                },
                __jsx(
                  "div",
                  {
                    className: "address-heading-div",
                  },
                  __jsx(
                    "div",
                    {
                      className: "contact-heading-img-div",
                    },
                    __jsx(_AddressImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
                      theme: theme,
                    })
                  ),
                  __jsx(
                    "div",
                    {
                      className: "address-heading-text-div",
                    },
                    __jsx(
                      "h1",
                      {
                        className: "address-heading-text",
                        style: {
                          color: theme.text,
                        },
                      },
                      "I\u2019m Just a Message Away!"
                    ),
                    __jsx(
                      "p",
                      {
                        className: "contact-header-detail-text subTitle",
                        style: {
                          color: theme.secondaryText,
                        },
                      },
                      "Feel free to reach out, and I'll get back to you as soon as possible!"
                    ),
                    __jsx(
                      "h1",
                      {
                        className: "address-heading-text",
                        style: {
                          color: theme.text,
                        },
                      },
                      phoneSection["title"]
                    ),
                    __jsx(
                      "p",
                      {
                        className: "contact-header-detail-text subTitle",
                        style: {
                          color: theme.secondaryText,
                        },
                      },
                      phoneSection["subtitle"]
                    ),
                    __jsx(
                      "div",
                      {
                        className: "address-btn-div",
                      },
                      __jsx(
                        _ContactForm_js__WEBPACK_IMPORTED_MODULE_9__["default"],
                        {
                          theme: theme,
                        }
                      )
                    )
                  )
                )
              )
            ),
            __jsx(
              _components_topButton_TopButton__WEBPACK_IMPORTED_MODULE_1__[
                /* default */ "a"
              ],
              {
                theme: this.props.theme,
              }
            )
          );
        }
      }
      /* harmony default export */ __webpack_exports__["default"] = Contact;

      /***/
    },

    /***/ "7SPY": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return AddressImg;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      class AddressImg extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
        render() {
          // const theme = this.props.theme;
          return __jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "561",
              height: "493",
              viewBox: "0 0 561 493",
              role: "img",
              artist: "Katerina Limpitsouni",
              source: "https://undraw.co/",
            },
            __jsx("path", {
              d:
                "M876.03027,689.45c-.98047,1.37-1.97021,2.73-2.95019,4.08A16.82838,16.82838,0,0,1,863.5,696.5h-527a16.90383,16.90383,0,0,1-9.21-2.72c-.91016-1.2-1.81006-2.41-2.72022-3.62006l.91016-.5L592.27,541.78a16.01919,16.01919,0,0,1,15.47021-.02L875.12988,688.95Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M863.5,378.5,632.28169,244.96964a64.023,64.023,0,0,0-63.98147-.03153L336.5,378.5a17.0241,17.0241,0,0,0-17,17v284a17.01984,17.01984,0,0,0,17,17h527a17.02879,17.02879,0,0,0,17-17v-284A17.02408,17.02408,0,0,0,863.5,378.5Zm15,301a15.03649,15.03649,0,0,1-15,15h-527a15.02706,15.02706,0,0,1-15-15v-284a15.01828,15.01828,0,0,1,15-15L568.30022,246.93811a64.023,64.023,0,0,1,63.98147.03153L863.5,380.5a15.01828,15.01828,0,0,1,15,15Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M600.2998,539.18018a15.36345,15.36345,0,0,1-5.116-.8584l-.30249-.10694-.06128-.67236c-.18848.09277-.37866.18164-.56909.26563l-.20118.08837-.20141-.08886c-.42139-.18506-.83985-.39453-1.24365-.62207L408.5,433.73242V222.5A18.5208,18.5208,0,0,1,427,204H773a18.5208,18.5208,0,0,1,18.5,18.5V434.00244l-.25488.14356-183.25,103.04A15.75694,15.75694,0,0,1,600.2998,539.18018Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M600.2998,539.68018a15.85649,15.85649,0,0,1-5.282-.88672l-.60547-.21338-.02588-.28565-.33691.14795-.40234-.17676c-.43653-.19189-.86963-.40869-1.28784-.64453L408,434.02539V222.5a19.02154,19.02154,0,0,1,19-19H773a19.02162,19.02162,0,0,1,19,19V434.29492L608.24,537.62158A16.2527,16.2527,0,0,1,600.2998,539.68018Zm-4.01342-2.57666a14.49247,14.49247,0,0,0,10.97436-1.22559L790,433.125V222.5a17.01917,17.01917,0,0,0-17-17H427a17.01909,17.01909,0,0,0-17,17V432.85449l11.98962,6.7334,171.35047,96.29053q.34973.197.71.3706.36035-.17358.70923-.37011l1.34668-.75879Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M876.06982,385.88,803.5,426.68,791,433.71,607.75,536.75a15.24213,15.24213,0,0,1-7.4502,1.93,14.91079,14.91079,0,0,1-4.9497-.83,12.05366,12.05366,0,0,1-1.3003-.5q-.61449-.27-1.1997-.6L421.5,440.46,409,433.44l-84.91992-47.72a1.011,1.011,0,0,1-.37988-1.37.99933.99933,0,0,1,1.35986-.38L409,431.14l12.5,7.02L593.83008,535a13.07441,13.07441,0,0,0,1.77978.83c.26026.1.53028.19.8003.27A13.26424,13.26424,0,0,0,606.77,535L791,431.42l12.5-7.03,71.58984-40.25a.99849.99849,0,1,1,.98,1.74Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d: "M483.5748,269.5h-28a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d: "M516.5748,296.5h-61a8,8,0,0,1,0-16h61a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#e6e6e6",
            }),
            __jsx("path", {
              d: "M687,368.5H514a8,8,0,0,1,0-16H687a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d: "M703,399.5H497a8,8,0,0,1,0-16H703a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#e6e6e6",
            }),
            __jsx("path", {
              d: "M703,429.5H497a8,8,0,0,1,0-16H703a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#e6e6e6",
            })
          );
        }
      }

      /***/
    },

    /***/ "9boD": /***/ function (module, exports) {
      /***/
    },

    /***/ Dtiu: /***/ function (module, exports) {
      module.exports = require("styled-components");

      /***/
    },

    /***/ HfBV: /***/ function (module, exports) {
      module.exports = require("react-reveal");

      /***/
    },

    /***/ KTl6: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return socialMedia;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _SocialMedia_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "KwXo"
      );
      /* harmony import */ var _SocialMedia_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _SocialMedia_css__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "QjGT"
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "Dtiu"
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_3__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t)
                    ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }

      const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default
        .a.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;
      function socialMedia(props) {
        return __jsx(
          "div",
          {
            className: "social-media-div",
          },
          _portfolio__WEBPACK_IMPORTED_MODULE_2__[
            /* socialMediaLinks */ "k"
          ].map((media, i) => {
            return __jsx(
              "a",
              {
                key: i,
                href: media.link,
                className: `icon-button`,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              __jsx(
                IconWrapper,
                _extends({}, media, props),
                __jsx("i", {
                  className: `fab ${media.fontAwesomeIcon}`,
                })
              )
            );
          })
        );
      }

      /***/
    },

    /***/ KwXo: /***/ function (module, exports) {
      /***/
    },

    /***/ QjGT: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "i",
        function () {
          return settings;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "h",
        function () {
          return seo;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "f",
        function () {
          return greeting;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "k",
        function () {
          return socialMediaLinks;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "j",
        function () {
          return skills;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return competitiveSites;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "d",
        function () {
          return degrees;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return certifications;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "e",
        function () {
          return experience;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "g",
        function () {
          return projectsHeader;
        }
      );
      /* unused harmony export publicationsHeader */
      /* unused harmony export publications */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "c",
        function () {
          return contactPageData;
        }
      );
      /* Change this file to get your personal Porfolio */

      // Website related settings
      const settings = {
        isSplash: false, // Change this to false if you don't want Splash screen.
      };

      //SEO Related settings
      const seo = {
        title: "Enas's Portfolio",
        description:
          "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
        og: {
          title: "Enas Batarfi Portfolio",
          type: "website",
          url: "http://ashutoshhathidara.com/",
        },
      };

      //Home Page
      const greeting = {
        title: "Enas Batarfi",
        logo_name: "EnasBatarfi",
        nickname: "Data Scientist",
        subTitle:
          "Passionate professional focused on creating innovative, data-driven, and software development solutions that transform challenges into scalable, impactful, and sustainable systems.",
        resumeLink:
          "https://drive.google.com/file/d/1oCy_g10VF65jFx6DDitTEcako3_iT8QB/view?usp=sharing",
        portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
        githubProfile: "https://github.com/EnasBatarfi",
      };
      const socialMediaLinks = [
        /* Your Social Media Link */
        // github: "https://github.com/ashutosh1919",
        // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
        // gmail: "ashutoshhathidara98@gmail.com",
        // gitlab: "https://gitlab.com/ashutoshhathidara98",
        // facebook: "https://www.facebook.com/laymanbrother.19/",
        // twitter: "https://twitter.com/ashutosh_1919",
        // instagram: "https://www.instagram.com/layman_brother/"

        {
          name: "Github",
          link: "https://github.com/EnasBatarfi",
          fontAwesomeIcon: "fa-github",
          // Reference https://fontawesome.com/icons/github?style=brands
          backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/enas-batarfi/",
          fontAwesomeIcon: "fa-linkedin-in",
          // Reference https://fontawesome.com/icons/linkedin-in?style=brands
          backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
        },
        // {
        //   name: "YouTube",
        //   link: "https://youtube.com/c/DevSense19",
        //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
        //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
        // },
        {
          name: "Gmail",
          link: "mailto:EnasMBatarfi@gmail.com",
          fontAwesomeIcon: "fa-google",
          // Reference https://fontawesome.com/icons/google?style=brands
          backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
        },
        // {
        //   name: "X-Twitter",
        //   link: "https://twitter.com/ashutosh_1919",
        //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
        //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
        // },
        // {
        //   name: "Facebook",
        //   link: "https://www.facebook.com/laymanbrother.19/",
        //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
        //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
        // },
        // {
        //   name: "Instagram",
        //   link: "https://www.instagram.com/layman_brother/",
        //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
        //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
        // },
      ];
      const skills = {
        data: [
          {
            title: "Data Science & AI",
            fileName: "DataScienceImg",
            skills: [
              "⚡ Developing scalable AI and machine learning models",
              "⚡ Experience in Deep Learning, Computer Vision, and Data Analysis",
              "⚡ Building interactive and dynamic data visualization dashboards",
              "⚡ Implementing machine learning algorithms for classification and prediction tasks",
              "⚡ Data preprocessing, feature engineering, and model optimization",
            ],
            softwareSkills: [
              {
                skillName: "Tensorflow",
                fontAwesomeClassname: "logos-tensorflow",
                style: {
                  backgroundColor: "transparent",
                },
              },
              {
                skillName: "Keras",
                fontAwesomeClassname: "simple-icons:keras",
                style: {
                  backgroundColor: "white",
                  color: "#D00000",
                },
              },
              {
                skillName: "OpenCV",
                fontAwesomeClassname: "devicon:opencv",
                style: {
                  backgroundColor: "transparent",
                },
              },
              {
                skillName: "Python",
                fontAwesomeClassname: "ion-logo-python",
                style: {
                  backgroundColor: "transparent",
                  color: "#3776AB",
                },
              },
              {
                skillName: "Deeplearning",
                imageSrc: "deeplearning_ai_logo.png",
              },
            ],
          },
          {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
              "⚡ Designing and managing relational databases with PostgreSQL and Entity Framework Core",
              "⚡ Building responsive and dynamic web applications using React.js and Redux",
              "⚡ Implementing type-safe, maintainable code using TypeScript and JavaScript",
              "⚡ Developing scalable backend systems with .NET Framework and C#",
              "⚡ Version control and collaboration using GitHub",
            ],
            softwareSkills: [
              {
                skillName: "PostgreSQL",
                fontAwesomeClassname: "simple-icons:postgresql",
                style: {
                  color: "#336791",
                },
              },
              // {
              //   skillName: "Entity Framework Core",
              //   fontAwesomeClassname: "simple-icons:dotnet",
              //   style: {
              //     color: "#512BD4",
              //   },
              // },
              // {
              //   skillName: "NodeJS",
              //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
              //   style: {
              //     color: "#339933",
              //   },
              // },
              {
                skillName: "NPM",
                fontAwesomeClassname: "simple-icons:npm",
                style: {
                  color: "#CB3837",
                },
              },
              {
                skillName: ".NET Framework",
                fontAwesomeClassname: "simple-icons:dotnet",
                style: {
                  color: "#512BD4",
                },
              },
              {
                skillName: "TypeScript",
                fontAwesomeClassname: "simple-icons:typescript",
                style: {
                  color: "#3178C6",
                },
              },
              {
                skillName: "ReactJS",
                fontAwesomeClassname: "simple-icons:react",
                style: {
                  color: "#61DAFB",
                },
              },
              {
                skillName: "Redux",
                fontAwesomeClassname: "simple-icons:redux",
                style: {
                  color: "#764ABC",
                },
              },
              {
                skillName: "GitHub",
                fontAwesomeClassname: "simple-icons:github",
                style: {
                  color: "#181717",
                },
              },
            ],
          },
          // {
          //   title: "Cloud Infra-Architecture",
          //   fileName: "CloudInfraImg",
          //   skills: [
          //     "⚡ Experience working on multiple cloud platforms",
          //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
          //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
          //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
          //   ],
          //   softwareSkills: [
          //     {
          //       skillName: "GCP",
          //       fontAwesomeClassname: "simple-icons:googlecloud",
          //       style: {
          //         color: "#4285F4",
          //       },
          //     },
          //     {
          //       skillName: "AWS",
          //       fontAwesomeClassname: "simple-icons:amazonaws",
          //       style: {
          //         color: "#FF9900",
          //       },
          //     },
          //     {
          //       skillName: "Azure",
          //       fontAwesomeClassname: "simple-icons:microsoftazure",
          //       style: {
          //         color: "#0089D6",
          //       },
          //     },
          //     {
          //       skillName: "Firebase",
          //       fontAwesomeClassname: "simple-icons:firebase",
          //       style: {
          //         color: "#FFCA28",
          //       },
          //     },
          //     {
          //       skillName: "PostgreSQL",
          //       fontAwesomeClassname: "simple-icons:postgresql",
          //       style: {
          //         color: "#336791",
          //       },
          //     },
          //     {
          //       skillName: "MongoDB",
          //       fontAwesomeClassname: "simple-icons:mongodb",
          //       style: {
          //         color: "#47A248",
          //       },
          //     },
          //     {
          //       skillName: "Docker",
          //       fontAwesomeClassname: "simple-icons:docker",
          //       style: {
          //         color: "#1488C6",
          //       },
          //     },
          //     {
          //       skillName: "Kubernetes",
          //       fontAwesomeClassname: "simple-icons:kubernetes",
          //       style: {
          //         color: "#326CE5",
          //       },
          //     },
          //   ],
          // },
          // {
          //   title: "UI/UX Design",
          //   fileName: "DesignImg",
          //   skills: [
          //     "⚡ Designing highly attractive user interface for mobile and web applications",
          //     "⚡ Customizing logo designs and building logos from scratch",
          //     "⚡ Creating the flow of application functionalities to optimize user experience",
          //   ],
          //   softwareSkills: [
          //     {
          //       skillName: "Adobe XD",
          //       fontAwesomeClassname: "simple-icons:adobexd",
          //       style: {
          //         color: "#FF2BC2",
          //       },
          //     },
          //     {
          //       skillName: "Figma",
          //       fontAwesomeClassname: "simple-icons:figma",
          //       style: {
          //         color: "#F24E1E",
          //       },
          //     },
          //     {
          //       skillName: "Adobe Illustrator",
          //       fontAwesomeClassname: "simple-icons:adobeillustrator",
          //       style: {
          //         color: "#FF7C00",
          //       },
          //     },
          //     {
          //       skillName: "Inkscape",
          //       fontAwesomeClassname: "simple-icons:inkscape",
          //       style: {
          //         color: "#000000",
          //       },
          //     },
          //   ],
          // },
        ],
      };

      // Education Page
      const competitiveSites = {
        competitiveSites: [
          // {
          //   siteName: "LeetCode",
          //   iconifyClassname: "simple-icons:leetcode",
          //   style: {
          //     color: "#F79F1B",
          //   },
          //   profileLink: "https://leetcode.com/layman_brother/",
          // },
          // {
          //   siteName: "HackerRank",
          //   iconifyClassname: "simple-icons:hackerrank",
          //   style: {
          //     color: "#2EC866",
          //   },
          //   profileLink: "https://www.hackerrank.com/layman_brother",
          // },
          // {
          //   siteName: "Codechef",
          //   iconifyClassname: "simple-icons:codechef",
          //   style: {
          //     color: "#5B4638",
          //   },
          //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
          // },
          // {
          //   siteName: "Codeforces",
          //   iconifyClassname: "simple-icons:codeforces",
          //   style: {
          //     color: "#1F8ACB",
          //   },
          //   profileLink: "http://codeforces.com/profile/layman_brother",
          // },
          // {
          //   siteName: "Hackerearth",
          //   iconifyClassname: "simple-icons:hackerearth",
          //   style: {
          //     color: "#323754",
          //   },
          //   profileLink: "https://www.hackerearth.com/@ashutosh391",
          // },
          // {
          //   siteName: "Kaggle",
          //   iconifyClassname: "simple-icons:kaggle",
          //   style: {
          //     color: "#20BEFF",
          //   },
          //   profileLink: "https://www.kaggle.com/laymanbrother",
          // },
        ],
      };
      const degrees = {
        degrees: [
          // {
          //   title: "Indian Institute of Information Technology Kurnool",
          //   subtitle: "B.Tech. in Computer Engineering",
          //   logo_path: "iiitk_logo.png",
          //   alt_name: "IIITDM Kurnool",
          //   duration: "2016 - 2020",
          //   descriptions: [
          //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
          //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
          //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
          //   ],
          //   website_link: "http://iiitk.ac.in",
          // },
          {
            title: "King Abdulaziz University",
            subtitle: "Bachelor of Science in Computer Science",
            logo_path: "KAU.svg",
            alt_name: "King Abdulaziz University",
            duration: "2018 - 2023",
            descriptions: [
              "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
              "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
              "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
            ],
            website_link: "https://www.kau.edu.sa/home_english.aspx",
          },
        ],
      };
      const certifications = {
        certifications: [
          {
            title: "Data Science",
            subtitle: "- Learning Space",
            logo_path: "learningspace.png",
            certificate_link:
              "https://drive.google.com/file/d/1JZ8WiQW_VmDx_YOA64ovj9EGRzzR9qJY/view?usp=drivesdk",
            alt_name: "Learning Space",
            color_code: "#FFEB99", // Pastel yellow
          },
          {
            title: "Introduction to Artificial Intelligence",
            subtitle: "- KAUST",
            logo_path: "KAUST.png",
            certificate_link:
              "https://drive.google.com/file/d/1uSQ0VAvmI4yovEWHpgRIPu-HYKD5iQCZ/view",
            alt_name:
              "King Abdullah University of Science and Technology (KAUST)",
            color_code: "#B5D8FF", // Pastel blue
          },
          {
            title: "Advanced Artificial Intelligence",
            subtitle: "- KAUST",
            logo_path: "KAUST.png",
            certificate_link:
              "https://drive.google.com/file/d/1uSQ0VAvmI4yovEWHpgRIPu-HYKD5iQCZ/view",
            alt_name:
              "King Abdullah University of Science and Technology (KAUST)",
            color_code: "#A8D0E6", // Pastel light blue
          },
          {
            title: "Network Security",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/certificate/EH6J2KFTBAA9",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#A9E4B8", // Pastel green
          },
          {
            title: "Cryptography",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/records/VXDZPLJY7TPJ",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#C1E6B7", // Distinct Pastel Green
          },
          {
            title: "Access Control Concepts",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/certificate/CF353PWKRGVD",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#F8C8D8", // Pastel pink
          },
          {
            title: "Security Principles",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/certificate/CGJD3WJVXZ9F",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#D4A6E1", // Pastel lavender
          },
          {
            title:
              "Applied Mathematics and Computational Science and Statistics School",
            subtitle: "- Advanced Topics Mathematics and Statistics",
            logo_path: "KAUST.png",
            certificate_link: "",
            alt_name:
              "King Abdullah University of Science and Technology (KAUST)",
            color_code: "#FFDFD3", // Pastel beach (peachy tone)
          },
          {
            title: "McKinsey Forward Program",
            subtitle: "- Critical Practical Skills for Professionals",
            logo_path: "Mc.png",
            certificate_link:
              "https://www.credly.com/badges/817a2aef-22eb-4c0f-90b2-c8f5373fa8af/linked_in_profile",
            alt_name: "IBM",
            color_code: "#D2B19D",
            // Pastel brown
            logo_style: {
              width: "250px",
            }, // Inline style for smaller logo
          },
          {
            title: "C# Full-Stack Development Bootcamp",
            subtitle: "- Provided by SDA in partnership with Integrify",
            logo_path: "integrify.png",
            certificate_link: "",
            alt_name: "Integrify",
            color_code: "#F4B8A2",
            // Pastel coral
            logo_style: {
              width: "280px",
            }, // Inline style for smaller logo
          },
        ],
      };

      // Experience Page
      const experience = {
        title: "Experience",
        subtitle: "Work, Internship and Volunteership",
        description:
          "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
        header_image_path: "experience.svg",
        sections: [
          {
            title: "Work",
            work: true,
            experiences: [
              {
                title: "Training Assistant",
                company: "Institution of Public Administration (IPA)",
                company_url: "https://www.ipa.edu.sa/",
                logo_path: "IPA.png",
                duration: "Jun 2024 – Present",
                location: "Riyadh, Kingdom of Saudi Arabia",
                description:
                  "As part of a rotational program, I gained hands-on experience across various departments, supporting both training and administrative functions. I helped review and audit question banks to ensure the quality and accuracy of training materials. I also implemented AI tools for grammar and spell-checking to enhance those materials. Additionally,  I contributed to the development data-driven dashboards using Qlik Sense, HTML, CSS, and JavaScript to help visualize key insights.",
                color: "#000000",
              },
              {
                title: "Software Developer",
                company: "Information & Software Co., Ltd.",
                company_url: "https://infosoft.com.sa/en/",
                logo_path: "Infosoft.png",
                duration: "Oct 2023 – Nov 2023",
                location: "Jeddah, Kingdom of Saudi Arabia",
                description:
                  "I conducted thorough software testing to improve system efficiency. In addition, I analyzed e-invoice systems to ensure compliance with ZATCA standards. This allowed me to contribute to refining the application design, optimizing its overall functionality.",
                color: "#0879bf",
              },
              // {
              //   title: "Android and ML Developer",
              //   company: "Muffito Incorporation",
              //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
              //   logo_path: "muffito_logo.png",
              //   duration: "May 2018 - Oct 2018",
              //   location: "Pune, Maharashtra",
              //   description:
              //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
              //   color: "#9b1578",
              // },
              // {
              //   title: "Android Developer",
              //   company: "FreeCopy Pvt. Ltd.",
              //   company_url: "https://www.linkedin.com/company/freecopy/about/",
              //   logo_path: "freecopy_logo.png",
              //   duration: "Nov 2017 - Dec 2017",
              //   location: "Ahmedabad, Gujarat",
              //   description:
              //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
              //   color: "#fc1f20",
              // },
            ],
          },
          {
            title: "Internships",
            experiences: [
              {
                title: "Computer Science Intern",
                company: "Saudi Aramco",
                company_url: "https://www.aramco.com/",
                logo_path: "aramco.png",
                duration: "Jul 2023 – Aug 2023",
                location: "Dhahran, Kingdom of Saudi Arabia",
                description:
                  "I contributed to the development and enhancement of web-based gamification features designed to support the business mathematics curriculum. I also assisted in troubleshooting technical challenges and configuring iPads for student acceptance tests, ensuring a smooth and efficient deployment for educational use.",
                color: "#000000",
              },
              //     {
              //       title: "Data Science Research Intern",
              //       company: "Delhivery Pvt. Ltd.",
              //       company_url: "https://www.delhivery.com/",
              //       logo_path: "delhivery_logo.png",
              //       duration: "May 2019 - Sept 2019",
              //       location: "Gurgaon, Haryana",
              //       description:
              //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
              //       color: "#ee3c26",
              //     },
              //     {
              //       title: "Data Science Intern",
              //       company: "Intel Indexer LLC",
              //       company_url:
              //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
              //       logo_path: "intel_logo.jpg",
              //       duration: "Nov 2018 - Dec 2018",
              //       location: "Work From Home",
              //       description:
              //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
              //       color: "#0071C5",
              //     },
            ],
          },
          // {
          //   title: "Volunteerships",
          //   experiences: [
          //     {
          //       title: "Google Explore ML Facilitator",
          //       company: "Google",
          //       company_url: "https://about.google/",
          //       logo_path: "google_logo.png",
          //       duration: "June 2019 - April 2020",
          //       location: "Hyderabad, Telangana",
          //       description:
          //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          //       color: "#4285F4",
          //     },
          //     {
          //       title: "Microsoft Student Partner",
          //       company: "Microsoft",
          //       company_url: "https://www.microsoft.com/",
          //       logo_path: "microsoft_logo.png",
          //       duration: "Aug 2019 - May 2020",
          //       location: "Hyderabad, Telangana",
          //       description:
          //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          //       color: "#D83B01",
          //     },
          //     {
          //       title: "Mozilla Campus Captain",
          //       company: "Mozilla",
          //       company_url: "https://www.mozilla.org/",
          //       logo_path: "mozilla_logo.png",
          //       duration: "Oct 2019 - May 2020",
          //       location: "Kurnool, Andhra Pradesh",
          //       description:
          //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          //       color: "#000000",
          //     },
          //     {
          //       title: "Developer Students Club Member",
          //       company: "DSC IIITDM Kurnool",
          //       company_url:
          //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          //       logo_path: "dsc_logo.png",
          //       duration: "Jan 2018 - May 2020",
          //       location: "Kurnool, Andhra Pradesh",
          //       description:
          //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          //       color: "#0C9D58",
          //     },
          //     {
          //       title: "Developer Program Member",
          //       company: "Github",
          //       company_url: "https://github.com/",
          //       logo_path: "github_logo.png",
          //       duration: "July 2019 - PRESENT",
          //       location: "Work From Home",
          //       description:
          //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          //       color: "#181717",
          //     },
          //   ],
          // },
        ],
      };

      // Projects Page
      const projectsHeader = {
        title: "Projects",
        description:
          "My projects cover a wide range of areas, including machine learning, full-stack development, and various technical fields. I have worked with different technologies to develop and solve real-world problems, enhancing my technical expertise and skills along the way.",
        avatar_image_path: "projects_image.svg",
      };
      const publicationsHeader = {
        title: "Publications",
        description: "Some of my published Articles, Blogs and Research.",
        avatar_image_path: "projects_image.svg",
      };
      const publications = {
        data: [
          {
            id: "neuro-symbolic-sudoku-solver",
            name: "Neuro-Symbolic Sudoku Solver",
            createdAt: "2023-07-02T00:00:00Z",
            description: "Paper published in KDD KiML 2023",
            url: "https://arxiv.org/abs/2307.00653",
          },
          {
            id: "mdp-diffusion",
            name: "MDP-Diffusion",
            createdAt: "2023-09-19T00:00:00Z",
            description: "Blog published in Paperspace",
            url: "https://blog.paperspace.com/mdp-diffusion/",
          },
          {
            id: "consistency-models",
            name: "Consistency Models",
            createdAt: "2023-10-12T00:00:00Z",
            description: "Blog published in Paperspace",
            url: "https://blog.paperspace.com/consistency-models/",
          },
        ],
      };

      // Contact Page
      const contactPageData = {
        contactSection: {
          title: "Contact Me",
          profile_image_path: "animated_ashutosh.png",
          description:
            "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
        },
        blogSection: {
          title: "Blogs",
          subtitle:
            "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
          link: "https://blogs.ashutoshhathidara.com/",
          avatar_image_path: "blogs_image.svg",
        },
        addressSection: {
          title: "Address",
          subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
          locality: "San Jose",
          country: "USA",
          region: "California",
          postalCode: "95129",
          streetAddress: "Saratoga Avenue",
          avatar_image_path: "address_image.svg",
          location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
        },
        phoneSection: {
          title: "",
          subtitle: "",
        },
      };

      /***/
    },

    /***/ "R+8Y": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return Button;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "puG6"
      );
      /* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _Button_css__WEBPACK_IMPORTED_MODULE_1__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const onMouseEnter = (event, color, bgColor) => {
        const el = event.target;
        el.style.color = color;
        el.style.backgroundColor = bgColor;
      };
      const onMouseOut = (event, color, bgColor) => {
        const el = event.target;
        el.style.color = color;
        el.style.backgroundColor = bgColor;
      };
      function Button({ text, className, href, newTab, theme }) {
        return __jsx(
          "div",
          {
            className: className,
          },
          __jsx(
            "a",
            {
              className: "main-button",
              href: href,
              target: newTab && "_blank",
              style: {
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
              },
              onMouseEnter: (event) =>
                onMouseEnter(event, theme.text, theme.body),
              onMouseOut: (event) => onMouseOut(event, theme.body, theme.text),
            },
            text
          )
        );
      }

      /***/
    },

    /***/ bOmX: /***/ function (module, exports) {
      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require("react");

      /***/
    },

    /***/ dnrx: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return BlogsImg;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      class BlogsImg extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
        render() {
          // const theme = this.props.theme;
          return __jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "614.24714",
              height: "528.65003",
              viewBox: "0 0 614.24714 528.65003",
              role: "img",
              artist: "Katerina Limpitsouni",
              source: "https://undraw.co/",
            },
            __jsx("path", {
              d:
                "M489.06465,258.67168c-4.93763-26.4263,2.83614-56.49071,24.44276-72.48657a123.86324,123.86324,0,0,0,25.82184,81.0254c6.93546,8.88938,15.575,18.05438,15.3066,29.32608-.16685,7.01352-3.95987,13.54729-8.95834,18.46962-4.99885,4.92244-11.15635,8.4713-17.24023,11.96495l-.947,1.47318C509.65591,308.328,494.00227,285.098,489.06465,258.67168Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#231942",
            }),
            __jsx("path", {
              d:
                "M513.9011,186.5891a105.86983,105.86983,0,0,0-6.98908,64.76136,45.59136,45.59136,0,0,0,4.82768,13.44405,26.14858,26.14858,0,0,0,9.87837,9.58161c3.77061,2.17874,7.87983,3.9707,11.05516,7.02808a16.01085,16.01085,0,0,1,4.71318,12.21634c-.152,5.62259-2.31531,10.85523-4.60862,15.8988-2.5463,5.59992-5.27982,11.37615-5.11468,17.672.02.76283-1.16482.74927-1.1848-.01241-.28731-10.95373,7.6319-19.75079,9.39647-30.26133.82338-4.90441.17374-10.08666-3.27429-13.88828-3.01516-3.32434-7.25105-5.17585-11.08793-7.34888a27.90244,27.90244,0,0,1-10.008-9.00887,42.14771,42.14771,0,0,1-5.32674-13.20884,102.71242,102.71242,0,0,1-2.32806-32.01772,107.74713,107.74713,0,0,1,9.03456-35.46463c.31048-.69431,1.32523-.08107,1.01677.6087Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M505.03917,244.42165a15.88383,15.88383,0,0,1-16.57127-12.18326c-.17318-.74241.97237-1.04641,1.14578-.303a14.70808,14.70808,0,0,0,15.4379,11.30147c.76028-.05715.74352,1.128-.01241,1.18479Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M519.56073,273.52321a30.61483,30.61483,0,0,0,7.6736-20.95005c-.01731-.76288,1.16751-.74955,1.1848.0124a31.844,31.844,0,0,1-8.0294,21.7842c-.5077.57079-1.33395-.27886-.829-.84655Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M506.205,209.93055a8.991,8.991,0,0,0,7.98705-2.99869c.50022-.577,1.326.27336.829.84655a10.07516,10.07516,0,0,1-8.82846,3.33694.61233.61233,0,0,1-.5862-.5986.59543.59543,0,0,1,.5986-.5862Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M601.86634,208.04366c-.3021.36914-.60419.73828-.90372,1.1171a118.40568,118.40568,0,0,0-10.837,15.85813c-.25247.4268-.5019.86314-.74157,1.29631a124.827,124.827,0,0,0-14.56489,43.58858,121.22208,121.22208,0,0,0-1.1114,18.385c.13349,8.49015.95374,17.685-1.6487,25.49357a20.79625,20.79625,0,0,1-.93652,2.39744l-41.76165,13.30563c-.11009-.01739-.21761-.02516-.32816-.0424l-1.64313.6075c-.02711-.31672-.04842-.64578-.07553-.9625-.01649-.18365-.02368-.37027-.04017-.55392-.00805-.12338-.01565-.247-.03-.35783-.00283-.041-.00519-.08226-.005-.11384-.01432-.11087-.01584-.21537-.02712-.31671-.12421-1.83906-.23913-3.68114-.33449-5.52939-.003-.00954-.003-.00954.00322-.022-.7168-14.07671-.26472-28.33693,2.33742-42.07519.07843-.41331.15335-.836.25085-1.25539a115.67539,115.67539,0,0,1,5.11549-18.17043,102.26,102.26,0,0,1,4.12386-9.4897,85.03657,85.03657,0,0,1,15.43659-21.64774c12.4587-12.68053,28.83417-21.23539,46.38074-21.50476C600.97441,208.04451,601.41443,208.04069,601.86634,208.04366Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#231942",
            }),
            __jsx("path", {
              d:
                "M601.94133,208.60361A105.86977,105.86977,0,0,0,557.37014,256.104a45.5906,45.5906,0,0,0-4.23962,13.64092,26.14853,26.14853,0,0,0,2.11853,13.59783c1.69887,4.00977,3.901,7.91459,4.59553,12.2675a16.01084,16.01084,0,0,1-3.59186,12.59173c-3.50659,4.39778-8.38425,7.27332-13.25191,9.91959-5.40461,2.93818-11.06486,5.9044-14.72356,11.03072-.4433.62113-1.38115-.103-.93852-.72323,6.3655-8.91892,17.985-11.175,25.722-18.50465,3.61022-3.42017,6.2116-7.949,5.74737-13.06037-.40595-4.46963-2.67333-8.49826-4.42856-12.54337a27.9024,27.9024,0,0,1-2.56685-13.21857,42.1476,42.1476,0,0,1,3.69953-13.75359,102.71244,102.71244,0,0,1,17.41805-26.966A107.7471,107.7471,0,0,1,601.496,207.50543c.66593-.36744,1.10694.73315.44536,1.09818Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M560.04639,249.44417a15.88383,15.88383,0,0,1-5.89607-19.7047c.30871-.697,1.40639-.25007,1.09727.4479a14.70809,14.70809,0,0,0,5.522,18.31828c.64145.41211-.08546,1.34828-.72323.93852Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M554.11989,281.42311a30.61484,30.61484,0,0,0,18.74032-12.1074c.44549-.61954,1.38347.10445.93853.72323a31.844,31.844,0,0,1-19.52662,12.55921c-.749.15008-.89719-1.02578-.15223-1.175Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M581.74329,222.60689a8.991,8.991,0,0,0,8.18263,2.41447c.74676-.1595.89413,1.01658.15224,1.175a10.07517,10.07517,0,0,1-9.0581-2.651.61234.61234,0,0,1-.10765-.83089.59542.59542,0,0,1,.83088-.10764Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M727.45024,386.00273a9.45151,9.45151,0,0,1,.21487,1.47266l38.57107,22.2515,9.37525-5.39716L785.606,417.414,769.9375,428.58158a7.18313,7.18313,0,0,1-8.61813-.21L721.546,396.9941a9.42524,9.42524,0,1,1,5.90428-10.99137Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M766.77166,407.27011a4.03615,4.03615,0,0,1,2.01514-2.69421l17.80755-9.70255a11.2213,11.2213,0,0,1,13.56639,17.87792l-14.27229,14.499a4.04052,4.04052,0,0,1-6.10514-.4016l-12.28814-16.29234A4.036,4.036,0,0,1,766.77166,407.27011Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M797.78041,351.65092c2.56215-8.16547,8.38856-15.65455,16.44635-18.41493,8.05827-2.76037,19.8576,1.44458,25.91561,7.48209,11.08127,11.04382,11.42231,24.56342,3.809,36.55274-1.51431-.08015-6.73962-.13944-8.27227-.19684L833.511,369.8477v7.15505c-11.96283-.3697-24.41723-.13822-36.87838.10116C795.51571,368.61534,795.21826,359.81639,797.78041,351.65092Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            __jsx("polygon", {
              points:
                "502.281 507.932 491.37 507.932 486.179 465.845 502.283 465.846 502.281 507.932",
              fill: "#ffb6b6",
            }),
            __jsx("polygon", {
              points:
                "569.528 507.932 558.617 507.932 553.426 465.845 569.53 465.846 569.528 507.932",
              fill: "#ffb6b6",
            }),
            __jsx("polygon", {
              points:
                "537.668 249.442 540.14 255.87 539.646 262.299 491.259 279.058 493.66 250.926 499.099 244.498 537.668 249.442",
              fill: "#ffb6b6",
            }),
            __jsx("circle", {
              cx: "522.36888",
              cy: "174.31461",
              r: "17.28172",
              fill: "#ffb7b7",
            }),
            __jsx("path", {
              d:
                "M841.37788,464.61289V475.5963s12.85615,16.70676,5.93361,29.56291L867.14676,676.251H846.37913L811.70984,531.86045,796.9324,673.28422H779.13157l-2.1222-112.47687a239.05247,239.05247,0,0,1,14.56725-86.79921l0-.00005Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M803.37069,337.48574A21.70637,21.70637,0,0,1,836.372,356.42966c-9.66.44425-19.80767.5599-30.09732.57988l-2.43178-5.9516-1.43366,5.956q-4.703-.00045-9.42385-.01237A22.16336,22.16336,0,0,1,803.37069,337.48574Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M800.03827,714.325H792.2958l-1.382-7.30982-3.5395,7.30982H766.83942a4.61606,4.61606,0,0,1-2.623-8.41464L780.615,694.585v-7.39l17.24842,1.0295Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M868.27476,714.325h-7.74247l-1.382-7.30982-3.5395,7.30982H835.07592a4.61606,4.61606,0,0,1-2.623-8.41464L848.85147,694.585v-7.39l17.24841,1.0295Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M849.2407,499.83848a134.7058,134.7058,0,0,0-2.93757-39.38028c-3.67033-16.29464-8.33459-37.02845-8.425-37.56438a.19946.19946,0,0,1-.00278-.03174l-1.42171-30.37091a.351.351,0,0,0-.33881-.33437l-9.83314-.33052a.351.351,0,0,1-.33919-.35079v0a5.57828,5.57828,0,0,0-5.57829-5.57828H800.72491a5.22274,5.22274,0,0,0-5.17988,4.57191.34673.34673,0,0,1-.35288.312l-7.64219-.25686a.351.351,0,0,0-.34658.24542l-.53158,1.68889a176.94738,176.94738,0,0,0-6.27367,76.8496c.92543,6.85665.50577,17.16646.15574,22.91022a4.27118,4.27118,0,0,0,4.02009,4.52729c14.20708.81747,54.43317,20.28092,64.06364,10.9885C848.66084,507.71177,848.91726,504.28384,849.2407,499.83848Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M770.45153,386.00273a9.45151,9.45151,0,0,1,.21487,1.47266l38.57107,22.2515,9.37525-5.39716,9.99456,13.0843-15.66849,11.16755a7.18313,7.18313,0,0,1-8.61813-.21L764.54725,396.9941a9.42524,9.42524,0,1,1,5.90428-10.99137Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M809.773,407.27011a4.03615,4.03615,0,0,1,2.01514-2.69421l17.80755-9.70255a11.22131,11.22131,0,0,1,13.5664,17.87792l-14.2723,14.499a4.04052,4.04052,0,0,1-6.10514-.4016l-12.28814-16.29234A4.036,4.036,0,0,1,809.773,407.27011Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            __jsx("circle", {
              cx: "45",
              cy: "423.69547",
              r: "45",
              fill: "#f0f0f0",
            }),
            __jsx("path", {
              d:
                "M735.529,453.21515,409.42085,602.93776a19.27705,19.27705,0,0,1-25.53338-9.465L303.412,418.19049a19.27736,19.27736,0,0,1,9.465-25.53338L638.98509,242.9345a19.27735,19.27735,0,0,1,25.53337,9.465L744.994,427.68177A19.27705,19.27705,0,0,1,735.529,453.21515Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M318.30109,404.47143a6.26246,6.26246,0,0,0-3.07482,8.29487L395.7018,588.04862a6.26245,6.26245,0,0,0,8.29486,3.07482L730.10484,441.40082a6.26245,6.26245,0,0,0,3.07482-8.29486L652.70414,257.82364a6.26246,6.26246,0,0,0-8.29487-3.07482Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#BE95C4",
            }),
            __jsx("path", {
              d:
                "M735.529,453.21515,409.42085,602.93776a19.27705,19.27705,0,0,1-25.53338-9.465L303.412,418.19049a19.27736,19.27736,0,0,1,9.465-25.53338L638.98509,242.9345a19.27735,19.27735,0,0,1,25.53337,9.465L744.994,427.68177A19.27705,19.27705,0,0,1,735.529,453.21515ZM313.7114,394.4747a17.27491,17.27491,0,0,0-8.48186,22.8813l80.47552,175.28231a17.27491,17.27491,0,0,0,22.8813,8.48186L734.69454,451.39756a17.27492,17.27492,0,0,0,8.48186-22.8813L662.70087,253.234a17.2749,17.2749,0,0,0-22.88129-8.48186Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            }),
            __jsx("path", {
              d:
                "M654.04246,373.67481,394.96915,492.62041a11.14657,11.14657,0,0,1-12.60483-2.34253l-75.79959-77.7327a11.12377,11.12377,0,0,1,3.30857-17.86861l332.018-153.05436a11.12474,11.12474,0,0,1,15.70523,8.81986l.0446-.00114,2.88018,112.84155A11.11021,11.11021,0,0,1,654.04246,373.67481ZM642.74,243.43328,310.71024,396.493a9.1235,9.1235,0,0,0-2.71376,14.65549L383.796,488.88128a9.142,9.142,0,0,0,10.3387,1.92154L653.208,371.85723a9.11259,9.11259,0,0,0,5.31384-8.5239l-2.85465-111.84156.3995-.00988-.3995.00988A9.12386,9.12386,0,0,0,642.74,243.43328Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            }),
            __jsx("path", {
              d:
                "M491.58023,534.58773l-80.71652,37.05853a4.90689,4.90689,0,1,1-4.09475-8.9187L487.48548,525.669a4.90689,4.90689,0,0,1,4.09475,8.9187Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d: "M550.63063,420.05309a25.22024,25.22024,0,1,1-45.84,21.046",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            }),
            __jsx("path", {
              d:
                "M732.62106,691.62827H373.78488a19.277,19.277,0,0,1-19.25537-19.25537V479.49936A19.27735,19.27735,0,0,1,373.78488,460.244H732.62106a19.27735,19.27735,0,0,1,19.25537,19.25537V672.3729A19.277,19.277,0,0,1,732.62106,691.62827Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M373.78488,473.244a6.26246,6.26246,0,0,0-6.25537,6.25537V672.3729a6.26246,6.26246,0,0,0,6.25537,6.25537H732.62106a6.26246,6.26246,0,0,0,6.25537-6.25537V479.49936a6.26246,6.26246,0,0,0-6.25537-6.25537Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M732.62106,691.62827H373.78488a19.277,19.277,0,0,1-19.25537-19.25537V479.49936A19.27735,19.27735,0,0,1,373.78488,460.244H732.62106a19.27735,19.27735,0,0,1,19.25537,19.25537V672.3729A19.277,19.277,0,0,1,732.62106,691.62827ZM373.78488,462.244a17.2749,17.2749,0,0,0-17.25537,17.25537V672.3729a17.2749,17.2749,0,0,0,17.25537,17.25537H732.62106a17.2749,17.2749,0,0,0,17.25537-17.25537V479.49936A17.2749,17.2749,0,0,0,732.62106,462.244Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M691.75436,585.34262H406.68063a11.14658,11.14658,0,0,1-10.47778-7.38818l-36.45264-102.27a11.12377,11.12377,0,0,1,10.4624-14.8584l365.59717-.562a11.12473,11.12473,0,0,1,10.59277,14.56836l.041.01758L701.97848,578.60141A11.11021,11.11021,0,0,1,691.75436,585.34262ZM735.8254,462.264l-365.6101.562a9.12351,9.12351,0,0,0-8.58118,12.18653l36.45251,102.27a9.142,9.142,0,0,0,8.594,6.06006H691.75436a9.11257,9.11257,0,0,0,8.38574-5.52929l44.07105-102.832.36718.15771-.36718-.15771A9.12385,9.12385,0,0,0,735.8254,462.264Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M476.96954,663.79276H388.15236a4.90689,4.90689,0,1,1,0-9.81378h88.81718a4.90689,4.90689,0,1,1,0,9.81378Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            __jsx("path", {
              d: "M578.42321,584.34286a25.22024,25.22024,0,0,1-50.44048,0",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            __jsx("circle", {
              cx: "126",
              cy: "99.69547",
              r: "9",
              fill: "#f0f0f0",
            }),
            __jsx("circle", {
              cx: "9",
              cy: "315.69547",
              r: "9",
              fill: "#f0f0f0",
            }),
            __jsx("circle", {
              cx: "459",
              cy: "146.69547",
              r: "9",
              fill: "#f0f0f0",
            }),
            __jsx("path", {
              d:
                "M905.93289,714.325h-171.294a1.19068,1.19068,0,0,1,0-2.38137h171.294a1.19069,1.19069,0,0,1,0,2.38137Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            })
          );
        }
      }

      /***/
    },

    /***/ puG6: /***/ function (module, exports) {
      /***/
    },

    /***/ q1LP: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "u8Nd"
      );
      /* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        emailjs_com__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "HfBV"
      );
      /* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react_reveal__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _ContactForm_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "9boD"
      );
      /* harmony import */ var _ContactForm_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _ContactForm_css__WEBPACK_IMPORTED_MODULE_3__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
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

      // Import EmailJS SDK
      // Optional: add fade-in effect
      // Import CSS for the form styling

      function ContactForm({ theme }) {
        const { 0: userInput, 1: setUserInput } = Object(
          react__WEBPACK_IMPORTED_MODULE_0__["useState"]
        )({
          title: "",
          sender_name: "",
          email: "",
          message: "",
        });
        const { 0: isLoading, 1: setIsLoading } = Object(
          react__WEBPACK_IMPORTED_MODULE_0__["useState"]
        )(false);
        const { 0: status, 1: setStatus } = Object(
          react__WEBPACK_IMPORTED_MODULE_0__["useState"]
        )("");

        // Handle input change
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setUserInput((prevState) =>
            _objectSpread(
              _objectSpread({}, prevState),
              {},
              {
                [name]: value,
              }
            )
          );
        };

        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();

          // Basic validation (make sure all fields are filled)
          if (
            !userInput.title ||
            !userInput.sender_name ||
            !userInput.email ||
            !userInput.message
          ) {
            setStatus("Please fill in all fields");
            return;
          }

          // Set loading state
          setIsLoading(true);

          // Call EmailJS to send the email
          sendEmail(userInput);
        };

        // Send email using EmailJS
        const sendEmail = (data) => {
          emailjs_com__WEBPACK_IMPORTED_MODULE_1___default.a
            .send(
              "service_3v98hqc",
              // Replace with your EmailJS service ID
              "template_b7erwfl",
              // Replace with your EmailJS template ID
              {
                title: data.title,
                sender_name: data.sender_name,
                email: data.email,
                message: data.message,
              },
              "OQqXboegOJYkVb4aK" // Replace with your EmailJS user ID
            )
            .then(
              (response) => {
                console.log("SUCCESS!", response);
                setStatus(
                  "Message sent successfully! Thank you for reaching out."
                );
                setIsLoading(false);
                setUserInput({
                  title: "",
                  sender_name: "",
                  email: "",
                  message: "",
                });
              },
              (error) => {
                console.log("FAILED...", error);
                setStatus("Something went wrong. Please try again.");
                setIsLoading(false);
              }
            );
        };
        return __jsx(
          "div",
          {
            className: "contact-form-main",
          },
          __jsx(
            react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"],
            {
              bottom: true,
              duration: 1000,
              distance: "40px",
            },
            __jsx(
              "div",
              {
                className: "contact-form",
              },
              __jsx(
                "form",
                {
                  onSubmit: handleSubmit,
                  className: "contact-form",
                },
                __jsx(
                  "div",
                  {
                    className: "form-group",
                  },
                  __jsx(
                    "label",
                    {
                      className: "form-label",
                    },
                    "Title"
                  ),
                  __jsx("input", {
                    type: "text",
                    name: "title",
                    value: userInput.title,
                    onChange: handleInputChange,
                    required: true,
                    className: "form-input",
                    style: {
                      backgroundColor: theme.background,
                      color: theme.text,
                    },
                  })
                ),
                __jsx(
                  "div",
                  {
                    className: "form-group",
                  },
                  __jsx(
                    "label",
                    {
                      className: "form-label",
                    },
                    "Your Name:"
                  ),
                  __jsx("input", {
                    type: "text",
                    name: "sender_name",
                    value: userInput.sender_name,
                    onChange: handleInputChange,
                    required: true,
                    className: "form-input",
                    style: {
                      backgroundColor: theme.background,
                      color: theme.text,
                    },
                  })
                ),
                __jsx(
                  "div",
                  {
                    className: "form-group",
                  },
                  __jsx(
                    "label",
                    {
                      className: "form-label",
                    },
                    "Your Email:"
                  ),
                  __jsx("input", {
                    type: "email",
                    name: "email",
                    value: userInput.email,
                    onChange: handleInputChange,
                    required: true,
                    className: "form-input",
                    style: {
                      backgroundColor: theme.background,
                      color: theme.text,
                    },
                  })
                ),
                __jsx(
                  "div",
                  {
                    className: "form-group",
                  },
                  __jsx(
                    "label",
                    {
                      className: "form-label",
                    },
                    "Your Message:"
                  ),
                  __jsx("textarea", {
                    name: "message",
                    value: userInput.message,
                    onChange: handleInputChange,
                    required: true,
                    className: "form-textarea",
                    style: {
                      backgroundColor: theme.background,
                      color: theme.text,
                    },
                  })
                ),
                status &&
                  __jsx(
                    "p",
                    {
                      className: "form-status",
                    },
                    status
                  ),
                __jsx(
                  "div",
                  {
                    className: "form-group",
                  },
                  isLoading
                    ? __jsx("p", null, "Sending...")
                    : __jsx(
                        "div",
                        {
                          class: "project-button",
                        },
                        __jsx(
                          "button",
                          {
                            type: "submit",
                            className: "form-submit-btn",
                            style: {
                              color: theme.body,
                              backgroundColor: theme.text,
                              border: `solid 1px ${theme.text}`,
                            },
                          },
                          "Send Message"
                        )
                      )
                )
              )
            )
          )
        );
      }
      /* harmony default export */ __webpack_exports__["default"] = ContactForm;

      /***/
    },

    /***/ u8Nd: /***/ function (module, exports) {
      module.exports = require("emailjs-com");

      /***/
    },

    /******/
  }
);
