_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [25],
  {
    "7Vgs": function (e, r, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/errors/error404/Error",
        function () {
          return o("TfeF");
        },
      ]);
    },
    TfeF: function (e, r, o) {
      "use strict";
      o.r(r),
        o.d(r, "default", function () {
          return m;
        });
      var t = o("q1tI"),
        n = o.n(t),
        s = o("ZBbe"),
        a = o("Dq34"),
        l = o("3X8q"),
        i = o("s/m+"),
        d = (o("eCN1"), o("55Ip")),
        u = n.a.createElement;
      class m extends t.Component {
        render() {
          const e = this.props.theme;
          return u(
            "div",
            { className: "error-main" },
            u(s.a, { theme: this.props.theme }),
            u(
              "div",
              { className: "error-class" },
              u(
                i.Fade,
                { bottom: !0, duration: 2e3, distance: "40px" },
                u("h1", null, "Woops"),
                u("h1", { className: "error-404" }, "404"),
                u(
                  "p",
                  null,
                  "The requested page is unavailable at the moment!"
                ),
                u(
                  d.a,
                  {
                    className: "main-button",
                    to: "/home",
                    style: {
                      color: e.body,
                      backgroundColor: e.text,
                      border: "solid 1px " + e.text,
                      display: "inline-flex",
                    },
                  },
                  "Go Home"
                )
              )
            ),
            u(a.a, { theme: this.props.theme }),
            u(l.a, { theme: this.props.theme })
          );
        }
      }
    },
    dI71: function (e, r, o) {
      "use strict";
      function t(e, r) {
        return (t = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, r) {
              return (e.__proto__ = r), e;
            })(e, r);
      }
      function n(e, r) {
        (e.prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          t(e, r);
      }
      o.d(r, "a", function () {
        return n;
      });
    },
    eCN1: function (e, r) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
    wx14: function (e, r, o) {
      "use strict";
      function t() {
        return (t = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var o = arguments[r];
                for (var t in o)
                  ({}.hasOwnProperty.call(o, t) && (e[t] = o[t]));
              }
              return e;
            }).apply(null, arguments);
      }
      o.d(r, "a", function () {
        return t;
      });
    },
    zLVn: function (e, r, o) {
      "use strict";
      function t(e, r) {
        if (null == e) return {};
        var o = {};
        for (var t in e)
          if ({}.hasOwnProperty.call(e, t)) {
            if (-1 !== r.indexOf(t)) continue;
            o[t] = e[t];
          }
        return o;
      }
      o.d(r, "a", function () {
        return t;
      });
    },
  },
  [["7Vgs", 0, 1, 2, 3, 5, 6]],
]);
