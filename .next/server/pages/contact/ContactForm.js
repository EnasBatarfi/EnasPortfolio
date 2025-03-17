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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 3));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 3: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("q1LP");

      /***/
    },

    /***/ "9boD": /***/ function (module, exports) {
      /***/
    },

    /***/ HfBV: /***/ function (module, exports) {
      module.exports = require("react-reveal");

      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require("react");

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
