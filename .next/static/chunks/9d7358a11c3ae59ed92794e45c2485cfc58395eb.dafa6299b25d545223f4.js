(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [12],
  {
    "0x0X": function (e, t, r) {
      "use strict";
      t.a = function (e) {
        function t(e, t, a) {
          var n = t.trim().split(h);
          t = n;
          var o = n.length,
            s = e.length;
          switch (s) {
            case 0:
            case 1:
              var i = 0;
              for (e = 0 === s ? "" : e[0] + " "; i < o; ++i)
                t[i] = r(e, t[i], a).trim();
              break;
            default:
              var l = (i = 0);
              for (t = []; i < o; ++i)
                for (var c = 0; c < s; ++c)
                  t[l++] = r(e[c] + " ", n[i], a).trim();
          }
          return t;
        }
        function r(e, t, r) {
          var a = t.charCodeAt(0);
          switch ((33 > a && (a = (t = t.trim()).charCodeAt(0)), a)) {
            case 38:
              return t.replace(p, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(p, "$1" + e.trim());
            default:
              if (0 < 1 * r && 0 < t.indexOf("\f"))
                return t.replace(
                  p,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                );
          }
          return e + t;
        }
        function a(e, t, r, o) {
          var s = e + ";",
            i = 2 * t + 3 * r + 4 * o;
          if (944 === i) {
            e = s.indexOf(":", 9) + 1;
            var l = s.substring(e, s.length - 1).trim();
            return (
              (l = s.substring(0, e).trim() + l + ";"),
              1 === L || (2 === L && n(l, 1)) ? "-webkit-" + l + l : l
            );
          }
          if (0 === L || (2 === L && !n(s, 1))) return s;
          switch (i) {
            case 1015:
              return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
              return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
              return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
              if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + s + s;
            case 978:
              return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
              return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
              if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
              if (0 < s.indexOf("image-set(", 11))
                return s.replace(P, "$1-webkit-$2") + s;
              break;
            case 932:
              if (45 === s.charCodeAt(4))
                switch (s.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      s.replace("-grow", "") +
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("grow", "positive") +
                      s
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("shrink", "negative") +
                      s
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("basis", "preferred-size") +
                      s
                    );
                }
              return "-webkit-" + s + "-ms-" + s + s;
            case 964:
              return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
              if (99 !== s.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (l = s
                  .substring(s.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                s +
                "-ms-flex-pack" +
                l +
                s
              );
            case 1005:
              return f.test(s)
                ? s.replace(d, ":-webkit-") + s.replace(d, ":-moz-") + s
                : s;
            case 1e3:
              switch (
                ((t = (l = s.substring(13).trim()).indexOf("-") + 1),
                l.charCodeAt(0) + l.charCodeAt(t))
              ) {
                case 226:
                  l = s.replace(v, "tb");
                  break;
                case 232:
                  l = s.replace(v, "tb-rl");
                  break;
                case 220:
                  l = s.replace(v, "lr");
                  break;
                default:
                  return s;
              }
              return "-webkit-" + s + "-ms-" + l + s;
            case 1017:
              if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (s = e).length - 10),
                (i =
                  (l = (33 === s.charCodeAt(t) ? s.substring(0, t) : s)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | l.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > l.charCodeAt(8)) break;
                case 115:
                  s = s.replace(l, "-webkit-" + l) + ";" + s;
                  break;
                case 207:
                case 102:
                  s =
                    s.replace(
                      l,
                      "-webkit-" + (102 < i ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    s.replace(l, "-webkit-" + l) +
                    ";" +
                    s.replace(l, "-ms-" + l + "box") +
                    ";" +
                    s;
              }
              return s + ";";
            case 938:
              if (45 === s.charCodeAt(5))
                switch (s.charCodeAt(6)) {
                  case 105:
                    return (
                      (l = s.replace("-items", "")),
                      "-webkit-" + s + "-webkit-box-" + l + "-ms-flex-" + l + s
                    );
                  case 115:
                    return (
                      "-webkit-" + s + "-ms-flex-item-" + s.replace(S, "") + s
                    );
                  default:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-flex-line-pack" +
                      s.replace("align-content", "").replace(S, "") +
                      s
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === x.test(e))
                return 115 ===
                  (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? a(e.replace("stretch", "fill-available"), t, r, o).replace(
                      ":fill-available",
                      ":stretch"
                    )
                  : s.replace(l, "-webkit-" + l) +
                      s.replace(l, "-moz-" + l.replace("fill-", "")) +
                      s;
              break;
            case 962:
              if (
                ((s =
                  "-webkit-" +
                  s +
                  (102 === s.charCodeAt(5) ? "-ms-" + s : "") +
                  s),
                211 === r + o &&
                  105 === s.charCodeAt(13) &&
                  0 < s.indexOf("transform", 10))
              )
                return (
                  s
                    .substring(0, s.indexOf(";", 27) + 1)
                    .replace(m, "$1-webkit-$2") + s
                );
          }
          return s;
        }
        function n(e, t) {
          var r = e.indexOf(1 === t ? ":" : "{"),
            a = e.substring(0, 3 !== t ? r : 10);
          return (
            (r = e.substring(r + 1, e.length - 1)),
            R(2 !== t ? a : a.replace(k, "$1"), r, t)
          );
        }
        function o(e, t) {
          var r = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return r !== t + ";"
            ? r.replace(C, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function s(e, t, r, a, n, o, s, i, c, u) {
          for (var d, f = 0, m = t; f < I; ++f)
            switch ((d = _[f].call(l, e, m, r, a, n, o, s, i, c, u))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                m = d;
            }
          if (m !== t) return m;
        }
        function i(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((R = null),
              e
                ? "function" !== typeof e
                  ? (L = 1)
                  : ((L = 2), (R = e))
                : (L = 0)),
            i
          );
        }
        function l(e, r) {
          var i = e;
          if ((33 > i.charCodeAt(0) && (i = i.trim()), (i = [i]), 0 < I)) {
            var l = s(-1, r, i, i, E, A, 0, 0, 0, 0);
            void 0 !== l && "string" === typeof l && (r = l);
          }
          var d = (function e(r, i, l, d, f) {
            for (
              var m,
                h,
                p,
                v,
                C,
                S = 0,
                k = 0,
                x = 0,
                P = 0,
                _ = 0,
                R = 0,
                N = (p = m = 0),
                D = 0,
                T = 0,
                U = 0,
                Z = 0,
                H = l.length,
                F = H - 1,
                $ = "",
                z = "",
                q = "",
                B = "";
              D < H;

            ) {
              if (
                ((h = l.charCodeAt(D)),
                D === F &&
                  0 !== k + P + x + S &&
                  (0 !== k && (h = 47 === k ? 10 : 47),
                  (P = x = S = 0),
                  H++,
                  F++),
                0 === k + P + x + S)
              ) {
                if (
                  D === F &&
                  (0 < T && ($ = $.replace(u, "")), 0 < $.trim().length)
                ) {
                  switch (h) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      $ += l.charAt(D);
                  }
                  h = 59;
                }
                switch (h) {
                  case 123:
                    for (
                      m = ($ = $.trim()).charCodeAt(0), p = 1, Z = ++D;
                      D < H;

                    ) {
                      switch ((h = l.charCodeAt(D))) {
                        case 123:
                          p++;
                          break;
                        case 125:
                          p--;
                          break;
                        case 47:
                          switch ((h = l.charCodeAt(D + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (N = D + 1; N < F; ++N)
                                  switch (l.charCodeAt(N)) {
                                    case 47:
                                      if (
                                        42 === h &&
                                        42 === l.charCodeAt(N - 1) &&
                                        D + 2 !== N
                                      ) {
                                        D = N + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === h) {
                                        D = N + 1;
                                        break e;
                                      }
                                  }
                                D = N;
                              }
                          }
                          break;
                        case 91:
                          h++;
                        case 40:
                          h++;
                        case 34:
                        case 39:
                          for (; D++ < F && l.charCodeAt(D) !== h; );
                      }
                      if (0 === p) break;
                      D++;
                    }
                    switch (
                      ((p = l.substring(Z, D)),
                      0 === m &&
                        (m = ($ = $.replace(c, "").trim()).charCodeAt(0)),
                      m)
                    ) {
                      case 64:
                        switch (
                          (0 < T && ($ = $.replace(u, "")),
                          (h = $.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            T = i;
                            break;
                          default:
                            T = O;
                        }
                        if (
                          ((Z = (p = e(i, T, p, h, f + 1)).length),
                          0 < I &&
                            ((C = s(
                              3,
                              p,
                              (T = t(O, $, U)),
                              i,
                              E,
                              A,
                              Z,
                              h,
                              f,
                              d
                            )),
                            ($ = T.join("")),
                            void 0 !== C &&
                              0 === (Z = (p = C.trim()).length) &&
                              ((h = 0), (p = ""))),
                          0 < Z)
                        )
                          switch (h) {
                            case 115:
                              $ = $.replace(w, o);
                            case 100:
                            case 109:
                            case 45:
                              p = $ + "{" + p + "}";
                              break;
                            case 107:
                              (p = ($ = $.replace(g, "$1 $2")) + "{" + p + "}"),
                                (p =
                                  1 === L || (2 === L && n("@" + p, 3))
                                    ? "@-webkit-" + p + "@" + p
                                    : "@" + p);
                              break;
                            default:
                              (p = $ + p), 112 === d && ((z += p), (p = ""));
                          }
                        else p = "";
                        break;
                      default:
                        p = e(i, t(i, $, U), p, d, f + 1);
                    }
                    (q += p),
                      (p = U = T = N = m = 0),
                      ($ = ""),
                      (h = l.charCodeAt(++D));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (Z = ($ = (0 < T ? $.replace(u, "") : $).trim()).length)
                    )
                      switch (
                        (0 === N &&
                          ((m = $.charCodeAt(0)),
                          45 === m || (96 < m && 123 > m)) &&
                          (Z = ($ = $.replace(" ", ":")).length),
                        0 < I &&
                          void 0 !==
                            (C = s(1, $, i, r, E, A, z.length, d, f, d)) &&
                          0 === (Z = ($ = C.trim()).length) &&
                          ($ = "\0\0"),
                        (m = $.charCodeAt(0)),
                        (h = $.charCodeAt(1)),
                        m)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === h || 99 === h) {
                            B += $ + l.charAt(D);
                            break;
                          }
                        default:
                          58 !== $.charCodeAt(Z - 1) &&
                            (z += a($, m, h, $.charCodeAt(2)));
                      }
                    (U = T = N = m = 0), ($ = ""), (h = l.charCodeAt(++D));
                }
              }
              switch (h) {
                case 13:
                case 10:
                  47 === k
                    ? (k = 0)
                    : 0 === 1 + m &&
                      107 !== d &&
                      0 < $.length &&
                      ((T = 1), ($ += "\0")),
                    0 < I * M && s(0, $, i, r, E, A, z.length, d, f, d),
                    (A = 1),
                    E++;
                  break;
                case 59:
                case 125:
                  if (0 === k + P + x + S) {
                    A++;
                    break;
                  }
                default:
                  switch ((A++, (v = l.charAt(D)), h)) {
                    case 9:
                    case 32:
                      if (0 === P + S + k)
                        switch (_) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            v = "";
                            break;
                          default:
                            32 !== h && (v = " ");
                        }
                      break;
                    case 0:
                      v = "\\0";
                      break;
                    case 12:
                      v = "\\f";
                      break;
                    case 11:
                      v = "\\v";
                      break;
                    case 38:
                      0 === P + k + S && ((T = U = 1), (v = "\f" + v));
                      break;
                    case 108:
                      if (0 === P + k + S + j && 0 < N)
                        switch (D - N) {
                          case 2:
                            112 === _ && 58 === l.charCodeAt(D - 3) && (j = _);
                          case 8:
                            111 === R && (j = R);
                        }
                      break;
                    case 58:
                      0 === P + k + S && (N = D);
                      break;
                    case 44:
                      0 === k + x + P + S && ((T = 1), (v += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === k && (P = P === h ? 0 : 0 === P ? h : P);
                      break;
                    case 91:
                      0 === P + k + x && S++;
                      break;
                    case 93:
                      0 === P + k + x && S--;
                      break;
                    case 41:
                      0 === P + k + S && x--;
                      break;
                    case 40:
                      if (0 === P + k + S) {
                        if (0 === m)
                          switch (2 * _ + 3 * R) {
                            case 533:
                              break;
                            default:
                              m = 1;
                          }
                        x++;
                      }
                      break;
                    case 64:
                      0 === k + x + P + S + N + p && (p = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < P + S + x))
                        switch (k) {
                          case 0:
                            switch (2 * h + 3 * l.charCodeAt(D + 1)) {
                              case 235:
                                k = 47;
                                break;
                              case 220:
                                (Z = D), (k = 42);
                            }
                            break;
                          case 42:
                            47 === h &&
                              42 === _ &&
                              Z + 2 !== D &&
                              (33 === l.charCodeAt(Z + 2) &&
                                (z += l.substring(Z, D + 1)),
                              (v = ""),
                              (k = 0));
                        }
                  }
                  0 === k && ($ += v);
              }
              (R = _), (_ = h), D++;
            }
            if (0 < (Z = z.length)) {
              if (
                ((T = i),
                0 < I &&
                  void 0 !== (C = s(2, z, T, r, E, A, Z, d, f, d)) &&
                  0 === (z = C).length)
              )
                return B + z + q;
              if (((z = T.join(",") + "{" + z + "}"), 0 !== L * j)) {
                switch ((2 !== L || n(z, 2) || (j = 0), j)) {
                  case 111:
                    z = z.replace(y, ":-moz-$1") + z;
                    break;
                  case 112:
                    z =
                      z.replace(b, "::-webkit-input-$1") +
                      z.replace(b, "::-moz-$1") +
                      z.replace(b, ":-ms-input-$1") +
                      z;
                }
                j = 0;
              }
            }
            return B + z + q;
          })(O, i, r, 0, 0);
          return (
            0 < I &&
              void 0 !== (l = s(-2, d, i, i, E, A, d.length, 0, 0, 0)) &&
              (d = l),
            "",
            (j = 0),
            (A = E = 1),
            d
          );
        }
        var c = /^\0+/g,
          u = /[\0\r\f]/g,
          d = /: */g,
          f = /zoo|gra/,
          m = /([,: ])(transform)/g,
          h = /,\r+?/g,
          p = /([\t\r\n ])*\f?&/g,
          g = /@(k\w+)\s*(\S*)\s*/,
          b = /::(place)/g,
          y = /:(read-only)/g,
          v = /[svh]\w+-[tblr]{2}/,
          w = /\(\s*(.*)\s*\)/g,
          C = /([\s\S]*?);/g,
          S = /-self|flex-/g,
          k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          x = /stretch|:\s*\w+\-(?:conte|avail)/,
          P = /([^-])(image-set\()/,
          A = 1,
          E = 1,
          j = 0,
          L = 1,
          O = [],
          _ = [],
          I = 0,
          R = null,
          M = 0;
        return (
          (l.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                I = _.length = 0;
                break;
              default:
                if ("function" === typeof t) _[I++] = t;
                else if ("object" === typeof t)
                  for (var r = 0, a = t.length; r < a; ++r) e(t[r]);
                else M = 0 | !!t;
            }
            return e;
          }),
          (l.set = i),
          void 0 !== e && i(e),
          l
        );
      };
    },
    "2vHJ": function (e, t) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
    7100: function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r("q1tI"),
        n = r.n(a),
        o = r("3X8q"),
        s = r("KTl6"),
        i = r("R+8Y"),
        l = r("dnrx"),
        c = r("7SPY"),
        u = r("s/m+"),
        d = (r("2vHJ"), r("QjGT")),
        f = r("q1LP"),
        m = n.a.createElement;
      const h = d.c.contactSection,
        p = d.c.phoneSection;
      class g extends a.Component {
        render() {
          const e = this.props.theme;
          return m(
            "div",
            { className: "contact-main" },
            m(
              "div",
              { className: "basic-contact" },
              m(
                u.Fade,
                { bottom: !0, duration: 1e3, distance: "40px" },
                m(
                  "div",
                  { className: "contact-heading-div" },
                  m(
                    "div",
                    { className: "contact-heading-text-div" },
                    m(
                      "h1",
                      {
                        className: "contact-heading-text",
                        style: { color: e.text },
                      },
                      h.title
                    ),
                    m(
                      "p",
                      {
                        className: "contact-header-detail-text subTitle",
                        style: { color: e.secondaryText },
                      },
                      h.description
                    ),
                    m(s.a, { theme: e }),
                    m(
                      "div",
                      { className: "resume-btn-div" },
                      m(i.a, {
                        text: "See My Resume",
                        newTab: !0,
                        href: d.f.resumeLink,
                        theme: e,
                      })
                    )
                  ),
                  m(
                    "div",
                    { className: "contact-heading-img-div" },
                    m(l.default, { theme: e })
                  )
                )
              ),
              m(
                u.Fade,
                { bottom: !0, duration: 1e3, distance: "40px" },
                m(
                  "div",
                  { className: "address-heading-div" },
                  m(
                    "div",
                    { className: "contact-heading-img-div" },
                    m(c.default, { theme: e })
                  ),
                  m(
                    "div",
                    { className: "address-heading-text-div" },
                    m(
                      "h1",
                      {
                        className: "address-heading-text",
                        style: { color: e.text },
                      },
                      "I\u2019m Just a Message Away!"
                    ),
                    m(
                      "p",
                      {
                        className: "contact-header-detail-text subTitle",
                        style: { color: e.secondaryText },
                      },
                      "Feel free to reach out, and I'll get back to you as soon as possible!"
                    ),
                    m(
                      "h1",
                      {
                        className: "address-heading-text",
                        style: { color: e.text },
                      },
                      p.title
                    ),
                    m(
                      "p",
                      {
                        className: "contact-header-detail-text subTitle",
                        style: { color: e.secondaryText },
                      },
                      p.subtitle
                    ),
                    m(
                      "div",
                      { className: "address-btn-div" },
                      m(f.default, { theme: e })
                    )
                  )
                )
              )
            ),
            m(o.a, { theme: this.props.theme })
          );
        }
      }
      t.default = g;
    },
    "7SPY": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return o;
        });
      var a = r("q1tI"),
        n = r.n(a).a.createElement;
      class o extends a.Component {
        render() {
          return n(
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
            n("path", {
              d:
                "M876.03027,689.45c-.98047,1.37-1.97021,2.73-2.95019,4.08A16.82838,16.82838,0,0,1,863.5,696.5h-527a16.90383,16.90383,0,0,1-9.21-2.72c-.91016-1.2-1.81006-2.41-2.72022-3.62006l.91016-.5L592.27,541.78a16.01919,16.01919,0,0,1,15.47021-.02L875.12988,688.95Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#5E548E",
            }),
            n("path", {
              d:
                "M863.5,378.5,632.28169,244.96964a64.023,64.023,0,0,0-63.98147-.03153L336.5,378.5a17.0241,17.0241,0,0,0-17,17v284a17.01984,17.01984,0,0,0,17,17h527a17.02879,17.02879,0,0,0,17-17v-284A17.02408,17.02408,0,0,0,863.5,378.5Zm15,301a15.03649,15.03649,0,0,1-15,15h-527a15.02706,15.02706,0,0,1-15-15v-284a15.01828,15.01828,0,0,1,15-15L568.30022,246.93811a64.023,64.023,0,0,1,63.98147.03153L863.5,380.5a15.01828,15.01828,0,0,1,15,15Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#3f3d56",
            }),
            n("path", {
              d:
                "M600.2998,539.18018a15.36345,15.36345,0,0,1-5.116-.8584l-.30249-.10694-.06128-.67236c-.18848.09277-.37866.18164-.56909.26563l-.20118.08837-.20141-.08886c-.42139-.18506-.83985-.39453-1.24365-.62207L408.5,433.73242V222.5A18.5208,18.5208,0,0,1,427,204H773a18.5208,18.5208,0,0,1,18.5,18.5V434.00244l-.25488.14356-183.25,103.04A15.75694,15.75694,0,0,1,600.2998,539.18018Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M600.2998,539.68018a15.85649,15.85649,0,0,1-5.282-.88672l-.60547-.21338-.02588-.28565-.33691.14795-.40234-.17676c-.43653-.19189-.86963-.40869-1.28784-.64453L408,434.02539V222.5a19.02154,19.02154,0,0,1,19-19H773a19.02162,19.02162,0,0,1,19,19V434.29492L608.24,537.62158A16.2527,16.2527,0,0,1,600.2998,539.68018Zm-4.01342-2.57666a14.49247,14.49247,0,0,0,10.97436-1.22559L790,433.125V222.5a17.01917,17.01917,0,0,0-17-17H427a17.01909,17.01909,0,0,0-17,17V432.85449l11.98962,6.7334,171.35047,96.29053q.34973.197.71.3706.36035-.17358.70923-.37011l1.34668-.75879Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#3f3d56",
            }),
            n("path", {
              d:
                "M876.06982,385.88,803.5,426.68,791,433.71,607.75,536.75a15.24213,15.24213,0,0,1-7.4502,1.93,14.91079,14.91079,0,0,1-4.9497-.83,12.05366,12.05366,0,0,1-1.3003-.5q-.61449-.27-1.1997-.6L421.5,440.46,409,433.44l-84.91992-47.72a1.011,1.011,0,0,1-.37988-1.37.99933.99933,0,0,1,1.35986-.38L409,431.14l12.5,7.02L593.83008,535a13.07441,13.07441,0,0,0,1.77978.83c.26026.1.53028.19.8003.27A13.26424,13.26424,0,0,0,606.77,535L791,431.42l12.5-7.03,71.58984-40.25a.99849.99849,0,1,1,.98,1.74Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#3f3d56",
            }),
            n("path", {
              d: "M483.5748,269.5h-28a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#5E548E",
            }),
            n("path", {
              d: "M516.5748,296.5h-61a8,8,0,0,1,0-16h61a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#e6e6e6",
            }),
            n("path", {
              d: "M687,368.5H514a8,8,0,0,1,0-16H687a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#5E548E",
            }),
            n("path", {
              d: "M703,399.5H497a8,8,0,0,1,0-16H703a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#e6e6e6",
            }),
            n("path", {
              d: "M703,429.5H497a8,8,0,0,1,0-16H703a8,8,0,0,1,0,16Z",
              transform: "translate(-319.5 -203.5)",
              fill: "#e6e6e6",
            })
          );
        }
      }
    },
    "8oxB": function (e, t) {
      var r,
        a,
        n = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" === typeof setTimeout ? setTimeout : o;
        } catch (e) {
          r = o;
        }
        try {
          a = "function" === typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          a = s;
        }
      })();
      var l,
        c = [],
        u = !1,
        d = -1;
      function f() {
        u &&
          l &&
          ((u = !1), l.length ? (c = l.concat(c)) : (d = -1), c.length && m());
      }
      function m() {
        if (!u) {
          var e = i(f);
          u = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++d < t; ) l && l[d].run();
            (d = -1), (t = c.length);
          }
          (l = null),
            (u = !1),
            (function (e) {
              if (a === clearTimeout) return clearTimeout(e);
              if ((a === s || !a) && clearTimeout)
                return (a = clearTimeout), clearTimeout(e);
              try {
                a(e);
              } catch (t) {
                try {
                  return a.call(null, e);
                } catch (t) {
                  return a.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function p() {}
      (n.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new h(e, t)), 1 !== c.length || u || i(m);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = p),
        (n.addListener = p),
        (n.once = p),
        (n.off = p),
        (n.removeListener = p),
        (n.removeAllListeners = p),
        (n.emit = p),
        (n.prependListener = p),
        (n.prependOnceListener = p),
        (n.listeners = function (e) {
          return [];
        }),
        (n.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
    "9boD": function (e, t) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
    Gytx: function (e, t) {
      e.exports = function (e, t, r, a) {
        var n = r ? r.call(a, e, t) : void 0;
        if (void 0 !== n) return !!n;
        if (e === t) return !0;
        if ("object" !== typeof e || !e || "object" !== typeof t || !t)
          return !1;
        var o = Object.keys(e),
          s = Object.keys(t);
        if (o.length !== s.length) return !1;
        for (
          var i = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < o.length;
          l++
        ) {
          var c = o[l];
          if (!i(c)) return !1;
          var u = e[c],
            d = t[c];
          if (
            !1 === (n = r ? r.call(a, u, d, c) : void 0) ||
            (void 0 === n && u !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    KTl6: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return u;
      });
      var a = r("wx14"),
        n = r("q1tI"),
        o = r.n(n),
        s = (r("KwXo"), r("QjGT")),
        i = r("vOnD"),
        l = o.a.createElement;
      const c = i.a.span`
  i {
    background-color: ${(e) => e.backgroundColor};
  }
  &:hover i {
    background-color: ${(e) => {
      let { theme: t } = e;
      return t.text;
    }};
    transition: 0.3s ease-in;
  }
`;
      function u(e) {
        return l(
          "div",
          { className: "social-media-div" },
          s.k.map((t, r) =>
            l(
              "a",
              {
                key: r,
                href: t.link,
                className: "icon-button",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              l(
                c,
                Object(a.a)({}, t, e),
                l("i", { className: "fab " + t.fontAwesomeIcon })
              )
            )
          )
        );
      }
    },
    KwXo: function (e, t) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
    ME5O: function (e, t, r) {
      "use strict";
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    "R+8Y": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return s;
      });
      var a = r("q1tI"),
        n = r.n(a),
        o = (r("puG6"), n.a.createElement);
      function s(e) {
        let { text: t, className: r, href: a, newTab: n, theme: s } = e;
        return o(
          "div",
          { className: r },
          o(
            "a",
            {
              className: "main-button",
              href: a,
              target: n && "_blank",
              style: {
                color: s.body,
                backgroundColor: s.text,
                border: "solid 1px " + s.text,
              },
              onMouseEnter: (e) =>
                ((e, t, r) => {
                  const a = e.target;
                  (a.style.color = t), (a.style.backgroundColor = r);
                })(e, s.text, s.body),
              onMouseOut: (e) =>
                ((e, t, r) => {
                  const a = e.target;
                  (a.style.color = t), (a.style.backgroundColor = r);
                })(e, s.body, s.text),
            },
            t
          )
        );
      }
    },
    TOwV: function (e, t, r) {
      "use strict";
      e.exports = r("lkrN");
    },
    dnrx: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return o;
        });
      var a = r("q1tI"),
        n = r.n(a).a.createElement;
      class o extends a.Component {
        render() {
          return n(
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
            n("path", {
              d:
                "M489.06465,258.67168c-4.93763-26.4263,2.83614-56.49071,24.44276-72.48657a123.86324,123.86324,0,0,0,25.82184,81.0254c6.93546,8.88938,15.575,18.05438,15.3066,29.32608-.16685,7.01352-3.95987,13.54729-8.95834,18.46962-4.99885,4.92244-11.15635,8.4713-17.24023,11.96495l-.947,1.47318C509.65591,308.328,494.00227,285.098,489.06465,258.67168Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#231942",
            }),
            n("path", {
              d:
                "M513.9011,186.5891a105.86983,105.86983,0,0,0-6.98908,64.76136,45.59136,45.59136,0,0,0,4.82768,13.44405,26.14858,26.14858,0,0,0,9.87837,9.58161c3.77061,2.17874,7.87983,3.9707,11.05516,7.02808a16.01085,16.01085,0,0,1,4.71318,12.21634c-.152,5.62259-2.31531,10.85523-4.60862,15.8988-2.5463,5.59992-5.27982,11.37615-5.11468,17.672.02.76283-1.16482.74927-1.1848-.01241-.28731-10.95373,7.6319-19.75079,9.39647-30.26133.82338-4.90441.17374-10.08666-3.27429-13.88828-3.01516-3.32434-7.25105-5.17585-11.08793-7.34888a27.90244,27.90244,0,0,1-10.008-9.00887,42.14771,42.14771,0,0,1-5.32674-13.20884,102.71242,102.71242,0,0,1-2.32806-32.01772,107.74713,107.74713,0,0,1,9.03456-35.46463c.31048-.69431,1.32523-.08107,1.01677.6087Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M505.03917,244.42165a15.88383,15.88383,0,0,1-16.57127-12.18326c-.17318-.74241.97237-1.04641,1.14578-.303a14.70808,14.70808,0,0,0,15.4379,11.30147c.76028-.05715.74352,1.128-.01241,1.18479Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M519.56073,273.52321a30.61483,30.61483,0,0,0,7.6736-20.95005c-.01731-.76288,1.16751-.74955,1.1848.0124a31.844,31.844,0,0,1-8.0294,21.7842c-.5077.57079-1.33395-.27886-.829-.84655Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M506.205,209.93055a8.991,8.991,0,0,0,7.98705-2.99869c.50022-.577,1.326.27336.829.84655a10.07516,10.07516,0,0,1-8.82846,3.33694.61233.61233,0,0,1-.5862-.5986.59543.59543,0,0,1,.5986-.5862Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M601.86634,208.04366c-.3021.36914-.60419.73828-.90372,1.1171a118.40568,118.40568,0,0,0-10.837,15.85813c-.25247.4268-.5019.86314-.74157,1.29631a124.827,124.827,0,0,0-14.56489,43.58858,121.22208,121.22208,0,0,0-1.1114,18.385c.13349,8.49015.95374,17.685-1.6487,25.49357a20.79625,20.79625,0,0,1-.93652,2.39744l-41.76165,13.30563c-.11009-.01739-.21761-.02516-.32816-.0424l-1.64313.6075c-.02711-.31672-.04842-.64578-.07553-.9625-.01649-.18365-.02368-.37027-.04017-.55392-.00805-.12338-.01565-.247-.03-.35783-.00283-.041-.00519-.08226-.005-.11384-.01432-.11087-.01584-.21537-.02712-.31671-.12421-1.83906-.23913-3.68114-.33449-5.52939-.003-.00954-.003-.00954.00322-.022-.7168-14.07671-.26472-28.33693,2.33742-42.07519.07843-.41331.15335-.836.25085-1.25539a115.67539,115.67539,0,0,1,5.11549-18.17043,102.26,102.26,0,0,1,4.12386-9.4897,85.03657,85.03657,0,0,1,15.43659-21.64774c12.4587-12.68053,28.83417-21.23539,46.38074-21.50476C600.97441,208.04451,601.41443,208.04069,601.86634,208.04366Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#231942",
            }),
            n("path", {
              d:
                "M601.94133,208.60361A105.86977,105.86977,0,0,0,557.37014,256.104a45.5906,45.5906,0,0,0-4.23962,13.64092,26.14853,26.14853,0,0,0,2.11853,13.59783c1.69887,4.00977,3.901,7.91459,4.59553,12.2675a16.01084,16.01084,0,0,1-3.59186,12.59173c-3.50659,4.39778-8.38425,7.27332-13.25191,9.91959-5.40461,2.93818-11.06486,5.9044-14.72356,11.03072-.4433.62113-1.38115-.103-.93852-.72323,6.3655-8.91892,17.985-11.175,25.722-18.50465,3.61022-3.42017,6.2116-7.949,5.74737-13.06037-.40595-4.46963-2.67333-8.49826-4.42856-12.54337a27.9024,27.9024,0,0,1-2.56685-13.21857,42.1476,42.1476,0,0,1,3.69953-13.75359,102.71244,102.71244,0,0,1,17.41805-26.966A107.7471,107.7471,0,0,1,601.496,207.50543c.66593-.36744,1.10694.73315.44536,1.09818Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M560.04639,249.44417a15.88383,15.88383,0,0,1-5.89607-19.7047c.30871-.697,1.40639-.25007,1.09727.4479a14.70809,14.70809,0,0,0,5.522,18.31828c.64145.41211-.08546,1.34828-.72323.93852Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M554.11989,281.42311a30.61484,30.61484,0,0,0,18.74032-12.1074c.44549-.61954,1.38347.10445.93853.72323a31.844,31.844,0,0,1-19.52662,12.55921c-.749.15008-.89719-1.02578-.15223-1.175Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M581.74329,222.60689a8.991,8.991,0,0,0,8.18263,2.41447c.74676-.1595.89413,1.01658.15224,1.175a10.07517,10.07517,0,0,1-9.0581-2.651.61234.61234,0,0,1-.10765-.83089.59542.59542,0,0,1,.83088-.10764Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M727.45024,386.00273a9.45151,9.45151,0,0,1,.21487,1.47266l38.57107,22.2515,9.37525-5.39716L785.606,417.414,769.9375,428.58158a7.18313,7.18313,0,0,1-8.61813-.21L721.546,396.9941a9.42524,9.42524,0,1,1,5.90428-10.99137Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#ffb6b6",
            }),
            n("path", {
              d:
                "M766.77166,407.27011a4.03615,4.03615,0,0,1,2.01514-2.69421l17.80755-9.70255a11.2213,11.2213,0,0,1,13.56639,17.87792l-14.27229,14.499a4.04052,4.04052,0,0,1-6.10514-.4016l-12.28814-16.29234A4.036,4.036,0,0,1,766.77166,407.27011Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            n("path", {
              d:
                "M797.78041,351.65092c2.56215-8.16547,8.38856-15.65455,16.44635-18.41493,8.05827-2.76037,19.8576,1.44458,25.91561,7.48209,11.08127,11.04382,11.42231,24.56342,3.809,36.55274-1.51431-.08015-6.73962-.13944-8.27227-.19684L833.511,369.8477v7.15505c-11.96283-.3697-24.41723-.13822-36.87838.10116C795.51571,368.61534,795.21826,359.81639,797.78041,351.65092Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            n("polygon", {
              points:
                "502.281 507.932 491.37 507.932 486.179 465.845 502.283 465.846 502.281 507.932",
              fill: "#ffb6b6",
            }),
            n("polygon", {
              points:
                "569.528 507.932 558.617 507.932 553.426 465.845 569.53 465.846 569.528 507.932",
              fill: "#ffb6b6",
            }),
            n("polygon", {
              points:
                "537.668 249.442 540.14 255.87 539.646 262.299 491.259 279.058 493.66 250.926 499.099 244.498 537.668 249.442",
              fill: "#ffb6b6",
            }),
            n("circle", {
              cx: "522.36888",
              cy: "174.31461",
              r: "17.28172",
              fill: "#ffb7b7",
            }),
            n("path", {
              d:
                "M841.37788,464.61289V475.5963s12.85615,16.70676,5.93361,29.56291L867.14676,676.251H846.37913L811.70984,531.86045,796.9324,673.28422H779.13157l-2.1222-112.47687a239.05247,239.05247,0,0,1,14.56725-86.79921l0-.00005Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            n("path", {
              d:
                "M803.37069,337.48574A21.70637,21.70637,0,0,1,836.372,356.42966c-9.66.44425-19.80767.5599-30.09732.57988l-2.43178-5.9516-1.43366,5.956q-4.703-.00045-9.42385-.01237A22.16336,22.16336,0,0,1,803.37069,337.48574Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            n("path", {
              d:
                "M800.03827,714.325H792.2958l-1.382-7.30982-3.5395,7.30982H766.83942a4.61606,4.61606,0,0,1-2.623-8.41464L780.615,694.585v-7.39l17.24842,1.0295Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            n("path", {
              d:
                "M868.27476,714.325h-7.74247l-1.382-7.30982-3.5395,7.30982H835.07592a4.61606,4.61606,0,0,1-2.623-8.41464L848.85147,694.585v-7.39l17.24841,1.0295Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#2f2e41",
            }),
            n("path", {
              d:
                "M849.2407,499.83848a134.7058,134.7058,0,0,0-2.93757-39.38028c-3.67033-16.29464-8.33459-37.02845-8.425-37.56438a.19946.19946,0,0,1-.00278-.03174l-1.42171-30.37091a.351.351,0,0,0-.33881-.33437l-9.83314-.33052a.351.351,0,0,1-.33919-.35079v0a5.57828,5.57828,0,0,0-5.57829-5.57828H800.72491a5.22274,5.22274,0,0,0-5.17988,4.57191.34673.34673,0,0,1-.35288.312l-7.64219-.25686a.351.351,0,0,0-.34658.24542l-.53158,1.68889a176.94738,176.94738,0,0,0-6.27367,76.8496c.92543,6.85665.50577,17.16646.15574,22.91022a4.27118,4.27118,0,0,0,4.02009,4.52729c14.20708.81747,54.43317,20.28092,64.06364,10.9885C848.66084,507.71177,848.91726,504.28384,849.2407,499.83848Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            n("path", {
              d:
                "M770.45153,386.00273a9.45151,9.45151,0,0,1,.21487,1.47266l38.57107,22.2515,9.37525-5.39716,9.99456,13.0843-15.66849,11.16755a7.18313,7.18313,0,0,1-8.61813-.21L764.54725,396.9941a9.42524,9.42524,0,1,1,5.90428-10.99137Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#ffb6b6",
            }),
            n("path", {
              d:
                "M809.773,407.27011a4.03615,4.03615,0,0,1,2.01514-2.69421l17.80755-9.70255a11.22131,11.22131,0,0,1,13.5664,17.87792l-14.2723,14.499a4.04052,4.04052,0,0,1-6.10514-.4016l-12.28814-16.29234A4.036,4.036,0,0,1,809.773,407.27011Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            n("circle", {
              cx: "45",
              cy: "423.69547",
              r: "45",
              fill: "#f0f0f0",
            }),
            n("path", {
              d:
                "M735.529,453.21515,409.42085,602.93776a19.27705,19.27705,0,0,1-25.53338-9.465L303.412,418.19049a19.27736,19.27736,0,0,1,9.465-25.53338L638.98509,242.9345a19.27735,19.27735,0,0,1,25.53337,9.465L744.994,427.68177A19.27705,19.27705,0,0,1,735.529,453.21515Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M318.30109,404.47143a6.26246,6.26246,0,0,0-3.07482,8.29487L395.7018,588.04862a6.26245,6.26245,0,0,0,8.29486,3.07482L730.10484,441.40082a6.26245,6.26245,0,0,0,3.07482-8.29486L652.70414,257.82364a6.26246,6.26246,0,0,0-8.29487-3.07482Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#BE95C4",
            }),
            n("path", {
              d:
                "M735.529,453.21515,409.42085,602.93776a19.27705,19.27705,0,0,1-25.53338-9.465L303.412,418.19049a19.27736,19.27736,0,0,1,9.465-25.53338L638.98509,242.9345a19.27735,19.27735,0,0,1,25.53337,9.465L744.994,427.68177A19.27705,19.27705,0,0,1,735.529,453.21515ZM313.7114,394.4747a17.27491,17.27491,0,0,0-8.48186,22.8813l80.47552,175.28231a17.27491,17.27491,0,0,0,22.8813,8.48186L734.69454,451.39756a17.27492,17.27492,0,0,0,8.48186-22.8813L662.70087,253.234a17.2749,17.2749,0,0,0-22.88129-8.48186Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            }),
            n("path", {
              d:
                "M654.04246,373.67481,394.96915,492.62041a11.14657,11.14657,0,0,1-12.60483-2.34253l-75.79959-77.7327a11.12377,11.12377,0,0,1,3.30857-17.86861l332.018-153.05436a11.12474,11.12474,0,0,1,15.70523,8.81986l.0446-.00114,2.88018,112.84155A11.11021,11.11021,0,0,1,654.04246,373.67481ZM642.74,243.43328,310.71024,396.493a9.1235,9.1235,0,0,0-2.71376,14.65549L383.796,488.88128a9.142,9.142,0,0,0,10.3387,1.92154L653.208,371.85723a9.11259,9.11259,0,0,0,5.31384-8.5239l-2.85465-111.84156.3995-.00988-.3995.00988A9.12386,9.12386,0,0,0,642.74,243.43328Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            }),
            n("path", {
              d:
                "M491.58023,534.58773l-80.71652,37.05853a4.90689,4.90689,0,1,1-4.09475-8.9187L487.48548,525.669a4.90689,4.90689,0,0,1,4.09475,8.9187Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d: "M550.63063,420.05309a25.22024,25.22024,0,1,1-45.84,21.046",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            }),
            n("path", {
              d:
                "M732.62106,691.62827H373.78488a19.277,19.277,0,0,1-19.25537-19.25537V479.49936A19.27735,19.27735,0,0,1,373.78488,460.244H732.62106a19.27735,19.27735,0,0,1,19.25537,19.25537V672.3729A19.277,19.277,0,0,1,732.62106,691.62827Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d:
                "M373.78488,473.244a6.26246,6.26246,0,0,0-6.25537,6.25537V672.3729a6.26246,6.26246,0,0,0,6.25537,6.25537H732.62106a6.26246,6.26246,0,0,0,6.25537-6.25537V479.49936a6.26246,6.26246,0,0,0-6.25537-6.25537Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#5E548E",
            }),
            n("path", {
              d:
                "M732.62106,691.62827H373.78488a19.277,19.277,0,0,1-19.25537-19.25537V479.49936A19.27735,19.27735,0,0,1,373.78488,460.244H732.62106a19.27735,19.27735,0,0,1,19.25537,19.25537V672.3729A19.277,19.277,0,0,1,732.62106,691.62827ZM373.78488,462.244a17.2749,17.2749,0,0,0-17.25537,17.25537V672.3729a17.2749,17.2749,0,0,0,17.25537,17.25537H732.62106a17.2749,17.2749,0,0,0,17.25537-17.25537V479.49936A17.2749,17.2749,0,0,0,732.62106,462.244Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            n("path", {
              d:
                "M691.75436,585.34262H406.68063a11.14658,11.14658,0,0,1-10.47778-7.38818l-36.45264-102.27a11.12377,11.12377,0,0,1,10.4624-14.8584l365.59717-.562a11.12473,11.12473,0,0,1,10.59277,14.56836l.041.01758L701.97848,578.60141A11.11021,11.11021,0,0,1,691.75436,585.34262ZM735.8254,462.264l-365.6101.562a9.12351,9.12351,0,0,0-8.58118,12.18653l36.45251,102.27a9.142,9.142,0,0,0,8.594,6.06006H691.75436a9.11257,9.11257,0,0,0,8.38574-5.52929l44.07105-102.832.36718.15771-.36718-.15771A9.12385,9.12385,0,0,0,735.8254,462.264Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            n("path", {
              d:
                "M476.96954,663.79276H388.15236a4.90689,4.90689,0,1,1,0-9.81378h88.81718a4.90689,4.90689,0,1,1,0,9.81378Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#fff",
            }),
            n("path", {
              d: "M578.42321,584.34286a25.22024,25.22024,0,0,1-50.44048,0",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#3f3d56",
            }),
            n("circle", { cx: "126", cy: "99.69547", r: "9", fill: "#f0f0f0" }),
            n("circle", { cx: "9", cy: "315.69547", r: "9", fill: "#f0f0f0" }),
            n("circle", {
              cx: "459",
              cy: "146.69547",
              r: "9",
              fill: "#f0f0f0",
            }),
            n("path", {
              d:
                "M905.93289,714.325h-171.294a1.19068,1.19068,0,0,1,0-2.38137h171.294a1.19069,1.19069,0,0,1,0,2.38137Z",
              transform: "translate(-292.87643 -185.67498)",
              fill: "#cacaca",
            })
          );
        }
      }
    },
    kpM3: function (e, t, r) {
      "use strict";
      function a(e) {
        var t = Object.create(null);
        return function (r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r];
        };
      }
      r.d(t, "a", function () {
        return o;
      });
      var n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        o = a(function (e) {
          return (
            n.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        });
    },
    lkrN: function (e, t, r) {
      "use strict";
      var a = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var l = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        f = Symbol.for("react.suspense_list"),
        m = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        p = Symbol.for("react.offscreen"),
        g = Symbol.for("react.client.reference");
      function b(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case o:
                case i:
                case s:
                case d:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case u:
                    case h:
                    case m:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = a),
        (t.ForwardRef = u),
        (t.Fragment = o),
        (t.Lazy = h),
        (t.Memo = m),
        (t.Portal = n),
        (t.Profiler = i),
        (t.StrictMode = s),
        (t.Suspense = d),
        (t.SuspenseList = f),
        (t.isContextConsumer = function (e) {
          return b(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return b(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return b(e) === u;
        }),
        (t.isFragment = function (e) {
          return b(e) === o;
        }),
        (t.isLazy = function (e) {
          return b(e) === h;
        }),
        (t.isMemo = function (e) {
          return b(e) === m;
        }),
        (t.isPortal = function (e) {
          return b(e) === n;
        }),
        (t.isProfiler = function (e) {
          return b(e) === i;
        }),
        (t.isStrictMode = function (e) {
          return b(e) === s;
        }),
        (t.isSuspense = function (e) {
          return b(e) === d;
        }),
        (t.isSuspenseList = function (e) {
          return b(e) === f;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === i ||
            e === s ||
            e === d ||
            e === f ||
            e === p ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === m ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === g ||
                void 0 !== e.getModuleId))
          );
        }),
        (t.typeOf = b);
    },
    puG6: function (e, t) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
    q1LP: function (e, t, r) {
      "use strict";
      function a(e) {
        return (a =
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
      function n(e) {
        var t = (function (e, t) {
          if ("object" != a(e) || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != a(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == a(t) ? t : t + "";
      }
      function o(e, t, r) {
        return (
          (t = n(t)) in e
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
      var s = r("q1tI"),
        i = r.n(s);
      const l = { _origin: "https://api.emailjs.com" },
        c = (e, t, r) => {
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
        new Promise((a, n) => {
          const o = new XMLHttpRequest();
          o.addEventListener("load", ({ target: e }) => {
            const t = new u(e);
            200 === t.status || "OK" === t.text ? a(t) : n(t);
          }),
            o.addEventListener("error", ({ target: e }) => {
              n(new u(e));
            }),
            o.open("POST", l._origin + e, !0),
            Object.keys(r).forEach((e) => {
              o.setRequestHeader(e, r[e]);
            }),
            o.send(t);
        });
      var f = (e, t, r, a) => {
          const n = a || l._userID;
          c(n, e, t);
          const o = {
            lib_version: "3.2.0",
            user_id: n,
            service_id: e,
            template_id: t,
            template_params: r,
          };
          return d("/api/v1.0/email/send", JSON.stringify(o), {
            "Content-type": "application/json",
          });
        },
        m = r("s/m+"),
        h = (r("9boD"), i.a.createElement);
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
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
        const { 0: r, 1: a } = Object(s.useState)({
            title: "",
            sender_name: "",
            email: "",
            message: "",
          }),
          { 0: n, 1: o } = Object(s.useState)(!1),
          { 0: i, 1: l } = Object(s.useState)(""),
          c = (e) => {
            const { name: t, value: r } = e.target;
            a((e) => g(g({}, e), {}, { [t]: r }));
          },
          u = (e) => {
            f(
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
                  l("Message sent successfully! Thank you for reaching out."),
                  o(!1),
                  a({ title: "", sender_name: "", email: "", message: "" });
              },
              (e) => {
                console.log("FAILED...", e),
                  l("Something went wrong. Please try again."),
                  o(!1);
              }
            );
          };
        return h(
          "div",
          { className: "contact-form-main" },
          h(
            m.Fade,
            { bottom: !0, duration: 1e3, distance: "40px" },
            h(
              "div",
              { className: "contact-form" },
              h(
                "form",
                {
                  onSubmit: (e) => {
                    e.preventDefault(),
                      r.title && r.sender_name && r.email && r.message
                        ? (o(!0), u(r))
                        : l("Please fill in all fields");
                  },
                  className: "contact-form",
                },
                h(
                  "div",
                  { className: "form-group" },
                  h("label", { className: "form-label" }, "Title"),
                  h("input", {
                    type: "text",
                    name: "title",
                    value: r.title,
                    onChange: c,
                    required: !0,
                    className: "form-input",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                h(
                  "div",
                  { className: "form-group" },
                  h("label", { className: "form-label" }, "Your Name:"),
                  h("input", {
                    type: "text",
                    name: "sender_name",
                    value: r.sender_name,
                    onChange: c,
                    required: !0,
                    className: "form-input",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                h(
                  "div",
                  { className: "form-group" },
                  h("label", { className: "form-label" }, "Your Email:"),
                  h("input", {
                    type: "email",
                    name: "email",
                    value: r.email,
                    onChange: c,
                    required: !0,
                    className: "form-input",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                h(
                  "div",
                  { className: "form-group" },
                  h("label", { className: "form-label" }, "Your Message:"),
                  h("textarea", {
                    name: "message",
                    value: r.message,
                    onChange: c,
                    required: !0,
                    className: "form-textarea",
                    style: { backgroundColor: t.background, color: t.text },
                  })
                ),
                i && h("p", { className: "form-status" }, i),
                h(
                  "div",
                  { className: "form-group" },
                  n
                    ? h("p", null, "Sending...")
                    : h(
                        "div",
                        { class: "project-button" },
                        h(
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
    vOnD: function (e, t, r) {
      "use strict";
      (function (e) {
        var a = r("TOwV"),
          n = r("q1tI"),
          o = r.n(n),
          s = r("Gytx"),
          i = r.n(s),
          l = r("0x0X"),
          c = r("ME5O"),
          u = r("kpM3"),
          d = r("2mql"),
          f = r.n(d);
        function m() {
          return (m =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r)
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              }
              return e;
            }).apply(this, arguments);
        }
        var h = function (e, t) {
            for (var r = [e[0]], a = 0, n = t.length; a < n; a += 1)
              r.push(t[a], e[a + 1]);
            return r;
          },
          p = function (e) {
            return (
              null !== e &&
              "object" == typeof e &&
              "[object Object]" ===
                (e.toString
                  ? e.toString()
                  : Object.prototype.toString.call(e)) &&
              !Object(a.typeOf)(e)
            );
          },
          g = Object.freeze([]),
          b = Object.freeze({});
        function y(e) {
          return "function" == typeof e;
        }
        function v(e) {
          return e.displayName || e.name || "Component";
        }
        function w(e) {
          return e && "string" == typeof e.styledComponentId;
        }
        var C =
            ("undefined" != typeof e &&
              void 0 !== e.env &&
              (e.env.REACT_APP_SC_ATTR || e.env.SC_ATTR)) ||
            "data-styled",
          S = "undefined" != typeof window && "HTMLElement" in window,
          k = Boolean(
            "boolean" == typeof SC_DISABLE_SPEEDY
              ? SC_DISABLE_SPEEDY
              : "undefined" != typeof e &&
                  void 0 !== e.env &&
                  (void 0 !== e.env.REACT_APP_SC_DISABLE_SPEEDY &&
                  "" !== e.env.REACT_APP_SC_DISABLE_SPEEDY
                    ? "false" !== e.env.REACT_APP_SC_DISABLE_SPEEDY &&
                      e.env.REACT_APP_SC_DISABLE_SPEEDY
                    : void 0 !== e.env.SC_DISABLE_SPEEDY &&
                      "" !== e.env.SC_DISABLE_SPEEDY &&
                      "false" !== e.env.SC_DISABLE_SPEEDY &&
                      e.env.SC_DISABLE_SPEEDY)
          );
        function x(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          throw new Error(
            "An error occurred. See https://git.io/JUIaE#" +
              e +
              " for more information." +
              (r.length > 0 ? " Args: " + r.join(", ") : "")
          );
        }
        var P = (function () {
            function e(e) {
              (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
            }
            var t = e.prototype;
            return (
              (t.indexOfGroup = function (e) {
                for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
                return t;
              }),
              (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                  for (var r = this.groupSizes, a = r.length, n = a; e >= n; )
                    (n <<= 1) < 0 && x(16, "" + e);
                  (this.groupSizes = new Uint32Array(n)),
                    this.groupSizes.set(r),
                    (this.length = n);
                  for (var o = a; o < n; o++) this.groupSizes[o] = 0;
                }
                for (
                  var s = this.indexOfGroup(e + 1), i = 0, l = t.length;
                  i < l;
                  i++
                )
                  this.tag.insertRule(s, t[i]) && (this.groupSizes[e]++, s++);
              }),
              (t.clearGroup = function (e) {
                if (e < this.length) {
                  var t = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    a = r + t;
                  this.groupSizes[e] = 0;
                  for (var n = r; n < a; n++) this.tag.deleteRule(r);
                }
              }),
              (t.getGroup = function (e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (
                  var r = this.groupSizes[e],
                    a = this.indexOfGroup(e),
                    n = a + r,
                    o = a;
                  o < n;
                  o++
                )
                  t += this.tag.getRule(o) + "/*!sc*/\n";
                return t;
              }),
              e
            );
          })(),
          A = new Map(),
          E = new Map(),
          j = 1,
          L = function (e) {
            if (A.has(e)) return A.get(e);
            for (; E.has(j); ) j++;
            var t = j++;
            return A.set(e, t), E.set(t, e), t;
          },
          O = function (e) {
            return E.get(e);
          },
          _ = function (e, t) {
            t >= j && (j = t + 1), A.set(e, t), E.set(t, e);
          },
          I = "style[" + C + '][data-styled-version="5.3.11"]',
          R = new RegExp(
            "^" + C + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
          ),
          M = function (e, t, r) {
            for (var a, n = r.split(","), o = 0, s = n.length; o < s; o++)
              (a = n[o]) && e.registerName(t, a);
          },
          N = function (e, t) {
            for (
              var r = (t.textContent || "").split("/*!sc*/\n"),
                a = [],
                n = 0,
                o = r.length;
              n < o;
              n++
            ) {
              var s = r[n].trim();
              if (s) {
                var i = s.match(R);
                if (i) {
                  var l = 0 | parseInt(i[1], 10),
                    c = i[2];
                  0 !== l &&
                    (_(c, l), M(e, c, i[3]), e.getTag().insertRules(l, a)),
                    (a.length = 0);
                } else a.push(s);
              }
            }
          },
          D = function () {
            return r.nc;
          },
          T = function (e) {
            var t = document.head,
              r = e || t,
              a = document.createElement("style"),
              n = (function (e) {
                for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                  var a = t[r];
                  if (a && 1 === a.nodeType && a.hasAttribute(C)) return a;
                }
              })(r),
              o = void 0 !== n ? n.nextSibling : null;
            a.setAttribute(C, "active"),
              a.setAttribute("data-styled-version", "5.3.11");
            var s = D();
            return s && a.setAttribute("nonce", s), r.insertBefore(a, o), a;
          },
          U = (function () {
            function e(e) {
              var t = (this.element = T(e));
              t.appendChild(document.createTextNode("")),
                (this.sheet = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (
                    var t = document.styleSheets, r = 0, a = t.length;
                    r < a;
                    r++
                  ) {
                    var n = t[r];
                    if (n.ownerNode === e) return n;
                  }
                  x(17);
                })(t)),
                (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                try {
                  return this.sheet.insertRule(t, e), this.length++, !0;
                } catch (e) {
                  return !1;
                }
              }),
              (t.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--;
              }),
              (t.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText
                  ? t.cssText
                  : "";
              }),
              e
            );
          })(),
          Z = (function () {
            function e(e) {
              var t = (this.element = T(e));
              (this.nodes = t.childNodes), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                  var r = document.createTextNode(t),
                    a = this.nodes[e];
                  return (
                    this.element.insertBefore(r, a || null), this.length++, !0
                  );
                }
                return !1;
              }),
              (t.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : "";
              }),
              e
            );
          })(),
          H = (function () {
            function e(e) {
              (this.rules = []), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                return (
                  e <= this.length &&
                  (this.rules.splice(e, 0, t), this.length++, !0)
                );
              }),
              (t.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.rules[e] : "";
              }),
              e
            );
          })(),
          F = S,
          $ = { isServer: !S, useCSSOMInjection: !k },
          z = (function () {
            function e(e, t, r) {
              void 0 === e && (e = b),
                void 0 === t && (t = {}),
                (this.options = m({}, $, {}, e)),
                (this.gs = t),
                (this.names = new Map(r)),
                (this.server = !!e.isServer),
                !this.server &&
                  S &&
                  F &&
                  ((F = !1),
                  (function (e) {
                    for (
                      var t = document.querySelectorAll(I), r = 0, a = t.length;
                      r < a;
                      r++
                    ) {
                      var n = t[r];
                      n &&
                        "active" !== n.getAttribute(C) &&
                        (N(e, n), n.parentNode && n.parentNode.removeChild(n));
                    }
                  })(this));
            }
            e.registerId = function (e) {
              return L(e);
            };
            var t = e.prototype;
            return (
              (t.reconstructWithOptions = function (t, r) {
                return (
                  void 0 === r && (r = !0),
                  new e(
                    m({}, this.options, {}, t),
                    this.gs,
                    (r && this.names) || void 0
                  )
                );
              }),
              (t.allocateGSInstance = function (e) {
                return (this.gs[e] = (this.gs[e] || 0) + 1);
              }),
              (t.getTag = function () {
                return (
                  this.tag ||
                  (this.tag =
                    ((r = (t = this.options).isServer),
                    (a = t.useCSSOMInjection),
                    (n = t.target),
                    (e = r ? new H(n) : a ? new U(n) : new Z(n)),
                    new P(e)))
                );
                var e, t, r, a, n;
              }),
              (t.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t);
              }),
              (t.registerName = function (e, t) {
                if ((L(e), this.names.has(e))) this.names.get(e).add(t);
                else {
                  var r = new Set();
                  r.add(t), this.names.set(e, r);
                }
              }),
              (t.insertRules = function (e, t, r) {
                this.registerName(e, t), this.getTag().insertRules(L(e), r);
              }),
              (t.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear();
              }),
              (t.clearRules = function (e) {
                this.getTag().clearGroup(L(e)), this.clearNames(e);
              }),
              (t.clearTag = function () {
                this.tag = void 0;
              }),
              (t.toString = function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), r = t.length, a = "", n = 0;
                    n < r;
                    n++
                  ) {
                    var o = O(n);
                    if (void 0 !== o) {
                      var s = e.names.get(o),
                        i = t.getGroup(n);
                      if (s && i && s.size) {
                        var l = C + ".g" + n + '[id="' + o + '"]',
                          c = "";
                        void 0 !== s &&
                          s.forEach(function (e) {
                            e.length > 0 && (c += e + ",");
                          }),
                          (a += "" + i + l + '{content:"' + c + '"}/*!sc*/\n');
                      }
                    }
                  }
                  return a;
                })(this);
              }),
              e
            );
          })(),
          q = /(a)(d)/gi,
          B = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97));
          };
        function V(e) {
          var t,
            r = "";
          for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = B(t % 52) + r;
          return (B(t % 52) + r).replace(q, "$1-$2");
        }
        var G = function (e, t) {
            for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
            return e;
          },
          Y = function (e) {
            return G(5381, e);
          };
        function W(e) {
          for (var t = 0; t < e.length; t += 1) {
            var r = e[t];
            if (y(r) && !w(r)) return !1;
          }
          return !0;
        }
        var X = Y("5.3.11"),
          K = (function () {
            function e(e, t, r) {
              (this.rules = e),
                (this.staticRulesId = ""),
                (this.isStatic = (void 0 === r || r.isStatic) && W(e)),
                (this.componentId = t),
                (this.baseHash = G(X, t)),
                (this.baseStyle = r),
                z.registerId(t);
            }
            return (
              (e.prototype.generateAndInjectStyles = function (e, t, r) {
                var a = this.componentId,
                  n = [];
                if (
                  (this.baseStyle &&
                    n.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                  this.isStatic && !r.hash)
                )
                  if (
                    this.staticRulesId &&
                    t.hasNameForId(a, this.staticRulesId)
                  )
                    n.push(this.staticRulesId);
                  else {
                    var o = pe(this.rules, e, t, r).join(""),
                      s = V(G(this.baseHash, o) >>> 0);
                    if (!t.hasNameForId(a, s)) {
                      var i = r(o, "." + s, void 0, a);
                      t.insertRules(a, s, i);
                    }
                    n.push(s), (this.staticRulesId = s);
                  }
                else {
                  for (
                    var l = this.rules.length,
                      c = G(this.baseHash, r.hash),
                      u = "",
                      d = 0;
                    d < l;
                    d++
                  ) {
                    var f = this.rules[d];
                    if ("string" == typeof f) u += f;
                    else if (f) {
                      var m = pe(f, e, t, r),
                        h = Array.isArray(m) ? m.join("") : m;
                      (c = G(c, h + d)), (u += h);
                    }
                  }
                  if (u) {
                    var p = V(c >>> 0);
                    if (!t.hasNameForId(a, p)) {
                      var g = r(u, "." + p, void 0, a);
                      t.insertRules(a, p, g);
                    }
                    n.push(p);
                  }
                }
                return n.join(" ");
              }),
              e
            );
          })(),
          J = /^\s*\/\/.*$/gm,
          Q = [":", "[", ".", "#"];
        function ee(e) {
          var t,
            r,
            a,
            n,
            o = void 0 === e ? b : e,
            s = o.options,
            i = void 0 === s ? b : s,
            c = o.plugins,
            u = void 0 === c ? g : c,
            d = new l.a(i),
            f = [],
            m = (function (e) {
              function t(t) {
                if (t)
                  try {
                    e(t + "}");
                  } catch (e) {}
              }
              return function (r, a, n, o, s, i, l, c, u, d) {
                switch (r) {
                  case 1:
                    if (0 === u && 64 === a.charCodeAt(0))
                      return e(a + ";"), "";
                    break;
                  case 2:
                    if (0 === c) return a + "/*|*/";
                    break;
                  case 3:
                    switch (c) {
                      case 102:
                      case 112:
                        return e(n[0] + a), "";
                      default:
                        return a + (0 === d ? "/*|*/" : "");
                    }
                  case -2:
                    a.split("/*|*/}").forEach(t);
                }
              };
            })(function (e) {
              f.push(e);
            }),
            h = function (e, a, o) {
              return (0 === a && -1 !== Q.indexOf(o[r.length])) || o.match(n)
                ? e
                : "." + t;
            };
          function p(e, o, s, i) {
            void 0 === i && (i = "&");
            var l = e.replace(J, ""),
              c = o && s ? s + " " + o + " { " + l + " }" : l;
            return (
              (t = i),
              (r = o),
              (a = new RegExp("\\" + r + "\\b", "g")),
              (n = new RegExp("(\\" + r + "\\b){2,}")),
              d(s || !o ? "" : o, c)
            );
          }
          return (
            d.use(
              [].concat(u, [
                function (e, t, n) {
                  2 === e &&
                    n.length &&
                    n[0].lastIndexOf(r) > 0 &&
                    (n[0] = n[0].replace(a, h));
                },
                m,
                function (e) {
                  if (-2 === e) {
                    var t = f;
                    return (f = []), t;
                  }
                },
              ])
            ),
            (p.hash = u.length
              ? u
                  .reduce(function (e, t) {
                    return t.name || x(15), G(e, t.name);
                  }, 5381)
                  .toString()
              : ""),
            p
          );
        }
        var te = o.a.createContext(),
          re = (te.Consumer, o.a.createContext()),
          ae = (re.Consumer, new z()),
          ne = ee();
        function oe() {
          return Object(n.useContext)(te) || ae;
        }
        function se() {
          return Object(n.useContext)(re) || ne;
        }
        function ie(e) {
          var t = Object(n.useState)(e.stylisPlugins),
            r = t[0],
            a = t[1],
            s = oe(),
            l = Object(n.useMemo)(
              function () {
                var t = s;
                return (
                  e.sheet
                    ? (t = e.sheet)
                    : e.target &&
                      (t = t.reconstructWithOptions({ target: e.target }, !1)),
                  e.disableCSSOMInjection &&
                    (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                  t
                );
              },
              [e.disableCSSOMInjection, e.sheet, e.target]
            ),
            c = Object(n.useMemo)(
              function () {
                return ee({
                  options: { prefix: !e.disableVendorPrefixes },
                  plugins: r,
                });
              },
              [e.disableVendorPrefixes, r]
            );
          return (
            Object(n.useEffect)(
              function () {
                i()(r, e.stylisPlugins) || a(e.stylisPlugins);
              },
              [e.stylisPlugins]
            ),
            o.a.createElement(
              te.Provider,
              { value: l },
              o.a.createElement(re.Provider, { value: c }, e.children)
            )
          );
        }
        var le = (function () {
            function e(e, t) {
              var r = this;
              (this.inject = function (e, t) {
                void 0 === t && (t = ne);
                var a = r.name + t.hash;
                e.hasNameForId(r.id, a) ||
                  e.insertRules(r.id, a, t(r.rules, a, "@keyframes"));
              }),
                (this.toString = function () {
                  return x(12, String(r.name));
                }),
                (this.name = e),
                (this.id = "sc-keyframes-" + e),
                (this.rules = t);
            }
            return (
              (e.prototype.getName = function (e) {
                return void 0 === e && (e = ne), this.name + e.hash;
              }),
              e
            );
          })(),
          ce = /([A-Z])/,
          ue = /([A-Z])/g,
          de = /^ms-/,
          fe = function (e) {
            return "-" + e.toLowerCase();
          };
        function me(e) {
          return ce.test(e) ? e.replace(ue, fe).replace(de, "-ms-") : e;
        }
        var he = function (e) {
          return null == e || !1 === e || "" === e;
        };
        function pe(e, t, r, a) {
          if (Array.isArray(e)) {
            for (var n, o = [], s = 0, i = e.length; s < i; s += 1)
              "" !== (n = pe(e[s], t, r, a)) &&
                (Array.isArray(n) ? o.push.apply(o, n) : o.push(n));
            return o;
          }
          return he(e)
            ? ""
            : w(e)
            ? "." + e.styledComponentId
            : y(e)
            ? "function" != typeof (l = e) ||
              (l.prototype && l.prototype.isReactComponent) ||
              !t
              ? e
              : pe(e(t), t, r, a)
            : e instanceof le
            ? r
              ? (e.inject(r, a), e.getName(a))
              : e
            : p(e)
            ? (function e(t, r) {
                var a,
                  n,
                  o = [];
                for (var s in t)
                  t.hasOwnProperty(s) &&
                    !he(t[s]) &&
                    ((Array.isArray(t[s]) && t[s].isCss) || y(t[s])
                      ? o.push(me(s) + ":", t[s], ";")
                      : p(t[s])
                      ? o.push.apply(o, e(t[s], s))
                      : o.push(
                          me(s) +
                            ": " +
                            ((a = s),
                            (null == (n = t[s]) ||
                            "boolean" == typeof n ||
                            "" === n
                              ? ""
                              : "number" != typeof n ||
                                0 === n ||
                                a in c.a ||
                                a.startsWith("--")
                              ? String(n).trim()
                              : n + "px") + ";")
                        ));
                return r ? [r + " {"].concat(o, ["}"]) : o;
              })(e)
            : e.toString();
          var l;
        }
        var ge = function (e) {
          return Array.isArray(e) && (e.isCss = !0), e;
        };
        function be(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          return y(e) || p(e)
            ? ge(pe(h(g, [e].concat(r))))
            : 0 === r.length && 1 === e.length && "string" == typeof e[0]
            ? e
            : ge(pe(h(e, r)));
        }
        new Set();
        var ye = function (e, t, r) {
            return (
              void 0 === r && (r = b),
              (e.theme !== r.theme && e.theme) || t || r.theme
            );
          },
          ve = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
          we = /(^-|-$)/g;
        function Ce(e) {
          return e.replace(ve, "-").replace(we, "");
        }
        var Se = function (e) {
          return V(Y(e) >>> 0);
        };
        function ke(e) {
          return "string" == typeof e && !0;
        }
        var xe = function (e) {
            return (
              "function" == typeof e ||
              ("object" == typeof e && null !== e && !Array.isArray(e))
            );
          },
          Pe = function (e) {
            return (
              "__proto__" !== e && "constructor" !== e && "prototype" !== e
            );
          };
        function Ae(e, t, r) {
          var a = e[r];
          xe(t) && xe(a) ? Ee(a, t) : (e[r] = t);
        }
        function Ee(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            r[a - 1] = arguments[a];
          for (var n = 0, o = r; n < o.length; n++) {
            var s = o[n];
            if (xe(s)) for (var i in s) Pe(i) && Ae(e, s[i], i);
          }
          return e;
        }
        var je = o.a.createContext();
        je.Consumer;
        var Le = {};
        function Oe(e, t, r) {
          var a = w(e),
            s = !ke(e),
            i = t.attrs,
            l = void 0 === i ? g : i,
            c = t.componentId,
            d =
              void 0 === c
                ? (function (e, t) {
                    var r = "string" != typeof e ? "sc" : Ce(e);
                    Le[r] = (Le[r] || 0) + 1;
                    var a = r + "-" + Se("5.3.11" + r + Le[r]);
                    return t ? t + "-" + a : a;
                  })(t.displayName, t.parentComponentId)
                : c,
            h = t.displayName,
            p =
              void 0 === h
                ? (function (e) {
                    return ke(e) ? "styled." + e : "Styled(" + v(e) + ")";
                  })(e)
                : h,
            C =
              t.displayName && t.componentId
                ? Ce(t.displayName) + "-" + t.componentId
                : t.componentId || d,
            S =
              a && e.attrs
                ? Array.prototype.concat(e.attrs, l).filter(Boolean)
                : l,
            k = t.shouldForwardProp;
          a &&
            e.shouldForwardProp &&
            (k = t.shouldForwardProp
              ? function (r, a, n) {
                  return (
                    e.shouldForwardProp(r, a, n) && t.shouldForwardProp(r, a, n)
                  );
                }
              : e.shouldForwardProp);
          var x,
            P = new K(r, C, a ? e.componentStyle : void 0),
            A = P.isStatic && 0 === l.length,
            E = function (e, t) {
              return (function (e, t, r, a) {
                var o = e.attrs,
                  s = e.componentStyle,
                  i = e.defaultProps,
                  l = e.foldedComponentIds,
                  c = e.shouldForwardProp,
                  d = e.styledComponentId,
                  f = e.target,
                  h = (function (e, t, r) {
                    void 0 === e && (e = b);
                    var a = m({}, t, { theme: e }),
                      n = {};
                    return (
                      r.forEach(function (e) {
                        var t,
                          r,
                          o,
                          s = e;
                        for (t in (y(s) && (s = s(a)), s))
                          a[t] = n[t] =
                            "className" === t
                              ? ((r = n[t]),
                                (o = s[t]),
                                r && o ? r + " " + o : r || o)
                              : s[t];
                      }),
                      [a, n]
                    );
                  })(ye(t, Object(n.useContext)(je), i) || b, t, o),
                  p = h[0],
                  g = h[1],
                  v = (function (e, t, r, a) {
                    var n = oe(),
                      o = se();
                    return t
                      ? e.generateAndInjectStyles(b, n, o)
                      : e.generateAndInjectStyles(r, n, o);
                  })(s, a, p),
                  w = r,
                  C = g.$as || t.$as || g.as || t.as || f,
                  S = ke(C),
                  k = g !== t ? m({}, t, {}, g) : t,
                  x = {};
                for (var P in k)
                  "$" !== P[0] &&
                    "as" !== P &&
                    ("forwardedAs" === P
                      ? (x.as = k[P])
                      : (c ? c(P, u.a, C) : !S || Object(u.a)(P)) &&
                        (x[P] = k[P]));
                return (
                  t.style &&
                    g.style !== t.style &&
                    (x.style = m({}, t.style, {}, g.style)),
                  (x.className = Array.prototype
                    .concat(l, d, v !== d ? v : null, t.className, g.className)
                    .filter(Boolean)
                    .join(" ")),
                  (x.ref = w),
                  Object(n.createElement)(C, x)
                );
              })(x, e, t, A);
            };
          return (
            (E.displayName = p),
            ((x = o.a.forwardRef(E)).attrs = S),
            (x.componentStyle = P),
            (x.displayName = p),
            (x.shouldForwardProp = k),
            (x.foldedComponentIds = a
              ? Array.prototype.concat(
                  e.foldedComponentIds,
                  e.styledComponentId
                )
              : g),
            (x.styledComponentId = C),
            (x.target = a ? e.target : e),
            (x.withComponent = function (e) {
              var a = t.componentId,
                n = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    a,
                    n = {},
                    o = Object.keys(e);
                  for (a = 0; a < o.length; a++)
                    (r = o[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                  return n;
                })(t, ["componentId"]),
                o = a && a + "-" + (ke(e) ? e : Ce(v(e)));
              return Oe(e, m({}, n, { attrs: S, componentId: o }), r);
            }),
            Object.defineProperty(x, "defaultProps", {
              get: function () {
                return this._foldedDefaultProps;
              },
              set: function (t) {
                this._foldedDefaultProps = a ? Ee({}, e.defaultProps, t) : t;
              },
            }),
            Object.defineProperty(x, "toString", {
              value: function () {
                return "." + x.styledComponentId;
              },
            }),
            s &&
              f()(x, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
              }),
            x
          );
        }
        var _e = function (e) {
          return (function e(t, r, n) {
            if ((void 0 === n && (n = b), !Object(a.isValidElementType)(r)))
              return x(1, String(r));
            var o = function () {
              return t(r, n, be.apply(void 0, arguments));
            };
            return (
              (o.withConfig = function (a) {
                return e(t, r, m({}, n, {}, a));
              }),
              (o.attrs = function (a) {
                return e(
                  t,
                  r,
                  m({}, n, {
                    attrs: Array.prototype.concat(n.attrs, a).filter(Boolean),
                  })
                );
              }),
              o
            );
          })(Oe, e);
        };
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "textPath",
          "tspan",
        ].forEach(function (e) {
          _e[e] = _e(e);
        });
        !(function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = W(e)),
              z.registerId(this.componentId + 1);
          }
          var t = e.prototype;
          (t.createStyles = function (e, t, r, a) {
            var n = a(pe(this.rules, t, r, a).join(""), ""),
              o = this.componentId + e;
            r.insertRules(o, o, n);
          }),
            (t.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (t.renderStyles = function (e, t, r, a) {
              e > 2 && z.registerId(this.componentId + e),
                this.removeStyles(e, r),
                this.createStyles(e, t, r, a);
            });
        })();
        !(function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString();
              if (!t) return "";
              var r = D();
              return (
                "<style " +
                [
                  r && 'nonce="' + r + '"',
                  C + '="true"',
                  'data-styled-version="5.3.11"',
                ]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                t +
                "</style>"
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? x(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return x(2);
                var r =
                    (((t = {})[C] = ""),
                    (t["data-styled-version"] = "5.3.11"),
                    (t.dangerouslySetInnerHTML = {
                      __html: e.instance.toString(),
                    }),
                    t),
                  a = D();
                return (
                  a && (r.nonce = a),
                  [o.a.createElement("style", m({}, r, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new z({ isServer: !0 })),
              (this.sealed = !1);
          }
          var t = e.prototype;
          (t.collectStyles = function (e) {
            return this.sealed
              ? x(2)
              : o.a.createElement(ie, { sheet: this.instance }, e);
          }),
            (t.interleaveWithNodeStream = function (e) {
              return x(3);
            });
        })();
        t.a = _e;
      }.call(this, r("8oxB")));
    },
  },
]);
