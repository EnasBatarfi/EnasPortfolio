_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    "9boD": function (e, t) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
    Vt2t: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact/ContactForm",
        function () {
          return r("q1LP");
        },
      ]);
    },
    q1LP: function (e, t, r) {
      "use strict";
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e) {
        var t = (function (e, t) {
          if ("object" != o(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var a = r.call(e, t || "default");
            if ("object" != o(a)) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == o(t) ? t : t + "";
      }
      function s(e, t, r) {
        return (
          (t = a(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.r(t);
      var n = r("q1tI"),
        l = r.n(n);
      const i = { _origin: "https://api.emailjs.com" },
        m = (e, t, r) => {
          if (!e)
            throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!r)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        };
      class u {
        constructor(e) {
          (this.status = e.status), (this.text = e.responseText);
        }
      }
      const d = (e, t, r = {}) =>
        new Promise((o, a) => {
          const s = new XMLHttpRequest();
          s.addEventListener("load", ({ target: e }) => {
            const t = new u(e);
            200 === t.status || "OK" === t.text ? o(t) : a(t);
          }),
            s.addEventListener("error", ({ target: e }) => {
              a(new u(e));
            }),
            s.open("POST", i._origin + e, !0),
            Object.keys(r).forEach((e) => {
              s.setRequestHeader(e, r[e]);
            }),
            s.send(t);
        });
      var c = (e, t, r, o) => {
          const a = o || i._userID;
          m(a, e, t);
          const s = {
            lib_version: "3.2.0",
            user_id: a,
            service_id: e,
            template_id: t,
            template_params: r,
          };
          return d("/api/v1.0/email/send", JSON.stringify(s), {
            "Content-type": "application/json",
          });
        },
        f = r("s/m+"),
        b = (r("9boD"), l.a.createElement);
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.default = function (e) {
        let { theme: t } = e;
        const { 0: r, 1: o } = Object(n.useState)({
            title: "",
            sender_name: "",
            email: "",
            message: "",
          }),
          { 0: a, 1: s } = Object(n.useState)(!1),
          { 0: l, 1: i } = Object(n.useState)(""),
          m = (e) => {
            const { name: t, value: r } = e.target;
            o((e) => g(g({}, e), {}, { [t]: r }));
          },
          u = (e) => {
            c(
              "service_3v98hqc",
              "template_b7erwfl",
              {
                title: e.title,
                sender_name: e.sender_name,
                email: e.email,
                message: e.message,
              },
              "OQqXboegOJYkVb4aK"
            ).then(
              (e) => {
                console.log("SUCCESS!", e),
                  i("Message sent successfully! Thank you for reaching out."),
                  s(!1),
                  o({ title: "", sender_name: "", email: "", message: "" });
              },
              (e) => {
                console.log("FAILED...", e),
                  i("Something went wrong. Please try again."),
                  s(!1);
              }
            );
          };
        return b(
          "div",
          { className: "contact-form-main" },
          b(
            f.Fade,
            { bottom: !0, duration: 1e3, distance: "40px" },
            b(
              "div",
              { className: "contact-form" },
              b(
                "form",
                {
                  onSubmit: (e) => {
                    e.preventDefault(),
                      r.title && r.sender_name && r.email && r.message
                        ? (s(!0), u(r))
                        : i("Please fill in all fields");
                  },
                  className: "contact-form",
                },
                b(
                  "div",
                  { className: "form-group" },
                  b("label", { className: "form-label" }, "Title"),
                  b("input", {
                    type: "text",
                    name: "title",
                    value: r.title,
                    onChange: m,
                    required: !0,
                    className: "form-input",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                b(
                  "div",
                  { className: "form-group" },
                  b("label", { className: "form-label" }, "Your Name:"),
                  b("input", {
                    type: "text",
                    name: "sender_name",
                    value: r.sender_name,
                    onChange: m,
                    required: !0,
                    className: "form-input",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                b(
                  "div",
                  { className: "form-group" },
                  b("label", { className: "form-label" }, "Your Email:"),
                  b("input", {
                    type: "email",
                    name: "email",
                    value: r.email,
                    onChange: m,
                    required: !0,
                    className: "form-input",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                b(
                  "div",
                  { className: "form-group" },
                  b("label", { className: "form-label" }, "Your Message:"),
                  b("textarea", {
                    name: "message",
                    value: r.message,
                    onChange: m,
                    required: !0,
                    className: "form-textarea",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                l && b("p", { className: "form-status" }, l),
                b(
                  "div",
                  { className: "form-group" },
                  a
                    ? b("p", null, "Sending...")
                    : b(
                        "div",
                        { class: "project-button" },
                        b(
                          "button",
                          {
                            type: "submit",
                            className: "form-submit-btn",
                            style: {
                              color: t.body,
                              backgroundColor: t.text,
                              border: "solid 1px " + t.text,
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
      };
    },
  },
  [["Vt2t", 0, 1, 2]],
]);
